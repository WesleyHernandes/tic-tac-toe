export const state = () => ({
    turn: 0,
    gamesWonX: 0,
    gamesWonO: 0,
    gameType:null,
    gameStarted: false,
    playerOne: null,
    playerChoose: "x",
    playerTurn: 'x',
    playerWinner: null,
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
})

export const actions = {
    setGameType(context, payload){
        context.commit('updateGameType', payload)
    },
    setGamesWonX(context, payload){
        context.commit('updateGamesWonX', payload)
    },
    setGamesWonO(context, payload){
        context.commit('updateGamesWonO', payload)
    },
    setPlayerOne(context, payload){
        context.commit('updatePlayerOne', payload)
    },
    setPlayerChoose(context, payload){
        context.commit('updatePlayerChoose', payload)
    },
    setTurn(context, payload){
        context.commit('updateTurn', payload)
    },
    setPlayerTurn(context, payload){
        context.commit('updatePlayerTurn', payload)
    },
    setPlayerWinner(context, payload){
        context.commit('updatePlayerWinner', payload)
    },
    toggleGameStart(context, payload){
        context.commit('updateGameStart', payload)
    },
    endGame(context, payload){
        context.commit('updateGameType', null)
        context.commit('updateTurn', 0)
        context.commit('updateGamesWonX', 0)
        context.commit('updateGamesWonO', 0)
        context.commit('updatePlayerOne', null)
        context.commit('updatePlayerChoose', 'x')
        context.commit('updatePlayerTurn', 'x')
        context.commit('updatePlayerWinner', null)
        context.commit('updateGameStart', false)
    }
}

export const mutations = {
    updateGameType(state, payload){
        state.gameType = payload
    },
    updateGamesWonX(state, payload){
        state.gamesWonX = payload
    },
    updateGamesWonO(state, payload){
        state.gamesWonO = payload
    },
    updatePlayerOne(state, payload){
        state.playerOne = payload
    },
    updatePlayerChoose(state, payload){
        state.playerChoose = payload
    },
    updateTurn(state, payload){
        state.turn = payload
    },
    updatePlayerTurn(state, payload){
        state.playerTurn = payload
    },
    updatePlayerWinner(state, payload){
        state.playerWinner = payload
    },
    updateGameStart(state, payload){
        state.gameStarted = payload
    }
}