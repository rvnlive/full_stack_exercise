import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    Status: 'notIn',
    User: [],
    Books: [],
    Movies: [],
    Favourites: []
  },
  /// ///////////////////////////////////////
  mutations: {
    logIn (state, id) {
      state.Status = 'In'
      state.User = id
    },
    allBook (state, books) {
      state.Books = books
    },
    allMovie (state, movies) {
      state.Movies = movies
    },
    loadedFavourites (state, favourites) {
      state.Favourites = favourites
    }
  },
  /// ///////////////////////////////////////
  actions: {
    logIn ({ commit }, { id, token }) {
      commit('logIn', { id, token })
    },
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
    },
    // commit, dispatch,
    addToFavourites ({ dispatch, getters }, { activeUserID, movieID, bookID }) {
      const baseURL = 'https://boiling-savannah-16664.herokuapp.com/'
      const favouritesAPI = 'api/favourites/'
      return new Promise((resolve, reject) => {
        if (activeUserID && bookID) {
          const bookToAdd = {
            method: 'POST',
            headers: {
              ...getters.getToken,
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ activeUserID, bookID })
          }
          window.fetch(baseURL + favouritesAPI, bookToAdd)
            .then(response => {
              dispatch('loadFavourites')
              resolve(response)
            })
            .catch(error => {
              reject(error)
            })
        } else if (activeUserID && movieID) {
          const movieToAdd = {
            method: 'POST',
            headers: {
              ...getters.getToken,
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ activeUserID, movieID })
          }
          window.fetch(baseURL + favouritesAPI, movieToAdd)
            .then(response => {
              resolve(response)
            })
            .catch(error => {
              reject(error)
            })
        }
      })
    },
    loadFavourites ({ commit }) {
      const baseURL = 'https://boiling-savannah-16664.herokuapp.com/'
      const favouritesAPI = 'api/favourites/'
      const requestOptions = {
        method: 'GET',
        headers: { Authorization: 'Bearer ' + window.sessionStorage.getItem('token') }
      }
      window.fetch(baseURL + favouritesAPI, requestOptions)
        .then(result => result.json())
        .then(favourites => {
          commit('loadedFavourites', favourites)
        })
        .catch(error => console.log(error))
    }
  },
  getters: {
    getStatus: state => state.Status,
    getUser: state => state.User,
    getToken: state => ({ Authorization: 'Bearer ' + state.User.token }),
    getAllBooks: state => state.Books,
    getAllMovies: state => state.Movies
  }
})
