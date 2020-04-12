<template>
    <div class="AuthorText">
        <div class="container-fuild">
            <div class="row justify-content-center">
                <div class="col-lg-4 text-center">
                    <img src="https://chapterone.qodeinteractive.com/wp-content/uploads/2019/07/main-home-single-image-3.png" alt="">
                </div>
                <div class="col-lg-8 text-left  ">
                    <p class="AuthorText__text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in volup tate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proi dent, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
                        Lorem ipsum dolor sit amet, consectetur adipisicing.
                    </p>
                    <p class="AuthorText__text">
                        ’’Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor’’  
                        labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute.
                    </p>
                    <p class="AuthorText__text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in volup tate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proi dent, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
                        Lorem ipsum dolor sit amet, consectetur adipisicing.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'AuthorText',
    
}
</script>
<style lang="scss" scoped>
@import "../../../assets/mixin.scss";    
    .AuthorText{
        padding: 0% 10%;
        margin:5% 0%;
    }
    .AuthorText__text{
        @include text(rgb(116, 116, 116),19px,.05em,500);
        @media screen and(max-width:991px){
            margin:40px 0px;
        }
    }
    .AuthorText__text:nth-child(2){
        transform: translateX(-240px);
        padding:0% 15%;
        @include text(rgb(255, 30, 20),19px,.05em,500);
        @media screen and(max-width:991px){
            transform: translateX(0px);
        }
    }
</style>