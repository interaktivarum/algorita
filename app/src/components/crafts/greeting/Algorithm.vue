<template>
  <div class="component">
    <div class="component-content center-col">

      <p>
        <input v-model="name" placeholder="Ditt namn"/>
      </p>

      <div class="instructions" v-if="!okInput">
        <emoji cp="U+1F446"></emoji>
          Fyll i ditt namn
      </div>

      <div v-if="okInput">

        <h1>
          {{greeting}} <span class="camel">{{name}}!</span>
        </h1>

        <steps class="steps">

          <step description="Ditt namn" :first="true">
            <span class="camel">{{name}}</span>
          </step>

          <step description="Klockan är just nu">
            {{date.toLocaleTimeString()}}
          </step>

          <step description="Översätt klockslaget till motsvarande hälsning">
            <mapped-array :array="data.greetings" key2="greeting" key1="fromString"></mapped-array>
          </step>

          <step :description="'Klockslaget ' + date.toLocaleTimeString() + ' ligger i intervallet ' + before.fromString + '-' + after.fromString + ', och hälsningen blir ' + before.greeting" :last="true">
            {{before.greeting}} <span class="camel">{{name}}</span>!
          </step>

        </steps>

      </div>


    </div>
  </div>
</template>

<script>

import Steps from '@/components/Steps'
import Step from '@/components/Step'
import Emoji from '@/components/Emoji'
import MappedArray from '@/components/MappedArray'

export default {
  name: 'NameToColor',
  components: {
    Steps,
    Step,
    Emoji,
    MappedArray
  },
  data () {
    return {
      name: "",
      date: ""
    }
  },
  props: {
    data: ""
  },
  computed: {
    okInput: function () {
      return this.name.length;
    },
    hour: function () {
      return this.date.getHours() % 24;
    },
    before: function () {
      let greetings = this.data.greetings.filter(g => g.from <= this.hour);
      let greeting = greetings[greetings.length-1];
      return greeting;
    },
    after: function () {
      let greetings = this.data.greetings.filter(g => g.from <= this.hour);
      let greeting = this.data.greetings[greetings.length%this.data.greetings.length];
      return greeting;
    },
    greeting: function () {
      return this.before.greeting;
    }
  },
  methods: {
    updateTime: function () {
      setInterval(() => {
        this.date = new Date();
      }, 1000);
    }
  },
  mounted: function () {
    this.updateTime();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .instructions{
    font-weight: bold;
    font-size: 14pt;
  }

  .colorFinal{
    background: rgba(255,255,255,0.9);
    padding: 5px;
  }

  .steps{
    margin: 20px 0 20px 0;
  }

  .component-content{
    text-align: center;
  }

  .camel{
    text-transform: capitalize;
  }

</style>
