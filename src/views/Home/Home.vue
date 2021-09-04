<template src="./Home.html" />

<script>
import Calendar from "@/components/Calendar/Calendar";

export default {
  name: "Home",
  components: {
    Calendar
  },
  data: () => {
    return {
      month: [

      ]
    }
  },
  methods: {
    renderMonth(date) {
      const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1)
      const month = [];
      for
      (
          let day = firstDayOfMonth;
          day.getMonth() === firstDayOfMonth.getMonth();
          day = new Date(day.getFullYear(), day.getMonth(), day.getDate() + 1)
      ) {
        month.push(day);
      }
      return month;
    }
  },
  mounted() {
    this.month = this.renderMonth(new Date());
  }
}
</script>

<style lang="sass" scoped src="./Home.sass" />