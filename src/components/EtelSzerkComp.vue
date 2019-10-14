<template>
  <div>
    <b-modal v-model="modalShow" title="Rekord szerkesztése" size="lg">
      <b-container>
        <b-row class="my-1">
          <b-col sm="4">
            <label for="iFoodName">Étel neve:</label>
          </b-col>
          <b-col sm="8">
            <b-form-input
              id="iFoodName"
              placeholder="Kérem az étel nevét!"
              type="text"
              v-model="foodName"
            ></b-form-input>
          </b-col>
        </b-row>
        <b-row class="my-1">
          <b-col sm="4">
            <label for="iVotes">Szavazatok száma:</label>
          </b-col>
          <b-col sm="3">
            <b-form-input
              id="iVotes"
              placeholder="Szavazatok"
              type="number"
              v-model="numberOfVote"
            ></b-form-input>
          </b-col>
        </b-row>
      </b-container>
      <template v-slot:modal-footer>
          <div class="w-100">
            <b-button variant="success" size="sm" class="float-right m-1" @click="afterEditFood">Mentés</b-button>
            <b-button variant="primary" size="sm" class="float-right m-1" @click="modalShow=false">Mégsem</b-button>
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
    return this.$store.state.editedFood.foodName;
  }

  private set foodName(value: string) {
    this.$store.state.editedFood.foodName = value;
  }

  private get numberOfVote(): number {
    return this.$store.state.editedFood.numberOfVote;
  }

  private set numberOfVote(value: number) {
    this.$store.state.editedFood.numberOfVote = value;
  }

  private get modalShow(): boolean {
    return this.$store.state.csudijoModule.showEditForm;
  }

  private set modalShow(value: boolean) {
    this.$store.state.csudijoModule.showEditForm = value;
  }

  private afterEditFood(): void {
    this.$store.dispatch("updateFood", this.$store.state.editedFood);
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
