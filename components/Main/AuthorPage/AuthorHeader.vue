<template>
    <div class="Header">
        <div class="container-fuild">
            <div class="row">
                <div class="col-lg-12 d-flex flex-column">
                    <div class="Header__title__header text-center">
                         <p>The bestselling fiction writer in 2020</p> 
                    </div>
                    <div class="Header__content d-flex">
                        <div class='Header__content__item'>
                            <img src="https://chapterone.qodeinteractive.com/wp-content/uploads/2019/07/home-1-slider-img6.png" alt="">
                            <p class="text text-center">AWARDED <br> BOOK</p>
                        </div>
                        <div class="Header__content__item">
                            <img src="https://chapterone.qodeinteractive.com/wp-content/uploads/2019/07/home-1-slider-img2.png" class="MainImg" alt="">
                            <img src="https://chapterone.qodeinteractive.com/wp-content/uploads/2019/07/home-1-slider-img1.png" class="MainImg" alt="">
                            <img src="https://chapterone.qodeinteractive.com/wp-content/uploads/2019/07/home-1-slider-img3.png" class="MainImg" alt="">
                            <img src="https://chapterone.qodeinteractive.com/wp-content/uploads/2019/07/home-1-slider-img5.png" class="MainImg" alt="">
                        </div>
                        <div class="Header__content__item">
                            <img src="https://chapterone.qodeinteractive.com/wp-content/uploads/2019/07/home-1-slider-img4.png" alt="">
                        </div>
                    </div>
                    <div class="Header__title__footer text-center">
                        <p>and the writer of the booksy award</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'Header'
}
</script>
<style lang="scss" scoped>
@import '../../../assets/mixin.scss';
    .Header{
        margin:0% 0% 10% 0%;
    }
    .Header__title__header{
        position: relative;
        top:5%;
        left:1%;
        animation: LeftAnimation .8s ease;
        @include text(#D14031,110px,.02em,500);
        @media screen and(max-width:1670px){
            transform: scale(.7);
            left:5%;
            top:15%;
        }
        @media screen and(max-width:966px){
            @include text(#D14031,60px,.02em,500);
        }
        @media screen and(max-width:578px){
            top:10%;
            @include text(#D14031,45px,.02em,500);
        } 
    }
    .Header__title__footer{
        position: relative;
        animation: RightAnimation .8s ease;
        top:1%;
        left:1%;
        @include text(#D14031,110px,.02em,500);
        @media screen and(max-width:1670px){
            transform: scale(.7);
            left:5%;
            top:-20%;
        }
        @media screen and(max-width:966px){
            @include text(#D14031,60px,.02em,500);
            top:13%;
            margin:0% 0% 10% 0%;
        }
        @media screen and(max-width:578px){
            top:6%;
            @include text(#D14031,45px,.02em,500);
        } 
    }
    @keyframes LeftAnimation {
        0%{
            opacity: 0;
            transform: translateX(1200px);
        };
        100%{
            opacity: 1;
        }
    }
    @keyframes RightAnimation {
        0%{
            opacity: 0;
            transform: translateX(-1200px);
        };
        100%{
            opacity: 1;
        }
    }
    .Header__content__item:nth-child(1){
        position: relative;
        top:35%;
        left:3%;
        .text{
            position:relative;
            @include text(#D14031,23px,.03em,500);
            bottom:27%;
            left:2%;
        }
        @media screen and(max-width:966px){
            display: none;
        }
    }
    .Header__content__item:nth-child(3){
        position: relative;
        left:55%;
    }
    .MainImg{
        position:absolute;
    }
    .MainImg:nth-child(1){
        top:15%;
        left:15%;
        z-index: 2;
        @media screen and(max-width:1670px){
            top:16%;
            left:12%;
            transform: scale(.6);
        }
        @media screen and(max-width:1302px){
            left:4%;
            transform: scale(.6);
        }
        @media screen and(max-width:966px){
            left:-17%;
        }
        @media screen and(max-width:720px){
            left:-43.5%;
        }
        @media screen and(max-width:578px){
            left:-60%;
        }  
        @media screen and(max-width:458px){
            left:-80%;
        } 
    }
    .MainImg:nth-child(2){
        top:25%;
        left:20%;
        z-index: 5;
        @media screen and(max-width:1670px){
            left:30%;
            transform: scale(.6);
        }
        @media screen and(max-width:966px){
            left:5%;
        }
        @media screen and(max-width:720px){
            left:25%;
        }
        @media screen and(max-width:578px){
            left:20%;
        }  
        @media screen and(max-width:458px){
            left:11%;
        } 
        @media screen and(max-width:368px){
            left:2%;
        } 
        
    }
    .MainImg:nth-child(3){
        top:15%;
        left:40%;
        z-index: 4;
        height: 605px;
        @media screen and(max-width:1670px){
            transform: scale(.6);
            top:18%;
        }
        @media screen and(max-width:966px){
            left:27%;
            top:19%;
        }
        @media screen and(max-width:720px){
            display: none;
        }
    }
    .MainImg:nth-child(4){
        top:60%;
        left:60%;
        z-index: 6;
        @media screen and(max-width:1670px){
            transform: scale(.6);
        }
        @media screen and(max-width:720px){
            display: none;
        }
    }
</style>