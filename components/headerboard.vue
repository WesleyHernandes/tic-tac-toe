<template>
    <div class="header">
        <p v-if="playerTurn" class="text-white text-center">Player Turn: {{playerTurn}}</p>
        <p v-if="playerWinner" class="text-white text-center">Player Winner: {{playerWinner}}</p>
    </div>
</template>

<script>
export default {
    name: 'HeaderBoard',
    props:{
        playerTurn:{
            type: String,
            default: null
        },
        playerWinner:{
            type: String,
            default: null
        }
    }
}
</script>

<style lang="postcss" scoped>

</style>