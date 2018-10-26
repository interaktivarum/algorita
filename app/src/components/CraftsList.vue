<template>
  <div>
    <div class="component-content center-col">

      <div v-for="craft in crafts" class="craft">

        <router-link :to="{ name: 'Craft', params: {craft: craft.route} }">
          {{craft.component.readable}}
        </router-link>

        <br />

        <span class="description">
          {{craft.component.description}}
        </span>

      </div>

    </div>
  </div>
</template>

<script>

import { store } from '@/store';

export default {
  name: 'Crafts',
  data () {
    return {

    }
  },
  computed: {
    crafts: function () {
      return store.state.crafts;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .component-content{

  }

  .craft {
    margin: 10px 0 10px 0;
  }

  .description{
    color: gray;
  }

</style>
