<template>
	<div>
		<div class="Header container-fuild">
			<div class="row align-items-center justify-content-between">
				<div class="Header__item d-flex align-items-center">
					<div class="Header__logo" >
						<nuxt-link to="/">
							<img src="https://chapterone.qodeinteractive.com/wp-content/uploads/2019/08/logo.png" height="64" alt="">
						</nuxt-link>
					</div>
					<div class="Header__item__menu d-flex align-items-center pl-5">
						<div class="menu__item d-flex"  v-for="(item,index) in menuList" :key="index" @click="showDrop(item.title)">
							{{item.title }}
							<div class="pl-2">
								<img src="https://www.flaticon.com/premium-icon/icons/svg/633/633317.svg" height="10" />
							</div>
						</div>
					</div>
				</div>
				<div class="Basket">
					<Basket/>
				</div>
			</div>
			<div class="Dropdown">
				<transition name="switch">
					<div class="Dropdown__item__home shadow-lg"  @click="showDrop('Home')" @mouseleave="closeDrop('Home')" v-if="HomeDrops">
						<div v-for="(item,index) in HomeDrop" class="mt-2 drop_item"  :key="index">
							<nuxt-link :to="item.route">{{item.title | upperCase}}</nuxt-link>
						</div>
					</div>
					<div class="Dropdown__item__pages shadow-lg"  @click="showDrop('Pages')" @mouseleave="closeDrop('Pages')" v-if="PagesDrops">
						<div v-for="(item,index) in PagesDrop" class="mt-2 drop_item"  :key="index">
							<nuxt-link :to="item.route">{{item.title | upperCase}}</nuxt-link>
						</div>
					</div>
					<div class="Dropdown__item__events shadow-lg"  @click="showDrop('Events')" @mouseleave="closeDrop('Events')" v-if="EventsDrops">
						<div v-for="(item,index) in EventsDrop" class="mt-2 drop_item"  :key="index">
							{{item.title | upperCase}}
						</div>
					</div>
					<div class="Dropdown__item__Blog shadow-lg"  @click="showDrop('Blog')" @mouseleave="closeDrop('Blog')" v-if="BlogDrops" >
						<div v-for="(item,index) in BlogDrop" class="mt-2 drop_item  d-flex" @click="showItemDrop(item.title)"  :key="index">
							{{item.title | upperCase}} <div class="rightArrow"><img  :src="item.img" /></div>
						</div>
						<transition name="switch">
							<div class="Dropdown__item__BlogSingle shadow-lg"  @click="showItemDrop('Blog Singles')" @mouseleave="closeItemDrop('Blog Singles')"  v-if="BlogSinglesDrops">
								<div v-for="(item,index) in BlogSinglesDrop" class="mt-2 drop_item  d-flex"  :key="index">
									{{item.title | upperCase}} 
								</div>
							</div>
						</transition>
					</div>
					<div class="Dropdown__item__Shop shadow-lg"  @click="showDrop('Shop')" @mouseleave="closeDrop('Shop')" v-if="ShopDrops" >
						<div v-for="(item,index) in ShopDrop" class="mt-2 drop_item  d-flex" @click="showItemDrop(item.title)"  :key="index">
							{{item.title | upperCase}} 
						</div>
						<transition name="switch">
							<div class="Dropdown__item__ProductSingle shadow-lg" @mouseleave="closeItemDrop('Product Singles')"  v-if="ProductSinglesDrops">
								<div v-for="(item,index) in ProductSinglesDrop" class="mt-2 drop_item  d-flex"  :key="index">
									{{item.title | upperCase}} 
								</div>
							</div>
							<div class="Dropdown__item__Layouts shadow-lg"  @mouseleave="closeItemDrop('Layouts')"  v-if="LayoutsDrops">
								<div v-for="(item,index) in LayoutsDrop" class="mt-2 drop_item  d-flex"  :key="index">
									{{item.title | upperCase}} 
								</div>
							</div>
							<div class="Dropdown__item__PagesItems shadow-lg"  @mouseleave="closeItemDrop('Pages')"  v-if="PagesItemsDrops">
								<div v-for="(item,index) in PagesItemsDrop" class="mt-2 drop_item  d-flex"  :key="index">
									{{item.title | upperCase}} 
								</div>
							</div>
						</transition>
					</div>
				</transition>
			</div>
		</div>
	</div>
</template>
<script>

import Basket from './Basket.vue'

	export default{
		name:'Header',
		data:()=>{
			return {
				HomeDrops:false,
				PagesDrops:false,
				EventsDrops:false,
				BlogDrops:false,
				ShopDrops:false,
				BlogSinglesDrops:false,
				ProductSinglesDrops:false,
				LayoutsDrops:false,
				PagesItemsDrops:false,
				menuList:[
					{
						title:'Home',
					},
					{
						title:'Pages',
					},
					{
						title:'Events',
					},
					{
						title:'Blog',
					},
					{
						title:'Shop',
					},
				]
			}
		},
		components:{
			Basket,
		},
		methods:{
			showDrop(value){
				switch(value){
					case 'Home':
						this.HomeDrops = true;
						break;
					case 'Pages':
						this.PagesDrops = true;
						break;
					case 'Events':
						this.EventsDrops = true;
						break;
					case 'Blog':
						this.BlogDrops = true;
						break;
					case 'Shop':
						this.ShopDrops = true;
						break;
					default:
						console.log('Error');
						break;
				}
			},
			closeDrop(value){
				switch(value){
					case 'Home':
						this.HomeDrops = false;
						break;
					case 'Pages':
						this.PagesDrops = false;
						break;
					case 'Events':
						this.EventsDrops = false;
						break;
					case 'Blog':
						this.BlogDrops = false;
						break;
					case 'Shop':
						this.ShopDrops = false;
						break;
					default:
						console.log('Error');
						break;
				}
			},
			showItemDrop(value){
				if(value == 'Blog Singles'){
					this.BlogSinglesDrops = true;
				}else if(value == 'Product Singles'){
					this.ProductSinglesDrops = true;
				}else if(value == 'Layouts'){
					this.LayoutsDrops = true;
				}else if(value == 'Pages'){
					this.PagesItemsDrops = true;
				}
				
			},
			closeItemDrop(value){
				if(value == 'Blog Singles'){
					this.BlogSinglesDrops = false;
				}else if(value == 'Product Singles'){
					this.ProductSinglesDrops = false;
				}else if(value == 'Layouts'){
					this.LayoutsDrops = false;
				}else if(value == 'Pages'){
					this.PagesItemsDrops = false;
				}
			}
		},
		filters:{
			upperCase(value){
				return value.toUpperCase();
			}
		},
		computed:{
			showBooks(){
				return this.$store.state.Books.AllBooks;
			},
			HomeDrop(){
				return this.$store.state.header.HomeDropDown;
			},
			PagesDrop(){
				return this.$store.state.header.PagesDropDown;
			},
			EventsDrop(){
				return this.$store.state.header.EventsDropDown;
			},
			BlogDrop(){
				return this.$store.state.header.BlogDropDown;
			},
			BlogSinglesDrop(){
				return this.$store.state.header.BlogSingles;
			},
			ShopDrop(){
				return this.$store.state.header.ShopDropDown;
			},
			ProductSinglesDrop(){
				return this.$store.state.header.ProductSingles;
			},
			LayoutsDrop(){
				return this.$store.state.header.Layouts;
			},
			PagesItemsDrop(){
				return this.$store.state.header.Pages;
			},
		},
	};
</script>
<style scoped lang="scss">
	a{
		text-decoration: none;
		color:#000;
		transition:all .45s ease;
	}
	a:hover{
		color:red;
	}
	.Header{
		padding: 2% 5%;
		color:#000;
		font-family: 'Cormorant Garamond', serif;
		.Header__item__menu{
			font-size: 21px;
			.menu__item{
				padding: 5% 3%;
				transition:all .3s ease;
				cursor: pointer;
				height:100%;
			}
			.menu__item:hover{
				color:red;
			}
		}
		.drop_item{
			animation:Anime 1s ease;
			transition:all .2s ease;
 		}
		.drop_item:hover{
			color:red;
		}
		.switch-enter-active, .switch-leave-active{
			max-height: 300px;
			transition: all .85s ease;
		}
		.switch-enter, .switch-leave-to {
			opacity: 0;
  			max-height: 0px;
		}
		// .switch-enter-active{
		// 	animation:Anime cubic-bezier(0.55, 0.055, 0.675, 0.19) ;
		// }
		// .switch-leave-active{
		// 	animation:Anime cubic-bezier(0.55, 0.055, 0.675, 0.19)  reverse;
		// }
		@keyframes Anime {
			0%{
				opacity: 0;
				transform:translateX(10px);
			};
			100%{
				opacity: 1;
			}

		}
		.Dropdown{
			font-family:"Josefin Sans", sans-serif;
			font-size: 11px;
			letter-spacing: .35em;
			z-index: 140;
			position: relative;
			line-height: 18px;
			.Dropdown__item__home{
				background:#fff;
				padding: 2% 4% 2% 2%;
				position:absolute;
				cursor: pointer;
				left:5%;
			}
			.Dropdown__item__pages{
				background:#fff;
				padding: 2% 4% 2% 2%;
				position:absolute;
				cursor: pointer;
				left:10%;
			}
			.Dropdown__item__events{
				background:#fff;
				padding: 2% 5% 2% 2%;
				position:absolute;
				cursor: pointer;
				left:15%;
			}
			.Dropdown__item__Blog{
				background:#fff;
				padding: 2% 1% 2% 2%;
				position:absolute;
				cursor: pointer;
				left:22%;
				.drop_item{
					.rightArrow{
						padding-left:60px;
						img{
							transform:rotate(-90deg);
							height:10px;
						}
					}
				}
			}
			.Dropdown__item__Shop{
				background:#fff;
				padding: 2% 4% 2% 2%;
				position:absolute;
				cursor: pointer;
				left:27%;
			}
			.Dropdown__item__BlogSingle{
				background:#fff;
				padding:10% 29% 10% 15%;	
				width:100%;
				position: absolute;
				text-align: left;
				cursor: pointer;
				left:100%;
				top:50%;
				
			}
			.Dropdown__item__ProductSingle{
				background:#fff;
				padding:10% 29% 10% 15%;	
				width:100%;
				position: absolute;
				text-align: left;
				cursor: pointer;
				left:100%;
				top:20%;
			}
			.Dropdown__item__Layouts{
				background:#fff;
				padding:10% 29% 10% 15%;	
				width:100%;
				position: absolute;
				text-align: left;
				cursor: pointer;
				left:100%;
				top:45%;
			}
			.Dropdown__item__PagesItems{
				background:#fff;
				padding:10% 29% 10% 15%;	
				width:100%;
				position: absolute;
				text-align: left;
				cursor: pointer;
				left:100%;
				top:65%;
			}
		}
		.Basket{
			padding:0% 5%;
		}
	}
	
</style>