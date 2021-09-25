<template src="./ListsOfTodo.html" />

<script>
import {mapState, mapGetters, mapActions} from "vuex";

import Todo from "@/components/Todo/Todo";

export default {
  name: "ListsOfTodo",
  components: {
    Todo
  },
  computed: {
    ...mapState({
      chosenDay: state => state.calendar.chosenDay
    }),
    ...mapGetters({
      listOfListsTodo: 'GET_LIST_OF_LISTS_BY_CHOOSEN_DATE'
    }),
  },
  data() {
    return {}
  },
  methods: {
    ...mapActions({
      addToList: 'ADD_TO_LIST',
      removeFromList: 'REMOVE_FROM_LIST',
      changeTitle: 'CHANGE_TITLE',
      changeStatus: 'CHANGE_STATUS',
      removeList: 'REMOVE_LIST',
    }),
  },
  mounted() {}
}
</script>

<style lang="sass" scoped src="./ListsOfTodo.sass" />