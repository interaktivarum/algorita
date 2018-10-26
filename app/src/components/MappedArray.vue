<template>
  <div class="component">
    <div class="component-content">

      <div v-for="(item,index) in arr" class="pair">
        <div class="key">
          {{item.from}}
        </div>
        <div class="value">
          {{item.to}}
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'MappedArray',
  data () {
    return {
    }
  },
  props:{
    array: "",
    key1: "",
    key2: "",
    col1: "",
    col2: {type: String, default: "Tal"}
  },
  computed: {
    arr: function () {
      let arr = [];
      for(var i = 0; i < this.array.length; i++){
        if(!this.key1 || !this.key2){
          arr.push({from:this.array[i], to: i+1});
        }
        else{
          arr.push({from:this.array[i][this.key1], to: this.array[i][this.key2]});
        }
      }
      return arr;
    }
  },
  mounted: function () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .component-content {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
  }

  .pair{
    flex:auto;
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 2px;
  }

  .pair:hover{
    background: lightblue;
  }

  .key{
    font-weight: bold;
  }

</style>
