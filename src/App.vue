<template lang="pug">
  #app
    //AppLogin
    AppRegistration
</template>

<script>
import AppLogin from './views/AppLogin.vue';
import AppRegistration from './views/AppRegistration.vue';

export default {
  components: { AppRegistration, AppLogin },
};
</script>

<style lang="sass">
  @import "~@/assets/sass/global/fonts.sass"
  @import "~@/assets/sass/global/normalize.sass"
  @import "~@/assets/sass/global/scaffolding.sass"
  @import "~@/assets/sass/global/global.sass"
  @import "~@/assets/sass/global/container.sass"
  @import "~@/assets/sass/blocks/btn.sass"
  @import "~@/assets/sass/blocks/title.sass"
  @import "~@/assets/sass/blocks/text.sass"
  @import "~@/assets/sass/blocks/link.sass"
  @import "~@/assets/sass/blocks/label.sass"
  @import "~@/assets/sass/blocks/input.sass"
  @import "~@/assets/sass/blocks/home.sass"
  @import "~@/assets/sass/blocks/error.sass"
</style>
