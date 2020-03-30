<template>
    <div class="slider container-fluid">
        <div class="row d-flex">
            <div class="slider__content col-sm-6 col-md-6" v-show="true" >
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12 slider__content-title text-left">
                            <h5 class="font-weight-bolder text-secondary slider__title pl-1">It's Chapterone</h5>
                        </div>   
                        <div class="col-sm-12 slider__content-title text-left">
                            <h1 class="slider__text">
                                We Love Litarature
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
                    <img src="/icons/back (1).png" @click="prev" height="64" alt="">
                </div>
                <div class="slider__controls__Next">
                    <img src="/icons/next.png" @click="next" height="64" alt="">
                </div>
            </div>
            <div class="slider__progress d-flex">
                <div class="Slider__progress__items"></div>
                <div class="Slider__progress__items"></div>
                <div class="Slider__progress__items"></div>
            </div>
            <div class="slider__content" v-show="true" >
                <div class="slider__content__item">
                    <img src="https://chapterone.qodeinteractive.com/wp-content/uploads/2019/07/home-2-revolution-img-2.png" alt="">
                </div>
                <div class="slider__content__item">
                    <img src="https://chapterone.qodeinteractive.com/wp-content/uploads/2019/07/home-2-revolution-img-4.png" alt="">
                </div>
                <div class="slider__content__item">
                    <img src="https://chapterone.qodeinteractive.com/wp-content/uploads/2019/07/home-2-revolution-img-1.png" alt="">
                </div>
                 <div class="slider__content__item">
                    <img src="https://chapterone.qodeinteractive.com/wp-content/uploads/2019/07/home-2-revolution-img-3.png" alt="">
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
            
        }
    },
    methods:{
        next(){
            this.$parent.$emit('show','2')
        },
        prev(){
            this.$parent.$emit('show','3')
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
        background:linear-gradient(to bottom,#EFE6D5,#D9D0C1);
        // #D9D0C1
    }
    .slider__content:nth-child(1){
        font-size: 23px;
        margin:5% 13%;
        position: relative;
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
        z-index:50;
        left:40%;
        top:50%;
        .slider__controls__Back{
            position: absolute;
            top:-20px;
            right:590px;
            transition: all .65s ease;
            cursor: pointer;
        }
        .slider__controls__Next{
            position: absolute;
            left:930px;
            top:-20px;
            transition: all .65s ease;
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
        .Slider__progress__items:hover{
            width:80px;
            background:#000;
        }
    }
    .slider__content__item{
        position: absolute;
        background: transparent;
    }
    .slider__content__item:nth-child(1){
        animation:Anime2 1.8s ease;
        left:44%;
        top:25%;
    }
    .slider__content__item:nth-child(2){
        animation:Anime2 1.8s ease;
        right:1%;
    }
    .slider__content__item:nth-child(3){
        animation:Anime2 1.8s ease;
        left:82%;
        top:50%;
    }.slider__content__item:nth-child(4){
        animation:Anime3 3.5s ease;
        left:77%;
        top:20%;
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