<template>
  <div class="mt-10 justify-items-center  ">
    <div class=" justify-items-center   ">
      <the-order-in-cart> </the-order-in-cart>
    </div>
  </div>
</template>


<script>
import TheOrderInCart from "../components/layout/TheOrderInCart.vue";
// import BaseShowItem from "../components/base/BaseShowItem.vue";

export default {
  components: {
    TheOrderInCart,
  },
};
</script>