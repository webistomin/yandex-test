<template>
  <div id="app">
    <page-header></page-header>
    <calendar></calendar>
    <chart></chart>
  </div>
</template>

<script>
import pageHeader from './components/PageHeader';
import Calendar from './components/Calendar';

import Chart from './components/Chart';

export default {
  name: 'app',
  components: {
    pageHeader,
    Calendar,
    Chart,
  },
};
</script>

<style>
  body {
    margin: 0;
    font-weight: 400;
    font-family: HelveticaNeue, Helvetica, Arial, sans-serif;
    color: #000000;
    -webkit-text-size-adjust: none;
    -webkit-tap-highlight-color: transparent;
    -webkit-appearance: none;
    -webkit-overflow-scrolling:touch;
  }

  img {
    max-width: 100%;
    height: auto;
    vertical-align: top;
  }

  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  a {
    color: #ffffff;
    text-decoration: none;
  }

  li {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  p {
    margin: 0;
  }

  *:focus {
    outline: thin dotted
  }

  button {
    padding: 0;
    border: none;
    background-color: transparent;
  }
</style>
