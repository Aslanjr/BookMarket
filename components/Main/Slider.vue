<template>
    <div class="Slider">
       <div class="Slider__items">
            <first-slide v-show="firstSlide" />
            <second-slide v-show="secondSlide" />
            <third-slide v-show="thirdSlide" />
            <div class="slider__progress d-flex">
                <div :class="[  firstSlide  ? active : disables]" @click="showSlides(1)"></div>
                <div :class="[  secondSlide ? active : disables]" @click="showSlides(2)"></div>
                <div :class="[  thirdSlide  ? active : disables]" @click="showSlides(3)"></div>
            </div>  
       </div>
    </div>
</template>
<script>

import firstSlide from './Slider/FirstSlide'
import secondSlide from './Slider/SecondSlide'
import thirdSlide from './Slider/ThirdSlide'

export default {
    name:'Slider',
    data:()=>{
        return{
            firstSlide:true,
            secondSlide:false,
            thirdSlide:false,
            active:'active',
            disables:'Slider__progress__items'
        }
    },
    mounted() {
        this.$on('show',function(value){
            if(value == '1'){
                this.firstSlide = true;
                this.secondSlide = false;
                this.thirdSlide = false;

            }else if(value == '2'){
                this.firstSlide = false;
                this.secondSlide = true;
                this.thirdSlide = false;
            }else if(value == '3'){
                this.firstSlide = false;
                this.secondSlide = false;
                this.thirdSlide = true;
            }else{
                console.log("Error");
            }
        })
    },
    methods: {
        showSlides(id){
            switch(id){
                case 1 :
                    this.firstSlide = true;
                    this.secondSlide = false;
                    this.thirdSlide = false;
                    break;
                case 2:
                    this.firstSlide = false;
                    this.secondSlide = true;
                    this.thirdSlide = false;
                    break;
                case 3:
                    this.firstSlide = false;
                    this.secondSlide = false;
                    this.thirdSlide = true;
                    break;
                default:
                    console.log('Error');
                }
        }
    },
    components:{
        firstSlide,
        secondSlide,
        thirdSlide
    }
}
</script>
<style lang="scss" scoped>
    .slider__progress{
        z-index: 101;
        position:absolute;
        left:45%;
        top:750px;
        @media screen and (max-width:1616px){
            top:670px;
        }
        @media screen and (max-width:576px){
            top:705px;
            left:36.3%;
        }
        @media screen and (max-width:400px){
            left:30%;
        }
        
    }
    .Slider__progress__items{
        margin:0% 1%;
        height: 10px;
        width:40px;
        background:rgb(178,178,178);
        border-radius: 13px;
        transition:all 1s ease;
        cursor: pointer;
    }
    .Slider__progress__items:hover{
        width:80px;
        background:#000;
    }
    .active{
        cursor: pointer;
        margin:0% 1%;
        height: 10px;
        width:80px;
        background:#000;
        border-radius: 13px;
        transition:all .65s ease;
    }
</style>