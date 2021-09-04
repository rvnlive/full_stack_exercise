import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    Books: [],
    Movies: []
  },
  mutations: {
    allBook (state, books) {
      state.Books = books
    },
    allMovie (state, movies) {
      state.Movies = movies
    }
  },
  actions: {
    loadBooks ({ commit }) {
      const baseURL = 'https://the-one-api.dev/v2'
      const booksAPI = '/book'
      const requestOptions = {
        method: 'GET',
        headers: { Authorization: 'Bearer ' + '8Qsn-meqZp4taXj_yUBI' }
      }
      window.fetch(baseURL + booksAPI, requestOptions)
        .then(result => result.json())
        .then(books => {
          commit('allBook', books)
        })
        .catch(error => console.log(error))
    },
    loadMovies ({ commit }) {
      const baseURL = 'https://the-one-api.dev/v2'
      const moviesAPI = '/movie'
      const requestOptions = {
        method: 'GET',
        headers: { Authorization: 'Bearer ' + '8Qsn-meqZp4taXj_yUBI' }
      }
      window.fetch(baseURL + moviesAPI, requestOptions)
        .then(result => result.json())
        .then(movies => {
          commit('allMovie', movies)
        })
        .catch(error => console.log(error))
    }
  },
  getters: {
    getAllBooks: state => state.Books,
    getAllMovies: state => state.Movies
  }
})
