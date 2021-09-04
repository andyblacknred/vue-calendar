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

      const fillDaysBefore = () => { // fill first week with days from previous month
        const firstWeekOfMonth = month[0];
        const firstDayOfWeek = firstWeekOfMonth[0].day;

        if(firstDayOfWeek.getDay() !== 1) { // if first day of week is not Monday
          firstWeekOfMonth.unshift(
            {
              day: new Date(firstDayOfWeek.getFullYear(), firstDayOfWeek.getMonth(), firstDayOfWeek.getDate() - 1),
              isCurrentMonth: false
            }
          )
          fillDaysBefore();
        }
      }

      const fillDaysAfter = () => { // fill last week with days from next month
        const lastWeekOfMonth = month[month.length - 1];
        const lastDayOfWeek = lastWeekOfMonth[lastWeekOfMonth.length - 1].day;

        if(lastDayOfWeek.getDay() !== 0) { // if last day of week is not Sunday
          lastWeekOfMonth.push(
              {
                day: new Date(lastDayOfWeek.getFullYear(), lastDayOfWeek.getMonth(), lastDayOfWeek.getDate() + 1),
                isCurrentMonth: false
              }
          )
          fillDaysAfter();
        }
      }

      fillDaysBefore();
      fillDaysAfter();

      return month;
    }
  },
  mounted() {
    this.month = this.buildMonthArray(new Date());
  }
}
</script>

<style lang="sass" scoped src="./Home.sass" />