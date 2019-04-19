<template lang="pug">
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
  name: 'AppModalDatepick',
  components: { AppCloseModalBtn },
  data() {
    return {
      meetingTime: [9, 22],
    };
  },
  methods: {
    formatter(value) {
      return timeConverter(value);
    },
  },
};
</script>
