<script lang="ts">
import { defineComponent } from 'vue'
interface gear {
    head: number // 头部
    body: number // 身体
    hands:number // 手部
    legs: number // 腿部
    feet: number // 脚部
    earring: number // 耳环
    necklace: number // 项链
    bracelets: number // 手镯
    rings: number // 戒指
}

function createGear<gear>() {
    let tmp ={
        head: 0,
        body: 0,
        hands: 0,
        legs: 0,
        feet: 0,
        earring: 0,
        necklace: 0,
        bracelets: 0,
        rings: 0,
    }
    return tmp
} 
export class role {

}
let roleData = new role();
export default defineComponent({
  name: 'app',
  data() {
    return {
      roleData: roleData,
      roleFlag: 0,
      tank: createGear(),
      healer: createGear(),
      dragoonAndReaper: createGear(),
      samuraiAndMonk: createGear(),
      ninja: createGear(),
      rangedDPS: createGear(),
      magicDPS: createGear(),
      langFlag: 'EN',
      darkMode: false,
      gearName: ["头部", "身体", "手部", "腿部", "脚部", "耳饰", "项链", "手镯", "戒指"],
      jobName: ["骑士", "战士", "暗黑骑士", "绝枪战士", "白魔法师", "学者", "占星术士", "贤者", "武僧", "龙骑士", "忍者", "武士", "钐镰客", "吟游诗人", "机工士", "舞者", "黑魔法师", "召唤师", "赤魔法师"],
      jobData: new Array(19).fill(0),
      newStuffNameJP: ['メンピサン材', 'ルナアダマンインゴット', 'ロジウムインゴット', 'アミノドンレザー', 'ゴールドシルク'],
      newStuffNameEN: ['Mempisang Lumber', 'Lunar Adamantite Ingot', 'Rhodium Ingot', 'Amynodon Leather', 'Golden Silk'],
      newStuffIcon:['src/assets/MempisangLumber.png','src/assets/LunarAdamantiteIngot.png','src/assets/RhodiumIngot.png','src/assets/AmynodonLeather.png','src/assets/GoldenSilk.png'],
      oldStuffNameJP: ['インテグラル材', 'コンドライトインゴット', 'スタークォーツ', 'オピオタウロスレザー', 'カエアンビロード'],
      oldStuffNameEN: ['Integral Lumber', 'Chondrite Ingot', 'Star Quartz', 'Ophiotauros Leather', 'AR-Caean Velvet'],
      oldStuffIcon:['src/assets/IntegralLumber.png', 'src/assets/ChondriteIngot.png', 'src/assets/StarQuartz.png', 'src/assets/OphiotaurosLeather.png', 'src/assets/ARCaeanVelvet.png', ],
      alkahestNameJP: ['剛力の幻水G6','眼力の幻水G6','活力の幻水G6','知力の幻水G6','心力の幻水G6'],
      alkahestNameEN: ['Grade 6 Strength Alkahest', 'Grade 6 Dexterity Alkahest', 'Grade 6 Vitality Alkahest', 'Grade 6 Intelligence Alkahest', 'Grade 6 Mind Alkahest'],
      alkahestIcon:['src/assets/StrengthAlkahest.png', 'src/assets/DexterityAlkahest.png', 'src/assets/VitalityAlkahest.png', 'src/assets/IntelligenceAlkahest.png', 'src/assets/MindAlkahest.png'],
      aethersandNameJP: ['巨岩の霊砂', '巨樹の霊砂','巨海の霊砂'],
      aethersandNameEN: ['Endstone Aethersand', 'Endwood Aethersand', 'Endtide Aethersand'],
      aethersandIcon: ['src/assets/Endstone.png', 'src/assets/Endwood.png', 'src/assets/Endtide.png'],
      //Moonlight Aethersand
    }
  },
  computed: {
      newStuff: function() {
        let newstuff = new Array(5).fill(0)
        // 木工 メンピサン材 Mempisang Lumber
        newstuff[0] = (this.jobData[9] + this.jobData[13] + this.jobData[16] + this.jobData[4]) * 3 + 
          (this.tank.bracelets + this.healer.bracelets + this.dragoonAndReaper.bracelets + this.samuraiAndMonk.bracelets + this.ninja.bracelets + this.rangedDPS.bracelets + this.magicDPS.bracelets) * 2 + 
          (this.jobData[2] + this.jobData[12] + this.jobData[8] + this.jobData[11] + this.jobData[10] + this.jobData[15]) * 2 +
          this.jobData[0] + this.magicDPS.feet + this.healer.feet +
          (this.jobData[5] + this.jobData[17]) * 2
        // 铁匠 ルナアダマンインゴット Lunar Adamantite Ingot
        newstuff[1] = (this.jobData[9] + this.jobData[16]) * 2 +
          (this.jobData[0] + this.jobData[1] + this.jobData[2] + this.jobData[3] + this.jobData[12] + this.jobData[8] + this.jobData[11] + this.jobData[10] + this.jobData[14] + this.jobData[15]) * 3 + 
          this.jobData[0] + (this.tank.head + this.dragoonAndReaper.head + this.samuraiAndMonk.head + this.ninja.head) * 2 + 
          (this.samuraiAndMonk.body + this.ninja.body) * 3 + (this.tank.hands + this.dragoonAndReaper.hands + this.samuraiAndMonk.hands + this.ninja.hands + this.tank.feet + this.ninja.feet) * 2 +
          (this.jobData[18] + this.jobData[6] + this.jobData[7]) * 2 +
          this.healer.head + this.healer.hands + this.dragoonAndReaper.feet + this.samuraiAndMonk.feet + this.rangedDPS.feet +
          (this.tank.body + this.dragoonAndReaper.body) * 2
        // 雕金 ロジウムインゴット Rhodium Ingot
        newstuff[2] = (this.jobData[13] + this.jobData[4]) * 3 + (this.jobData[1] + this.jobData[3] + this.jobData[14]) * 2 +
          this.tank.head + this.samuraiAndMonk.head + (this.jobData[18] + this.jobData[6] + this.jobData[7]) * 3 +
          (this.magicDPS.head + this.healer.head * 2 + this.healer.hands) * 2 + this.tank.earring + this.healer.earring+ this.dragoonAndReaper.earring + this.samuraiAndMonk.earring + this.ninja.earring + this.rangedDPS.earring + this.magicDPS.earring +
          this.tank.rings + this.healer.rings+ this.dragoonAndReaper.rings + this.samuraiAndMonk.rings + this.ninja.rings + this.rangedDPS.rings + this.magicDPS.rings + this.magicDPS.hands +
          this.tank.necklace + this.healer.necklace+ this.dragoonAndReaper.necklace + this.samuraiAndMonk.necklace + this.ninja.necklace + this.rangedDPS.necklace + this.magicDPS.necklace + 
          this.rangedDPS.body + this.magicDPS.body * 2 + this.healer.body * 2 + this.rangedDPS.hands 
        // 制革 アミノドンレザー Amynodon Leather
        newstuff[3] = this.ninja.head + this.ninja.hands + this.tank.feet +this.ninja.feet + this.magicDPS.head +
          this.rangedDPS.body * 3 + (this.magicDPS.hands + this.dragoonAndReaper.feet + this.samuraiAndMonk.feet + this.rangedDPS.feet + this.magicDPS.feet + this.healer.feet) * 2 +
          this.tank.necklace + this.healer.necklace+ this.dragoonAndReaper.necklace + this.samuraiAndMonk.necklace + this.ninja.necklace + this.rangedDPS.necklace + this.magicDPS.necklace + 
          (this.tank.legs + this.healer.legs+ this.dragoonAndReaper.legs + this.samuraiAndMonk.legs + this.ninja.legs + this.rangedDPS.legs + this.magicDPS.legs) * 2 + 
          ( this.jobData[5] + this.jobData[17]) * 3
        // 裁缝 ゴールドシルク Golden Silk
        newstuff[4] = this.dragoonAndReaper.head + ( this.samuraiAndMonk.body + this.ninja.body) * 2 + this.tank.hands + this.samuraiAndMonk.hands + this.dragoonAndReaper.hands +
          this.tank.earring + this.healer.earring+ this.dragoonAndReaper.earring + this.samuraiAndMonk.earring + this.ninja.earring + this.rangedDPS.earring + this.magicDPS.earring +
          this.rangedDPS.body * 3 + this.rangedDPS.head * 2 + ( this.tank.body + this.dragoonAndReaper.body + this.magicDPS.body + this.healer.body) * 3 +
          this.rangedDPS.hands * 2 + (this.tank.legs + this.healer.legs+ this.dragoonAndReaper.legs + this.samuraiAndMonk.legs + this.ninja.legs + this.rangedDPS.legs + this.magicDPS.legs) * 3
        return newstuff
      },
      oldStuff: function() {
        let oldstuff = new Array(5).fill(0)
        // 木工 インテグラル材 Integral Lumber
        oldstuff[0] = this.jobData[9] + this.jobData[13] + this.jobData[4] + this.jobData[16]
        // 铁匠 コンドライトインゴット Chondrite Ingot
        oldstuff[1] = this.jobData[0] + this.jobData[1] + this.jobData[2] + this.jobData[3] + this.jobData[12] + this.jobData[8] + this.jobData[11] + this.jobData[10] + this.jobData[14] + this.jobData[15] + 
          this.tank.head + this.dragoonAndReaper.head + this.samuraiAndMonk.head + this.ninja.head + this.samuraiAndMonk.body + this.ninja.body + this.tank.hands + this.dragoonAndReaper.hands + this.samuraiAndMonk.hands + this.ninja.hands + this.tank.feet + this.ninja.feet +
          this.rangedDPS.body + this.magicDPS.feet + this.healer.feet
        // 雕金 スタークォーツ Star Quartz
        oldstuff[2] = this.tank.bracelets + this.dragoonAndReaper.bracelets + this.samuraiAndMonk.bracelets + this.ninja.bracelets + this.healer.bracelets + this.rangedDPS.bracelets + this.magicDPS.bracelets +
          this.jobData[18] + this.jobData[6] + this.jobData[7] + this.magicDPS.head + this.healer.head +  this.healer.hands +
          this.tank.earring + this.dragoonAndReaper.earring + this.samuraiAndMonk.earring + this.ninja.earring + this.healer.earring + this.rangedDPS.earring + this.magicDPS.earring +
          this.tank.rings + this.dragoonAndReaper.rings + this.samuraiAndMonk.rings + this.ninja.rings + this.healer.rings + this.rangedDPS.rings + this.magicDPS.rings +
          this.tank.necklace + this.dragoonAndReaper.necklace + this.samuraiAndMonk.necklace + this.ninja.necklace + this.healer.necklace + this.rangedDPS.necklace + this.magicDPS.necklace
        // 制革 オピオタウロスレザー Ophiotauros Leather
        oldstuff[3] = this.dragoonAndReaper.feet + this.samuraiAndMonk.feet + this.rangedDPS.feet +
          this.rangedDPS.body + this.dragoonAndReaper.body + this.rangedDPS.hands
        // 裁缝 カエアンビロード AR-Caean Velvet
        oldstuff[4] = this.magicDPS.hands + this.tank.body + this.magicDPS.body + this.healer.body +
          this.tank.legs + this.dragoonAndReaper.legs + this.samuraiAndMonk.legs + this.ninja.legs + this.healer.legs + this.rangedDPS.legs + this.magicDPS.legs
        return oldstuff
      },
      alkahest: function() {
        let alkahest = new Array(5).fill(0)
        alkahest[0] = (this.jobData[9] + this.jobData[12] + this.jobData[8] + this.jobData[11]) * 2 +
          (this.dragoonAndReaper.head + this.dragoonAndReaper.body + this.dragoonAndReaper.hands + this.dragoonAndReaper.legs + this.dragoonAndReaper.feet) * 2 +
          (this.samuraiAndMonk.head + this.samuraiAndMonk.body + this.samuraiAndMonk.hands + this.samuraiAndMonk.legs + this.samuraiAndMonk.feet) * 2 +
          this.dragoonAndReaper.earring + this.dragoonAndReaper.necklace + this.dragoonAndReaper.bracelets + this.dragoonAndReaper.rings +
          this.samuraiAndMonk.earring + this.samuraiAndMonk.necklace + this.samuraiAndMonk.bracelets + this.samuraiAndMonk.rings
        alkahest[1] = (this.jobData[13] + this.jobData[14] + this.jobData[15] + this.jobData[10]) * 2 +
          (this.ninja.head + this.ninja.body + this.ninja.hands + this.ninja.legs + this.ninja.feet) * 2 +
          (this.rangedDPS.head + this.rangedDPS.body + this.rangedDPS.hands + this.rangedDPS.legs + this.rangedDPS.feet) * 2 +
          this.ninja.earring + this.ninja.necklace + this.ninja.bracelets + this.ninja.rings + 
          this.rangedDPS.earring + this.rangedDPS.necklace + this.rangedDPS.bracelets + this.rangedDPS.rings
        alkahest[2] = (this.jobData[0] + this.jobData[1] + this.jobData[2] + this.jobData[3]) * 2 +
          (this.tank.head + this.tank.body + this.tank.hands + this.tank.legs + this.tank.feet) * 2 +
          this.tank.earring + this.tank.necklace + this.tank.bracelets + this.tank.rings
        alkahest[3] = (this.jobData[16] + this.jobData[17] + this.jobData[18]) * 2 +
          (this.magicDPS.head + this.magicDPS.body + this.magicDPS.hands + this.magicDPS.legs + this.magicDPS.feet) * 2 +
          this.magicDPS.earring + this.magicDPS.necklace + this.magicDPS.bracelets + this.magicDPS.rings          
        alkahest[4] = (this.jobData[4] + this.jobData[5] + this.jobData[6] + this.jobData[7]) * 2 +
          (this.healer.head + this.healer.body + this.healer.hands + this.healer.legs + this.healer.feet) * 2 +
          this.healer.earring + this.healer.necklace + this.healer.bracelets + this.healer.rings
        return alkahest
      },
      aethersand: function() {
        let aethersand = new Array(3).fill(0)
        aethersand[0] = this.jobData[9] + this.jobData[13] + this.tank.bracelets + this.dragoonAndReaper.bracelets + this.samuraiAndMonk.bracelets + this.ninja.bracelets + this.healer.bracelets + this.rangedDPS.bracelets + this.magicDPS.bracelets +
          this.jobData[12] + this.jobData[8] + this.jobData[11] + this.jobData[10] + this.jobData[14] + this.jobData[15] +
          this.samuraiAndMonk.body + this.ninja.body + this.tank.hands + this.dragoonAndReaper.hands + this.samuraiAndMonk.hands + this.ninja.hands +
          this.healer.hands +
          this.rangedDPS.body + this.magicDPS.hands + this.tank.necklace + this.dragoonAndReaper.necklace + this.samuraiAndMonk.necklace + this.ninja.necklace + this.healer.necklace + this.rangedDPS.necklace + this.magicDPS.necklace +
          this.tank.body + this.dragoonAndReaper.body + this.magicDPS.body + this.healer.body + this.rangedDPS.hands 
        aethersand[1] = this.jobData[16] + this.jobData[0] + this.jobData[1] + this.jobData[2] + this.jobData[3] +
          this.tank.head + this.dragoonAndReaper.head + this.samuraiAndMonk.head + this.ninja.head + 
          this.jobData[18] + this.magicDPS.head + this.healer.head +
          this.tank.earring + this.dragoonAndReaper.earring + this.samuraiAndMonk.earring + this.ninja.earring + this.healer.earring + this.rangedDPS.earring + this.magicDPS.earring +
          this.rangedDPS.head + this.tank.legs + this.dragoonAndReaper.legs + this.samuraiAndMonk.legs + this.ninja.legs + this.healer.legs + this.rangedDPS.legs + this.magicDPS.legs +
          this.jobData[17]
        aethersand[2] = this.jobData[4] + this.tank.feet + this.ninja.feet + this.jobData[6] + this.jobData[7] + 
          this.tank.rings + this.dragoonAndReaper.rings + this.samuraiAndMonk.rings + this.ninja.rings + this.healer.rings + this.rangedDPS.rings + this.magicDPS.rings +
          this.dragoonAndReaper.feet + this.samuraiAndMonk.feet + this.rangedDPS.feet + this.magicDPS.feet + this.healer.feet + this.jobData[5]
        return aethersand
      }
  },
  methods: {
    roleActive(num: number) {
      this.roleFlag = num
    },
    whichRole(role:number) {
      switch (role) {
        case 0: {
          return this.tank
        }
        case 1: {
          return this.healer
        }
        case 2: {
          return this.dragoonAndReaper
        }
        case 3: {
          return this.samuraiAndMonk
        }
        case 4: {
          return this.ninja
        }
        case 5: {
          return this.rangedDPS
        }
        case 6: {
          return this.magicDPS
        }
        default: {
          return this.tank
        }
      }
    },
    resetRole(){
      for (let name in this.tank) {
        this.tank[name]=0
        this.healer[name]=0
        this.dragoonAndReaper[name]=0
        this.samuraiAndMonk[name]=0
        this.ninja[name]=0
        this.rangedDPS[name]=0
        this.magicDPS[name]=0
      }
    },
    addFullRole(role:number) {
      for (let name in this.tank) {
        switch (role) {
          case 0: {
            this.tank[name]++
            break
            }
          case 1: {
            this.healer[name]++
            break
            }
          case 2: {
            this.dragoonAndReaper[name]++
            break
            }
          case 3: {
            this.samuraiAndMonk[name]++
            break
            }
          case 4: {
            this.ninja[name]++
            break
            }
          case 5: {
            this.rangedDPS[name]++
            break
            }
          case 6: {
            this.magicDPS[name]++
            break
            }
          default: {break}
        }
      }
    },
    resetJob() {
      this.jobData.fill(0)
    },
    changeLang() {
      if( this.langFlag=='JP') {
        this.langFlag = 'EN'
      }
      else {
        this.langFlag = 'JP'
      }
    },
    changeDark() {
      this.darkMode = !this.darkMode
    },
    test() {
      return 'aethersandIcon[1]'
    }
  }
})
</script>

<template>
<div :class="{dark: darkMode}" class="min-h-screen h-full w-full bg-gray-100 dark:bg-gray-900 ">
  <div class="nav bg-gray-800">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          test
        </div>
      </div>
    </div>
  </div>
  <div class="container mx-auto p-2" >
    <div class="">
      <div class="grid xl:grid-rows-2 md:grid-rows-7 xl:grid-flow-col gap-3">
      <div class="card h-fit">
        <div class="card-header">
          <span>职业装备</span>
          <div class="float-right gap-2">
            <button class="btn-header" @click="resetRole()">清空</button>
            <button class="btn-header" @click="addFullRole(roleFlag)">添加整套</button>
          </div>
        </div>
        <div class="card-body grid grid-cols-3 gap-4">
          <div class="role">
            <button class="btn" @click="roleActive(0)" :class="{active: roleFlag===0}" >防护职业{{}}</button>
            <button class="btn" @click="roleActive(1)" :class="{active: roleFlag===1}">治疗职业</button>
            <!-- <button class="btn pointer-events-none" :class="{active: roleFlag===2||roleFlag===3||roleFlag===4}">近战职业</button> -->
            <button class="btn" @click="roleActive(2)" :class="{active: roleFlag===2}">龙骑士/钐镰客</button>
            <button class="btn" @click="roleActive(3)" :class="{active: roleFlag===3}">武士/武僧</button>
            <button class="btn" @click="roleActive(4)" :class="{active: roleFlag===4}">忍者</button>
            <button class="btn" @click="roleActive(5)" :class="{active: roleFlag===5}">远程物理职业</button>
            <button class="btn" @click="roleActive(6)" :class="{active: roleFlag===6}">远程魔法职业</button>
          </div>
          <div class="gear col-span-2 grid grid-flow-row-dense grid-cols-2 grid-rows-5">
            <div v-for="(value,name,index) in whichRole(roleFlag)">
            {{gearName[index]}} 
            <el-input-number v-model="whichRole(roleFlag)[name]" :min="0" :max="10" />
            </div>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-header">
          <span>职业武器</span>
          <div class="float-right gap-2">
            <button class="btn-header" @click="resetJob()">清空</button>
          </div>
        </div>
          <el-col :span="20" class="gear grid grid-rows-5 grid-flow-col">
            <div v-for="(name,index) in jobName" class="m-4">
            {{name}}
            <el-input-number v-model="jobData[index]" :min="0" :max="10" size="small"/>
            </div>
          </el-col>
      </div>
      <div class="card w-96 h-fit">
        <div class="card-header">
          <span>新半成品</span>
        </div>
        <div class="card-body">
            <table class="min-w-full divide-y divide-gray-200">
            <tbody class="bg-white divide-y divide-gray-200">
              <tr v-for="(name,index) in newStuffNameEN"  class="item">
                <td class="px-6 py-3 whitespace-nowrap">
                  <img :src="newStuffIcon[index]" alt="" class="itemIcon"> 
                </td>
                <td class="px-6 py-3 whitespace-nowrap" v-if="langFlag=='JP'">
                  {{newStuffNameJP[index]}}
                </td>
                <td class="px-6 py-3 whitespace-nowrap" v-if="langFlag=='EN'">
                  {{newStuffNameEN[index]}}
                </td>
                <td class="px-6 py-3 whitespace-nowrap">
                  {{newStuff[index]}}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="card w-96 h-fit">
        <div class="card-header">
          <span>旧半成品</span>
        </div>
        <div class="card-body">
            <table class="min-w-full divide-y divide-gray-200">
            <tbody class="bg-white divide-y divide-gray-200">
              <tr v-for="(name,index) in oldStuffNameEN"  class="item">
                <td class="px-6 py-3 whitespace-nowrap">
                  <img :src="oldStuffIcon[index]" alt="" class="itemIcon"> 
                </td>
                <td class="px-6 py-3 whitespace-nowrap" v-if="langFlag=='JP'">
                  {{oldStuffNameJP[index]}}
                </td>
                <td class="px-6 py-3 whitespace-nowrap" v-if="langFlag=='EN'">
                  {{oldStuffNameEN[index]}}
                </td>
                <td class="px-6 py-3 whitespace-nowrap">
                  {{oldStuff[index]}}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="card w-fit h-fit">
        <div class="card-header">
          <span>幻水</span>
        </div>
        <div class="card-body">
           <table class="min-w-full divide-y divide-gray-200">
            <tbody class="bg-white divide-y divide-gray-200">
              <tr v-for="(name,index) in alkahestNameEN"  class="item">
                <td class="px-6 py-3 whitespace-nowrap">
                  <img :src="alkahestIcon[index]" alt="" class="itemIcon"> 
                </td>
                <td class="px-6 py-3 whitespace-nowrap" v-if="langFlag=='JP'">
                  {{alkahestNameJP[index]}}
                </td>
                <td class="px-6 py-3 whitespace-nowrap" v-if="langFlag=='EN'">
                  {{alkahestNameEN[index]}}
                </td>
                <td class="px-6 py-3 whitespace-nowrap">
                  {{alkahest[index]}}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="card w-fit h-fit">
        <div class="card-header">
          <span>灵砂</span>
        </div>
        <div class="card-body">
          <table class="min-w-full divide-y divide-gray-200">
            <tbody class="divide-y divide-gray-200">
              <tr v-for="(name,index) in aethersandNameEN"  class="item">
                <td class="px-6 py-3 whitespace-nowrap">
                  <img :src="aethersandIcon[index]" alt="" class="itemIcon"> 
                </td>
                <td class="px-6 py-3 whitespace-nowrap" v-if="langFlag=='JP'">
                  {{aethersandNameJP[index]}}
                </td>
                <td class="px-6 py-3 whitespace-nowrap" v-if="langFlag=='EN'">
                  {{aethersandNameEN[index]}}
                </td>
                <td class="px-6 py-3 whitespace-nowrap">
                  {{aethersand[index]}}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      </div>
    </div>
  </div>
</div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.card {
  @apply bg-white text-gray-800 rounded-2xl shadow-lg p-2; 
  @apply dark:bg-gray-800 dark:text-white dark:shadow-none dark:ring-1 dark:ring-inset dark:ring-white/10 
}
.card-header {
  @apply bg-blue-100 py-2 px-4 rounded-lg text-blue-900 font-medium text-sm;
  @apply dark:bg-blue-900 dark:text-blue-50
}
.card-body {
  @apply py-3 px-3 
}
.btn {
  @apply block w-1/2 h-8 rounded-lg my-1 text-gray-800;
  @apply dark:text-gray-100;
  @apply ease-in-out duration-300;
}
.btn:hover {
  @apply bg-gray-100;
  @apply dark:bg-gray-700
}
.btn-header {
  @apply mx-2
}
.btn-header:hover {
  @apply text-blue-500
}
.active { 
  @apply bg-gray-100 text-blue-500 font-bold;
  @apply dark:bg-gray-700 dark:text-gray-100 dark:ring-1 dark:ring-inset dark:ring-white;
  @apply ease-in-out duration-300;
}
.role {
  @apply grid grid-cols-1 place-items-center
}
.item {
  @apply text-sm
}
.item:hover {
  @apply bg-gray-100 dark:bg-gray-600
}
.itemIcon {
  @apply w-8
}
</style>
