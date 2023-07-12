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
        <h4>{{ product.Author_Name }}</h4>
      </div>
    </div>
    <div class="imgs">
      <!-- <img :src="`http://localhost:3000/api/products/images/2/1`" /> -->
      <AppBookContent
        class="y"
        v-if="clicked == true"
        :id="id"
      ></AppBookContent>
    </div>
  </div>
</template>

<script>
import AppBookContent from "./Book-Content.vue";
import { mapState } from "vuex";
export default {
  name: "App-Book-Card",
  components: { AppBookContent },
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
  },
  computed: {
    ...mapState(["products"]),
  },
};
</script>

<style scoped>
.card {
  display: flex;
  /* display: inline-block; */
  text-align: left;
  /* border: 1px solid black; */
  padding: 1px 10px;
  margin: 10px;
  border-radius: 10px;
  box-shadow: 5px 5px 10px;
  align-items: flex-end;
  flex-direction: column;
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
