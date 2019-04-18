<template lang="pug">
  Modal(
    name="eventModal"
    width="100%"
    height="100%"
    :scrollable="true"
    :adaptive="true"
    transition="nice-modal-fade"
  ).modal.modal_new-event
    .modal__inner
      button.modal__close(type="button")
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
          button.modal__btn(type="button")
        fieldset.modal__group
          .modal__holder
            legend.modal__legend Choose date
            p.modal__error.error
          button.modal__date(type="button" @click="openDateModal") Today, 08:00 — 09:00 AM
        fieldset.modal__group
          legend.modal__legend Choose meeting type
          .modal__wrap
            .modal__box
              input.modal__radio(
                type="radio"
                name="meeting-type"
                id="type-project-meeting"
                value="project-meeting"
                v-model="meetingType"
                :class="{'modal__radio_disabled': meetingType && meetingType !== 'project-meeting'}"
                )
              label.modal__label.chip.chip_green(for="type-project-meeting") Project meeting
            .modal__box
              input.modal__radio(
                type="radio"
                name="meeting-type"
                id="type-meeting"
                value="meeting"
                v-model="meetingType"
                :class="{'modal__radio_disabled': meetingType && meetingType !== 'meeting'}"
                )
              label.modal__label.chip.chip_blue(for="type-meeting") Meeting
            .modal__box
              input.modal__radio(
                type="radio"
                name="meeting-type"
                id="type-webinar"
                value="webinar"
                v-model="meetingType"
                :class="{'modal__radio_disabled': meetingType && meetingType !== 'webinar'}"
                )
              label.modal__label.chip.chip_orange(for="type-webinar") Webinar
            .modal__box
              input.modal__radio(
                type="radio"
                name="meeting-type"
                id="type-status"
                value="status"
                v-model="meetingType"
                :class="{'modal__radio_disabled': meetingType && meetingType !== 'status'}"
                )
              label.modal__label.chip.chip_purple(for="type-status") Status
            .modal__box
              input.modal__radio(
                type="radio"
                name="meeting-type"
                id="type-other"
                value="other"
                v-model="meetingType"
                :class="{'modal__radio_disabled': meetingType && meetingType !== 'other'}"
                )
              label.modal__label.chip.chip_lightblue(for="type-other") Other
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
        Modal(
          name="dateModal"
          :scrollable="true"
          :adaptive="true"
          transition="nice-modal-fade"
        ).modal.modal_date
          AppCloseModalBtn(:modal-name="'dateModal'")
          .modal__container.modal__container_padding
            p.modal__legend Choose date
            datepicker(:inline="true" calendar-class="modal__calendar")
            RangeSlider(
              v-model="meetingTime"
              height="2px"
              :min="9"
              :max="22"
              :interval="0.5"
              :min-range="1"
              :enable-cross="false"
              tooltip="always"
              :tooltipFormatter="formatter"
              :tooltip-placement="['top', 'bottom']"
              :useKeyboard="true"
              :marks="[12, 15, 18, 21]"
              ).modal__slider
</template>

<script>
import timeConverter from '@/assets/js/timeConverter24to12';
import AppCloseModalBtn from '@/views/components/AppCloseModalBtn.vue';

export default {
  name: 'AppModalNewEvent',
  components: { AppCloseModalBtn },
  mounted() {
    this.$modal.show('eventModal');
  },
  data() {
    return {
      meetingName: '',
      meetingType: '',
      meetingMessage: '',
      meetingTime: [9, 22],
    };
  },
  methods: {
    openDateModal() {
      this.$modal.show('dateModal');
    },
    formatter(value) {
      return timeConverter(value);
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
