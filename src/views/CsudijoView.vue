<template>
  <div class="csudijo">
    <!-- Fejléc -->
    <header id="fejlec">
      <div class="container-fluid h-50">
        <div class="row h-50 align-items-center">
          <div class="col-12 text-center">
            <h1>Csudijó Étterem</h1>
            <p class="motto">Ahol az ízek életre kelnek</p>
          </div>
        </div>
      </div>
    </header>
    <!-- Rólunk -->
    <div class="container"></div>
    <TopFoodsComp />
    <EtelkezeloComp />
  </div>
</template>

<script lang="ts">
import EtelkezeloComp from "@/components/EtelkezeloComp.vue";
import TopFoodsComp from "@/components/TopFoodsComp.vue";
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {
    EtelkezeloComp,
    TopFoodsComp
  }
})
export default class CsudijoView extends Vue {}
</script>

<style scoped>
nav {
  font-weight: 500;
}
#fejlec {
  min-height: 100px;
  background-image: url("./kepek/etterem.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  color: white;
}
h1 {
  font-size: 3em;
  font-weight: 300;
}
section {
  padding: 15px 15px 15px 15px;
  margin-bottom: 15px;
}
a:link,
a:visited {
  color: rgb(236, 236, 236);
}
a:hover,
a:active {
  color: white;
  text-decoration: none;
}
.card {
  height: 100% !important;
}
.szurke-hatter {
  background-color: rgb(236, 236, 236);
}
html,
body {
  line-height: 1.8;
}
p {
  font-weight: 300;
}
.motto {
  font-size: 1em;
}
#rolunk img {
  max-width: 100%;
}
</style>
