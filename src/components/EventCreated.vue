<template>
  <section class="event-created">
    <div class="event-created__inner">
      <span class="event-created__title">Встреча создана</span>
      <div class="event-created__info">
        <span class="event-created__date">14 декабря</span>,
        <div class="event-created__duration">
          <span class="event-created__time">15:00</span>
          –
          <span class="event-created__time">17:00</span>
        </div>
        <div class="event-created__place">
          <span class="event-created__room">Готем</span>
          •
          <span class="event-created__floor">4 этаж</span>
        </div>
      </div>
      <button class="event-created__btn btn">Хорошо</button>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'EventCreated',
  };
</script>

<style lang="less">
  .event-created {
    display: flex;
    display: none;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    z-index: 50;
    width: 100%;
    height: 100%;
    background-color: rgba(0,16,33,0.40);

    &__inner {
      background-image: url("../../static/img/emoji2.svg");
      background-repeat: no-repeat;
      background-position: center 25px;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      max-width: 420px;
      background-color: #FFFFFF;
      box-shadow: 0 1px 16px 0 rgba(0,44,92,0.28);
      border-radius: 8px;
      padding: 88px 62px 32px 62px;
    }

    &__title {
      font-family: HelveticaNeue, Helvetica, Arial, sans-serif;
      font-weight: 700;
      color: #000000;
      font-size: 20px;
      margin-bottom: 8px;
      text-align: center;
    }

    &__info {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      font-family: HelveticaNeue, Helvetica, Arial, sans-serif;
      font-size: 15px;
      color: #000000;
    }

    &__place {
      width: 100%;
      text-align: center;
      margin-top: 6px;
      margin-bottom: 24px;
    }

    &__btn {
      width: 84px;
    }
  }
</style>
