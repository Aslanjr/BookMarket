<template>
    <div class="ParisTour">
        <div class="container-fluid">
            <div class="row">   
                <div class="col-md-12 col-sm-12 d-flex ParisTour__Content justify-content-center ">
                    <div class="ParisTour__Img">
                        <div class="ImgContent">
                            <div class="container">
                                <div class="row justify-contnet-center align-items-center ">
                                    <div class="col-md-12 col-sm-12">
                                        <p>BEST SELLERS</p>
                                        <h1>Paris stories</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <img src="https://chapterone.qodeinteractive.com/wp-content/uploads/2019/07/home-1-banner-image-1.jpg" alt="">
                        <!-- https://chapterone.qodeinteractive.com/wp-content/uploads/2019/07/home-1-banner-image-1.jpg -->
                    </div>
                    <div class="ParisTour__Img">
                        <div class="ImgContent">
                            <div class="container">
                                <div class="row justify-contnet-center align-items-center ">
                                    <div class="col-md-12 col-sm-12">
                                        <p>BEST SELLERS</p>
                                        <h1>Tour Eiffel</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <img src="https://chapterone.qodeinteractive.com/wp-content/uploads/2019/07/home-1-banner-image-2.jpg" alt="">
                        <!-- https://chapterone.qodeinteractive.com/wp-content/uploads/2019/07/home-1-banner-image-2.jpg -->
                    </div>
                </div>
                <div class="col-md-12 col-sm-12 footer"></div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'ParisTour',
    data:()=>{
        return{

        }
    }
}
</script>
<style lang="scss" scoped>

@import "~/assets/_variables.scss";

   .ParisTour{
       font-family: $font;
       .ParisTour__Content{
            position: relative;
            z-index: 2;
            
            top:200px;
            .ParisTour__Img{
                margin:0% 1%;
                box-shadow: 0px 0px 50px 13px rgba(13,13,13,.3);
                @media screen and(max-width:1340px) {
                    margin:0% -4%;
                    transform:scale(.80);
                }
                @media screen and(max-width:1094px) {
                    margin:0% -10%;
                    transform:scale(.65);
                }
                @media screen and(max-width:908px) {
                    margin:0% -15%;
                    transform:scale(.55);
                }
                @media screen and(max-width:774px) {
                    margin:0% -20%;
                    transform:scale(.50);
                }
                @media screen and(max-width:700px) {
                    transform:scale(.48);
                    margin:0% -23%;
                }

            }
            .ParisTour__Img:hover .ImgContent{
                opacity:.78;
            }
            .ImgContent{
                position: absolute;
                height: 660px; 
                cursor:pointer;
                width:638px;
                opacity: 0;
                color:#fff;
                align-items:center;
                display: flex;
                background: #2E4C6E;
                text-align: center;
                transition: all .35s ease;
                p{
                    letter-spacing: .2em;
                }
                h1{
                    font-size: 50px;
                }
            }
            @media screen and(max-width:1094px) {
                top:60px;
            }
            @media screen and(max-width:908px) {
                top:40px;
            }
            .ParisTour__Img:nth-child(1){
                @media screen and(max-width:700px) {
                    position: relative;
                    top:-15%;
                    right:-25%;
                }
                @media screen and(max-width:510px) {
                    position: relative;
                    top:-15%;
                    right:-43%;
                }
                @media screen and(max-width:428px) {
                    position: relative;
                    top:-15%;
                    right:-53%;
                }
                @media screen and(max-width:400px) {
                    position: relative;
                    top:-18%;
                    right:-66%;
                }
                @media screen and(max-width:375px) {
                    position: relative;
                    top:-20%;
                    right:-72%;
                }
            }
            .ParisTour__Img:nth-child(2){
                @media screen and(max-width:700px) {
                    position: relative;
                    top:38%;
                    right:25%;
                }
                @media screen and(max-width:510px) {
                    position: relative;
                    top:40%;
                    right:45%;
                }
                @media screen and(max-width:428px) {
                    position: relative;
                    top:37%;
                    right:55%;
                }
                @media screen and(max-width:400px) {
                    position: relative;
                    top:33%;
                    right:65%;
                }
                 @media screen and(max-width:400px) {
                    position: relative;
                    top:33%;
                    right:65%;
                }
            }
            
       }
   }
   .footer{
        padding:14% 0%;
        background: #2E4C6E;
        position: relative;
        @media screen and(max-width:1094px) {
            bottom:200px;
        }
        @media screen and(max-width:908px) {
            bottom:250px;
        }
    }
</style>