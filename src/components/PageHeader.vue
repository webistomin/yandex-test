<template>
  <header class="page-header">
    <a href="" class="page-header__link">
      <img class="page-header__logo" src="../../static/img/logo.svg"
           alt="Yandex Переговорки" width="175" height="26">
    </a>
    <button class="page-header__btn page-header__btn--hidden btn">Создать встречу</button>
  </header>
</template>

<script>
  export default {
    name: 'PageHeader',
  };
</script>

<style lang="less">
  @import '../assets/btn';

  .page-header{
    padding: 13px 20px 9px 20px;
    box-shadow: 0 1px 0 0 #E9ECEF;

    &__link {
      display: block;
    }

    &__btn {
      &--hidden {
        display: none;
      }
    }
  }
</style>
