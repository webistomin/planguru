<template lang="pug">
  AModal(
    :visible="true"
    :footer="null"
    :mask="false"
    :closable="false"
    wrapClassName="ant-modal-wrap_new-event"
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
          button.modal__date(type="button") Today, 08:00 — 09:00 AM
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
          textarea.modal__message(placeholder="Message...")
        button.modal__submit(type="submit") Schedule meeting
</template>

<script>
export default {
  name: 'AppModalNewEvent',
  data() {
    return {
      meetingName: '',
      meetingType: '',
    };
  },
};
</script>

<style lang="sass">
  @import "~@/assets/sass/blocks/modal.sass"
  @import "~@/assets/sass/blocks/chip.sass"
</style>
