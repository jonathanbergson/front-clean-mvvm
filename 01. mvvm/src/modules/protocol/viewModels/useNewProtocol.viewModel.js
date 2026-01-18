import { ProtocolService } from '@/modules/protocol/services/Protocol.service.js'
import { ref } from 'vue'
import { useNewProtocolStore } from '@/modules/protocol/stores/useNewProtocol.store.js'
import { useRouter } from 'vue-router'
import { FakeClient } from '@/infra/http/FakeClient.js'

export function useNewProtocolViewModel() {
  const isLoading = ref(false)
  const service = new ProtocolService(new FakeClient())
  const store = useNewProtocolStore()
  const router = useRouter()

  async function createProtocol() {
    try {
      isLoading.value = true
      await service.createProtocol({
        state: store.formValues.state,
        city: store.formValues.city,
        protocolType: store.formValues.protocolType,
      })

      await router.push({ path: '/new-protocol/applicant' })
    } finally {
      isLoading.value = false
    }
  }

  return {
    // states
    isLoading,
    formValues: store.formValues,

    // methods
    createProtocol,
  }
}
