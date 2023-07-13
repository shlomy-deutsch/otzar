<template>
  <div>
    <form @submit.prevent="edit">
      <input type="text" v-model="item.Book_Name" />
      <input type="text" v-model="item.Author_Name" />
      <button type="submit">שלח</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import store from "../store";
export default {
  name: "App-Edit",

  data() {
    return {
      item: {
        Book_ID: "",
        Book_Name: "",
        Author_Name: "",
        Author_ID: "",
      },
    };
  },
  mounted() {
    this.item = store.state.item;
  },
  methods: {
    edit() {
      axios
        .put(
          "http://localhost:3000/api/products/" + this.item.Book_ID + "/",
          this.item
        )
        .then((response) => {
          this.$sendNotification("הספר עודכן בהצלחה", 2000);
          this.$router.push("/");
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped></style>
