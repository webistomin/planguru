<template lang="pug">
  div.wrapper
    TheCalendar
    TheUserBlock
</template>

<script>
import TheUserBlock from '@/views/components/TheUserBlock.vue';
import TheCalendar from '@/views/components/TheCalendar.vue';

export default {
  name: 'Home',
  components: { TheCalendar, TheUserBlock },
};
</script>

<style lang="sass">

</style>
