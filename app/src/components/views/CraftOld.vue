<template>
  <div class="component">
    <div class="component-content center-col" v-if="craft">

      <div class="back hideInPrint">
        <emoji cp="U+1F448"></emoji>
        <router-link :to="{ name: 'Crafts', params: {} }">
          Alla pyssel och övningar
        </router-link>
      </div>

      <div class="header">

        <h1>
          {{craft.component.readable}}
        </h1>

        <div class="showInPrint">
          Ett algoritmpyssel från Algorita.se
        </div>

      </div>

      <p class="description">
        {{craft.component.description}}
      </p>

      <component :is="craft.component">

        <tabs>
          <div name="Beskrivning">
            <component :is="craft.component.components.Description"></component>
          </div>
          <div name="Pyssla">
            <component :is="craft.component.components.Instructions" :data="craft.component.data()"></component>
          </div>
          <div name="Kör">
            <component :is="craft.component.components.Algorithm" :data="craft.component.data()"></component>
          </div>
        </tabs>

      </component>

    </div>
  </div>
</template>

<script>

import { store } from '@/store';

import Tabs from '@/components/Tabs'
import Emoji from '@/components/Emoji'

export default {
  name: 'Craft',
  components: {
    Tabs,
    Emoji
  },
  data () {
    return {
    }
  },
  computed: {
    routes: function () {
      return store.state.craftRoutes;
    },
    crafts: function () {
      return store.state.crafts;
    },
    route: function () {
      return this.$route.params["craft"];
    },
    craftName: function () {
      return this.routes[this.route];
    },
    craft: function () {
      return store.getters.getCraftByRoute(this.route)
    }
  },
  methods: {
    print: function () {
      window.print();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.component-content{
}

.description{
  background: lightblue;
  padding: 20px;
}

.header{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.back{
  display: flex;
  align-items: center;
}

.back > *{
  margin: 2px;
}

</style>
