<template>
    <h1>coumputed & router</h1>
    <div class="computed_box" style="margin-top: 20px; margin-left: 500px;">
        <div>
            <input placeholder="搜索" type="text">
        </div>

        <div style="margin-top: 30px;">

            <table border width="600" cellpadding="0" cellspacing="0">
                <thead>
                    <tr>每日休闲时长记录</tr>
                    <tr>
                        <th>游戏名称</th>
                        <th>游戏时长（min）</th>
                        <th>
                            次数
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in data" :key="item.index" v-show="item.isShow">
                        <td align="center">{{ item.name }}</td>
                        <td align="center">{{ item.duration }}</td>
                        <td align="center">
                            &nbsp;
                            <button @click="increment(item)">+</button>
                            {{ item.time }}
                            <button @click="decrement(item)">-</button>
                        </td>
                    </tr>
                    <tr>总计时长:{{ total }}h</tr>
                </tbody>
            </table>

        </div>
    </div>
    <hr>
    <button @click="changeRouter1" style="margin-left: 80px; border-color: aquamarine;">点击显示命名视图</button>
    <hr>
    <button @click="changeRouter2" style="margin-left: 80px">goBack</button>
    <button @click="() => { router.forward() }" style="margin-left: 80px">goforword</button>
    <hr>
    <div class="a_b">
        <router-view name="bigA" />
        <router-view />
        <router-view name="smalla" />
    </div>
    <p></p>

</template>

<script setup>
import { computed, reactive, readonly } from 'vue';
import { useRouter } from 'vue-router'

const router = useRouter()

let data = reactive([
    {
        'name': '云顶之弈',
        duration: 40,
        time: 3,
        isShow: true,
        index: '1'
    }, {
        'name': '无畏契约',
        duration: 10,
        time: 17,
        isShow: true,
        index: 2
    }, {
        'name': '部落冲突',
        duration: 10,
        time: 30,
        isShow: true,
        index: 3
    }, {
        'name': '抖音',
        duration: 60,
        time: 14,
        isShow: true,
        index: 4
    }
])

let total = computed(() => {
    let total_time = 0;
    data.forEach(item => {
        total_time += item.duration * item.time;
    })
    total_time = (total_time / 60).toFixed(2)
    if (total_time > 16 && total_time < 20) {
        alert('请注意身体')
    }
    else if (total_time < 23.5 && total_time >= 20) {
        alert('猝死边缘！！！')
    } else if (total_time > 24) {
        alert('你已经死了~')
        data = readonly(data)
        return 'NAN'
    }
    return total_time
})

function increment(item) {
    let { index } = item
    data.forEach(dataItem => {
        if (dataItem.index == index) {
            dataItem.time++;
        }
    })
}

function decrement(item) {
    let { index } = item
    data.forEach(dataItem => {
        if (dataItem.index == index) {
            if (dataItem.time > 0) {
                dataItem.time--;
                return
            }
            if (confirm('你想要删除这条数据吗？')) {
                dataItem.isShow = false
            }
        }
    })
}

function changeRouter1() {
    router.push('/mixtureA')
}
function changeRouter2() {
    console.log(router);
    router.go(-1)
}

</script>

<style scoped>
.computed_box {
    user-select: none;
}
</style>
