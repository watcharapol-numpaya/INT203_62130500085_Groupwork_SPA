<template>
  <div class="bg-white m-1">
    <div class="">
      <div class="absolute ml-36 mt-1" @click="addToCart()">
        <router-link to="/">
          <img
            src="@/assets/icons/add_shopping_cart.svg"
            class="h-5 bg-green-200 rounded-2xl hover:bg-green-400 transform hover:scale-110"
            alt="add to cart "
        /></router-link>
      </div>
    </div>
    <img
      class="h-24 w-44"
      :src="require(`./../../assets/images/${gameList.src}`)"
    />
    <span class="text-xs p-1">{{ gameList.title }} </span> |
    <span class="text-xs p-1">{{ gameList.price }}" "{{ Currency }} </span>
  </div>
</template>


<script>
let i = 1;
export default {
  data() {
    return {
      url: "http://localhost:5000/order",
      Currency: "THB",
      orders: [],
      countItem: 0,
    };
  },

  props: ["game-list"],
  methods: {
    async fetchGetItem() {
      const res = await fetch(this.url);
      const data = await res.json();
      // parses JSON response into native JavaScript objects
      return data;
    },
    addToCart() {
      this.countItem = i++;
      this.addNewItem({
        title: this.gameList.title,
        price: this.gameList.price,
        src: this.gameList.src,
        description: this.gameList.description,
      });

      console.log(this.countItem);
    },
    async addNewItem(addItem) {
      try {
        await fetch(this.url, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            title: addItem.title,
            price: addItem.price,
            src: addItem.src,
            description: addItem.description,
          }),
        });
      } catch (error) {
        console.log("error");
      }
    },
  },
  async created() {
    this.orders = await this.fetchAddItem();
  },
};
</script>