import { ProtocolService } from '@/modules/protocol/services/Protocol.service.js'
import { ref } from 'vue'
import { useNewProtocolApplicantStore } from '@/modules/protocol/stores/useNewProtocolApplicant.store.js'
import { useRouter } from 'vue-router'
import { FakeClient } from '@/infra/http/FakeClient.js'

export function useNewProtocolApplicantViewModel() {
  const isLoading = ref(false)
  const service = new ProtocolService(new FakeClient())
  const store = useNewProtocolApplicantStore()
  const router = useRouter()

  async function addApplicant() {
    try {
      isLoading.value = true
      await service.updateProtocol({
        name: store.formValues.name,
        email: store.formValues.email,
        document: store.formValues.document,
      })

      await router.push({ path: '/new-protocol/finished' })
    } finally {
      isLoading.value = false
    }
  }

  return {
    // states
    isLoading,
    formValues: store.formValues,

    // methods
    addApplicant,
  }
}
