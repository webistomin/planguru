<template lang="pug">
  button.add-event(type="button" @click="openModal")
</template>

<script>
export default {
  name: 'AppAddEventButton',
  methods: {
    openModal() {
      this.$modal.show('eventModal');
    },
  },
};
</script>

<style lang="sass">
  @import "~@/assets/sass/blocks/add-event.sass"
</style>
