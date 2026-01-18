import { FetchClient } from '@/infra/http/FetchClient.js'

export class FakeClient extends FetchClient {
  async post(url, data = {}, config = {}) {
    return new Promise(resolve => {
      console.log('POST', url, data, config)
      return setTimeout(() => resolve(data, config), 1000)
    })
  }

  async put(url, data = {}, config = {}) {
    return new Promise(resolve => {
      console.log('PUT', url, data, config)
      return setTimeout(() => resolve(data, config), 1000)
    })
  }
}
