import { route } from '@app/routes/index.get.js'
import { RouteOptions } from 'fastify'

export const routeOpt: RouteOptions = {
  method: 'GET',
  url: '/',
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
    const json = route()

    reply.send(json)
  },
}
