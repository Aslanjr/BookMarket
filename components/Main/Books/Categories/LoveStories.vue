<template>
    <div class="AllBooks container-fluid">
        <div class="AllBooks__item" v-for="(item,index) in showBooks.slice(0,7)" :key="index">
            <img class="AllBooks__item__images" :src="item.Img"  alt="">
            <div class="mt-4">
                <p class="Author">{{item.Author}}</p>
                <p class="Title">{{item.Title}}</p>
                <p class="Amount">${{item.Amount}}.00</p>
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
        // Filter Array and Show
        showBooks(){
            return this.$store.state.Books.AllBooks.filter((item)=>{
                return item.Title.includes('Kiara’s World')
                || item.Title.includes('Move a Bit')
                || item.Title.includes('V Word')
                || item.Title.includes('Youth Experience')
                || item.Title.includes('Lost Dreams')
                || item.Title.includes('East Sun')
            });
        },
        // eslint-disable-next-line vue/return-in-computed-property
        showFantasy(){
            return this.Fantasy;
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
        flex-basis: 20%;
        margin:2% 0%;
        .AllBooks__item__images{
            height: 450px;
            width: 326px;
            transition: all .65s ease;
            cursor: pointer;
        }
        .AllBooks__item__images:hover{
            transform: scale(.9);
            box-shadow: 0px 0px 35px 10px rgb(188,188,188);
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
    }
</style>