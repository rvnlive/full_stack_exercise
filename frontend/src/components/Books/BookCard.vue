<template>
  <div class="d-inline">
    <p class="display-4 text-center">Books</p>
    <b-card
      v-for="(book, index) in bookList"
      :key="book._id"
      :title="index + 1 + ' ' + book.name"
      class="w-50 ml-auto mr-auto mb-2"
    >
      <!-- <b-card-text>
        Some quick example text to build on the <em>card title</em> and make up
        the bulk of the card's content.
      </b-card-text>

      <b-card-text>A second paragraph of text in the card.</b-card-text>

      <a href="#" class="card-link">Card link</a>
      <b-link href="#" class="card-link">Another link</b-link> -->
    </b-card>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["getAllBooks"]),
    bookList() {
      return this.getAllBooks.docs;
    },
  },
};
</script>