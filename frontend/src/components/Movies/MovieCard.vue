<template>
  <div class="mb-3">
    <p class="display-4 text-center">Movies</p>
    <div>
      <b-card
        fluid
        v-for="(movie, index) in movieList"
        :key="movie._id"
        :title="index + 1 + ' ' + movie.name"
        class="ml-auto mr-auto mb-2 rounded-0"
      >
        <b-card-text>
          Movie number:
          <em
            ><b>{{ index + 1 }}</b></em
          >
        </b-card-text>
      </b-card>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapState } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["getAllMovies"]),
    ...mapState(["Status"]),
    movieList() {
      return this.getAllMovies.docs;
    },
    // isLoggedIn() {
    //   return window.sessionStorage.getItem("token");
    // },
  },
};
</script>