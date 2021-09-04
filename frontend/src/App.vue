<template>
  <div id="app">
    <Navbar />
    <router-view />
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import Navbar from "./components/Navbar/Navbar.vue";
export default {
  components: {
    Navbar,
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
