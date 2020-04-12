<template>
    <div class="Pricing">
        <div class="container-fuild">
            <div class="row justify-content-center">
                <div class="col-lg-12 text-center">
                    <h4 class="Pricing__title">PRICING OPTIONS</h4>
                    <h1 class="Pricing__head">Latest books online</h1>
                    <p class="Pricing__text">Uinim veniam, quis nostrud exercitation ullamco laboris nisi</p>
                </div>
                <div class="col-lg-4" v-for="(item,index) in PricingList" :key="index">
                    <div class="Pricing__item">
                        <div class="Pricing__item__head">

                        </div>
                        <div class="Pricing__item__content">
                            <p>{{item.title}}</p>
                            <p>{{item.amount | Dollar}}  <span class="Pricing__title"> / {{msg | Upper}}</span></p>
                            <li>{{item.value1}}</li>
                            <li>{{item.value2}}</li>
                            <li>{{item.value3}}</li>
                            <button class="button mt-4">BUY NOW</button>
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
                    title:'Basic',
                    amount:9,
                    value1:'Pellentesque id dui porttitor',
                    value2:'Mauris a nibh in tellus varius',
                    value3:'Nam ut dolor viverra, rutrum',
                },
                {
                    title:'Profesional',
                    amount:49,
                    value1:'Pellentesque id dui porttitor',
                    value2:'Mauris a nibh in tellus varius',
                    value3:'Nam ut dolor viverra, rutrum',
                },
                {
                    title:'Advanced',
                    amount:99,
                    value1:'Pellentesque id dui porttitor',
                    value2:'Mauris a nibh in tellus varius',
                    value3:'Nam ut dolor viverra, rutrum',
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
        padding:3% 15%;
    }
    .Pricing__item__head{
        width: 100%;
        height: 50px;
        background-image: url(https://chapterone.qodeinteractive.com/wp-content/uploads/2019/07/pricing-options-title-area-img-1.jpg);
        background-attachment: fixed;
    }
    .Pricing__item{
        margin:20% 0%;
        
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
            padding:0% 15% 25% 15%;
        }
    }
    .Pricing__title{
        @include text(rgb(155,155,155),15px,.2em,500)
    }
    .Pricing__head{
        @include text(#000,35px,.1em,500)
    }
    .Pricing__text{
        @include text(rgb(155,155,155),17px,.1em,500)
    }
    .button{
        @include button(rgb(194, 48, 48),#fff,1px solid rgb(194, 48, 48) )
    }
</style>