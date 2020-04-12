<template>
    <div class="Main">
        <Headers/>
        <AudioHeader/>
        <BookSlider/>
        <BookContent/>
        <Footer/> 
        <MyLinks/>
    </div>
</template>
<script>

import Headers      from '../components/Main/header.vue'
import Footer       from '../components/Main/footer.vue'
import MyLinks      from '../components/Main/MyLink.vue'
import AudioHeader  from '../components/Main/AudioBook/AudioHeader'
import BookContent  from '../components/Main/AudioBook/BookContent'
import BookSlider   from '../components/Main/AudioBook/BookSlider'

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
        AudioHeader,
        BookContent,
        BookSlider
    }
}
</script>
<style lang="scss" scoped>
    .Main{
        overflow: hidden;
    }
</style>