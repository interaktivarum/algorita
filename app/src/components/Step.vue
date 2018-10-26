<template>
  <div class="component">
    <div class="component-content" :class="{active: active, first: first, last: last}" v-if="enabled">

      <div class="description">
        {{description}}
      </div>

      <div class="output">
        <slot>
        </slot>
      </div>

    </div>
  </div>
</template>

<script>

import Emoji from '@/components/Emoji'

export default {
  name: 'Step',
  components: {
    Emoji
  },
  data () {
    return {
    }
  },
  props:{
    description: "",
    active: "",
    enabled: {type: Boolean, default: true},
    emoji: "",
    dir: {type: String, default: "down"},
    first: {type: Boolean, default: false},
    last: {type: Boolean, default: false}
  },
  computed: {
    cp: function () {
      if(this.emoji){
        return this.emoji;
      }
      else{
        if(this.dir == "down"){
          return "U+1F447";
        }
        else if(this.dir == "up"){
          return "U+1F446";
        }
      }
    }
  },
  mounted: function () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .component-content{
    display: block;
    margin: 20px 0 20px 0;
    transition: all 0.25s;
    text-align: left;

    border-left: 2px solid gray;
    border-right: 2px solid gray;
    border-bottom: 2px dashed lightgray;
    border-top: 2px dashed lightgray;
  }

  .component-content.first{
    border-top: 2px solid gray;
  }

  .component-content.last{
    border-bottom: 2px solid gray;
  }

  .component-content.active, .component-content:hover{
    filter: opacity(1);
  }

  .component-content.disabled{
    display: none;
  }

  .description, .output{
    padding: 10px;
  }

  .description{
    background: #ddeedd;
  }

  .output{
    font-weight: bold;
    background: MediumSeaGreen;
    color: white;
    letter-spacing: 1px;
  }

</style>
