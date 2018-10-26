<template>
  <div class="component">
    <div class="component-content">

        <router-link :to="{ name: 'Landing', params: {} }"><h2 class="header">
      Algorita
      </h2>
      </router-link>

    </div>
  </div>
</template>

<script>

import { store } from '@/store';

export default {
  name: 'PmaHeader',
  components: {
  },
  data () {
    return {
    }
  },
  computed: {
  },
  methods: {
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.component{
}

.component-content{
  background: indianred;
  padding: 20px;
}

.header{
  /*font-family: 'Chicle', Helvetica, Arial, sans-serif;
  font-size: 32pt;*/
  color: lavenderblush;
  margin-top: 0.25em;
  margin-bottom: 0.25em;
  cursor: pointer;
}

.header:hover{
  text-decoration: underline;
}

</style>
