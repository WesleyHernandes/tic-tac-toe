<template>
    <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="11" y="25" width="20" height="120" rx="10" transform="rotate(-45 11 25)" :fill="fill"/>
        <rect x="96" y="11" width="20" height="120" rx="10" transform="rotate(45 96 11)" :fill="fill"/>
    </svg>
</template>

<script>
export default {
    name: 'IconX',
    props: {
        fill:{
            type: String,
            default: '#F18701'
        }
    }
}
</script>

<style>

</style>