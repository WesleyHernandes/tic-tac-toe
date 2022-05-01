<template>
    <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path :fill="fill" class="icon" d="M108 59.5C108 85.7335 86.7335 107 60.5 107C34.2665 107 13 85.7335 13 59.5C13 33.2665 34.2665 12 60.5 12C86.7335 12 108 33.2665 108 59.5ZM30.6178 59.5C30.6178 76.0035 43.9965 89.3822 60.5 89.3822C77.0035 89.3822 90.3822 76.0035 90.3822 59.5C90.3822 42.9965 77.0035 29.6178 60.5 29.6178C43.9965 29.6178 30.6178 42.9965 30.6178 59.5Z" />
    </svg>
</template>

<script>
export default {
    name: 'IconO',
    props: {
        fill:{
            type: String,
            default: '#53A2BE'
        }
    }
}
</script>

<style>

</style>