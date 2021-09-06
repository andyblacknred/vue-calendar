<template src="./ListsOfTodo.html" />

<script>
import {mapState} from "vuex";

import Todo from "@/components/Todo/Todo";

export default {
  name: "ListsOfTodo",
  components: {
    Todo
  },
  computed: {
    ...mapState({
      chosenDay: state => state.calendar.chosenDay
    })
  },
  data() {
    return {
      listOfTodo: [
        {
          title: 'asdasd',
          todoList: [
            {
              text: '11asdad',
              isChecked: false
            },
            {
              text: 'sadsadad',
              isChecked: true
            }
          ],
          date: this.chosenDay
        }
      ]
    }
  },
  methods: {
    addToList(index, text) {

      alert(this.chosenDay)
      this.listOfTodo[index].todoList.push({text, isChecked: false});
    },
    removeFromList(indexParent, indexChild) {
      this.listOfTodo[indexParent].todoList.splice(indexChild, 1);
    },
    changeTitle(index, title) {
      this.listOfTodo[index].title = title;
    },
    changeStatus(indexParent, indexChild, status) {
      this.listOfTodo[indexParent].todoList[indexChild].isChecked = status;
    }
  }
}
</script>

<style lang="sass" scoped src="./ListsOfTodo.sass" />