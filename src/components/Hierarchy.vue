<template>
  <div>
    <md-menu md-direction="bottom-start">
      <md-button md-menu-trigger style="color: greenyellow"
        >פרשיות התורה</md-button
      >
      <md-menu-content>
        <md-menu
          v-for="(parsha, index) in Object.values(parshiot)"
          :key="index"
          md-direction="bottom-end"
          :md-close-on-select="true"
        >
          <md-button md-menu-trigger>{{ parsha[0].Name }}</md-button>
          <md-menu-content>
            <md-menu-item
              v-for="(subParsha, subIndex) in parsha"
              :key="subIndex"
              >{{ subParsha.Name }}</md-menu-item
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
        בראשית: [{ ID: 0, Name: "" }],
      },
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
      this.btns = filteredArrays;

      for (let i = 0; i < this.btns.length; i++) {
        const currentArray = this.btns[i];
        const nextArray = this.btns[i];

        if (nextArray) {
          const key = currentArray[0].Name;
          const value = nextArray;
          this.addArrayToParshiot(key, value);
        }
      }
      console.log(this.parshiot);
    });
  },
  methods: {
    addArrayToParshiot(key, value) {
      if (value.length === 1) {
        const [item] = value;
        this.$set(this.parshiot, key, [{ ID: item.ID, Name: item.Name }]);
      } else {
        const nestedArray = value.map((item) => ({
          ID: item.ID,
          Name: item.Name,
        }));
        this.$set(this.parshiot, key, nestedArray);
      }
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
