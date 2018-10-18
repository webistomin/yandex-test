<template>
  <section class="event-form"
           :class="{'event-form--opened' : isModalOpened}">
    <form action="#" class="event-form__form">
      <span class="event-form__title">
      Новая встреча
      </span>
      <div class="event-form__block event-form__block--mr">
        <label for="theme" class="event-form__label">Тема</label>
        <input type="text" class="event-form__input" id="theme" placeholder="О чем будете говорить?">
      </div>
      <div class="event-form__block event-form__block--mb event-form__block--flex">
        <div class="event-form__wrapper">
          <label for="date" class="event-form__label">Дата и время</label>
          <input type="date" class="event-form__input" id="date" placeholder="Дата встречи">
        </div>
        <div class="event-form__inner">
          <label for="start" class="event-form__label event-form__label--hidden">Начало</label>
          <input type="time" class="event-form__input" id="start" placeholder="Начало встречи">
          <span class="event-form__dash">–</span>
          <label for="end" class="event-form__label event-form__label--hidden">Конец</label>
          <input type="time" class="event-form__input" id="end" placeholder="Конец встречи">
        </div>
      </div>
      <div class="event-form__block event-form__block--mb event-form__block--mr">
        <label for="members" class="event-form__label">Участники</label>
        <input type="text" class="event-form__input" id="members" placeholder="Например, Тор Одинович">
        <ul class="event-form__list">
          <li class="event-form__item">
            <img src="../../static/img/faces/oldman.jpg" alt="#" class="event-form__img">
            <span class="event-form__name event-form__name--padding">Лекс Лютер</span>
            <button class="event-form__button">X</button>
          </li>
          <li class="event-form__item">
            <img src="../../static/img/faces/oldman.jpg" alt="#" class="event-form__img">
            <span class="event-form__name event-form__name--padding">Лекс Лютер</span>
            <button class="event-form__button">X</button>
          </li>
        </ul>
      </div>
      <div class="event-form__block">
        <span class="event-form__label">Рекомендованные переговорки</span>
        <ul class="event-form__rooms">
          <li class="event-form__room">
            <div class="event-form__duration">
              <time class="event-form__time">16:00</time>
              –
              <time class="event-form__time">17:00</time>
            </div>
            <span class="event-form__name">Готем</span>
            &nbsp;•&nbsp;
            <span class="event-form__floor">4 этаж</span>
          </li>
          <li class="event-form__room">
            <div class="event-form__duration">
              <time class="event-form__time">16:00</time>
              –
              <time class="event-form__time">17:00</time>
            </div>
            <span class="event-form__name">Готем</span>
            &nbsp;•&nbsp;
            <span class="event-form__floor">4 этаж</span>
          </li>
        </ul>
      </div>
      <div class="event-form__actions">
        <button class="event-form__btn btn" type="button"
                @click="closeNewEventModal">Отмена</button>
        <button class="event-form__btn btn" type="submit">Создать встречу</button>
      </div>
    </form>
  </section>
</template>

<script>
  export default {
    name: 'NewEvent',
    computed: {
      isModalOpened() {
        return this.$store.getters.getNewEventModal;
      },
    },
    methods: {
      closeNewEventModal() {
        this.$store.commit('setNewEventModal', false);
      },
    },
  };
</script>

<style lang="less">
  .event-form {
    display: none;
    position: fixed;
    top: 48px;
    width: 100%;
    height: 100%;
    z-index: 100;
    background-color: #ffffff;
    padding: 24px 16px;
    box-shadow: 0 -1px 0 0 #E9ECEF;
    box-sizing: border-box;
    overflow: auto;
    padding-bottom: 216px;

    &--opened {
      display: block;
    }

    &::before {
      content: "";
      position: absolute;
      top: 304px;
      left: 0;
      width: 100%;
      height: 8px;
      background-color: #E9ECEF;
    }

    &__title {
      display: block;
      font-family: HelveticaNeue, Helvetica, Arial, sans-serif;
      font-weight: 700;
      font-size: 20px;
      color: #000000;
      margin-bottom: 16px;
      width: 100%;
    }

    &__block {
      display: flex;
      flex-direction: column;
      margin-bottom: 16px;

      &--mb {
        margin-bottom: 44px;
      }
    }

    &__label {
      font-family: HelveticaNeue, Helvetica, Arial, sans-serif;
      font-weight: 700;
      font-size: 13px;
      color: #000000;
      margin-bottom: 4px;

      &--hidden {
        display: none;
      }
    }

    &__input {
      width: 100%;
      box-sizing: border-box;
      font-family: HelveticaNeue, Helvetica, Arial, sans-serif;
      font-size: 15px;
      padding: 14px 10px;
      color: #000000;
      border: 2px solid #E9ECEF;
      border-radius: 4px;
    }

    &__inner {
      display: flex;
      align-items: center;
      margin-top: 8px;
      font-weight: 700;
    }

    &__dash {
      margin: 0 4px;
    }

    &__list {
      display: flex;
      flex-wrap: wrap;
      margin-top: 15px;
    }

    &__img {
      width: 24px;
      height: 24px;
      border-radius: 50%;
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
    }

    &__item {
      display: flex;
      align-items: center;
      background-color: #E9ECEF;
      border-radius: 16px;
      padding: 4px 8px;
      position: relative;
      width: max-content;
      margin-bottom: 8px;
      margin-right: 8px;
    }

    &__name {
      font-family: HelveticaNeue, Helvetica, Arial, sans-serif;
      font-size: 13px;
      color: #000000;
      padding-left: 12px;

      &--padding {
        padding-left: 24px;
        padding-right: 12px;
      }
    }

    &__rooms {
      display: flex;
      flex-direction: column;
    }

    &__room {
      display: flex;
      align-items: baseline;
      padding: 12px 14px;
      background-color: #E9ECEF;
      border-radius: 4px;
      margin-bottom: 8px;
      font-size: 15px;
      font-family: HelveticaNeue, Helvetica, Arial, sans-serif;
      color: #000000;

      &:hover {
        background-color: #007DFF;
        color: #ffffff;

        .event-form__name {
          color: #ffffff;
        }

        .event-form__duration {
          color: #ffffff;
        }
      }
    }

    &__duration {
      font-size: 15px;
      font-weight: 700;
      font-family: HelveticaNeue, Helvetica, Arial, sans-serif;
      color: #000000;
    }

    &__actions {
      width: 100%;
      box-sizing: border-box;
      position: fixed;
      left: 0;
      bottom: 0;
      background-color: #ffffff;
      min-height: 80px;
      padding: 15px 60px;
      text-align: center;
    }

    &__btn {
      width: 100%;
      max-width: 238px;
      margin-bottom: 8px;
    }

    @media (min-width: 768px) {
      &::before,
      &::after {
        display: none;
      }
      padding-bottom: 50px;

      &__title {
        text-align: center;
      }

      &__form {
        box-sizing: border-box;
        max-width: 880px;
        margin: 0 auto;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
      }

      &__block {
        min-width: 352px;
        max-width: 100%;

        &--mr {
          margin-right: 32px;
        }
      }

      &__actions {
        position: relative;
      }
    }

    @media (min-width: 1366px) {
      top: 62px;

      &__form {
        width: 880px;
        margin: 0 auto;
      }

      &__input {
        padding: 11px 10px;
        height: 38px;
      }

      &__title {
        text-align: left;
      }

      &__block {
        width: 420px;

        &--flex {
          max-width: 428px;
          display: flex;
          flex-direction: row;
          align-items: flex-end;
        }
      }

      &__wrapper {
        margin-right: 16px;
      }

      &__inner {
        margin-top: 0;
      }
    }


  }
</style>
