<template>
  <div class="home">
    <App-Snackbar
      v-if="snackbar"
      :show="true"
      :msg="snackbarmsg"
    ></App-Snackbar>
    <App-Search @searching="send"></App-Search>
    <AppHierarchy></AppHierarchy>
    <h3>נמצאו {{ $store.state.products.length }} ספרים</h3>
    <AppBookCard></AppBookCard>
  </div>
</template>

<script>
import AppSnackbar from "@/components/Snackbar.vue";
import AppBookCard from "@/components/Book-Card.vue";
import AppSearch from "@/components/Search-Book.vue";
import AppHierarchy from "@/components/Hierarchy.vue";
import axios from "axios";
import store from "@/store";
export default {
  name: "HomeView",
  components: {
    AppBookCard,
    AppSearch,
    AppHierarchy,
    AppSnackbar,
  },
  data() {
    return {
      txt: "",
      items: [],
      snackbarmsg: "כל המוצרים הגיעו",
      snackbar: true,
    };
  },
  mounted() {
    this.$sendNotification("cbcbcbcbcbc", 2000);

    axios.get("http://localhost:3000/api/products").then((response) => {
      const seenIds = {};
      let previousAuthorName = "";

      const filteredArray = response.data.filter((obj) => {
        if (!seenIds[obj.Book_ID]) {
          seenIds[obj.Book_ID] = true;
          previousAuthorName = obj.Author_Name;
          return true;
        } else {
          obj.Author_Name += " " + previousAuthorName;
          return false;
        }
      });
      store.state.products = filteredArray;
      console.log(store.state.products);
      this.items = [...store.state.products];

      // this.items = store.state.products;
    });
  },
  methods: {
    send(val) {
      this.txt = val;
      if (this.txt.length > 0) {
        // const BookNameArray = [];
        const AuthorNameArray = [];
        const FullNameArray = [];
        const FullAuthorArray = [];
        const startWithName = [];
        const startWithAuthor = [];
        const onearray = [];

        let myInx = new Map();

        function addToInx(words, element) {
          words.forEach((w) => {
            let tmp = myInx.get(w);
            if (tmp) tmp.add(element);
            else myInx.set(w, new Set([element]));
          });
        }
        this.items.forEach((element) => {
          addToInx(element.Book_Name?.split(" "), element);
          // addToInx(element.Author_Name?.split(" "), element);
        });
        let BookNameArray = myInx.get(this.txt);
        // console.log(BookNameArray);
        // this.items.forEach((obj) => {
        //   const words = obj.Book_Name.split(" ");
        //   const words1 = obj.Author_Name.split(" ");

        // if (
        //   obj.Book_Name.includes(this.txt) &&
        //   words.some(
        //     (word) =>
        //       word === this.txt ||
        //       word.startsWith(this.txt + " ") ||
        //       word.endsWith(" " + this.txt) ||
        //       word.includes(" " + this.txt + " ")
        //   )
        // ) {
        //   FullNameArray.push(obj);
        // } else if (
        //   obj.Author_Name.includes(this.txt) &&
        //   words1.some(
        //     (word) =>
        //       word === this.txt ||
        //       word.startsWith(this.txt + " ") ||
        //       word.endsWith(" " + this.txt) ||
        //       word.includes(" " + this.txt + " ")
        //   )
        // ) {
        // FullAuthorArray.push(obj);
        // }
        //   if (obj.Book_Name.includes(this.txt)) {
        //     BookNameArray.push(obj);
        //   } else if (obj.Author_Name.includes(this.txt)) {
        //     AuthorNameArray.push(obj);
        //   }
        // });

        // onearray = [...BookNameArray];
        // onearray.push(...FullNameArray);
        // onearray.push(...FullAuthorArray);
        // // onearray.push(...BookNameArray);
        // onearray.push(...AuthorNameArray);

        this.$store.commit("pushProducts", BookNameArray || []);
        console.log(store.state.products);
      }
      if (this.txt.length == 0) {
        store.state.products = this.items;
      }
    },
  },
};
</script>
<style>
h3 {
  color: #adf5d6;
  /* margin-left: 74%; */
}
</style>
