<template>
    <div class="container-fluid">
       <div class="row d-flex">
            <div class="slider">
                 <div class="container-fluid slider__controls">
                    <div class="row  d-flex justify-content-between">
                        <div class="slider__controls__Back">
                            <img src="/icons/back (1).png" @click="prev" height="64" alt="">
                        </div>
                        <div class="slider__controls__Next">
                            <img src="/icons/next.png" @click="next" height="64" alt="">
                        </div>
                    </div>
                </div>
                <div class="slider__content col-sm-12 col-md-12" v-show="true" >
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
                <div class="slider__content d-flex" v-show="true" >
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
    </div>
</template>
<script>
export default {
    name:'Slider',
    data:()=>{
        return{
            left: -5,
        }
    },
    methods:{
        next(){
            this.$parent.$emit('show','2')
        },
        prev(){
            this.$parent.$emit('show','3')
        }
    },
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
        background:linear-gradient(to bottom,#EFE6D5,#D9D0C1);
        // #D9D0C1
    }
    .slider__content:nth-child(2){
        font-size: 23px;
        position: absolute;
        top:30%;
        left:1%;
        z-index:100;
        .slider__text{
            font-size: 60px;
        }
        .slider__title{
            opacity:.6;
            letter-spacing: .35em;
        }
    }
    .slider__content:nth-child(2){
        display: flex;
        
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
    }
    
    
    .slider__content__item:nth-child(1){
        animation:Anime4 1.8s ease;
        top:20%;
        left:50%;
        position: absolute;
    }
    .slider__content__item:nth-child(2){
        animation:Anime2 1.8s ease;
        position: absolute;
        top:10%;
        transition:all 1s ease;
        right:-5%;
    }
    .slider__content__item:nth-child(3){
        animation:Anime1 1.8s ease;
        top:45%;
        left:87%;
        position: absolute;
        
    }.slider__content__item:nth-child(4){
        animation:Anime3 3.5s ease;
        top:20%;
        left:81%;
        position: absolute;
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
    @keyframes Anime4{
        0%{
            opacity: 0;
            transform: translateX(-100px);
        };
        100%{
            opacity: 1;
        }
    }
</style>