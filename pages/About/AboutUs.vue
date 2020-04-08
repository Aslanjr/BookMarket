<template>
    <div class="Main">
        <Headers/>
        <BookSections/>
        <History/>
        <Coffee/>
        <Products/>
        <ClientLinks/>
        <Footer/> 
        <MyLinks/>
    </div>
</template>
<script>

import Headers      from '../../components/Main/header.vue'
import Footer       from '../../components/Main/footer.vue'
import ClientLinks  from '../../components/Main/ClientsLinks.vue'
import MyLinks      from '../../components/Main/MyLink.vue'
import History      from '../../components/Main/Autobiography/History.vue'
import Coffee       from '../../components/Main/Autobiography/Coffee.vue'
import BookSections from '../../components/Main/Books/BooksSections.vue'
import Products     from '../../components/Main/Other/PromoProducts'

export default {
    name:'AboutMe',
    data:()=>{
        return{

        }
    },
    components:{
        Headers,     
        Footer,     
        ClientLinks,
        MyLinks,
        History,
        Coffee,
        BookSections,
        Products
    }
}
</script>
<style lang="scss" scoped>
    .Main{
        overflow: hidden;
    }
</style>