<template>
  <div>
    <h1>Home</h1>
    <img alt="Vue logo" src="@/assets/logo.png" />
    <div>count: {{ count }}</div>
    <button @click="addCount">+1</button>
  </div>
</template>

<script>
export default {
  computed: {
    count() {
      return this.$store.getters.count;
    },
  },
  methods: {
    addCount() {
      this.$store.commit("addCount", 1);
    },
  },
};
</script>
