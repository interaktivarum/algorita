<template>
  <div id="app">
    <pma-header id="headerview" class="hideInPrint"></pma-header>
    <router-view id="routerview"/>
    <pma-footer id="footerview" class="hideInPrint"></pma-footer>
  </div>
</template>

<script>

import { store } from '@/store';

import PmaHeader from '@/components/views/PmaHeader'
import PmaFooter from '@/components/views/PmaFooter'
import CraftsRoutes from '@/router/CraftsRoutes'

export default {
  name: 'App',
  components: {
    PmaHeader,
    PmaFooter,
  },
  data () {
    return {
    }
  },
  methods: {
  },
  mounted () {
    store.commit('setCrafts',CraftsRoutes.routes);
  },

}
</script>

<style>

@import url('https://fonts.googleapis.com/css?family=Open+Sans:100,300,400,500,700');

@import '/assets/style/style.css';
@import '/assets/style/screens.css';
@import '/assets/style/form.css';
@import '/assets/style/animations.css';
@import '/assets/style/print.css';

</style>
