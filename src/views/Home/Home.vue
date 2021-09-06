<template src="./Home.html" />

<script>
import { mapState, mapActions } from "vuex";

import Calendar from "@/components/Calendar/Calendar";

export default {
  name: "Home",
  components: {
    Calendar
  },
  computed: {
    ...mapState({
      currentDate: state => state.calendar.currentDate,
      chosenDay: state => state.calendar.chosenDay,
      chosenMonth: state => state.calendar.chosenMonth,
    }),
  },
  methods: {
    ...mapActions({
      nextMonth: 'NEXT_MONTH',
      previousMonth: 'PREVIOUS_MONTH'
    }),
  }
}
</script>

<style lang="sass" scoped src="./Home.sass" />