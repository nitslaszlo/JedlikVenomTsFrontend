<template>
  <div class="etelkezelo">
    <section id="szavazas" class="szurke-hatter">
      <h2>Szavazzon a legnepszerűbb ételünkre</h2>
      <b-container fluid>
        <b-row>
          <b-col sm="3">
            <label for="foodInput">Új étel felvétele szavazással:</label>
          </b-col>
          <b-col sm="6">
            <b-form-input v-model="newFoodName" id="foodInput"></b-form-input>
          </b-col>
          <b-col sm="3">
            <b-button @click="addNewFood()">Felvesz + szavaz</b-button>
          </b-col>
        </b-row>
      </b-container>
      <EtelSzerkComp v-if="modalShow"/>
      <b-table
        id="foodsTable"
        striped
        bordered
        :items="this.$store.getters.allFoods"
        :fields="foodFields"
        :per-page="perPage"
        :current-page="currentPageFoods"
      >
        <template v-slot:cell(action)="row">
          <b-button-group>
            <b-button size="sm" @click="newVote(row.item)" variant="success">Szavaz</b-button>
            <b-button size="sm" @click="beforeEditFood(row.item)" variant="info">Szerkeszt</b-button>
            <b-button size="sm" @click="deleteFood(row.item)" variant="danger">Töröl</b-button>
          </b-button-group>
        </template>
      </b-table>
      <b-pagination
        v-model="currentPageFoods"
        :total-rows="this.$store.getters.numberOfFoods"
        :per-page="perPage"
        aria-controls="foodsTable"
        hide-goto-end-buttons
      ></b-pagination>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import EtelSzerkComp from "@/components/EtelSzerkComp.vue";
@Component({
  components: {
    EtelSzerkComp
  }
})
export default class EtelkezeloComp extends Vue {
  private currentPageFoods: number = 1;
  private perPage: number = 5;
  private newFoodName: string = "";
  private polling: number;

  private foodFields = [
    { key: "foodName", label: "Étel neve", sortable: false },
    { key: "numberOfVote", label: "Szavazatok", sortable: false },
    { key: "action", label: "Akció gombok", sortable: false }
  ];

  public mounted() {
    this.$store.dispatch("getAllFoods");
    // Adatok frissitése 5mp időközönként:
    // ===================================
    // if (!this.polling) {
    //   this.polling = setInterval(() => {
    //     this.$store.dispatch("getAllFoods");
    //   }, 5000);
    // }
  }

  public beforeDestroy() {
    // clearInterval(this.polling);
  }

  private newVote(item: any): void {
    this.$store.dispatch("newVote", item);
  }

  private deleteFood(item: any): void {
    this.$store.dispatch("deleteFood", item);
  }

  private beforeEditFood(item: any): void {
    this.$store.state.editedFood = {...item}; // clone object with spread
    this.modalShow = true;
  }

  private addNewFood(): void {
    this.$store.dispatch("addNewFood", {
      foodName: this.newFoodName,
      numberOfVote: 1
    });
  }

  private get modalShow(): boolean {
    return this.$store.state.csudijoModule.showEditForm;
  }

  private set modalShow(value: boolean) {
    this.$store.state.csudijoModule.showEditForm = value;
  }
}
</script>


<style scoped>
h2 {
  font-weight: 300;
  margin-bottom: 20px;
}

section {
  padding: 15px 15px 15px 15px;
  margin-bottom: 15px;
}

.szurke-hatter {
  background-color: rgb(236, 236, 236);
}

html,
body {
  line-height: 1.8;
}
</style>
