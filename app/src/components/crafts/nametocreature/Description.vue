<template>
  <div class="component">
    <div class="component-content center-col">

      <div class="content">
        <ul>
          <li>
            Addition
          </li>
          <li>
            <box-var>Variabler</box-var>
          </li>
          <li>
            <box-loop>Loopar</box-loop>
          </li>
        </ul>
      </div>

    </div>
  </div>
</template>

<script>

import BoxVar from '@/components/BoxVar'
import BoxLoop from '@/components/BoxLoop'

export default {
  components: {
    BoxVar,
    BoxLoop
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

</style>
