<template>
  <span class="BoxIf">

    <slot>
    </slot>

  </span>
</template>

<script>

export default {
  props:{
    name: ""
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .BoxIf{
    display: inline-block;
    background: orange;
    border: 1px solid darkorange;
    color: white;
    padding: 0px 5px 0px 5px;
    text-align: center;
    margin-bottom: 1px;
  }

</style>
