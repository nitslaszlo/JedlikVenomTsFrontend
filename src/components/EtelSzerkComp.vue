<template>
  <div>
    <b-modal v-model="modalShow" title="Rekord szerkesztése" size="lg">
      <b-container>
        <b-row class="my-1">
          <b-col sm="3">
            <label for="iFoodName">Étel neve:</label>
          </b-col>
          <b-col sm="9">
            <b-form-input id="iFoodName" v-model="foodName" placeholder="Kérem az étel nevét!" type="text"></b-form-input>
          </b-col>
        </b-row>
        <b-row class="my-1">
          <b-col sm="3">
            <label for="iVotes">Szavazatok:</label>
          </b-col>
          <b-col sm="3">
            <b-form-input id="iVotes" v-model="numberOfVote" placeholder="Szavazatok" type="number"></b-form-input>
          </b-col>
        </b-row>
      </b-container>
      <template v-slot:modal-footer>
        <div class="w-100">
          <b-button variant="success" size="sm" class="float-right m-1" @click="afterEditFood">Mentés</b-button>
          <b-button variant="primary" size="sm" class="float-right m-1" @click="modalShow = false">Mégsem</b-button>
        </div>
      </template>
    </b-modal>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class EtelSzerkComp extends Vue {
  private get foodName(): string {
    return this.$store.state.csudijoModule.__editedFood.foodName;
  }

  private set foodName(value: string) {
    this.$store.state.csudijoModule.__editedFood.foodName = value;
  }

  private get numberOfVote(): number {
    return this.$store.state.csudijoModule.__editedFood.numberOfVote;
  }

  private set numberOfVote(value: number) {
    this.$store.state.csudijoModule.__editedFood.numberOfVote = value;
  }

  private get modalShow(): boolean {
    return this.$store.state.csudijoModule.__showEditForm;
  }

  private set modalShow(value: boolean) {
    this.$store.state.csudijoModule.__showEditForm = value;
  }

  private afterEditFood(): void {
    this.$store.dispatch("updateFood", this.$store.state.csudijoModule.__editedFood);
    this.modalShow = false;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #42b983;
}
</style>
