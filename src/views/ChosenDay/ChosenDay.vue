<template src="./ChosenDay.html" />

<script>
import {mapState} from "vuex";

import ListsOfTodo from "@/components/ListsOfTodo/ListsOfTodo";

export default {
  name: "ChosenDay",
  components: {
    ListsOfTodo
  },
  computed: {
    ...mapState({
      chosenDay: state => state.calendar.chosenDay,
      monthNames: state => state.calendar.monthNames,
    })
  }
}
</script>

<style scoped lang="sass" src="./ChosenDay.sass" />