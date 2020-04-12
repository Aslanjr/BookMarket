<template>
    <div class="Main">
        <Headers/>
        <FAQHead/>
        <FAQContent/>
        <ClientsLinks/>
        <Footer/> 
        <MyLinks/>
    </div>
</template>
<script>

import Headers        from '../../components/Main/header'
import Footer         from '../../components/Main/footer'
import FAQHead        from '../../components/Main/ContentHead/FAQ'
import FAQContent     from '../../components/Main/Other/FAQContent'
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
        FAQHead,
        FAQContent
    }
}
</script>
<style lang="scss" scoped>
    .Main{
        overflow: hidden;
    }
</style>