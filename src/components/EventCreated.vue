<template>
  <section class="event-created"
           :class="{'event-created--opened': getEventCreatedModal}">
    <div class="event-created__inner">
      <span class="event-created__title">Встреча создана</span>
      <div class="event-created__info">
        <span class="event-created__date">{{getSelectedDate}}</span>,
        <div class="event-created__duration">
          <span class="event-created__time">{{getStartTime}}</span>
          –
          <span class="event-created__time">{{getEndTime}}</span>
        </div>
        <div class="event-created__place">
          <span class="event-created__room">{{getCurrentRoom}}</span>
          •
          <span class="event-created__floor">{{getCurrentFloor}} этаж</span>
        </div>
      </div>
      <button class="event-created__btn btn"
              type="button"
              @click="setEventCreatedModal">
        Хорошо
      </button>
    </div>
  </section>
</template>

<script>
  import moment from 'moment';

  export default {
    name: 'EventCreated',
    computed: {
      getEventCreatedModal() {
        return this.$store.getters.getEventCreatedModal;
      },
      getCurrentRoom() {
        return this.$store.getters.getCurrentRoom;
      },
      getCurrentFloor() {
        return this.$store.getters.getCurrentFloor;
      },
      getStartTime() {
        return this.$store.getters.getStartTime;
      },
      getEndTime() {
        return this.$store.getters.getEndTime;
      },
      getSelectedDate() {
        const date = this.$store.getters.getSelectedDate;
        moment.locale('ru');
        return `${moment(date).format('DD MMMM')}`;
      },
    },
    methods: {
      setEventCreatedModal() {
        this.$store.commit('setEventCreatedModal', false);
      },
    },
  };
</script>

<style lang="less">
  .event-created {
    display: none;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    z-index: 50;
    width: 100%;
    height: 100%;
    background-color: rgba(0,16,33,0.40);

    &--opened {
      display: flex;
    }

    &__inner {
      background-image: url("../../static/img/emoji2.svg");
      background-repeat: no-repeat;
      background-position: center 25px;
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

    &__title {
      font-family: HelveticaNeue, Helvetica, Arial, sans-serif;
      font-weight: 700;
      color: #000000;
      font-size: 20px;
      margin-bottom: 8px;
      text-align: center;
    }

    &__info {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      font-family: HelveticaNeue, Helvetica, Arial, sans-serif;
      font-size: 15px;
      color: #000000;
    }

    &__place {
      width: 100%;
      text-align: center;
      margin-top: 6px;
      margin-bottom: 24px;
    }

    &__btn {
      width: 84px;
    }
  }
</style>
