<template>
  <div>
    <div v-for="coll in collections" :key="coll.ID">
      <md-button
        class="md-raised"
        @click="getColl(coll.ID, coll.Collection_Theme)"
        >{{ coll.Collection_Theme }}</md-button
      >
    </div>
    <br />
    <div v-if="oneColl.length != 0">
      <h1>
        {{ displayColl }}
      </h1>
      <div v-for="book in oneColl" :key="book.Book_ID">
        <h3>{{ book.Book_Name }}</h3>
        <md-button class="md-fab md-mini md-plain" @click="edit">
          <md-icon>edit</md-icon>
        </md-button>
        <md-button class="md-fab md-mini md-primary" @click="add">
          <md-icon>add</md-icon>
        </md-button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "App-Collections",
  data() {
    return {
      collections: [],
      oneColl: [],
      displayColl: "",
      adding: false,
      editing: false,
    };
  },
  mounted() {
    axios.get("http://localhost:3000/api/collections").then((response) => {
      console.log(response.data);
      this.collections = response.data;
    });
  },
  methods: {
    getColl(id, collectionName) {
      axios
        .get("http://localhost:3000/api/collections/" + id + "/")
        .then((response) => {
          console.log(response.data);
          this.oneColl = response.data;
          this.displayColl = collectionName;
        });
    },
    add() {
      this.adding = true;
      this.editing = false;
    },
    edit() {
      this.editing = true;
      this.adding = false;
    },
  },
};
</script>

<style scoped></style>
