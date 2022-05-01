<template>
    <div class="menu">
        <Logo :centralized="true" />
        <Choose @playerChoose="playerChoose" />
        <Actions @startGame="startGame" />
    </div>
</template>

<script>
import Logo from '@/components/Logo'
import Choose from '@/components/menu/Choose'
import Actions from '@/components/menu/Actions'

export default {
    name: 'MenuContent',
    components:{ Logo, Choose, Actions },
    methods:{
        playerChoose(choose){
            this.$emit('playerChoose',choose)
        },
        startGame(type){
            this.$emit('startGame',type)
        }
    }
}
</script>

<style lang="postcss" scoped>
    .menu{
        @apply
        flex
        flex-col
        gap-4
        w-full
        max-w-app-menu;
    }
</style>