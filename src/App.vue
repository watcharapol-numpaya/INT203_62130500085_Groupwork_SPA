<template >
  <div class="w-screen h-screen">
    <div class="w-full min-h-screen bg-gray-700">
      <the-navigation> </the-navigation>
      <div class="flex flex-col items-center justify-center">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

 <script>
export default {};
</script>
