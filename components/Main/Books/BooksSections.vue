<template>
    <div class="BookSection">
            <div class="BookSection__item ">
                <img src="https://chapterone.qodeinteractive.com/wp-content/uploads/2019/07/home-5-single-image-1.png" height="124" width="119" alt="">
                <p class="BookSection__item__head">Bestsellers</p>
                <p class="BookSection__item__text">Except sint occaecat cupidatat non proident, sunt culpa qui officia deserunt.</p>
            </div>
            <div class="BookSection__item">
                <img src="https://chapterone.qodeinteractive.com/wp-content/uploads/2019/07/home-5-single-image-2.png" height="124" width="119" alt="">
                <p class="BookSection__item__head">Readers</p>
                <p class="BookSection__item__text">Except sint occaecat cupidatat non proident, sunt culpa qui officia deserunt.</p>
            </div>
            <div class="BookSection__item">
                <img src="https://chapterone.qodeinteractive.com/wp-content/uploads/2019/07/home-5-single-image-3.png" height="124" width="119" alt="">
                <p class="BookSection__item__head">Biographical</p>
                <p class="BookSection__item__text">Except sint occaecat cupidatat non proident, sunt culpa qui officia deserunt.</p>
            </div>
            <div class="BookSection__item">
                <img src="https://chapterone.qodeinteractive.com/wp-content/uploads/2019/07/home-5-single-image-4.png" height="124" width="119" alt="">
                <p class="BookSection__item__head">Science</p>
                <p class="BookSection__item__text">Except sint occaecat cupidatat non proident, sunt culpa qui officia deserunt.</p>
            </div>
    </div>
</template>
<script>
export default {
    name:'BookSection',
    data:()=>{
        return{

        }
    }
}
</script>
<style lang="scss" scoped>
    .BookSection{
        padding:5% 5%;
        display:flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        .BookSection__item{
            font-family: 'Cormorant Garamond', serif;
            padding: 1% 4%;
            flex-basis: 20%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            text-align: center;
            .BookSection__item__head{
                margin: 15px 0px;
                font-weight: 600;
                font-size: 23px;
            }
            .BookSection__item__text{
                font-weight: 500;
            }
            img{
                position: relative;
                left:17%;
                @media screen and(max-width:600px){
                    left:0%;
                }
            }
        }
    }
</style>