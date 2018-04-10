<template>
  <div>
    <h3>Hackathon Verwalten</h3>
    <b-form-group
      id="name"
      description="Gib hier den vollständigen Namen des Hackathon an"
      label="Name des Hackathons"
      label-for="name">
      <b-form-input id="name" v-model.trim="name"></b-form-input>
    </b-form-group>
    <b-form-group
      id="description"
      description="Gib hier die Beschreibung des Hackathon an"
      label="Beschreibung des Hackathons"
      label-for="description">
      <b-form-input id="description" v-model.trim="description"></b-form-input>
    </b-form-group>
    <b-form-group
      id="location"
      description="Gib hier der Ort des Hackathon an. Format: Ort, Stadt z.B. Betahaus, Hamburg"
      label="Ort des Hackathons"
      label-for="location">
      <b-form-input id="location" v-model.trim="location"></b-form-input>
    </b-form-group>
    <b-form-group
      id="hashTag"
      description="Gib hier den Hashtag für des Hackathon an. Z.B. #rütüta"
      label="HashTag für des Hackathons"
      label-for="hashTag">
      <b-form-input id="hashTag" v-model.trim="hashTag"></b-form-input>
    </b-form-group>
    <b-form-group
      id="hashTag"
      description="Gib hier den Hashtag für des Hackathon an. Z.B. #rütüta"
      label="HashTag für des Hackathons"
      label-for="hashTag">
      <datepicker  :format="'yyyy-MM-dd'" input-class="form-control"></datepicker>
    </b-form-group>
    <v-select multiple v-model="selected" :options="options"></v-select>
    <br/><br/><br/><br/><br/>
  </div>
</template>

<script>
import Datepicker from 'vuejs-datepicker'

export default {
  name: 'HackathonEdit',
  data () {
    return {
      name: '',
      description: '',
      location: '',
      hashTag: '',
      selected: ['foo','bar'],
      options: ['foo','bar','baz']
    }
  },
  components: {
    Datepicker
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
