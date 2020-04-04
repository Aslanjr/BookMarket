<template>
    <div class="container-fluid">
        <div class="row justify-content-center">
            <div class="Author">
                <div class="col-sm-12 text-center title ">
                    <span>OUR SERVICES</span>
                    <h1>
                        Authors of the month
                    </h1>
                    <p>
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco <br>
                        laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>
                <div class="col-sm-12 text-center">
                    <div class="container-fuild">
                        <div class="row d-flex justify-content-around">
                            <div class="col-sm-3 text-center Author__item" v-for="(item,index) in AuthorList" :key="index" >
                                <img :src="item.img" hegiht="200" alt="">
                                <h5 class="Title">{{item.title}}</h5>
                                <h4 class="Title__Name">{{item.titleName}}</h4>
                                <p  class="Title__text">{{item.titleText}}</p>
                            </div>
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
            AuthorList:[
                {
                    img:'https://chapterone.qodeinteractive.com/wp-content/uploads/2019/07/team-1.png',
                    title: 'Author',
                    titleName: 'Adam Strass',
                    titleText: 'Except sint occaecat cupidatat non proident, sunt culpa qui officia deserunt mollit.'
                },
                {
                    img:'https://chapterone.qodeinteractive.com/wp-content/uploads/2019/07/team-2.png',
                    title: 'Designer',
                    titleName: 'Jennifer Doe',
                    titleText: 'Except sint occaecat cupidatat non proident, sunt culpa qui officia deserunt mollit.'
                },
                {
                    img:'https://chapterone.qodeinteractive.com/wp-content/uploads/2019/07/team-3.png',
                    title: 'Constructor',
                    titleName: 'James Coleman',
                    titleText: 'Except sint occaecat cupidatat non proident, sunt culpa qui officia deserunt mollit.'
                },
                {
                    img:'https://chapterone.qodeinteractive.com/wp-content/uploads/2019/07/team-4.png',
                    title: 'Support',
                    titleName: 'Linda Heyes',
                    titleText: 'Except sint occaecat cupidatat non proident, sunt culpa qui officia deserunt mollit.'
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
    .Author{
        padding:4% 0%;
        overflow: hidden;
        width:90%;
        color:#000;
        font-family: 'Cormorant Garamond', serif;
        .title{
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
        .Author__item{
            margin: 3% 0%;
            .Title{
                color:rgb(125, 125, 125);
                letter-spacing: .1em ;
                margin:3% 0%;
            }
            .Title__text{
                padding:0% 20%;
            }
        }
    }
    
</style>

