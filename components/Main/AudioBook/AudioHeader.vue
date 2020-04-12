<template>
    <div class="AudioBook">
        <div class="container-fuild">
            <div class="row d-flex  AudioBook__content align-items-center">
                <div class="col-lg-6 text-center">
                    <div class="content d-flex flex-column">
                        <div>
                            <img src="https://chapterone.qodeinteractive.com/wp-content/uploads/2019/07/home-4-rev-image-2.png" alt="">
                        </div>
                        <div>
                            <button class="button">READ MORE</button>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="Content__img">
                        <img src="https://chapterone.qodeinteractive.com/wp-content/uploads/2019/07/home-4-rev-image-4.png" class="Content__img__item" alt="">
                        <img src="https://chapterone.qodeinteractive.com/wp-content/uploads/2019/07/home-4-rev-image-3.png" class="Content__img__item" alt="">
                        <img src="https://chapterone.qodeinteractive.com/wp-content/uploads/2019/07/home-4-rev-image-5.png" class="Content__img__item" alt="">
                        <img src="https://chapterone.qodeinteractive.com/wp-content/uploads/2019/07/home-4-rev-image-6.png" class="Content__img__item" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'AudioBook'
}
</script>
<style lang="scss" scoped>
@import '../../../assets/mixin.scss';    
    .AudioBook{
        padding: 20% 0%;
        overflow: hidden;
        min-height: 990px;
        height: 100%;
        background:url('https://chapterone.qodeinteractive.com/wp-content/uploads/2019/07/home-4-rev-image-1.jpg')no-repeat;
        background-position: center center;
    }
    .button{
        @include button(rgb(158, 42, 34),#fff,1px solid rgb(158, 42, 34));
    }
    .Content__img__item:nth-child(3){
        position: absolute;
        z-index: 1;
        top:-10%;
        left:25%;
    }
    .Content__img__item:nth-child(4){
        position: absolute;
        top:-80%;
        left:25%;
    }
</style>