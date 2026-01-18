import { defineStore } from 'pinia'

export const useNewProtocolStore = defineStore('newProtocol', {
  state: () => ({
    formValues: {
      state: null,
      city: null,
      protocolType: null,
    },
  }),
})
