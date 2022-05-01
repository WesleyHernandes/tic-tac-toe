<template>
  <div class="box">
    <Header :player-turn="playerTurn" />
    <Board :player-turn="playerTurn" :squares="squares" @setSquare="setSquare" />
    <ScoreBoard />
  </div>
</template>

<script>
import Header from '@/components/game/Header'
import Board from '@/components/game/Board'
import ScoreBoard from '@/components/game/ScoreBoard'

export default {
  name: 'GameContent',
  components:{ Header, Board, ScoreBoard },
  props:{
    gameStarted:{
      type: Boolean,
      default: null
    }
  },
  data(){
    return{
      playerWinner: null,
      playerTurn: 'x',
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
    setSquare(square){
      if(this.playerTurn && !this.playerWinner){
        const turn = this.playerTurn
        const choosed = this.squares.filter(item => item.key === square.key)[0]
        if(choosed){
          choosed[turn] = true
          this.togglePlayerTurn()
          this.checkWinner()
        }
      }
    },
    checkWinner(){
      this.winningCombinations.forEach((item) => {
        let countX = 0
        let countO = 0

        item.forEach((item) => {
          const option = this.squares.filter(opt => opt.key === item)[0]
          if(option){
            countX = (option.x) ? countX + 1 : countX 
            countO = (option.o) ? countO + 1 : countO 
          }
        })

        if(countX === 3){
          this.playerWinner = 'x'
        }

        if(countO === 3){
          this.playerWinner = 'o'
        }
      })
    },
    togglePlayerTurn(){
      this.playerTurn = (this.playerTurn === 'x')? 'o' : 'x'
    }
  }
}
</script>

<style lang="postcss" scoped>
  .box{
    @apply
    flex
    flex-col
    gap-4
    w-full
    max-w-app-board;
  }
</style>