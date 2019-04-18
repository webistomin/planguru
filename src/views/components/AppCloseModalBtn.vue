<template lang="pug">
  button.modal__close(
    @click="closeModal"
    type="button"
    :aria-label="'close ' + modalName"
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
