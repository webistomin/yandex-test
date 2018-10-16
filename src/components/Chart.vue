<template>
  <main class="page-content">
    <section class="chart" @scroll="setScrollLeft($event)">
      <timeline></timeline>
      <div class="chart__floor">
        <div class="chart__heading chart__heading--shadow">
          <div class="chart__block">
            <span class="chart__title">7 этаж</span>
          </div>
        </div>
        <div class="room room--full">
          <div class="room__row"  >
            <div class="room__cell room__cell--taken"></div>
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
          <div class="room__inner"
               :class="{'room__inner--scrolled' : isScrolled}">
            <span class="room__name"
                  :class="{'room__name--scrolled' : isScrolled}">Ржавый Фред</span>
            <span class="room__count"
                  :class="{'room__count--scrolled' : isScrolled}">3 – 6 человек</span>
          </div>
        </div>
        <div class="room">
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
          <div class="room__inner"
               :class="{'room__inner--scrolled' : isScrolled}">
            <span class="room__name"
                  :class="{'room__name--scrolled' : isScrolled}">Прачечная</span>
            <span class="room__count"
                  :class="{'room__count--scrolled' : isScrolled}">до 10 человек</span>
          </div>
        </div>
        <div class="room">
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
          <div class="room__inner"
               :class="{'room__inner--scrolled' : isScrolled}">
            <span class="room__name"
                  :class="{'room__name--scrolled' : isScrolled}">Желтый дом</span>
            <span class="room__count"
                  :class="{'room__count--scrolled' : isScrolled}">до 10 человек</span>
          </div>
        </div>
        <div class="room">
          <div class="room__row"  >
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
          <div class="room__inner"
               :class="{'room__inner--scrolled' : isScrolled}">
            <span class="room__name"
                  :class="{'room__name--scrolled' : isScrolled}">Оранжевый тюльпан</span>
            <span class="room__count"
                  :class="{'room__count--scrolled' : isScrolled}">3 – 6 человек</span>
          </div>
        </div>
      </div>
      <div class="chart__floor">
        <div class="chart__heading">
          <div class="chart__block">
            <span class="chart__title">6 этаж</span>
          </div>
        </div>
        <div class="room">
          <div class="room__row"  >
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
          <div class="room__inner"
               :class="{'room__inner--scrolled' : isScrolled}">
            <span class="room__name"
                  :class="{'room__name--scrolled' : isScrolled}">Джокер</span>
            <span class="room__count"
                  :class="{'room__count--scrolled' : isScrolled}">3 – 6 человек</span>
          </div>
        </div>
        <div class="room">
          <div class="room__row"  >
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
          <div class="room__inner"
               :class="{'room__inner--scrolled' : isScrolled}">
            <span class="room__name"
                  :class="{'room__name--scrolled' : isScrolled}">Мариванна</span>
            <span class="room__count"
                  :class="{'room__count--scrolled' : isScrolled}">до 10 человек</span>
          </div>
        </div>
        <div class="room">
          <div class="room__row"  >
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
          <div class="room__inner"
               :class="{'room__inner--scrolled' : isScrolled}">
            <span class="room__name"
                  :class="{'room__name--scrolled' : isScrolled}">Тонкий Боб</span>
            <span class="room__count"
                  :class="{'room__count--scrolled' : isScrolled}">до 10 человек</span>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
  import Timeline from './Timeline';

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
    },
  };
</script>

<style lang="less">
  .page-content {
    padding-top: 104px;

    @media (min-width: 1366px) {
      padding-top: 0;
      margin-top: -44px;
    }
  }

  .chart {
    overflow-x: scroll;
    overflow-y: hidden;

    &__title {
      display: inline-block;
      padding-top: 16px;
      padding-bottom: 8px;
      padding-left: 16px;
      font-family: HelveticaNeue, Helvetica, Arial, sans-serif;
      font-weight: 700;
      font-size: 11px;
      letter-spacing: 0.4px;
      color: #858E98;
      text-transform: uppercase;
      position: sticky;
      left: 0;
    }

    &__heading {
      background: rgba(73,76,83,0.02);
      box-shadow: 0 1px 0 0 #E9ECEF;

      &--shadow {
        box-shadow: 0 -1px 0 0 #E9ECEF,
                    0 1px 0 0 #E9ECEF;
      }
    }

    &__floor {
      display: table;
      border-right: 1px solid #E9ECEF;
    }

    @media (min-width: 1366px) {
      height: calc(100vh - 63px);
      background-color: #F6F7F9;
      position: relative;

      &::before {
        content: "";
        position: fixed;
        top: 110px;
        left: 0;
        background-color: #ffffff;
        width: 245px;
        height: 100%;
        z-index: 1;
        box-shadow: 1px 0 0 0 #E9ECEF;
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
          box-shadow: 0 -1px 0 0 #E9ECEF;
        }
      }

      &__block {
        width: 245px;
        position: sticky;
        left: 0;
        background-color: #ffffff;
        box-shadow: 1px 0 0 0 #E9ECEF;
      }
    }
  }

  .room {
    display: flex;
    flex-direction: row-reverse;
    box-shadow: 0 1px 0 0 #E9ECEF;

    &--full {
      .room__name,
      .room__count {
        color: #858E98;
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
          color: #005CFF;
        }

        & + .room__inner .room__count {
          color: #005CFF;
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
        background-color: #005CFF;

        &::before,
        &::after {
          display: block;
        }
      }

      &--taken {
        background-color: #D5DFE9;

        &:hover {
          background-color: #98A9B9;

          &::before,
          &::after {
            display: none;
          }
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
        box-shadow: 1px 0 0 0 #E9ECEF;
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
      }

      &__row {
        display: flex;
        align-items: center;
        background-color: #F6F7F9;
      }

      &__name {
        margin-bottom: 2px;
      }
    }
  }
</style>
