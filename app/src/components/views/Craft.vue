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

      <h3>Innehåll</h3>
      <component :is="craft.component.components.Description" class="content"></component>

      <h3>Instruktioner</h3>
      <p>
        Utför instruktionerna för hand med papper och penna.
      </p>
      <component :is="craft.component.components.Instructions" :data="craft.component.data()"></component>

      <h3>Kör program</h3>
      <p>
        Tryck på den gröna flaggan för att starta programmet. Får du samma resultat som när du utförde algoritmens instruktioner för hand?
      </p>
      <scratch-embed :id="craft.component.scratchId"></scratch-embed>

      <h3>Visa och hacka programkoden</h3>
      <p>
        Programmet ovanför är skapat med Scratch. På webbplatsen för Scratch kan du undersöka hur programmet är skapat och själv prova att göra egna ändringar.
      </p>
      <a :href="'https://scratch.mit.edu/projects/'+craft.component.scratchId" target="_blank">Öppna projektet i Scratch</a>, klicka på <strong>Se inuti</strong> för att undersöka hur programmet är skapat.

    </div>
  </div>
</template>

<script>

import { store } from '@/store';

import Tabs from '@/components/Tabs'
import Emoji from '@/components/Emoji'
import ScratchEmbed from '@/components/ScratchEmbed'

export default {
  name: 'Craft',
  components: {
    Tabs,
    Emoji,
    ScratchEmbed
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

.content{
  background: #ddeedd;
  padding: 10px;
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
