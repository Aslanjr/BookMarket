<template>
    <div class="OrderInfo">
        <div class="container-fuild">
            <div class="row justify-content-center d-flex" >
                <div class="col-md-12">
                    <button class="button" @click="showInfo('description')">description</button>
                    <button class="button" @click="showInfo('additional')" >additional information</button>
                    <button class="button" @click="showInfo('review')" >review</button>
                </div>
                <div class="col-md-12">
                    <p class="OrderInfo__content" v-if="additional">
                        Dolor ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                         Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                           Excepteur sint occaecat cupidatat non proident.
                        <br>
                        <br>
                        Filiamor qui officia deserunt mollit anim id est laborum.
                         Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                          totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
                           dicta sunt explicabar.
                    </p>
                    <p class="OrderInfo__content" v-if="description">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint occaecat cupidatat non proident.
                        <br><br>
                        Usunt in culpa qui officia deserunt mollit anim id est laborum.
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                        totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sun
                        explicabar.
                    </p>
                    <p class="OrderInfo__content" v-if="review">
                        Quanso lim ore dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident.
                        <br><br>
                        Ubunimentumt in culpa qui officia deserunt mollit anim id est laborum.
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                        totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabar.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'OrderInfo',
    data(){
        return{
            description:true,
            additional:false,
            review:false
        }
    },
    methods: {
        showInfo(value){
            switch(value){
                case 'description':
                    this.description = true;
                    this.additional = false;
                    this.review = false;
                    break;
                case 'additional':
                    this.description = false;
                    this.additional = true;
                    this.review = false;
                    break;
                case 'review':
                    this.description = false;
                    this.additional = false;
                    this.review = true;
                    break;
                default:
                    console.log('Not Found');
                    break;
            }
        }
    },
}
</script>
<style lang="scss" scoped>
@import "../../../assets/mixin.scss";
    .OrderInfo{
        padding:5% 15%;
    }
    .button{
        @include button(#fff,#000,1px solid rgb(188,188,188));
    }
    .OrderInfo__content{
        margin:20px 0px;
        @include text(rgb(124,124,124),18px,.04em,500);
    }
</style>