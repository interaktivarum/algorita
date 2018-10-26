<template>
  <div class="component">

    <div class="component-content" :class="{first: first, last: last}">

      <div class="grid">

          <div class="instruction">
            {{instruction}}
          </div>

          <div class="note" v-if="note" :class="{hidden: !note}">
            {{note}}
          </div>

      </div>

      <div class="slot" v-if="hasSlots">
        <slot>
        </slot>
      </div>

      <transition name="fade">
        <div class="example" v-if="showExample" :class="{hidden: !example}">
          {{example}}
        </div>
      </transition>

      <div class="user" v-if="showInput">
        <input placeholder="Ange värde" pattern="a*" class="noBorder"/>
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
    instruction: "",
    note: "",
    example: "",
    showExample: {type: Boolean, default: true},
    showInput: {type: Boolean, default: true},
    first: {type: Boolean, default: false},
    last: {type: Boolean, default: false}
  },
  computed: {
    hasSlots: function () {
      return Object.keys(this.$slots).length !== 0

    }
  },
  mounted: function () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .component{

  }

  .component-content{
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

  .grid{
    transition: all 0.25s;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: stretch;
  }

  .grid.header > div {
    font-weight: bold;
  }

  .instruction, .note {
    padding: 10px;
    display: flex;
    align-items: center;
    border: 0px solid gray;
  }

  .instruction{
    flex: 1 1 0;
    background: #ddeedd;
  }

  .example{
    background: white;
    font-style: italic;
    color: gray;
    text-align: left;
    background: rgb(230,230,230);
    padding: 10px;
  }

  .note{
    flex: 0 1 25%;
    background: lightblue;
    margin-left: 0px;
  }

  .user{
  }

  .slot{
    margin: 10px 0 10px 0;
  }

  .hidden{
    visibility: hidden;
  }



</style>
