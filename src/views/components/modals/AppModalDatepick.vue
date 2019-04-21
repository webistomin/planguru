<template lang="pug">
  Modal.modal.modal_date(
    name="dateModal"
    :scrollable="true"
    :adaptive="true"
    height="auto"
    transition="nice-modal-fade"
    @before-close="emitDate"
  )
    AppCloseModalBtn(
      :modal-name="'dateModal'"
      )
    .modal__container.modal__container_padding
      p.modal__legend Choose date
      Datepicker(
        v-model="meetingDate"
        :inline="true"
        calendar-class="modal__calendar"
        )
      RangeSlider.modal__slider(
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
      )
</template>

<script>
import timeConverter from '@/assets/js/timeConverter24to12';
import AppCloseModalBtn from '@/views/components/AppCloseModalBtn.vue';

export default {
  name: 'AppModalDatepick',
  components: { AppCloseModalBtn },
  data() {
    return {
      meetingDate: null,
      meetingTime: [9, 22],
    };
  },
  methods: {
    formatter(value) {
      return timeConverter(value);
    },
    emitDate() {
      this.$emit('onSendMeetingDateAndTime', [this.meetingTime, this.meetingDate]);
    },
  },
};
</script>
