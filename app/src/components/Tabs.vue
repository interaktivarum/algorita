<template>
  <div class="component">
    <div class="component-content">

      <div class="tabs hideInPrint">
        <div class="tab" v-for="(tab,index) in tabs" @click="setActiveTab(index)" :class="{activeTab: index == tabActive}">
          {{tab.data.attrs.name}}
        </div>
      </div>

      <hr />

      <slot class="slot"></slot>

    </div>
  </div>
</template>

<script>

export default {
  name: 'Tabs',
  components: {
  },
  data () {
    return {
      tabs: "",
      tabActive: 0
    }
  },
  props:{
  },
  computed: {
  },
  methods: {
    updateActive: function () {
      for(var i = 0; i < this.tabs.length; i++){
        if(i == this.tabActive){
          this.tabs[i].elm.classList.add("activePage");
        }
        else{
          this.tabs[i].elm.classList.remove("activePage");
        }
      }
    },
    setActiveTab: function (id) {
      this.tabActive = id;
      this.updateActive();
    }
  },
  mounted: function () {
    this.tabs = this.$slots.default.filter(slot => slot.tag);

    for(var i = 0; i < this.tabs.length; i++){
      this.tabs[i].elm.classList.add("tabPage");
    }

    this.updateActive();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .component-content{

  }

  .tabs{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .tab{
    flex: 1 1 0;
    padding: 10px;
    cursor: pointer;
    background: rgb(230,230,230);
    font-size: 14pt;
    font-weight: bold;
    text-align: center;
  }

  .tab:not(:last-child){
    border-right: 1px solid lightgray;
  }

  .tab:hover{
    background: rgb(210,210,210);
  }

  .tab.activeTab{
    background: steelblue !important;
    color: white;
  }

  .tabPage {
    display: none;
  }

  .tabPage.activePage{
    display: inline;
  }

</style>
