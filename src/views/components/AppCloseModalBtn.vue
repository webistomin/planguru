<template lang="pug">
  button.modal__close(
    @click="closeModal"
    type="button"
    :aria-label="'close ' + modalName"
    :class="{'modal__close_arrow': isArrow}"
    )
    simple-svg(
      v-if='isArrow'
      :filepath="'/img/svg-icons/icon-arrow-left.svg'"
      width="25"
      height="12"
    )
</template>

<script>
export default {
  name: 'AppCloseModalBtn',
  props: {
    modalName: {
      type: String,
      default: '',
    },
    isArrow: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    closeModal() {
      this.$modal.hide(this.modalName);
    },
  },
};
</script>

<style>

</style>
