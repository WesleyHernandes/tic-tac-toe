<template>
  <div class="app">
    <div class="box">
      <HeaderBoard :player-turn="playerTurn" />
      <Board :player-turn="playerTurn" :squares="squares" />
      <ScoreBoard />
    </div>
  </div>
</template>

<script>
/*
References:
https://www.frontendmentor.io/challenges/tic-tac-toe-game-Re7ZF_E2v
https://www.codebrainer.com/blog/tic-tac-toe-javascript-game
*/

import HeaderBoard from '@/components/headerboard'
import Board from '@/components/board'
import ScoreBoard from '@/components/scoreboard'

export default {
  name: 'IndexPage',
  components:[
    HeaderBoard,
    Board,
    ScoreBoard
  ],
  data(){
    return{
      playerWinner: null,
      playerTurn: null,
      squares:[
        { "key":0, "x":false, "o":false },
        { "key":1, "x":false, "o":false },
        { "key":2, "x":false, "o":false },
        { "key":3, "x":false, "o":false },
        { "key":4, "x":false, "o":false },
        { "key":5, "x":false, "o":false },
        { "key":6, "x":false, "o":false },
        { "key":7, "x":false, "o":false },
        { "key":8, "x":false, "o":false }
      ],
      winningCombinations:[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
      ]
    }
  },
  methods:{
    startGame(){
      this.playerTurn = null
    },
    setSquare(){

    },
    checkWinner(){

    }
  }
}
</script>

<style lang="postcss" scoped>
  *{
    @apply
    m-0
    p-0
    box-border;
  }

  .app{
    @apply
    flex
    w-full
    min-h-screen
    flex-col
    items-center
    justify-center
    bg-blue-900;

    & .box{
      @apply
      max-w-sm
    }
  }
</style>