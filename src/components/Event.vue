<template>
  <section class="event" :class="{'event--opened': isOpened}"
           :style="{left: getLeftPosition, top: getTopPosition}">
    <div class="event__inner" v-if="getCurrentEvent != null">
      <div class="event__heading">
        <span class="event__title">{{getCurrentEvent.theme}}</span>
        <button class="event__btn" @click="editSelectedEvent">Редактировать
          <svg width="12" height="12" class="event__icon">
            <use x="0" y="0" xlink:href="#icon-pen"></use>
          </svg>
        </button>
      </div>
      <div class="event__info">
        <time class="event__date">{{getCurrentEventDate}}</time>,
        <span class="event__time">{{getCurrentEvent.startTime}}</span> –
        <span class="event__time">{{getCurrentEvent.endTime}}</span>
        •
        <span class="event__room">{{getCurrentEvent.room}}</span>
      </div>
      <div class="event__participants">
        <span class="event__host">
          <img src="../../static/img/faces/spider-man.jpg"
               alt="Дарт Вейдер"
               class="event__img">
          <span class="event__name">Вы</span>
        </span>&nbsp;и&nbsp;
        <span class="event__count">{{getMembersCount}}</span>
        &nbsp;{{getCorrectEnding(getMembersCount, ['участник', 'участника', 'участников'])}}
      </div>
    </div>
  </section>
</template>

<script>
  import moment from 'moment';

  export default {
    name: 'Event',
    methods: {
      getCorrectEnding(number, word) {
        const cases = [2, 0, 1, 1, 1, 2];
        return word[(number % 100 > 4 && number % 100 < 20) ?
          2 :
          cases[(number % 10 < 5) ? number % 10 : 5]];
      },
      editSelectedEvent() {
        const currentEvent = this.getCurrentEvent;
        const events = this.getEventsList;
        console.log(events.indexOf(events.find(obj => obj.id === `${currentEvent.id}}`)));
        this.$store.commit('setNewEventModal', true);
      },
    },
    computed: {
      isOpened() {
        return this.$store.getters.getEventModal;
      },
      getLeftPosition() {
        return `${-172}px`;
      },
      getTopPosition() {
        return `${36}px`;
      },
      getCurrentEvent() {
        return this.$store.getters.getCurrentEvent;
      },
      getCurrentEventDate() {
        const date = this.getCurrentEvent.date;
        moment.locale('ru');
        return `${moment(date).format('DD MMMM')}`;
      },
      getMembersCount() {
        return Object.keys(this.getCurrentEvent.members).length;
      },
      getEventsList() {
        return this.$store.getters.getEventsList;
      },
    },
  };
</script>

<style lang="less">
  .event {
    position: absolute;
    display: none;
    padding: 20px 16px;
    width: 360px;
    box-shadow: 0 1px 16px 0;
    border-radius: 8px;
    z-index: 6;
    background-color: #ffffff;

    &--opened {
      display: block;
    }

    &::before {
      content: "";
      position: absolute;
      top: -10px;
      left: 50%;
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 0 9px 10px;
      border-color: transparent transparent #ffffff;
    }

    &__heading {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 8px;
    }

    &__title {
      font-family: HelveticaNeue, Helvetica, Arial, sans-serif;
      font-size: 20px;
      font-weight: 700;
      color: #000000;
      max-width: 200px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    &__icon {
      fill: #afb4b8;
    }

    &__btn {
      width: 24px;
      height: 24px;
      background-color: #e9ecef;
      border-radius: 16px;
      font-size: 0;

      &:hover,
      &:focus {
        background-color: #f2f3f4;

        .event__icon {
          fill: #000000;
        }
      }
    }

    &__info {
      font-family: HelveticaNeue, Helvetica, Arial, sans-serif;
      font-size: 15px;
      color: #333333;
      margin-bottom: 16px;
    }

    &__img {
      width: 32px;
      height: 31px;
      border-radius: 50%;
    }

    &__host,
    &__participants {
      display: flex;
      align-items: center;
      font-family: HelveticaNeue, Helvetica, Arial, sans-serif;
      font-size: 15px;
      color: #000000;
      font-weight: 700;
    }

    &__name {
      padding-left: 8px;
    }

    &__participants {
      color: #858e98;
    }

    &__img {
      width: 24px;
      height: 24px;
    }
  }
</style>
