<template>
  <div class="app">
    <Menu v-if="!gameStarted" />
    <Game v-else />
  </div>
</template>

<script>
/*
References:
https://www.frontendmentor.io/challenges/tic-tac-toe-game-Re7ZF_E2v
https://www.codebrainer.com/blog/tic-tac-toe-javascript-game
*/

import Game from '@/components/GameComponent'

export default {
  name: 'IndexPage',
  components:[
    Game,
  ],
  data(){
    return{
      gameStarted: false
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