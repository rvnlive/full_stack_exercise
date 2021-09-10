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
          <b-list-group-item>
            <b-button>
            <!-- <em
              ><b>Runtime: {{ this.$store.getters.getFavourites }}</b></em
            > -->
            </b-button>
          </b-list-group-item>
        </b-list-group>
      </b-card>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      activeUserID: this.$store.getters.getUser.userID,
      movieID: this.$store.state.Movies.docs[0]._id,
    };
  },
  mounted() {
    if (this.$store.getters.getUser.userID) {
      const activeUserID = this.$store.getters.getUser.userID;
      return this.$store.dispatch("loadFavourites", { activeUserID });
    }
  },
  computed: {
    ...mapGetters(["getAllMovies", "getFavourites"]),
    movieList() {
      return this.getAllMovies.docs;
    },
    isLoggedIn() {
      return window.sessionStorage.getItem("token");
    },
    favouritesList() {
      const index = this.getFavourites.findIndex
      return this.getFavourites[index];
    },
  },
  methods: {
    ...mapActions(["addToFavourites", "removeFromFavourites"]),
    addToFavourites() {
      const activeUserID = this.activeUserID;
      const movieID = this.movieID;
      this.$store
        .dispatch("addToFavourites", { activeUserID, movieID })
        .then(() => {
          return console.log("Added to favourites!");
        })
        .catch((error) => console.log(error));
    },
    removeFromFavourites() {
      const activeUserID = this.activeUserID;
      const favouriteID = this.favouriteID;
      this.$store
        .dispatch("removeFromFavourites", { activeUserID, favouriteID })
        .then(() => {
          return console.log("Removed from favourites!");
        })
        .catch((error) => console.log(error));
    },
  },
};
</script>