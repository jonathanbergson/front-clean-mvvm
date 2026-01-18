import { useNewProtocolApplicantStore } from '@/modules/protocol/stores/useNewProtocolApplicant.store.js'
import { useNewProtocolStore } from '@/modules/protocol/stores/useNewProtocol.store.js'

export function useNewProtocolFinishedViewModel() {
  const newProtocolStore = useNewProtocolStore()
  const newProtocolApplicantStore = useNewProtocolApplicantStore()

  function resetStores() {
    newProtocolStore.$reset()
    newProtocolApplicantStore.$reset()
  }

  return {
    // methods
    resetStores,
  }
}
