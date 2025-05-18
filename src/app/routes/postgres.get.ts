import { ApiResponse } from '@app/utils/routes.js'
import { Client } from 'pg'

export async function route(client: Client): Promise<ApiResponse> {
  const json: ApiResponse = {
    status: 'OK',
    message: 'PostgreSQL is healthy',
  }

  try {
    await client.query('SELECT 1')
  } catch (error: unknown) {
    json.status = 'ERROR'
    json.message = error instanceof Error ? error.message : String(error)
  }

  return json
}
