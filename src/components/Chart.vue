<template>
  <main class="page-content">
    <aside class="aside">
      <calendar></calendar>
      <rooms></rooms>
    </aside>
    <section class="chart" @scroll="setScrollLeft($event)">
      <timeline></timeline>
      <div class="chart__block">
        <div class="room__column">
          <div class="chart__cell"></div>
          <div class="chart__cell"></div>
          <div class="chart__cell"></div>
          <div class="chart__cell"></div>
          <div class="chart__cell"></div>
          <div class="chart__cell"></div>
          <div class="chart__cell"></div>
          <div class="chart__cell"></div>
          <div class="chart__cell"></div>
          <div class="chart__cell"></div>
          <div class="chart__cell"></div>
          <div class="chart__cell"></div>
          <div class="chart__cell"></div>
          <div class="chart__cell"></div>
          <div class="chart__cell"></div>
          <div class="chart__cell"></div>
          <div class="chart__cell"></div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
  import Timeline from './Timeline';
  import Calendar from './Calendar';
  import Rooms from './Rooms';

  export default {
    name: 'Chart',
    data() {
      return {
        isScrolled: false,
      };
    },
    methods: {
      setScrollLeft(e) {
        this.isScrolled = e.target.scrollLeft >= 250;
      },
    },
    components: {
      Timeline,
      Calendar,
      Rooms,
    },
  };
</script>

<style lang="less">
  .page-content {
    padding-top: 108px;

    @media (min-width: 1366px) {
      padding-top: 0;
      margin-top: -44px;
    }
  }

  .chart {
    overflow-x: scroll;
    overflow-y: hidden;

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
        width: 245px;
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
      z-index: 1;

      &--scrolled {
        position: sticky;
        padding-top: 0;
      }
    }

    &__row {
      display: flex;

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
      z-index: 5;

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
        background-color: #d5dfe9;

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
        position: relative;

        &--taken {
          background-color: #d5dfe9;
        }
      }

      &__row {
        display: flex;
        align-items: center;
        background-color: #f6f7f9;
      }

      &__name {
        margin-bottom: 2px;
      }
    }
  }
</style>
