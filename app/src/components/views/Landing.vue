<template>
  <div>
    <div class="component-content center-col">

      <h1>
        Välkommen till Algorita!
      </h1>

      <iframe src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Falgorita.se%2F&width=96&layout=button&action=like&size=small&show_faces=false&share=true&height=65" width="112" height="30" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>

      <h3>Rita och pyssla med algoritmer</h3>

      <p>
        Algorita är en webbplats som lär ut om algoritmer genom pyssel och lek. Alla övningar har enkla instruktioner för att utföra algortimernas steg för hand med papper och penna, samt färdiga program byggda i verktyget Scratch.
      </p>

      <p>
        Det är även möjligt att undersöka hur varje program är skapat i Scratch samt att själv hacka programmet och göra egna ändringar!
      </p>

      <h3>Vad är en algoritm?</h3>

      <p>
        En algoritm är en uppsättning instruktioner som ska utföras i en särskild ordning. Ungefär som ett recept, när du lagar mat. I själva verket kan algoritmer användas för att beskriva en stor del av vår vardag. <router-link :to="{ name: 'Algorithms', params: {} }">Läs mer om algoritmer</router-link>.
      </p>

      <h4>Exempel: {{Goodmorning.readable}}</h4>
      <p>
        I <router-link :to="{ name: 'Craft', params: {craft: 'godmorgon-godnatt'} }">{{Goodmorning.readable}}</router-link> anger du ditt namn och får olika hälsningar tillbaka beroende på tiden på dygnet. Här består algoritmen bland annat av att titta på vad klockan är samt att avgöra i vilket intervall klockslaget befinner sig, för att därefter bestämma vilken hälsningsfras som ska användas. Ungefär som i verkliga livet, fast då sköter vår hjärna det automatiskt och blixtsnabbt!
      </p>

      <p>
        Testa att först utföra algoritmen för hand med papper och penna, och provkör sedan programmet nedan genom att klicka på den gröna flaggan.
      </p>

      <component :is="Goodmorning.components.Instructions" :data="Goodmorning.data()" class="example"></component>
      <scratch-embed :id="Goodmorning.scratchId"></scratch-embed>

      <h3>Pyssel och övningar</h3>

      <crafts-list></crafts-list>

    </div>
  </div>
</template>

<script>

import { store } from '@/store';
import Emoji from '@/components/Emoji'
import CraftsList from '@/components/CraftsList'
import Goodmorning from '@/components/crafts/goodmorning/Goodmorning'
import ScratchEmbed from '@/components/ScratchEmbed'

export default {
  name: 'Landing',
  components: {
    Emoji,
    CraftsList,
    ScratchEmbed
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

  .component-content{

  }

  .description{
    color: gray;
  }



  .example{
    background: rgb(240,240,240);
    padding: 5px;
  }

</style>
