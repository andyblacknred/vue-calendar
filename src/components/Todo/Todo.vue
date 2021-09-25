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
      type: Object,
      required: true
    },
    editMode: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    addToList() {
      if(this.editMode) this.$emit('add-to-list', this.todoText);
    },
    removeFromList(index) {
      if(this.editMode) this.$emit('remove-from-list', index);
    },
    changeTitle() {
      if(this.editMode) this.$emit('change-title', this.todoTitle);
    },
    changeStatus(index, status) {
      if(this.editMode) this.$emit('change-status', {indexChild: index, status});
    },
    removeList() {
      if(this.editMode) this.$emit('remove-list');
    }
  }
}
</script>

<style lang="sass" scoped src="./Todo.sass" />