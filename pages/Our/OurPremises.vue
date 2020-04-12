<template>
    <div class="Main">
        <Headers/>  
        <HeadPremises/>
        <Premises/>
        <ClientLinks/>
        <Footer/> 
        <MyLinks/>
    </div>
</template>
<script>

import Headers      from '../../components/Main/header.vue'
import Footer       from '../../components/Main/footer.vue'
import ClientLinks  from '../../components/Main/Links/ClientsLinks.vue'
import MyLinks      from '../../components/Main/MyLink.vue'
import Premises     from '../../components/Main/Other/OurPremises.vue'
import HeadPremises from '../../components/Main/ContentHead/HeadPremises.vue'

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
        Premises,
        HeadPremises
    }
}
</script>
<style lang="scss" scoped>
    .Main{
        overflow: hidden;
    }
</style>