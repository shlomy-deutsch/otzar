<template>
  <div>
    <md-button class="md-fab md-mini md-plain" @click="del">
      <md-icon>delete</md-icon>
    </md-button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "App-Delete",
  props: ["id"],

  methods: {
    del() {
      axios
        .delete("http://localhost:3000/api/products/" + this.id + "/")
        .then((response) => {
          this.$sendNotification("הספר נמחק בהצלחה", 2000);
          alert("נמחק בהצלחה");
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped></style>
