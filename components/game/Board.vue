<template>
    <div class="board">
        <Square v-for="square in squares" :key="square.key" :data="square" @click.native="$emit('setSquare',square)" />
    </div>
</template>

<script>
import Square from '@/components/game/Square'

export default {
    name: 'BoardComponent',
    components:{ Square },
    props:{
        squares:{
            type: Array,
            default(){
                return []
            }
        }
    },
    computed:{
        playerTurn(){
            return this.$store.state.data.playerTurn
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