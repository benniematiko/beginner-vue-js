const app = Vue.createApp({
  data() {
    return {
      title: "Jesus Saves",
      autho: "Brendon Sanders",
      age: 56,
    };
  },

  method: {
    changeTitle() {
      this.title = "THE BIBLE";
    },
  },
});

app.mount("#app");
