<template>
  <div class="component">

    <slot>
    </slot>

  </div>
</template>

<script>

import Description from './Description'
import Instructions from './Instructions'
import Algorithm from './Algorithm'

export default {
  name: 'Greeting',
  components: {
    Description,
    Instructions,
    Algorithm,
  },
  readable: 'Godmorgon, godnatt!',
  description: 'Ange ditt namn och få olika hälsningar beroende på klockslaget.',
  data () {
    return {
      greetings: [
        {greeting: 'Zzzz', from: 0, fromString: "00:00"},
        {greeting: 'Godmorgon', from: 6, fromString: "06:00"},
        {greeting: 'Hej', from: 10, fromString: "10:00"},
        {greeting: 'God eftermiddag', from: 14, fromString: "14:00"},
        {greeting: 'Godkväll', from: 18, fromString: "18:00"},
        {greeting: 'Godnatt', from: 21, fromString: "21:00"},
      ]
    }
  },
  computed: {
  },
  methods: {
  }
}
</script>

<style>

  .miniColors{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }

  .colorMini{
    background: lightgray;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin: 5px;
    border: 1px solid white;
    transition: all 0.25s;
  }

  .colorMini:not(:hover),.colorMini.border{
    border-color: white !important;
  }


  .color{
    background: lightgray;
    width: 200px;
    height: 200px;
    max-width: 100%;
    border-radius: 50%;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    transition: background 1s;
  }

</style>
