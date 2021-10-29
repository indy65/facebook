<template>
  <div>
    <input type="text" name="" id="" :value="postcontent" />
    <button v-on:click="postPost()">post</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: ["userid"],
  data() {
    return {
      postcontent: "",
      newpost: [],
    };
  },
  methods: {
    postPost() {
      /*fetch("http://localhost:3000/users/" + 1)
        .then((response) => response.json())
        .then((data) => console.log(data.posts))
        .catch((error) => console.log(error));
        */

      axios
        .post("http://localhost:3000/users/" + this.userid, {})
        .then(alert("post criado"))
        .catch((error) => console.log(error));
    },
  },
};
</script>

<style>
</style>