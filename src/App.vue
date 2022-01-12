<script lang="ts">
import { defineComponent } from 'vue'
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems,Switch } from '@headlessui/vue'
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
  components: {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    Switch
  }, 
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
      langFlag: 'JP',
      darkMode: false,
      gearName: ["头部", "身体", "手部", "腿部", "脚部", "耳饰", "项链", "手镯", "戒指"],
      jobName: ["骑士", "战士", "暗黑骑士", "绝枪战士", "白魔法师", "学者", "占星术士", "贤者", "武僧", "龙骑士", "忍者", "武士", "钐镰客", "吟游诗人", "机工士", "舞者", "黑魔法师", "召唤师", "赤魔法师"],
      jobIcon: ['src/assets/job/PLD.svg','src/assets/job/WAR.svg','src/assets/job/DRK.svg','src/assets/job/GNB.svg','src/assets/job/WHM.svg','src/assets/job/SCH.svg','src/assets/job/AST.svg','src/assets/job/SGE.svg','src/assets/job/MNK.svg','src/assets/job/DRG.svg','src/assets/job/NIN.svg','src/assets/job/SAM.svg','src/assets/job/RPR.svg','src/assets/job/BRD.svg','src/assets/job/MCH.svg','src/assets/job/DNC.svg','src/assets/job/BLM.svg','src/assets/job/SMN.svg','src/assets/job/RDM.svg'],
      jobData: new Array<number>(19).fill(0),
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
      },
      roleNum: function () {
        let num = 0;
        for (let name in this.tank) {
          num += this.tank[name]
          num += this.healer[name]
          num += this.dragoonAndReaper[name]
          num += this.samuraiAndMonk[name]
          num += this.ninja[name]
          num += this.rangedDPS[name]
          num += this.magicDPS[name]
        }
        return num
      },
      weaponNum: function() {
        let num = 0;
        this.jobData.forEach(data => {
          num+= data
        })
        return num
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
    changeLang(lang:string) {
      if(lang === 'JP' || lang === 'EN') {
        this.langFlag = lang
      }
    },
    changeDark() {
      this.darkMode = !this.darkMode
    },

  }
})
</script>

<template>
<div :class="{dark: darkMode}" >
<div class="min-h-screen h-full w-full bg-gray-100 dark:bg-gray-900 ease-in-out duration-300"> 
  <div class="nav bg-gray-800">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <button class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
            <span class="sr-only">Open main menu</span>
            <!-- <MenuIcon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XIcon v-else class="block h-6 w-6" aria-hidden="true" /> -->
          </button>
        </div>
        <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
          <div class="flex-shrink-0 flex items-center">
            <span class="block lg:hidden h-8 w-auto text-white text-lg" >FFXIV 580 HELPER</span>
            <span class="hidden lg:block h-8 w-auto text-white text-lg" >FFXIV 580 HELPER</span>
          </div>
          <div class="hidden sm:block sm:ml-6">
            <div class="flex space-x-4">
              <!-- <a v-for="item in navigation" :key="item.name" :href="item.href" :class="[item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'px-3 py-2 rounded-md text-sm font-medium']" :aria-current="item.current ? 'page' : undefined">{{ item.name }}</a> -->
            </div>
          </div>
        </div>
        <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 gap-3">
          <Menu as="div" class="ml-3 relative">
            <div>
              <MenuButton class="p-1 bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                <span class="sr-only">Open user menu</span>
                <svg t="1641997414663" class="h-6 w-6 fill-white" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3957" width="200" height="200"><path d="M510.37806 337.803609c-98.010221 0-177.748287 78.842673-177.748287 175.75284 0 96.91426 79.738066 175.763073 177.748287 175.763073 9.537214 0 19.620873-0.978281 31.797194-3.088338 18.196431-3.281743 30.290887-20.538779 26.963095-38.471197-2.924609-15.732309-16.693194-27.152407-32.747845-27.152407-2.071172 0-4.15974 0.196475-6.123464 0.563842-7.937786 1.402953-14.233166 2.056845-19.807115 2.056845-61.159942 0-110.915136-49.201585-110.915136-109.671819 0-60.467163 49.679469-109.661585 110.747313-109.661585 61.116963 0 110.832248 49.194422 110.832248 109.661585 0 5.892197-0.656963 12.0832-2.088568 19.531845-3.327792 17.928325 8.769734 35.189454 26.959002 38.464033 2.006703 0.360204 4.045129 0.546446 6.070252 0.546446 16.204054 0 30.019711-11.43033 32.832779-27.116591 2.13871-11.45182 3.13848-21.435195 3.13848-31.41857 0.042979-46.873564-18.435884-90.990341-52.033074-124.223233C602.407056 356.106464 557.790906 337.803609 510.37806 337.803609z" p-id="3958"></path><path d="M938.476161 432.79917c-2.185782-11.426237-11.037381-20.499893-22.563902-23.12058-41.909505-9.508561-76.781734-34.929534-98.185206-71.550593-21.334911-36.560684-26.191522-79.099523-13.68979-119.709429 3.52836-11.123338 0.007163-23.235191-8.951883-30.840402-41.860387-35.721573-89.536222-62.938448-141.695163-80.885192-3.152806-1.088798-6.437619-1.639337-9.776667-1.639337-8.256034 0-16.182564 3.431146-21.724791 9.376555-29.236881 31.04404-68.840878 48.140417-111.5107 48.140417-42.673915 0-82.305541-17.125029-111.607914-48.230468-7.877411-8.333806-20.510126-11.512195-31.580253-7.726985-52.483328 18.171871-100.131535 45.416376-141.640927 80.988546-8.815783 7.591909-12.322653 19.620873-8.934486 30.67258 12.586666 40.645722 7.759731 83.180468-13.597693 119.78106-21.306258 36.5965-56.149834 62.006216-98.17395 71.561849-11.540847 2.709715-20.396539 11.812023-22.559808 23.166629-5.228071 27.169803-7.877411 54.346769-7.877411 80.770582 0 26.426883 2.64934 53.603849 7.873318 80.763418 2.174526 11.411911 11.023054 20.488637 22.552645 23.12058 41.913599 9.512654 76.785827 34.922371 98.19237 71.547523 21.349237 36.59343 26.177196 79.128175 13.583366 119.795387-3.363607 10.969842 0.121773 23.013133 8.973372 30.758538 41.84913 35.707246 89.494267 62.920028 141.662417 80.902588 11.466146 3.885494 23.738657 0.549515 31.454386-7.680936 29.29828-31.091112 68.925812-48.216141 111.593588-48.216141s82.302471 17.125029 111.560842 48.183396c5.556553 5.955642 13.494339 9.380648 21.782096 9.380648 3.27765 0 6.537903-0.520863 9.829879-1.599428 52.126194-17.968234 99.774401-45.184085 141.652184-80.912821 8.791224-7.577582 12.308327-19.628036 8.94165-30.758538-12.597923-40.678468-7.745405-83.20605 13.672394-119.773897 21.324678-36.625152 56.192813-62.030775 98.19237-71.547523 11.390421-2.592035 20.23588-11.633968 22.549575-23.106254 5.223978-27.184129 7.870248-54.358025 7.870248-80.770582C946.342316 487.171522 943.697069 459.965903 938.476161 432.79917zM728.572524 789.878798c-26.02677 20.157085-54.736649 36.553521-85.487 48.818869-36.682457-32.144094-83.60207-49.779753-132.792399-49.779753-48.926316 0-95.838765 17.635659-132.767839 49.786916-30.744211-12.262278-59.45716-28.655643-85.491093-48.812729 9.894348-47.441499 1.889023-96.449679-22.763446-138.627291-24.448832-41.966811-63.427588-73.339332-110.186542-88.840374-2.381234-16.343223-3.584642-32.758078-3.584642-48.869011 0-16.043395 1.203408-32.451086 3.584642-48.851615 46.612621-15.389502 85.584214-46.758953 110.186542-88.850607 24.523533-42.024116 32.525788-91.033319 22.74912-138.620128 26.0237-20.149922 54.735625-36.543288 85.494163-48.815799 36.821627 32.201399 83.73817 49.861618 132.778072 49.861618 49.194422 0 96.109941-17.635659 132.792399-49.779753 30.751375 12.269441 59.45716 28.662807 85.48086 48.812729-9.809413 47.63388-1.835811 96.634898 22.667256 138.620128 24.445762 41.966811 63.416332 73.343425 110.182448 88.850607 2.381234 16.386202 3.584642 32.801057 3.584642 48.940642 0.143263 15.443737-1.031493 31.797194-3.499707 48.701189-46.763047 15.504112-85.73771 46.873564-110.186542 88.836281C726.84416 693.189665 718.845998 742.190683 728.572524 789.878798z" p-id="3959"></path></svg>
                </MenuButton>
            </div>
            <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
              <MenuItems class="origin-top-right absolute right-0 mt-2 w-48 divide-y divide-gray-100 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div class="px-1 py-1">
                <div class="block px-4 py-2">
                  <div class="text-sm text-gray-800">物品名称语言</div>
                  <div class="text-xs text-gray-400">Item Name Language</div>
                </div>
                <MenuItem v-slot="{ active }">
                  <div @click="changeLang('JP')" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">
                    日本語
                    <svg v-if="langFlag=='JP'" class="w-5 h-5 inline-block float-right fill-green-600" viewBox="0 0 1025 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3147" width="200" height="200"><path d="M511.9455 958.712809c-247.065724 0-448.054313-200.987589-448.054313-448.060313 0-247.065724 200.987589-448.054313 448.054313-448.054313 247.072724 0 448.060313 200.987589 448.060313 448.054313C960.005813 757.72422 759.017224 958.712809 511.9455 958.712809L511.9455 958.712809zM511.9455 126.893372c-211.60762 0-383.758124 172.150504-383.758124 383.758124 0 211.58062 172.150504 383.765124 383.758124 383.765124 211.58062 0 383.765124-172.184504 383.765124-383.765124C895.709624 299.043876 723.52512 126.893372 511.9455 126.893372L511.9455 126.893372zM511.9455 126.893372" p-id="3148"></path><path d="M726.94813 391.825148c-12.545037-12.448036-32.837096-12.322036-45.249133 0.254001L448.388314 627.94784l-103.280303-106.122311c-12.350036-12.707037-32.612096-12.932038-45.249133-0.640002-12.678037 12.322036-12.965038 32.612096-0.640002 45.251133l126.032369 129.522379c0.064 0.093 0.190001 0.093 0.254001 0.190001 0.064 0.064 0.097 0.191001 0.161 0.254001 2.017006 1.988006 4.512013 3.204009 6.88102 4.547013 1.250004 0.674002 2.241007 1.793005 3.52001 2.305007 3.873011 1.601005 8.000023 2.398007 12.096035 2.398007 4.063012 0 8.131024-0.796002 11.969035-2.334007 1.250004-0.513002 2.208006-1.539005 3.39401-2.178006 2.398007-1.344004 4.898014-2.525007 6.94502-4.542013 0.063-0.064 0.098-0.196001 0.190001-0.259001 0.064-0.094 0.161-0.128 0.259001-0.191001l256.253751-259.041759C739.626167 424.499244 739.494166 404.242184 726.94813 391.825148L726.94813 391.825148zM726.94813 391.825148" p-id="3149"></path></svg>
                  </div>
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <div @click="changeLang('EN')" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">
                    English
                    <svg v-if="langFlag=='EN'" class="w-5 h-5 inline-block float-right fill-green-600" viewBox="0 0 1025 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3147" width="200" height="200"><path d="M511.9455 958.712809c-247.065724 0-448.054313-200.987589-448.054313-448.060313 0-247.065724 200.987589-448.054313 448.054313-448.054313 247.072724 0 448.060313 200.987589 448.060313 448.054313C960.005813 757.72422 759.017224 958.712809 511.9455 958.712809L511.9455 958.712809zM511.9455 126.893372c-211.60762 0-383.758124 172.150504-383.758124 383.758124 0 211.58062 172.150504 383.765124 383.758124 383.765124 211.58062 0 383.765124-172.184504 383.765124-383.765124C895.709624 299.043876 723.52512 126.893372 511.9455 126.893372L511.9455 126.893372zM511.9455 126.893372" p-id="3148"></path><path d="M726.94813 391.825148c-12.545037-12.448036-32.837096-12.322036-45.249133 0.254001L448.388314 627.94784l-103.280303-106.122311c-12.350036-12.707037-32.612096-12.932038-45.249133-0.640002-12.678037 12.322036-12.965038 32.612096-0.640002 45.251133l126.032369 129.522379c0.064 0.093 0.190001 0.093 0.254001 0.190001 0.064 0.064 0.097 0.191001 0.161 0.254001 2.017006 1.988006 4.512013 3.204009 6.88102 4.547013 1.250004 0.674002 2.241007 1.793005 3.52001 2.305007 3.873011 1.601005 8.000023 2.398007 12.096035 2.398007 4.063012 0 8.131024-0.796002 11.969035-2.334007 1.250004-0.513002 2.208006-1.539005 3.39401-2.178006 2.398007-1.344004 4.898014-2.525007 6.94502-4.542013 0.063-0.064 0.098-0.196001 0.190001-0.259001 0.064-0.094 0.161-0.128 0.259001-0.191001l256.253751-259.041759C739.626167 424.499244 739.494166 404.242184 726.94813 391.825148L726.94813 391.825148zM726.94813 391.825148" p-id="3149"></path></svg>
                  </div>
                </MenuItem>
                <MenuItem v-slot="{ active }" disabled>
                  <div @click="changeLang('CN')" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">中文（暂不支持）</div>
                </MenuItem>
              </div>
              <div class="px-1 py-1">
                <div class="block px-4 py-2">
                  <div class="text-sm text-gray-800">暗黑模式</div>
                  <div class="text-xs text-gray-400">Dark Mode</div>
                </div>
                <div class="h-8 items-center justify-center">
                  <span v-if="darkMode" class="px-4 py-2 text-sm text-gray-700">
                    关闭
                  </span>
                  <span v-else class="px-4 py-2 text-sm text-gray-700">
                    开启
                  </span>
                  <div class="inline-flex float-right mr-2">
                  <Switch
                  v-model="darkMode"
                  :class="darkMode ? 'bg-gray-700' : 'bg-gray-500'"
                  class="relative inline-flex items-center h-6 rounded-full w-11"
                  >
                  <span class="sr-only">Enable notifications</span>
                  <span
                    :class="darkMode ? 'translate-x-6' : 'translate-x-1'"
                    class="inline-block w-4 h-4 transform bg-white rounded-full"
                  />
                  </Switch>
                  </div>
                </div>
              </div>
              <div class="px-1 py-1">
                <MenuItem v-slot="{ active }" >
                  <a href="https://github.com/AkatsukiP/ffxiv_580_helper" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">前往项目主页</a>
                </MenuItem>
                <div class="block px-4 py-2">
                  <div class="text-xs text-gray-400">Version 1.0 Alpha</div>
                </div>
              </div>
              </MenuItems>
            </transition>
          </Menu>

        </div>
      </div>
    </div>
  </div>
  <div class="container mx-auto p-2 mt-6" >
    <div class="">
      <div class="grid xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-1 gap-3">
      <div class="card h-fit order-1">
        <div class="card-header">
          <span>职业装备</span>
          <div class="float-right gap-2">
            <button class="btn-header" @click="resetRole()">清空({{roleNum}})</button>
            <button class="btn-header" @click="addFullRole(roleFlag)">添加整套</button>
          </div>
        </div>
        <div class="card-body grid grid-cols-3 gap-4">
          <div class="role">
            <button class="btn h-8 w-4/5" @click="roleActive(0)" :class="{active: roleFlag===0}" >防护职业{{}}</button>
            <button class="btn h-8 w-4/5" @click="roleActive(1)" :class="{active: roleFlag===1}">治疗职业</button>
            <!-- <button class="btn pointer-events-none" :class="{active: roleFlag===2||roleFlag===3||roleFlag===4}">近战职业</button> -->
            <button class="btn h-8 w-4/5" @click="roleActive(2)" :class="{active: roleFlag===2}">龙骑士/钐镰客</button>
            <button class="btn h-8 w-4/5" @click="roleActive(3)" :class="{active: roleFlag===3}">武士/武僧</button>
            <button class="btn h-8 w-4/5" @click="roleActive(4)" :class="{active: roleFlag===4}">忍者</button>
            <button class="btn h-8 w-4/5" @click="roleActive(5)" :class="{active: roleFlag===5}">远程物理职业</button>
            <button class="btn h-8 w-4/5" @click="roleActive(6)" :class="{active: roleFlag===6}">远程魔法职业</button>
          </div>
          <div class="gear col-span-2 grid grid-flow-row-dense grid-rows-5 grid-cols-2 ">
            <div v-for="(value,name,index) in whichRole(roleFlag)" class="text-sm">
            {{gearName[index]}} 
            <el-input-number size="small" v-model="whichRole(roleFlag)[name]" :min="0" :max="10" class="w-20"/>
            </div>
          </div>
        </div>
      </div>
      <div class="card xl:order-4 lg:order-2 order-2">
        <div class="card-header">
          <span>职业武器</span>
          <div class="float-right gap-2">
            <button class="btn-header" @click="resetJob()">清空({{weaponNum}})</button>
          </div>
        </div>
          <div class="gear grid grid-cols-4 gap-2 p-2">
            <div v-for="(name,index) in jobName" class="flex bg-gray-100  p-1 w-28 h-12 rounded-xl">
            <img :src="jobIcon[index]" class="w-5" :alt="name">
            <!-- <input type="number" min="0" required v-model="jobData[index]" class="w-10 h-8 text-center"> -->
            <el-input-number v-model="jobData[index]" :min="0" :max="10" size="small" class="h-6 my-auto"/>
            </div>
          </div>
      </div>
      <div class="card w-full h-fit xl:order-2 lg:order-3 order-3">
        <div class="card-header">
          <span>新半成品</span>
        </div>
        <div class="card-body">
            <table class="min-w-full divide-y divide-gray-200">
            <tbody class="divide-y divide-gray-200">
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
      <div class="card full h-fit xl:order-3 lg:order-4 order-4">
        <div class="card-header">
          <span>旧半成品</span>
        </div>
        <div class="card-body">
            <table class="min-w-full divide-y divide-gray-200">
            <tbody class="divide-y divide-gray-200">
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
      <div class="card w-full h-fit xl:order-4 order-5">
        <div class="card-header">
          <span>幻水</span>
        </div>
        <div class="card-body">
           <table class="min-w-full divide-y divide-gray-200">
            <tbody class="divide-y divide-gray-200">
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
      <div class="card w-full h-fit xl:order-5 order-6">
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
  @apply dark:bg-gray-800 dark:text-white dark:shadow-none dark:ring-1 dark:ring-inset dark:ring-white/10 ;
  @apply ease-in-out duration-300;
}
.card-header {
  @apply bg-blue-100 py-2 px-4 rounded-lg text-blue-900 font-medium text-sm;
  @apply dark:bg-blue-900 dark:text-blue-50
}
.card-body {
  @apply py-3 px-3 
}
.btn {
  @apply block rounded-lg my-1 text-gray-800 text-base xl:text-sm md:text-xs;
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
