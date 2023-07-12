<template>
  <div>
    <form @submit.prevent="send">
      <input type="text" placeholder="שם ספר" v-model="FormValues.Name" />
      <input type="text" placeholder="שם מחבר" v-model="FormValues.Author" />
      <input type="file" @change="updatePhoto($event.target.files)" />
      <br />
      <md-button class="md-raised md-primary" type="submit">שלח</md-button>
    </form>

    <App-Snackbar
      v-if="snackbar"
      :show="true"
      :msg="snackbarmsg"
    ></App-Snackbar>
  </div>
</template>

<script>
import axios from "axios";
import AppSnackbar from "./Snackbar.vue";

export default {
  name: "Add-Book",
  components: { AppSnackbar },

  data() {
    return {
      FormValues: {
        Name: "",
        Author: "",
        image: {},
      },
      snackbar: false,
      snackbarmsg: "העדכון נעשה בהצלחה",
    };
  },
  methods: {
    updatePhoto(files) {
      this.FormValues.image = files[0];
    },
    send() {
      let formData = new FormData();

      formData.append("Name", this.FormValues.Name);
      formData.append("Author", this.FormValues.Author);
      formData.append("image", this.FormValues.image);
      axios
        .post("http://localhost:3000/api/products", formData)
        .then((response) => {
          this.snackbar = true;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped>
small {
  display: block;
}
</style>
