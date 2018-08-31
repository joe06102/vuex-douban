import Vue from 'vue'
import Vuex from 'vuex'
import Movies from './modules/movies'
import { SET_CITY } from './types'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        'movies': Movies
    },
    state: {
        curCity: '杭州',
    },
    mutations: {
        [SET_CITY]: function(state, { city }) {
            state.curCity = city
        }
    },
    actions: {
        [SET_CITY]: function({ commit, dispatch }, { city }) {
            commit({ type: SET_CITY, city })
            dispatch({
                type: 'movies/fetchMoviesInTheater'
            })
        }
    }
})

//store.registerModule('movies', Movies)

export default store