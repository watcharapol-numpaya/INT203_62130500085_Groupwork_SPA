<template>
  <nav class="bg-yellow-500  py-1">
    <div class="p-1 flex justify-between items-center">
      <div class="">
        <router-link to="/">
          <img
            src="./../../assets/icons/logo-store.svg"
            class="h-10 ml-12 mr-12"
            alt="logo"
        /></router-link>
      </div>

      <div class="flex space-x-3 mr-6  ">
        <!-- <div class=" ">
          <router-link to="">
            <img src="./../../assets/icons/user.svg" class="h-4" alt="user"
          /></router-link>
        </div>
        <div>
          <router-link to="">
            <img src="./../../assets/icons/global.png" class="h-4" alt="global"
          /></router-link>
        </div> -->
        <div class=" ">
         
          <router-link to="@/views/ShowOrder">
            <img
              src="./../../assets/icons/shopping-cart.svg"
              class="h-6"
              alt="cart"
            />
          </router-link>
        </div>
      </div>
    </div>
  </nav>

  <!-- ----------- -->
</template>


 <script>
export default {
  data() {
    return {
      urlOrder: "http://localhost:5000/order",
      orders: [],
    };
  },
  computed: {
    countItem() {
      let countItems = this.orders.length;
      return countItems;
    },
  },
  methods: {
    async fetchGetItem() {
      const res = await fetch(this.urlOrder);
      const data = await res.json();

      return data;
    },
    async fetchGetWallet() {
      const res = await fetch(this.urlPayment);
      const data = await res.json();

      return data;
    },
  },
  async fetchGetItem() {
    const res = await fetch(this.urlOrder);
    const data = await res.json();

    return data;
  },
  async created() {
    this.orders = await this.fetchGetItem();
  },
};
</script>