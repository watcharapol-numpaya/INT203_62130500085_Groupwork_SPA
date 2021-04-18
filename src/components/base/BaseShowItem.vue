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
      id: 1,
      order: [],
    };
  },

  props: ["game-list"],
  methods: {
    addToCart() {
      this.i = i++;
      this.addNewItem({
        title: this.title,
        price: this.gameList.title,
        src: this.src,
        description: this.description,
      });
      console.log(this.i);
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
          }),
        });
      } catch (error) {
        console.log("error");
      }
    },
    async created() {
      this.addItem = await this.fetchAddItem();
    },
    
  },
};
</script>