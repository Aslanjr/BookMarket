<template>
  <div class="Main">
    <Header class="Header" /> 
    <!-- <add-book v-if="show" /> -->
    <slider class="Slider" />
    <books class="Books" />
    <OurService />
  </div>
</template>

<script>

import Header from '~/components/Main/header.vue'
// import addBook from '~/components/Main/addBook.vue'
import slider from '~/components/Main/Slider.vue'
import books from '~/components/Main/Books/Books.vue'
import OurService from '~/components/Main/OurService.vue'

export default {
  name:'Main',
  data:()=>{
    return{
      show:false,
    }
  },
  created() {
      this.$store.dispatch("Books/loadData");
		},
  components:{
    Header,
    // addBook,
    slider,
    books,
    OurService

  }
};
</script>

<style scoped lang="scss">
  .Header{
    position:relative;
    z-index: 999;
    padding: 0;
  }
  .Slider{
    z-index:1;
  }
</style>

