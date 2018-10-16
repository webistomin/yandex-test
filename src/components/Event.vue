<template>
  <section class="event">
    <div class="event__inner">
      <div class="event__heading">
        <span class="event__title">Рассуждение о высоком</span>
        <button class="event__btn">Редактировать
          <svg width="16" height="16" class="event__icon">
            <use x="2" y="2" xlink:href="#icon-pen"></use>
          </svg>
        </button>
      </div>
      <div class="event__info">
        <time class="event__date">14 декабря</time>
        ,
        <span class="event__time">15:00</span>–
        <span class="event__time">17:00</span>
        •
        <span class="event__room">Ржавый Фред</span>
      </div>
      <div class="event__participants">
        <span class="event__host">
          <img src="../../static/img/faces/oldman.jpg" width="160" height="160" alt="Дарт Вейдер" class="event__img">
          <span class="event__name">Дарт Вейдер</span>
        </span>
        &nbsp;и&nbsp;
        <span class="event__count">12</span>
        &nbsp;участников&nbsp;
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'Event',
  };
</script>

<style lang="less">
  .event {
    display: none;
    padding: 20px 16px;
    max-width: 360px;
    position: relative;
    box-shadow: 0 1px 16px 0;
    border-radius: 8px;

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
    }

    &__title {
      font-family: HelveticaNeue, Helvetica, Arial, sans-serif;
      font-size: 20px;
      font-weight: 700;
      color: #000000;
      margin-bottom: 8px;
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

        &__icon {
          .icon-fill {
            fill: #000000;
          }
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
  }
</style>
