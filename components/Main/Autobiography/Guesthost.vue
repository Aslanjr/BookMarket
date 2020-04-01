<template>
    <div class="GuestHost">
        <div class="container-fuild GuestHost__item ">
            <div class="row d-flex justify-content-around GuestHost__item__content">
                <div class="col-md-6 col-sm-6">
                    <h4 class="GuestHost__head">Autobiography</h4>
                    <h2 class="GuestHost__title" >This month's guest host</h2>
                    <p class="GuestHost__text" >Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                        Rem ut,<br> similique dolore voluptate ratione molestias vitae impedit. 
                    </p>
                    <button class='button'>Read More</button>
                </div>
                <div class="col-md-6 col-sm-6">
                    <div class="Images">
                        <div class="Images__item">
                            <img src="https://chapterone.qodeinteractive.com/wp-content/uploads/2019/07/home-2-rev-2-img-7.png" alt="">
                        </div>
                        <div class="Images__item">
                            <img src="https://chapterone.qodeinteractive.com/wp-content/uploads/2019/07/home-2-rev-2-img-2.jpg" alt="">
                        </div>
                        <div class="Images__item">
                            <img src="https://chapterone.qodeinteractive.com/wp-content/uploads/2019/07/home-2-rev-2-img-3.jpg" alt="">
                        </div>
                        <div class="Images__item">
                            <img src="https://chapterone.qodeinteractive.com/wp-content/uploads/2019/07/home-2-rev-2-img-4.png" alt="">
                        </div>
                        <div class="Images__item">
                            <img src="https://chapterone.qodeinteractive.com/wp-content/uploads/2019/07/home-2-rev-2-img-5.png" alt="">
                        </div>
                        <div class="Images__item">
                            <img src="https://chapterone.qodeinteractive.com/wp-content/uploads/2019/07/home-2-rev-2-img-6.png" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>



<script>
export default {
    name:'GuestHost',
    data:()=>{
        return{

        }
    },
    methods:{
        
    },
}
</script>
<style lang="scss" scoped>
@import "~/assets/_variables.scss";

    .GuestHost{
        width: 100%;
        padding: 10% 5%;
        font-family: $font;
        .GuestHost__item{
            padding:10% 10%;
            
            width:100%;
            background:#FAF9F5;
        }
           
    }
    .GuestHost__head{
        letter-spacing: .1em;
        font-size: 19px;
        color:rgb(156, 156, 156);
    }
    .GuestHost__title{
        font-weight: 550;
        font-size: 40px;
    }
    .GuestHost__text{
        letter-spacing: .01em;
        font-size: 20px;
        color:rgb(156, 156, 156);
    }
    .button{
        width:200px;
        margin:5px 0px;
        padding: 10px 0px;
        font-size: 17px;
        letter-spacing: .1em;
        text-transform: uppercase;
        border:none;
        cursor: pointer;
        background:#fff;
        color:black;
        outline: 1px solid rgb(156, 156, 156);
    }
    .button:hover{
        background:#000;
        color:#fff;
    }
    .Images{
        width:100%;
        height:100%;
        margin:0;
        padding: 0;
        .Images__item{
            position:absolute;
        }
        .Images__item:nth-child(1){
            top:130%;
            left:-40%;
            animation: AnimeUp 1s ease;
            
            //coffe
        }   
        .Images__item:nth-child(2){
            top:-110%;
            left:1%;
            z-index: 5;
            animation: AnimeDown 1s ease;
            @media screen and(max-width:1600px) {
                transform: scale(.8);
            }
            //башня
        }
        .Images__item:nth-child(3){
            top:40%;
            left:20%;
            z-index: 10;
            animation: AnimeUp 1s ease;
            @media screen and(max-width:1600px) {
                transform: scale(.8);
            }
            //бабка
        }
        .Images__item:nth-child(4){
            top:-30%;
            left:50%;
            animation: AnimeLeft 1s ease;
            //лужа
        }
        .Images__item:nth-child(5){
            top:-30%;
            left:75%;
            animation: AnimeLeft 1s ease;
            //надпись
        }
        .Images__item:nth-child(6){
            top:-90%;
            left:-25%;
            animation: AnimeDown 1s ease;
            //точки
        }
    }
    @keyframes AnimeUp{
        0%{
            opacity:0;
            transform: translateY(50px);
        };
        100%{
            opacity:1;
        }
    }
    @keyframes AnimeDown{
        0%{
            opacity:0;
            transform: translateY(-50px);
        };
        100%{
            opacity:1;
        }
    }
    @keyframes AnimeLeft{
        0%{
            opacity:0;
            transform: translateY(-50px);
        };
        100%{
            opacity:1;
        }
    }
</style>