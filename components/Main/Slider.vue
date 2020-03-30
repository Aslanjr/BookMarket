<template>
    <div class="Slider">
       <div class="Slider__items">
            <first-slide v-show="firstSlide" />
            <second-slide v-show="secondSlide" />
            <third-slide v-show="thirdSlide" />
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
            thirdSlide:false
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
        
    },
    components:{
        firstSlide,
        secondSlide,
        thirdSlide
    }
}
</script>
<style lang="scss" scoped>
    
</style>