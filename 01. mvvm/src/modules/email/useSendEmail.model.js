import { reactive, ref } from 'vue'

export function useSendEmailModel({
  service,
}) {
  const isLoading = ref(false)
  const formValues = reactive({
    to: "",
    subject: "",
    message: ""
  })

  async function sendEmail() {
    try {
      isLoading.value = true
      await service.sendEmail(formValues)
      $reset()
    } finally {
      isLoading.value = false
    }
  }

  function $reset() {
    formValues.to = "";
    formValues.subject = "";
    formValues.message = "";
  }

  return {
    // states
    formValues,
    isLoading,

    // methods
    sendEmail,
  }
}
