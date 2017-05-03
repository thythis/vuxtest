<template>
	<div>
		<x-header :left-options="{showBack: false}" style="background-color:#4fc1e9;">thysama</x-header>
		<transition name="fade" mode="out-in">
			<router-view></router-view>
		</transition>
		<tabbar>
		  <tabbar-item selected  link="/home">
		  	<i slot="icon" class="iconfont icon-home"></i>
		    <span slot="label">home</span>
		  </tabbar-item>
		  <tabbar-item link="/Hello">
		  	<i slot="icon" class="iconfont icon-person"></i>
		    <span slot="label">hello</span>
		  </tabbar-item>
		</tabbar>
	</div>
</template>

<script>
import { XHeader, Tabbar, TabbarItem} from 'vux'

export default {
  components: {
  	XHeader,
    Tabbar,
    TabbarItem
  }
}
</script>

<style>
@import '../assets/css/iconfont.css';

</style>