<template src="./ChosenTodo.html" />

<script>
import Todo from "@/components/Todo/Todo";
import TodoMixin from "@/mixins/TodoMixin";

export default {
  name: "ChosenTodo",
  components: {
    Todo
  },
  mixins: [TodoMixin],
}
</script>

<style scoped src="./ChosenTodo.sass" lang="sass" />
