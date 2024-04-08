/* 
    简短说一下pinia的用法：
        API:    
            # createPinia() 用于创建pinia实例，将pinia挂载到app
            # defineStore() 用于创建store实例 
            # storesToRef() 用于修复解构时会失去响应式
            # $reset() optionsApi可调用此方法进行store初始化 在option Api风格中生效, composition API中要自己去配置 $reset方法并同意返回
            # $patch() 用于修改state的值    
            # $subscribe()  当state的值发生变化时会触发对应的回调函数


        类型：
            options Store:
                # state

                # getters
                
                # actions

                # 支持使用$reset去初始化store对象

            composition Store ( setup语法糖 ):

                # ref()、active 相当于 state                

                # computed()    相当于  getters

                # function()    相当于  actions

        --注意点：
            解构的话会失去响应式，可以通过storesToRef
            actions 支持同步和异步 async  await
                    
            

    pinia持久化
        原因：
            使用全局状态管理时，页面刷新丢失数据状态，所以要避免该情况的发生

        作用：
            例如：游客数量的记录，访问次数

    使用插件 pinia-plugin-persistedstate

*/
import { createPinia } from "pinia";
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate)

export default pinia








