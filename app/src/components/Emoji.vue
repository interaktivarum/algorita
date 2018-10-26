<template>
  <div class="component">

      <span class="emoji" v-html="print">
      </span>

  </div>
</template>

<script>
export default {
  name: 'Emoji',
  data () {
    return {
    }
  },
  props:{
    cp: "",
  },
  computed: {
    print: function () {
      return "&#x" + this.cp.substr(2) + ";";
    },

  },
  mounted: function () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .component{
    display: inline;
  }

  .emoji{
    font-size: 20pt;
  }

</style>
