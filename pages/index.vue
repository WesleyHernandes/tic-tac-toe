<template>
  <div class="app">
    <Menu v-if="!gameStarted" @playerChoose="playerChoose" @startGame="startGame" />
    <Game v-else />
  </div>
</template>

<script>
/*
References:
https://www.frontendmentor.io/challenges/tic-tac-toe-game-Re7ZF_E2v
https://www.codebrainer.com/blog/tic-tac-toe-javascript-game
*/

import Menu from '@/components/menu/Index'
import Game from '@/components/game/Index'

export default {
  name: 'IndexPage',
  components:{ Menu, Game },
  data(){
    return{
      playerType: null,
      playerOne: null,
      gameStarted: false
    }
  },
  methods:{
    playerChoose(choose){
      this.playerOne = choose
    },
    startGame(type){
      this.playerType = type
      this.gameStarted = true
    }
  }
}
</script>

<style lang="postcss">
  *{
    @apply
    m-0
    p-0
    font-master
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
    bg-primary;
  }
</style>0