<template>
  <div class="ml-auto mr-2 mr-md-5">
    <b-button
      size="sm"
      variant="dark"
      class="pl-4 pr-4 rounded-lg"
      @click="logOut"
      >Logout</b-button
    >
  </div>
</template>
<script>
export default {
    methods: {
        logOut() {
            location.reload()
            window.sessionStorage.clear()
        }
    }
}
</script>