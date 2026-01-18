import { BaseService } from '@/infra/http/BaseService.js'

export class ProtocolService extends BaseService {
  async createProtocol(data = {}) {
    return this.httpClient.post('http://localhost:8080/protocols', data)
  }

  async updateProtocol(data = {}) {
    return this.httpClient.put('http://localhost:8080/protocols', data)
  }
}
