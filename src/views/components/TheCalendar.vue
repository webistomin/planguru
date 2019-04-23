<template lang="pug">
  section.calendar(@scroll="setRoomSize")
    ul.calendar__times
      li.calendar__time(v-for="i of workingTimes") {{i}}
    ul.calendar__events
      li.calendar__current(ref="currentTimeLine")
      li.calendar__floor
        h1.calendar__stage First floor
        div.calendar__row
          div.calendar__cells
            div.calendar__room
              h2.calendar__roomname Leeroy Jenkins
              p.calendar__seats 4 – 6 peoples
            button.calendar__event(v-for="i of workingTimes")
            button.calendar__event.calendar__event_fill
              .calendar__overlay
        div.calendar__row
          div.calendar__cells
            div.calendar__room
              h2.calendar__roomname Leeroy Jenkins
              p.calendar__seats 4 – 6 peoples
            button.calendar__event(v-for="i of workingTimes")
        div.calendar__row
          div.calendar__cells
            div.calendar__room
              h2.calendar__roomname Leeroy Jenkins
              p.calendar__seats 4 – 6 peoples
            button.calendar__event(v-for="i of workingTimes")
      li.calendar__floor
        h1.calendar__stage Second floor
        div.calendar__row
          div.calendar__cells
            div.calendar__room
              h2.calendar__roomname Icanhascheezburger
              p.calendar__seats 4 – 6 peoples
            button.calendar__event(v-for="i of workingTimes")
        div.calendar__row
          div.calendar__cells
            div.calendar__room
              h2.calendar__roomname Rick Roll
              p.calendar__seats 4 – 6 peoples
            button.calendar__event(v-for="i of workingTimes")
        div.calendar__row
          div.calendar__cells
            div.calendar__room
              h2.calendar__roomname Peanut Butter Jelly
              p.calendar__seats 4 – 6 peoples
            button.calendar__event(v-for="i of workingTimes")
        div.calendar__row
          div.calendar__cells
            div.calendar__room
              h2.calendar__roomname Peanut Butter Jelly
              p.calendar__seats 4 – 6 peoples
            button.calendar__event(v-for="i of workingTimes")
        div.calendar__row
          div.calendar__cells
            div.calendar__room
              h2.calendar__roomname Peanut Butter Jelly
              p.calendar__seats 4 – 6 peoples
            button.calendar__event(v-for="i of workingTimes")
        div.calendar__row
          div.calendar__cells
            div.calendar__room
              h2.calendar__roomname Peanut Butter Jelly
              p.calendar__seats 4 – 6 peoples
            button.calendar__event(v-for="i of workingTimes")
    AppAddEventButton
    AppModalNewEvent
</template>

<script>
import AppAddEventButton from '@/views/components/AppAddEventButton.vue';
import AppModalNewEvent from '@/views/components/modals/AppModalNewEvent.vue';

export default {
  name: 'TheCalendar',
  components: { AppModalNewEvent, AppAddEventButton },
  data() {
    return {
      workingTimes: ['09:00', '09:30', '10:00',
        '10:30', '11:00', '11:30',
        '12:00', '12:30', '01:00',
        '01:30', '02:00', '02:30',
        '03:00', '03:30', '04:00',
        '04:30', '05:00', '05:30',
        '06:00', '06:30', '07:00',
        '07:30', '08:00', '09:30',
        '10:00'],
    };
  },
  mounted() {
    const today = new Date();
    const hour = today.getHours();
    const minutes = today.getMinutes();

    const currentHourDifference = hour - 9;
    console.log(currentHourDifference);
    this.$refs.currentTimeLine.style.transform = `translateX(${currentHourDifference * 120 + 152 + minutes * 2}px)`;
  },
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
