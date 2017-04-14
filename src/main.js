
import Main from './main.vue'
import Vue from 'vue'

//引入组件并使用2个模块



var vm = new Vue({
  el: '#app',
  render: h => h(Main)
})

