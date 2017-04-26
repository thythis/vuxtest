<template>
  <div>
    <div class="vux-demo">
      <img class="logo" src="../assets/vux_logo.png">
      <h1> {{msg}}</h1>
    </div>
    <group title="cell demo">
      <cell title="Vux" value="Cool" is-link></cell>
    </group>
    
    <tabbar>
      <tabbar-item link="/home">
        <span slot="label">home</span>
      </tabbar-item>
      <tabbar-item link="/Hello">
        <span slot="label">hello</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import { Group, Cell, Tabbar, TabbarItem} from 'vux'

export default {
  components: {
    Group,
    Cell,
    Tabbar,
    TabbarItem
  },
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello thysama!'
    }
  }
}
</script>

<style>
.vux-demo {
  text-align: center;
}
.logo {
  width: 100px;
  height: 100px
}
</style>
