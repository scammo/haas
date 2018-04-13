<template>
  <div>
    <b-list-group v-for="hackathon of hackathons" >
      <b-list-group-item :to="{ path: 'hackathon/edit', query: { hackathonId: hackathon._id }}">
        <h3>
          {{hackathon.name}}
          <span class="pull-right">{{hackathon.hashTag}}</span>
        </h3>
        <p> {{ hackathon.description | truncate(140) }}</p>
        <b-row>
          <b-col>
            Von: {{hackathon.startDate |  moment('DD.MM.YYYY HH:mm')}}
          </b-col>
          <b-col>
            {{hackathon.location}}
          </b-col>
        </b-row>
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
export default {
  name: 'List',
  mounted() {
    this.$store.dispatch('/hackathon/find', {}).then((res) => {
      console.log(res);
      console.log('test');
      console.log(this.$route.query.hackathonId)
    });

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
