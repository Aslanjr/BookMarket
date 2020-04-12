<template>
    <div class="Pricing">
        <div class="container-fuild">
            <div class="row justify-content-center">
                <div class="col-xl-12 text-center">
                    <h4 class="Pricing__title">NEWS</h4>
                    <h1 class="Pricing__head">Latest blog posts</h1>
                   
                </div>
                <div class="col-xl-12">
                    <img src="https://chapterone.qodeinteractive.com/wp-content/uploads/2019/07/home-2-rev-2-img-4.png" class="img" alt="">
                    <img src="https://chapterone.qodeinteractive.com/wp-content/uploads/2019/07/home-2-rev-3-image-4.png" class="img" alt="">
                </div>
                <div class="col-xl-4" v-for="(item,index) in PricingList" :key="index">
                    
                    <div class="Pricing__item">
                        <div class="Pricing__item__content">
                            <p class="Pricing__title">{{item.title}}</p>
                            <p class="Pricing__head">{{item.name}}</p>
                            <p class="Pricing__text">{{item.text}}</p>
                            <button class="button mt-4">READ MORE</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'Pricing',
    data(){
        return{
            msg:'Monthly',
            PricingList:[
                {
                    title:'ADMIN JULY 29, 2019',
                    name:'Connecting readers from around the world',
                    text:`
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Curabitur molestie sed tortor id euismod. 
                    Phasellus mi odio, pulvinar vitae vestibulum ...`,
                },
                {
                    title:'ADMIN JULY 29, 2019',
                    name:'How to spend a rainy day at your home',
                    text:`
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Curabitur molestie sed tortor id euismod. 
                    Phasellus mi odio, pulvinar vitae vestibulum ...`,
                },
                {
                    title:'ADMIN JULY 29, 2019',
                    name:'Coffee and croissant with our favorite Erika',
                    text:`
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Curabitur molestie sed tortor id euismod. 
                    Phasellus mi odio, pulvinar vitae vestibulum ...`,
                },
            ],
        }
    },
    filters:{
        Dollar(value){
            return '$' + value + '.99'
        },
        Upper(value){
            return value.toUpperCase();
        }
    }
}
</script>
<style lang="scss" scoped>
@import "../../../assets/mixin.scss";
    .Pricing{
        padding:8% 15%;
    }
    .img{
        position: absolute;
    }
    .img:nth-child(1){
        top:0%;
        right:80%;
    }
    .img:nth-child(2){
        top:0%;
        left:85%;
    }
    .Pricing__item{
        margin:20% 0%;
        padding:5% 0% 0% 0%;
        background:rgb(249,249,249);
        transition:all .65s ease;
        box-shadow: 0px 0px 10px 1px rgba(188,188,188,.5);
        @include text(#000,17px,.05em,500);
        &:hover{
            box-shadow: 0px 0px 20px 2px rgba(188,188,188,1);
            transform: scale(1.01) translateY(-20px);
        }
        .Pricing__item__content{
            margin:10% 0% 0% 0%;
            padding:0% 15% 15% 15%;
        }
    }
    .Pricing__title{
        @include text(rgb(155,155,155),15px,.2em,500)
    }
    .Pricing__head{
        @include text(#000,25px,.1em,500)
    }
    .Pricing__text{
        @include text(rgb(155,155,155),17px,.1em,500)
    }
    .button{
        @include button(rgb(249,249,249),#000,1px solid rgba(119, 119, 119,.5) )
    }
</style>