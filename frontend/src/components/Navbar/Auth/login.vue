<template>
  <div class="ml-auto mr-3">
    <b-button
      id="login-tooltip-target"
      size="sm"
      variant="dark"
      class="pl-4 pr-4 rounded-lg"
      >Login</b-button
    >

    <b-tooltip target="login-tooltip-target" variant="primary" triggers="hover">
      <b-form @submit.prevent="onLogin" class="m-2">
        <b-form-group
          id="input-group-1"
          label="Username:"
          label-for="username-login-input"
        >
          <b-form-input
            id="username-login-input"
            v-model="form.userName"
            placeholder="Comrad"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="input-group-2"
          label="Password:"
          label-for="password-login-input"
        >
          <b-form-input
            id="password-login-input"
            v-model="form.password"
            type="password"
            placeholder="Viv4L4V36as"
            required
          ></b-form-input>
        </b-form-group>
        <b-button
          @click="onLogin"
          size="sm"
          variant="info"
          class="pl-4 pr-4 rounded-lg"
          >Login</b-button
        >
      </b-form>
    </b-tooltip>
  </div>
</template>
<script>
import axios from "axios";
import { mapActions } from "vuex";
export default {
  name: "Login",
  data() {
    return {
      form: {
        userName: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapActions(["loadMovies"]),
    onLogin() {
      try {
        axios
          .post(
            "https://boiling-savannah-16664.herokuapp.com/api/auth/login",
            this.form
          )
          //          .post(
          //   "http://localhost:5432/api/auth/login",
          //   this.form
          // )
          .then((res) => {
            if (res.status === 200) {
              window.sessionStorage.setItem(
                "token",
                JSON.stringify(res.data.token)
              );
              this.$store.dispatch("loadMovies");
              this.$store.dispatch("logIn", {
                userID: JSON.stringify(res.data.user_id),
                token: res.data.token,
              });
              if (this.$router.currentRoute.path === "/") {
                this.$router.push("/Books");
              } else if (this.$router.currentRoute.path === "/Books") {
                this.$router.push("/");
              } else if (this.$router.currentRoute.path === "/Movies") {
                this.$router.push("/");
              }
              return console.log("Successful Login!");
            }
          })
          .catch((error) => {
            return console.log("Something went wrong: " + error);
          });
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>