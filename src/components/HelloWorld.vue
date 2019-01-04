<template>
  <div class="hello"> 
    <p v-html="html"></p>
    <button @click="foo">点击</button>
    <p ref="dom">123</p>       
  </div>
</template>

<script>
export default {  
  data () {
    return {      
      html: "<b style='color:red'>v-html</b>",
      res:''
    }
  },
  mounted(){
    console.log(this.$refs.dom)
  },
  methods:{
     foo(){
        console.log(this.$data)
     }
  } 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
