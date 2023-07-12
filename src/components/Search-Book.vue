<template>
  <div>
    <input type="text" @input="send" placeholder="חפש ספר" v-model="txt" />
  </div>
</template>

<script>
export default {
  name: "App-Search",
  data() {
    return {
      txt: "",
    };
  },
  methods: {
    send() {
      this.$emit("searching", this.txt);
    },
  },
};
</script>

<style scoped>
input {
  width: 622px;
  background: color #0a3b25;
  padding: 9px;
  background-color: #315b5b;
}
</style>
