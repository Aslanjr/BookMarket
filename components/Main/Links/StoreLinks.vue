<template>
    <div class="ClientsLinks">
        <div class="container-fuild">
            <div class="row d-flex justify-content-center">
                <div class="col-md-3 text-center ClientsLinks__images">
                    <img src="https://chapterone.qodeinteractive.com/wp-content/uploads/2019/08/client-1a.png" class="img-fuild" alt="">
                </div>
                <div class="col-md-3 text-center ClientsLinks__images">
                    <img src="https://chapterone.qodeinteractive.com/wp-content/uploads/2019/07/client-2.png" class="img-fuild" alt="">
                </div>
                <div class="col-md-3 text-center ClientsLinks__images">
                    <img src="https://chapterone.qodeinteractive.com/wp-content/uploads/2019/07/client-3.png" class="img-fuild" alt="">
                </div>
                <div class="col-md-3 text-center ClientsLinks__images">
                    <img src="https://chapterone.qodeinteractive.com/wp-content/uploads/2019/07/client-4.png" class="img-fuild" alt="">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'ClientsLinks',
    data:()=>{
        return{

        }
    }   
}
</script>
<style lang="scss" scoped>
    .ClientsLinks{
        padding:5% 10%;
        
    }
    .ClientsLinks__images{
        transition: all .65s cubic-bezier(0.19, 1, 0.22, 1);
        @media screen and(max-width:767px){
            margin:30px 0px;
        }
    }
    .ClientsLinks__images:hover{
        transform: translateY(-30px);
    }
</style>