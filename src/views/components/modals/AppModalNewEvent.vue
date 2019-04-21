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
        .modal__holder
          p(:class="{\
                'error_visible':!$v.meetingName.required && $v.meetingName.$dirty, \
                'error_shake': isInvalid\
                }"
            v-if='!$v.meetingName.required'
          ).modal__error.error  Please, type name of meeting
          p(:class="{\
                'error_visible':!$v.meetingName.minLength && $v.meetingName.$dirty, \
                'error_shake': isInvalid\
                }"
          ).modal__error.error  Name must be more than 4 characters
        input.modal__input(
          type="text"
          placeholder="Name your meeting"
          v-model.trim.lazy="$v.meetingName.$model"
          autofocus)
        fieldset.modal__group
          .modal__holder
            legend.modal__legend Invite people
            p(:class="{\
                'error_visible':!$v.meetingParticipants.required && isParticipantsModalDirty, \
                'error_shake': isInvalid\
                }"
            ).modal__error.error  Please, invite someone
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
            p(:class="{\
                'error_visible':!$v.meetingDate.required && isDateModalDirty, \
                'error_shake': isInvalid\
                }"
            ).modal__error.error  Please, select meeting date
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
          .modal__holder
            legend.modal__legend Choose meeting type
            p(:class="{\
              'error_visible':!$v.meetingType.required && $v.meetingType.$dirty, \
              'error_shake': isInvalid\
              }"
            ).modal__error.error  Please, select meeting date
          .modal__wrap
            .modal__box(v-for="item of meetingTypes")
              input.modal__radio(
                type="radio"
                name="meeting-type"
                :id="`type-${getFormattedMeetingName(item.name)}`"
                :value="getFormattedMeetingName(item.name)"
                v-model.trim.lazy="$v.meetingType.$model"
                :class="{'modal__radio_disabled': meetingType && \
                  meetingType !== getFormattedMeetingName(item.name)}"
                )
              label.modal__label.chip(
                :for="`type-${getFormattedMeetingName(item.name)}`"
                :class="`chip_${getFormattedMeetingName(item.name)}`"
                ) {{item.name}}
        fieldset.modal__group
          .modal__holder
            legend.modal__legend White short description
            p(:class="{\
                'error_visible':!$v.meetingMessage.required && $v.meetingMessage.$dirty, \
                'error_shake': isInvalid\
                }"
            v-if='!$v.meetingMessage.required'
            ).modal__error.error  Please, type a message
            p(:class="{\
                'error_visible':!$v.meetingMessage.minLength && $v.meetingMessage.$dirty, \
                'error_shake': isInvalid\
                }"
            ).modal__error.error Message must be more than 5 characters
          textarea-autosize.modal__message(
            placeholder="Message..."
            v-model.trim.lazy="$v.meetingMessage.$model"
            :max-height="350"
            )
        button.modal__submit(
          type="submit"
          :class="{'modal__submit_disabled': !isFormValid,\
            'modal__submit_valid': !$v.$invalid}"
          ) Schedule meeting
        AppModalDatepick(@onSendMeetingDateAndTime="onSendMeetingDateAndTime")
        AppModalSelectParticipants(@onSendParticipants="onSendParticipants")
</template>

<script>
import { required, minLength } from 'vuelidate/lib/validators';
import timeConverter from '@/assets/js/timeConverter24to12';
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
      isParticipantsModalDirty: false,
      isDateModalDirty: false,
      today: new Date(),
      isInvalid: false,
      isSubmitted: false,
    };
  },
  validations: {
    meetingName: {
      required,
      minLength: minLength(4),
    },
    meetingType: {
      required,
    },
    meetingDate: {
      required,
    },
    meetingTime: {
      required,
    },
    meetingParticipants: {
      required,
    },
    meetingMessage: {
      required,
      minLength: minLength(5),
    },
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
      this.isDateModalDirty = true;
      [this.meetingTime, this.meetingDate] = datetimeArray;
    },
    onSendParticipants(participantsArray) {
      this.isParticipantsModalDirty = true;
      this.meetingParticipants = participantsArray;
    },
    onSubmit() {
      console.log(this.meetingName);
      console.log(this.meetingType);
      console.log(this.meetingMessage);
      console.log(this.meetingDate);
      console.log(this.meetingTime);
      console.log(this.meetingParticipants);
      this.$v.$touch();
      this.isParticipantsModalDirty = true;
      this.isDateModalDirty = true;
      if (this.$v.$invalid) {
        this.isInvalid = true;
        setTimeout(() => {
          this.isInvalid = false;
        }, 300);
      } else {
        this.isSubmitted = true;
      }
    },
  },
  computed: {
    isFormValid() {
      return false;
    },
    getFormattedDate() {
      const currentHour = this.today.getHours();
      const currentMinutes = this.today.getMinutes();
      const currentDate = this.today.toLocaleDateString();
      const getCurrentMeridiem = currentHour >= 12 ? 'PM' : 'AM';

      if (this.meetingTime === null || this.meetingDate === null) {
        return `Today, ${currentHour}:${currentMinutes < 30 ? '30' : '00'} — ${currentHour + 1}:00 ${getCurrentMeridiem}`;
      }
      const selectedDate = this.meetingDate.toLocaleDateString();
      let dayOfMeeting = null;

      if (selectedDate === currentDate) {
        dayOfMeeting = 'Today';
      } else {
        dayOfMeeting = selectedDate;
      }
      const [startHour, endHour] = this.meetingTime;
      const formattedStartHour = timeConverter(startHour, true);
      const formattedEndHour = timeConverter(endHour, true);
      const getMeridiem = endHour >= 12 ? 'PM' : 'AM';

      return `${dayOfMeeting}, ${formattedStartHour} — ${formattedEndHour} ${getMeridiem}`;
    },
  },
};
</script>

<style lang="sass">
  @import "~@/assets/sass/blocks/modal.sass"
  @import "~@/assets/sass/blocks/chip.sass"
  @import "~@/assets/sass/blocks/datepicker.sass"
</style>
