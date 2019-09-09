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

      <h3>Exempel: {{Goodmorning.readable}}</h3>
      <p>
        I <router-link :to="{ name: 'Craft', params: {craft: 'godmorgon-godnatt'} }">{{Goodmorning.readable}}</router-link> anger du ditt namn och får olika hälsningar tillbaka beroende på tiden på dygnet. Här består algoritmen bland annat av att titta på vad klockan är samt att avgöra i vilket intervall klockslaget befinner sig, för att därefter bestämma vilken hälsningsfras som ska användas. Ungefär som i verkliga livet!
      </p>

      <!--component :is="Greeting.components.Algorithm" :data="Greeting.data()" class="example"></component-->

      <p>
        Testa att först utföra algoritmen för hand, och provkör sedan programmet nedan genom att klicka på den gröna flaggan.
      </p>

      <component :is="Goodmorning.components.Instructions" :data="Goodmorning.data()" class="example"></component>
      <scratch-embed :id="Goodmorning.scratchId"></scratch-embed>

      <br />

      <h3>Viktiga begrepp</h3>

      <ul>
        <li>
          <strong>Starttillstånd/indata</strong>: indata är de värden som programmet utgår ifrån för sina beräkningar. Dessa värden kan matas in av användaren eller beräknas automatiskt. I exemplet ovan matar användaren in sitt namn, medan klockslaget beräknas automatiskt.
        </li>
        <li>
          <box-var>Variabel</box-var>: en varibel kan liknas vid en tom låda som kan innehålla ett värde. Värdet kan till exempel vara en text eller ett tal. I exemplet ovan används variablerna <box-var>namn</box-var> och <box-var>hälsning</box-var>.
        </li>
        <li>
          <box-if>Villkor/if-sats</box-if>: if-satser används för att köra vissa delar av programkoden endast när vissa villkor är uppfyllda, exempelvis om en <box-var>variabel</box-var> är större än ett visst värde. I exemplet ovan används flera if-satser för att avgöra vilken hälsning som ska användas.
        </li>
        <li>
          <box-if>Upprepningar/loopar</box-if>: loopar används för att upprepa vissa delar av programkoden, exempelvis så länge ett visst <box-if>villkor</box-if> är uppfyllt. Exemplet ovan använder inga loopar.
        </li>
        <li>
          <strong>Resultat/utdata</strong>: utdata är det slutgiltiga resultat som algoritmen beräknar. I exemplet ovan är resultatet den fullständiga hälsningsfrasen.
        </li>
      </ul>

    </div>
  </div>
</template>

<script>

import { store } from '@/store';
import CraftsList from '@/components/CraftsList'
import Goodmorning from '@/components/crafts/goodmorning/Goodmorning'
import ScratchEmbed from '@/components/ScratchEmbed'
import BoxVar from '@/components/BoxVar'
import BoxIf from '@/components/BoxIf'
import BoxLoop from '@/components/BoxLoop'

export default {
  name: 'Landing',
  components: {
    CraftsList,
    ScratchEmbed,
    BoxVar,
    BoxIf,
    BoxLoop
  },
  data () {
    return {
      Goodmorning
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

  .example{
    background: rgb(240,240,240);
    padding: 5px;
  }

</style>
