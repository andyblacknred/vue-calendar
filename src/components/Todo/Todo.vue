<template src="./Todo.html" />

<script>
export default {
  name: "Todo",
  data() {
    return {
      todoText: '',
      todoTitle: '',
    }
  },
  props: {
    todoProp: {
      type: Object
    }
  },
  methods: {
    addToList() {
      this.$emit('add-to-list', this.todoText);
    },
    removeFromList(index) {
      this.$emit('remove-from-list', index);
    },
    changeTitle() {
      this.$emit('change-title', this.todoTitle);
    },
    changeStatus(index, status) {
      this.$emit('change-status', [index, status]);
    }
  }
}
</script>

<style lang="sass" scoped src="./Todo.sass" />