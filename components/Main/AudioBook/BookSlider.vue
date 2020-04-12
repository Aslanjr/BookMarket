<template>
    <div class="BookSlider">
        <div class="contanier-fuild">
            <div class="row  d-flex flex-nowrap BookSlider__slide" :style="translate" >
                <div class="BookSlider__slide__item text-center col-lg-4 d-flex flex-column" v-for="(item,index) in Slide" :key="index">
                    <div>
                        <img :src="item.img" alt="">
                    </div>
                    <p class="Slide__text">{{item.text}}</p>
                    <p class="Slide__name">{{item.name}}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'BookSlider',
    data:()=>{
        return{
            MoveRight:0,
            Slide:[
                {
                    img:'https://chapterone.qodeinteractive.com/wp-content/uploads/2019/07/testimonials-1-150x150.png',
                    text:'I was a library rat. I read all the time. I walked to school reading books. I read under my desk. ',
                    name:'Chelsea Cain '
                },
                {
                    img:'https://chapterone.qodeinteractive.com/wp-content/uploads/2019/07/testimonials-2-150x150.png',
                    text:'I really like knowledge and reading books and just generally immersing myself in information. ',
                    name:'Adam D\'Angelo '
                },
                {
                    img:'https://chapterone.qodeinteractive.com/wp-content/uploads/2019/07/testimonials-3-150x150.png',
                    text:'I have always loved reading books for children, particularly when they are mysteries. ',
                    name:'Eleanor Catton '
                },
                {
                    img:'https://chapterone.qodeinteractive.com/wp-content/uploads/2019/07/testimonials-2-150x150.png',
                    text:'I really like knowledge and reading books and just generally immersing myself in information. ',
                    name:'Adam D\'Angelo '
                },
                {
                    img:'https://chapterone.qodeinteractive.com/wp-content/uploads/2019/07/testimonials-3-150x150.png',
                    text:'I have always loved reading books for children, particularly when they are mysteries. ',
                    name:'Eleanor Catton '
                },
                {
                    img:'https://chapterone.qodeinteractive.com/wp-content/uploads/2019/07/testimonials-1-150x150.png',
                    text:'I was a library rat. I read all the time. I walked to school reading books. I read under my desk. ',
                    name:'Chelsea Cain '
                },
            ],
        }
    },
    mounted() {
        this.Slides();
    },
    methods:{
        Slides(){
            let max = -1920;
            setInterval(()=>{
                if(this.MoveRight > max ) {
                    this.MoveRight -= 640;
                }else{
                    this.MoveRight = 0;
                }
            },4000)
        }
    },
    computed: {
        translate(){
            return `transform:translateX(${this.MoveRight}px)`;
        }
    },
}
</script>
<style lang="scss" scoped>
@import '../../../assets/mixin.scss';
    .BookSlider__slide{
        padding:7% 0%;
        transition: all 1.5s ease;
        .BookSlider__slide__item{
            padding: 0% 9%;
            border-right: 1px solid rgba(0,0,0,.2);
            .Slide__text{
                margin:5% 0%;
                @include text(#000,20px,.04em,500)
            }
            .Slide__name{
                 @include text(#000,20px,.04em,500)
            }
        }

    }
</style>