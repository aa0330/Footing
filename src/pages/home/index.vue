<template>
  <div class="cf_home_container" :style="{ backgroundImage: `url(${bgImg})` }">
    <div class="cf_navigation_bar">
      <svg class="cf_bar_logo" aria-hidden="true" @click="changLogo">
        <use :xlink:href="logoName"></use>
      </svg>
      <nav>
        <ul>
          <li @click="() => { router.push('/article') }">文章</li>
          <li @click="() => { router.push('/article') }">游戏</li>
          <li @click="() => { router.push('/article') }">关于</li>
        </ul>
      </nav>
      <svg class="cf_bar_logo" aria-hidden="true">
        <use xlink:href="#icon-a-snakeanimal"></use>
      </svg>

      <!-- <button @click="changeInfo">click</button> -->
    </div>

    <div class="cf_main_box">
      <div class="cf_mian_col_1">
        <h1>ClickBelog</h1>
        <p>
          Until 2020, no other member state of the United Nations had ever officially recognized Moroccan sovereignty
          over parts of Western Sahara.[14][15][16] In 2020, the United States recognized Moroccan sovereignty over
          Western Sahara in exchange for Moroccan normalization of relations with
          Israel.
        </p>
        <button type="button" @click="changeImg">Change WallPaper</button>
      </div>
      <div class="cf_mian_col_2">
        <div class="cf_mian_card" :style="{ backgroundImage: `url(${bg8})` }">
          <h5>如果你要旅游的话，你想去哪？</h5>
          <p> no other member state of the United Nations had ever officially recognized</p>
        </div>
        <div class="cf_mian_card" :style="{ backgroundImage: `url(${bg2})` }">
          <h5>文章</h5>
          <p>no other member state of the United Nations had ever officially recognized</p>
        </div>
        <div class="cf_mian_card" :style="{ backgroundImage: `url(${bg3})` }" @click="() => { router.push('/game') }">
          <h5>Game</h5>
          <p>no other member state of the United Nations had ever officially recognized</p>
        </div>
        <div class="cf_mian_card" :style="{ backgroundImage: `url(${bg4})` }">
          <h5>剑客</h5>
          <p>no other member state of the United Nations had ever officially recognized</p>
        </div>
      </div>
    </div>
    <!-- <Icon iconName="icon--qiche" @handler="handler" /> -->
  </div>
</template>
<script setup>
import { ref, reactive, onMounted } from 'vue'
import { useRouter } from 'vue-router';
import { Random } from '@/tools/toolFun.js'
import Icon from '@/components/Icon_box/Icon.vue';
import bg1 from '@/assets/images/bg1.jpg'
import bg2 from '@/assets/images/bg2.jpg'
import bg3 from '@/assets/images/bg3.jpg'
import bg4 from '@/assets/images/bg4.jpg'
import bg5 from '@/assets/images/bg5.jpg'
import bg6 from '@/assets/images/bg6.jpg'
import bg7 from '@/assets/images/bg7.jpg'
import bg8 from '@/assets/images/bg8.jpg'

const bgList = [bg1, bg2, bg3, bg4, bg5, bg6, bg7, bg8];
const bgImg = ref()
const changeImg = () => {
  const random = Random(1, 7)
  bgImg.value = bgList[random];
}

const logoList = ['icon-a-octopusanimal', 'icon-a-snakeanimal', 'icon-crab', 'icon-a-sharkanimal',
  'icon-a-horseanimal', 'icon-a-monkeyanimal', 'icon-a-tigeranimal', 'icon-a-deeranimal', 'icon-a-chickenanimal',
  'icon-a-penguinanimal', 'icon-a-elephantanimal', 'icon-a-eaglehawkanimal'
]
let logoName = ref()
const changLogo = () => {
  const random = Random(0, 10)
  logoName.value = '#' + logoList[random]
}


onMounted(() => {
  changeImg()
  changLogo()
})

function handler(e) {
  console.log(e);
}


const router = useRouter()

</script>

<style scoped lang="less">
@keyframes jump {
  0% {
    transform: translate(0, 0);
  }

  50% {
    transform: translate(0, -3px);
  }

  100% {
    transform: translate(0, 0);
  }
}

@keyframes rotatei {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

.cf_home_container {
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7));
  background-position: center;
  background-size: cover;
  padding-left: 8%;
  padding-right: 8%;
  box-sizing: border-box;
  overflow: hidden;
  user-select: none;

  .cf_navigation_bar {
    height: 12%;
    display: flex;
    align-items: center;

    .cf_bar_logo {
      width: 50px;
      height: 50px;
      vertical-align: -0.15em;
      fill: currentColor;
      overflow: hidden;
      cursor: pointer;
    }

    nav {
      flex: 1;
      text-align: right;

      li {
        list-style: none;
        display: inline-block;
        margin-left: 60px;
        text-decoration: none;
        color: #fff;
        font-size: 13px;
      }
    }

    .cf_menu-icon {
      width: 30px;
      cursor: pointer;
      margin-left: 40px;
    }

  }

  .cf_main_box {
    display: flex;
    height: 88%;
    align-items: center;

    .cf_mian_col_1,
    .cf_mian_col_2 {
      flex-basis: 50%;
    }

    .cf_mian_col_1 {
      h1 {
        color: #fff;
        font-size: 100px;
      }

      p {
        color: #fff;
        font-size: 11px;
        line-height: 15px;
      }

      button {
        width: 180px;
        color: #000;
        font-size: 12px;
        padding: 12px 0;
        background: #fff;
        border: 0;
        border-radius: 20px;
        outline: none;
        margin-top: 30px;
        cursor: pointer;
      }
    }

    .cf_mian_col_2 {

      .cf_mian_card {
        width: 240px;
        height: 230px;
        display: inline-block;
        border-radius: 10px;
        padding: 15px 25px;
        box-sizing: border-box;
        cursor: pointer;
        margin: 10px 15px;
        background-position: center;
        background-size: cover;
        transition: transform 0.5s;

        h5 {
          color: #fff;
          text-shadow: 0 0 8px #999;
        }

        p {
          text-shadow: 0 0 5px #000;
          font-size: 8px;
        }

      }

      .cf_mian_card:hover {
        transform: translateY(-10px);
      }

    }

  }

}
</style>
