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
      listOfListsTodo: 'GET_LIST_OF_LISTS_BY_DATE'
    }),
    chosenDayArray() {
      return [
          this.chosenDay.getFullYear(),
          this.chosenDay.getMonth(),
          this.chosenDay.getDate()
      ]
    }
  },
  data() {
    return {}
  },
  methods: {
    ...mapActions({
      addToList: 'ADD_TO_LIST'
    }),
    removeFromList(indexParent, indexChild) {
      this.listOfListsTodo(...this.chosenDayArray)[indexParent].todoList.splice(indexChild, 1);
    },
    changeTitle(index, title) {
      this.listOfListsTodo(...this.chosenDayArray)[index].title = title;
    },
    changeStatus(indexParent, indexChild, status) {
      this.listOfListsTodo(...this.chosenDayArray)[indexParent].todoList[indexChild].isChecked = status;
    }
  },
  mounted() {}
}
</script>

<style lang="sass" scoped src="./ListsOfTodo.sass" />