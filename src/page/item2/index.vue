<template>
  	<div>
    	<itemcontainer father-component="item2"></itemcontainer> 
  	</div>
</template>

<script>
import itemcontainer from '../../components/itemcontainer'

export default {
	  name: 'item2',
  	components: {
   		itemcontainer //注册组件
  	},
  	created(){
  		this.$store.commit('REMBER_TIME'); //子组件访问store 用$store  访问store中的'REMBER_TIME'FANGAF
  	},
    data: function() {
       return {
      searchQuery : '',
      
     }
    }
}

</script>

<style lang="less">
    

</style>
