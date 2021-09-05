<template>
  <div class="ml-auto mr-3">
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