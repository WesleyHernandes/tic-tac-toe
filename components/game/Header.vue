<template>
    <div class="header">
        <div class="logo-content">
            <Logo icons-class="w-8 h-8" />
        </div>

        <p v-if="playerTurn" class="title">VEZ DO <strong>{{playerTurn}}</strong></p>
        
        <div class="button-content">
            <button class="reset" @click="$emit('toggleModalReset')">
                <IconReset svg-class="w-6 h-6 text-primary" />
            </button>
        </div>
    </div>
</template>

<script>
import Logo from '@/components/Logo'
import IconReset from '@/components/IconReset'

export default {
    name: 'HeaderBoard',
    components: {Logo, IconReset},
    props:{
        playerTurn:{
            type: String,
            default: null
        }
    }
}
</script>

<style lang="postcss" scoped>
    .header{
        @apply
        flex
        items-center
        justify-between;

        & .logo-content{
            @apply
            w-1/3;
        }

        & .title{
            @apply
            text-white
            w-1/3
            py-1
            px-2
            rounded
            font-game
            font-semibold
            text-center
            uppercase
            bg-secundary;

            & strong{
                @apply
                font-bold
            }
        }

        & .button-content{
            @apply
            flex
            w-1/3
            items-center
            justify-end;

            & .reset{
                @apply
                flex
                items-center
                justify-center
                w-12
                h-9
                rounded-md
                bg-blue-400;
            }
        }
    }
</style>