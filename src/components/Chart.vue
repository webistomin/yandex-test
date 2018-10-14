<template>
  <section class="chart">
    <timeline></timeline>
    <div class="chart__floor">
      <span class="chart__title">7 этаж</span>
      <div class="room">
        <div class="room__inner">
          <span class="room__name">Ржавый Фред</span>
          <span class="room__count">3 – 6 человек</span>
        </div>
        <div class="room__row">
          <div class="room__cell"></div>
          <div class="room__cell"></div>
          <div class="room__cell"></div>
          <div class="room__cell"></div>
          <div class="room__cell"></div>
          <div class="room__cell"></div>
          <div class="room__cell"></div>
          <div class="room__cell"></div>
          <div class="room__cell"></div>
          <div class="room__cell"></div>
          <div class="room__cell"></div>
          <div class="room__cell"></div>
          <div class="room__cell"></div>
          <div class="room__cell"></div>
          <div class="room__cell"></div>
          <div class="room__cell"></div>
          <div class="room__cell"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import Timeline from './Timeline';

  export default {
    name: 'Chart',
    components: {
      Timeline,
    },
  };
</script>

<style lang="less">
  .chart {
    overflow: auto;

    &__title {
      display: block;
      padding-top: 16px;
      padding-bottom: 8px;
      padding-left: 16px;
      font-family: HelveticaNeue, Helvetica, Arial, sans-serif;
      font-weight: 700;
      font-size: 11px;
      letter-spacing: 0.4px;
      color: #858E98;
      text-transform: uppercase;
      background: rgba(73,76,83,0.02);
    }
  }

  .room {
    display: flex;

    &__inner {
      box-sizing: border-box;
      width: 180px;
      flex-shrink: 0;
      padding: 12px 16px 12px 16px;
      display: flex;
      flex-direction: column;
    }

    &__row {
      display: flex;
    }

    &__cell {
      box-sizing: border-box;
      width: 67px;
      height: 58px;

      &:hover {
        background-color: blue;
      }
    }

    &__name {
      font-family: HelveticaNeue, Helvetica, Arial, sans-serif;
      font-size: 15px;
      font-weight: 700;
      color: #000000;
    }

    &__count {
      font-size: 13px;
    }
  }
</style>
