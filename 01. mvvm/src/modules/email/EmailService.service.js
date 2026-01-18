import { BaseService } from '@/infra/http/BaseService.js'

export class EmailService extends BaseService {
  async sendEmail(data = {}) {
    return this.httpClient.post('/api/email/sendEmail', data)
  }
}
