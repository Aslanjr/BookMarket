<template>
    <div>
        <div class="container">
            <div class="row justify-content-center text-center">
                <form class="form shadow-lg mt-2 p-5 rounded-lg"> 
                <h1 class="text-center mt-3 mb-5">Новая Книга</h1>
                    <div class="form-row d-flex">
                        <div class="form-group col-md-6 col-sm-6">
                             <label for="name">Название Книги</label>
                             <input type="text" class="form-control" v-model="showBook.title">   
                        </div>
                        <div class="form-group col-md-6 col-sm-6">
                             <label for="year">Год Выпуска</label>
                             <input type="number" class="form-control" v-model="showBook.year">   
                        </div>
                    </div>
                    <div class="form-row d-flex">
                        <div class="form-group col-md-6 col-sm-6">
                             <label for="author">Автор</label>
                             <input type="text" class="form-control" v-model="showBook.author">   
                        </div>
                        <div class="form-group col-md-6 col-sm-6">
                             <label for="tag">Теги</label>
                             <input type="text" class="form-control" v-model="showBook.tag">   
                        </div>
                    </div>
                    <div class="form-row d-flex">
                        <div class="form-group col-md-6 col-sm-6">
                             <label for="category">Категории</label>
                             <input type="text" class="form-control" v-model="showBook.category">   
                        </div>
                        <div class="form-group col-md-6 col-sm-6">
                             <label for="description">Описание</label>
                             <input type="text" class="form-control" v-model="showBook.description">   
                        </div>
                    </div>
                    <div class="form-row d-flex">
                        <div class="form-group col-md-6 col-sm-6">
                             <label for="dimensions">Размеры</label>
                             <input type="text" class="form-control" v-model="showBook.dimensions">   
                        </div>
                        <div class="form-group col-md-6 col-sm-6">
                             <label for="amount">Цена</label>
                             <input type="number" class="form-control" v-model="showBook.amount">   
                        </div>
                    </div>
                    <div class="form-row d-flex">
                        <div class="form-group col-md-6 col-sm-6">
                             <label for="type">Тип Книги</label>
                             <input type="text" class="form-control" v-model="showBook.type">   
                        </div>
                        <div class="form-group col-md-6 col-sm-6">
                             <label for="weight">Вес</label>
                             <input type="number" min="0" class="form-control" v-model="showBook.weight">   
                        </div>
                    </div>
                    <div class="form-group col-md-12 col-sm-12">
                             <label for="photo">Фотография</label>
                             <input type="text" min="0" class="form-control" v-model="showBook.photo">   
                        </div>
                    <div class="form-group col-md-12 col-sm-12">
                        <button class="btn btn-success" @click="addBook">Добавить</button>
                    </div>
                </form>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-md-12 col-sm-12 text-center" v-for="(item,index) in showBooks" :key="index">
                    <img :src="item.Img" height="600" class="rounded-pill" width="450" alt="">
                    <h2>Название:{{item.Title}}</h2>
                    <h2>Вес:{{item.Weight}}</h2>
                    <h2>Размеры:{{item.Dimensions}}</h2>
                    <h2>Тип Книги:{{item.BookType}}</h2>
                    <h2>Год выпуска:{{item.Year}}</h2>
                    <h2>Автор:{{item.Author}}</h2>
                    <h2>Описание:{{item.Description}}</h2>
                    <h2>Цена:{{item.Amount}}</h2>
                    <h2>Категории:{{item.Categories}}</h2>
                    <h2>Теги:{{item.Tags}}</h2>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

import axios from 'axios'

export default {
    name:'Book',
    data:()=>{
        return{
            Books:[],
            Book:{
                title:'',
                year:'',
                author:'',
                tag:'',
                category:'',
                description:'',
                dimensions:'',
                amount:'',
                type:'',
                weight:'',
                photo:''
            }
        }
    },
    computed:{
        showBook(){
            return this.Book;
        },
        showBooks(){
            return this.Books;
        },
    },
    methods: {
        addBook(){
            axios
                .post('http://localhost:4000/api/Books',{
                    title:this.Book.title,
                    year:this.Book.year,
                    author:this.Book.author,
                    tag:this.Book.tag,
                    category:this.Book.category,
                    description:this.Book.description,
                    dimensions:this.Book.dimensions,
                    amount:this.Book.amount,
                    type:this.Book.type,
                    weight:this.Book.weight,
                    photo:this.Book.photo
                })
                .then(response =>{
                    console.log(this.Books);
                })
            console.log('worked')
        }
    },
    mounted() {
        axios
            .get('http://localhost:4000/api/Books')
            .then(response=>{
                this.Books = response.data;
            })
    },
}
</script>
<style lang="scss" scoped>
    .form{
        width:65%;
    }
</style>