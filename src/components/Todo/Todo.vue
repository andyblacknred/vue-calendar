<template src="./Todo.html" />

<script>
export default {
  name: "Todo",
  data() {
    return {
      todoText: '',
      todoArray: []
    }
  },
  methods: {
    addToList() {
      this.todoArray.push(this.todoText);
    }
  }
}
</script>

<style lang="sass" scoped src="./Todo.sass" />