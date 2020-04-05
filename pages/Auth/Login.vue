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
import Header from '~/components/Main/header'
import Login from '~/components/Main/Auth/Login'
import Footer from '~/components/Main/footer'
import MyLink from '~/components/Main/MyLink'
import CLientLinks from '~/components/Main/ClientsLinks'

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