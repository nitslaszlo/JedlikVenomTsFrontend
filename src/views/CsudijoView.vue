<template>
  <div class="csudijo">
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
export default class CsudijoView extends Vue {}
</script>