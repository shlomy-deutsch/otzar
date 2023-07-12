<template>
  <div>
    <div class="btns">
      <button
        @click="getMore(btn.Branch_ID, btn.ID)"
        v-for="btn in Btns"
        :key="btn.ID"
      >
        {{ btn.Name }}
      </button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import store from "@/store";
export default {
  name: "App-Hierarchy",
  data() {
    return {
      btns: [],
    };
  },
  computed: {
    Btns() {
      return this.btns;
    },
  },
  mounted() {
    axios.get("http://localhost:3000/api/hierarchy").then((response) => {
      this.btns = response.data;
    });
  },

  methods: {
    getMore(branch, id) {
      axios
        .get("http://localhost:3000/api/hierarchy/" + branch + "/" + id + "/")
        .then((response) => {
          response.data.forEach((obj) => {
            this.btns.push(obj);
          });
        });
      axios
        .get("http://localhost:3000/api/hierarchy/" + id + "/")
        .then((response) => {
          store.state.products = response.data; // this.items = store.state.products;
          console.log(response.data);
        });
    },
  },
};
</script>

<style scoped>
.btns {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
}
</style>
