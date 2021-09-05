<template>
  <div class="d-inline">
    <p class="display-4 text-center">Movies</p>
    <div v-if="!isLoggedIn">
      <p class="h5 text-center mt-4">
        Please, login to see the list of movies.
      </p>
    </div>
    <div v-else-if="isLoggedIn">
      <b-card
        v-for="(movie, index) in movieList"
        :key="movie._id"
        :title="index + 1 + ' ' + movie.name"
        class="w-50 ml-auto mr-auto mb-2"
      >
      </b-card>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapState } from "vuex";
export default {
  data() {
      return {}
  },
  computed: {
    ...mapGetters(["getAllMovies"]),
    ...mapState(['Status']),
    movieList() {
      return this.getAllMovies.docs;
    },
    isLoggedIn() {
      return window.sessionStorage.getItem('token');
    },
  },
};
</script>