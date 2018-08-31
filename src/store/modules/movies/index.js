import Vue from 'vue'
import {
    fetchMoviesInTheater
} from '../../../api/movies'
import {
    ADD_MOVIES,
    ADD_MOVIES_IN_THEATER,
    SET_PAGINATION
} from './types'

const module = {
    namespaced: true,
    state: {
        all: {},
        inTheater: {},
        pagination: { '杭州': { start: 0, count: 10, done: true } }
    },
    getters: {
        moviesInTheater: (state, getters, rootState) => {
            const curMoviesInTheater = state.inTheater[rootState.curCity]

            if(!Array.isArray(curMoviesInTheater)) {
                Vue.set(state.inTheater, rootState.curCity, [])
                return state.inTheater[rootState.curCity]
            } else {
                return curMoviesInTheater.map(id => state.all[id])
            }
        }
    },
    mutations: {
        [SET_PAGINATION]: (state, { city, pagination }) => {
            state.pagination[city] = pagination
        },
        [ADD_MOVIES]: (state, { movies }) => {
            movies.forEach(m => (!state.all[m.id]) && (state.all[m.id] = m))
        },
        [ADD_MOVIES_IN_THEATER]: (state, { city, ids }) => {
            if(!Array.isArray(state.inTheater[city])) {
                Vue.set(state.inTheater, city, [])
            }
            state.inTheater[city] = state.inTheater[city].concat(ids)
        }
    },
    actions: {
        fetchMoviesInTheater: ({ state, commit, rootState }) => {
            const curCity = rootState.curCity
            const curPagination = state.pagination[curCity] || { start: 0, count: 10, done: true }

            fetchMoviesInTheater(curCity, curPagination.start, curPagination.count)
            .then(res => {
                if(res.ok) {
                    return res.json()
                } else {
                    throw new Error(res.statusText)
                }
            })
            .then(payload => {
                const updatedPagination = { 
                    start: payload.start + payload.count, 
                    count: 10, 
                    done: payload.total <= (payload.start + payload.count) 
                }

                const movies = payload.subjects.map(m => {
                    return {
                        id: m.id,
                        title: m.title,
                        rating: m.rating.average,
                        casts: m.casts.map(c => c.name),
                        directors: m.directors.map(d => d.name),
                        poster: m.images.large,
                    }
                })
                const ids = movies.map(m => m.id)

                commit({
                    type: SET_PAGINATION,
                    city: curCity,
                    pagination: updatedPagination,
                })

                commit({
                    type: ADD_MOVIES,
                    movies,
                })

                commit({
                    type: ADD_MOVIES_IN_THEATER,
                    city: curCity,
                    ids,
                })
            })
        }
    }
}

export default module