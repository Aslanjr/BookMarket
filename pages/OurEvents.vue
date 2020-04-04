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

import Headers      from '../components/Main/header'
import Footer       from '../components/Main/footer'
import Events       from '../components/Main/Events/BookPromotion'
import ClientLinks  from '../components/Main/ClientsLinks'
import MyLinks      from '../components/Main/MyLink'
import OurEvent     from '../components/Main/Events/OurEvent'
import ParisTour    from '../components/Main/Events/ParisTour'
import BooksClub    from '../components/Main/Books/BooksClub'


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