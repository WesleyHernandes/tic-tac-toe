<template>
    <div class="player-choose">
        <h1 class="title">ESCOLHA UMA OPÇÃO</h1>

        <div class="options">
            <div class="option" :class="[{'active':(playerChoose === 'x')}]" @click="toggleChoose('x')">
                <IconX class="icon" :fill="(playerChoose === 'x')? '#0A2239' : '#1D84B5'" />
            </div>
            <div class="option" :class="[{'active':(playerChoose === 'o')}]" @click="toggleChoose('o')">
                <IconO class="icon" :fill="(playerChoose === 'o')? '#0A2239' : '#1D84B5'" />
            </div>
        </div>

        <p class="warning">Lembre-se "X" joga primeiro</p>
    </div>
</template>

<script>
import IconX from '@/components/icons/IconX'
import IconO from '@/components/icons/IconO'

export default {
    name: 'ChoosePlayer',
    components:{ IconX, IconO },
    data(){
        return {
            playerChoose: 'x'
        }
    },
    methods:{
        toggleChoose(choose){
            this.playerChoose = choose
            this.$emit('playerChoose', choose)
        }
    }
}
</script>

<style lang="postcss" scoped>
    .player-choose{
        @apply
        flex
        flex-col
        items-center
        w-full
        p-4
        gap-4
        rounded-xl
        bg-secundary;

        & .title{
            @apply
            text-gray-200
            text-center
            font-bold
            text-xl
            font-game
            tracking-widest
        }

        & .options{
            @apply
            flex
            w-full
            max-w-xs
            p-1
            gap-1
            rounded-xl
            bg-primary
            items-center
            justify-center;

            & .option{
                @apply
                cursor-pointer
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

                &.active{
                    @apply
                    bg-blue-400;
                }
            }
        }

        & .warning{
            @apply
            text-white
            text-center
            font-game
            tracking-wider;
        }
    }
</style>