import { defineStore } from 'pinia'

export const useNewProtocolApplicantStore = defineStore('newProtocolApplicant', {
  state: () => ({
    formValues: {
      name: null,
      email: null,
      document: null,
    },
  }),
})
