<template>
    <div class="Log">
        <Header/>
        <Login/>
        <CLientLinks/>
        <Footer/>
        <MyLink/>
    </div>
</template>
<script>
import Header       from '../../components/Main/header.vue'
import Login        from '../../components/Main/Auth/Login.vue'
import Footer       from '../../components/Main/footer.vue'
import MyLink       from '../../components/Main/MyLink.vue'
import CLientLinks  from '../../components/Main/Links/ClientsLinks.vue'

export default {
    name:'Log',
    data:()=>{
        return{

        }
    },
    components:{
        Header,
        Login,
        Footer,
        MyLink,
        CLientLinks
    }
}
</script>
<style lang="scss" scoped>
    
</style>