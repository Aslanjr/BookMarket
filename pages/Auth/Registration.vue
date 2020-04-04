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
import Header       from '../../components/Main/header'
import Registration from '../../components/Main/Auth/Registration'
import Footer       from '../../components/Main/footer'
import MyLink       from '../../components/Main/MyLink'
import CLientLinks  from '../../components/Main/ClientsLinks'

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