<template>
  <div class="component">
    <div class="component-content center-col">

      <ol>
        <li>
          Skriv ner ditt <box-var>namn</box-var> och din <box-var>ålder</box-var>.
        </li>
        <li>
          Addera antalet bokstäver/tecken i ditt <box-var>namn</box-var> med din <box-var>ålder</box-var>, till talet <box-var>summa</box-var>.
        </li>
        <li class="loop">

          <box-loop>Upprepa, så länge <box-var>summa</box-var> inte är ett ental (1-9):</box-loop>

          <ol type="a">
            <li>
              Summera alla siffror i talet <box-var>summa</box-var>.
            </li>
            <li>
              Ersätt <box-var>summa</box-var> med det nya talet.
            </li>
          </ol>
        </li>
        <li>
          Talet <box-var>summa</box-var> anger nu ditt sagoväsen:
          <ol>
            <li>
              Älva
            </li>
            <li>
              Alv
            </li>
            <li>
              Orc
            </li>
            <li>
              Troll
            </li>
            <li>
              Sjöjungfru
            </li>
            <li>
              Jätte
            </li>
            <li>
              Trollkarl
            </li>
            <li>
              Centaur
            </li>
            <li>
              Enhörning
            </li>
          </ol>
        </li>
      </ol>

    </div>
  </div>
</template>

<script>

import BoxVar from '@/components/BoxVar'
import BoxLoop from '@/components/BoxLoop'

export default {
  components: {
    BoxVar,
    BoxLoop
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .loop{
    border-left: 3px solid orange;
  }

</style>
