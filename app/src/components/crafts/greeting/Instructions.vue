<template>
  <div class="component">
    <div class="component-content center-col">

      <div class="settings">

        <label class="labelExample hideInPrint">
          <input type="checkbox" v-model="showExample" />
          Visa exempel
        </label>

        <button class="print hideInPrint" @click="print()">
          Skriv ut
        </button>

      </div>

      <step-instructions instruction="Ange ditt namn." note="Detta är indata till algoritmen." example="Algot" :show-example="showExample" :first="true" class="step">
      </step-instructions>

      <step-instructions instruction="Kolla vad klockan är just nu." note="Detta är också indata till algoritmen." example="13:04" :show-example="showExample" class="step">
      </step-instructions>

      <step-instructions instruction="Hitta det intervall som klockslaget tillhör samt motsvarande hälsningsfras." note="Klockslagen anger den tid man börjar använda hälsningsfrasen." example="13:04 ligger i intervallet 10:00-14:00, och hälsningsfrasen blir Hej" :show-example="showExample" class="step">
        <mapped-array :array="data.greetings" key2="greeting" key1="fromString"></mapped-array>
      </step-instructions>

      <step-instructions instruction="Sätt ihop hälsningsfrasen med ditt namn." example="Hej Algot!" :show-example="showExample" note="Detta är algoritmens resultat!" :last="true" class="step">
      </step-instructions>

    </div>
  </div>
</template>

<script>

import StepInstructions from '@/components/StepInstructions'
import MappedArray from '@/components/MappedArray'

export default {
  name: 'Instructions',
  components: {
    StepInstructions,
    MappedArray
  },
  data () {
    return {
      showExample: false,
      letters: ['B','C','D','F','G','H','J','K','L','M','N','P','Q','R','S','T','V','W','X','Z'],
      color: {name: '', css: 'white'}
    }
  },
  props: {
    data: ""
  },
  computed: {
  },
  methods: {
    print: function () {
      window.print();
    },
    setColor: function (color) {
      this.color = color
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .component-content{
    text-align: left;
  }

  .labelExample{
    background: rgb(230,230,230);
    border: 1px solid lightgray;
    padding: 5px;
    border-radius: 5px;
    display: inline-flex;
    align-items: center;
  }

  .step{
    margin: 20px 0 20px 0;
  }

  .settings{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

</style>
