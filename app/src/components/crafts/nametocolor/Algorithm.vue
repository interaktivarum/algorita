<template>
  <div class="component">
    <div class="component-content center-col">

    <p>
      <input v-model="name" placeholder="Ditt namn"/>

      <br /><br />

      <input type="number" min="1" v-model="age" placeholder="Din ålder"/>
    </p>

    <div v-if="okInput">

      <div class="color" :style="{background: color.css}">
        <span class="colorFinal">Din färg är {{color.name}}!</span>
      </div>

      <steps class="steps">

        <step description="Ditt namn och din ålder" :first="true">
          <span class="camel">{{name}}</span>, {{age}}
        </step>

        <step description="Ditt namn innehåller följande konsonanter" class="steppable">
          <span v-for="(letter,index) in splitConsonants">
            {{letter}}
          </span>
        </step>

        <step description="Översätt bokstäverna till siffor och tal" class="steppable">
          <span v-for="(number,index) in splitNumbers">
            {{number}}
          </span>
        </step>

        <step description="Summera alla tal" class="steppable">
          <span v-for="(number,index) in splitNumbers">
            {{number}}
            <span v-if="index < splitNumbers.length - 1">+</span>
          </span>
          = {{sumName}}
        </step>

        <step description="Subtrahera din ålder" class="steppable">
          {{sumName}} - {{age}} = {{final}}
        </step>

        <step :description="'Summera alla siffror i talet ' + final" class="steppable">
          {{sumDigits}}
        </step>

        <step :description="'Börja på Start och gå ' + sumDigits + ' steg'" class="steppable">
          <div class="miniColors">
            Start:
            <div class="colorMini" v-for="color in colors" :style="{background: color.css}"></div>
          </div>
        </step>

        <step :description="'Du landar på färgen ' + color.name + '!'" :last="true" class="steppable">
          <div class="colorMini" :style="{background: color.css}"></div>
        </step>

      </steps>

    </div>

    <div class="instructions" v-if="!okInput">
      <emoji cp="U+1F446"></emoji>
        Fyll i ditt namn och din ålder
    </div>

    </div>
  </div>
</template>

<script>

import Steps from '@/components/Steps'
import Step from '@/components/Step'
import Emoji from '@/components/Emoji'

export default {
  name: 'NameToColor',
  components: {
    Steps,
    Step,
    Emoji,
  },
  data () {
    return {
      step: 0,
      name: "",
      age: "",
      colors: [
        {name: 'röd', css:'red'},
        {name: 'orange', css:'orange'},
        {name: 'gul', css:'yellow'},
        {name: 'grön', css:'green'},
        {name: 'blå', css:'blue'},
        {name: 'lila', css:'purple'},
        {name: 'rosa', css:'hotpink'},
      ],
      alphabet: 'BCDFGHJKLMNPQRSTVWXZ'
    }
  },
  computed: {
    okInput: function () {
      return this.name.length > 0 && this.age > 0;
    },
    uc: function () {
      return this.name.toUpperCase();
    },
    split: function () {
      return this.uc.split('');
    },
    splitConsonants: function () {
      let consonants = [];
      for(var i = 0; i < this.split.length; i++){
        if(this.alphabet.indexOf(this.split[i]) != -1){
          consonants.push(this.split[i]);
        }
      }
      return consonants;
    },
    splitNumbers: function () {
      let numbers = this.splitConsonants.slice();
      for(var i = 0; i < this.splitConsonants.length; i++){
        numbers[i] = this.alphabet.indexOf(this.splitConsonants[i]) + 1
      }
      return numbers;
    },
    sumName: function () {
      let sum = 0;
      for(var i = 0; i < this.splitNumbers.length; i++){
        sum += this.splitNumbers[i];
      }
      return sum;
    },
    final: function () {
      return this.sumName - this.age;
    },
    sumDigits: function () {
      let sum = Math.abs(this.final);
      while(sum > 9){
        //let sum = 0;
        let str = sum + "";
        let split = str.split('');
        sum = 0;
        for(var i = 0; i < split.length; i++){
          sum += parseInt(split[i]);
        }
      }
      return sum;
    },
    color: function () {
      return this.colors[Math.abs(this.sumDigits-1)%this.colors.length];
    }
  },
  methods: {
    nextStep: function () {
      step++;
    }
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
