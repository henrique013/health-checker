import env from '@app/env.js'
import { Client } from 'pg'

export async function connectToPostgres(): Promise<Client> {
  const client = new Client({
    host: env.PG_HOST,
    port: env.PG_PORT,
    user: env.PG_USER,
    password: env.PG_PASS,
    database: env.PG_DB,
  })

  await client.connect()

  return client
}
