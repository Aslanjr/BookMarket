<template>
    <div class="AllBooks container-fluid">
        <div class="row d-flex ml-5 justify-content-start">
            <div class="AllBooks__item" v-for="(item,index) in showBooks.slice(0,2)" :key="index">
                <div class="AllBooks__item__content" >
                    <div class="Images">
                        <img class="AllBooks__item__images" :src="item.Img"  alt="">
                    </div>
                    <div class="Title__content">
                        <div class="link">
                            <div class="addToBasket">
                                <span @click="addToBasket(item)">Add To Basket</span>
                                <span class="line"></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mt-4">
                    <p class="Author">{{item.Author}}</p>
                    <p class="Title">{{item.Title}}</p>
                    <p class="Amount">${{item.Amount}}.00</p>
                </div>
            </div> 
        </div> 
    </div>
</template>
<script>
export default {
    name:'AllBooks',
    data:()=>{
        return{
            Fantasy:[],
        }
    },
    computed: {
        showBooks(){
            return this.$store.state.Books.AllBooks.filter((item)=>{
                return item.Title.includes('Fantasy Storytelling') || item.Title.includes('Winter Darkest Tragedy')
            });
        },
        // eslint-disable-next-line vue/return-in-computed-property
        showFantasy(){
            return this.Fantasy;
        }
    },  
    methods: {
        addToBasket(item){
            this.$store.dispatch('Basket/addBasket',item);
        }
    },

}
</script>
<style lang="scss" scoped>
    p{
        margin:0;
    }
    .AllBooks{
        display: flex;
        flex-wrap: wrap;
        max-width:1765px;
        height: 100%;
        font-family: 'Cormorant Garamond', serif;
    }
    .AllBooks__item{
        flex-basis: 19%;
        margin:2% 9px;
        .AllBooks__item__images{
            height: 450px;
            width: 326px;
            cursor: pointer;
        }
        .Title__content{
            height: 450px;
            width: 326px;
            background:rgba(209,64,49,.95);
            position:absolute;
            margin:-450px 0px;
            transition:all .4s ease;
            opacity:0;
        }
        .Author{
            font-size: 17px;
            color:rgb(188,188,188)
        }
        .Title{
            font-size: 19px;
            font-weight: 500;
        }
        .Amount{
            font-size: 20px;
            color:rgb(110,110,110)
        }
        @media screen and (max-width: 1840px) {
            flex-basis: 25%;
        }
        @media screen and (max-width: 1430px) {
            flex-basis: 33%;
        }
        @media screen and (max-width: 1050px) {
            flex-basis: 50%;
        }
        
    }
    .AllBooks__item__content:hover .Title__content{
        opacity:1;
    }
    .link{
        margin:60% 29%;
        .addToBasket{
            cursor:pointer;
            font-size: 23px;
            color:#fff;
            .line{
                width: 0%;
                height:2px;
                background:#fff;
                display:block;
                transition:all .67s ease;
            }  
            
        }
        .addToBasket:hover .line{
            width: 100%;
        }
    }
</style>