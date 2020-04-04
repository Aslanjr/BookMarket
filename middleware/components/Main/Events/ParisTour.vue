<template>
    <div class="ParisTour">
        <div class="container-fluid">
            <div class="row align-items-end">   
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
       padding:20% 0% 5% 0%;
       font-family: $font;
       .ParisTour__Content{
            position: absolute;
            z-index: 2;
            margin: -10% 0%;
            .ParisTour__Img{
                margin:0% 1%;
                box-shadow: 0px 0px 50px 13px rgba(13,13,13,.3);
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
       }
   }
   .footer{
       padding:14% 0%;
       background: #2E4C6E;
    }
</style>