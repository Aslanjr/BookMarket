<template>
    <div class="AboutMe">
        <div class="container-fluid">
            <div class="row justify-content-center text-white">
                <div class="col-sm-6 text-center">
                    <h4>INFO</h4>
                    <h2>About Me</h2>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'AboutMe',
    data:()=>{
        return{

        }
    }
}
</script>
<style lang="scss" scoped>
@import "~/assets/_variables.scss";

    .AboutMe{
        padding:8% 0%;
        font-family: $font;
        width: 100%;
        background:url(https://chapterone.qodeinteractive.com/wp-content/uploads/2019/08/about-me-title-area-img-1.jpg) no-repeat;
    }
</style>