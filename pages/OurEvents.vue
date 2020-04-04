<template>
    <div class="Main">
        <Headers/>
        <OurEvent/>   
        <Events/>   
        <BooksClub/>
        <ParisTour/>
        <ClientLinks/>
        <Footer/> 
        <MyLinks/>
    </div>
</template>
<script>

import Headers      from '~/components/Main/header.vue'
import Footer       from '~/components/Main/footer.vue'
import Events       from '~/components/Main/Events/BookPromotion.vue'
import ClientLinks  from '~/components/Main/ClientsLinks.vue'
import MyLinks      from '~/components/Main/MyLink.vue'
import OurEvent     from '~/components/Main/Events/OurEvent.vue'
import ParisTour    from '~/components/Main/Events/ParisTour.vue'
import BooksClub    from '~/components/Main/Books/BooksClub.vue'


export default {
    name:'AboutMe',
    data:()=>{
        return{

        }
    },
    components:{
        Headers,     
        Footer,     
        Events,     
        ClientLinks,
        MyLinks,
        OurEvent,
        ParisTour,
        BooksClub    
    }
}
</script>
<style lang="scss" scoped>
    .Main{
        overflow: hidden;
    }
</style>