<template>
  <div id="app"> 
    <router-view/>      
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld'
import demo from '@/components/demo'
export default {  
  data(){
    return {
       
    }
  },
  components:{    
    HelloWarld:HelloWorld,    
  }, 
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
