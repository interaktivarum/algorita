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

      <step-instructions instruction="Ange ditt namn och din ålder." note="Detta är algoritmens indata." example="Algot, 13" :show-example="showExample" :first="true" class="step">
      </step-instructions>

      <step-instructions instruction="Hitta alla konsonanter i ditt namn." example="L G T" :show-example="showExample" class="step">
      </step-instructions>

      <step-instructions instruction="Översätt varje bokstav till motsvarande tal." example="9 5 16" :show-example="showExample" note="Varje bokstav är en variabel som motsvarar ett tal" class="step">
        <mapped-array :array="letters" col1="Konsonant"></mapped-array>
      </step-instructions>

      <step-instructions instruction="Summera alla tal." example="9 + 5 + 16 = 30" :show-example="showExample" class="step">
      </step-instructions>

      <step-instructions instruction="Subtrahera din ålder." example="30 - 13 = 17" :show-example="showExample" class="step">
      </step-instructions>

      <step-instructions instruction="Summera alla siffror i det nya talet." example="1 + 7 = 8" :show-example="showExample" note="Detta kan behöva göras flera gånger tills det endast är en siffra kvar." class="step">
      </step-instructions>

      <step-instructions instruction="Börja på Start och gå lika många steg som det tal du har fått fram." note="Efter den sista färgen hoppar du tillbaka till den första färgen." example="Börja på Start och gå 8 steg. Efter 7 steg hoppar vi tillbaka till den första färgen, och slutar efter 8 steg på färgen röd." :show-example="showExample" :show-input="false" class="step">
        <div class="miniColors">
          Start:
          <div class="colorMini pointer" v-for="(color,index) in data.colors" :style="{background: color.css, 'border-color': color.css}" @click="setColor(color)">
          </div>
        </div>
      </step-instructions>

      <step-instructions instruction="Den färg som du landar på är din färg som har beräknats utifrån ditt namn och din ålder med en algoritm!" example="Färgen för Algot, 13 är orange!" :show-example="showExample" :show-input="false" note="Detta är algoritmens resultat!" :last="true" class="step">
        <div class="colorMini" :style="{background: color.css, 'border-color': color.css}"></div>
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
