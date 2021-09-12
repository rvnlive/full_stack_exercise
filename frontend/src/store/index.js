import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    Status: 'notIn',
    User: [],
    Books: [],
    Movies: [],
    FavouriteBooks: [],
    FavouriteMovies: []
  },
  /// ///////////////////////////////////////
  mutations: {
    logIn (state, userID) {
      state.Status = 'In'
      state.User = userID
    },
    allBook (state, books) {
      state.Books = books
    },
    allMovie (state, movies) {
      state.Movies = movies
    },
    loadedFavouriteBooks (state, favourites) {
      state.FavouriteBooks = favourites
    },
    loadedFavouriteMovies (state, favourites) {
      state.FavouriteMovies = favourites
    }
  },
  /// ///////////////////////////////////////
  actions: {
    logIn ({ commit }, { userID, token }) {
      commit('logIn', { userID, token })
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
    addToFavourites ({ getters, dispatch }, { activeUserID, movieID, bookID }) {
      const baseURL = 'https://boiling-savannah-16664.herokuapp.com/'
      // const baseURL = 'http://localhost:5432/'
      const favouritesAPI = 'api/favourites/add'
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
              dispatch('loadFavouriteBooks')
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
              dispatch('loadFavouriteMovies')
              resolve(response)
            })
            .catch(error => {
              reject(error)
            })
        }
      })
    },
    loadFavouriteBooks ({ commit, getters }, activeUserID) {
      const baseURL = 'https://boiling-savannah-16664.herokuapp.com/'
      // const baseURL = 'http://localhost:5432/'
      const favouritesAPI = 'api/favourites/books'
      const requestOptions = {
        method: 'POST',
        headers: {
          ...getters.getToken,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(activeUserID)
      }
      window.fetch(baseURL + favouritesAPI, requestOptions)
        .then(result => result.json())
        .then(favourites => {
          commit('loadedFavouriteBooks', favourites)
        })
        .catch(error => console.log(error))
    },
    loadFavouriteMovies ({ commit, getters }, activeUserID) {
      const baseURL = 'https://boiling-savannah-16664.herokuapp.com/'
      // const baseURL = 'http://localhost:5432/'
      const favouritesAPI = 'api/favourites/movies'
      const requestOptions = {
        method: 'POST',
        headers: {
          ...getters.getToken,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(activeUserID)
      }
      window.fetch(baseURL + favouritesAPI, requestOptions)
        .then(result => result.json())
        .then(favourites => {
          commit('loadedFavouriteMovies', favourites)
          return favourites
        })
        .catch(error => console.log(error))
    },
    removeFromFavourites ({ getters, dispatch }, { activeUserID, favouriteID }) {
      const baseURL = 'https://boiling-savannah-16664.herokuapp.com/'
      // const baseURL = 'http://localhost:5432/'
      const favouritesAPI = 'api/favourites/remove'
      return new Promise((resolve, reject) => {
        if (activeUserID && favouriteID) {
          const favouriteToRemove = {
            method: 'DELETE',
            headers: {
              ...getters.getToken,
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ activeUserID, favouriteID })
          }
          window.fetch(baseURL + favouritesAPI, favouriteToRemove)
            .then(response => {
              dispatch('loadFavourites')
              resolve(response)
            })
            .catch(error => {
              reject(error)
            })
        }
      })
    }
  },
  getters: {
    getStatus: state => state.Status,
    getUser: state => state.User,
    getToken: state => ({ Authorization: 'Bearer ' + state.User.token }),
    getAllBooks: state => state.Books,
    getAllMovies: state => state.Movies,
    getFavouriteBooks: state => state.FavouriteBooks,
    getFavouriteMovies: state => state.FavouriteMovies
  }
})
