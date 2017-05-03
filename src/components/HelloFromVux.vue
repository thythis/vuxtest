<template>
  <div>
    <inline-calendar
      class="inline-calendar-demo"
      :show.sync="show"
      v-model="value"
      start-date="2017-04-29"
      end-date="2017-05-30"
      :range="range"
      :show-last-month="showLastMonth"
      :show-next-month="showNextMonth"
      :highlight-weekend="highlightWeekend"
      :return-six-rows="return6Rows"
      :hide-header="hideHeader"
      :hide-week-list="hideWeekList"
      :replace-text-list="replaceTextList"
      :weeks-list="weeksList"
      :render-function="buildSlotFn"
      :disable-past="disablePast"
      :disable-future="disableFuture">
      </inline-calendar>

      <group>
        <cell title="current value" :value="value"></cell>
        <cell title="start date" value="2017-04-29"></cell>
        <cell title="end date" value="2017-05-30"></cell>
      </group>

  </div>
</template>

<script>
import { InlineCalendar, Group, Cell } from 'vux'

export default {
  components: {
    InlineCalendar,
    Group,
    Cell
  },
  data () {
    return {
      msg: 'Hello thysama!',
      show: true,
      value: '',
      listValue: '',
      range: false,
      showLastMonth: true,
      showNextMonth: true,
      highlightWeekend: true,
      return6Rows: true,
      hideHeader: false,
      hideWeekList: false,
      replaceTextList: {},
      replace: false,
      changeWeeksList: false,
      weeksList: ['日', '一', '二', '三', '四', '五', '六 '],
      useCustomFn: false,
      buildSlotFn: () => '',
      disablePast: false,
      disableFuture: false
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

.fade-enter-active, .fade-leave-active {
  transition: opacity .3s
}
.fade-enter, .fade-leave-to {
  opacity: 0
}

</style>
