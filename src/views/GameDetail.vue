<template>
  <section class="">
    <h1>{{ gameLists.title }}</h1>
    <div>
      <img :src="require(`@/assets/${gameLists.src}`)" />
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      destinationId: this.$route.params.id,
    };
  },

  // computed: {
  //   destination() {
  //     return ;
  //   },
  // },
};
</script>

