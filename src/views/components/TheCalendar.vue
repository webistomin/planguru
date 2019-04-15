<template lang="pug">
  section.calendar
    .calendar__current
    ul.calendar__list
      li.calendar__item
        time.calendar__time 09:00 AM
      li.calendar__item
        time.calendar__time 09:30 AM
      li.calendar__item
        time.calendar__time 10:00 AM
      li.calendar__item
        time.calendar__time 10:30 AM
      li.calendar__item
        time.calendar__time 11:00 AM
      li.calendar__item
        time.calendar__time 11:30 AM
      li.calendar__item
        time.calendar__time 12:00 PM
      li.calendar__item
        time.calendar__time 12:30 PM
      li.calendar__item
        time.calendar__time 13:00 PM
      li.calendar__item
        time.calendar__time 13:30 PM
      li.calendar__item
        time.calendar__time 14:00 PM
      li.calendar__item
        time.calendar__time 14:30 PM
      li.calendar__item
        time.calendar__time 15:00 PM
      li.calendar__item
        time.calendar__time 15:30 PM
      li.calendar__item
        time.calendar__time 16:00 PM
      li.calendar__item
        time.calendar__time 16:30 PM
      li.calendar__item
        time.calendar__time 17:00 PM
      li.calendar__item
        time.calendar__time 17:30 PM
      li.calendar__item
        time.calendar__time 18:00 PM
      li.calendar__item
        time.calendar__time 18:30 PM
      li.calendar__item
        time.calendar__time 19:00 PM
      li.calendar__item
        time.calendar__time 19:30 PM
      li.calendar__item
        time.calendar__time 20:00 PM
      li.calendar__item
        time.calendar__time 20:30 PM
      li.calendar__item
        time.calendar__time 21:00 PM
      li.calendar__item
        time.calendar__time 21:30 PM
      li.calendar__item
        time.calendar__time 22:00 PM
    ul.calendar__events
      li.calendar__event
        h3.calendar__title Project daily stand-up
        .calendar__date
          time.calendar__datetime 10:00 AM
          span.calendar__dash &nbsp;–&nbsp;
          time.calendar__datetime 10:30 AM
</template>

<script>
export default {
  name: 'TheCalendar',
};
</script>

<style lang="sass">
  @import "~@/assets/sass/blocks/calendar.sass"
</style>
