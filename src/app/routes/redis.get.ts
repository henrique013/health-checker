import { ApiResponse } from '@app/utils/routes.js'
import { Redis } from 'ioredis'

export async function route(redis: Redis): Promise<ApiResponse> {
  const json: ApiResponse = {
    status: 'OK',
    message: 'Redis is healthy',
  }

  try {
    await redis.ping()
  } catch (error: unknown) {
    json.status = 'ERROR'
    json.message = error instanceof Error ? error.message : String(error)
  }

  return json
}
