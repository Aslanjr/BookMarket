<template>
    <div class="Story">
        <div class="contianer">
            <div class="row justify-content-center">
                <div class="col-sm-12 text-center Story__title">
                    <p class="Story__Head text-secondary">My Short Story</p>
                    <p class="Story__text">
                        Lorem ipsum dolor sit amet, consectetur adipi sicing elit, sed do eiusmod tempor incididunt ut <br> labore et dolore magna aliqua. Ut enim ad minim.
                    </p>
                    <button class="Button">Read More</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'Story',
    data:()=>{
        return{

        }
    }
}
</script>

<style lang="scss" scoped>
@import '~/assets/_variables.scss';
    .Story{
        width:100%;
        padding:6% 20%;
    }
    .Story__title{
        font-family: $font;
        .Story__Head{
            font-size: 27px;
        }
        .Story__text{
            font-size: 30px;
        }
    }
    .Button{
        margin:3% 0%;
        padding: 10px 50px;
        font-size: 20px;
        background: #fff;   
        transition: all .7s ease;
        text-transform: uppercase;
        letter-spacing: .02em;
        border:none;
        color:#000;
        outline: 1px solid #000;
    }
    .Button:hover{
        background:#000;
        color:#fff;
    }
</style>