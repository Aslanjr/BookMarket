<template>
    <div class="Main">
        <Headers/>
        <PricingHead/>
        <PricingContent/>
        <ClientsLinks/>
        <Footer/> 
        <MyLinks/>
    </div>
</template>
<script>

import Headers        from '../../components/Main/header'
import Footer         from '../../components/Main/footer'
import PricingHead    from '../../components/Main/ContentHead/Pricing'
import PricingContent from '../../components/Main/Other/PricingOption'
import MyLinks        from '../../components/Main/MyLink'
import ClientsLinks   from '../../components/Main/Links/ClientsLinks'

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
        ClientsLinks,
        PricingHead,
        PricingContent
    }
}
</script>
<style lang="scss" scoped>
    .Main{
        overflow: hidden;
    }
</style>