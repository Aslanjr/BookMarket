<template>
    <div class=" container-fluid">
        <div class="row d-flex">
            <div class="slider">
                <div class="slider__content">
                    <img src="https://chapterone.qodeinteractive.com/wp-content/uploads/2019/07/home-2-revolution-img-3.png" alt="">
                </div>
                <div class="slider__content col-sm-12 col-md-12 " v-show="true" >
                    <div class="container">
                        <div class="row ">
                            <div class="col-sm-12 slider__content-title text-center">
                                <h5 class="font-weight-bolder text-secondary slider__title pl-1">{{title | upper}}</h5>
                            </div>   
                            <div class="col-sm-12 slider__content-title text-center">
                                <h1 class="slider__text">
                                    Your world of words
                                </h1>
                            </div>
                            <div class="col-sm-12  slider__content-title text-center">
                                <p>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit <br>  saepe fugiat aliquid placeat   consequatur,
                                    minima
                                </p>
                            </div>
                            <div class="col-sm-12  slider__content-title text-center">
                                <button class="btn btn-danger btn-lg button">Read More</button>
                            </div>
                        </div>
                    </div>   
                </div> 
                <div class="slider__controls container-fluid">
                    <div class="row d-flex justify-content-between">
                        <div class="slider__controls__Back">
                            <img src="https://image.flaticon.com/icons/svg/860/860790.svg" @click="prev" height="64" alt="">
                        </div>
                        <div class="slider__controls__Next">
                            <img src="https://image.flaticon.com/icons/svg/318/318429.svg" @click="next" height="64" alt="">
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'Slider',
    data:()=>{
        return{
            title:'It\'s Chapterone'
        }
    },
    methods: {
        next(){
            this.$parent.$emit('show','1')
        },
        prev(){
            this.$parent.$emit('show','2')
        }
    },
    filters:{
        upper(value){
            return value.toUpperCase();
        }
    }
}
</script>
<style lang="scss" scoped>
    .slider{
        font-family: 'Cormorant Garamond', serif;
        height:100%;
        width:100%;
        padding:15% 0%;
        overflow: hidden;
        max-height: 700px;
        min-height: 650px;
        z-index: 20;
        margin:0% 5%;
        position: relative;
        background:url('https://chapterone.qodeinteractive.com/wp-content/uploads/2019/08/home-2-slide-2-image-1a.jpg')no-repeat;
        background-size: cover;
        @media screen and(max-height:1036px){
            background-position-x: 50%;
        }
        // #D9D0C1
    }
    .slider__content:nth-child(1){
        position: absolute;
        top:5%;
        left:30%;
        z-index: 120;
        animation:Anime3 2s ease;
        @media screen and(max-width:368px) {
            display:none
        }
    }
    
    .slider__content:nth-child(2){
        font-size: 23px;
        position: absolute;
        top:30%;
        color:#000;
        z-index:100;
        .slider__text{
            font-size: 60px;
        }
        .slider__title{
            opacity:.6;
            text-align: center;
            letter-spacing: .35em;
        }
        @media screen and(max-width:368px) {
           top:15%;
        }
    }
    .slider__controls{
        margin:0;
        position: absolute;
        top:50%;
        z-index:120;
        .slider__controls__Back{
            transition: all .65s ease;
            cursor: pointer;
        }
        .slider__controls__Next{
            transition: all .65s ease;
            cursor: pointer;
        }
        @media screen and(max-width:738px) {
            display:none
        }
    }
    .slider__content-title:nth-child(1){
        animation:Anime1 .8s ease;
    }
    .slider__content-title:nth-child(2){
        animation:Anime1 1.2s ease;
    }
    .slider__content-title:nth-child(3){
        animation:Anime1 1.6s ease;
    }
    .slider__content-title:nth-child(4){
        animation:Anime1 2s ease;
        button{
            
            cursor:pointer !important;
        }
    }
    @keyframes Anime1{
        0%{
            opacity: 0;
            transform: translateY(100px);
        };
        100%{
            opacity: 1;
        }
    }
    @keyframes Anime2{
        0%{
            opacity: 0;
            transform: translateY(100px);
        };
        100%{
            opacity: 1;
        }
    }
    @keyframes Anime3{
        0%{
            opacity: 0;
        };
        100%{
            opacity: 1;
        }
    }
</style>