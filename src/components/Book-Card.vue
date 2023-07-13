/* eslint-disable */
<template>
  <div class="container">
    <div class="subcon">
      <div
        v-on:click="bookClick(product.Book_ID)"
        class="card"
        v-for="product in products.slice(0, 50)"
        :key="product.Book_ID"
      >
        <h3>{{ product.Book_Name }}</h3>
        <br />
        <h4>{{ product.Author_Name }}</h4>
        <App-delete :id="product.Book_ID"></App-delete>
        <router-link to="/edit">
          <md-button class="md-fab md-mini md-plain" @click="pushItem(product)">
            <md-icon>edit</md-icon>
          </md-button></router-link
        >
      </div>
    </div>
    <div class="imgs">
      <AppBookContent
        class="y"
        v-if="clicked == true"
        :id="id"
      ></AppBookContent>
    </div>
  </div>
</template>

<script>
import AppDelete from "@/components/Delete-Book.vue";
import AppBookContent from "./Book-Content.vue";
// import AppEdit from "@/components/Delete-Book.vue";
import { mapState } from "vuex";
import store from "../store";
export default {
  name: "App-Book-Card",
  components: { AppBookContent, AppDelete },
  data() {
    return {
      clicked: false,
      id: "",
    };
  },
  methods: {
    bookClick(id) {
      this.clicked = true;
      this.id = id;
    },
    pushItem(item) {
      store.state.item = item;
    },
  },

  computed: {
    ...mapState(["products"]),
  },
};
</script>

<style scoped>
.card {
  display: flex;
  text-align: left;
  padding: 1px 10px;
  margin: 10px;
  border-radius: 10px;
  box-shadow: 5px 5px 10px;
  flex-direction: row-reverse;
  flex-wrap: wrap;
  align-content: center;
  justify-content: flex-start;
  align-items: flex-start;
}

.container {
  justify-items: end;
  display: flex;
  flex-direction: row-reverse;
  padding: 3%;
}
.subcon {
  max-height: 72vh;
  overflow-x: auto;
  width: 50%;
}
img {
  width: 100%;
  overflow-x: auto;
  max-height: 71vh;
}
.imgs {
  width: 50%;
  overflow-x: auto;
  max-height: 72vh;
}
h3 {
  color: #adf5d6;
  /* margin-left: 74%; */
}
h4 {
  color: yellow;
  /* margin-left: 41%; */
}
</style>
