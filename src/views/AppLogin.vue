<template lang="pug">
  section.login
    .login__container.container
      a.login__home
        img.login__logo(src='/img/planguru-logo.png' width='107' height='24'
                        alt='Planguru' aria-label='Planguru')
      h1.login__title.title Hello!
      p.login__desc You can use your&nbsp;
        a.login__link.login__link_purple(href='#') Fingerprint
        br
        | to grant access to the app.
      form.login__form
        .login__group
          input.login__input(type='email' id='email' required v-model='email')
          label.login__label(for='email') Email address
        .login__group
          input.login__input(type='password' id='password' required)
          label.login__label(for='password') Password
        .login__actions
          button.login__btn.btn(type='submit') Login
          a.login__link.login__link_purple(href='#') Forgot password?
      p.login__text Still without account?
        a.login__link.login__link_orange(href='#')  Create one
</template>

<script>
export default {
  name: 'AppLogin',
  data() {
    return {
      email: '',
    };
  },
};
</script>

<style lang="sass">
  @import "~@/assets/sass/blocks/login.sass"
</style>
