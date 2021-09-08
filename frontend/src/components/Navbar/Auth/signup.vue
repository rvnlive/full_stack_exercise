<template>
  <div class="mr-2 mr-md-5">
    <b-button
      id="signup-tooltip-target"
      size="sm"
      variant="dark"
      class="pl-4 pr-4 rounded-lg"
      >Sign up</b-button
    >
    <b-tooltip target="signup-tooltip-target" variant="primary" triggers="hover">
      <b-form @submit.prevent="signUp" enctype="multipart/form-data">
        <b-form class="m-2">
          <b-form-group
            id="input-group-1"
            label="Username:"
            label-for="username-signup-input"
          >
            <b-form-input
              id="username-signup-input"
              type="text"
              v-model="form.userName"
              placeholder="Username"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group
            id="input-group-2"
            label="Password:"
            label-for="password-signup-input"
          >
            <b-form-input
              id="password-signup-input"
              v-model="form.password"
              type="password"
              placeholder="Password"
              required
            ></b-form-input>
          </b-form-group>
          <b-button
            size="sm"
            variant="info"
            class="pl-4 pr-4 rounded-lg"
            @click="onSignUp"
            >Submit</b-button
          >
        </b-form>
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
    onSignUp() {
      try {
        axios
          .post("https://boiling-savannah-16664.herokuapp.com/api/auth/signup", this.form)
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