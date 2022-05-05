<template>
  <div class="square">
    <IconO v-if="data.o" class="w-4/6 h-4/6" fill="#0A2239" />
    <IconX v-else-if="data.x" class="w-4/6 h-4/6" />
  </div>
</template>

<script>
import IconO from '@/components/icons/IconO'
import IconX from '@/components/icons/IconX'

export default {
  name: 'SquareBoard',
  components:{ IconO, IconX },
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
    cursor-pointer
    flex
    w-24
    h-24
    text-black
    text-base
    rounded-xl
    items-center
    justify-center
    bg-secundary;
  }
</style>