<template src="./ListsOfTodo.html" />

<script>
import {mapActions} from "vuex";

import Todo from "@/components/Todo/Todo";
import TodoMixin from "@/mixins/TodoMixin";

export default {
  name: "ListsOfTodo",
  components: {
    Todo
  },
  mixins: [TodoMixin],
  methods: {
    ...mapActions({
      createList: 'CREATE_LIST',
    }),
    createListAndChangeRoute() {
      this.createList({date: this.chosenDay});
      this.$router.push({path: `${this.listOfListsTodo(this.chosenDay).length - 1}`, append: true});
    }
  },
}
</script>

<style lang="sass" scoped src="./ListsOfTodo.sass" />