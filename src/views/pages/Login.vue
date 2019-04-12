<template lang="pug">
  div.wrapper
    div.particles#particles
    AppLoginForm(
      :isLoginFormVisible='isLoginFormVisible'
      @openRegForm='openRegForm'
      @openRecoveryForm='openRecoveryForm'
      )
    AppRegistrationForm(
      :isRegFormVisible='isRegFormVisible'
      @openLoginForm='openLoginForm'
      )
    AppRecoveryForm(
      :isRecoveryFormVisible='isRecoveryFormVisible'
      @openLoginForm='openLoginForm'
      )
    AppFingerprint(
      :isFingerprintVisible='isFingerprintFormVisible'
      @openLoginForm='openLoginForm'
    )
</template>

<script>
import 'particles.js';
import AppLoginForm from '@/views/components/AppLoginForm.vue';
import AppRegistrationForm from '@/views/components/AppRegistrationForm.vue';
import AppRecoveryForm from '@/views/components/AppRecoveryForm.vue';
import AppFingerprint from '@/views/components/AppFingerprint.vue';

export default {
  components: {
    AppFingerprint, AppRecoveryForm, AppRegistrationForm, AppLoginForm,
  },
  data() {
    return {
      isLoginFormVisible: false,
      isRegFormVisible: false,
      isRecoveryFormVisible: false,
      isFingerprintFormVisible: true,
    };
  },
  mounted() {
    this.initParticles();
  },
  methods: {
    initParticles() {
      window.particlesJS('particles', {
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
    openRegForm() {
      this.isLoginFormVisible = false;
      this.isRecoveryFormVisible = false;
      setTimeout(() => {
        this.isRegFormVisible = true;
      }, 500);
    },
    openLoginForm() {
      this.isRegFormVisible = false;
      this.isRecoveryFormVisible = false;
      setTimeout(() => {
        this.isLoginFormVisible = true;
      }, 500);
    },
    openRecoveryForm() {
      this.isRegFormVisible = false;
      this.isLoginFormVisible = false;
      setTimeout(() => {
        this.isRecoveryFormVisible = true;
      }, 500);
    },
  },
};
</script>
