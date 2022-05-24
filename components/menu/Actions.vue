<template>
    <div class="actions">
        <button class="action bg-iconX" @click="startGame('pve')">NOVO JOGO (VS CPU)</button>
        <button class="action bg-blue-400" @click="startGame('pvp')">NOVO JOGO (VS JOGADOR)</button>
    </div>
</template>

<script>
export default {
    name: 'ActionsPlayer',
    methods:{
        startGame(type){
            this.$store.dispatch('data/setGameType', type)
            this.$store.dispatch('data/toggleGameStart', true)
        }
    }
}
</script>

<style lang="postcss" scoped>
    .actions{
        @apply
        flex
        flex-col
        gap-4;

        & .action{
            @apply
            cursor-pointer
            py-4
            px-2
            text-primary
            font-bold
            tracking-wider
            rounded-md;

            &.disabled{
                @apply
                cursor-not-allowed
                bg-gray-400
                opacity-80;
            }
        }
    }
</style>