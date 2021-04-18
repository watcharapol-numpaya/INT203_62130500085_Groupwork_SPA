<template>
  <div class="mt-10 flex jus justify-between space-x-3 h-96">
    <div class="bg-white shadow-2xl w-96 rounded-2xl p-2">
      <div class="border-b-2 pb-2">
        <h1>My Order</h1>
      </div>

      <div class="relative">
        <li class="" v-for="(order, index) in orders" :key="index">
          {{ order.title }}
          <hr />
          <img
            class="h-24 w-44"
            :src="require(`@/assets/images/${order.src}`)"
          />
        </li>
        <button
          class="focus:outline-none bg-green-400 p-1 rounded-xl hover:bg-green-500 m-2"
        >
          Payment
        </button>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      url: "http://localhost:5000/order",
      orders: [],
    };
  },
  methods: {
    async fetchGetItem() {
      const res = await fetch(this.url);
      const data = await res.json();
      // parses JSON response into native JavaScript objects
      return data;
    },
  },
  async created() {
    this.orders = await this.fetchGetItem();
  },
};
</script>