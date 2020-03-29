<template>
  <div class="Main">
    <Header/> 
    <addBook v-if="show" />
  </div>
</template>

<script>

 import Header from '~/components/Main/header.vue'
 import addBook from '~/components/Main/addBook.vue'

export default {
  name:'Main',
  data:()=>{
    return{
      show:false,
    }
  },
  created() {
			this.$store.dispatch("Books/loadData");
		},
  components:{
    Header,
    addBook,
  }
};
</script>

<style scoped lang="scss">
  
</style>

