<template>
  <div>
    <div v-for="image in images" :key="image.ID">
      <img
        :src="`http://localhost:3000/api/products/images/${image.Book_ID}/${image.File}`"
      />
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "App-Book-Content",
  props: ["id"],
  data() {
    return {
      images: [],
    };
  },
  computed: {},
  async mounted() {
    this.loadData(this.id);
  },
  watch: {
    id: function (nval, oval) {
      this.loadData(nval);
    },
  },
  methods: {
    async loadData(id) {
      let item = await axios.get(
        "http://localhost:3000/api/products/" + id + "/"
      );
      this.images = item.data;
    },
  },
};
</script>

<style scoped>
img {
  width: 100%;
  overflow-x: auto;
  max-height: 71vh;
}
</style>
