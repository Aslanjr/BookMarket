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
    <Gallery class="gallery" />
    <BookPromotion/>
    <ClientsLinks/>
    <Footer/>
    <MyLink/>
  </div>
</template>

<script>
// import addBook from '~/components/Main/addBook.vue'
import Header         from '../components/Main/header.vue'
import slider         from '../components/Main/Slider.vue'
import books          from '../components/Main/Books/Books.vue'
import OurService     from '../components/Main/OurService.vue'
import Authors        from '../components/Main/Authors.vue'
import GuestHost      from '../components/Main/Autobiography/Guesthost.vue'
import Travelogue     from '../components/Main/Autobiography/Travelogue.vue'
import Gallery        from '../components/Main/gallery.vue'
import BookPromotion  from '../components/Main/Events/BookPromotion.vue'
import ClientsLinks   from '../components/Main/Links/ClientsLinks.vue'
import MyLink         from '../components/Main/MyLink.vue'
import Footer         from '../components/Main/footer.vue'

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
  .gallery{
    @media screen and(max-width:580px) {
      display:none;
    }
  }
  
</style>

