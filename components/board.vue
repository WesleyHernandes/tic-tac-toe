<template>
    <div class="board">
        <Square v-for="square in squares" :key="square.key" :data="square" />
    </div>
</template>

<script>
import Square from '@/components/square'

export default {
    name: 'BoardComponent',
    components:[Square],
    props:{
        playerTurn:{
            type: Boolean,
            default: null
        },
        squares:{
            type: Array,
            default(){
                return []
            }
        }
    }
}
</script>

<style lang="postcss" scoped>
    .board{
        @apply
        flex
        w-full
        gap-1
        flex-wrap
        justify-center;
    }
</style>