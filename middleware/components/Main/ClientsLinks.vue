<template>
    <div class="ClientsLinks">
        <div class="container-fuild">
            <div class="row d-flex justify-content-center">
                <div class="col-sm-2 text-center ClientsLinks__images">
                    <img src="/Images/home-2-client-1.png" class="img-fuild" alt="">
                </div>
                <div class="col-sm-2 text-center ClientsLinks__images">
                    <img src="/Images/home-2-client-2.png" class="img-fuild" alt="">
                </div>
                <div class="col-sm-2 text-center ClientsLinks__images">
                    <img src="/Images/home-2-client-3.png" class="img-fuild" alt="">
                </div>
                <div class="col-sm-2 text-center ClientsLinks__images">
                    <img src="/Images/home-2-client-4.png" class="img-fuild" alt="">
                </div>
                <div class="col-sm-2 text-center ClientsLinks__images">
                    <img src="/Images/home-2-client-5.png" class="img-fuild" alt="">
                </div>
                <div class="col-sm-2 text-center ClientsLinks__images">
                    <img src="/Images/home-2-client-6.png" class="img-fuild" alt="">
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
        padding:5% 5%;
        
    }
    .ClientsLinks__images{
        transition: all .65s cubic-bezier(0.19, 1, 0.22, 1)
    }
    .ClientsLinks__images:hover{
        transform: translateY(-30px);
    }
</style>