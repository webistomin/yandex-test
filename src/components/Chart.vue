<template>
  <main class="page-content">
    <section class="chart" @scroll="setScrollLeft($event)">
      <timeline></timeline>
      <div class="chart__floor"
           v-for="(room, index) of rooms"
           :key="room.id">
        <div class="chart__heading">
          <div class="chart__block">
            <span class="chart__title">{{room.floor}} этаж</span>
          </div>
        </div>
        <div class="room" v-for="roomData of room.roomList">
          <div class="room__row">
            <div class="room__cell"
                 :data-start="index+7"
                 :data-end="index+8"
                 :data-room="roomData.roomName"
                 :data-floor="room.floor"
                 v-for="(cell, index) of 17"
                 :key="index"
                 @click="openNewEventModal($event)">
            </div>
            <div class="room__cell--taken"
                 v-for="taken of getEventsList"
                 v-if="taken.room === roomData.roomName && taken.date === getSelectedDate">
            </div>
          </div>
          <div class="room__inner"
               :class="{'room__inner--scrolled' : isScrolled}">
            <span class="room__name"
                  :class="{'room__name--scrolled' : isScrolled}">
                  {{roomData.roomName}}
            </span>
            <span class="room__count"
                  :class="{'room__count--scrolled' : isScrolled}">
               {{roomData.roomCount}}
            </span>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
  import moment from 'moment';
  import Timeline from './Timeline';

  export default {
    name: 'Chart',
    data() {
      return {
        isScrolled: false,
        rooms: [
          {
            id: 7,
            floor: 7,
            roomList: [
              {
                roomName: 'Ржавый Фред',
                roomCount: '3 – 6 человек',
                isFull: false,
              },
              {
                roomName: 'Прачечная',
                roomCount: 'до 10 человек',
                isFull: false,
              },
              {
                roomName: 'Желтый дом',
                roomCount: 'до 10 человек',
                isFull: false,
              },
              {
                roomName: 'Оранжевый Тюльпан',
                roomCount: '3 – 6 человек',
                isFull: false,
              },
            ],
          },
          {
            id: 6,
            floor: 6,
            roomList: [
              {
                roomName: 'Джокер',
                roomCount: '3 – 6 человек',
                isFull: false,
              },
              {
                roomName: 'Мариванна',
                roomCount: 'до 10 человек',
                isFull: false,
              },
              {
                roomName: 'Тонкий Боб',
                roomCount: 'до 10 человек',
                isFull: false,
              },
            ],
          },
        ],
      };
    },
    methods: {
      setScrollLeft(e) {
        this.isScrolled = e.target.scrollLeft >= 250;
      },
      openNewEventModal(event) {
        this.$store.commit('setNewEventModal', true);
        this.$store.commit('setCurrentRoom', event.target.dataset.room);
        if (event.target.dataset.start < 10) {
          this.$store.commit('setStartTime', `0${event.target.dataset.start}:00`);
        } else {
          this.$store.commit('setStartTime', `${event.target.dataset.start}:00`);
        }
        if (event.target.dataset.end < 10) {
          this.$store.commit('setEndTime', `0${event.target.dataset.end}:00`);
        } else {
          this.$store.commit('setEndTime', `${event.target.dataset.end}:00`);
        }
        this.$store.commit('setCurrentFloor', event.target.dataset.floor);
      },
    },
    computed: {
      getEventsList() {
        return this.$store.getters.getEventsList;
      },
      getSelectedDate() {
        const date = this.$store.getters.getSelectedDate;
        return moment(date).format('YYYY-MM-DD');
      },
    },
    components: {
      Timeline,
    },
  };
</script>

<style lang="less">
  .page-content {
    padding-top: 105px;

    @media (min-width: 1366px) {
      padding-top: 0;
      margin-top: -44px;
    }
  }

  .chart {
    overflow-x: scroll;
    overflow-y: hidden;
    z-index: 1;

    &::-webkit-scrollbar-track {
      -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      background-color: #e9ecef;
      border-radius: 10px;
    }

    &::-webkit-scrollbar {
      height: 8px;
      width: 10px;
      background-color: #f5f5f5;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background-color: #1d54fe;
    }

    &__title {
      display: inline-block;
      padding-top: 16px;
      padding-bottom: 8px;
      padding-left: 16px;
      font-family: HelveticaNeue, Helvetica, Arial, sans-serif;
      font-weight: 700;
      font-size: 11px;
      letter-spacing: 0.4px;
      color: #858e98;
      text-transform: uppercase;
      position: sticky;
      left: 0;
    }

    &__heading {
      background: rgba(73, 76, 83, 0.02);
      box-shadow: 0 1px 0 0 #e9ecef;

      &--shadow {
        box-shadow: 0 -1px 0 0 #e9ecef,
        0 1px 0 0 #e9ecef;
      }
    }

    &__floor {
      display: table;
      border-right: 1px solid #e9ecef;
    }

    @media (min-width: 1366px) {
      height: calc(100vh - 63px);
      background-color: #f6f7f9;
      position: relative;
      overflow-y: auto;

      &::before {
        content: "";
        position: fixed;
        top: 110px;
        left: 0;
        background-color: #ffffff;
        width: 245px;
        height: 100%;
        z-index: 1;
        box-shadow: 1px 0 0 0 #e9ecef;
      }

      &__title {
        padding: 21px 0 8px 25px;
      }

      &__heading {
        background-color: transparent;
        box-shadow: none;
        z-index: 1;
        position: relative;

        &--shadow {
          box-shadow: 0 -1px 0 0 #e9ecef;
        }
      }

      &__block {
        width: 246px;
        position: sticky;
        left: 0;
        background-color: #ffffff;
        box-shadow: 1px 0 0 0 #e9ecef;
      }
    }
  }

  .room {
    display: flex;
    flex-direction: row-reverse;
    box-shadow: 0 1px 0 0 #e9ecef;

    &--full {
      .room__name,
      .room__count {
        color: #858e98;
      }
    }

    &__inner {
      position: relative;
      left: 0;
      box-sizing: border-box;
      width: 180px;
      flex-shrink: 0;
      padding: 12px 16px 12px 16px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      z-index: 3;

      &--scrolled {
        position: sticky;
        padding-top: 0;
      }
    }

    &__row {
      display: flex;
      position: relative;

      &:hover {
        & + .room__inner .room__name {
          color: #005cff;
        }

        & + .room__inner .room__count {
          color: #005cff;
        }
      }
    }

    &__cell {
      box-sizing: border-box;
      width: 67px;
      height: 58px;
      cursor: pointer;
      position: relative;
      z-index: 1;

      &::before,
      &::after {
        display: none;
        content: "";
        position: absolute;
        width: 2px;
        height: 10px;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
        background-color: #ffffff;
      }

      &::after {
        transform: translateX(-50%) translateY(-50%) rotate(90deg);
      }

      &:hover {
        background-color: #005cff;

        &::before,
        &::after {
          display: block;
        }
      }

      &:active {
        background-color: #1d00fe;
      }

      &--taken {
        position: absolute;
        width: 100px;
        height: 58px;
        left: 50px;
        top: 0;
        background-color: #d5dfe9;
        z-index: 3;
        cursor: pointer;

        &:hover {
          background-color: #98a9b9;

          &::before,
          &::after {
            display: none;
          }
        }

        &:active {
          background-color: #98a1b9;
        }
      }
    }

    &__name {
      font-family: HelveticaNeue, Helvetica, Arial, sans-serif;
      font-size: 15px;
      font-weight: 700;
      color: #000000;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;

      &--scrolled {
        background-color: #ffffff;
        padding: 5px 8px 6px 8px;
        border-radius: 4px;
        box-shadow: 0 1px 8px 0;
        font-size: 11px;
      }
    }

    &__count {
      font-size: 13px;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;

      &--scrolled {
        display: none;
      }
    }

    @media (min-width: 1366px) {
      box-shadow: none;

      &__inner {
        width: 245px;
        padding: 5px 25px 5px 25px;
        box-shadow: 1px 0 0 0 #e9ecef;
        margin-left: -1px;
        position: sticky;
        left: 0;
        background-color: #ffffff;
      }

      &__cell {
        width: 67.2px;
        height: 28px;
        background-color: #ffffff;
        z-index: 0;

        &--taken {
          width: 100px;
          height: 28px;
          background-color: #d5dfe9;
          position: absolute;
          left: 50px;
          top: 8px;
        }
      }

      &__row {
        display: flex;
        align-items: center;
        background-color: #f6f7f9;
        position: relative;
      }

      &__name {
        margin-bottom: 2px;
      }
    }
  }
</style>
