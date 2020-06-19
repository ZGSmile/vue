<template>
    <div class="shineHeader">
       <div class="content-wrapper">
         <div class="avatar">
           <img width="64" height="64" :src="sellers.avatar" alt="">
         </div>
         <div class="content">
           <div class="title">
             <span class="brand">{{sellers.brand}}</span>
             <span class="name">{{sellers.name}}</span>
         </div>
         <div class="description">{{sellers.description}}/{{sellers.deliveryTime}}分钟送达</div>
           <div v-if="sellers.supports" class="support">
             <span class="icon">{{sellers.brand}}</span>
             <span class="text">{{sellers.supports[0].description}}</span>
           </div>
         </div>
        </div>
    </div>
</template>
<script>
export default {
  props: {
    sellers: {
      type: Object
    }
  },
  data () {
    return {
      msg: 'shine-Header'
    }
  }
}
</script>
<style>
.shineHeader{
  color: #fff;
  background: grey;
}
.content-wrapper{
  padding: 24px 12px 18px;
}
.avatar{
  display: inline-block;
}
.content{
   display: inline-block;
}
</style>
