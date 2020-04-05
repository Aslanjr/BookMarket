<template>
    <div class="Categories">
        <div class="container-fluid">
            <div class="row d-flex justify-content-center">
                <div class="col-sm-2 d-flex button text-center justify-content-center align-items-center" v-for="(item,index) in CategoriesList" @click="showBook(item.id)" :key="index" >
                        {{item.title}}
                </div>  
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'Categories',
    data:()=>{
        return{
            CategoriesList:[
                {
                    id:1,
                    title:'All'
                },
                {
                    id:2,
                    title:'Best Sellers'
                },
                {
                    id:3,
                    title:'Fantasy'
                },
                {
                    id:4,
                    title:'History'
                },
                {
                    id:5,
                    title:'Art'
                },
                {
                    id:6,
                    title:'Love Stories'
                },
            ]
        }
    },
    methods:{
        showBook(id){
          switch(id){
            case 1:
                this.$parent.$emit('showBooks','AllBooks');
                
                break;
            case 2:
                this.$parent.$emit('showBooks','BestSellers');
                break;
            case 3:
                this.$parent.$emit('showBooks','Fantasy');
                break;
            case 4:
                this.$parent.$emit('showBooks','History');
                break;
            case 5:
                this.$parent.$emit('showBooks','Art');
                break;
            case 6:
                this.$parent.$emit('showBooks','LoveStories');
                break;
            default:
                console.log('Not Found');
          }  
        },
    }
}   
</script>
<style lang="scss" scoped>
    .Categories{
        padding:4% 20% 2% 20%;
    }
    .button{
        cursor:pointer;
        list-style: none;
        padding: 10px 0px;
        font-family: 'Cormorant Garamond', serif;
        background:#fff;
        color:#000;
        font-size: 19px;
        transition:all .65s ease;
        outline: 1px solid rgb(212,212,212);
    }
    .button:hover{
        background:#000;
        color:#fff;
    }
</style>