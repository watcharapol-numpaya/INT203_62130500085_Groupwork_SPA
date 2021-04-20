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
 
export default {
  data() {
    return {
      urlOrder: "http://localhost:5000/order",
      urlGameLists: "http://localhost:5000/gameLists",
      Currency: "THB",
      
      
       
    };
  },

  props: ["game-list"],
  methods: {
    // async fetchGetItemInOrder() {
    //   const res = await fetch(this.urlOrder);
    //   const data = await res.json();

    //   return data;
    // },
    // async fetchGetItemGameLists() {
    //   const res = await fetch(this.urlGameLists);
    //   const data = await res.json();

    //   return data;
    // },
    addToCart() {
       
       
      this.addNewItem({
        title: this.gameList.title,
        price: this.gameList.price,
        src: this.gameList.src,
        description: this.gameList.description,
      });
    },
    async addNewItem(addItem) {
      try {
        await fetch(this.urlOrder, {
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
  // async created() {
  //   this.orders = await this.fetchGetItemInOrder();
  //   this.gameStore = await this.fetchGetItemGameLists();
  // },
};
</script>