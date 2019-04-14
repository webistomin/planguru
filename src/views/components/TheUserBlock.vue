<template lang="pug">
  section.account
    .account__particles#account-particles
    .account__inner
      .account__notifications
        button.account__button(type='button')
        .account__user
          p.account__username Hello,
            span.account__decor Patryk
          a.account__userlink.account__userlink_notification(href="#")
            figure.account__userpic
              img.account__img(src='/img/avatar.png' width='40' height='40')
      .account__meetings
        .account__heading
          h2.account__title.title Meetings
          span.account__counter.pill.pill_green 4
        ul.account__list
          li.account__item.account__item_project-meeting
            h3.account__theme Project daily stand-up
            .account__date
              time.account__time 10:00 AM
              | &nbsp;–&nbsp;
              time.account__time 10:30 AM
            ul.account__participants
              li.account__participant
                figure.account__figure
                  img.account__img(src='/img/ava-1.png' width='24' height='24')
              li.account__participant
                figure.account__figure
                  img.account__img(src='/img/ava-2.png' width='24' height='24')
              li.account__participant
                figure.account__figure
                  img.account__img(src='/img/ava-3.png' width='24' height='24')
              li.account__participant
                figure.account__figure
                  img.account__img(src='/img/ava-4.png' width='24' height='24')
              li.account__status
                span.account__status
          li.account__item.account__item_project-meeting
            h3.account__theme Project daily stand-up
            .account__date
              time.account__time 10:00 AM
              | &nbsp;–&nbsp;
              time.account__time 10:30 AM
            ul.account__participants
              li.account__participant
                figure.account__figure
                  img.account__img(src='/img/ava-1.png' width='24' height='24')
              li.account__participant
                figure.account__figure
                  img.account__img(src='/img/ava-2.png' width='24' height='24')
              li.account__participant
                figure.account__figure
                  img.account__img(src='/img/ava-3.png' width='24' height='24')
              li.account__participant
                figure.account__figure
                  img.account__img(src='/img/ava-4.png' width='24' height='24')
              li.account__status
                span.account__status
</template>

<script>
import 'particles.js';

export default {
  name: 'TheUserBlock',
  mounted() {
    this.initParticles();
  },
  methods: {
    initParticles() {
      window.particlesJS('account-particles', {
        particles: {
          number: {
            value: 6,
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
              enable: false,
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
  },
};
</script>

<style lang="sass">
  @import "~@/assets/sass/blocks/account.sass"
</style>
