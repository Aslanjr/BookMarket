<template>
    <div class="GuestHost">
        <div class="container-fuild GuestHost__item ">
            <div class="row d-flex justify-content-around GuestHost__item__content">
                <div class="col-md-3 col-sm-3">
                    <div class="Images">
                        <div class="Images__item">
                            <img src="https://chapterone.qodeinteractive.com/wp-content/uploads/2019/07/home-2-rev-3-image-3.png" alt="">
                        </div>
                        <div class="Images__item">
                            <img src="https://chapterone.qodeinteractive.com/wp-content/uploads/2019/07/home-2-rev-3-image-4.png" alt="">
                        </div>
                        <div class="Images__item">
                            <img src="https://chapterone.qodeinteractive.com/wp-content/uploads/2019/07/home-2-rev-3-img-6.jpg" alt="">
                        </div>
                        <div class="Images__item">
                            <img src="https://chapterone.qodeinteractive.com/wp-content/uploads/2019/07/home-2-rev-3-img-5.jpg" alt="">
                        </div>
                        <div class="Images__item">
                            <img src="https://chapterone.qodeinteractive.com/wp-content/uploads/2019/07/home-2-rev-3-image-2.png" alt="">
                        </div>
                        <div class="Images__item">
                            <img src="https://chapterone.qodeinteractive.com/wp-content/uploads/2019/07/home-2-rev-3-image-1.png" alt="">
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-sm-6 text-left Title__content">
                    <h4 class="GuestHost__head">Autobiography</h4>
                    <h2 class="GuestHost__title" >This month's guest host</h2>
                    <p class="GuestHost__text" >Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                        Rem ut,<br> similique dolore voluptate ratione molestias vitae impedit. 
                    </p>
                    <button class='button'>Read More</button>
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
        margin:10% 0%;
        padding: 10% 5%;
        font-family: $font;
        .GuestHost__item{
            padding:5% 10%;
            width:100%;
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
        @media screen and(max-width:1072px) {
            color:#000;
        }
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
        background:transparent;
        color:black;
        outline: 1px solid rgb(156, 156, 156);
    }
    .button:hover{
        background:#000;
        color:#fff;
    }
    .Title__content{
        margin:0% 0px 0px 70px;
    }
    .Images{
        width:100%;
        height:100%;
        margin:0;
        padding: 0;
        @media screen and(max-width:576px) {
            display:none;
        }
        .Images__item{
            position:absolute;
            
        }
        .Images__item:nth-child(1){
            top:-10%;
            left:55%;
            animation: AnimeUp 1s ease;
            //Лужа
            @media screen and(max-width:1700px){
                top:-15%;
                left:20%;
                transform: scale(.75);
            }
            @media screen and(max-width:1276px){
                top:-5%;
                left:15%;
                transform: scale(.65);
            }
            @media screen and(max-width:1150px){
                top:10%;
                left:0%;
                transform: scale(.55);
            }
            @media screen and(max-width:670px){
                left:-85%;
            }
        }   
        .Images__item:nth-child(2){
            top:-90%;
            left:10%;
            z-index: 5;
            animation: AnimeDown 1s ease;
            @media screen and(max-width:1700px){
                left:-15%;
                transform: scale(.75);
            }
            @media screen and(max-width:1276px){
                top:-70%;
                transform: scale(.65);
            }
            @media screen and(max-width:1150px){
                top:-20%;
                left:-10%;
                transform: scale(.55);
            }
            @media screen and(max-width:670px){
                left:-85%;
            }
            //отрезки
        }
        .Images__item:nth-child(3){
            top:-100%;
            left:30%;
            z-index: 10;
            animation: AnimeUp 1s ease;
            @media screen and(max-width:1700px){
                left:0%;
                transform: scale(.75);
            }
            @media screen and(max-width:1276px){
                top:-70%;
                left:-10%;
                transform: scale(.65);
            }
            @media screen and(max-width:1150px){
               display: none;
            }
            //Здание
        }
        .Images__item:nth-child(4){
            top:50%;
            left:5%;
            z-index: 10;
            animation: AnimeLeft 1s ease;
            @media screen and(max-width:1700px){
                top:40%;
                left:-10%;
                transform: scale(.75);
            }
            @media screen and(max-width:1276px){
                top:25%;
                left:-10%;
                transform: scale(.65);
            }
            @media screen and(max-width:1150px){
                transform: scale(.55);
            }
            @media screen and(max-width:670px){
                left:-85%;
            }
            //Девушка
        }
        .Images__item:nth-child(5){
            top:150%;
            left:65%;
            animation: AnimeLeft 1s ease;
            @media screen and(max-width:1700px){
                top:120%;
                left:40%;
                transform: scale(.75);
            }
            @media screen and(max-width:1150px){
                top:100%;
                left:20%;
            }
            //надпись
        }
        .Images__item:nth-child(6){
            top:90%;
            left:160%;
            z-index: 11;
            animation: AnimeDown 1s ease;
            @media screen and(max-width:1700px){
                top:110%;
                left:160%;
                transform: scale(.75);
            }
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