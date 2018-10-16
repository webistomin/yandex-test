<template>
  <section class="timeline">
    <time class="timeline__time timeline__current">8:05</time>
    <time class="timeline__time timeline__time--past">8:00</time>
    <time class="timeline__time">9:00</time>
    <time class="timeline__time">10:00</time>
    <time class="timeline__time">11:00</time>
    <time class="timeline__time">12:00</time>
    <time class="timeline__time">13:00</time>
    <time class="timeline__time">14:00</time>
    <time class="timeline__time">15:00</time>
    <time class="timeline__time">16:00</time>
    <time class="timeline__time">17:00</time>
    <time class="timeline__time">18:00</time>
    <time class="timeline__time">19:00</time>
    <time class="timeline__time">20:00</time>
    <time class="timeline__time">21:00</time>
    <time class="timeline__time">22:00</time>
    <time class="timeline__time">23:00</time>
  </section>
</template>

<script>
  export default {
    name: 'Timeline',
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
      z-index: 1;

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
      padding: 17px 0 16px 0;
      padding-left: 289px;
      background-color: #ffffff;

      &__time {
        &::before {
          top: 28px;
          z-index: 6;
        }
      }

      &__current {
        &::before {
          top: 20px;
        }
      }
    }
  }
</style>
