import { EmailService } from '@/modules/email/EmailService.service.js'
import { useSendEmailModel } from '@/modules/email/useSendEmail.model.js'
import { FakeClient } from '@/infra/http/FakeClient.js'

export function useSendEmailViewModel() {
  const service = new EmailService(new FakeClient())
  const { formValues, isLoading, sendEmail } = useSendEmailModel({ service })

  return {
    // states
    formValues,
    isLoading,

    // methods
    sendEmail,
  }
}
