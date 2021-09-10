<template>
  <div>
    <b-list-group-item>
      <b-button>Add to favourites</b-button>
    </b-list-group-item>
    <b-list-group-item>
      <b-button>Remove from favourites</b-button>
    </b-list-group-item>
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
  computed: {
    ...mapGetters(["getFavouriteMovies"]),
    favouriteMovies() {
      const favourites = this.getFavouriteMovies.entries();
      let favs = favourites.next().value;
      return favs[1], console.log(favs[1]);
    },
    // favouriteMovies() {
    //   return this.getFavouriteMovies;
    // },
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