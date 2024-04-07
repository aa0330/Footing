import { ref, reactive, computed } from 'vue'
import { defineStore } from "pinia";
import { Names } from './store-name';

const Login = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                name: 'userName',
                password: '123'
            })
        }, 2000)
    })
}

// setup语法糖模式可以写成  组合式API的形式,其中响应式数据相当于 state 、computed计算属性相当于 getter方法、 function函数相当于action,都会自动转换

export const useCounterState = defineStore(Names.COUNTER, () => {
    let count = ref(0)
    let info = reactive({
        name: '花未闻',
        user: '王池',
        password: '2'
    })

    let infoAd = computed(() => {
        return info.name + '----' + info.user
    })

    async function setUser() {
        const data = await Login()
        this.info.name = data.name
    }

    return { count, info, infoAd, setUser }
},
    {
        storage: localStorage,
        paths: ['counterState']
    }
)








