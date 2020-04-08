<template>
    <div class="container-fuild Main">
        <div class="row justify-content-center d-flex flex-column">
            <div class="Author">
                <div class="col-sm-12 text-center title ">
                    <span>SHOP BESTSELLERS</span>
                    <h1>
                        Promo products
                    </h1>
                    <p>
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco <br>
                        laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>
            </div>
            <div class="ProductsSlider container">
                <Slider class="slide" :style="translate" />
            </div>
        </div>
    </div>
</template>
<script>

import Slider from '../Slider/ProductsSlider'


export default {
    name:'OurService',
    data:()=>{
        return{
            Slides:0,
        }
    },
    mounted(){
        let maxCount = -1800;
        setInterval(()=>{
            if(this.Slides > maxCount ){
                this.Slides -= 310;
            }else{
                this.Slides = 0;
            }
        },2300);
    },
    computed: {
        translate(){
            return `transform:translate(${this.Slides}px)`;
        }
    },
    components:{
        Slider
    }
}
</script>
<style lang="scss" scoped>
    .Main{
        background:#FBFAF6;
    }
    .Button{
        padding: 10px 50px;
        font-size: 20px;
        background: transparent;   
        transition: all .7s ease;
        border:none;
        color:#fff;
        outline: 1px solid #fff;
    }
    .Button:hover{
        background:#fff;
        color:#000;
    }
    .ProductsSlider{
        width:70%;
        overflow:hidden;
        .slide{
            transition:all 1s ease;
        }
    }
    .Author{
        padding:4% 0%;
        overflow: hidden;
        width:100%;
        color:#000;
        font-family: 'Cormorant Garamond', serif;
        .title{
            color:#000;
            span{
                color:rgb(175, 175, 175);
                font-size: 15px;
                letter-spacing: .4em ;
            }
            h1{
                font-size: 45px;
                letter-spacing: .1em;
            }
            p{  
                margin:2% 0%;
                font-family: "Cormorant Garamond",sans-serif;
                letter-spacing: .01em;
                font-size: 25px;
                line-height: 40px;
            }
        }
    }
    
</style>

