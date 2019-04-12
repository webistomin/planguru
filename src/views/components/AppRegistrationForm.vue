<template lang="pug">
  section.reg(:class='{"hidden" : !isRegFormVisible}')
    .reg__particles#reg__particles
    .reg__container.container
      a.reg__home.home(@click="openLoginForm")
      h1.reg__title.title Sign up
      p.reg__desc.desc Create an account to use Planguru
        br
        a(href="#").reg__link.link.link_orange without limits.
        | &nbsp;For free
      form.reg__form(@submit.prevent='onSubmit' autocomplete='off')
        .reg__group
          p.reg__error.error(
            :class="{\
                'error_visible':!$v.email.email, \
                'error_shake': isInvalid\
                }"
          ) Please, enter valid email address
          p.reg__error.error(
            :class="{\
                'error_visible':!$v.email.required && $v.email.$dirty, \
                'error_shake': isInvalid\
                }"
          ) Please, enter email address
          input.reg__input.input(
            type='email'
            id='email'
            v-model.trim.lazy="$v.email.$model"
            @focus="isEmailInputFocused = true"
            @blur="isEmailInputFocused = false"
            )
          label.reg__label.label(
            for='email'
            :class="{'label_top': isEmailInputFocused || email}"
            ) Email address
        .reg__group
          p.reg__error.error(
            :class="{\
                'error_visible':!$v.password.required && $v.password.$dirty, \
                'error_shake': isInvalid\
                }"
          ) Please, enter password
          p.reg__error.error(
            :class="{\
              'error_visible':!$v.password.minLength, \
              'error_shake': isInvalid\
              }"
          ) Min length is 4 characters
          input.reg__input.input(
            type='password'
            id='password'
            v-model.trim.lazy="$v.password.$model"
            @focus="isPasswordInputFocused = true"
            @blur="isPasswordInputFocused = false"
            )
          label.reg__label.label(
            for='password'
            :class="{'label_top': isPasswordInputFocused || password}"
            ) Password
        .reg__group
          p.reg__error.error(
            :class="{\
                'error_visible':!$v.passwordRepeat.required && $v.passwordRepeat.$dirty, \
                'error_shake': isInvalid\
                }"
          ) Please, repeat your password
          p.reg__error.error(
            :class="{\
                'error_visible':!$v.passwordRepeat.sameAsPassword && $v.passwordRepeat.$dirty && \
                $v.passwordRepeat.required, \
                'error_shake': isInvalid\
                }"
          ) Passwords must be identical.
          input.reg__input.input(
            type='password'
            id='password-repeat'
            v-model.trim.lazy="$v.passwordRepeat.$model"
            @focus="isPasswordRepeatInputFocused = true"
            @blur="isPasswordRepeatInputFocused = false"
            )
          label.reg__label.label(
            for='password-repeat'
            :class="{'label_top': isPasswordRepeatInputFocused || passwordRepeat}"
            ) Repeat password
        .reg__actions
          button.reg__btn.btn.btn_orange(type='submit') Sign up
      p.reg__text.desc I already have an account.&nbsp;
        a.reg__link.link.link_purple(href='#' @click="openLoginForm") Login

</template>

<script>
import {
  required, email, minLength, sameAs,
} from 'vuelidate/lib/validators';

export default {
  name: 'AppRegistrationForm',
  data() {
    return {
      email: '',
      password: '',
      passwordRepeat: '',
      isEmailInputFocused: '',
      isPasswordInputFocused: '',
      isPasswordRepeatInputFocused: '',
      isInvalid: false,
    };
  },
  props: {
    isRegFormVisible: {
      type: Boolean,
      default: false,
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
    passwordRepeat: {
      required,
      sameAsPassword: sameAs('password'),
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
      }
    },
    openLoginForm() {
      this.$emit('openLoginForm');
    },
  },
};
</script>

<style lang="sass">
  @import "~@/assets/sass/blocks/reg.sass"
</style>
