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
    buildMonthArray(date) {

      const firstDayOfMonth =
          new Date(
              date.getFullYear(),
              date.getMonth(),
              1
          )
      const month = [];

      for
      (
          let day = firstDayOfMonth, weekIndex = 0;
          day.getMonth() === firstDayOfMonth.getMonth(); // check, is still on current month
          day = new Date(day.getFullYear(), day.getMonth(), day.getDate() + 1) // go to the next day
      ) {

        const dayObject = {day, isCurrentMonth: true};

        if(month[weekIndex]) { // write to current week
          month[weekIndex].push(dayObject);
        } else { // create new week
          month[weekIndex] = [];
          month[weekIndex].push(dayObject);
        }

        if(day.getDay() === 0) weekIndex++; // if last day was Sunday - go to the next week

      }
      return month;
    }
  },
  mounted() {
    this.month = this.buildMonthArray(new Date());
  }
}
</script>

<style lang="sass" scoped src="./Home.sass" />