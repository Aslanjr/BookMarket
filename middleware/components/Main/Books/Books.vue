<template>
    <div>
        <Categories v-show="true" />
        <all-books class="Books" v-show="allBooks" />
        <BestSellers class="Books" v-show="bestSellers" />
        <Fantasy class="Books" v-show="fantasy" />
        <History class="Books" v-show="history" />
        <Art class="Books" v-show="art" />
        <LoveStories class="Books" v-show="loveStories" />
    </div>
</template>
<script>

import AllBooks from '~/components/Main/Books/Categories/AllBooks.vue'
import BestSellers from '~/components/Main/Books/Categories/BestSellers.vue'
import Fantasy from '~/components/Main/Books/Categories/Fantasy.vue'
import History from '~/components/Main/Books/Categories/History.vue'
import Art from '~/components/Main/Books/Categories/Art.vue'
import LoveStories from '~/components/Main/Books/Categories/LoveStories.vue'
import Categories from '~/components/Main/Books/Categories/Categories.vue'

export default {
    name:'Books',
    data:()=>{
        return{
            allBooks:true,
            bestSellers:false,
            fantasy:false,
            history:false,
            art:false,
            loveStories:false,
        }
    },
    mounted(){
        this.$on('showBooks',(value)=>{
            console.log(value);
            switch(value){
                    case 'AllBooks':
                        this.allBooks = true;
                        this.bestSellers = false;
                        this.fantasy = false;
                        this.history = false;
                        this.art = false;
                        this.loveStories = false;
                        break;
                    case 'BestSellers':
                        this.allBooks = false;
                        this.bestSellers = true;
                        this.fantasy = false;
                        this.history = false;
                        this.art = false;
                        this.loveStories = false;
                        break;
                    case 'Fantasy':
                        this.allBooks = false;
                        this.bestSellers = false;
                        this.fantasy = true;
                        this.history = false;
                        this.art = false;
                        this.loveStories = false;
                        break;
                    case 'History':
                        this.allBooks = false;
                        this.bestSellers = false;
                        this.fantasy = false;
                        this.history = true;
                        this.art = false;
                        this.loveStories = false;
                        break;
                    case 'Art':
                        this.allBooks = false;
                        this.bestSellers = false;
                        this.fantasy = false;
                        this.history = false;
                        this.art = true;
                        this.loveStories = false;
                        break;
                    case 'LoveStories':
                        this.allBooks = false;
                        this.bestSellers = false;
                        this.fantasy = false;
                        this.history = false;
                        this.art = false;
                        this.loveStories = true;
                        break;
                    default:
                        console.log('Not Found');
                    }
        })
    },
    components:{
        AllBooks,
        BestSellers,
        Fantasy,
        History,
        Art,
        LoveStories,
        Categories
    }
}
</script>
<style lang="scss" scoped>
    .Books{
        animation:Anime 1s ease;
    }
    @keyframes Anime {
        0%{
            opacity: 0;
            transform: translateY(50px);
        };
        100%{
            opacity: 1;
        }
    }
</style>