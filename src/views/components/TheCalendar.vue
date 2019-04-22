<template lang="pug">
  section.calendar
    ul.calendar__times
      li.calendar__time 09:00
      li.calendar__time 09:30
      li.calendar__time 10:00
    ul.calendar__events
      li.calendar__row
        div.calendar__room
          h2.calendar__roomname Leeroy Jenkins
          p.calendar__seats 4 – 6 peoples
        div.calendar__event
        div.calendar__event
        div.calendar__event
        div.calendar__event
        div.calendar__event
        div.calendar__event
        div.calendar__event
        div.calendar__event
      li.calendar__row
        div.calendar__room
          h2.calendar__roomname Icanhascheezburger
          p.calendar__seats 4 – 6 peoples
        div.calendar__event
        div.calendar__event
        div.calendar__event
        div.calendar__event
        div.calendar__event
        div.calendar__event
        div.calendar__event
        div.calendar__event
      li.calendar__row
        div.calendar__room
          h2.calendar__roomname Rick Roll
          p.calendar__seats 4 – 6 peoples
        div.calendar__event
        div.calendar__event
        div.calendar__event
        div.calendar__event
        div.calendar__event
        div.calendar__event
        div.calendar__event
        div.calendar__event
      li.calendar__row
        div.calendar__room
          h2.calendar__roomname Peanut Butter Jelly
          p.calendar__seats 4 – 6 peoples
        div.calendar__event
        div.calendar__event
        div.calendar__event
        div.calendar__event
        div.calendar__event
        div.calendar__event
        div.calendar__event
        div.calendar__event
    //.calendar__current
    //ul.calendar__events
      li.calendar__event.calendar__event_meeting
        h3.calendar__title Project daily stand-up
        .calendar__date
          time.calendar__datetime 10:00 AM
          span.calendar__dash &nbsp;–&nbsp;
          time.calendar__datetime 10:30 AM
    AppAddEventButton
    AppModalNewEvent
</template>

<script>
import AppAddEventButton from '@/views/components/AppAddEventButton.vue';
import AppModalNewEvent from '@/views/components/modals/AppModalNewEvent.vue';

export default {
  name: 'TheCalendar',
  components: { AppModalNewEvent, AppAddEventButton },
};
</script>

<style lang="sass">
  @import "~@/assets/sass/blocks/calendar.sass"
</style>
