<template>
  <div>
    <div class="component-content center-col">

      <h3>
        Pyssel och övningar
      </h3>

      <crafts-list></crafts-list>

    </div>
  </div>
</template>

<script>

import { store } from '@/store';

import CraftsList from '@/components/CraftsList'

export default {
  name: 'Crafts',
  components: {
    CraftsList
  },
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

  .description{
    color: gray;
  }

</style>
