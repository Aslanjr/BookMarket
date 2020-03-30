<template>
  <div class="Main">
    <Header class="Header" /> 
    <addBook v-if="show" />
    <slider class="Slider" />
    <books class="Books" />
  </div>
</template>

<script>

import Header from '~/components/Main/header.vue'
import addBook from '~/components/Main/addBook.vue'
import slider from '~/components/Main/Slider.vue'
import books from '~/components/Main/Books/Books.vue'


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
    addBook,
    slider,
    books

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
  .Categories{
    position: relative;
    top:700px;
  }
  .Books{
    position: relative;
    top:800px;
  }
</style>

