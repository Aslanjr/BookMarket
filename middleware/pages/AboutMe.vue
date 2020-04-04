<template>
    <div>
        <Headers/>     
        <Events/>     
        <ClientLinks/>
        <Footer/> 
        <MyLinks/>
          
    </div>
</template>
<script>

import Headers       from '~/components/Main/header.vue'
import Footer       from '~/components/Main/footer.vue'
import Events       from '~/components/Main/Events/BookPromotion.vue'
import ClientLinks  from '~/components/Main/ClientsLinks.vue'
import MyLinks      from '~/components/Main/MyLink.vue'


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
        MyLinks    
    }
}
</script>
<style lang="scss" scoped>
    
</style>