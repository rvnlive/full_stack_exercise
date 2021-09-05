<template>
    <b-navbar sticky variant="light" class="m-0 p-0 shadow-lg">
      <Branding />
      <LogIn v-if="isLoggedIn === 'notIn'" />
      <SignUp v-if="isLoggedIn === 'notIn'" />
      <LogOut v-if="isLoggedIn === 'In'" />
    </b-navbar>
</template>
<script>
import Branding from "./Branding/Branding.vue";
import LogIn from "../Navbar/Auth/login.vue";
import SignUp from "../Navbar/Auth/signup.vue";
import LogOut from "../Navbar/Auth/logout.vue";
export default {
  components: {
    Branding,
    LogIn,
    SignUp,
    LogOut,
  },
  computed: {
    isLoggedIn() {
      return this.$store.state.Status;
    },
  },
};
</script>