<template>
  <section class="timeline">
    <time class="timeline__time timeline__current"
          :style="{'left': getTimelineLeftPosition}">{{getCurrentTime}}</time>
    <time class="timeline__time"
          v-for="time of times"
          :class="{'timeline__time--past': time.isPast}">
      {{time.time}}:00
    </time>
  </section>
</template>

<script>
  export default {
    name: 'Timeline',
    data() {
      return {
        now: this.$store.getters.getCurrentDate,
        times: [
          {
            time: 8,
            isPast: false,
          },
          {
            time: 9,
            isPast: false,
          },
          {
            time: 10,
            isPast: false,
          },
          {
            time: 11,
            isPast: false,
          },
          {
            time: 12,
            isPast: false,
          },
          {
            time: 13,
            isPast: false,
          },
          {
            time: 14,
            isPast: false,
          },
          {
            time: 15,
            isPast: false,
          },
          {
            time: 16,
            isPast: false,
          },
          {
            time: 17,
            isPast: false,
          },
          {
            time: 18,
            isPast: false,
          },
          {
            time: 19,
            isPast: false,
          },
          {
            time: 20,
            isPast: false,
          },
          {
            time: 21,
            isPast: false,
          },
          {
            time: 22,
            isPast: false,
          },
          {
            time: 23,
            isPast: false,
          },
        ],
      };
    },
    mounted() {
      const now = this.now;
      const hour = now.getHours();
      Object.entries(this.times).forEach(
        ([key]) => {
          if (this.times[key].time < hour) {
            this.times[key].isPast = true;
          }
        },
      );
    },
    computed: {
      getCurrentTime() {
        const now = this.now;
        const minutes = now.getMinutes();
        const hour = now.getHours();
        if (minutes < 10) {
          return `${hour}:0${minutes}`;
        }
        return `${hour}:${minutes}`;
      },
      getTimelineLeftPosition() {
        const now = this.now;
        const minutes = now.getMinutes();
        const hour = now.getHours();
        const totalHours = ((hour - 7) + (minutes / 60)).toFixed(1);
        const getWindowSize = window.screen.width;
        if (getWindowSize < 1366) {
          if (hour > 23 || hour < 7) {
            return '1295px';
          }
          return `${153 + (totalHours * 67)}px`;
        }
        if (hour > 23 || hour < 7) {
          return '1340px';
        }
        return `${220 + (totalHours * 67.2)}px`;
      },
    },
  };
</script>

<style lang="less">
  .timeline {
    display: flex;
    align-items: center;
    padding: 10px 0;
    padding-left: 223px;
    position: relative;

    &__time {
      display: block;
      width: 50px;
      margin-right: 17px;
      font-family: HelveticaNeue, Helvetica, Arial, sans-serif;
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 0.4px;
      color: #000000;
      text-align: center;
      flex-shrink: 0;
      position: relative;

      &::before {
        content: "";
        position: absolute;
        top: 22px;
        left: 50%;
        transform: translateX(-50%);
        width: 1px;
        height: 100vh;
        background-color: rgba(19,100,205,0.10);
        z-index: 1;
      }

      &--past {
        color: #858E98;
      }
    }

    &__current {
      position: absolute;
      background-color: #007DFF;
      border-radius: 100px;
      padding: 4px 0;
      margin: 0;
      color: #ffffff;
      z-index: 2;

      &::before {
        width: 1px;
        content: "";
        position: absolute;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        height: 100vh;
        background-color: #007DFF;
      }
    }

    @media (min-width: 1366px) {
      padding: 16px 0 16px 0;
      padding-left: 289px;
      background-color: #ffffff;
      width: 1387px;
      box-sizing: border-box;
      box-shadow: 0 1px 0 0 #e9ecef;

      &__time {
        &::before {
          height: calc(100vh - 116px);
          top: 28px;
          z-index: 6;
        }
      }

      &__current {
        &::before {
          height: calc(100vh - 104px);
          top: 20px;
        }
      }
    }
  }
</style>
