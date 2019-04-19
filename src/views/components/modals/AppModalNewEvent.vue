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
      AppCloseModalBtn(:modalName="'eventModal'" :isArrow="true")
      form.modal__form
        input.modal__input(
          type="text"
          placeholder="Name your meeting"
          v-model="meetingName"
          autofocus)
        fieldset.modal__group
          .modal__holder
            legend.modal__legend Invite people
            p.modal__error.error
          button.modal__btn(type="button" @click="openSelectModal")
        fieldset.modal__group
          .modal__holder
            legend.modal__legend Choose date
            p.modal__error.error
          button.modal__date(type="button" @click="openDateModal") Today, 08:00 — 09:00 AM
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
          textarea.modal__message(
            placeholder="Message..."
            v-model="meetingMessage"
            )
        button.modal__submit(
          type="submit"
          :class="{'modal__submit_disabled': !isFormValid}"
          ) Schedule meeting
        AppModalDatepick
        AppModalSelectParticipants
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
      meetingName: '',
      meetingType: '',
      meetingMessage: '',
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
  },
  computed: {
    isFormValid() {
      return false;
    },
  },
};
</script>

<style lang="sass">
  @import "~@/assets/sass/blocks/modal.sass"
  @import "~@/assets/sass/blocks/chip.sass"
  @import "~@/assets/sass/blocks/datepicker.sass"
</style>
