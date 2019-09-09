<template>
  <div class="ScratchEmbed">

    <iframe :src="'https://scratch.mit.edu/projects/'+id+'/embed'" class="scratch"></iframe>

  </div>
</template>

<script>

export default {
  name: 'ScratchEmbed',
  props: {
    id: ""
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .scratch{
    width: 100%;
    height: 600px;
  }

</style>
