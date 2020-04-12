<template>
    <div class="BookContent">
        <div class="container-fuild">
            <div class="row ">
                <div class="col-lg-6 BookContent__item p-0"></div>
                <div class="col-lg-6 BookContent__item p-0 d-flex justify-content-center text-center align-items-center">
                    <div class="BookContent__item__content">
                        <p class="BookContent__title">
                            AUDIO BOOKS
                        </p>
                        <p class="BookContent__head">
                            Lorem ipsum dolor amet
                        </p>
                        <p class="BookContent__text">
                            Except sint occaecat cupidatat non proident, sunt culpa qui officia deserunt mollit.
                            Anim id est laborum. dolor sit amet, consectetur. Dolor sit amet, consectetur.
                        </p>
                        <button class="button">READ MORE</button>
                    </div>
                </div>
            </div>
        </div>    
    </div>
</template>
<script>
export default {
    name:'BookContent',
    data:()=>{
        return{

        }
    }
}
</script>
<style lang="scss" scoped>
@import '../../../assets/mixin.scss';
    .button{
        @include button(#000,#fff,1px solid black);
    }
    .BookContent__item{
        min-height: 754px;
    }
    .BookContent__title{
       @include text(rgb(155,155,155),15px,.2em,500)
    }
    .BookContent__head{
        @include text(#000,35px,.02em,500)
    }
    .BookContent__text{
        @include text(rgb(97, 97, 97),20px,.05em,500)
    }
    .BookContent__item:nth-child(1){
        background: url(https://chapterone.qodeinteractive.com/wp-content/uploads/2019/07/home-4-image-1.jpg?id=646)no-repeat;
        background-position: center center;
    }
    .BookContent__item__content{
        width: 80%;
        height:80%;
        background: #fff;
        padding:20% 5% 0% 5%;
    }
    .BookContent__item:nth-child(2){
        background: url(https://chapterone.qodeinteractive.com/wp-content/uploads/2019/08/home-4-section-1.jpg?id=1830)no-repeat;
        background-position: center center;
    }
</style>