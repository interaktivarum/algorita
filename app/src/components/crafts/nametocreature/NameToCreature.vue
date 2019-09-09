<template>
  <div class="component">

    <slot>

    </slot>

  </div>
</template>

<script>

import Description from './Description'
import Instructions from './Instructions'

export default {
  name: 'NameToCreature',
  components: {
    Description,
    Instructions,
  },
  readable: 'Vilket sagoväsen är du?',
  description: 'Ange ditt namn och din ålder och få reda på vilket sagoväsen du är!',
  scratchId: '281088253',
  data () {
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
