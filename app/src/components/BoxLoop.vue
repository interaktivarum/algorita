<template>
  <span class="Loop">

    <slot>
    </slot>

  </span>
</template>

<script>

export default {
  name: 'Loop',
  components: {
  },
  data () {
    return {
    }
  },
  props:{
    name: ""
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .Loop{
    display: inline-block;
    background: orange;
    border: 1px solid darkorange;
    border-left: 0;
    color: white;
    padding: 0px 5px 0px 5px;
    text-align: center;
    margin-bottom: 1px;
  }

</style>
