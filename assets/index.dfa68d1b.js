import{d as _,E as y,a as B,b as C,c as n,e as t,n as g,t as h,F as l,r as u,f as c,w as A,g as D,h as v,o as r,i as m,j as F}from"./vendor.20e05dff.js";const R=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))p(o);new MutationObserver(o=>{for(const d of o)if(d.type==="childList")for(const k of d.addedNodes)k.tagName==="LINK"&&k.rel==="modulepreload"&&p(k)}).observe(document,{childList:!0,subtree:!0});function f(o){const d={};return o.integrity&&(d.integrity=o.integrity),o.referrerpolicy&&(d.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?d.credentials="include":o.crossorigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function p(o){if(o.ep)return;o.ep=!0;const d=f(o);fetch(o.href,d)}};R();var M="/ffxiv_580_helper/assets/MempisangLumber.2052320b.png",N="/ffxiv_580_helper/assets/LunarAdamantiteIngot.fc1860d1.png",w="/ffxiv_580_helper/assets/RhodiumIngot.e462f9c8.png",I="/ffxiv_580_helper/assets/AmynodonLeather.c02a1873.png",L="/ffxiv_580_helper/assets/GoldenSilk.e7849d49.png",V="/ffxiv_580_helper/assets/IntegralLumber.9e9f18b0.png",J="/ffxiv_580_helper/assets/ChondriteIngot.0ea1b971.png",$="/ffxiv_580_helper/assets/StarQuartz.41a1074b.png",G="/ffxiv_580_helper/assets/OphiotaurosLeather.2cd44827.png",O="/ffxiv_580_helper/assets/ARCaeanVelvet.cbc939a7.png",z="/ffxiv_580_helper/assets/StrengthAlkahest.93046875.png",U="/ffxiv_580_helper/assets/DexterityAlkahest.5ac97c6e.png",Q="/ffxiv_580_helper/assets/VitalityAlkahest.cbc866c3.png",q="/ffxiv_580_helper/assets/IntelligenceAlkahest.996c94eb.png",K="/ffxiv_580_helper/assets/MindAlkahest.8da11713.png",T="/ffxiv_580_helper/assets/Endstone.f18a8089.png",H="/ffxiv_580_helper/assets/Endwood.2e0197f8.png",W="/ffxiv_580_helper/assets/Endtide.6ad17bc2.png";var X=(a,e)=>{const f=a.__vccOpts||a;for(const[p,o]of e)f[p]=o;return f};function b(){return{head:0,body:0,hands:0,legs:0,feet:0,earring:0,necklace:0,bracelets:0,rings:0}}class Y{}let Z=new Y;const x=_({name:"app",data(){return{roleData:Z,roleFlag:0,tank:b(),healer:b(),dragoonAndReaper:b(),samuraiAndMonk:b(),ninja:b(),rangedDPS:b(),magicDPS:b(),langFlag:"EN",darkMode:!1,gearName:["\u5934\u90E8","\u8EAB\u4F53","\u624B\u90E8","\u817F\u90E8","\u811A\u90E8","\u8033\u9970","\u9879\u94FE","\u624B\u956F","\u6212\u6307"],jobName:["\u9A91\u58EB","\u6218\u58EB","\u6697\u9ED1\u9A91\u58EB","\u7EDD\u67AA\u6218\u58EB","\u767D\u9B54\u6CD5\u5E08","\u5B66\u8005","\u5360\u661F\u672F\u58EB","\u8D24\u8005","\u6B66\u50E7","\u9F99\u9A91\u58EB","\u5FCD\u8005","\u6B66\u58EB","\u9490\u9570\u5BA2","\u541F\u6E38\u8BD7\u4EBA","\u673A\u5DE5\u58EB","\u821E\u8005","\u9ED1\u9B54\u6CD5\u5E08","\u53EC\u5524\u5E08","\u8D64\u9B54\u6CD5\u5E08"],jobData:new Array(19).fill(0),newStuffNameJP:["\u30E1\u30F3\u30D4\u30B5\u30F3\u6750","\u30EB\u30CA\u30A2\u30C0\u30DE\u30F3\u30A4\u30F3\u30B4\u30C3\u30C8","\u30ED\u30B8\u30A6\u30E0\u30A4\u30F3\u30B4\u30C3\u30C8","\u30A2\u30DF\u30CE\u30C9\u30F3\u30EC\u30B6\u30FC","\u30B4\u30FC\u30EB\u30C9\u30B7\u30EB\u30AF"],newStuffNameEN:["Mempisang Lumber","Lunar Adamantite Ingot","Rhodium Ingot","Amynodon Leather","Golden Silk"],oldStuffNameJP:["\u30A4\u30F3\u30C6\u30B0\u30E9\u30EB\u6750","\u30B3\u30F3\u30C9\u30E9\u30A4\u30C8\u30A4\u30F3\u30B4\u30C3\u30C8","\u30B9\u30BF\u30FC\u30AF\u30A9\u30FC\u30C4","\u30AA\u30D4\u30AA\u30BF\u30A6\u30ED\u30B9\u30EC\u30B6\u30FC","\u30AB\u30A8\u30A2\u30F3\u30D3\u30ED\u30FC\u30C9"],oldStuffNameEN:["Integral Lumber","Chondrite Ingot","Star Quartz","Ophiotauros Leather","AR-Caean Velvet"],alkahestNameJP:["\u525B\u529B\u306E\u5E7B\u6C34G6","\u773C\u529B\u306E\u5E7B\u6C34G6","\u6D3B\u529B\u306E\u5E7B\u6C34G6","\u77E5\u529B\u306E\u5E7B\u6C34G6","\u5FC3\u529B\u306E\u5E7B\u6C34G6"],alkahestNameEN:["Grade 6 Strength Alkahest","Grade 6 Dexterity Alkahest","Grade 6 Vitality Alkahest","Grade 6 Intelligence Alkahest","Grade 6 Mind Alkahest"],aethersandNameJP:["\u5DE8\u5CA9\u306E\u970A\u7802","\u5DE8\u6A39\u306E\u970A\u7802","\u5DE8\u6D77\u306E\u970A\u7802"],aethersandNameEN:["Endstone Aethersand","Endwood Aethersand","Endtide Aethersand"]}},computed:{newStuff:function(){let a=new Array(5).fill(0);return a[0]=(this.jobData[9]+this.jobData[13]+this.jobData[16]+this.jobData[4])*3+(this.tank.bracelets+this.healer.bracelets+this.dragoonAndReaper.bracelets+this.samuraiAndMonk.bracelets+this.ninja.bracelets+this.rangedDPS.bracelets+this.magicDPS.bracelets)*2+(this.jobData[2]+this.jobData[12]+this.jobData[8]+this.jobData[11]+this.jobData[10]+this.jobData[15])*2+this.jobData[0]+this.magicDPS.feet+this.healer.feet+(this.jobData[5]+this.jobData[17])*2,a[1]=(this.jobData[9]+this.jobData[16])*2+(this.jobData[0]+this.jobData[1]+this.jobData[2]+this.jobData[3]+this.jobData[12]+this.jobData[8]+this.jobData[11]+this.jobData[10]+this.jobData[14]+this.jobData[15])*3+this.jobData[0]+(this.tank.head+this.dragoonAndReaper.head+this.samuraiAndMonk.head+this.ninja.head)*2+(this.samuraiAndMonk.body+this.ninja.body)*3+(this.tank.hands+this.dragoonAndReaper.hands+this.samuraiAndMonk.hands+this.ninja.hands+this.tank.feet+this.ninja.feet)*2+(this.jobData[18]+this.jobData[6]+this.jobData[7])*2+this.healer.head+this.healer.hands+this.dragoonAndReaper.feet+this.samuraiAndMonk.feet+this.rangedDPS.feet+(this.tank.body+this.dragoonAndReaper.body)*2,a[2]=(this.jobData[13]+this.jobData[4])*3+(this.jobData[1]+this.jobData[3]+this.jobData[14])*2+this.tank.head+this.samuraiAndMonk.head+(this.jobData[18]+this.jobData[6]+this.jobData[7])*3+(this.magicDPS.head+this.healer.head*2+this.healer.hands)*2+this.tank.earring+this.healer.earring+this.dragoonAndReaper.earring+this.samuraiAndMonk.earring+this.ninja.earring+this.rangedDPS.earring+this.magicDPS.earring+this.tank.rings+this.healer.rings+this.dragoonAndReaper.rings+this.samuraiAndMonk.rings+this.ninja.rings+this.rangedDPS.rings+this.magicDPS.rings+this.magicDPS.hands+this.tank.necklace+this.healer.necklace+this.dragoonAndReaper.necklace+this.samuraiAndMonk.necklace+this.ninja.necklace+this.rangedDPS.necklace+this.magicDPS.necklace+this.rangedDPS.body+this.magicDPS.body*2+this.healer.body*2+this.rangedDPS.hands,a[3]=this.ninja.head+this.ninja.hands+this.tank.feet+this.ninja.feet+this.magicDPS.head+this.rangedDPS.body*3+(this.magicDPS.hands+this.dragoonAndReaper.feet+this.samuraiAndMonk.feet+this.rangedDPS.feet+this.magicDPS.feet+this.healer.feet)*2+this.tank.necklace+this.healer.necklace+this.dragoonAndReaper.necklace+this.samuraiAndMonk.necklace+this.ninja.necklace+this.rangedDPS.necklace+this.magicDPS.necklace+(this.tank.legs+this.healer.legs+this.dragoonAndReaper.legs+this.samuraiAndMonk.legs+this.ninja.legs+this.rangedDPS.legs+this.magicDPS.legs)*2+(this.jobData[5]+this.jobData[17])*3,a[4]=this.dragoonAndReaper.head+(this.samuraiAndMonk.body+this.ninja.body)*2+this.tank.hands+this.samuraiAndMonk.hands+this.dragoonAndReaper.hands+this.tank.earring+this.healer.earring+this.dragoonAndReaper.earring+this.samuraiAndMonk.earring+this.ninja.earring+this.rangedDPS.earring+this.magicDPS.earring+this.rangedDPS.body*3+this.rangedDPS.head*2+(this.tank.body+this.dragoonAndReaper.body+this.magicDPS.body+this.healer.body)*3+this.rangedDPS.hands*2+(this.tank.legs+this.healer.legs+this.dragoonAndReaper.legs+this.samuraiAndMonk.legs+this.ninja.legs+this.rangedDPS.legs+this.magicDPS.legs)*3,a},oldStuff:function(){let a=new Array(5).fill(0);return a[0]=this.jobData[9]+this.jobData[13]+this.jobData[4]+this.jobData[16],a[1]=this.jobData[0]+this.jobData[1]+this.jobData[2]+this.jobData[3]+this.jobData[12]+this.jobData[8]+this.jobData[11]+this.jobData[10]+this.jobData[14]+this.jobData[15]+this.tank.head+this.dragoonAndReaper.head+this.samuraiAndMonk.head+this.ninja.head+this.samuraiAndMonk.body+this.ninja.body+this.tank.hands+this.dragoonAndReaper.hands+this.samuraiAndMonk.hands+this.ninja.hands+this.tank.feet+this.ninja.feet+this.rangedDPS.body+this.magicDPS.feet+this.healer.feet,a[2]=this.tank.bracelets+this.dragoonAndReaper.bracelets+this.samuraiAndMonk.bracelets+this.ninja.bracelets+this.healer.bracelets+this.rangedDPS.bracelets+this.magicDPS.bracelets+this.jobData[18]+this.jobData[6]+this.jobData[7]+this.magicDPS.head+this.healer.head+this.healer.hands+this.tank.earring+this.dragoonAndReaper.earring+this.samuraiAndMonk.earring+this.ninja.earring+this.healer.earring+this.rangedDPS.earring+this.magicDPS.earring+this.tank.rings+this.dragoonAndReaper.rings+this.samuraiAndMonk.rings+this.ninja.rings+this.healer.rings+this.rangedDPS.rings+this.magicDPS.rings+this.tank.necklace+this.dragoonAndReaper.necklace+this.samuraiAndMonk.necklace+this.ninja.necklace+this.healer.necklace+this.rangedDPS.necklace+this.magicDPS.necklace,a[3]=this.dragoonAndReaper.feet+this.samuraiAndMonk.feet+this.rangedDPS.feet+this.rangedDPS.body+this.dragoonAndReaper.body+this.rangedDPS.hands,a[4]=this.magicDPS.hands+this.tank.body+this.magicDPS.body+this.healer.body+this.tank.legs+this.dragoonAndReaper.legs+this.samuraiAndMonk.legs+this.ninja.legs+this.healer.legs+this.rangedDPS.legs+this.magicDPS.legs,a},alkahest:function(){let a=new Array(5).fill(0);return a[0]=(this.jobData[9]+this.jobData[12]+this.jobData[8]+this.jobData[11])*2+(this.dragoonAndReaper.head+this.dragoonAndReaper.body+this.dragoonAndReaper.hands+this.dragoonAndReaper.legs+this.dragoonAndReaper.feet)*2+(this.samuraiAndMonk.head+this.samuraiAndMonk.body+this.samuraiAndMonk.hands+this.samuraiAndMonk.legs+this.samuraiAndMonk.feet)*2+this.dragoonAndReaper.earring+this.dragoonAndReaper.necklace+this.dragoonAndReaper.bracelets+this.dragoonAndReaper.rings+this.samuraiAndMonk.earring+this.samuraiAndMonk.necklace+this.samuraiAndMonk.bracelets+this.samuraiAndMonk.rings,a[1]=(this.jobData[13]+this.jobData[14]+this.jobData[15]+this.jobData[10])*2+(this.ninja.head+this.ninja.body+this.ninja.hands+this.ninja.legs+this.ninja.feet)*2+(this.rangedDPS.head+this.rangedDPS.body+this.rangedDPS.hands+this.rangedDPS.legs+this.rangedDPS.feet)*2+this.ninja.earring+this.ninja.necklace+this.ninja.bracelets+this.ninja.rings+this.rangedDPS.earring+this.rangedDPS.necklace+this.rangedDPS.bracelets+this.rangedDPS.rings,a[2]=(this.jobData[0]+this.jobData[1]+this.jobData[2]+this.jobData[3])*2+(this.tank.head+this.tank.body+this.tank.hands+this.tank.legs+this.tank.feet)*2+this.tank.earring+this.tank.necklace+this.tank.bracelets+this.tank.rings,a[3]=(this.jobData[16]+this.jobData[17]+this.jobData[18])*2+(this.magicDPS.head+this.magicDPS.body+this.magicDPS.hands+this.magicDPS.legs+this.magicDPS.feet)*2+this.magicDPS.earring+this.magicDPS.necklace+this.magicDPS.bracelets+this.magicDPS.rings,a[4]=(this.jobData[4]+this.jobData[5]+this.jobData[6]+this.jobData[7])*2+(this.healer.head+this.healer.body+this.healer.hands+this.healer.legs+this.healer.feet)*2+this.healer.earring+this.healer.necklace+this.healer.bracelets+this.healer.rings,a},aethersand:function(){let a=new Array(3).fill(0);return a[0]=this.jobData[9]+this.jobData[13]+this.tank.bracelets+this.dragoonAndReaper.bracelets+this.samuraiAndMonk.bracelets+this.ninja.bracelets+this.healer.bracelets+this.rangedDPS.bracelets+this.magicDPS.bracelets+this.jobData[12]+this.jobData[8]+this.jobData[11]+this.jobData[10]+this.jobData[14]+this.jobData[15]+this.samuraiAndMonk.body+this.ninja.body+this.tank.hands+this.dragoonAndReaper.hands+this.samuraiAndMonk.hands+this.ninja.hands+this.healer.hands+this.rangedDPS.body+this.magicDPS.hands+this.tank.necklace+this.dragoonAndReaper.necklace+this.samuraiAndMonk.necklace+this.ninja.necklace+this.healer.necklace+this.rangedDPS.necklace+this.magicDPS.necklace+this.tank.body+this.dragoonAndReaper.body+this.magicDPS.body+this.healer.body+this.rangedDPS.hands,a[1]=this.jobData[16]+this.jobData[0]+this.jobData[1]+this.jobData[2]+this.jobData[3]+this.tank.head+this.dragoonAndReaper.head+this.samuraiAndMonk.head+this.ninja.head+this.jobData[18]+this.magicDPS.head+this.healer.head+this.tank.earring+this.dragoonAndReaper.earring+this.samuraiAndMonk.earring+this.ninja.earring+this.healer.earring+this.rangedDPS.earring+this.magicDPS.earring+this.rangedDPS.head+this.tank.legs+this.dragoonAndReaper.legs+this.samuraiAndMonk.legs+this.ninja.legs+this.healer.legs+this.rangedDPS.legs+this.magicDPS.legs+this.jobData[17],a[2]=this.jobData[4]+this.tank.feet+this.ninja.feet+this.jobData[6]+this.jobData[7]+this.tank.rings+this.dragoonAndReaper.rings+this.samuraiAndMonk.rings+this.ninja.rings+this.healer.rings+this.rangedDPS.rings+this.magicDPS.rings+this.dragoonAndReaper.feet+this.samuraiAndMonk.feet+this.rangedDPS.feet+this.magicDPS.feet+this.healer.feet+this.jobData[5],a}},methods:{roleActive(a){this.roleFlag=a},whichRole(a){switch(a){case 0:return this.tank;case 1:return this.healer;case 2:return this.dragoonAndReaper;case 3:return this.samuraiAndMonk;case 4:return this.ninja;case 5:return this.rangedDPS;case 6:return this.magicDPS;default:return this.tank}},resetRole(){for(let a in this.tank)this.tank[a]=0,this.healer[a]=0,this.dragoonAndReaper[a]=0,this.samuraiAndMonk[a]=0,this.ninja[a]=0,this.rangedDPS[a]=0,this.magicDPS[a]=0},addFullRole(a){for(let e in this.tank)switch(a){case 0:{this.tank[e]++;break}case 1:{this.healer[e]++;break}case 2:{this.dragoonAndReaper[e]++;break}case 3:{this.samuraiAndMonk[e]++;break}case 4:{this.ninja[e]++;break}case 5:{this.rangedDPS[e]++;break}case 6:{this.magicDPS[e]++;break}}},resetJob(){this.jobData.fill(0)},changeLang(){this.langFlag=="JP"?this.langFlag="EN":this.langFlag="JP"},changeDark(){this.darkMode=!this.darkMode}}}),aa={class:"container mx-auto h-full w-full bg-gray-100 dark:bg-gray-900"},ea={class:"flex gap-4"},ta={class:"grid xl:grid-rows-2 md:grid-rows-7 xl:grid-flow-col gap-2"},sa={class:"card"},ia={class:"card-body grid grid-cols-3 gap-4"},na={class:"role"},ra={class:"gear col-span-2 grid grid-flow-row-dense grid-cols-2 grid-rows-5"},ha=m("\u6E05\u7A7A"),oa=m("\u6DFB\u52A0\u6574\u5957"),da={class:"card"},la={class:"m-4"},ua={class:"m-4"},ga=m("\u6E05\u7A7A"),ca={class:"card"},Da=t("div",{class:"card-header"},[t("span",null,"\u65B0\u534A\u6210\u54C1")],-1),ma={class:"card-body grid grid-rows-5 grid-flow-col gap-2"},ba=v('<img src="'+M+'" alt="" class="itemIcon"><img src="'+N+'" alt="" class="itemIcon"><img src="'+w+'" alt="" class="itemIcon"><img src="'+I+'" alt="" class="itemIcon"><img src="'+L+'" alt="" class="itemIcon">',5),ka={class:"card"},Aa=t("div",{class:"card-header"},[t("span",null,"\u65E7\u534A\u6210\u54C1")],-1),fa={class:"card-body grid grid-rows-5 grid-flow-col gap-2"},pa=v('<img src="'+V+'" alt="" class="itemIcon"><img src="'+J+'" alt="" class="itemIcon"><img src="'+$+'" alt="" class="itemIcon"><img src="'+G+'" alt="" class="itemIcon"><img src="'+O+'" alt="" class="itemIcon">',5),ja={class:"card"},Sa=t("div",{class:"card-header"},[t("span",null,"\u5E7B\u6C34")],-1),va={class:"card-body grid grid-rows-5 grid-flow-col gap-2"},Pa=v('<img src="'+z+'" alt="" class="itemIcon"><img src="'+U+'" alt="" class="itemIcon"><img src="'+Q+'" alt="" class="itemIcon"><img src="'+q+'" alt="" class="itemIcon"><img src="'+K+'" alt="" class="itemIcon">',5),Ea={class:"card"},_a=t("div",{class:"card-header"},[t("span",null,"\u7075\u7802")],-1),ya={class:"card-body grid grid-rows-3 grid-flow-col gap-2"},Ba=t("img",{src:T,alt:"",class:"itemIcon"},null,-1),Ca=t("img",{src:H,alt:"",class:"itemIcon"},null,-1),Fa=t("img",{src:W,alt:"",class:"itemIcon"},null,-1),Ra={class:"card"},Ma=m("\u70B9\u6211\u5207\u6362\u8BED\u8A00\uFF01"),Na=m("\u6697\u9ED1\u6A21\u5F0F");function wa(a,e,f,p,o,d){const k=y,j=B,P=C;return r(),n("div",{class:g({dark:a.darkMode})},[t("div",aa,[t("div",ea,[t("div",ta,[t("div",sa,[t("div",ia,[t("div",na,[t("button",{class:g(["btn",{active:a.roleFlag===0}]),onClick:e[0]||(e[0]=s=>a.roleActive(0))},"\u9632\u62A4\u804C\u4E1A"+h(),3),t("button",{class:g(["btn",{active:a.roleFlag===1}]),onClick:e[1]||(e[1]=s=>a.roleActive(1))},"\u6CBB\u7597\u804C\u4E1A",2),t("button",{class:g(["btn",{active:a.roleFlag===2}]),onClick:e[2]||(e[2]=s=>a.roleActive(2))},"\u9F99\u9A91\u58EB/\u9490\u9570\u5BA2",2),t("button",{class:g(["btn",{active:a.roleFlag===3}]),onClick:e[3]||(e[3]=s=>a.roleActive(3))},"\u6B66\u58EB/\u6B66\u50E7",2),t("button",{class:g(["btn",{active:a.roleFlag===4}]),onClick:e[4]||(e[4]=s=>a.roleActive(4))},"\u5FCD\u8005",2),t("button",{class:g(["btn",{active:a.roleFlag===5}]),onClick:e[5]||(e[5]=s=>a.roleActive(5))},"\u8FDC\u7A0B\u7269\u7406\u804C\u4E1A",2),t("button",{class:g(["btn",{active:a.roleFlag===6}]),onClick:e[6]||(e[6]=s=>a.roleActive(6))},"\u8FDC\u7A0B\u9B54\u6CD5\u804C\u4E1A",2)]),t("div",ra,[(r(!0),n(l,null,u(a.whichRole(a.roleFlag),(s,i,S)=>(r(),n("div",null,[m(h(a.gearName[S])+" ",1),c(k,{modelValue:a.whichRole(a.roleFlag)[i],"onUpdate:modelValue":E=>a.whichRole(a.roleFlag)[i]=E,min:0,max:10},null,8,["modelValue","onUpdate:modelValue"])]))),256)),t("div",null,[c(j,{onClick:e[7]||(e[7]=s=>a.resetRole())},{default:A(()=>[ha]),_:1}),c(j,{onClick:e[8]||(e[8]=s=>a.addFullRole(a.roleFlag))},{default:A(()=>[oa]),_:1})])])])]),t("div",da,[c(P,{span:20,class:"gear grid grid-rows-5 grid-flow-col"},{default:A(()=>[(r(!0),n(l,null,u(a.jobName,(s,i)=>(r(),n("div",la,[m(h(s)+" ",1),c(k,{modelValue:a.jobData[i],"onUpdate:modelValue":S=>a.jobData[i]=S,min:0,max:10,size:"small"},null,8,["modelValue","onUpdate:modelValue"])]))),256)),t("div",ua,[c(j,{onClick:e[9]||(e[9]=s=>a.resetJob())},{default:A(()=>[ga]),_:1})])]),_:1})]),t("div",ca,[Da,t("div",ma,[ba,a.langFlag=="JP"?(r(!0),n(l,{key:0},u(a.newStuffNameJP,(s,i)=>(r(),n("div",null,h(s)+" - "+h(a.newStuff[i]),1))),256)):D("",!0),a.langFlag=="EN"?(r(!0),n(l,{key:1},u(a.newStuffNameEN,(s,i)=>(r(),n("div",null,h(s)+" - "+h(a.newStuff[i]),1))),256)):D("",!0)])]),t("div",ka,[Aa,t("div",fa,[pa,a.langFlag=="JP"?(r(!0),n(l,{key:0},u(a.oldStuffNameJP,(s,i)=>(r(),n("div",null,h(s)+" - "+h(a.oldStuff[i]),1))),256)):D("",!0),a.langFlag=="EN"?(r(!0),n(l,{key:1},u(a.oldStuffNameEN,(s,i)=>(r(),n("div",null,h(s)+" - "+h(a.oldStuff[i]),1))),256)):D("",!0)])]),t("div",ja,[Sa,t("div",va,[Pa,a.langFlag=="JP"?(r(!0),n(l,{key:0},u(a.alkahestNameJP,(s,i)=>(r(),n("div",null,h(s)+" - "+h(a.alkahest[i]),1))),256)):D("",!0),a.langFlag=="EN"?(r(!0),n(l,{key:1},u(a.alkahestNameEN,(s,i)=>(r(),n("div",null,h(s)+" - "+h(a.alkahest[i]),1))),256)):D("",!0)])]),t("div",Ea,[_a,t("div",ya,[Ba,Ca,Fa,a.langFlag=="JP"?(r(!0),n(l,{key:0},u(a.aethersandNameJP,(s,i)=>(r(),n("div",null,h(s)+" - "+h(a.aethersand[i]),1))),256)):D("",!0),a.langFlag=="EN"?(r(!0),n(l,{key:1},u(a.aethersandNameEN,(s,i)=>(r(),n("div",null,h(s)+" - "+h(a.aethersand[i]),1))),256)):D("",!0)])]),t("div",Ra,[c(j,{onClick:e[10]||(e[10]=s=>a.changeLang())},{default:A(()=>[Ma]),_:1}),c(j,{onClick:e[11]||(e[11]=s=>a.changeDark())},{default:A(()=>[Na]),_:1})])])])])],2)}var Ia=X(x,[["render",wa]]);F(Ia).mount("#app");
