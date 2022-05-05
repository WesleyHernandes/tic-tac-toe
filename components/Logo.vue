<template>
    <div class="logo" :class="[{'justify-center':centralized}]">
        <IconX :class="iconsClass" />
        <IconO :class="iconsClass" />
    </div>
</template>

<script>
import IconX from '@/components/icons/IconX'
import IconO from '@/components/icons/IconO'

export default {
    name: 'LogoGame',
    components: { IconX, IconO },
    props:{
        iconsClass:{
            type: String,
            default: 'w-14 h-14'
        },
        centralized:{
            type: Boolean,
            default: false
        }
    }
}
</script>

<style lang="postcss" scoped>
    .logo{
        @apply
        flex
        w-full
        items-center;
    }
</style>