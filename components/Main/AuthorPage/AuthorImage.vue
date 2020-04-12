<template>
    <div class="AuthorImg">
        <div class="container-fuild">
            <div class="row d-flex no-gutters">
                <div class="col-lg-6 m-0 p-0 img"></div>
                <div class="col-lg-6 m-0 p-0 img"></div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'AuthorImg'
}
</script>
<style lang="scss" scoped>
    .AuthorImg{
        margin:5% 0%;
    }
    .img{
        height: 450px;
    }
    .img:nth-child(1){
        background: url(https://chapterone.qodeinteractive.com/wp-content/uploads/2019/07/home-1-single-image-1.jpg);
        background-position: center center;
    }
    .img:nth-child(2){
        background: url(https://chapterone.qodeinteractive.com/wp-content/uploads/2019/07/home-1-single-image-2.jpg);
        background-position: center center;
    }
</style>