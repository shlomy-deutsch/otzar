<template>
  <div>
    <md-snackbar
      md-position="center"
      :md-duration="nu"
      :md-active.sync="isShow"
      md-persistent
    >
      <span>{{ msg }}</span>
      <md-button class="md-primary" @click="isShow = false">סגור</md-button>
    </md-snackbar>
  </div>
</template>

<script>
export default {
  name: "App-Snackbar",
  props: ["show", "msg"],
  data() {
    return {
      nu: 4000,
      isShow: this.show,
    };
  },
  computed: {},
};
</script>

<style scoped></style>
