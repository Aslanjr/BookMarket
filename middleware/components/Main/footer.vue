<template>
    <div class="Footer">
        <div class="container-fluid">
            <div class="row justify-content-around">
                <div class="col-md-3 Footer__item">
                    <h3>Publishers</h3>
                    <ul class="d-flex flex-column p-0 text-left title">
                        <li>Bestsellers</li>
                        <li>Interviews</li>
                        <li>Authors Story</li>
                        <li>Book Fairs</li>
                        <li>Help (FAQ)</li>
                    </ul>
                </div>
                <div class="col-md-3 Footer__item" >
                    <h3>Contact</h3>
                    <p class="title">Stay in touch with everything ChapterOne, follow us on social media and learn about new promotions.</p>
                    <div class="Contact__links">
                        <img src="/Icons/twitter.png" alt="">
                        <img src="/Icons/instagram-sketched.png" alt="">
                        <img src="/Icons/facebook.png" alt="">
                        <img src="/Icons/basketball.png" alt="">
                    </div>
                </div>
                <div class="col-md-3 Footer__item">
                    <h3>News & Update</h3>
                    <p class="title">We’d love it if you subscribed to our newsletter! You’ll love it too.</p>
                    <input type="text" class='EmailInput' placeholder="Email...">
                </div>
                <div class="col-md-3 Footer__item">
                    <h3>Social media</h3>
                    <div class='SocialImg row d-flex flex-wrap'>
                        <div class="col-sm-12 d-flex">
                            <img height="90" src="https://scontent.cdninstagram.com/v/t51.2885-15/e35/s150x150/64597150_2522195441202926_2456027307595973840_n.jpg?_nc_ht=scontent.cdninstagram.com&_nc_ohc=JB5fU3Of1VsAX-W54eQ&oh=47d64a88f53f3b624bde2b98fb98d1a6&oe=5EADE486" alt="">
                            <img height="90" src="https://scontent.cdninstagram.com/v/t51.2885-15/e35/s150x150/65734138_153434425801248_7844900373272158142_n.jpg?_nc_ht=scontent.cdninstagram.com&_nc_ohc=ilgMO3epLFcAX_dOZDu&oh=dd170ef8961be60d0857ad99ff3b1693&oe=5EAF4964" alt="">
                            <img height="90" src="https://scontent.cdninstagram.com/v/t51.2885-15/e35/s150x150/65999139_159289961866393_4987927538564284962_n.jpg?_nc_ht=scontent.cdninstagram.com&_nc_ohc=wRoxJnE2UNIAX9mvsha&oh=7b3554b362de73f2514fb424bf0e2336&oe=5EADD9E6" alt="">
                        </div>
                        <div class="col-sm-12 d-flex">
                            <img height="90" src="https://scontent.cdninstagram.com/v/t51.2885-15/e35/s150x150/65124294_398049147735483_8670305428516514358_n.jpg?_nc_ht=scontent.cdninstagram.com&_nc_ohc=LnFPdfQBXGEAX8pA1YP&oh=959cc1201e3e8e29a84d3e877bd7db4c&oe=5EAEAC43" alt="">
                            <img height="90" src="https://scontent.cdninstagram.com/v/t51.2885-15/e35/s150x150/66675239_2284760738443349_6629740624649938864_n.jpg?_nc_ht=scontent.cdninstagram.com&_nc_ohc=-eSTsf49tm0AX-tGuwd&oh=03de0a3bface2f8bd02bec651390c5ec&oe=5EAD4CB6" alt="">
                            <img height="90" src="https://scontent.cdninstagram.com/v/t51.2885-15/e35/s150x150/62241246_129621398264101_3103299431831323622_n.jpg?_nc_ht=scontent.cdninstagram.com&_nc_ohc=57-ZALEkdtUAX8xuE-F&oh=189fe670483168394129caca193d573e&oe=5EAE93B5" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'Footer',
    data:()=>{
        return{

        }
    }
}
</script>
<style lang="scss" scoped>
@import '~/assets/_variables.scss';    
    .Footer{
        font-family: $font;
        background:#282828;
        color:#fff;
        padding: 2% 10%;
        .Footer__item:nth-child(1){
            ul{
                list-style: none;
            }
        }
        .EmailInput{
            width:100%;
            height: 50px;
            padding: 13px;
            opacity: .6;
            font-size: 18px;
            border:none;
            background: transparent;
            outline: 1px solid rgb(222,222,222);
            font-family: 'Cormorant Garamond', serif;
            transition: all .1s ease;
        }
        .EmailInput:focus{
            border:none;
            color:#fff;
            opacity: 1;
        }
        .EmailInput::-webkit-input-placeholder{
            color: #fff;
        }
        .title{
            color:rgb(188,188,188);
            letter-spacing: .05em;
            line-height: 30px;
        }
        .SocialImg{
            overflow: hidden;
            img{
                transition: all 1s ease;
            }
            img:hover{
                opacity:0.4;
            }
        }
    }
</style>