<template>
    <div class="Basket d-flex  ">
        <div class="container-fluid">
            <div class="row justify-content-end ">
                <div class="Basket__item d-flex  justify-content-end col-sm-3  align-items-end" @mouseenter="showBasketItems">
                    <span class="BasketCount">{{$store.state.Basket.cartCount}}</span>
                    <img src="/Icons/add-to-cart.png" alt="">
                    <span class="totalPrice ml-2">${{$store.state.Basket.totalPrice}}.00</span>
                    <transition name="switch">
                        <div class="DropdownBasket shadow-lg" @mouseenter="showBasketItems" @mouseleave=" DropdownBasket = false" v-if="DropdownBasket">
                            <div class="non__Content" v-if="ItemBasket">
                                No products in the cart.
                            </div>
                            <div class="Basket__Content p-5" v-if="BasketContent">
                                    <div class="d-flex row mb-3 no-gutters align-items-center" v-for="(item,index) in showBasket" :key="index">
                                        <div class="col-sm-4 ">
                                            <img :src="item.Img" height="110"/>
                                        </div>
                                        <div class="col-sm-4 ml-1">
                                            <p class="m-0">{{item.Title}}</p>
                                            <p>1 x {{item.Amount | Dollars}}</p>
                                        </div>
                                        <div class="col-sm-3 mb-5 text-right">
                                            <img src="https://image.flaticon.com/icons/svg/748/748122.svg" height="16" @click="deleteItem(item)" class="close">
                                        </div>
                                    </div>
                            <div class="d-flex justify-content-between">
                                <p >Total:</p>
                                <p>${{$store.state.Basket.totalPrice}}.00</p>
                            </div>
                            <button class="button buttonCart">View Cart</button>
                            <button class="button buttonCheck">View Checkout</button>
                            </div>
                        </div>
                    </transition>
                </div>
                <div class="Basket__item col-sm-2 pr-0 text-center">
                <div>
                    <img src="/Icons/search.png" @click=" DropdownSearch = true">
                </div>
                <transition name="switch">
                        <div class="DropdownSearch" v-if="DropdownSearch" @mouseleave="DropdownSearch = false">
                            <input type="text" v-model="search" placeholder="Search"> <p @click="Search">GO</p>
                        </div>
                </transition>
                </div>
                <div class="Basket__item col-sm-2 text-center" @mouseenter="LogIn = true" >
                    <div>
                    <img src="/Icons/user.png" alt="">
                </div>
                <transition name="switch">
                    <div class="Log row d-flex flex-wrap  shadow-lg justify-content-center" @mouseenter="LogIn = true" @mouseleave="LogIn = false" v-if="LogIn" >   
                            <div class="Login col-sm-12 ">
                                <img src="/Icons/login.png" alt="">
                                <nuxt-link to="/Auth/Login">
                                    <span>Log In</span>
                                </nuxt-link>
                            </div>
                        
                            <div class="Sign col-sm-12">
                                <img src="/Icons/login.png" alt="">
                                <nuxt-link to="/Auth/Registration">
                                    <span>Sign In</span>
                                </nuxt-link>
                            </div>
                    </div>
                </transition>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

import Axios from 'axios';

export default {
    name:'Basket',
    data:()=>{
        return{
            LogIn:false,
            DropdownBasket:true,
            ItemBasket:false,
            BasketContent:false,
            DropdownSearch:false,
            search:'',
        }
    },
    filters:{
        Dollars(value){
            return '$' + value + '.00';
        },
    },
    computed: {
        showBasket(){
            return this.$store.state.Basket.AllBasket;
        },
        totalBasketPrice(){
            let TotalPrice = this.showBasket.reduce((sum,current)=>{
                return sum + current.Amount;
            });
            return TotalPrice;
        },
    },
    methods:{
        Search(){
            console.log('Search');
        },
        showBasketItems(){
            this.DropdownBasket = true;
            if(this.showBasket.length == 0){
                 this.ItemBasket = true;
                 this.BasketContent = false;
            }else{
                this.ItemBasket = false;
                this.BasketContent = true;
            }
            
        },
        deleteItem(item){
            this.$store.dispatch('Basket/removeBasket',item);
        }
    }  

}
</script>
<style lang="scss" scoped>
    .Basket{
        font-family: 'Cormorant Garamond', serif;
        z-index: 140;
        .Basket__item{
            cursor: pointer;
            padding:0% 3% 0% 0%;
            .Log{
                position: absolute;
                top:80px;
                left:-100px;
                background:#fff;
                font-size: 20px;
                padding: 10% 3%;
                a{
                    color: #000;
                    text-decoration: none;
                }
                .Login{
                    transition: all .5s ease;
                    text-align: left;
                }
                .Sign{
                    transition: all .5s ease;
                    margin:10px 0px;
                    text-align: left;
                }
                .Sign:hover{
                    transform: translateX(5px);
                }
                .Login:hover{
                    transform: translateX(5px);
                }
            }
            
            .BasketCount{
                display: block;
                position: relative;
                font-size: 17px;
                color:#fff;
                height: 21px;
                top:-40%;
                left: 13%;
                border-radius: 100%;
                text-align: center;
                font-weight: bold;
                font-family: "Josefin Sans", sans-serif;
                width: 21px;
                background-color: red;
            }   
            .totalPrice{
                font-size: 15px;
                font-family: "Josefin Sans", sans-serif;
            }
        }
        .Basket__item:nth-child(1){
            border-right: 1px solid black;
        }   
        .Basket__item:nth-child(2){
            border-right: 1px solid black;
        }
        .DropdownBasket{
            background:#fff;
            width: 400px;
            position: absolute;
            cursor: pointer;
            top:80px;
            right:1px;
            font-size: 18px;
            .non__Content{
                width: 100%;
                height:100%;
                padding:30px 50px;
                animation:Anime 1s ease;
            }
            .Basket__Content{
                width: 100%;
                height:100%;
                animation:Anime 1s ease;
            }
        }
        .DropdownSearch{
            background:#282828;
            font-family:"Josefin Sans", sans-serif;
            padding: 20px 50px;
            display: flex;
            position:absolute;
            cursor: pointer;
            top:80px;
            right:5px;
            font-size: 18px;
            color:#fff;
            input{
                border-right: 1px solid #fff;
                width: 300px;
                height: 50px;
                border: none;
                opacity: .6;
                border-bottom:1px solid #fff;
                background: transparent;
                color: #053f38;
                font-family: 'Cormorant Garamond', serif;
                transition: all .5s ease;
            }
            input:focus{
                outline: none !important;
                color:#fff;
                opacity: 1;
            }
            input::-webkit-input-placeholder{
                color: #fff;
            }
            p{
                position: absolute;
                font-size: 14px;
                top:38px;
                right:40px;
            }
        }
    }
    .switch-enter-active, .switch-leave-active{
		max-height: 1000px;
		transition: all .4s ease;
	}
	.switch-enter, .switch-leave-to {
		opacity: 0;
  		max-height: 0px;
	}
    .close{
        transition:all .35s ease;
    }
    .close:hover{
        transform:rotate(90deg)
    }
    .button{
        width:100%;
        margin:5px 0px;
        padding: 10px 0px;
        border:none;
    }
    .buttonCart{
        background:#fff;
        color:black;
        outline: 1px solid rgb(156, 156, 156);
    }
    .buttonCart:hover{
        background:#000;
        color:#fff;
    }
    .buttonCheck{
        background: #D14031;
        color:#fff;
    }
    .buttonCheck:hover{
        background: rgb(136, 23, 10);
        color:#fff;
    }

    @keyframes Anime {
			0%{
				opacity: 0;
				transform:translateX(10px);
			};
			100%{
				opacity: 1;
			}

		}
    
</style>