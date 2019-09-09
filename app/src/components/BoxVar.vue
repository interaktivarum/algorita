<template>
  <span class="Variable">

    <slot>
    </slot>

  </span>
</template>

<script>

export default {
  name: 'Variable',
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

  .Variable{
    display: inline-block;
    background: darkorange;
    border: 1px solid orange;
    color: white;
    border-radius: 10px;
    padding: 0px 5px 0px 5px;
    text-align: center;
    margin-bottom: 1px;
    margin-top: 1px;

  }

</style>
