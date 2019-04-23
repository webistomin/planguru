<template lang="pug">
  section.recovery(:class='{"hidden" : !isRecoveryFormVisible}')
    .recovery__container.container
      a.recovery__home.home(@click="openLoginForm")
        simple-svg(
          :filepath="'/img/svg-icons/icon-arrow-left.svg'"
          width="25"
          height="12"
        )
      h1.recovery__title.title Recovery password
      p.recovery__desc.desc Enter the email address and we’ll send you the link
        | to reset your password.
      form.recovery__form(@submit.prevent="onSubmit")
        .recovery__group
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
          input.recovery__input.input(
            type='email'
            id="recoveryEmail"
            v-model.trim.lazy="$v.email.$model"
            @focus="isEmailInputFocused = true"
            @blur="isEmailInputFocused = false"
            )
          label.recovery__label.label(
            for='recoveryEmail'
            :class="{'label_top': isEmailInputFocused || email }"
          ) Email address
        .reg__actions
          button.recovery__btn.btn.btn_orange(type='submit') Reset password
</template>

<script>
import { required, email } from 'vuelidate/lib/validators';

export default {
  name: 'AppRecoveryForm',
  props: {
    isRecoveryFormVisible: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      email: '',
      isEmailInputFocused: false,
      isInvalid: false,
    };
  },
  validations: {
    email: {
      required,
      email,
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
  @import "~@/assets/sass/blocks/recovery.sass"
</style>
