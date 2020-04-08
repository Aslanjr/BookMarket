<template>
    <div class="d-flex text-center products">
        <div  v-for="(item,index) in Products" :key="index">
            <img class="ProductsImg" @mouseenter="showInfo" @mouseleave="showInfo" :src="item.img" height="350" width="300" alt="">
            <div class="product__info" :class="{ displays: isActive }">
                <p>{{item.title}}</p>
                <p>{{item.amount | dollar}}</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'OurService',
    data:()=>{
        return{
            isActive:false,
        }
    },
    methods:{
        showInfo(){
            this.isActive === true ? this.isActive = false : this.isActive = true;
        }
    },
    computed:{
        Products(){
            return this.$store.state.OurProduct.OurProducts
        }
    },
    filters:{
        dollar(value){
            return  '$' + value + '.00';
        }
    }
}
</script>
<style lang="scss" scoped> 
    .products{
        cursor: pointer ;
    }
    .product__info{
        transition: all .4s ease;
        font-size: 20px;
        font-family: 'Cormorant Garamond', serif;   
        position:relative;
        bottom:13%;
        opacity: 0;
    }
    .displays{
        opacity: 1;
    }
</style>

