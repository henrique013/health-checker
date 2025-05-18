import Fastify, { FastifyInstance } from 'fastify'
import env from '@app/env.js'

export async function up() {
  const fastify = createFastifyInstance()

  await setupRoutes(fastify)

  await listen(fastify)
}

function createFastifyInstance(): FastifyInstance {
  const level = env.API_DEBUG ? 'debug' : 'info'

  const fastify: FastifyInstance = Fastify({
    logger: {
      level,
      transport: {
        target: 'pino-pretty',
        options: {
          levelFirst: true,
          ignore: 'pid,hostname',
          colorize: true,
          singleLine: true,
        },
      },
    },
  })

  return fastify
}

async function setupRoutes(fastify: FastifyInstance) {
  fastify.route((await import('@fastify/routes/index.get.js')).routeOpt)
  fastify.route((await import('@fastify/routes/postgres.get.js')).routeOpt)
  fastify.route((await import('@fastify/routes/redis.get.js')).routeOpt)
}

async function listen(fastify: FastifyInstance) {
  try {
    await fastify.listen({ port: env.API_PORT, host: '0.0.0.0' })
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
