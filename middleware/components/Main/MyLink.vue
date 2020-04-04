<template>
    <div class="MyLink">
        <div class="container-fuild">
            <div class="row justify-content-center">
                <div class="col-sm-11 text-center p-0">
                        <span>{{Link.Title}}</span>
                            <a :href="Link.link">
                                <span>{{Link.Author}}</span>
                            </a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'MyLink',
    data:()=>{
        return{
            link:{
                Title:'Made By',
                Author:'Aslanjr',
                link:'https://github.com/Aslanjr'
            }        
        }
    },
    computed: {
        Link(){
            return this.link;
        }
    },
}
</script>
<style lang="scss" scoped>
@import '~/assets/_variables.scss';

    .MyLink{
        padding:1% 0%;
        background:#000;
        color: #fff;
        font-family: $font;
        font-size: 20px;
        a{
            text-decoration: none;
            color:rgb(155,155,155);
            transition: all .65s ease;
        }
        a:hover{
            color:#fff
        }
    }
</style>