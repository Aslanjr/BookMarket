<template>
    <div class="Login">
        <div class="container-fluid">
            <div class="row justify-content-center  d-flex">
                <div class="LoginImg col-sm-6">
                    <img src="/Images/v211batch10-bb-101-phone.jpg" class="img-fuild" height="600"  alt="">
                </div>
                <form class="col-sm-6">
                    <h1 class="mb-5">Log In</h1>
                    <div class="form-row d-flex flex-column">
                        <div class="form-group col-sm-4">
                            <label for="Login">Login</label>
                            <input type="text" class="form-control" v-model="showLogin.Login" name="Login" id="Login">
                        </div>
                        <div class="form-group col-sm-4">
                            <label for="Password">Password</label>
                            <input type="password" name="Password" class="form-control" v-model="showLogin.password" id="password">
                        </div>
                    </div>
                    <div class="form-row mt-2 d-flex align-items-center">
                        <div class="form-group col-sm-5">
                            <button class="Button">Log In</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'Login',
    data:()=>{
        return{
            User:{
                Login:'',
                password:'',
            }
        }
    },
    methods: {
    },
    computed: {
        showLogin(){
            return this.User;
        },
    },
}
</script>
<style lang="scss" scoped>
 @import '~/assets/_variables.scss';   
    .Login{
        font-family: $font;
        padding: 4% 0%;
        a{
            text-decoration: none;
            transition:all .4s ease;
            color:#000;
        }
        a:hover{
            color:lightblue;
        }
        .Button{
            padding: 10px 50px;
            font-size: 17px;
            background: #fff;   
            transition: all .7s ease;
            text-transform: uppercase;
            letter-spacing: .02em;
            cursor: pointer;
            border:none;
            color:#000;
            outline: 1px solid rgb(158,158,158);
        }
        .Button:hover{
            background:#000;
            color:#fff;
        }
    }
</style>