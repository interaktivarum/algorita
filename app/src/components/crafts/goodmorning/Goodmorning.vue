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
  name: 'Goodmorning',
  components: {
    Description,
    Instructions,
  },
  readable: 'Godmorgon, godnatt!',
  description: 'Ange ditt namn och få en hälsningsfras tillbaka!',
  scratchId: '281145658',
  data () {
  },
  computed: {
  },
  methods: {
  }
}
</script>

<style>

</style>
