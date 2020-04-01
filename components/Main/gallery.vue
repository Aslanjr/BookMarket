<template>
    <div class="Gallery">
        <div class="container-fluid">
            <div class="row ">
                <div class="d-flex flex-column  col-sm-6">
                    <div class="row">
                        <div class="col-sm-12 ">
                            <div class="d-flex">
                                <div class="Gallery__item__img col-md-8 col-sm-8 p-0">
                                    <img src="https://chapterone.qodeinteractive.com/wp-content/uploads/2019/07/home-2-gallery-1.jpg" class="img-fluid" alt="">
                                </div>
                                <div class="d-flex flex-column col-md-4 col-sm-4 p-0">
                                    <div class="Gallery__item__img">
                                        <img src="https://chapterone.qodeinteractive.com/wp-content/uploads/2019/07/home-2-gallery-2.jpg" class="img-fluid" alt="">
                                    </div>
                                    <div class="Gallery__item__img">
                                        <img src="https://chapterone.qodeinteractive.com/wp-content/uploads/2019/07/home-2-gallery-8.jpg" class="img-fluid" alt="">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="d-flex  col-sm-12">
                            <div class="Gallery__item__img">
                                <img src="https://chapterone.qodeinteractive.com/wp-content/uploads/2019/07/home-2-gallery-6.jpg" class="img-fluid" alt="">
                            </div>
                            <div class="Gallery__item__img">
                                <img src="https://chapterone.qodeinteractive.com/wp-content/uploads/2019/07/home-2-gallery-7.jpg" class="img-fluid" alt="">
                            </div>
                            <div class="Gallery__item__img">
                                <img src="https://chapterone.qodeinteractive.com/wp-content/uploads/2019/07/home-2-gallery-11.jpg" class="img-fluid" alt="">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 d-flex flex-column">
                   <div class="row">
                        <div class="d-flex p-0 col-sm-12">
                            <div class="Gallery__item__img">
                                <img src="https://chapterone.qodeinteractive.com/wp-content/uploads/2019/07/home-2-gallery-3.jpg" class="img-fluid"  alt="">
                            </div>
                            <div class="Gallery__item__img">
                                <img src="https://chapterone.qodeinteractive.com/wp-content/uploads/2019/07/home-2-gallery-4.jpg" class="img-fluid"  alt="">
                            </div>
                            <div class="Gallery__item__img">
                                <img src="https://chapterone.qodeinteractive.com/wp-content/uploads/2019/07/home-2-gallery-5.jpg" class="img-fluid"  alt="">
                            </div>
                        </div>
                        <div class="d-flex p-0 col-sm-12">
                            <div class="Gallery__item__img col-md-8 col-sm-8 p-0">
                                <img src="https://chapterone.qodeinteractive.com/wp-content/uploads/2019/07/home-2-gallery-9.jpg" class="img-fluid"  alt="">
                            </div>
                            <div class="d-flex flex-column col-md-4 col-sm-4 p-0">
                                <div class="Gallery__item__img">
                                    <img src="https://chapterone.qodeinteractive.com/wp-content/uploads/2019/07/home-2-gallery-10.jpg" class="img-fluid"  alt="">
                                </div>
                                <div class="Gallery__item__img">
                                    <img src="https://chapterone.qodeinteractive.com/wp-content/uploads/2019/07/home-2-gallery-12.jpg" class="img-fluid" alt="">
                                </div>
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
    name:'Gallery',
    data:()=>{
        return{}
    }   
}
</script>
<style lang="scss" scoped>
    .Gallery{
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 10% 8%;
        .Gallery__item__img{
            margin:5px;
            overflow: hidden;
            img{
                transition:all 2s ease;
            }
            img:hover{
                transform: scale(1.1);
            }
        }
    }
</style>





