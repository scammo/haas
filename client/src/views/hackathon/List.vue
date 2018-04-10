<template>
  <div>
    <div v-for="hackathon of hackathons">{{hackathon.name}}</div>
  </div>
</template>

<script>
export default {
  name: 'List',
  mounted() {
    this.$store.dispatch('hackathon/find', {}).then((res) => {
      console.log(res);
    })
  },
  computed: {
    hackathons() {
      return this.$store.getters['hackathon/list'];
    }
  }
}
</script>

<style scoped>

</style>
