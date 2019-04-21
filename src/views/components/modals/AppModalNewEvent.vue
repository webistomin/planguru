<template lang="pug">
  Modal(
    name="eventModal"
    width="100%"
    height="auto"
    :scrollable="true"
    :adaptive="true"
    transition="nice-modal-fade"
  ).modal.modal_new-event
    .modal__inner
      AppCloseModalBtn(
        :modalName="'eventModal'"
        :isArrow="true"
        )
      form.modal__form(@submit.prevent="onSubmit")
        input.modal__input(
          type="text"
          placeholder="Name your meeting"
          v-model="meetingName"
          autofocus)
        fieldset.modal__group
          .modal__holder
            legend.modal__legend Invite people
            p.modal__error.error
          .modal__box
            ul(v-if='meetingParticipants').modal__selected-peoples
              li(v-for="person of meetingParticipants").modal__selected-people
                img(
                  :src="person.avatar"
                  width='38'
                  height="38"
                  :alt="person.fullname"
                  :title="person.fullname"
                  )
            button.modal__btn(type="button" @click="openSelectModal")
        fieldset.modal__group
          .modal__holder
            legend.modal__legend Choose date
            p.modal__error.error
          button.modal__date(
            type="button"
            @click="openDateModal"
            :class="{'modal__date_selected': meetingDate && meetingTime}"
            ) {{ getFormattedDate }}
            simple-svg(
              :filepath="'/img/svg-icons/icon-arrow-down.svg'"
              width="25"
              height="12"
            )
        fieldset.modal__group
          legend.modal__legend Choose meeting type
          .modal__wrap
            .modal__box(v-for="item of meetingTypes")
              input.modal__radio(
                type="radio"
                name="meeting-type"
                :id="`type-${getFormattedMeetingName(item.name)}`"
                :value="getFormattedMeetingName(item.name)"
                v-model="meetingType"
                :class="{'modal__radio_disabled': meetingType && \
                  meetingType !== getFormattedMeetingName(item.name)}"
                )
              label.modal__label.chip(
                :for="`type-${getFormattedMeetingName(item.name)}`"
                :class="`chip_${getFormattedMeetingName(item.name)}`"
                ) {{item.name}}
        fieldset.modal__group
          legend.modal__legend White short description
          textarea-autosize.modal__message(
            placeholder="Message..."
            v-model="meetingMessage"
            :max-height="350"
            )
        button.modal__submit(
          type="submit"
          :class="{'modal__submit_disabled': !isFormValid}"
          ) Schedule meeting
        AppModalDatepick(@onSendMeetingDateAndTime="onSendMeetingDateAndTime")
        AppModalSelectParticipants(@onSendParticipants="onSendParticipants")
</template>

<script>
import AppCloseModalBtn from '@/views/components/AppCloseModalBtn.vue';
import AppModalDatepick from '@/views/components/modals/AppModalDatepick.vue';
import AppModalSelectParticipants from '@/views/components/modals/AppModalSelectParticipants.vue';

export default {
  name: 'AppModalNewEvent',
  components: { AppModalSelectParticipants, AppModalDatepick, AppCloseModalBtn },
  mounted() {
    this.$modal.show('eventModal');
  },
  data() {
    return {
      meetingTypes: [
        {
          id: 0,
          name: 'Project meeting',
        },
        {
          id: 1,
          name: 'Meeting',
        },
        {
          id: 2,
          name: 'Webinar',
        },
        {
          id: 3,
          name: 'Status',
        },
        {
          id: 4,
          name: 'Other',
        },
      ],
      meetingName: null,
      meetingType: null,
      meetingMessage: null,
      meetingDate: null,
      meetingTime: null,
      meetingParticipants: null,
      today: new Date(),
    };
  },
  methods: {
    openDateModal() {
      this.$modal.show('dateModal');
    },
    openSelectModal() {
      this.$modal.show('selectModal');
    },
    getFormattedMeetingName(name) {
      return [...name.toLowerCase().trim().split(' ')].join('-');
    },
    onSendMeetingDateAndTime(datetimeArray) {
      [this.meetingTime, this.meetingDate] = datetimeArray;
    },
    onSendParticipants(participantsArray) {
      this.meetingParticipants = participantsArray;
    },
    onSubmit() {
      console.log(this.meetingName);
      console.log(this.meetingType);
      console.log(this.meetingMessage);
      console.log(this.meetingDate);
      console.log(this.meetingTime);
      console.log(this.meetingParticipants);
    },
  },
  computed: {
    isFormValid() {
      return false;
    },
    getFormattedDate() {
      if (this.meetingTime === null || this.meetingDate === null) {
        return `Today, ${this.today.getHours()}:00 — ${this.today.getHours() + 1}:00`;
      }
      const [startHour, endHour] = this.meetingTime;
      return `Today, ${startHour} — ${endHour}`;
    },
  },
};
</script>

<style lang="sass">
  @import "~@/assets/sass/blocks/modal.sass"
  @import "~@/assets/sass/blocks/chip.sass"
  @import "~@/assets/sass/blocks/datepicker.sass"
</style>
