import { HttpClient } from '@/infra/http/HttpClient.js'

export class FetchClient extends HttpClient {
  async get(url, config = {}) {
    const response = await fetch(url, {
      method: 'GET',
      ...config,
    })
    return response.json()
  }
}
