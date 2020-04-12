<template>
    <div class="Main">
        <Headers/>
        <Map/>
        <Adress/>
        <ClientsLinks/>
        <Footer/> 
        <MyLinks/>
    </div>
</template>
<script>

import Headers       from '../../components/Main/header'
import Footer        from '../../components/Main/footer'
import MyLinks       from '../../components/Main/MyLink'
import Map           from '../../components/Main/Other/Map'
import ClientsLinks  from '../../components/Main/Links/ClientsLinks'
import Adress        from '../../components/Main/Adress'

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
        Map,
        ClientsLinks,
        Adress
    }
}
</script>
<style lang="scss" scoped>
    .Main{
        overflow: hidden;
    }
</style>