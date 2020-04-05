<template>
    <div class="OurPremises">
        <div class="OurPremises__img"><img src="https://chapterone.qodeinteractive.com/wp-content/uploads/2019/07/bookstore-space-img-1.jpg"  height="300" alt=""></div>
        <div class="OurPremises__img"><img src="https://chapterone.qodeinteractive.com/wp-content/uploads/2019/07/bookstore-space-img-3.jpg"  height="300" alt=""></div>
        <div class="OurPremises__img"><img src="https://chapterone.qodeinteractive.com/wp-content/uploads/2019/07/bookstore-space-img-4.jpg"  height="300" alt=""></div>
        <div class="OurPremises__img"><img src="https://chapterone.qodeinteractive.com/wp-content/uploads/2019/07/bookstore-space-img-5.jpg"  height="300" alt=""></div>
        <div class="OurPremises__img"><img src="https://chapterone.qodeinteractive.com/wp-content/uploads/2019/07/bookstore-space-img-6.jpg"  height="300" alt=""></div>
        <div class="OurPremises__img"><img src="https://chapterone.qodeinteractive.com/wp-content/uploads/2019/07/bookstore-space-img-2.jpg"  height="300" alt=""></div>
    </div>
</template>
<script>
export default {
    name:'OurPremises',
    data:()=>{
        return{

        }
    }
}
</script>
<style lang="scss" scoped>
@import "../../../assets/_variables.scss";    
    .OurPremises{
        width: 70%;
        padding: 7% 0%;
        font-family: $font;
        margin:0% 15%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        .OurPremises__img{
            flex-basis: 30%;
            margin:1% 0%;
            transition: all .68s ease;
            overflow: hidden;
        }
        .OurPremises__img:hover{
            transform: scale(1.02);
        }
    }
</style>