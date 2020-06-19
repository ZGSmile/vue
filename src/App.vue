<template>
  <div>
     <shineHeader :sellers="sellers"></shineHeader>
    <div class="tabView">
      <div class="tab-item">
        <router-link class="tabitem_link" to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link class="tabitem_link" to="/ratings">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link class="tabitem_link" to="/seller">商家</router-link>
      </div>
    </div>
    <router-view/>
  </div>
</template>
<script>
import shineHeader from './components/header/shineHeader'
// const err_ok = 0
export default {
  name: 'App',
  components: {
    shineHeader
  },
  data() {
    return {
      sellers: {}
    }
  },
  created() {
    // GET /someUrl '
  this.$http.get('../../static/data.json').then(response => {
    // get body data
    this.sellers = response.body.seller
    console.log(this.sellers)
  }, response => {
    // error callback
  })
  }
}

</script>
<style>
.tabView{
  display: flex;
  width: 100%;
  height: 40px;
  line-height: 40px;
  background: whitesmoke;
}
.tab-item{
  flex: 1;
  text-align: center;
}
 .tabitem_link{
    display: block;
    text-decoration: none;
    color: #434343;
  }
  .active{
    color: orange;
  }
</style>
