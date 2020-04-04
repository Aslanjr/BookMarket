<template>
    <div class="Registr">
        <div class="container-fluid">
            <div class="row justify-content-center  d-flex">
                <div class="LoginImg col-sm-6">
                    <img src="/Images/v211batch11-nunoon-31-people.jpg" class="img-fuild" height="600"  alt="">
                </div>
                <form class="col-sm-6">
                    <h1 class="mb-5">Create Account</h1>
                    <div class="form-row d-flex flex-column">
                        <div class="form-group col-sm-4">
                            <label for="Login">Login</label>
                            <input type="text" class="form-control" v-model="showLogin.Login" name="Login" id="Login">
                        </div>
                        <div class="form-group col-sm-4">
                            <label for="Password">Password</label>
                            <input type="password" name="Password" class="form-control" v-model="showLogin.Password" id="password">
                        </div>
                        <div class="form-group col-sm-4">
                            <label for="Email">Email</label>
                            <input type="Email" name="Email" class="form-control" v-model="showLogin.Email" id="Email">
                        </div>
                    </div>
                    <div class="form-row mt-2 d-flex align-items-center">
                        <div class="form-group col-sm-5">
                            <button class="Button" @click="Create">Create</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
import Axios from 'axios';
export default {
    name:'Registr',
    data:()=>{
        return{
            User:{
                Login:'',
                Password:'',
                Email:'',
                check:false
            }
        }
    },
    methods: {
        Create(){
            Axios
                .post('http://localhost:4000/Auth/Registr',{
                    Login:this.User.Login,
                    Password:this.User.Password,
                    Email:this.User.Email,
                })
                .then(()=>{
                    this.check = true;
                });
            
        }
    },
    computed: {
        showLogin(){
            return this.User;
        },
        
    },
    middleware ({ store, redirect }) {
        if (!store.state.authenticated) {
            return redirect('/Auth/Login')
            }
    }
}
</script>
<style lang="scss" scoped>
 @import '~/assets/_variables.scss';   
    .Registr{
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