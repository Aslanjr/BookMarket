<template>
    <div class="Order">
        <div class="container-fluid">
            <div class="row justify-content-center d-flex flex-wrap">
                <div class="col-md-6 ">
                    <div class="ctx container">
                            <div class="Order__content__img">
                                <img src="https://chapterone.qodeinteractive.com/wp-content/uploads/2019/08/home-4-slider-2-image-1.png" alt="">
                            </div>
                            <div class="Order__content__img">
                                <img src="https://chapterone.qodeinteractive.com/wp-content/uploads/2019/08/home-4-slider-2-image-2.png" alt="">
                            </div>
                            <div class="Order__content__img">
                                <img src="https://chapterone.qodeinteractive.com/wp-content/uploads/2019/08/home-4-slider-2-image-5.png" alt="">
                            </div>
                            <div class="Order__content__img">
                                <img src="https://chapterone.qodeinteractive.com/wp-content/uploads/2019/08/home-4-slider-2-image-4.png" alt="">
                            </div>
                            <div class="Order__content__img">
                                <img src="https://chapterone.qodeinteractive.com/wp-content/uploads/2019/08/home-4-slider-2-image-3.png" alt="">
                            </div>
                    </div>
                </div>
                <div class="col-md-6 ">
                    <div class=" bg-light subscribe">
                        <p class="subscribe__name">Subscribe</p>
                        <h3 class="subscribe__title">Order your copy here</h3>
                        <p class="subscribe__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit</p>
                        <div class="mt-2">
                            <input type="text" class="form-control" placeholder="Full Name">
                        </div>
                        <div class="mt-2">
                            <input type="text" class="form-control" placeholder="Email">
                        </div>
                        <hr>
                        <div class="mt-2 mb-2">
                            <input type="text" class="form-control" placeholder="Message">
                        </div>
                        <button class="btn btn-danger btn-lg">Send</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'Order',
    data:()=>{
        return{

        }
    }
}
</script>
<style lang="scss" scoped>
    .Order{
        padding:10% 20%;
        font-family:'Cormorant Garamond', serif;
        @media screen and(max-width:1700px) {
            padding:10% 10%;
        }
    }
    .ctx{
        width: 100%;
        position:relative;
        padding: 1% 1%;
        @media screen and(max-width:767px){
            display:none;
        }
    }
    .subscribe{
        padding:10% 10%;
        .subscribe__name{
            color:rgb(177,177,177);
            font-size: 20px;
            letter-spacing: .13em;
        }
        .subscribe__title{
            font-size: 35px;
        }
        .subscribe__text{
            font-size: 25px;
        }
    }
    
    .Order__content__img{
        position: absolute;
    }
    .Order__content__img:nth-child(1){
        top:30%;
        left:20%;
        z-index: 5;
        @media screen and(max-width:1700px) {
            transform:scale(.8)
        }
        @media screen and(max-width:1034px) {
            left:0%;
            transform:scale(.65)
        }
        @media screen and(max-width:820px) {
            left:-20%;
        }
    //Планшет   
    }
    .Order__content__img:nth-child(2){
        top:20%;
        right:60%;
        z-index: 4;
        @media screen and(max-width:1700px) {
            transform:scale(.8)
        }
        @media screen and(max-width:1034px) {
            transform:scale(.65)
        }
    //Книга
    }
    .Order__content__img:nth-child(3){
        top:0;
        right:70%;
        z-index: 3;
        @media screen and(max-width:1700px) {
            transform:scale(.8)
        }
        @media screen and(max-width:1034px) {
            transform:scale(.65)
        }
        
    //отрещки
    }
    .Order__content__img:nth-child(4){
        top:15%;
        left:10%;
        z-index: 2;
        @media screen and(max-width:1700px) {
            transform:scale(.8)
        }
        @media screen and(max-width:1034px) {
            left:-15%;
            transform:scale(.65)
        }
        @media screen and(max-width:820px) {
            left:-45%;
            transform:scale(.65)
        }
    //мазня
    }
    .Order__content__img:nth-child(5){
        top:0;
        right:30%;
        z-index: 1;
        @media screen and(max-width:1700px) {
            transform:scale(.8)
        }
        @media screen and(max-width:1034px) {
            transform:scale(.65)
        }
    //лужа
    }
</style>