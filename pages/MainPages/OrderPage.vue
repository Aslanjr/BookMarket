<template>
    <div class="Main">
        <Headers/>
        <HeadOrder/>
        <Order/>
        <OrderInfo/>
        <StoreLinks/>
        <BookClub/>
        <Footer/> 
        <MyLinks/>
    </div>
</template>
<script>

import Headers      from '../../components/Main/header'
import Footer       from '../../components/Main/footer'
import MyLinks      from '../../components/Main/MyLink'
import HeadOrder    from '../../components/Main/ContentHead/OrderPage'
import StoreLinks   from '../../components/Main/Links/StoreLinks.vue'
import OrderInfo    from '../../components/Main/ProductInfo/OrderInfo'
import Order        from '../../components/Main/Other/Order'
import BookClub     from '../../components/Main/Books/BooksClub'

export default {
    name:'AboutMe',
    data:()=>{
        return{

        }
    },
    components:{
        Headers,     
        Footer,     
        MyLinks,
        Order,
        HeadOrder,
        BookClub,
        StoreLinks,
        OrderInfo
    }
}
</script>
<style lang="scss" scoped>
    .Main{
        overflow: hidden;
    }
</style>