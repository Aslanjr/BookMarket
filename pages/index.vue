<template>
  <div class="Main">
    <Header class="Header" /> 
    <!-- <add-book v-if="show" /> -->
    <slider class="Slider" />
    <books class="Books" />
    <OurService />
    <Authors/>
    <GuestHost/>
    <Travelogue/>
    <Gallery/>
    <BookPromotion/>
    <ClientsLinks/>
    <Footer/>
    <MyLink/>
  </div>
</template>

<script>

import Header from '../components/Main/header'
// import addBook from '~/components/Main/addBook.vue'
import slider from '../components/Main/Slider'
import books from '../components/Main/Books/Books'
import OurService from '../components/Main/OurService'
import Authors from '../components/Main/Authors'
import GuestHost from '../components/Main/Autobiography/Guesthost'
import Travelogue from '../components/Main/Autobiography/Travelogue'
import Gallery from '../components/Main/gallery'
import BookPromotion from '../components/Main/Events/BookPromotion'
import ClientsLinks from '../components/Main/ClientsLinks'
import MyLink from '../components/Main/MyLink'
import Footer from '../components/Main/footer'

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
    OurService,
    Authors,
    GuestHost,
    Travelogue,
    Gallery,
    BookPromotion,
    ClientsLinks,
    MyLink,
    Footer

  }
};
</script>

<style scoped lang="scss">
  .Main{
    overflow:hidden;
  }
  .Header{
    position:relative;
    z-index: 999;
    padding: 0;
  }
  .Slider{
    z-index:1;
  }
</style>

