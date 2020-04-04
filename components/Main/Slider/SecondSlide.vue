<template>
    <div class=" container-fluid">
        <div class="row d-flex">
            <div class="slider">
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
                <div class="container-fluid slider__controls">
                    <div class="row  d-flex justify-content-between">
                        <div class="slider__controls__Back">
                            <img src="https://image.flaticon.com/icons/svg/482/482630.svg" @click="prev" height="64" alt="">
                        </div>
                        <div class="slider__controls__Next">
                            <img src="https://image.flaticon.com/icons/svg/482/482630.svg" @click="next" height="64" alt="">
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
        height:100%;
        width:100%;
        padding:15% 0%;
        overflow: hidden;
        max-height: 700px;
        min-height: 650px;
        z-index: 20;
        margin:0% 5%;
        position: relative;
        background:#282828;
        // #D9D0C1
    }
    .slider__content:nth-child(1){
        position: absolute;
        top:25%;
        left:35%;
        z-index: 120;
        animation:Anime3 2s ease;
    }
    .slider__content:nth-child(2){
        position: absolute;
        top:15%;
        left:8%;
        animation:Anime3 2s ease;
    }
    .slider__content:nth-child(3){
        font-size: 23px;
        position: absolute;
        top:30%;
        left:50%;
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
            transform:rotate(180deg);
            cursor: pointer;
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