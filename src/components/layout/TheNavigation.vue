<template>
 
  <nav class="bg-yellow-500  h-10 ">
    <div class="p-1 flex justify-between items-center">
      <div class="">
        <router-link to="/">
          <img
            src="./../../assets/icons/logo-store.svg"
            class="h-8 ml-12 mr-12"
            alt="logo"
        /></router-link>
      </div>

      <div class="flex space-x-3 mr-6">
        <div class=" ">
          <router-link to="">
            <img src="./../../assets/icons/user.svg" class="h-4" alt="user"
          /></router-link>
        </div>
        <div>
          <router-link to="">
            <img src="./../../assets/icons/global.png" class="h-4" alt="global"
          /></router-link>
        </div>
        <div>
          <router-link to="">
            <img
              src="./../../assets/icons/shopping-cart.svg"
              class="h-4"
              alt="cart"
            />
          </router-link>
        </div>
      </div>
    </div>
  </nav>

  <!-- ----------- -->
</template>


 