<template>
  <div class="component">
    <div class="component-content center-col">

      <div class="content">
        <ul>
          <li>
            Intervall
          </li>
          <li>
            <box-var>Variabler</box-var>
          </li>
        </ul>
      </div>

    </div>
  </div>
</template>

<script>

import BoxVar from '@/components/BoxVar'

export default {
  name: 'Instructions',
  components: {
    BoxVar
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
