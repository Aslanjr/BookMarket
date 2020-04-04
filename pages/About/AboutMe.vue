<template>
    <div class="Main">
        <Headers/>
        <About/>   
        <Story/>
        <ParisTour/>
        <Events/>     
        <ClientLinks/>
        <Footer/> 
        <MyLinks/>
    </div>
</template>
<script>

import Headers      from '../../components/Main/header'
import Footer       from '../../components/Main/footer'
import Events       from '../../components/Main/Events/BookPromotion'
import ClientLinks  from '../../components/Main/ClientsLinks'
import MyLinks      from '../../components/Main/MyLink'
import About        from '../../components/Main/ContentHead/AboutMe'
import Story        from '../../components/Main/ShortStory'
import ParisTour    from '../../components/Main/Events/ParisTour'

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
        Story,
        About,
        ParisTour    
    }
}
</script>
<style lang="scss" scoped>
    .Main{
        overflow: hidden;
    }
</style>