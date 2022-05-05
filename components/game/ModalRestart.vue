<template>
    <div class="modal" :class="[{'active':active}]">
        <div class="overlay"></div>
        <div class="content">
            <h2 class="title">REINICIAR JOGO</h2>
            <div class="actions">
                <button class="action bg-iconX" @click="$emit('toggleModalReset')">NÃO, CANCELAR</button>
                <button class="action bg-iconO" @click="$emit('toggleModalReset')">SIM, REINICIAR</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ModalRestart',
    props:{
        active:{
            type: Boolean,
            default: false
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