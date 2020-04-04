<template>
    <div class="BooksClub shadow-lg">
        <div class="container-fluid">
            <div class="row d-flex ">
                <div class="col-sm-6 d-flex align-items-center justify-content-around text-center">
                    <img src="https://media.istockphoto.com/vectors/man-and-woman-read-book-vector-id1051690092?k=6&m=1051690092&s=170667a&w=0&h=EABgnVYAgVxKA1IpkcCaND53Cnt2rM6MRm_lPYH_vVs=" alt="">
                    <h1 >Join the Books club here</h1>
                </div>
                <div class="col-sm-6 d-flex justify-content-around align-items-center">
                    <div >
                        <button class="Button">Join</button>
                    </div>
                    <img src="https://image.freepik.com/vector-gratis/nina-sentada-leyendo-libro_101980-3.jpg" height="400" alt="">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'BooksClub',
    data:()=>{
        return{

        }
    }
}
</script>
<style lang="scss" scoped>
@import "~/assets/_variables.scss";

    .BooksClub{
        font-family: $font;
        width: 100%;
        margin: 10% 0%;
    }
    .Button{
        padding: 10px 50px;
        position: relative;
        z-index:3;
        font-size: 20px;
        background: #fff;  
        margin:0% 44%; 
        transition: all .7s ease;
        text-transform: uppercase;
        letter-spacing: .02em;
        border:none;
        color:#000;
        outline: 1px solid #000;
    }
    .Button:hover{
        background:#000;
        color:#fff;
    }
</style>