<template>
    <div class="slider container-fluid">
        <div class="row d-flex">
            <div class="slider__content">
                <img src="https://chapterone.qodeinteractive.com/wp-content/uploads/2019/07/home-2-revolution-img-3.png" alt="">
            </div>
            <div class="slider__content">
                <img src="https://chapterone.qodeinteractive.com/wp-content/uploads/2019/08/home-2-slide-3-image-1b.jpg" alt="">
            </div>
            <div class="slider__content col-sm-6 col-md-6" v-show="true" >
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12 slider__content-title text-left">
                            <h6 class="font-weight-bolder text-secondary slider__title pl-1">{{title | upper}}</h6>
                        </div>   
                        <div class="col-sm-12 slider__content-title text-left">
                            <h1 class="slider__text">
                                The all-time classics
                            </h1>
                        </div>
                        <div class="col-sm-12  slider__content-title text-left">
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit <br>  saepe fugiat aliquid placeat   consequatur,
                                 minima
                            </p>
                        </div>
                        <div class="col-sm-12  slider__content-title text-start">
                            <button class="btn btn-danger btn-lg button">Read More</button>
                        </div>
                    </div>
                </div>   
            </div> 
            <div class="slider__controls">
                <div class="slider__controls__Back">
                    <img src="/Icons/white-arrow.png" @click="next" height="64" alt="">
                </div>
                <div class="slider__controls__Next">
                    <img src="/icons/white-arrow.png" @click="prev" height="64" alt="">
                </div>
            </div>
            <div class="slider__progress d-flex">
                <div class="Slider__progress__items"></div>
                <div class="Slider__progress__items"></div>
                <div class="Slider__progress__items"></div>
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
    methods:{
        next(){
            this.$parent.$emit('show','3')
        },
        prev(){
            this.$parent.$emit('show','1')
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
        max-width:1765px;
        height:100%;
        padding:4% 0%;
        max-height: 650px;
        overflow: hidden;
        z-index: 20;
        position: absolute;
        left: 4%;
        background:#282828;
        // #D9D0C1
    }
    .slider__content:nth-child(1){
        margin:5% 12%;
        position: absolute;
        right:800px;
        z-index: 120;
        animation:Anime3 2s ease;
    }
    .slider__content:nth-child(2){
        margin:0% 13%;
        position: absolute;
        right:800px;
        animation:Anime3 2s ease;
    }
    .slider__content:nth-child(3){
        font-size: 23px;
        margin:5% 13%;
        position: absolute;
        left:33%;
        color:#fff;
        z-index:100;
        .slider__text{
            font-size: 60px;
        }
        .slider__title{
            opacity:.6;
            letter-spacing: .35em;
        }
    }
    .slider__controls{
        position: absolute;
        z-index:100;
        left:10%;
        top:50%;
        .slider__controls__Back{
            position: absolute;
            animation:Anime1 1s ease ;
            left:1450px;
            top:-20px;
            cursor: pointer;
        }
        .slider__controls__Next{
            position: absolute;
            right:50px;
            transform: rotate(180deg);
            top:-20px;
            cursor: pointer;
        }
        
    }
    .slider__progress{
        z-index: 101;
        position:absolute;
        left:43%;
        top:90%;
        .Slider__progress__items{
            margin:0% 1%;
            height: 10px;
            width:40px;
            background:rgb(85,85,85);
            border-radius: 13px;
            transition:all .65s ease;
        }
        .Slider__progress__items:nth-child(2){
            margin:0% 1%;
            height: 10px;
            width:80px;
            background:#FFFFFF;
            border-radius: 13px;
            transition:all .65s ease;
        }
    }
    .slider__content-title:nth-child(1){
        animation:Anime1 .6s ease;
    }
    .slider__content-title:nth-child(2){
        animation:Anime1 1s ease;
    }
    .slider__content-title:nth-child(3){
        animation:Anime1 1.4s ease;
    }
    .slider__content-title:nth-child(4){
        animation:Anime1 1.8s ease;
        button{
            
            cursor:pointer !important;
        }
    }
    @keyframes Anime1{
        0%{
            opacity: 0;
            transform: translateX(100px);
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