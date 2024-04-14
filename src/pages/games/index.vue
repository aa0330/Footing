<template>
    <div id="app">
        <div ref="textPanel" class="textPanel">老虎机</div>
        <div class="panel">
            <div class="range">
                <ul ref="sevenFirst" id="sevenFirst" class="bar bar-one"></ul>
                <ul ref="sevenSecond" id="sevenSecond" class="bar bar-two"></ul>
                <ul ref="sevenThird" id="sevenThird" class="bar bar-three"></ul>
            </div>
        </div>
        <div class="startBtn">开始</div>
    </div>
    <div class="fireworks"><img src="./image/fireworks.png" /></div>
    <div class="fireworks"><img src="./image/fireworks.png" /></div>
    <div class="fireworks"><img src="./image/fireworks.png" /></div>
    <input type="hidden" id="random1" />
    <input type="hidden" id="random2" />
    <input type="hidden" id="random3" />
</template>

<script setup>
import { ref, reactive,onMounted} from 'vue'

// 设置变量用于存储
const imgUrls = [
    "./image/point-1.png",
    "./image/point-2.png",
    "./image/point-3.png",
    "./image/point-4.png",
    "./image/point-5.png",
    "./image/point-6.png",
    "./image/point-7.png"
]
const textPanel = ref()
const sevenFirst = ref()
const sevenSecond = ref()
const sevenThird = ref()


// 获取DOM元素对象
// const sevenFirst = document.getElementById("sevenFirst"); 
// const sevenSecond = document.getElementById("sevenSecond");
// const sevenThird = document.getElementById("sevenThird"); 
const random1 = document.getElementById("random1");
const random2 = document.getElementById("random2");
const random3 = document.getElementById("random3");
const startBtn = document.querySelector(".startBtn"); // 开始按钮
// const textPanel = document.querySelector(".textPanel"); // 中奖文字框

class Game {
    constructor() {
        this.images = imgUrls
        // 第一栏水果数量
        this.FirstRandom = 40;
        this.SecondRandom = this.FirstRandom + 2;
        this.ThirdRandom = this.SecondRandom + 2;
        // 每一张水果图片高度
        this.heightPic = 271;
        this.Generate();
    }
    // 生成三列水果排列
    Generate() {
        let randomNum = 0;
        // 第一列
        for (let i = 0; i < this.FirstRandom; i++) {
            randomNum = this.Random(0, this.images.length);
            let path = this.images[randomNum];
            let tmp = path.split("-");
            let num = tmp[1].replace(".png", "");
            sevenFirst.innerHTML +=
                '<li class="item" data-point="' +
                num +
                '"><img src="' +
                path +
                '"></li>';
        }
        sevenFirst.vlaue.style.height = this.heightPic * this.FirstRandom + "px";
        sevenFirst.value.style.marginTop =
            -(this.heightPic * this.FirstRandom - this.heightPic) + "px";
        // 第二列
        for (let i = 0; i < this.SecondRandom; i++) {
            randomNum = this.Random(0, this.images.length);
            let path = this.images[randomNum];
            let tmp = path.split("-");
            let num = tmp[1].replace(".png", "");
            sevenSecond.innerHTML +=
                '<li class="item" data-point="' +
                num +
                '"><img src="' +
                path +
                '"></li>';
        }
        sevenSecond.vlaue.style.height = this.heightPic * this.SecondRandom + "px";
        sevenSecond.vlaue.style.marginTop =
            -(this.heightPic * this.SecondRandom - this.heightPic) + "px";
        // 第三列
        for (let i = 0; i < this.ThirdRandom; i++) {
            randomNum = this.Random(0, this.images.length);
            let path = this.images[randomNum];
            let tmp = path.split("-");
            let num = tmp[1].replace(".png", "");
            sevenThird.innerHTML +=
                '<li class="item" data-point="' +
                num +
                '"><img src="' +
                path +
                '"></li>';
        }
        sevenThird.vlaue.style.height = this.heightPic * this.ThirdRandom + "px";
        sevenThird.vlaue.style.marginTop =
            -(this.heightPic * this.ThirdRandom - this.heightPic) + "px";
    }
    // 随机数
    Random(start, length) {
        return Math.floor(Math.random() * (length - start)) + start;
    }
    // 初始化页面内容
    Init() {
        sevenFirst.innerHTML = "";
        sevenSecond.innerHTML = "";
        sevenThird.innerHTML = "";
    }
    // 开始
    Spin() {
        this.Init();
        this.Generate();
        let random = this.Random(10, this.FirstRandom - 20);
        let r2 = random + 2;
        let r3 = random + 6;
        setTimeout(() => {
            sevenFirst.style.height = this.heightPic * random + this.heightPic + "px";
            sevenFirst.style.marginTop = -(this.heightPic * random) + "px";

            sevenSecond.style.height = this.heightPic * r2 + this.heightPic + "px";
            sevenSecond.style.marginTop = -(this.heightPic * r2) + "px";

            sevenThird.style.height = this.heightPic * r3 + this.heightPic + "px";
            sevenThird.style.marginTop = -(this.heightPic * r3) + "px";
        }, 1000);
        // 滚动动画
        sevenFirst.animate([{ marginTop: -this.heightPic * random + "px" }], {
            duration: random * 100,
        });
        sevenSecond.animate([{ marginTop: -this.heightPic * r2 + "px" }], {
            duration: r2 * 100,
        });
        sevenThird.animate([{ marginTop: -this.heightPic * r3 + "px" }], {
            duration: r3 * 100,
        });
        random1.value = random;
        random2.value = r2;
        random3.value = r3;
        this.GetResult(random + 1, r2 + 1, r3 + 1);
    }
    // GetResult 中奖结果函数，r1,r2,r3 为最后图片停留位置，以第一列为例，最终显示的元素是 sevenFirst 下的第 r 个 li 元素。
    GetResult(r1, r2, r3) {
        // TODO 待补充代码
        let a1 = sevenFirst.children[r1].getAttribute("data-point");
        let a2 = sevenSecond.children[r2].getAttribute("data-point");
        let a3 = sevenThird.children[r3].getAttribute("data-point");
        if (a1 === a2 && a2 === a3) {
            textPanel.textContent = "恭喜你，中奖了";
        } else {
            textPanel.textContent = "很遗憾，未中奖";
        }
    }
}
let game = new Game(); // 实例化
startBtn.addEventListener("click", () => {
    game = new Game();
    game.Spin();
});

</script>

<style scoped lang="less">
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    width: 100vw;
    height: 100vh;
    background-color: black;
    overflow: hidden;
}

#app {
    width: 762px;
    height: 496px;
    margin: 120px auto 0;
    background-color: blueviolet;
    border-radius: 5px;
}

.textPanel {
    width: 339px;
    height: 101px;
    line-height: 101px;
    margin: 0 auto;
    position: relative;
    text-align: center;
    color: white;
    letter-spacing: 2px;
    font-size: 30px;
    font-weight: bold;
}

.panel {
    background: url("../images/panel-bg.png") no-repeat center top;
    width: 641px;
    height: 300px;
    margin: 0 auto;
    position: relative;
}

.range {
    width: 615px;
    height: 271px;
    overflow: hidden;
    margin: 0 auto;
    position: relative;
    top: 14px;
}

.range::before {
    position: absolute;
    display: block;
    content: "";
    background: url("../images/panel-front.png") no-repeat center top;
    width: 613px;
    height: 271px;
    top: 0;
    left: 1px;
    z-index: 1;
}

.bar {
    list-style: none;
    position: relative;
    float: left;
}

.bar li {
    padding: 0;
    box-sizing: border-box;
    width: 203px;
    height: 271px;
    margin: 0 1px;
}

.startBtn {
    width: 150px;
    height: 40px;
    line-height: 40px;
    border-radius: 10px;
    text-align: center;
    color: white;
    background-color: red;
    margin: 26px auto;
}

.startBtn:hover {
    cursor: pointer;
}

.startBtn:active {
    cursor: pointer;
    background-color: darkred;
}

.fireworks {
    position: absolute;
    transform: scale(0);
    z-index: -1;
}

.f1 {
    top: -20px;
    left: 10%;
    animation: fireworks 3s 0.5s;
}

.f2 {
    top: -10px;
    right: 10%;
    animation: fireworks 3s 0.25s;
}

.f3 {
    left: 30%;
    top: -150px;
    animation: fireworks 3s;
}

@keyframes fireworks {
    0% {
        transform: scale(0);
    }

    80% {
        transform: scale(1);
    }

    100% {
        opacity: 0;
    }
}
</style>
