<template>
    <div class="Basket d-flex">
        <div class="Basket__item d-flex align-items-end" @mouseenter="DropdownBasket = true">
            <span class="BasketCount">1</span>
            <img src="/Icons/add-to-cart.png" alt="">
            <span class="totalPrice ml-2">$15.00</span>
            <transition name="switch">
                <div class="DropdownBasket shadow-lg" @mouseenter="DropdownBasket = true" @mouseleave=" DropdownBasket = false" v-if="DropdownBasket">
                    <div class="non__Content" v-if="ItemBasket">
                        No products in the cart.
                    </div>
                    <div class="Basket__Content" v-if="BasketContent">
                        <div class="Basket__Content__items" v-for="(item,index) in showBasket" :key="index">
                            <img :src="item.Img" />
                            <span>{{item.Title}}</span>
                            <span>{{item.Amount}}</span>
                        </div>
                    </div>
                </div>
            </transition>
        </div>
        <div class="Basket__item">
           <div>
               <img src="/Icons/search.png" @click=" DropdownSearch = true" alt="">
           </div>
           <transition name="switch">
                <div class="DropdownSearch" v-if="DropdownSearch" @mouseleave="DropdownSearch = false">
                    <input type="text" v-model="search" placeholder="Search"> <p @click="Search">GO</p>
                </div>
           </transition>
        </div>
        <div class="Basket__item">
            <div>
               <img src="/Icons/open-menu.png" alt="">
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
            DropdownBasket:false,
            ItemBasket:true,
            BasketContent:false,
            DropdownSearch:false,
            search:'',
        }
    },
    computed: {
        showBasket(){
            return this.$store.state.Basket.AllBasket;
        },
        // checkBasket(){
        //     if(this.showBasket.length > 0){
        //         return this.ItemBasket = true;
        //     }else{
        //         return this.BasketContent = true;
        //     }
        // }
        // totalBasketPrice(){
        //     let TotalPrice = this.showBasket.reduce((sum,current)=>{
        //         return sum + current.Amount;
        //     });
        //     return TotalPrice;
        // },
    },
    methods:{
        Search(){
            console.log('Search');
        }
    }  

}
</script>
<style lang="scss" scoped>
    .Basket{
        font-family: 'Cormorant Garamond', serif;
        padding:0% 30%;
        .Basket__item{
            cursor: pointer;
            margin: 0% 7%;
            padding:0% 10% 0% 0%;
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
            padding: 2% 5% 2% 2%;
            position:absolute;
            cursor: pointer;
            top:83%;
            right:10%;
            font-size: 18px;
            .non__Content{
                animation:Anime 1s ease;
            }
            .Basket__Content{
                animation:Anime 1s ease;
            }
        }
        .DropdownSearch{
            background:#282828;
            font-family:"Josefin Sans", sans-serif;
            padding: 1% 2% 1% 2%;
            display: flex;
            position:absolute;
            cursor: pointer;
            top:83%;
            right:8%;
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
		max-height: 300px;
		transition: all 1s ease;
	}
	.switch-enter, .switch-leave-to {
		opacity: 0;
  		max-height: 0px;
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