<template>
    <div class="Subscribe">
        <div class="container-fuild">
            <div class="row justify-content-center">
                <div class="col-lg-8 Subscribe__content text-center">
                    <p class="Subscribe__content__title">SUBSCRIPTION</p>
                    <p class="Subscribe__content__name">Free e-book for subscribing</p>
                    <p class="Subscribe__content__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit,  sed do eiusmod tempor <br>
                         incididuntunumirum ut labore et dolore magna aliqua. Ut enim ad.
                    </p>
                    <div class="form-row align-items-center">
                        <div class="form-group col-md-5">
                            <input type="text" placeholder="Name" class="form-control">
                        </div>
                        <div class="form-group col-md-5">
                            <input type="text" placeholder="Email" class="form-control">
                        </div>
                        <div class="form-group col-md-2">
                            <button class="button">
                                SUBMIT
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'Subscribe'
}
</script>
<style lang="scss" scoped>
@import '../../../assets/mixin.scss';

    .Subscribe{
        padding: 5% 0%;
        background: url(https://chapterone.qodeinteractive.com/wp-content/uploads/2019/07/home-1-parallax-image.jpg)no-repeat;
        background-attachment: fixed;
    }
    .Subscribe__content{
        padding: 3% 5%;
        background: #fff;
    }
    .Subscribe__content__title{
        @include text(rgb(143, 143, 143),14px,.2em,500); 
        margin:0px;
    }
    .Subscribe__content__name{
        @include text(#000,35px,.05em,500); 
        margin:0px
    }
    .Subscribe__content__text{
        @include text(#000,18px,0.1em,500); 
    }
    .button{
        @include button(red,#fff,1px solid red);
    }
</style>