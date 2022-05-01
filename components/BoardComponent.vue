<template>
    <div class="board">
        <SquareBoard v-for="square in squares" :key="square.key" :data="square" @click.native="$emit('setSquare',square)" />
    </div>
</template>

<script>
import SquareBoard from '@/components/SquareBoard'

export default {
    name: 'BoardComponent',
    components:[SquareBoard],
    props:{
        playerTurn:{
            type: String,
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