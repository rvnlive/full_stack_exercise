<template>
  <div>
    <b-jumbotron fluid bg-variant="light">
      <template #header>Welcome people!</template>

      <template #lead>
        Here we've collected all the Books and Movies written by J.R.R Tolkien,
        directed by Peter Jackson.
      </template>

      <hr class="my-4" />

      <p>
        You can find book and movie chapters, characters, quotes and - if you
        register - you can mark your favourites and share them with your
        friends.
      </p>

      <b-button variant="primary" class="mr-3" @click="listBooks"
        >List books</b-button
      >
      <b-button variant="primary" @click="listMovies">List movies</b-button>
    </b-jumbotron>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {};
  },
  methods: {
    listBooks() {
      if (this.$route.path !== "/Books") {
        return this.$router.push("/Books");
      }
    },
    listMovies() {
      if (this.$route.path !== "/Movies") {
        return this.$router.push("/Movies");
      }
    },
  },
};
</script>