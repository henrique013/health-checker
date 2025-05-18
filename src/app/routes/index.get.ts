import { ApiResponse } from '@app/utils/routes.js'

export function route(): ApiResponse {
  return {
    status: 'OK',
    message: 'API is healthy',
  }
}
