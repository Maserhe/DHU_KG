//引入echarts
import * as echarts from 'echarts'
//引入柱状图
// 引入提示框，标题，直角坐标系，数据集，内置数据转换器组件，组件后缀都为 Component
import {
    title,
    tooltip,
  } from 'echarts/lib/component'
  // 标签自动布局、全局过渡动画等特性
// 引入 Canvas 渲染器，注意引入 CanvasRenderer 或者 SVGRenderer 是必须的一步
// 注册必须的组件
echarts.use([
    title,
    tooltip,
]);
export default echarts