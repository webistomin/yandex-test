<template>
  <section class="event-delete"
           :class="{'event-delete--opened': getEventDeleteModal}">
    <div class="event-delete__inner">
      <span class="event-delete__title">Встреча будет удалена безвозвратно</span>
      <div class="event-delete__actions">
        <button class="event-delete__btn btn"
                type="button"
                @click="setEventDeleteModal">
          Отмена
        </button>
        <button class="event-delete__btn btn"
                type="button"
                @click="deleteCurrentEvent">
          Удалить
        </button>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'EventDeletePopup',
    methods: {
      setEventDeleteModal() {
        this.$store.commit('setEventDeleteModal', false);
      },
      deleteCurrentEvent() {
        this.$store.commit('deleteCurrentEvent');
        this.setEventDeleteModal();
        this.$store.commit('setNewEventModal', false);
        this.$store.commit('setEdit', false);
        this.$store.commit('setEditIndex', null);
      },
    },
    computed: {
      getEventDeleteModal() {
        return this.$store.getters.getEventDeleteModal;
      },
    },
  };
</script>

<style lang="less">
  .event-delete {
    display: none;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 50;
    width: 100%;
    height: 100%;
    background-color: rgba(0,16,33,0.40);

    &--opened {
      display: flex;
    }

    &__inner {
      background-image: url("../../static/img/face.png");
      background-repeat: no-repeat;
      background-position: center 25px;
      background-size: 50px 50px;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      max-width: 420px;
      background-color: #FFFFFF;
      box-shadow: 0 1px 16px 0 rgba(0,44,92,0.28);
      border-radius: 8px;
      padding: 88px 62px 32px 62px;
    }

    &__actions {
      width: 176px;
      display: flex;
      justify-content: space-between;
    }

    &__title {
      font-family: HelveticaNeue, Helvetica, Arial, sans-serif;
      font-weight: 700;
      color: #000000;
      font-size: 20px;
      margin-bottom: 24px;
      text-align: center;
    }

    &__btn {
      width: 80px;
      background-color: #E9ECEF;
      color: #000000;
      font-weight: 700;

      &:hover {
        background-color: #D5DFE9;
      }

      &:active {
        background-color: #98A9B9;
      }
    }
  }
</style>
