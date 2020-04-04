<template>
    <div class="container-fluid">
        <div class="row justify-content-center">
            <div class="OurService">
                <div class="col-sm-12 text-center title">
                    <h2>
                        Our Service
                    </h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. <br>
                        Nemo neque velit aliquam earum assumendadolorem ex a impedit obcaecati soluta exercitationem,<br>
                        laudantium, ipsam sunt, suscipit id nostrum explicabo quidem magni?
                    </p>
                    <div>
                        <button class="Button">Read more</button>
                </div>
            </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'OurService',
    data:()=>{
        return{

        }
    }
}
</script>
<style lang="scss" scoped>
    .Button{
        padding: 10px 50px;
        font-size: 20px;
        background: transparent;   
        transition: all .7s ease;
        border:none;
        color:#fff;
        outline: 1px solid #fff;
    }
    .Button:hover{
        background:#fff;
        color:#000;
    }
    .OurService{
        padding:7% 0%;
        margin:3% 0%;
        overflow: hidden;
        width:90%;
        font-family: 'Cormorant Garamond', serif;
        background-image: url(https://chapterone.qodeinteractive.com/wp-content/uploads/2019/09/home-2-parallax-image-1.jpg); 
        background-attachment: fixed;
        .title{
            color:#fff;
            p{  
                margin:2% 0%;
                font-family: "Cormorant Garamond",sans-serif;
                letter-spacing: .01em;
                font-size: 25px;
                line-height: 40px;
            }
        } 
    }
    
</style>

