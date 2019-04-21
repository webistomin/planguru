<template lang="pug">
  Modal.modal.modal_date(
    name="selectModal"
    :scrollable="true"
    :adaptive="true"
    height="auto"
    transition="nice-modal-fade"
  )
    AppCloseModalBtn(:modal-name="'selectModal'")
    .modal__container.modal__container_padding
      p.modal__legend Invite people
      v-select.modal__select(
        :multiple="true"
        placeholder="🔍 Search by name"
        :options="participants"
        label="fullname"
        v-model="selectedParticipants"
        :closeOnSelect="false"
      )
        template(slot="selected-option" slot-scope="option")
          img(
            :src="option.avatar"
            :alt="option.fullname"
            width='28'
            height='28'
            :title="option.fullname"
            )
        template(slot="option" slot-scope="option")
          span.modal__option
            img(:src="option.avatar" :alt="option.fullname" width='28' height='28')
            span {{option.fullname}}
      p.modal__legend Recent
      ul.modal__persons
        li.modal__person(v-for="person of participants")
          figure.modal__figure
            img.modal__img(
              :src="person.avatar"
              :alt="person.fullname"
              width="40"
              height="40"
              )
          .modal__col
            .modal__desc
              h3.modal__name {{person.fullname}}
              p.modal__post {{person.post }}
            button.modal__state(
              type="button"
              :class="{'modal__state_added': person.isAdded}"
              ) {{person.isAdded ? 'Added' : 'Add'}}
</template>

<script>
import AppCloseModalBtn from '@/views/components/AppCloseModalBtn.vue';

export default {
  name: 'AppModalSelectParticipants',
  components: { AppCloseModalBtn },
  data() {
    return {
      selectedParticipants: [],
      participants: [
        {
          id: 0,
          fullname: 'Zuzanna Wiler',
          post: 'Project Manager',
          avatar: '/img/avatars/avatar-1.png',
          isAdded: true,
        },
        {
          id: 1,
          fullname: 'Mike Piechota',
          post: 'Product Designer',
          avatar: '/img/avatars/avatar-2.png',
          isAdded: false,
        },
        {
          id: 2,
          fullname: 'Dawid Wozniak',
          post: 'Senior Product Designer',
          avatar: '/img/avatars/avatar-3.png',
          isAdded: false,
        },
        {
          id: 3,
          fullname: 'Zuzanna Wiler1',
          post: 'Project Manager',
          avatar: '/img/avatars/avatar-4.png',
          isAdded: true,
        },
        {
          id: 4,
          fullname: 'Mike Piechota1',
          post: 'Product Designer',
          avatar: '/img/avatars/avatar-5.png',
          isAdded: false,
        },
        {
          id: 5,
          fullname: 'Dawid Wozniak1',
          post: 'Senior Product Designer',
          avatar: '/img/avatars/avatar-6.png',
          isAdded: false,
        },
        {
          id: 6,
          fullname: 'Dawid Wozniak12',
          post: 'Senior Product Designer',
          avatar: '/img/avatars/avatar-7.png',
          isAdded: false,
        },
      ],
    };
  },
};
</script>
