<template>
  <div class="component">
    <div class="component-content center-col">

      I denna övning anger du ditt namn och får olika hälsningar tillbaka beroende på tiden på dygnet. Algoritmen består bland annat av att titta på vad klockan är, samt att avgöra vilket intervall detta klockslag tillhör, för att därefter bestämma vilken hälsningsfras som ska användas. Ungefär som i verkliga livet!

      <h3>Innehåll</h3>

      <div class="content">
        <ul>
          <li>
            Klockan
          </li>
          <li>
            Intervall
          </li>
        </ul>
      </div>

    </div>
  </div>
</template>

<script>

import StepInstructions from '@/components/StepInstructions'
import MappedArray from '@/components/MappedArray'

export default {
  name: 'Instructions',
  components: {
  },
  data () {
    return {
    }
  },
  props: {
    data: ""
  },
  computed: {
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .component-content{
    text-align: left;
  }

  .content{
    background: #ddeedd;
    padding: 10px;
  }

</style>
