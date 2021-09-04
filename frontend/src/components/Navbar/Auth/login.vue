<template>
  <div class="ml-auto mr-3">
    <b-button
      id="login-tooltip-target"
      size="sm"
      variant="dark"
      class="pl-4 pr-4 rounded-lg"
      >Login</b-button
    >

    <b-tooltip target="login-tooltip-target" triggers="hover">
      <b-form @submit="onLogin" class="m-2">
        <b-form-group
          id="input-group-1"
          label="Username:"
          label-for="username-input"
        >
          <b-form-input
            id="username-input"
            v-model="form.userName"
            placeholder="Comrad"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="input-group-2"
          label="Password:"
          label-for="password-input"
        >
          <b-form-input
            id="password-input"
            v-model="form.password"
            type="password"
            placeholder="Viv4L4V36as"
            required
          ></b-form-input>
        </b-form-group>
        <b-button
          type="submit"
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
export default {
  name: "SignUp",
  data() {
    return {
      form: {
        userName: "",
        password: "",
      },
    };
  },
  methods: {
    onLogin() {
      this.$v.form.$touch();
      try {
        axios
          .post("http://localhost:3000/api/auth/signup", this.form)
          .then((res) => {
            if (res.status === 200) {
              return console.log("Successful Sign up!");
            }
          })
          .catch((error) => {
            if (error.response.status === 409) {
              return console.log("Existing User!");
            } else {
              return console.log("Something went wrong: " + error);
            }
          });
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>