<template>
  <div>
    <notifications group="foo"/>

    <h3>Hackathon Verwalten</h3>
    <b-form-group
      id="hackathon.name"
      description="Gib hier den vollständigen Namen des Hackathon an"
      label="Name des Hackathons"
      label-for="name">
      <b-form-input id="hackathon.name" v-model.trim="hackathon.name"></b-form-input>
    </b-form-group>
    <b-form-group
      id="hackathon.description"
      description="Gib hier die Beschreibung des Hackathon an"
      label="Beschreibung des Hackathons"
      label-for="description">
      <b-form-input id="hackathon.description" v-model.trim="hackathon.description"></b-form-input>
    </b-form-group>
    <b-form-group
      id="hackathon.location"
      description="Gib hier der Ort des Hackathon an. Format: Ort, Stadt z.B. Betahaus, Hamburg"
      label="Ort des Hackathons"
      label-for="location">
      <b-form-input id="hackathon.location" v-model.trim="hackathon.location"></b-form-input>
    </b-form-group>
    <b-form-group
      id="hackathon.hashTag"
      description="Gib hier den Hashtag für des Hackathon an. Z.B. #rütüta"
      label="HashTag für des Hackathons"
      label-for="hashTag">
      <b-form-input id="hackathon.hashTag" v-model.trim="hackathon.hashTag"></b-form-input>
    </b-form-group>
    <b-form-group
      id="hackathon.startDate"
      description="Flensburg, Berlin, Hamburg"
      label="Wann fängt der Hackathon an?"
      label-for="hashTag">
      <datepicker  :format="'yyyy-MM-dd'" input-class="form-control" v-model="hackathon.startDate"></datepicker>
    </b-form-group>
    <v-select multiple v-model="hackathon.selected" :options="options"></v-select>
    <b-button @click="saveForm">Speichern</b-button>
    <br/><br/><br/><br/><br/>
    <b-button @click="notifyTest">Notify</b-button>

  </div>
</template>

<script>
import Datepicker from 'vuejs-datepicker'

export default {
  name: 'HackathonEdit',
  data () {
    return {
      hackathon: {
        name: '',
        description: '',
        location: '',
        hashTag: '',
        startDate: '',
        selected: [],
      },
      options: ['Javascript','PHP','Arduino', 'Raspberry Pi', 'Calliope']
    }
  },
  mounted() {
    console.log(this.$route.params.hackathonId);
    this.$store.dispatch('hackathon/find', {'_id': this.$route.params.hackathonId }).then((res) => {
      console.log(res)
    });

  },
  components: {
    Datepicker
  },
  methods: {
    saveForm() {
      this.$notify({
        group: 'foo',
        title: 'Hackathon Gespeichert',
        text: 'Der neue Hackathon wurde erfolreich gespeichert'
      })
      this.$store.dispatch('hackathon/create', this.hackathon).then((res) => {
        console.log(res);
      })
    },
    notifyTest() {
      this.$notify({
        group: 'foo',
        title: 'Hackathon Gespeichert',
        text: 'Der neue Hackathon wurde erfolreich gespeichert'
      })
    }
  }
  // computed: {
  //   state () {
  //     return this.name.length >= 4 ? true : false
  //   },
  //   invalidFeedback () {
  //     if (this.name.length > 4) {
  //       return ''
  //     } else if (this.name.length > 0) {
  //       return 'Enter at least 4 characters'
  //     } else {
  //       return 'Please enter something'
  //     }
  //   },
  //   validFeedback () {
  //     return this.state === true ? 'Thank you' : ''
  //   }
  // },
}
</script>

<style scoped>
</style>
