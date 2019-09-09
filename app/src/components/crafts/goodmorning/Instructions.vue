<template>
  <div class="component">
    <div class="component-content center-col">

      <ol>
        <li>
          Skriv ner ditt <box-var>namn</box-var>.
        </li>
        <li>
          Bestäm <box-var>hälsning</box-var> utifrån följande tidsintervall:
          <ul>
            <li>
              <box-if>Om klockan är 00-07</box-if> : Godnatt
            </li>
            <li>
              <box-if>Om klockan är 07-10</box-if> : Godmorgon
            </li>
            <li>
              <box-if>Om klockan är 10-15</box-if> : Hej
            </li>
            <li>
              <box-if>Om klockan är 15-18</box-if> : God eftermiddag
            </li>
            <li>
              <box-if>Om klockan är 18-22</box-if> : Godkväll
            </li>
            <li>
              <box-if>Om klockan är 22-24</box-if> : Godnatt
            </li>
          </ul>
        </li>
        <li>
          Sätt ihop hela hälsningsfrasen: <box-var>hälsning</box-var> <box-var>namn</box-var>!
        </li>
      </ol>
    </div>
  </div>
</template>

<script>

import BoxVar from '@/components/BoxVar'
import BoxIf from '@/components/BoxIf'

export default {
  components: {
    BoxVar,
    BoxIf
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .loop{
    border-left: 3px solid orange;
  }

</style>
