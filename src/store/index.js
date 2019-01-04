import Vue from 'vue'
import vuex from 'vuex'

Vue.use(vuex);

import heade from './heade'
import content from './content'

export default new vuex.Store({
    state: {
       count: 0,
       val:''
    },  
    modules: {
        Head: heade,
        Content: content
    } 
})