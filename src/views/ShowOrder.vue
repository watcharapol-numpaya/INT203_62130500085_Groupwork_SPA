<template>
  <div class="mt-10 flex jus justify-between space-x-3 h-96">
    <div class="bg-white shadow-2xl w-96 rounded-2xl p-2">
      <div class="border-b-2 pb-2">
        <h1>My Order</h1>

        <h1>My wallet : {{ wallet.money }} {{ currency }}</h1>
      </div>

      <div class="relative">
        <li class="list-none" v-for="(order, index) in orders" :key="index">
          {{ order.title }}
          <hr />
          <img
            class="h-24 w-44"
            :src="require(`@/assets/images/${order.src}`)"
          />

          <button
            class="bg-red-500 p-1 rounded-full"
            @click="deleteItem(order.id)"
          >
            X
          </button>

          {{ order.price }}

          <button>-</button>
          <button>+</button>
        </li>

        <button
          class="focus:outline-none bg-green-400 p-1 rounded-xl hover:bg-green-500 m-2"
          @click="payment()"
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
      urlOrder: "http://localhost:5000/order",
      urlPayment: "http://localhost:5000/wallet",
      orders: [],
      wallet: [],
      currency: "THB",
    };
  },

  methods: {
    payment() {
      let sum = 0;
      console.log(this.wallet.id);
      console.log(this.orders[0].price);

      for (let i = 0; i < this.orders.length; i++) {
        sum += this.orders[i].price;
        console.log(this.orders[i].price);
      }

      this.wallet.money -= sum;
      console.log(this.wallet.money + "money");
      console.log(this.wallet.id + ":id");

      this.updateWallet(this.wallet);
    },

    async updateWallet(updateMoney) {
      console.log(updateMoney + " : update id");
      await fetch(`${this.urlPayment}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          money: updateMoney.money,
          id: updateMoney.id
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