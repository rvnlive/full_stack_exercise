<template>
  <div class="mb-4">
    <p class="display-4 text-center">Books</p>
    <b-card
      fluid
      v-for="(book, index) in bookList"
      :key="book._id"
      :title="book.name"
      class="ml-auto mr-auto mb-2 rounded-0"
    >
      <b-card-text>
        Book number:
        <em
          ><b>{{ index + 1 }}</b></em
        >
      </b-card-text>
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