<template>
  <div>
    <div class="container">
      <div class="col-4 mx-auto border">
        <div class="row">
          <div class="col-6">
            <a class="h2" v-on:click="(login = true), (register = false)"
              >Entrar</a
            >
          </div>
          <div class="col-6">
            <a class="h2" v-on:click="(register = true), (login = false)"
              >Registar</a
            >
          </div>
        </div>
        <div class="login" :class="{ active: login }">
          <input
            class="d-block text-center mx-auto"
            type="text"
            placeholder="username"
          />
          <input
            class="d-block text-center mx-auto"
            type="text"
            placeholder="password"
          />
        </div>
        <div class="register" :class="{ active: register }">
          <input
            class="d-block text-center mx-auto"
            type="text"
            placeholder="novo username"
            v-model="newusername"
          />
          <input
            class="d-block text-center mx-auto"
            type="text"
            placeholder="nova password"
            v-model="newpassword"
          />
          <button v-on:click="newUser()">criar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      login: true,
      register: false,

      users: [],

      newuser: [],
      newusername: "",
      newpassword: "",

      totalusers: 0,
    };
  },
  mounted() {
    fetch("http://localhost:3000/users")
      .then((response) => response.json())
      .then((data) => (this.users = data));
    this.totalusers = this.users.length;
  },

  methods: {
    newUser() {
      this.newuser = {
        id: this.users.length + 1,
        username: this.newusername,
        password: this.newpassword,
      };
      axios
        .post("http://localhost:3000/users", this.newuser)
        .then(console.log("user criado"))
        .catch((error) => console.log(error));

      this.users.push(this.newuser);
    },
  },
};
</script>

<style>
.login {
  display: none;
}
.register {
  display: none;
}

.login.active {
  display: inherit;
}
.register.active {
  display: inherit;
}
</style>