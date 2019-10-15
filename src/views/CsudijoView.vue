<template>
  <div class="csudijo">
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