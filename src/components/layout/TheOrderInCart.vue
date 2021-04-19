<template>
  <div class="mt-10 flex justify-between space-x-3">
    <div class="bg-white shadow-2xl rounded-2xl w-96 p-6">
      <div class="border-b-2 pb-2 justify-between flex">
        <h1>My Order</h1>
    
        <h1>My wallet : {{ wallet.money }} {{ currency }}</h1>
      </div>

      <div class="relative">
        <li class="list-none" v-for="(order, index) in orders" :key="index">
          {{ order.title }}

          <div class="flex">
            <img
              class="h-24 w-44"
              :src="require(`@/assets/images/${order.src}`)"
            />

            <img
              src="@/assets/icons/cancel_black_24dp.svg"
              class="h-8 ml-12 mr-12 cursor-pointer"
              @click="deleteItem(order.id)"
              alt="logo"
            />
          </div>
          {{ order.price }} {{ currency }}
          <hr class="mt-2" />
        </li>

        <div v-show="this.orders.length">
          <h1>My Wallet : {{ this.wallet.money }} {{ currency }}</h1>
          <h1>Total price : {{ sumPrice.totalprice }} {{ currency }}</h1>
          <h1>
            Remaining Money : {{ sumPrice.RemainingMoney }} {{ currency }}
          </h1>
        </div>

        <button
          class="focus:outline-none bg-green-400 pr-4 pl-4 p-2 rounded-xl hover:bg-green-500 m-2"
          @click="payment()"
        >
          Buy
        </button>
      </div>
    </div>
  </div>
</template>



<script>
export default {
  data() {
    return {
      urlOrder: "http://localhost:5000/order",
      urlPayment: "http://localhost:5000/wallet",
      orders: [],
      wallet: [],
      currency: "THB",
      hasItem: false,
    };
  },
  computed: {
    sumPrice() {
      let i = 0;
      let totalprice = 0;
      for (i; i < this.orders.length; i++) {
        totalprice += this.orders[i].price;
      }
      let RemainingMoney = this.wallet.money - totalprice;
      let count = this.orders.length;

      return { totalprice, RemainingMoney, count };
    },
  },
  methods: {
    payment() {
      let sum = 0;

      for (let i = 0; i < this.orders.length; i++) {
        sum += this.orders[i].price;
        this.totalprice += this.orders[i].price;
      }
      this.wallet.money -= sum;
      this.updateWallet(this.wallet);
      return this.wallet.money;
    },

    async updateWallet(updateMoney) {
      await fetch(`${this.urlPayment}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          money: updateMoney.money,
          id: updateMoney.id,
        }),
      });
    },

    async deleteItem(deleteId) {
      try {
        await fetch(`${this.urlOrder}/${deleteId}`, {
          method: "DELETE",
        });

        this.orders = this.orders.filter((order) => order.id !== deleteId);
      } catch (error) {
        console.log(`Could not delete! ${error}`);
      }
    },
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

  async created() {
    this.orders = await this.fetchGetItem();
    this.wallet = await this.fetchGetWallet();
  },
};
</script>