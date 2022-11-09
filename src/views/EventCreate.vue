<template>
  <div>
    <h1>Create an event, {{ user.name }}</h1>
    <p>The envet's creator is: {{ user.id }}</p>
    <p>Ther are {{ catLength }} of categories</p>
    <p>{{ getEventById(2) }}</p>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  computed: {
    catLength() {
      return this.$store.getters.catLength;
    },
    ...mapState(["user", "categories"]),
    ...mapGetters(["getEventById"]),
  },
};
</script>

<style scoped></style>
