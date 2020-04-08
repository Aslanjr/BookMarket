<template>
    <div class="container-fuild Main">
        <div class="row justify-content-center d-flex flex-column">
            <div class="Author d-flex row justify-content-center ">
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
                <div class="col-sm-6 Timer text-center row justify-content-around">
                    <div class="col">
                        <p>32</p>
                        <span class="text-muted">Months</span>
                    </div>
                    <div class="col">
                        <p>04</p>
                        <span class="text-muted">Days</span>
                    </div>
                    <div class="col">
                        <p>16</p>
                        <span class="text-muted">Hours</span>
                    </div>
                    <div class="col">
                        <p>21</p>
                        <span class="text-muted">Minutes</span>
                    </div>
                    <div class="col">
                        <p>{{Seconds}}</p>
                        <span class="text-muted">Seconds</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>



export default {
    name:'ComingSoon',
    data:()=>{
        return{
            Seconds:60
        }
    },
    mounted() {
        setInterval(()=>{
            this.Seconds -=1;
            if(this.Seconds < 0){
                this.Seconds = 60;
            }
        },1000)
    },
}
</script>
<style lang="scss" scoped>
    .Main{
        padding:13% 0%;
        background:url(https://chapterone.qodeinteractive.com/wp-content/uploads/2019/08/coming-soon-background-image.jpg)no-repeat;
        background-position: center center;
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
    .Timer{
        font-size: 30px;
    }
    .Button:hover{
        background:#fff;
        color:#000;
    }
    .Author{
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

