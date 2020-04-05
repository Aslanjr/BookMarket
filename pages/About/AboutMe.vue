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

import Headers      from '../../components/Main/header.vue'
import Footer       from '../../components/Main/footer.vue'
import Events       from '../../components/Main/Events/BookPromotion.vue'
import ClientLinks  from '../../components/Main/ClientsLinks.vue'
import MyLinks      from '../../components/Main/MyLink.vue'
import About        from '../../components/Main/ContentHead/AboutMe.vue'
import Story        from '../../components/Main/ShortStory.vue'
import ParisTour    from '../../components/Main/Events/ParisTour.vue'

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