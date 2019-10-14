<template>
  <div>
    <b-container>
      <b-row class="my-1">
        <b-col sm="3">
          <label for="iFoodName">Food name:</label>
        </b-col>
        <b-col sm="9">
          <b-form-input
            id="iFoodName"
            placeholder="Enter food name"
            type="text"
            v-model="this.$store.state.editedFood.foodName"
          ></b-form-input>
        </b-col>
      </b-row>
      <b-row class="my-1">
        <b-col sm="3">
          <label for="iVotes">Number of votes:</label>
        </b-col>
        <b-col sm="3">
          <b-form-input
            id="iVotes"
            placeholder="Enter number of votes"
            type="text"
            v-model="this.$store.state.editedFood.numberOfVote"
          ></b-form-input>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class EtelSzerkComp extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #42b983;
}
</style>
