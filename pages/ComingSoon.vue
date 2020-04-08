<template>
    <div class="Main">
        <Headers/>
        <ComingSoon/>
        <Footer/> 
        <MyLinks/>
    </div>
</template>
<script>

import Headers      from '../components/Main/header.vue'
import Footer       from '../components/Main/footer.vue'
import MyLinks      from '../components/Main/MyLink.vue'
import ComingSoon   from '../components/Main/Other/ComingSoon'

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
        ComingSoon
    }
}
</script>
<style lang="scss" scoped>
    .Main{
        overflow: hidden;
    }
</style>