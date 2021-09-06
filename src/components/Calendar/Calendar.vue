<template src="./Calendar.html" />

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "Calendar",
  props: {
    monthProp: {
      type: Date,
    },
  },
  methods: {
    ...mapActions({
      chooseDay: 'SET_CHOSEN_DAY'
    }),
    buildMonthArray(date, currentDate, chosenDay) {

      const firstDayOfMonth =
          new Date(
              date.getFullYear(),
              date.getMonth(),
              1
          )
      const month = [];
      const isSameDay = (day1, day2) => { // check, is day1 is the same day as day2
        return (
          day1.getFullYear() === day2.getFullYear()
            &&
          day1.getMonth() === day2.getMonth()
            &&
          day1.getDate() === day2.getDate()
        )
      };

      for
      (
          let day = firstDayOfMonth, weekIndex = 0;
          day.getMonth() === firstDayOfMonth.getMonth(); // check, is still on current month
          day = new Date(day.getFullYear(), day.getMonth(), day.getDate() + 1) // go to the next day
      ) {

        const dayObject = {
          day,
          isChosenMonth: true,
          isCurrent: isSameDay(day, currentDate),
          isChosenDay: isSameDay(day, chosenDay)
        };

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
          const newFirstDayOfWeek = new Date(firstDayOfWeek.getFullYear(), firstDayOfWeek.getMonth(), firstDayOfWeek.getDate() - 1);
          firstWeekOfMonth.unshift(
              {
                day: newFirstDayOfWeek,
                isChosenMonth: false,
                isCurrent: isSameDay(newFirstDayOfWeek, currentDate),
                isChosenDay: isSameDay(newFirstDayOfWeek, chosenDay)
              }
          )
          fillDaysBefore();
        }
      }

      const fillDaysAfter = () => { // fill last week with days from next month
        const lastWeekOfMonth = month[month.length - 1];
        const lastDayOfWeek = lastWeekOfMonth[lastWeekOfMonth.length - 1].day;

        if(lastDayOfWeek.getDay() !== 0) { // if last day of week is not Sunday
          const newLastDayOfWeek = new Date(lastDayOfWeek.getFullYear(), lastDayOfWeek.getMonth(), lastDayOfWeek.getDate() + 1);
          lastWeekOfMonth.push(
              {
                day: newLastDayOfWeek,
                isChosenMonth: false,
                isCurrent: isSameDay(newLastDayOfWeek, currentDate),
                isChosenDay: isSameDay(newLastDayOfWeek, chosenDay)
              }
          )
          fillDaysAfter();
        }
      }

      fillDaysBefore();
      fillDaysAfter();

      return month;
    },
  },
  computed: {
    ...mapState({
      currentDate: state => state.calendar.currentDate,
      chosenDay: state => state.calendar.chosenDay
    }),
    month()  {
      return this.buildMonthArray(this.monthProp, this.currentDate, this.chosenDay);
    }
  }
}
</script>

<style lang="sass" scoped src="./Calendar.sass" />