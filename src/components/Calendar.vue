<template>
  <section class="calendar">
    <button class="calendar__btn calendar__btn--previous">Назад
      <svg width="16" height="16" class="calendar__icon">
        <use x="2" y="0" xlink:href="#icon-arrow"></use>
      </svg>
    </button>
    <time class="calendar__date">
      <span class="calendar__day">14 дек</span>
      •
      <span class="calendar__info">Сегодня</span>
    </time>
    <button class="calendar__btn calendar__btn--next">Вперед
      <svg width="16" height="16" class="calendar__icon">
        <use x="2" y="0" xlink:href="#icon-arrow"></use>
      </svg>
    </button>
  </section>
</template>

<script>
  export default {
    name: 'Calendar',
  };
</script>

<style lang="less">
  .calendar {
    padding: 12px 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 1px 0 0 #E9ECEF;

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

      &--next {
        transform: rotate(180deg);
      }
    }

    &__date {
      width: 160px;
      margin: 0 52px;
      text-align: center;
      font-family: HelveticaNeue, Helvetica, Arial, sans-serif;
      font-size: 15px;
      color: #000000;
      font-weight: 700;
    }
  }
</style>