<template src="./ChosenTodo.html" />

<script>
import Todo from "@/components/Todo/Todo";
import {mapActions, mapGetters, mapState} from "vuex";

export default {
  name: "ChosenTodo",
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
}
</script>

<style scoped src="./ChosenTodo.sass" lang="sass" />
