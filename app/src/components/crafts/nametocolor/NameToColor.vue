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
  name: 'NameToColor',
  components: {
    Description,
    Instructions,
    Algorithm,
  },
  readable: 'Vilken färg är du?',
  description: 'Ange ditt namn och din ålder och få reda på vilken färg du är!',
  data () {
    return {
      colors: [
        {name: 'röd', css:'red'},
        {name: 'orange', css:'orange'},
        {name: 'gul', css:'yellow'},
        {name: 'grön', css:'green'},
        {name: 'blå', css:'blue'},
        {name: 'lila', css:'purple'},
        {name: 'rosa', css:'hotpink'},
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
