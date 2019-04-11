<template lang="pug">
  section.login
    .login__particles#login__particles
    .login__container.container
      a.login__home
        img.login__logo(src='/img/logo.svg' width='107' height='24'
                        alt='Planguru' aria-label='Planguru')
      h1.login__title.title Hello!
      p.login__desc(v-html='getLoginText')
      form.login__form(autocomplete='off' @submit.prevent="onSubmit")
        .login__group
            p.login__error(
              :class="{'login__error_visible':!$v.email.email, 'login__error_shake': isInvalid}"
              ) Please, enter valid email address
            p.login__error(
              :class="{'login__error_visible':!$v.email.required && $v.email.$dirty, 'login__error_shake': isInvalid}"
            ) Please, enter email address
            input.login__input(
              type='email'
              id='email'
              v-model.trim.lazy="$v.email.$model"
              @focus="isEmailInputFocused = true"
              @blur="isEmailInputFocused = false"
              )
            label.login__label(
              for='email'
              :class="{'login__label_top': isEmailInputFocused || email }"
              ) Email address
        .login__group
          p.login__error(
            :class="{'login__error_visible':!$v.password.minLength, 'login__error_shake': isInvalid}"
          ) Min length is 4 characters
          p.login__error(
            :class="{'login__error_visible':!$v.password.required && $v.password.$dirty, 'login__error_shake': isInvalid}"
          ) Please, enter password
          input.login__input(
            type='password'
            id='password'
            v-model.trim.lazy="$v.password.$model"
            @focus="isPasswordInputFocused = true"
            @blur="isPasswordInputFocused = false"
            )
          label.login__label(
            for='password'
            :class="{'login__label_top': isPasswordInputFocused || password}"
            ) Password
        .login__actions
          button.login__btn.btn(type='submit') Login
          a.login__link.login__link_purple(href='#') Forgot password?
      p.login__text Still without account?
        a.login__link.login__link_orange(href='#')  Create one
</template>

<script>
import { required, email, minLength } from 'vuelidate/lib/validators';
import 'particles.js';
import mobileAndTabletCheck from '../assets/js/isMobile';

export default {
  name: 'AppLogin',
  data() {
    return {
      email: '',
      password: '',
      isEmailInputFocused: false,
      isPasswordInputFocused: false,
      isInvalid: false,
    };
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
  mounted() {
    this.initParticles();
  },
  methods: {
    initParticles() {
      window.particlesJS('login__particles', {
        particles: {
          number: {
            value: 5,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: {
            value: '#ffffff',
          },
          shape: {
            type: 'circle',
            stroke: {
              width: 1,
              color: '#dfdfe4',
            },
            polygon: {
              nb_sides: 6,
            },
            image: {
              src: 'img/github.svg',
              width: 100,
              height: 100,
            },
          },
          opacity: {
            value: 0,
            random: true,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: 0.1,
              sync: false,
            },
          },
          size: {
            value: 50,
            random: true,
            anim: {
              enable: true,
              speed: 10,
              size_min: 40,
              sync: false,
            },
          },
          line_linked: {
            enable: false,
            distance: 200,
            color: '#ffffff',
            opacity: 1,
            width: 2,
          },
          move: {
            enable: true,
            speed: 8,
            direction: 'none',
            random: true,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200,
            },
          },
        },
        interactivity: {
          detect_on: 'canvas',
          events: {
            onhover: {
              enable: false,
              mode: 'grab',
            },
            onclick: {
              enable: false,
              mode: 'push',
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 400,
              line_linked: {
                opacity: 1,
              },
            },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 8,
              speed: 3,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
            push: {
              particles_nb: 4,
            },
            remove: {
              particles_nb: 2,
            },
          },
        },
        retina_detect: true,
      });
    },
    onSubmit() {
      if (this.$v.$invalid) {
        this.isInvalid = true;
        setTimeout(() => {
          this.isInvalid = false;
        }, 300);
      }
    },
  },
  computed: {
    isMobile() {
      return mobileAndTabletCheck();
    },
    getLoginText() {
      if (this.isMobile) {
        return 'You can use your&nbsp; <a href="#" class="login__link login__link_purple">Fingerprint</a> <br> to grant access to the app.';
      }
      return 'Sign in with your credentials or <br> create a new account';
    },
  },
};
</script>

<style lang="sass">
  @import "~@/assets/sass/blocks/login.sass"
</style>
