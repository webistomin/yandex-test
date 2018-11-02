<template>
  <section class="calendar">
    <button class="calendar__btn calendar__btn--previous"
            @click="removeOneDay"
            title="Предыдущий день">Назад
      <svg width="10" height="10" class="calendar__icon">
        <use x="0" y="0" xlink:href="#icon-arrow"></use>
      </svg>
    </button>
    <time class="calendar__date" title="Выберите дату">
      <datepicker :language="language"
                  v-model="now"
                  :monday-first="true"
                  :placeholder="getCalendarPlaceholder"
                  :input-class="'calendar__datepicker'"
                  :calendar-class="'calendar__calendar'"
                  :format="customFormatter"
                  @input="setSelectedDate"
                  :highlighted="{
                    days: [6, 0],
                  }">
      </datepicker>
    </time>
    <button class="calendar__btn calendar__btn--next"
            @click="addOneDay"
            title="Следующий день">Вперед
      <svg width="10" height="10" class="calendar__icon">
        <use x="0" y="0" xlink:href="#icon-arrow"></use>
      </svg>
    </button>
  </section>
</template>

<script>
  import Datepicker from 'vuejs-datepicker';
  import { ru } from 'vuejs-datepicker/dist/locale';
  import moment from 'moment';

  export default {
    data() {
      return {
        language: ru,
        now: '',
      };
    },
    name: 'Calendar',
    components: {
      Datepicker,
    },
    methods: {
      customFormatter(date) {
        moment.locale('ru');
        return moment(date).format('DD MMMM');
      },
      addOneDay() {
        const result = this.now || new Date();
        result.setDate(result.getDate() + 1);
        this.now = new Date(result);
        this.$store.commit('setSelectedDate', this.now);
      },
      removeOneDay() {
        const result = this.now || new Date();
        result.setDate(result.getDate() - 1);
        this.now = new Date(result);
        this.$store.commit('setSelectedDate', this.now);
      },
      setSelectedDate() {
        this.$store.commit('setSelectedDate', this.now);
      },
    },
    computed: {
      getCalendarPlaceholder() {
        const now = this.$store.getters.getCurrentDate;
        moment.locale('ru');
        return `${moment(now).format('DD MMM')} • Сегодня`;
      },
    },
  };
</script>

<style lang="less">
  .calendar {
    padding: 12px 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 1px 0 0 #E9ECEF;

    &__calendar {
      left: -70px;
      top: 37px;

      & .cell.highlighted {
        color: red !important;
        background-color: transparent !important;
      }

      & .cell.selected,
      & .cell.selected.highlighted {
        background-color: #0070E0 !important;
        color: #ffffff !important;

        &:hover {
          background-color: #0070E0 !important;
          color: #ffffff !important;
        }
      }

      & .cell {
        &:hover {
          color: #0070E0 !important;
          border: 1px solid #0070E0 !important;
        }
      }
    }

    &__datepicker {
      border: none;
      text-align: center;
      cursor: pointer;
      font-family: HelveticaNeue, Helvetica, Arial, sans-serif;
      font-size: 15px;
      color: #000000;
      font-weight: 700;
      margin: 0;
      max-width: 160px;
      user-select: none;

      &:hover,
      &:focus {
        color: #0070E0;
        &::placeholder {
          color: #0070E0;
        }
      }

      &::placeholder {
        font-family: HelveticaNeue, Helvetica, Arial, sans-serif;
        font-size: 15px;
        color: #000000;
        font-weight: 700;
      }
    }

    &__icon {
      stroke: #AFB4B8;
    }

    &__btn {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 32px;
      height: 32px;
      background-color: #E9ECEF;
      border-radius: 16px;
      font-size: 0;
      flex-shrink: 0;
      position: relative;
      cursor: pointer;

      &:hover,
      &:focus {
        background-color: #f2f3f4;

        & .calendar__icon {
          stroke: #000;
        }
      }

      &--next {
        transform: rotate(180deg);
      }
    }

    &__date {
      max-width: 128px;
      margin: 0 52px;
      text-align: center;
      font-family: HelveticaNeue, Helvetica, Arial, sans-serif;
      font-size: 15px;
      color: #000000;
      font-weight: 700;
      cursor: pointer;
      display: flex;
      justify-content: center;
    }

    @media (min-width: 1366px) {
      margin-top: 1px;
      box-sizing: border-box;
      width: 245px;
      padding: 10px 24px 11px 24px;
      box-shadow: 1px 1px 0 0 #e9ecef;
      z-index: 2;
      background-color: #ffffff;
      position: relative;

      &__datepicker {
        max-width: 130px;
        letter-spacing: -0.02em;
      }

      &__calendar {
        left: -35px;
        top: 32px;
      }

      &__btn {
        width: 24px;
        height: 24px;
      }

      &__date {
        margin: 0 13px;
      }
    }
  }
</style>
