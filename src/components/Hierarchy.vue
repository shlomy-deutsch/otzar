<template>
  <div>
    <md-menu md-direction="bottom-start">
      <md-button md-menu-trigger>פרשיות התורה</md-button>

      <md-menu-content>
        <md-menu
          v-for="(parsha, index) in Object.values(parshiot)"
          :key="index"
          md-direction="bottom-end"
          :md-close-on-select="true"
        >
          <md-button md-menu-trigger>{{ parsha[0] }}</md-button>
          <md-menu-content>
            <md-menu-item
              v-for="(subParsha, subIndex) in parsha"
              :key="subIndex"
              >{{ subParsha }}</md-menu-item
            >
          </md-menu-content>
        </md-menu>
      </md-menu-content>
    </md-menu>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "App-Hierarchy",
  data() {
    return {
      btns: [],
      parshiot: {
        בראשית: [],
      },
    };
  },
  computed: {
    Btns() {
      return this.btns;
    },
  },
  mounted() {
    console.log(this.parshiot);
    axios.get("http://localhost:3000/api/hierarchy").then((response) => {
      this.btns = response.data;

      const dynamicArrays = [];
      const firstID = this.btns[0].ID;
      const initialProducts = this.btns.filter((btn) => btn.Sub_ID === firstID);
      dynamicArrays.push(initialProducts);
      for (let i = 1; i < this.btns.length; i++) {
        const currentID = this.btns[i].ID;
        const currentProducts = this.btns.filter(
          (btn) => btn.Sub_ID === currentID
        );
        dynamicArrays.push(currentProducts);
      }
      const filteredArrays = dynamicArrays.filter((arr) => arr.length > 0);
      console.log(filteredArrays);
      this.btns = filteredArrays;

      const keysArray = this.btns[0];
      console.log(keysArray);
      const valuesArrays = [];

      for (let i = 0; i < keysArray.length; i++) {
        const key = keysArray[i].Name;
        const values = this.btns[i + 1].map((btn) => btn.Name);
        this.parshiot[key] = values;
      }
      console.log(this.parshiot);
    });
  },

  methods: {
    getMore(branch, id) {
      // axios
      //   .get("http://localhost:3000/api/hierarchy/" + branch + "/" + id + "/")
      //   .then((response) => {
      //     response.data.forEach((obj) => {
      //       this.btns.push(obj);
      //     });
      //   });
      // axios
      //   .get("http://localhost:3000/api/hierarchy/" + id + "/")
      //   .then((response) => {
      //     store.state.products = response.data; // this.items = store.state.products;
      //     console.log(response.data);
      //   });
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
