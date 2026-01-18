<script setup>
import { useNewProtocolFinishedViewModel } from '@/modules/protocol/viewModels/useNewProtocolFinished.viewModel.js'
import { onMounted } from 'vue'

const { resetStores } = useNewProtocolFinishedViewModel()

onMounted(() => {
  resetStores()
})
</script>

<template>
  <div>
    <h2>Finalizado com sucesso!</h2>
  </div>
</template>
