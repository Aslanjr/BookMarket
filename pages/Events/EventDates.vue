<template>
    <div class="Main">
        <Headers/>
        <EventsPage/>
        <EventDate/>
        <Footer/> 
        <MyLinks/>
    </div>
</template>
<script>

import Headers      from '../../components/Main/header.vue'
import Footer       from '../../components/Main/footer.vue'
import MyLinks      from '../../components/Main/MyLink.vue'
import EventsPage   from '../../components/Main/ContentHead/EventDates'
import EventDate    from '../../components/Main/Events/BookPromotion'


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
        EventDate,
        EventsPage
    }
}
</script>
<style lang="scss" scoped>
    .Main{
        overflow: hidden;
    }
</style>