<template>
  <div id="app">
    <m-header></m-header>
    <tab></tab>
    <keep-alive>
      <router-view/>
    </keep-alive>
    <player></player>
  </div>
</template>

<script>

  import MHeader from 'components/m-header/m-header'
  import Tab from 'components/tab/tab'
  import Player from 'components/player/player'  
  
  export default {
    components: {
      MHeader,
      Tab,
      Player
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  // @import "~common/stylus/variable"  
 
  // #app 
  //   width: 640px;
  //   max-width: 640px;
  //   min-width: 640px;
  //   position: relative;
  //   background: $color-background  

</style>
