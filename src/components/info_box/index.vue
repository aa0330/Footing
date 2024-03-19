<!-- 
    提供： 可自选imgUrl 、errorImg 
            通过img_container的css进行修改样式

    原则：复用性、适应性

    需求分析；  
        图片区 + 内容区的一个box

        图片区：
            1、图片大小控制
            2、统一的兜底图
            3、 图片地址
            4、图片是否要+标签
            5、兜底图的替换

        内容区：

    解决方案：
        1、图片大小控制--提供css去修改
        2、统一的兜底图------提供默认兜底图、也提供传入兜底图

 -->

<template>
    <div class="content">
        <div class="card">
            <div class="show-wrapper">
                <div class="pic-wrapper">
                    <img :src="imgUrl_1" alt="">
                </div>
                <h2 class="title">{{ title || itemData.title || '标题' }}</h2>
                <div class="show-info">
                    <div class="show-info-item">
                        <svg t="1690023375234" class="icon love-icon" viewBox="0 0 1024 1024" version="1.1"
                            xmlns="http://www.w3.org/2000/svg" p-id="1642" width="128" height="128">
                            <path
                                d="M895.36 243.904a251.52 251.52 0 0 0-355.776 0l-20.096 20.096-20.096-20.096A251.52 251.52 0 0 0 143.616 599.68S466.24 926.72 512 928c14.336 0.384 86.4-59.52 164.224-128.192l-0.512-0.64a22.016 22.016 0 0 0-11.968-40.896 21.76 21.76 0 0 0-14.784 5.888l-0.064-0.064 62.336-56.832a22.08 22.08 0 0 0-7.808 16.704 22.4 22.4 0 0 0 22.4 22.464c5.44 0 10.24-2.176 14.208-5.44l0.256 0.32 50.048-45.76-0.448-0.448a22.08 22.08 0 0 0-16.768-36.992 21.952 21.952 0 0 0-14.656 5.824l80.384-73.472 0.512 0.512a22.08 22.08 0 0 0-5.696 14.592 22.4 22.4 0 0 0 22.4 22.464 22.016 22.016 0 0 0 14.272-5.504l0.32 0.384 24.832-23.168a251.776 251.776 0 0 0-0.128-355.84z"
                                fill="" p-id="1643"></path>
                            <path
                                d="M510.976 878.656c-51.008-33.344-207.168-180.416-335.488-310.528a206.976 206.976 0 0 1-0.192-292.544c39.04-39.104 91.008-60.608 146.24-60.608s107.136 21.504 146.176 60.544l51.84 51.84 51.84-51.776c39.04-39.04 90.944-60.544 146.176-60.544s107.2 21.504 146.176 60.544c39.04 39.04 60.544 90.944 60.544 146.24s-21.504 107.136-60.544 146.176c-140.096 131.776-301.76 276.032-352.768 310.656z"
                                fill="#FF5F5F" p-id="1644"></path>
                            <path
                                d="M308.032 641.984a15.872 15.872 0 0 1-10.112-3.648 757.12 757.12 0 0 1-53.504-48.896 875.968 875.968 0 0 0-25.856-24.64C141.376 495.488 145.344 423.616 145.536 420.544 143.808 318.976 237.376 264.64 241.344 262.4a16 16 0 0 1 15.808 27.84c-0.832 0.448-81.088 47.488-79.744 131.2-0.064 3.648-2.368 61.248 62.528 119.552 8.704 7.808 17.536 16.448 26.816 25.536 15.616 15.36 31.808 31.168 51.328 47.104a15.936 15.936 0 1 1-10.048 28.352zM422.656 751.36a15.872 15.872 0 0 1-11.2-4.544l-61.312-60.032a16 16 0 1 1 22.4-22.912l61.312 60.032a16 16 0 0 1-11.2 27.456z"
                                fill="#FFFFFF" p-id="1645"></path>
                        </svg>
                        132k
                    </div>
                    <div class="show-info-item">
                        <svg t="1690023393353" class="icon Watch-icon" viewBox="0 0 1024 1024" version="1.1"
                            xmlns="http://www.w3.org/2000/svg" p-id="1798" width="128" height="128">
                            <path
                                d="M512 853.333333c-263.9872 0-477.866667-284.672-477.866667-341.230933C34.133333 471.3472 248.0128 170.666667 512 170.666667c263.918933 0 477.866667 303.445333 477.866667 341.435733C989.7984 568.900267 775.850667 853.333333 512 853.333333z m-6.144-521.1136c-127.658667 0-276.5824 60.279467-276.5824 187.938134s148.8896 174.318933 276.548267 174.318933 279.005867-46.660267 279.005866-174.318933-151.3472-187.938133-279.005866-187.938134z m2.594133 93.7984a79.325867 79.325867 0 0 0 79.223467 79.291734c10.376533 0 19.968-2.1504 29.013333-5.563734 0.341333 3.6864 1.297067 7.202133 1.297067 11.0592a113.220267 113.220267 0 1 1-226.542933 0 113.322667 113.322667 0 0 1 113.220266-113.3568c3.1744 0 6.178133 0.7168 9.216 0.989867-3.345067 8.6016-5.4272 17.749333-5.4272 27.579733z"
                                fill="#85C2FF" p-id="1799"></path>
                        </svg>
                        12k
                    </div>
                </div>
            </div>
            <div class="hover-wrapper">
                <div class="hover-info">
                    <div class="info-item">
                        <span>13k</span>
                        <span class="info-item-title">Loveing</span>
                    </div>
                    <div class="line"></div>
                    <div class="info-item">
                        <span>14k</span>
                        <span class="info-item-title">Watching</span>
                    </div>
                </div>
                <button class="btn">See More</button>
            </div>
            <div class="background"></div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { DefaultImgUrl } from '@/store/public_data/index.js'

let { itemData, errorImg, imgurl, title } = defineProps(['itemData', 'errorImg', 'imgurl', 'title']);
let imgUrl_1 = ref(imgurl || itemData.imgurl || DefaultImgUrl)

</script>

<style scoped lang="less">
.content {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}

.content .card {
    position: relative;
}

.content .card .show-wrapper {
    z-index: 10;
    transition: 0.4s;
}

.content .card .show-wrapper .pic-wrapper {
    width: 200px;
    height: 200px;
    transition: 0.4s;
}

.content .card .show-wrapper .pic-wrapper img {
    width: 100%;
    height: 100%;
    border-radius: 20px;
}

.content .card .show-wrapper .title {
    margin: 10px 0;
}

.content .card .show-wrapper .show-info {
    display: flex;
    flex-direction: row;
    color: #cccccc;
    justify-content: space-between;
}

.content .card .show-wrapper .show-info .show-info-item svg {
    width: 30px;
    height: 30px;
    vertical-align: middle;
}

.content .card .hover-wrapper {
    display: none;
    position: relative;
    flex-direction: column;
    align-items: center;
    opacity: 1;
    transition: 0.5s;
}

.content .card .hover-wrapper .hover-info {
    display: flex;
    flex-direction: row;
    justify-content: center;
    height: 100%;
    font-size: 2vw;
}

.content .card .hover-wrapper .hover-info .info-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.content .card .hover-wrapper .hover-info .info-item .info-item-title {
    font-size: 0.8vw;
    color: #cccccc;
}

.content .card .hover-wrapper .hover-info .line {
    width: 2px;
    height: 4vh;
    margin: 0 1vw;
    background: #cccccc;
}

.content .card .hover-wrapper .btn {
    width: 90%;
    height: 40px;
    margin-top: 2vh;
    border-radius: 50px;
    background-color: rgb(67, 119, 216);
    border: 0;
    font-size: 1vw;
    cursor: pointer;
    color: #fff;
}

.content .card .background {
    background-color: #fff;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 20px;
    z-index: -1;
    transition: 0.5s;
    transform: scale(0.2, 0.9);
    opacity: 0;
    height: 80%;
    box-shadow: 0px 10px 32px 1px rgb(221, 219, 219);
    background-image: linear-gradient(rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.7) 20%, rgb(255, 255, 255) 60%, rgb(255, 255, 255) 100%), url(./asset/bg.png);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top;
}

.content .card:hover .show-wrapper {
    transform: translateY(-25%);
}

.content .card:hover .show-wrapper .pic-wrapper {
    transform: scale(0.7);
}

.content .card:hover .show-wrapper .title {
    animation: nameAmt 0.5s ease-in-out forwards;
}

.content .card:hover .show-wrapper .show-info {
    opacity: 0;
}

.content .card:hover .hover-wrapper {
    animation: hoverWrapperAmt 0.5s ease-in-out forwards;
    display: flex;
    transform: translateY(-100%);
}

.content .card:hover .background {
    opacity: 1;
    transform: scale(1.1);
}

@keyframes nameAmt {
    0% {
        opacity: 0;
        text-align: center;
    }

    100% {
        opacity: 1;
        text-align: center;
        transform: translateY(-55%);
    }
}

@keyframes hoverWrapperAmt {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}

</style>
