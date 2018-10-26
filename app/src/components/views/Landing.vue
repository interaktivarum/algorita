<template>
  <div>
    <div class="component-content center-col">

      <h1>
        Välkommen till Algorita!
      </h1>

      <h3>Rita och pyssla med algoritmer</h3>

      Algorita är en webbplats som lär ut om algoritmer genom pyssel och lek.

      <h3>Vad är en algoritm?</h3>

      <p>
        En algoritm är en uppsättning instruktioner som ska utföras i en särskild ordning. Ungefär som ett recept, när du lagar mat. I själva verket kan algoritmer användas för att beskriva en stor del av vår vardag. <router-link :to="{ name: 'Algorithms', params: {} }">Läs mer om algoritmer</router-link> 
      </p>

      <h4>Exempel: {{Greeting.readable}}</h4>
      <p>
        I <router-link :to="{ name: 'Craft', params: {craft: 'godmorgon-godnatt'} }">{{Greeting.readable}}</router-link> anger du ditt namn och får olika hälsningar tillbaka beroende på tiden på dygnet. Här består algoritmen bland annat av att titta på vad klockan är samt att avgöra i vilket intervall klockslaget befinner sig, för att därefter bestämma vilken hälsningsfras som ska användas. Ungefär som i verkliga livet!
      </p>

      <component :is="Greeting.components.Algorithm" :data="Greeting.data()" class="example"></component>


      <h3>Pyssel och övningar</h3>

      <crafts-list></crafts-list>

    </div>
  </div>
</template>

<script>

import { store } from '@/store';
import Emoji from '@/components/Emoji'
import Greeting from '@/components/crafts/greeting/Greeting'
import CraftsList from '@/components/CraftsList'

export default {
  name: 'Landing',
  components: {
    Emoji,
    CraftsList
  },
  data () {
    return {
      Greeting
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



  .example{
    background: rgb(230,230,230);
    padding: 20px;
  }

</style>
