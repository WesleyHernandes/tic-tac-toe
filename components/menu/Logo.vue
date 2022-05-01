<template>
    <div class="logo">
        <IconX class="icon" />
        <IconO class="icon" />
    </div>
</template>

<script>
import IconX from '@/components/IconX'
import IconO from '@/components/IconO'

export default {
    name: 'LogoGame',
    components:[
        IconX,
        IconO
    ]
}
</script>

<style lang="postcss" scoped>
    .logo{
        @apply
        flex
        w-full
        items-center
        justify-center;

        & .icon{
            @apply
            w-14
            h-14;
        }
    }
</style>