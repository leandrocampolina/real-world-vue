<template>
  <div>
    <h1>Outch!!</h1>
    <h3>The {{ resource }} you're looking for isn't here</h3>
    <router-link :to="{ name: 'event-list' }">Back to Home</router-link>
  </div>
</template>

<script>
export default {
  props: {
    resource: {
      type: String,
      required: true,
    },
  },
};
</script>

<style></style>
