<template>
  <div class="component">
    <div class="component-content center-col">

      Med denna algoritm kan du i 7 steg beräkna vilken färg du är, utifrån ditt namn och din ålder.

      <h3>Innehåll</h3>

      <div class="content">
        <ul>
          <li>
            Vokaler och konsonanter
          </li>
          <li>
            Addition och subtraktion
          </li>
          <li>
            Variabler
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
