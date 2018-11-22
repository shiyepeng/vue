<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  import home from "./components/home"
  import buytickets from "./components/buytickets"
  import mall from "./components/mall"
  import found from "./components/found"

export default {
  name: 'App',
  data(){
    return {
     
    }
  },
  computed:{

  },
  watch:{

  },
  components:{
   home:home,
   buytickets:buytickets,
   mall:mall,
   found:found
  },
  methods:{
    handleClick(){

    }
  }
}


</script>

<style>

</style>
