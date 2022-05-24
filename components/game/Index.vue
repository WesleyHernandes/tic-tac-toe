<template>
  <div>
    <div class="box">
      <Header @toggleModalReset="toggleModalReset" />
      <Board :player-turn="playerTurn" :squares="squares" @setSquare="setSquare" />
      <ScoreBoard />
    </div>

    <ModalRestart :active="toggleReset" @toggleModalReset="toggleModalReset" />
    <ModalWinner v-if="playerWinner" @nextTurn="nextTurn" />
    <ModalDraw v-if="draw" @nextTurn="nextTurn" />
  </div>
</template>

<script>
import Header from '@/components/game/Header'
import Board from '@/components/game/Board'
import ScoreBoard from '@/components/game/ScoreBoard'
import ModalRestart from '@/components/game/ModalRestart'
import ModalWinner from '@/components/game/ModalWinner'
import ModalDraw from '@/components/game/ModalDraw'

export default {
  name: 'GameContent',
  components:{ Header, Board, ScoreBoard, ModalRestart, ModalWinner, ModalDraw },
  data(){
    return{
      randomKeyController : 0,
      toggleReset: false,
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
      ]
    }
  },
  computed:{
    draw(){
      return this.$store.state.data.draw
    },
    countDraw(){
      return this.$store.state.data.countToDraw
    },
    gameStarted(){
      return this.$store.state.data.gameStarted
    },
    gameType(){
      return this.$store.state.data.gameType
    },
    gameTurn(){
      return this.$store.state.data.turn
    },
    gamesWonX(){
      return this.$store.state.data.gamesWonX
    },
    gamesWonO(){
      return this.$store.state.data.gamesWonO
    },
    playerTurn(){
      return this.$store.state.data.playerTurn
    },
    playerChoose(){
      return this.$store.state.data.playerChoose
    },
    playerWinner(){
      return this.$store.state.data.playerWinner
    },
    winningCombinations(){
      return this.$store.state.data.winningCombinations
    }
  },
  mounted(){
    this.checkCpuTurn()
  },
  methods:{
    toggleModalReset(){
      this.toggleReset = !this.toggleReset
    },
    setSquare(square){
      if(this.playerTurn && !this.playerWinner){
        const turn = this.playerTurn
        const choosed = this.squares.filter(item => item.key === square.key)[0]
        if(choosed && (choosed.o === false && choosed.x === false)){
          this.$store.dispatch('data/setCountToDraw')
          choosed[turn] = true
          this.togglePlayerTurn()
          this.checkWinner()
          this.checkDraw()
          this.checkCpuTurn()
        }
      }
    },
    async nextTurn(){
      await this.$store.dispatch('data/setPlayerWinner', null)
      await this.$store.dispatch('data/setDraw', false)
      await this.$store.dispatch('data/resetCountDraw')
      await this.$store.dispatch('data/setPlayerTurn', 'x')
      this.checkCpuTurn()
    },
    async resetTurn(){
      await this.$store.dispatch('data/resetCountDraw')
      await this.$store.dispatch('data/setPlayerTurn', 'x')
      this.squares.map((item) => {
        item.o = false
        item.x = false
        return null
      })
      this.checkCpuTurn()
    },
    checkCpuTurn(){
      if(!this.gameStarted && this.gameType !== "pve"){
        return
      }
      if(this.playerChoose === this.playerTurn){
        return
      }
      if(this.playerWinner || this.draw){
        return
      }
      this.cpuPlay()
    },
    async cpuPlay(){
      let randomKey = this.getRandomSquare(0, 8)
      const emptySquares = await this.squares.filter(item => (item.x === false && item.o === false))

      if(randomKey === null){
        return
      }

      if(this.randomKeyController === 10){
        this.randomKeyController = 0
        randomKey = (emptySquares.length === 0) ? null : emptySquares[0].key
      }

      const square = await this.squares.filter(item => item.key === randomKey)[0]
      if(square.x || square.o){
        this.randomKeyController = this.randomKeyController + 1
        this.cpuPlay()
      }else if(square){
        this.setSquare(square)
      }
    },
    getRandomSquare(min, max) {
        const mathMin = Math.ceil(min)
        const mathMax = Math.floor(max)
        return Math.floor(Math.random() * (mathMax - mathMin)) + mathMin
    },
    checkDraw(){
      let hasDraw = false
      if(this.countDraw === 9 && !this.playerWinner){
        hasDraw = true
      }

      if(hasDraw){
        this.$store.dispatch('data/setDraw', true)
        this.$store.dispatch('data/setTurn', this.gameTurn + 1)
        this.resetTurn()
      }
    },
    checkWinner(){
      this.winningCombinations.forEach((item) => {
        let countX = 0
        let countO = 0
        let hasWinner = false

        item.forEach((item) => {
          const option = this.squares.filter(opt => opt.key === item)[0]
          if(option){
            countX = (option.x) ? countX + 1 : countX 
            countO = (option.o) ? countO + 1 : countO 
          }
        })

        if(countX === 3){
          hasWinner = true
          this.$store.dispatch('data/setPlayerWinner', 'x')
          this.$store.dispatch('data/setGamesWonX', this.gamesWonX + 1)
        }

        if(countO === 3){
          hasWinner = true
          this.$store.dispatch('data/setPlayerWinner', 'o')
          this.$store.dispatch('data/setGamesWonO', this.gamesWonO + 1)
        }

        if(hasWinner){
          this.$store.dispatch('data/setPlayerTurn', 'x')
          this.$store.dispatch('data/setTurn', this.gameTurn + 1)
          this.resetTurn()
        }
      })
    },
    togglePlayerTurn(){
      this.$store.dispatch('data/setPlayerTurn', (this.playerTurn === 'x')? 'o' : 'x')
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