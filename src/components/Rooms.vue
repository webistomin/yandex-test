<template>
  <section class="rooms">
    <div class="rooms__floor">
      <div class="rooms__heading">
        <span class="rooms__title">7 этаж</span>
      </div>
      <div class="rooms__block">
        <span class="rooms__name">Ржавый Фред</span>
        <span class="rooms__count">3 – 6 человек</span>
      </div>
      <div class="rooms__block">
        <span class="rooms__name">Прачечная</span>
        <span class="rooms__count">до 10 человек</span>
      </div>
      <div class="rooms__block">
        <span class="rooms__name">Желтый дом</span>
        <span class="rooms__count">до 10 человек</span>
      </div>
      <div class="rooms__block">
        <span class="rooms__name">Оранжевый тюльпан</span>
        <span class="rooms__count">3 – 6 человек</span>
      </div>
    </div>
    <div class="rooms__floor">
      <div class="rooms__heading rooms__heading--topshadow">
        <span class="rooms__title">6 этаж</span>
      </div>
      <div class="rooms__block">
        <span class="rooms__name">Джокер</span>
        <span class="rooms__count">3 – 6 человек</span>
      </div>
      <div class="rooms__block">
        <span class="rooms__name">Мариванна</span>
        <span class="rooms__count">до 10 человек</span>
      </div>
      <div class="rooms__block">
        <span class="rooms__name">Тонкий Боб</span>
        <span class="rooms__count">до 10 человек</span>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'Rooms',
  };
</script>

<style lang="less">
  .rooms {

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

      &--topshadow {
        box-shadow: 0 -1px 0 0 #e9ecef,
                    0 1px 0 0 #e9ecef;
      }
    }

    &__floor {
      border-right: 1px solid #e9ecef;
    }

    &__block {
      position: relative;
      left: 0;
      box-sizing: border-box;
      width: 180px;
      flex-shrink: 0;
      padding: 12px 16px 12px 16px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      z-index: 1;
    }

    &__name {
      font-family: HelveticaNeue, Helvetica, Arial, sans-serif;
      font-size: 15px;
      font-weight: 700;
      color: #000000;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }

    &__count {
      font-size: 13px;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
  }
</style>
