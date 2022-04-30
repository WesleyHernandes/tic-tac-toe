<template>
  <div class="square">
    <IconO v-if="data.o" />
    <IconX v-else-if="data.x" />
  </div>
</template>

<script>
import IconO from '@/components/iconO.vue'
import IconX from '@/components/iconX.vue'

export default {
  name: 'SquareComponent',
  components:[ IconO, IconX ],
  props:{
    data:{
      type: Object,
      default(){
        return {}
      }
    }
  }
}
</script>

<style lang="postcss" scoped>
  .square{
    @apply
    flex
    w-24
    h-24
    text-black
    text-base
    items-center
    justify-center
    bg-gray-400;
  }
</style>