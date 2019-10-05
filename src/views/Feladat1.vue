<template>
  <div class="feladat1">
    <LegnepszerubbComp />
    <EtelkezeloComp />
  </div>
</template>

<script lang="ts">
import EtelkezeloComp from "@/components/EtelkezeloComp.vue";
import LegnepszerubbComp from "@/components/LegnepszerubbComp.vue";
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {
    EtelkezeloComp,
    LegnepszerubbComp
  }
})
export default class Feladat1 extends Vue {}
</script>