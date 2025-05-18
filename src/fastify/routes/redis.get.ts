import { connectToRedis } from '@app/libs/ioredis.js'
import { route } from '@app/routes/redis.get.js'
import { ApiResponse } from '@app/utils/routes.js'
import { RouteOptions } from 'fastify'

export const routeOpt: RouteOptions = {
  method: 'GET',
  url: '/redis',
  schema: {
    response: {
      200: {
        type: 'object',
        properties: {
          status: { type: 'string', enum: ['OK', 'ERROR'] },
          message: { type: 'string' },
        },
        required: ['status', 'message'],
      },
    },
  },
  handler: async function (_request, reply) {
    let json: ApiResponse

    try {
      const redis = connectToRedis()
      json = await route(redis)
    } catch (error: unknown) {
      json = {
        status: 'ERROR',
        message: error instanceof Error ? error.message : String(error),
      }
    }

    reply.send(json)
  },
}
