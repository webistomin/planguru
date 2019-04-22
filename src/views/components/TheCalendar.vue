<template lang="pug">
  section.calendar(@scroll="setRoomSize")
    ul.calendar__times
      li.calendar__time(v-for="i of 20") 09:00
    ul.calendar__events
      li.calendar__current
      li.calendar__row
        div.calendar__cells
          div.calendar__room
            h2.calendar__roomname Leeroy Jenkins
            p.calendar__seats 4 – 6 peoples
          button.calendar__event(v-for="i of 20")
      li.calendar__row
        div.calendar__cells
          div.calendar__room
            h2.calendar__roomname Leeroy Jenkins
            p.calendar__seats 4 – 6 peoples
          button.calendar__event(v-for="i of 20")
      li.calendar__row
        div.calendar__cells
          div.calendar__room
            h2.calendar__roomname Leeroy Jenkins
            p.calendar__seats 4 – 6 peoples
          button.calendar__event(v-for="i of 20")
      li.calendar__row
        div.calendar__cells
          div.calendar__room
            h2.calendar__roomname Icanhascheezburger
            p.calendar__seats 4 – 6 peoples
          button.calendar__event(v-for="i of 20")
      li.calendar__row
        div.calendar__cells
          div.calendar__room
            h2.calendar__roomname Rick Roll
            p.calendar__seats 4 – 6 peoples
          button.calendar__event(v-for="i of 20")
      li.calendar__row
        div.calendar__cells
          div.calendar__room
            h2.calendar__roomname Peanut Butter Jelly
            p.calendar__seats 4 – 6 peoples
          button.calendar__event(v-for="i of 20")
      li.calendar__row
        div.calendar__cells
          div.calendar__room
            h2.calendar__roomname Peanut Butter Jelly
            p.calendar__seats 4 – 6 peoples
          button.calendar__event(v-for="i of 20")
      li.calendar__row
        div.calendar__cells
          div.calendar__room
            h2.calendar__roomname Peanut Butter Jelly
            p.calendar__seats 4 – 6 peoples
          button.calendar__event(v-for="i of 20")
      li.calendar__row
        div.calendar__cells
          div.calendar__room
            h2.calendar__roomname Peanut Butter Jelly
            p.calendar__seats 4 – 6 peoples
          button.calendar__event(v-for="i of 20")

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
  methods: {
    setRoomSize(e) {
      const rows = document.querySelectorAll('.calendar__row');

      if (e.target.scrollLeft >= 200) {
        rows.forEach((item) => {
          item.classList.add('calendar__row_small');
        });
      } else {
        rows.forEach((item) => {
          item.classList.remove('calendar__row_small');
        });
      }
    },
  },
};
</script>

<style lang="sass">
  @import "~@/assets/sass/blocks/calendar.sass"
</style>
