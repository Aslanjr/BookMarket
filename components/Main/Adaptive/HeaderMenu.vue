<template>
    <div class="Menu">
        <div class="container-fluid">
            <div class="row justify-content-between align-items-center">
                <div class="col-sm-1">
                    <img  src="https://chapterone.qodeinteractive.com/wp-content/uploads/2019/08/logo.png" height="48" alt="">
                </div>
                <div class="col-sm-1 text-right">
                    <img class="menuIcon" src="/Icons/open-menu.png" @click="menu = !menu" height="20" alt="">
                </div>
            </div>
            <transition name="switch">
                <div class="row  justify-content-center mt-5 dropdown" v-if="menu">
                    <div class="Home col-sm-11 d-flex flex-column justify-content-between">
                        <div class="Home d-flex flex-column" v-for="(item,index) in menuList" :key="index">
                            <div class="col-sm-12 d-flex justify-content-between" @click="showDrop(item.title)">
                                <div >
                                    <p>{{item.title}}</p>
                                </div>
                                <div>
                                    <img src="/Icons/down-arrow.png" height="11" alt="">
                                </div>
                            </div>
                                <div class="dropdown__content" :style="item.showTitle" >
                                    <div class="d-flex flex-column dropdown__content__title">
                                        <div v-for="(item,index) in item.dropitems"  :key="index" @click="showItemDrop(item.title)">
                                            <p><nuxt-link :to="item.route">{{item.title}}</nuxt-link></p>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </transition>
        </div>
    </div>
</template>
<script>
export default {
    name:"Menu",
    data:()=>{
        return{
            menu:false,
			menuList:[
				{
                    title:'Home',
                    showTitle:'display:none',
                    dropitems:[
                        {
                            title:'Main Home',
                            route:'/'
                        },
                        {
                            title:'Restselling Author',
                            route:'/Authors'
                        },
                        {
                            title:'Audiobook Home',
                            route:'/Audiobook'
                        },
                        {
                            title:'Children\'s Books',
                            route:'/Childrens'
                        },
                        {
                            title:'Left menu Home',
                            route:'/LeftMenu'
                        },
                        {
                            title:'Grid Home',
                            route:'/Grid'
                        },
                        {
                            title:'Landing',
                            route:'/landing'
                        },
                    ],
				},
				{
                    title:'Pages',
                    showTitle:'display:none',
                    dropitems:[
                        {
                            title:'About me',
                            route:'/About/AboutMe'
                        },
                        {
                            title:'About Us',
                            route:'/About/AboutUs'
                        },
                        {
                            title:'Our Events',
                            route:'/OurEvents'
                        },
                        {
                            title:'Our Premises',
                            route:'/OurPremises'
                        },
                        {
                            title:'Comming Soon',
                            route:'/CommingSoon'
                        },
                        {
                            title:'Order Page',
                            route:'/OrderPage'
                        },
                        {
                            title:'Contact Us',
                            route:'/ContactUs'
                        },
                        {
                            title:'Pricing Options',
                            route:'/Pricing'
                        },
                        {
                            title:'FAQ Page',
                            route:'/FAQ'
                        },
                        {
                            title:'404 Error Page',
                            route:'/Error'
                        },
                    ],
				},
				{
                    title:'Events',
                    showTitle:'display:none',
                    dropitems:[
                        {
                            title:'Event Dates',
                            route:'/EventDates'
                        },
                        {
                            title:'Event Single',
                            route:'/EventSingle'
                        }
                    ],
				},
				{
                    title:'Blog',
                    showTitle:'display:none',
                    dropitems:[
                        {
                            title:'Right SideBar',
                            route:'/RightSideBar',
                        },
                        {
                            title:'Left SideBar',
                            route:'LeftSideBar',
                        },
                        {
                            title:'No SideBar',
                            route:'/NoSideBar',
                        },
                        {
                            title:'Blog Singles',
                            route:'/BlogSingles',
                        },
                    ],
				},
				{
                    title:'Shop',
                    showTitle:'display:none',
                    dropitems:[
                        {
                            title:'Product List',
                            route:'/ProductList'
                        },
                        {
                            title:'Product Singles',
                            route:'/ProductSingles'
                        },
                        {
                            title:'Layouts',
                            route:'/Layouts'
                        },
                        {
                            title:'Pages',
                            route:'/Pages'
                        },
                    ],
				},
            ],
            
        }
    },
    methods:{
        showDrop(value){
                    switch(value){
                        case 'Home':
                            this.menuList[0].showTitle == 'display:none'?
                            this.menuList[0].showTitle = 'display:flex':
                            this.menuList[0].showTitle = 'display:none';
                            break;
                        case 'Pages':
                            this.menuList[1].showTitle == 'display:none'?
                            this.menuList[1].showTitle = 'display:flex':
                            this.menuList[1].showTitle = 'display:none';
                            break;
                        case 'Events':
                            this.menuList[2].showTitle == 'display:none'?
                            this.menuList[2].showTitle = 'display:flex':
                            this.menuList[2].showTitle = 'display:none';
                            break;
                        case 'Blog':
                            this.menuList[3].showTitle == 'display:none'?
                            this.menuList[3].showTitle = 'display:flex':
                            this.menuList[3].showTitle = 'display:none';
                            break;
                        case 'Shop':
                            this.menuList[4].showTitle == 'display:none'?
                            this.menuList[4].showTitle = 'display:flex':
                            this.menuList[4].showTitle = 'display:none';
                            break;
                        default:
                            console.log('Error');
                            break;
                    }
        },
        showItemDrop(value){
                    if(value == 'Blog Singles'){
                        this.menuList[0].showTitle == 'display:none'?
                        this.menuList[0].showTitle = 'display:flex':
                        this.menuList[0].showTitle = 'display:none';
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
		HomeDrops(){
            return `display:${this.hidden}`
        },
        PageDrops(){
            return `display:${this.hidden}`
        }
	},
}
</script>
<style lang="scss" scoped>
    .Menu{
        padding:4% 5%;
        .dropdown{
            z-index: 10;
            padding: 2% 2%;
            font-family: 'Cormorant Garamond', serif;
            position: absolute;
            width: 100%;
            background:#fff;
            left:0;
            top:50px;
            max-height:250px;
            overflow: scroll;
            .dropdown__content{
                position: relative;
                padding:0% 3%;
                animation: Anime .65s ease;
                font-size: 17px;
                .dropdown__content__title{
                    width:100%;
                    a{
                        text-decoration: none;
                        color: #000;    
                        font-size: 14px;
                        @media screen and (max-width:754px){
                            font-size: 14px;
                        }
                    } 
                    @media screen and (max-width:754px){
                        padding:0% 7%;
                    }
                }
                
            }
        @media screen and (max-width:754px){
            width:110%;
            top:30px;
        }
        }
        @media screen and(max-width:576px) {
            .menuIcon{
                position: absolute;
                top:-20px;
                left: 85%;
            }
        }
        
    }
    .switch-enter-active{
        animation: Show .5s ease;
    }	
    .switch-leave-active{
        animation: Close .5s ease reverse;
    }
    @keyframes Anime {
        0%{
            opacity: 0;
            transform: translateY(40px);
        };
        100%{
            opacity: 1;
        }
    }
    @keyframes Show {
        0%{
            opacity: 0;
            transform: translateY(100px);
        };
        100%{
            opacity: 1;
        }
    }
    @keyframes Close {
        0%{
            opacity: 0;
            transform: translateX(100px);
        };
        100%{
            opacity: 1;
        }
    }
</style>