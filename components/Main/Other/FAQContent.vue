<template>
    <div class="FAQContent">
        <div class="container-fuild">
            <div class="row justify-content-center">
                <div class="col-lg-5">
                    <p class="FAQContent__title">OUR SERVICES</p>
                    <p class="FAQContent__name">Latest books online</p>
                    <p class="FAQContent__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sedumn do eiusmod tempor incididunt ut labore et dolore magna aliquin aute.</p>
                </div>
                <div class="col-lg-7">
                    <div class="FAQContent__item">
                        <div class="d-flex  row">
                            <div class="col-lg-12 d-flex justify-content-between" @click="show('important')">
                                <p>Important information</p>
                                <img src="https://image.flaticon.com/icons/svg/318/318426.svg" height="16"  alt="">
                            </div>
                            <transition name="switch">
                                <div class="FAQContent__item__content" v-if="important">
                                    Ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam,
                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat huuis aute lorem
                                </div>
                            </transition>
                        </div>
                    </div>
                    <div class="FAQContent__item">
                        <div class="d-flex  row">
                            <div class="col-lg-12 d-flex justify-content-between" @click="show('countries')">
                                <p>Fees for non EU countries</p>
                                <img src="https://image.flaticon.com/icons/svg/318/318426.svg" height="16"  alt="">
                            </div>
                            <transition name="switch">
                                <div class="FAQContent__item__content" v-if="countries">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat huuis aute.
                                </div>
                            </transition>
                        </div>
                    </div>
                    <div class="FAQContent__item">
                        <div class="d-flex  row">
                            <div class="col-lg-12 d-flex justify-content-between" @click="show('orders')">
                                <p>International orders</p>
                                <img src="https://image.flaticon.com/icons/svg/318/318426.svg" height="16"  alt="">
                            </div>
                            <transition name="switch">
                                <div class="FAQContent__item__content" v-if="orders">
                                    Dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                     Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat huuis aute lorem ipsum
                                </div>
                            </transition>
                        </div>
                    </div>
                    <div class="FAQContent__item">
                        <div class="d-flex  row">
                            <div class="col-lg-12 d-flex justify-content-between" @click="show('mistakes')">
                                <p>Common mistakes</p>
                                <img src="https://image.flaticon.com/icons/svg/318/318426.svg" height="16"  alt="">
                            </div>
                            <transition name="switch">
                                <div class="FAQContent__item__content" v-if="mistakes">
                                    Sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat huuis aute.
                                    Lorem ipsum dolor
                                </div>
                            </transition>
                        </div>
                    </div>
                    <div class="FAQContent__item">
                        <div class="d-flex  row">
                            <div class="col-lg-12 d-flex justify-content-between" @click="show('shipping')">
                                <p>Shipping method</p>
                                <img src="https://image.flaticon.com/icons/svg/318/318426.svg" height="16"  alt="">
                            </div>
                            <transition name="switch">
                                <div class="FAQContent__item__content" v-if="shipping">
                                    Sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat huuis aute.
                                    Lorem ipsum dolor
                                </div>
                            </transition>
                        </div>
                    </div>
                    <div class="FAQContent__item">
                        <div class="d-flex  row">
                            <div class="col-lg-12 d-flex justify-content-between FAQContent__item__title " @click="show('billing')">
                                <p>Billing address</p>
                                <img src="https://image.flaticon.com/icons/svg/318/318426.svg" height="16"  alt="">
                            </div>
                            <transition name="switch">
                                <div class="FAQContent__item__content" v-if="billing">
                                    Elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim ven
                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat huuis aute.
                                    Lorem ipsum dolor sit amet, consectetur adipisicing
                                </div>
                            </transition>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'FAQContent',
    data(){
        return{
            important:false,
            countries:false,
            orders:false,
            mistakes:false,
            shipping:false,
            billing:false
        }
    },
    methods: {
        show(value){
            switch(value){
                case 'important':
                    if(this.important === true){
                        this.important = false;
                    }else{
                        this.important = true;
                        this.countries = false;
                        this.orders = false;
                        this.mistakes = false;
                        this.shipping = false;
                        this.billing = false;
                    }
                    break;
                case 'countries':
                    if(this.countries === true){
                        this.countries = false;
                    }else{
                        this.important = false;
                        this.countries = true;
                        this.orders = false;
                        this.mistakes = false;
                        this.shipping = false;
                        this.billing = false;
                    }
                    break;
                case 'orders':
                    if(this.orders === true){
                        this.orders = false;
                    }else{
                        this.important = false;
                        this.countries = false;
                        this.orders = true;
                        this.mistakes = false;
                        this.shipping = false;
                        this.billing = false;
                    }
                    break;
                case 'mistakes':
                    if(this.mistakes === true){
                        this.mistakes = false;
                    }else{
                        this.important = false;
                        this.countries = false;
                        this.orders = false;
                        this.mistakes = true;
                        this.shipping = false;
                        this.billing = false;
                    }
                    break;
                case 'shipping':
                    if(this.shipping === true){
                        this.shipping = false;
                    }else{
                        this.important = false;
                        this.countries = false;
                        this.orders = false;
                        this.mistakes = false;
                        this.shipping = true;
                        this.billing = false;
                    }
                    break;
                case 'billing':
                    if(this.billing === true){
                        this.billing = false;
                    }else{
                        this.important = false;
                        this.countries = false;
                        this.orders = false;
                        this.mistakes = false;
                        this.shipping = false;
                        this.billing = true;
                    }
                    break;
            }
        }
    },
}
</script>
<style lang="scss" scoped>
@import '../../../assets/mixin.scss';
    .FAQContent{
        padding: 5% 15%;
        transition: all 1s ease;
        .FAQContent__item{
            margin:3% 0%;
            transition: all 1s ease;
            cursor: pointer;
        }
        .FAQContent__title{
           @include text(rgb(182, 182, 182),16px,.2em,500); 
        }
        .FAQContent__name{
           @include text(#000,35px,.05em,500); 
        }
        .FAQContent__text{
           @include text(#000,18px,0.1em,500); 
        }
        .FAQContent__item__content{
            transition: all 1s ease;
            padding: 0px 25px 15px 25px;
        }
    }
    .switch-enter-active{
		max-height: 350px;
		transition: all .75s ease;
	}
    .switch-leave-active{
        max-height: 200px;
		transition: all .01s ease;
	}
	.switch-enter, .switch-leave-to {
		opacity: 0;
  		max-height: 0px;
	}
</style>