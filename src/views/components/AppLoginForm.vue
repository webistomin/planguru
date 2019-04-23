<template lang="pug">
  section.login(:class='{"hidden" : !isLoginFormVisible}')
    .login__container.container
      a.login__home.home
        img.login__logo(src='/img/logo.svg' width='107' height='24'
                        alt='Planguru' aria-label='Planguru')
      h1.login__title.title Hello!
      p.login__desc.text(v-if="isMobile") You can use your&nbsp;
        a.login__link.link.link_purple(href="#" @click="openFingerprintForm") Fingerprint
        br
        | to grant access to the app.
      p.login__desc.text(v-else) Sign in with your credentials or
        br
        | create a new account
      form.login__form(autocomplete='off' @submit.prevent="onSubmit")
        .login__group
            p.login__error.error(
              :class="{\
                'error_visible':!$v.email.email, \
                'error_shake': isInvalid\
                }"
              ) Please, enter valid email address
            p.login__error.error(
              :class="{\
                'error_visible':!$v.email.required && $v.email.$dirty, \
                'error_shake': isInvalid\
                }"
            ) Please, enter email address
            input.login__input.input(
              type='email'
              id='email'
              v-model.trim.lazy="$v.email.$model"
              @focus="isEmailInputFocused = true"
              @blur="isEmailInputFocused = false"
              )
            label.login__label.label(
              for='email'
              :class="{'label_top': isEmailInputFocused || email }"
              ) Email address
        .login__group
          p.login__error.error(
            :class="{\
              'error_visible':!$v.password.minLength, \
              'error_shake': isInvalid\
              }"
          ) Min length is 4 characters
          p.login__error.error(
            :class="{\
              'error_visible':!$v.password.required && $v.password.$dirty, \
              'error_shake': isInvalid\
              }"
          ) Please, enter password
          input.login__input.input(
            type='password'
            id='password'
            v-model.trim.lazy="$v.password.$model"
            @focus="isPasswordInputFocused = true"
            @blur="isPasswordInputFocused = false"
            )
          label.login__label.label(
            for='password'
            :class="{'label_top': isPasswordInputFocused || password}"
            ) Password
        .login__actions
          button.login__btn.btn.btn_purple(type='submit') Login
          a.login__link.link.link_purple(href='#' @click="openRecoveryForm") Forgot password?
      p.login__text.text Still without account?
        a.login__link.link.link_orange(href='#' @click='openRegForm')  Create one
</template>

<script>
import { required, email, minLength } from 'vuelidate/lib/validators';
import mobileAndTabletCheck from '@/assets/js/isMobile';

export default {
  name: 'AppLoginForm',
  data() {
    return {
      email: '',
      password: '',
      isEmailInputFocused: false,
      isPasswordInputFocused: false,
      isInvalid: false,
    };
  },
  props: {
    isLoginFormVisible: {
      type: Boolean,
      default: true,
    },
  },
  validations: {
    email: {
      required,
      email,
    },
    password: {
      required,
      minLength: minLength(4),
    },
  },

  methods: {
    onSubmit() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.isInvalid = true;
        setTimeout(() => {
          this.isInvalid = false;
        }, 300);
      } else {
        this.$router.push('/home');
      }
    },
    openRegForm() {
      this.$emit('openRegForm');
    },
    openRecoveryForm() {
      this.$emit('openRecoveryForm');
    },
    openFingerprintForm() {
      this.$emit('openFingerprintForm');
    },
  },
  computed: {
    isMobile() {
      return mobileAndTabletCheck();
    },
  },
};
</script>

<style lang="sass">
  @import "~@/assets/sass/blocks/login.sass"
</style>
