<template>
  <div id="app">
    <Navbar />
    <Jumbotron />
    <router-view />
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import Navbar from "./components/Navbar/Navbar.vue";
import Jumbotron from "./components/MainHead/Jumbotron.vue";
export default {
  components: {
    Navbar,
    Jumbotron
  },
  computed: {
    ...mapGetters(["getAllBooks", "getAllMovies"]),
  },
  methods: {
    ...mapActions(["loadBooks", "loadMovies"]),
  },
  mounted() {
    return this.$store.dispatch("loadBooks"), this.$store.dispatch("loadMovies");
  },
  created() {
    return this.getAllBooks, this.getAllMovies;
  },
};
</script>

<style lang="scss">
</style>
