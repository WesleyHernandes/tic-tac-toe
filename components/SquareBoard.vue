<template>
  <div class="square">
    <IconO v-if="data.o" class="w-4/5 h-4/5" />
    <IconX v-else-if="data.x" class="w-4/5 h-4/5" />
  </div>
</template>

<script>
import IconO from '@/components/IconO'
import IconX from '@/components/IconX'

export default {
  name: 'SquareBoard',
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
    background-color: #5B85AA;
    
    @apply
    cursor-pointer
    flex
    w-24
    h-24
    text-black
    text-base
    rounded-xl
    items-center
    justify-center;
  }
</style>