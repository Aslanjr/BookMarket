<template>
    <div class="Author">
        <Header/>
        <AuthorHeader/>
        <ShortStory/>
        <AuthorImg/>
        <StoreLinks/>
        <AuthorText/>
        <Content/>
        <ParisTour/>
        <Event/>
        <Subscribe/>
        <AuthorNews/>
        <ClientsLinks/>
        <Footer/>
        <MyLinks/>
    </div>
</template>
<script>

import Header        from  '../components/Main/header'
import Footer        from  '../components/Main/footer'
import ClientsLinks  from  '../components/Main/Links/ClientsLinks'
import MyLinks       from  '../components/Main/MyLink'
import AuthorHeader  from  '../components/Main/AuthorPage/AuthorHeader'
import Event         from  '../components/Main/Events/BookPromotion'
import ParisTour     from  '../components/Main/Events/ParisTour'
import StoreLinks    from  '../components/Main/Links/StoreLinks'
import ShortStory    from  '../components/Main/ShortStory'
import AuthorImg     from  '../components/Main/AuthorPage/AuthorImage'
import AuthorText    from  '../components/Main/AuthorPage/AuhtorText'
import Subscribe     from  '../components/Main/AuthorPage/Subscribe'
import AuthorNews    from  '../components/Main/AuthorPage/News'
import Content       from  '../components/Main/AuthorPage/Content'

export default {
    name:'Author',
    components:{
        Header,
        Footer,
        ClientsLinks,
        MyLinks,
        Event,
        ParisTour,
        StoreLinks,
        ShortStory,
        AuthorImg,
        AuthorText,
        Subscribe,
        AuthorNews,
        Content,
        AuthorHeader

    }
}
</script>
<style lang="scss" scoped>
    .Author{
        overflow:hidden;
    }
</style>