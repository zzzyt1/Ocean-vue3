<script setup>
import AnimalItem from '../../components/AnimalItem.vue';
import { ref } from "vue";


const animalList = ref([
  {
    name: '白鲸',
    location: '极地世界•白鲸水下表演场',
    img: 'http://localhost:3000/public/animal/白鲸.png',
    scientificName: 'Delphinapterus leucas',
    alias: '贝鲁卡鲸、海金丝雀',
    bodyLength: '3-5m',
    bodyWeight: '出生体重：80kg；成年体重：0.7-1.6t',
    popularScience: '拥有“海中金丝雀”称号的白鲸是一个优秀的“口技”专家，能发出几百种声音，而且发出的声音变化多端。白鲸还可以发出铰链声、铃声、汽船声等。白鲸不停地"歌唱"，实际上是同伴之间的一种交流。',
    distributed: '北冰洋及附近海域'
  },
  {
    name: '北极狐',
    location: '极地世界·北极动物村',
    img: 'http://localhost:3000/public/animal/北极狐.png',
    scientificName: 'Vulpes Lagopus',
    alias: '蓝狐、白狐',
    bodyLength: '体长50-60cm，尾长20-25cm',
    bodyWeight: '2.5-4kg',
    popularScience: '北极狐的呆萌，不仅仅是它毛茸茸的外表，还有它的小脚酷似野兔的脚，所以它的学名意思解作有野兔脚的狐狸之意。它那一身毛茸茸的外表也绝不是徒有虚名，零下50℃的冰原上生活，它也是过得自由自在，很是潇洒。',
    distributed: '北极地区'
  },
  {
    name: '海象',
    location: '极地世界•功夫海象表演场',
    img: 'http://localhost:3000/public/animal/海象.png',
    scientificName: 'Odobenus rosmarus',
    alias: '',
    bodyLength: '2.7-3.2m',
    bodyWeight: '雄性体重1200-1600kg，雌性体重600-850kg',
    popularScience: '成年海象的皮肤为红棕色，随着年龄的增长，颜色会变浅，年老的海象甚至会变成肉桂色、粉色，在野外冰冷的水中，由于皮肤血管收缩，身体呈灰色，甚至白色。海象的皮肤很厚，颈部和肩部的皮肤可达10cm，雄性海象的颈部和肩部有瘤状结构（第二性征），十分明显。',
    distributed: '以北冰洋为中心，也包括大西洋和太平洋的最北部一带海域'
  },
  {
    name: '沙虎鲨',
    location: '海洋世界•海底通道',
    img: 'http://localhost:3000/public/animal/沙虎鲨.png',
    scientificName: 'Carcharias taurus ',
    alias: '戟齿砂鲛、戟齿锥齿鲨',
    bodyLength: '3-3.4m',
    bodyWeight: '95-110kg',
    popularScience: '沙虎鲨的残忍在于，它们在母亲的子宫里已经开始了捕食练习，杀死自己的同胞兄弟，获得生命。所以每次雌性鲨鱼怀孕后，只会有2至4头幼鲨出生，出生后的幼鲨已有优越的猎食本能。',
    distributed: '大西洋、印度洋及太平洋'
  },
  {
    name: '瓶鼻海豚',
    location: '海洋世界•海豚湾之恋表演场',
    img: 'http://localhost:3000/public/animal/瓶鼻海豚.png',
    scientificName: 'Tursiops truncatus',
    alias: '宽吻海豚',
    bodyLength: '1.9-3.9m',
    bodyWeight: '出生体重：15-30kg；成年体重：150-650kg',
    popularScience: '海豚十分聪明伶俐，惹人喜爱，这是因为它们有一个发达的大脑，成年海豚的智商相当于4岁儿童的智商！海豚的睡眠和人类很不一样，它们的大脑两半球是交替睡眠，因此它们即使在睡眠时也始终能保持足够的活动能力和必要的姿态。',
    distributed: '广泛分布世界各地的热带及冷温带水域'
  },
  {
    name: '巴布亚企鹅 ',
    location: '极地世界•南极企鹅岛',
    img: 'http://localhost:3000/public/animal/巴布亚企鹅.png',
    scientificName: 'Pygoscelis papua',
    alias: '白眉企鹅、金图企鹅',
    bodyLength: '60-80cm',
    bodyWeight: '6kg',
    popularScience: '巴布亚企鹅是企鹅中游泳最快的，时速可达36公里每小时。尽管它们游得很快，但潜水时间较短，且潜水深度一般也不超过20米。巴布亚企鹅通常在近海较浅的海域觅食，主要食物为各种非底栖鱼类和南极磷虾。',
    distributed: '主要分布于亚南极地区'
  },
  {
    name: '斑海豹',
    location: '极地世界•海豹广场',
    img: 'http://localhost:3000/public/animal/斑海豹.png',
    scientificName: 'Phoca largha',
    alias: '大齿斑海豹、大齿海豹',
    bodyLength: '1.2～2m',
    bodyWeight: '约100kg。',
    popularScience: '斑海豹的祖先是生活在陆地上的肉食性哺乳动物，随着环境变化，为了更适应水中生活，它们的身体变成了流线型，腿脚演变成了更加便于划水的鳍状，被称作鳍脚类动物。斑海豹是国家二级保护动物，也是唯一在中国海域进行繁育的鳍脚类动物。',
    distributed: '生活在北半球的西北太平洋'
  },
  {
    name: '北极熊',
    location: '极地世界•北极动物村',
    img: 'http://localhost:3000/public/animal/北极熊.png',
    scientificName: 'Ursus maritimus',
    alias: '白熊',
    bodyLength: '体长2.8m，肩高1.6m',
    bodyWeight: '雄性北极熊体重为300~800kg，雌性为150~400kg',
    popularScience: '北极熊不仅体型巨大，视力和听力与人类相当，嗅觉是犬类的7倍，奔跑的时速可达40公里，还能在海里以时速10公里游97公里远，是让任何猎物都闻风丧胆的极地霸主。',
    distributed: '北冰洋附近'
  },
  {
    name: '鳐鱼',
    location: '海洋世界•舞鲨地带',
    img: 'http://localhost:3000/public/animal/鳐鱼.png',
    scientificName: 'Rajiformes',
    alias: '劳子鱼胆、老板鱼胆',
    bodyLength: '体型大小各异，小鳐成体仅50厘米，大鳐可长达8米',
    bodyWeight: '',
    popularScience: '鳐鱼内骨骼完全由软骨构成，有些部位钙化后也有一定的硬度，但不同于经过骨化形成的硬骨组织。',
    distributed: '主要生活在东海和南海'
  },
]);

</script>

<template>
  <div class="animalclass">
    <div class="item" v-for="item in animalList" :key="item.name">
      <AnimalItem :animal="item" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.animalclass {
  display: flex;
  flex-wrap: wrap;
  width: 1230px;
  margin: 0 auto;

  .item {
    margin: 20px;
  }
}
</style>