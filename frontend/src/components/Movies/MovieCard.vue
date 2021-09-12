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
        :id="movie._id"
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
            <b-button
              @click="addToFavourites((movieID = movie._id))"
              >Add to favourites
            </b-button>
            <!-- <b-button
              @click="removeFromFavourites(movie._id)"
              v-else-if="isAdded((movieID = movie._id))"
              >Remove from favourites
            </b-button> -->
          </b-list-group-item>
        </b-list-group>
      </b-card>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      activeUserID: this.$store.getters.getUser.userID,
    };
  },
  mounted() {
    if (this.$store.getters.getUser.userID) {
      const activeUserID = this.$store.getters.getUser.userID;
      return this.$store.dispatch("loadFavouriteMovies", { activeUserID });
    }
  },
  computed: {
    ...mapGetters(["getAllMovies", "getFavouriteMovies", "getUser"]),
    movieList() {
      return this.getAllMovies.docs;
    },
    isLoggedIn() {
      return window.sessionStorage.getItem("token");
    },
    getFavourites() {
      return this.getFavouriteMovies;
    },
    // addedToFavourites: function () {
    //   const favourites = this.getFavouriteMovies;
    //   let addedMovies = function () {
    //     for (let i = 0; i < favourites.length; i++) {
    //       for (let j = 0; j < favourites[i].movies.length; j++) {
    //         let newArray = new Array();
    //         newArray[j] = {
    //           movieID: favourites[i].movies[j].movie_id
    //         };
    //         // console.log(newArray);
    //       }
    //     }
    //   };
    //   return addedMovies();
    // },
  },
  methods: {
    ...mapActions(["addToFavourites", "removeFromFavourites"]),

    // isAdded() {
        // if (IDs.movieID === document.getElementsByTagName("key").id) {
        //   return true;
        // } else {
        //   return false;
        // }
    // },

    addToFavourites(movieID) {
      const activeUserID = this.activeUserID;
      this.$store
        .dispatch("addToFavourites", { activeUserID, movieID })
        .then(() => {
          return console.log("Added to favourites!");
        })
        .catch((error) => console.log(error));
    },
    // removeFromFavourites() {
    //   const activeUserID = this.activeUserID;
    //   const favouriteID = this.favouriteID;
    //   this.$store
    //     .dispatch("removeFromFavourites", { activeUserID, favouriteID })
    //     .then(() => {
    //       return console.log("Removed from favourites!");
    //     })
    //     .catch((error) => console.log(error));
    // },
  },
};
</script>