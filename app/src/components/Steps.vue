<template>
  <div class="component">
    <div class="component-content">

      <hr />

      <a @click="toggle()" v-if="!active">Visa algoritmens steg</a>
      <a @click="toggle()" v-if="active">Dölj steg</a>

      <br />

      <transition name="fade">
        <div class="steps" v-if="active">

          <slot>
          </slot>

        </div>
      </transition>

      <a @click="toggle()" v-if="active">Dölj steg</a>

    </div>
  </div>
</template>

<script>

export default {
  name: 'Steps',
  components: {
  },
  data () {
    return {
      step: 0,
      active: false
    }
  },
  props:{
  },
  computed: {
  },
  methods: {
    toggle: function () {
      this.active = !this.active;
    },
    setStep: function (step) {
      this.step = step;
    },
    colorByStep: function () {
      let els = this.$el.getElementsByClassName('steppable');
      for(var i = 0; i < els.length; i++){
        if(i > this.step){
          els[i].classList.add("inactive");
        }
      }
    }
  },
  mounted: function () {
    //this.addListeners();
    //this.colorByStep();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .component-content{
  }

  .steps{
    overflow-y: scroll;
  }

  .steppable{
    transition: all 0.25s;
  }

  .inactive:not(:hover){
      filter: opacity(0.5);
  }

</style>
