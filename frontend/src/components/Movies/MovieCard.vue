<template>
  <div class="mb-3">
    <p class="display-4 text-center">Movies</p>
    <div v-if="!isLoggedIn">
      <b-card
        v-for="movie in movieList"
        :key="movie._id"
        :title="movie.name"
        class="shadow-lg ml-auto mr-auto mb-3 rounded-xl text-center"
        style="max-width: 85vw"
      >
        It has (<em>individually or as a series</em>):
        <b-list-group class="mt-2 w-75 ml-auto mr-auto">
          <b-list-group-item>
            <em
              ><b
                >Academy Award Nominations:
                {{ movie.academyAwardNominations }}</b
              ></em
            >
          </b-list-group-item>
          <b-list-group-item>
            <em
              ><b>Academy Award Wins: {{ movie.academyAwardWins }}</b></em
            >
          </b-list-group-item>
          <b-list-group-item>
            <em
              ><b
                >Box Office Revenue:
                {{ movie.boxOfficeRevenueInMillions + " million USD" }}</b
              ></em
            >
          </b-list-group-item>
          <b-list-group-item>
            <em
              ><b>Budget: {{ movie.budgetInMillions + " million USD" }}</b></em
            >
          </b-list-group-item>
          <b-list-group-item>
            <em
              ><b>Rotten Tomatoes Score: {{ movie.rottenTomatoesScore }}</b></em
            >
          </b-list-group-item>
          <b-list-group-item>
            <em
              ><b>Runtime: {{ movie.runtimeInMinutes + " minutes" }}</b></em
            >
          </b-list-group-item>
        </b-list-group>
      </b-card>
    </div>
    <div v-else-if="isLoggedIn">
      <b-card
        v-for="movie in movieList"
        :key="movie._id"
        :title="movie.name"
        class="shadow-lg ml-auto mr-auto mb-3 rounded-xl text-center"
        style="max-width: 85vw"
      >
        It has (<em>individually or as a series</em>):
        <b-list-group class="mt-2 w-75 ml-auto mr-auto">
          <b-list-group-item>
            <em
              ><b
                >Academy Award Nominations:
                {{ movie.academyAwardNominations }}</b
              ></em
            >
          </b-list-group-item>
          <b-list-group-item>
            <em
              ><b>Academy Award Wins: {{ movie.academyAwardWins }}</b></em
            >
          </b-list-group-item>
          <b-list-group-item>
            <em
              ><b
                >Box Office Revenue:
                {{ movie.boxOfficeRevenueInMillions + " million USD" }}</b
              ></em
            >
          </b-list-group-item>
          <b-list-group-item>
            <em
              ><b>Budget: {{ movie.budgetInMillions + " million USD" }}</b></em
            >
          </b-list-group-item>
          <b-list-group-item>
            <em
              ><b>Rotten Tomatoes Score: {{ movie.rottenTomatoesScore }}</b></em
            >
          </b-list-group-item>
          <b-list-group-item>
            <em
              ><b>Runtime: {{ movie.runtimeInMinutes + " minutes" }}</b></em
            >
          </b-list-group-item>
          <addToFavourites />
        </b-list-group>
      </b-card>
    </div>
  </div>
</template>
<script>
import addToFavourites from './addToFavourites.vue'
import { mapGetters } from "vuex";
export default {
  components: {
    addToFavourites: addToFavourites
  },
  data() {
    return {
      activeUserID: this.$store.getters.getUser.userID,
      movieID: this.movieID = this.$store.state.Movies.docs[0]._id
    };
  },
  mounted() {
    if (this.$store.getters.getUser.userID) {
      const activeUserID = this.$store.getters.getUser.userID;
      return (
        this.$store.dispatch("loadFavouriteMovies", { activeUserID })
        // console.log(this.favouriteMovies)
      );
    }
  },
  computed: {
    ...mapGetters(["getAllMovies", "getFavouriteMovies"]),
    movieList() {
      return this.getAllMovies.docs;
    },
    isLoggedIn() {
      return window.sessionStorage.getItem("token");
    },
  },
};
</script>