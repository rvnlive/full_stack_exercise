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
          <!-- <b-list-group-item v-if="!isAdded" @click="addToFavourites">
            <em><b>Add to favourites</b></em>
          </b-list-group-item>
          <b-list-group-item v-else-if="isAdded" @click="removeFromFavourites">
            <em><b>Remove from favourites</b></em>
          </b-list-group-item> -->
        </b-list-group>
      </b-card>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapState } from "vuex";
export default {
    data() {
    return {
      // activeUserID: this.$store.getters.User.userid,
      // movieID: this.getAllMovies.docs._id
    };
  },
  computed: {
    ...mapGetters(["getAllMovies"]),
    ...mapState(["Status"]),
    movieList() {
      return this.getAllMovies.docs;
    },
    isLoggedIn() {
      return window.sessionStorage.getItem("token");
    },
    // isAdded() {
    //   return this.listAllFavourites.find(
    //     (user) => user.userid === this.activeUserID
    //   );
    // },
  },
  methods: {
    addToFavourites() {},
    removeFromFavourites() {},
  },
};
</script>