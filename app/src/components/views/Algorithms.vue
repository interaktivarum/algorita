<template>
  <div>
    <div class="component-content center-col">

      <h1>Vad är en algoritm?</h1>

      <p>
        En algoritm är en uppsättning instruktioner som ska utföras i en särskild ordning. Ungefär som ett recept, när du lagar mat. I själva verket kan algoritmer användas för att beskriva en stor del av vår vardag.
      </p>

      <h3>Var finns algoritmerna?</h3>
      <p>
        Alla program i våra telefoner och datorer styrs av algoritmer. De ser till att telefonens väckarklocka ringer på morgonen, lägger på filter på dina Instagram- eller Snapchatbilder, rekommenderar nya YouTubers att följa, visar personligt anpassad reklam på olika webbplatser, samt håller reda på dina koordinater via GPS.
      </p>

      <p>
        Algoritmerna i vår digitala teknik är programmerade av människor med programkod, men det går även utmärkt att beskriva algoritmer med papper och penna eller utföra instruktionerna som lekfulla övningar. Precis som pyssel!
      </p>

      <h3>Exempel: {{Greeting.readable}}</h3>
      <p>
        I <router-link :to="{ name: 'Craft', params: {craft: 'godmorgon-godnatt'} }">{{Greeting.readable}}</router-link> anger du ditt namn och får olika hälsningar tillbaka beroende på tiden på dygnet. Här består algoritmen bland annat av att titta på vad klockan är samt att avgöra i vilket intervall klockslaget befinner sig, för att därefter bestämma vilken hälsningsfras som ska användas. Ungefär som i verkliga livet!
      </p>

      <component :is="Greeting.components.Algorithm" :data="Greeting.data()" class="example"></component>

      <br />

      <h3>Viktiga begrepp</h3>
      <p>
        Algoritmernas instruktioner utförs utifrån givna <strong>starttillstånd</strong>. Dessa kan vara <strong>indata</strong> av användaren (i exemplet ovan: användarens namn) eller värden som bestäms automatiskt (i exemplet ovan: nuvarande klockslag). Olika <strong>villkor</strong> avgör vilken väg algoritmen ska ta (i exemplet ovan: vilket intervall klockslaget tillhör) och vad det slutgilta <strong>resultatet</strong> eller <strong>utdatan</strong> blir (i exemplet ovan: en fullständig hälsningsfras).
      </p>

    </div>
  </div>
</template>

<script>

import { store } from '@/store';
import Greeting from '@/components/crafts/greeting/Greeting'
import CraftsList from '@/components/CraftsList'

export default {
  name: 'Landing',
  components: {
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
