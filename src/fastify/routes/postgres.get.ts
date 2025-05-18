import { connectToPostgres } from '@app/libs/pg.js'
import { route } from '@app/routes/postgres.get.js'
import { ApiResponse } from '@app/utils/routes.js'
import { RouteOptions } from 'fastify'

export const routeOpt: RouteOptions = {
  method: 'GET',
  url: '/postgres',
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
      const client = await connectToPostgres()
      json = await route(client)
    } catch (error: unknown) {
      json = {
        status: 'ERROR',
        message: error instanceof Error ? error.message : String(error),
      }
    }

    reply.send(json)
  },
}
