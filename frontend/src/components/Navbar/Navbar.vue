<template>
  <div>
    <b-navbar variant="light" class="m-0 p-0 shadow-lg">
      <Branding />
      <LogIn />
      <SignUp />
    </b-navbar>
  </div>
</template>
<script>
import Branding from "./Branding/Branding.vue";
import LogIn from "../Navbar/Auth/login.vue";
import SignUp from "../Navbar/Auth/signup.vue";
export default {
  components: {
    Branding,
    LogIn,
    SignUp,
  },
  data() {
    return {};
  },
};
</script>