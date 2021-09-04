<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'App',
  methods: {
    ...mapActions({
      initCalendarStore: 'INIT_CALENDAR_STORE'
    })
  },
  created() {
    this.initCalendarStore();
  }
}
</script>

<style lang="sass" src="./style/main.sass" />