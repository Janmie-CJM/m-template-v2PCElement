//引入
import ToolJsoncode from '@/components/ToolJsoncode'

const plugins = {
   //注册
    install(Vue) {
        Vue.component('ToolJsoncode',ToolJsoncode); //第一个参数:组件名称,第二个参数:要注册的组件
    }
}
export default plugins;