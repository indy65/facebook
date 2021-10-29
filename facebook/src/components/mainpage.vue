<template>
  <div class="row">
    <div class="col-5 mx-auto">
      <h3>{{ user.username }}</h3>
      <h3>{{ user.password }}</h3>
      <h3>{{ user.id }}</h3>
    </div>
    <posts :userid="this.id"></posts>
  </div>
</template>

<script>
import posts from "./posts.vue";
export default {
  components: {
    posts,
  },
  data() {
    return {
      id: this.$route.params.id,
      user: [],
    };
  },
  mounted() {
    console.log(this.id);
    fetch("http://localhost:3000/users/" + this.id)
      .then((response) => response.json())
      .then((data) => (this.user = data));
  },
};
</script>

<style>
</style>