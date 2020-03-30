<template>
    <div class="slider container-fluid">
        <div class="row d-flex">
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
            <div class="slider__controls">
                <div class="slider__controls__Back">
                    <img src="/Icons/next.png" @click="next" height="64" alt="">
                </div>
                <div class="slider__controls__Next">
                    <img src="/icons/back (1).png" @click="prev" height="64" alt="">
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
        max-width:1765px;
        height:100%;
        padding:4% 0%;
        max-height: 650px;
        overflow: hidden;
        z-index: 20;
        position: absolute;
        left: 4%;
        background:url('https://chapterone.qodeinteractive.com/wp-content/uploads/2019/08/home-2-slide-2-image-1a.jpg')no-repeat;
        background-size: cover;
        // #D9D0C1
    }
    .slider__content:nth-child(1){
        margin:1% 12%;
        position: absolute;
        top:5%;
        left:300px;
        z-index: 120;
        animation:Anime3 2s ease;
    }
    
    .slider__content:nth-child(2){
        font-size: 23px;
        margin:5% 0%;
        position: relative;
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
    }
    .slider__controls{
        position: absolute;
        z-index:130;
        left:10%;
        top:50%;
        .slider__controls__Back{
            position: absolute;
            animation:Anime1 1s ease ;
            left:1500px;
            top:-20px;
            cursor: pointer;
        }
        .slider__controls__Next{
            position: absolute;
            right:100px;
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
            background:rgb(178,178,178);
            border-radius: 13px;
            transition:all .65s ease;
        }
        .Slider__progress__items:nth-child(3){
            margin:0% 1%;
            height: 10px;
            width:80px;
            background:#000;
            border-radius: 13px;
            transition:all .65s ease;
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