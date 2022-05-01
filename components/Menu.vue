<template>
    <div class="menu">
        <div class="logo">
            <IconX class="icon-x" />
            <IconO class="icon-o" />
        </div>

        <div class="player-choose">
            <h1 class="title">ESCOLHA SEU SÍMBOLO</h1>

            <div class="options">
                <div class="option">
                    <IconX class="icon" />
                </div>
                <div class="option">
                    <IconO class="icon" />
                </div>
            </div>

            <p class="warning">Lembre-se "X" joga primeiro</p>
        </div>

        <div class="actions">
            <button class="action">NOVO JOGO (VS CPU) - Em Breve</button>
            <button class="action">NOVO JOGO (VD JOGADOR)</button>
        </div>
    </div>
</template>

<script>
import IconX from '@/components/IconX'
import IconO from '@/components/IconO'

export default {
    name: 'MenuComponent',
    components:[IconX,IconO]
}
</script>

<style lang="postcss" scoped>
    .menu{
        @apply
        flex
        flex-col
        gap-4
        w-full
        max-w-app-content;

        & .logo{
            @apply
            flex
            w-full
            items-center
            justify-center;

            & .icon-x,
            & .icon-o{
                @apply
                w-14
                h-14;
            }
            & .icon-x{
                @apply text-highlight1;
            }
            &.icon-o{
                @apply text-highlight2
            }
        }

        & .player-choose{
            @apply
            flex
            flex-col
            w-full
            p-4
            gap-2
            rounded-xl
            bg-secundary;

            & .title{
                @apply
                text-gray-200
                text-center
                font-bold
                font-game
                tracking-widest
            }

            & .options{
                @apply
                flex
                w-full
                p-2
                gap-1
                rounded-xl
                bg-primary
                items-center
                justify-center;

                & .option{
                    @apply
                    flex
                    p-2
                    w-1/2
                    rounded-md
                    items-center
                    justify-center;

                    & .icon{
                        @apply
                        w-10
                        h-10
                        text-gray-400;
                    }
                }
            }
        }
    }
</style>