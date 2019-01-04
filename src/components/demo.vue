<template>
    <div>
        <p v-html="html"></p>
    </div>
</template>



<script>
    export default {
        data(){
            return{
                html: '123'
            }
        },        
    }
</script>