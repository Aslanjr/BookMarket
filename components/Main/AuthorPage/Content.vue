<template>
    <div class="AuthorContent">
        <div class="container-fuild">
            <div class="row align-items-center">
                <div class="col-lg-6 text-center">
                    <img src="https://chapterone.qodeinteractive.com/wp-content/uploads/2019/07/home-1-single-image-4.png" alt="">
                </div>
                <div class="col-lg-6">
                    <p class="AuthorContent__title">BEST-SELLER</p>
                    <p class="AuthorContent__head" >Contemplating inspiration</p>
                    <p class="AuthorContent__text" >
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do  <br> eiusmod tempor incididunt 
                        ut  labore et dolore magna aliqua.
                        Ut <br> enim ad minim veniam, quis.
                    </p>
                    <button class="button">READ MORE</button>
                    <img src="https://chapterone.qodeinteractive.com/wp-content/uploads/2019/07/home-2-rev-3-image-1.png" class="img" alt="">
                </div>
            </div>
        </div>       
    </div>
</template>
<script>
export default {
    name:'AuthorContent',


}
</script>
<style lang="scss" scoped>
@import "../../../assets/mixin.scss";
    .AuthorContent{
        padding: 5% 10%;
    }
    .img{
        position: absolute;
        top:80%;
        right:10%;
        @media screen and(max-width:650px){
            display: none;
        }
    }
    .AuthorContent__title{
        @include text(rgb(155,155,155),15px,.2em,500)
    }
    .AuthorContent__head{
        @include text(#000,35px,.02em,500)
    }
    .AuthorContent__text{
        @include text(rgb(97, 97, 97),20px,.05em,500)
    }
    .button{
        @include button(rgb(249,249,249),#000,1px solid rgba(119, 119, 119,.5) )
    }
</style>