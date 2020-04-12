<template>
    <div class="Adress">
        <div class="container">
            <div class="row  d-flex ">
                <div class="col-md-3" v-for="(item,index) in adressList" :key="index">
                    <h5>{{item.title}}</h5>
                    <p class="mt-5"><img :src="item.imgAdress" height="20" class="mr-2" alt="">{{item.adress}}</p>
                    <p ><img :src="item.imgPhone"  height="20" class="mr-2" alt="">{{item.phone}}</p>
                    <p ><img :src="item.imgEmail"  height="20" class="mr-2" alt="">{{item.email}}</p>                    
                </div>
            </div>
        </div>        
    </div>
</template>
<script>
export default {
    name:'Adress',
    data(){
        return{
            adressList:[
                {
                    title:'Bookstore Central',
                    imgAdress:'https://image.flaticon.com/icons/svg/967/967848.svg',
                    imgPhone:'https://image.flaticon.com/icons/svg/545/545245.svg',
                    imgEmail:'https://image.flaticon.com/icons/svg/2089/2089181.svg',
                    adress:'194 Amsterdam Ave NY',
                    phone:'(+123) 456 789',
                    email:'chapterone@qode.com'
                },
                {
                    title:'Bookstore 1',
                    imgAdress:'https://image.flaticon.com/icons/svg/967/967848.svg',
                    imgPhone:'https://image.flaticon.com/icons/svg/545/545245.svg',
                    imgEmail:'https://image.flaticon.com/icons/svg/2089/2089181.svg',
                    adress:'194 Amsterdam Ave NY',
                    phone:'(+123) 456 789',
                    email:'chapterone@qode.com'
                },
                {
                    title:'Bookstore 2',
                    imgAdress:'https://image.flaticon.com/icons/svg/967/967848.svg',
                    imgPhone:'https://image.flaticon.com/icons/svg/545/545245.svg',
                    imgEmail:'https://image.flaticon.com/icons/svg/2089/2089181.svg',
                    adress:'194 Amsterdam Ave NY',
                    phone:'(+123) 456 789',
                    email:'chapterone@qode.com'
                },
                {
                    title:'Publisher',
                    imgAdress:'https://image.flaticon.com/icons/svg/967/967848.svg',
                    imgPhone:'https://image.flaticon.com/icons/svg/545/545245.svg',
                    imgEmail:'https://image.flaticon.com/icons/svg/2089/2089181.svg',
                    adress:'194 Amsterdam Ave NY',
                    phone:'(+123) 456 789',
                    email:'chapterone@qode.com'
                },
            ],
        }
    }
}
</script>
<style lang="scss" scoped >
    .Adress{
        padding:5% 0% 0% 0%;
    }
</style>