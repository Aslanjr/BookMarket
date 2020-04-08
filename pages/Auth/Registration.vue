<template>
    <div class="Log">
        <Header/>
        <Registration/>
        <CLientLinks/>
        <Footer/>
        <MyLink/>
    </div>
</template>
<script>
import Header       from '../../components/Main/header.vue'
import Registration from '../../components/Main/Auth/Registration.vue'
import Footer       from '../../components/Main/footer.vue'
import MyLink       from '../../components/Main/MyLink.vue'
import CLientLinks  from '../../components/Main/ClientsLinks.vue'

export default {
    name:'Log',
    data:()=>{
        return{

        }
    },
    components:{
        Header,
        Registration,
        Footer,
        MyLink,
        CLientLinks
    }
}
</script>
<style lang="scss" scoped>
    
</style>