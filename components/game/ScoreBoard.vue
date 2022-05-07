<template>
    <div class="scoreboard">
        <div class="card bg-blue-400">
            <p class="title">X ({{ (playerChoose === 'x')? 'Você' : 'Op.' }})</p>
            <p class="value">{{ gamesWonX }}</p>
        </div>

        <div class="card bg-gray-300">
            <p class="title">RODADAS</p>
            <p class="value">{{ gameTurn }}</p>
        </div>

        <div class="card bg-iconX">
            <p class="title">O ({{ (playerChoose === 'o')? 'Você' : 'Op.' }})</p>
            <p class="value">{{ gamesWonO }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ScoreBoard',
    computed:{
        playerChoose(){
            return this.$store.state.data.playerChoose
        },
        gameTurn(){
            return this.$store.state.data.turn
        },
        gamesWonX(){
            return this.$store.state.data.gamesWonX
        },
        gamesWonO(){
            return this.$store.state.data.gamesWonO
        }
    }
}
</script>

<style lang="postcss" scoped>
    .scoreboard{
        @apply
        flex
        gap-1
        items-center
        justify-center;

        & .card{
            @apply
            flex
            flex-col
            w-1/3
            p-1
            items-center
            justify-center
            rounded-md;

            & .title{
                @apply
                text-primary
                font-game
                font-medium
                tracking-wide;
            }
            
            & .value{
                @apply
                text-primary
                font-game
                text-lg
                font-bold;
            }
        }
    }
</style>