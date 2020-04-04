<template>
    <div class="container-fluid">
        <div class="row justify-content-center">
            <div class="Author">
                <div class="col-sm-12 text-center title ">
                    <span>EVENTS</span>
                    <h1>
                        Book promotions
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, <br>
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
                <div class="BackImage">
                    <div class="BackImage__Item">
                        <img src="/Images/Чашка.png" alt="">
                    </div>
                </div>
                <div class="col-sm-12 text-center">
                    <div class="container">
                        <div class="row d-flex justify-content-center Events__content" v-for="(item,index) in events" :key="index"  >
                            <div class="col-md-4 col-sm-4 Events__content__title"><p>{{item.date}} / {{item.city}}</p></div>
                            <div class="col-md-4 col-sm-4 Events__content__title">{{item.title}}</div>
                            <div class="col-md-4 col-sm-4 Events__content__title"><button class="Button">See Tickets</button></div>
                        </div>
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
            events:[
                {
                    date:'21.07.2019',
                    city:'LA, CALIFORNIA',
                    title:'Festival of Books',

                },
                {
                    date:'25.07.2019',
                    city:'PARIS, FRANCE',
                    title:'Book Signing',

                },
                {
                    date:'26.07.2019',
                    city:'WASHINGTON, US',
                    title:'Book Fair',

                },
                {
                    date:'31.07.2019',
                    city:'MADRID, SPAIN',
                    title:'Promotion Book',

                },
            ]
        }
    }
}
</script>
<style lang="scss" scoped>
    .Button{
        padding: 10px 50px;
        font-size: 20px;
        background: #fff;   
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
    .Author{
        padding:4% 0%;
        overflow: hidden;
        width:90%;
        color:#000;
        font-family: 'Cormorant Garamond', serif;
        .title{
            z-index: 21;
            color:#000;
            span{
                color:rgb(175, 175, 175);
                letter-spacing: .4em ;
            }
            p{  
                margin:2% 0%;
                font-family: "Cormorant Garamond",sans-serif;
                letter-spacing: .01em;
                font-size: 25px;
                line-height: 40px;
            }
        }
        .Events__content{
            position:relative;
            z-index: 20;
            border-bottom: 1px solid rgb(213,213,213);
            padding: 2% 0%;
        }
        .Events__content__title:nth-child(1){
            letter-spacing: .05em;
            font-size: 18px;
            color:rgb(155,155,155);
            p{
                border-right:1px solid rgb(133,133,133);
            }
        }
        .Events__content__title:nth-child(2){
            letter-spacing: .05em;
            font-size: 25px;
        }
        .BackImage{
            overflow: hidden;
            position: absolute;
            .BackImage__Item{
                position:absolute;
                transform:scale(1.4);
                opacity: .5;
                top:-200px;
                left:200px;
            }
        }
    }
    
</style>

