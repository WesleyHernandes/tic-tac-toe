<template>
    <div class="modal" :class="[{'active':(playerWinner != null)}]">
        <div class="overlay"></div>
        <div class="content">
            <h2 class="title">{{ titleMessage }}</h2>
            
            <div v-if="playerWinner" class="winner">
                <component :is="iconWinner" class="w-10 h-10 mr-4" fill="#1D84B5" />
                <p class="text">GANHOU A RODADA</p>
            </div>

            <div class="actions">
                <button class="action bg-iconX" @click="$store.dispatch('data/endGame')">SAIR</button>
                <button class="action bg-iconO" @click="$store.dispatch('data/setPlayerWinner', null)">PRÓXIMA RODADA</button>
            </div>
        </div>
    </div>
</template>

<script>
import IconX from '@/components/icons/IconX'
import IconO from '@/components/icons/IconO'

export default {
    name: 'ModalRestart',
    components:{ IconX, IconO },
    computed:{
        playerWinner(){
            return this.$store.state.data.playerWinner
        },
        playerChoose(){
            return this.$store.state.data.playerChoose
        },
        titleMessage(){
            return (this.playerWinner === this.playerChoose)? "VOCÊ GANHOU" : "VOCÊ PERDEU"
        },
        iconWinner(){
            return (this.playerWinner === 'x')? "IconX" : "IconO"
        }
    }
}
</script>

<style lang="postcss" scoped>
    .modal{
        @apply
        fixed
        flex
        items-end
        justify-center
        w-full
        h-full
        top-0
        left-0
        transition
        ease-in-out
        opacity-0
        pointer-events-none;

        & .overlay{
            @apply
            absolute
            z-0
            flex
            w-full
            h-full
            top-0
            left-0
            bg-black
            bg-opacity-60;
        }

        & .content{
            @apply
            relative
            z-10
            flex
            flex-col
            items-center
            w-full
            px-4
            py-10
            bg-primary;

            & .title{
                @apply
                mb-5
                text-white
                font-game
                font-semibold
                text-3xl
                tracking-wider;
            }

            & .winner{
                @apply
                flex
                mb-5
                items-center
                justify-center;

                & .text{
                    @apply
                    text-secundary
                    text-lg
                    font-bold
                    tracking-wider;
                }
            }

            & .actions{
                @apply
                flex
                items-center
                justify-center
                gap-4;

                & .action{
                    @apply
                    p-4
                    rounded-md
                    text-primary
                    font-semibold
                    tracking-wide;
                }
            }
        }

        &.active{
            @apply
            opacity-100
            pointer-events-auto;
        }    
    }
</style>