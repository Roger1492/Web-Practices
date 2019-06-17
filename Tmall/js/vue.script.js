// Vue组件生成catgory-list
var Child = Vue.extend({
  props: ['l'],
  template: '<a href="javascript:void(0);">{{l}}</a>'
})

Vue.component('cate-list', {
  props: ['cate'],
  template: `<div>
    <section>{{cate.first}}</section>
    <section>
      <new-blog v-for="l in cate.second" :l="l"></new-blog>  
    </section>
    </div>`,
  components: {
    'new-blog': Child
  }
})

Vue.component('little-context-wrap',{
  props: ['mp3s'],
  template: `
    <a href="javascript:void(0);">
      <img class="test" />
      <div>{{mp3s.text}}</div>
      <span>￥{{mp3s.price}}</span>
    </a>
  `
})

new Vue({
  el: '#category-list',
  data: {
    cates1: [
      { first: '当季流行 >', second: ['女装新品','商场同款','仙女连衣裙','T恤','衬衫','时髦外套','休闲裤','牛仔裤','无痕文胸','运动文胸','潮流家居服','百搭船袜']},
      { first: '精选上装 >', second: ['毛呢外套','羽绒服','棉服','丝绒卫衣','毛针织衫','皮毛一体','皮草','毛衣','衬衫','针织衫','T恤','短外套','小西装','风衣']},
      { first: '浪漫裙装 >', second: ['连衣裙','半身裙','A字裙','大摆裙','包臀裙','百褶裙','长袖连衣裙','棉麻连衣裙','牛仔裤','累死连衣裙','真丝连衣裙','印花连衣裙']},
      { first: '女士下装 >', second: ['休闲裤','阔腿裤','牛仔裤','开叉运动裤','哈伦裤','背带裤','小脚裤','西装裤','短裤']},
      { first: '特色女装 >', second: ['时尚套装','休闲套装','日系女装','精选妈妈装','大码女装','职业套装','优雅旗袍','精致礼服','婚纱','唐装','小码女装','短外套','小西装','风衣']},
      { first: '文胸塑身 >', second: ['光面文胸','运动文胸','美背文胸','聚拢文胸','大杯文胸','轻薄塑身']},
      { first: '家居服 >', second: ['春夏家居服','纯棉家居服','莫代尔家居服','真丝家居服','春夏睡裙','男士家居服','情侣家居服','性感睡裙']},
      { first: '内裤背心 >', second: ['男士内裤','女士内裤','男士内裤多条装','女士内裤多条装','莫代尔内裤']},
    ],
    cates2: [
      { first: '当季流行 >', second: ['当季新品','商场同款','印花T恤','潮流卫衣','牛仔衬衫','修身夹克','保暖棉服','棉麻面料','温暖的针织衫','修身西服','秋冬风衣','束脚裤','九分裤','破洞牛仔裤','跑步鞋','休闲鞋','篮球鞋','自行车','平衡车','帆布鞋','运动套装','运动卫衣','鱼竿','冲锋衣','跑步机','电动车']},
      { first: '男士外套 >', second: ['夹克','单西','棒球服','棉衣','毛呢大衣','风衣','西服套装','羽绒服','皮衣','运动服','工装外套','针织开衫','马甲']},
      { first: '男士内搭 >', second: ['短袖T恤','POLO衫','短袖衬衫','背心','卫衣','针织衫/毛衣','长袖衬衫','长袖T恤']},
      { first: '男士裤装 >', second: ['小脚裤','九分裤','短裤','休闲裤','牛仔裤','针织衫','西裤','运动裤','工装裤']},
      { first: '特色男装 >', second: ['潮牌','中老年','加大码','职场精英','中国风','情侣装']},
      { first: '运动鞋 >', second: ['跑步鞋','运动鞋','板鞋','潮鞋','休闲鞋','篮球鞋','足球鞋']},
      { first: '运动服 >', second: ['短袖T恤','运动裤','运动内衣','速干T恤','运动Polo','运动卫衣','运动套装','运动短裤','健身服','运动夹克']},
      { first: '户外鞋服 >', second: ['冲锋衣','抓绒衣','登山鞋','户外休闲衣','军迷','钓鱼服']},
    ],
    cates3: [
      { first: '推荐女鞋 >', second: ['潮流过膝靴','气质百搭裸靴','永远的帆布鞋','流行松糕底','英伦牛津鞋']},
      { first: '潮流男鞋 >', second: ['商场同款','休闲鞋','正装皮鞋','休闲皮鞋','板鞋','户外休闲','帆布鞋','运动休闲','乐福鞋','豆豆鞋','布洛克','帆船鞋','布鞋']},
      { first: '女单鞋 >', second: ['单鞋','小白鞋','商场同款','帆布鞋','深口单鞋','浅口单鞋','平地单鞋','高跟单鞋','坡跟单鞋','豆豆鞋','乐福鞋','牛津鞋']},
      { first: '特色鞋 >', second: ['妈妈鞋','大码女鞋','小码女鞋','女内增高','男内增高','软清风','爸爸鞋','大妈男鞋','小码男鞋']},
      { first: '潮流女包 >', second: ['新品推荐','商场同款','女士钱包','单肩包','斜挎包','手提包','手拿包','腰包','胸包','化妆包']},
      { first: '精品男包 >', second: ['男士钱包','收纳包','胸包','腰包','手拿包','手提包','斜挎包','单肩包','商场同款','新品推荐']},
      { first: '功能箱包 >', second: ['旅行箱','万向轮箱','旅行袋','女士双肩包','男士双肩包','韩版双肩包','铆钉双肩包','女士钱包','男士钱包','大容量','印花']},
    ],
    cates4: [
      { first: '护肤品 >', second: ['官方直售','面膜','护肤套装','乳液面霜','精华液','护手霜','爽肤水','洁面眼霜','身体乳','卸妆','身体护理','男士护理','精油芳疗','丰胸','面部喷雾','T区护理','去角质','补水','祛痘','敏感修护','线上专柜']},
      { first: '彩  妆 >', second: ['时尚彩妆','香水','BB霜','美容工具','口红','隔离','粉底','粉饼','气垫bb','指甲油','美甲工具','眉笔','睫毛膏','眼线','唇彩','眼影','蜜粉','彩妆套餐']},
      { first: '男士护肤 >', second: ['洁面','爽肤水','乳液/面霜','面部精华','眼部护理','翻晒','唇部护理','T区护理','控油']},
      { first: '肤质推选 >', second: ['混合偏油性','中性偏干性','敏感性','干性','油性','混合型','中性']},
      { first: '美发护发 >', second: ['洗发水','进口洗发水','护发素','发膜','洗护套装','护发精油','头发造型','弹力素','染发霜','整顶假发','假发配件','男性假发']},
      { first: '口腔护理 >', second: ['牙膏','进口牙膏','牙刷','进口牙刷','漱口水','牙线','牙粉','口气清新剂','牙贴','口腔美白','假牙清洁']},
      { first: '身体女性 >', second: ['沐浴露','香皂','泡澡浴盐','护足','洗手液','手动剃须刀','卫生巾','成人护垫','私处洗液','卫生棉条']},
    ],
    cates5: [
      { first: '黄金首饰 >', second: ['耳钉','黄金项链','婚嫁套饰','黄金对戒','足金饰品','K金饰品','商场同款']},
      { first: '钻石彩宝 >', second: ['结婚钻戒','钻石吊坠','钻石耳饰','钻石手链','裸钻定制','红蓝宝石','绿宝石','坦桑石','其他天然宝石']},
      { first: '珍珠玉翠 >', second: ['珍珠项链送妈妈','海水珍珠','和田玉','翡翠摆件','翡翠手镯','翡翠项链','琥珀手链','天然琥珀','原矿琥珀']},
      { first: '潮流饰品 >', second: ['明星同款','传统银饰','木手串','银手镯','石榴石手链','开口戒指','胸针','宝宝银饰','手链','项链','发饰','手镯','耳饰','戒指','项坠','施华洛世奇','shes','银时代','伊泰莲娜','PH7','Monchhichi','ALEXANDRE']},
      { first: '腕  表 >', second: ['瑞士名表','日韩港表','欧美手表','经典国表','国货精表','男表','女表','情侣表','儿童手表','机械表','石英表','光能表','防水表','运动表','学生表','军表','陶瓷表']},
      { first: '眼  镜 >', second: ['太阳镜','墨镜','眼镜框','近视眼镜','防辐射眼镜','老花镜','司机镜','偏光镜','驾驶镜','3D眼镜','雷朋','暴龙','宝岛眼镜','oakley']},
      { first: '烟  具 >', second: ['电子烟','烟盒','烟斗','烟嘴','烟油','蒸汽烟','水烟','戒烟','女士烟','鼻烟','雪茄']},
    ],
    cates6: [
      { first: '热门手机 >', second: ['小米','iPhone','魅族','荣耀','乐视','OPPO','vivo','三星','华为']},
      { first: '特色手机 >', second: ['AliOS','千元指纹','双卡双待','大屏','自拍','移动','联通','电信','合约机']},
      { first: '手机特惠 >', second: ['打折','秒杀','新品','特卖','实惠','精选']},
      { first: '电脑整机 >', second: ['笔记本','平板电脑','台式机','一体机','DIY','游戏本','iPad','Surface']},
      { first: '智能数码 >', second: ['智能设备','智能手表','智能手环','VR眼镜','智能摄像','智能健康','智能机器人']},
      { first: '游戏组装 >', second: ['DIY电脑','竞技DIY','显示器','游戏本','机械键盘','XBOX','游戏手柄']},
      { first: '硬件存储 >', second: ['显示器','机械键','盘固态硬盘','CPU','显卡','主板','高速U盘','路由器']},
      { first: '摄影摄像 >', second: ['相机','单反','单电微单','摄像机','自拍神器','拍立得','镜头','自拍杆']},
      { first: '影音娱乐 >', second: ['耳机','天猫魔盒','数码影音','家庭影院','蓝牙耳机','网络播放器']},
      { first: '办公文教 >', second: ['文具','电子书','笔类／书写工具','智能投影','打印机','保险箱']},
      { first: '数码配件 >', second: ['手机配件','苹果配件','笔记本配件','平板配件','相机配件','手机车载配件']},
    ],
    cates7: [
      { first: '童  装 >', second: ['商场同款','套装','裤子','外套','T恤','裙子','内衣裤','连体衣','亲子装']},
      { first: '婴儿服 >', second: ['连体衣','内衣套装','裤子','婴儿礼盒','外套','家居服','T恤','反穿衣','肚兜']},
      { first: '童  鞋 >', second: ['学步鞋','运动鞋','亲子鞋','帆布鞋','皮鞋','雨靴','靴子','拖鞋','棉鞋','凉鞋']},
      { first: '车床用品 >', second: ['婴儿推车','学步车','安全座椅','婴儿背带','腰凳','婴儿床','餐椅','睡袋','抱被']},
      { first: '喂  养 >', second: ['奶瓶','奶嘴','水杯','餐具','消毒锅','辅食机','调奶器','暖奶器','围嘴']},
      { first: '洗  护 >', second: ['洗发水','沐浴露','润肤','浴盆','湿巾','洗衣液','洗衣皂','理发器','驱虫止痒']},
      { first: '玩  具 >', second: ['婴儿玩具','儿童自行车','儿童电动车','毛绒玩具','积木','电动遥控','儿童箱包']},
      { first: '天猫动漫 >', second: ['动漫周边','影视周边','手办','高达','魔术道具','COSPLAY','桌游','变形金刚']},
      { first: '奶  粉 >', second: ['牛奶粉','羊奶粉特','殊配方奶粉','宝宝辅食','宝宝零食','宝宝营养DHA']},
      { first: '纸尿裤 >', second: ['纸尿裤','拉拉裤','纸尿片','L','XL','M','S','NB','新生儿组合']},
      { first: '孕  产 >', second: ['孕产用品','孕妈洗护','孕妈装','月子服','哺乳文胸','防辐射','吸奶器','待产包']},
    ],
    cates8: [
      { first: '进口食品 >', second: ['进口零食','进口巧克力','进口饼干','进口糖果','进口坚果','进口果干','进口橄榄油','进口牛奶','进口咖啡','进口饮料','进口葡萄酒','进口洋酒','进口啤酒']},
      { first: '休闲零食 >', second: ['零食','坚果','饼干','蛋糕','红枣','巧克力','猪肉脯','膨化食品','蜜饯','鸭脖','糖果','豆干','曲奇','海苔','肉松饼','牛肉干','鱿鱼丝','糕点']},
      { first: '酒类 >', second: ['白酒','红酒','洋酒','啤酒','黄酒','保健酒','预调酒','配制酒','葡萄酒']},
      { first: '茶叶 >', second: ['西湖','龙井','安吉白茶','绿茶','大红袍','铁观音','普洱茶','玫瑰花茶','柠檬片','菊花茶','花茶','天然粉粉','金骏眉','红茶']},
      { first: '乳品冲饮 >', second: ['牛奶','酸奶','成人奶粉','儿童奶','速溶咖啡','滤挂咖啡','咖啡豆','麦片','奶茶','柚子','茶果汁','汽水','功能饮料','饮用水']},
      { first: '粮油速食 >', second: ['橄榄油','食用油','大米','薏米','玉米','面粉','银耳','桂圆','干香肠','木耳','香菇','方便面','手抓饼','黄油','意大利面','蛋挞皮','调味品','红糖','进口泡面','粽子','寿司']},
      { first: '生鲜水果 >', second: ['牛排','芒果','奇异果','蟹','三文鱼','虾','车厘子','进口鳕鱼','海参','苹果','榴莲','牛肉','牛油果','土鸡','冰淇淋','鸡蛋']},
    ],
    cates9: [
      { first: '新鲜蔬菜 >', second: ['土豆','番薯','山药','莲藕','净菜','玉米','秋葵','大蒜','生姜','南瓜']},
      { first: '冰淇淋 >', second: ['冰淇淋','哈根达斯','movenpick莫凡彼','本杰瑞','tip-top冰淇淋']},
      { first: '蛋类 >', second: ['鸡蛋','鸭蛋','鹅蛋','鸽子蛋','鹌鹑蛋','松花皮蛋','咸鸭蛋','喜蛋']},
      { first: '肉类 >', second: ['牛排','牛腩','牛腱子','牛肉','牛尾','牛肉串','牛杂','羊腿','羊排','羊肉串','羊蝎子','鸡肉','鸡翅','鸡胸','鸡腿','鸭肉','乳鸽','鹅肉']},
      { first: '海鲜水产 >', second: ['鳕鱼','三文鱼','金枪鱼','鲽鱼','斑鱼','比目鱼','多春鱼','马鲛鱼','龙利鱼','秋刀鱼','带鱼','海带','墨鱼','海参','海蜇','鱿鱼','甲鱼','大闸蟹','帝王蟹','雪蟹','黄金蟹','鱼丸','鱼糕/鱼饼','干贝/瑶柱','虾仁','活虾','冻虾','生蚝','北极贝','扇贝','贝类']},
      { first: '新鲜水果 >', second: ['奇异果','车厘子/樱桃','芒果','牛油果','火龙果','苹果','橙子','凤梨','榴莲','山竹','木瓜','柠檬','百香果','椰青','番荔枝/释迦','龙眼','蓝莓','梨','提子','柚子','芭乐','莲雾','桃','草莓','西柚','荔枝','石榴','葡萄/提子','哈密瓜','枇杷','李子','西瓜','菠萝','桔子','香蕉','杨桃','红毛丹/毛荔枝']},
      { first: '精选干货 >', second: ['干贝/瑶柱','虾皮/虾米/海米','大虾','干花胶/鱼胶','海带','紫菜','鱼干','墨鱼干']},
    ],
    cates10: [
      { first: '平板电视 >', second: ['4K超高清','国产','外资品牌','曲面','智能电视','超级大屏','云电视','客厅首选']},
      { first: '空调 >', second: ['热门之选','节能','智能','变频','艺术柜机','挂机','1.5匹','中央空调']},
      { first: '冰箱 >', second: ['热门之选','无霜','三门','对开门','电脑温控','智能冷柜','酒柜']},
      { first: '洗衣机 >', second: ['滚筒洗','波轮洗','洗烘一体','迷你烘干机','双缸/双桶','热门','大容量']},
      { first: '厨房大电 >', second: ['烟灶套装','嵌入式烤箱','嵌入式蒸箱','燃气灶','消毒柜','洗碗机','集成灶']},
      { first: '热水器 >', second: ['电热水器','燃气热水器','遥控','恒温','小厨宝','太阳能','即热式','空气能']},
      { first: '中式厨房 >', second: ['净水器','电饭煲','豆浆机','电热水壶','电压力锅','电磁炉','养生壶']},
      { first: '西式厨房 >', second: ['烤箱','料理机','微波炉','榨汁机','原汁机','面包机','咖啡机','电炸锅']},
      { first: '生活电器 >', second: ['扫地机器人','空气净化器','吸尘器','除湿机','取暖器','挂烫机','干衣机']},
      { first: '个护健康 >', second: ['剃须刀','吹风机','电动牙刷','体重秤','理发器','足浴器','按摩椅']},
      { first: '精品推荐 >', second: ['脱毛器','吊扇','冰淇淋机','碎冰机','空调扇','瘦身带','冷饮机','炒冰机']},
    ],
    cates11: [
      { first: '成套家具 >', second: ['客厅成套家具','餐厅成套家具','卧室成套家具','儿童成套家具']},
      { first: '客厅餐厅 >', second: ['沙发','布艺沙发','皮艺沙发','实木沙发','懒人沙发','电视柜','茶几','鞋柜','单人沙发','餐桌','餐椅','酒柜','餐边柜','吧台','玄关柜','边几']},
      { first: '卧室家具 >', second: ['床','衣柜','床垫','简易衣柜','乳胶床垫','弹簧床垫','棕床垫','实木床','双人床']},
      { first: '书房儿童 >', second: ['电脑桌','电脑椅','书桌','办公桌','书架','书柜','连体书桌柜','折叠床/椅花架','儿童床','高低床','儿童床垫','儿童沙发','儿童椅','儿童学习桌','儿童衣柜']},
      { first: '家装主材 >', second: ['强化复合地板','瓷砖','墙纸','涂料','瓷砖背景墙','油漆','地板','硅藻泥']},
      { first: '厨房卫浴 >', second: ['浴霸','集成吊顶','马桶','淋浴','花洒套装','浴室柜组合','水槽套餐','智能马桶盖']},
      { first: '灯饰照明 >', second: ['吸顶灯','吊灯','水晶吊灯','筒灯','射灯','灯带','灯泡','壁灯','灯具套餐','铜灯']},
      { first: '五金工具 >', second: ['接线板','开关','插座','USB插座','指纹锁','工具箱','监控','摄像头','门锁','拉手']},
      { first: '全屋定制 >', second: ['全屋定制','定制橱柜','定制衣柜门','木门','榻榻米','门窗','特权订金']},
      { first: '装修设计 >', second: ['装修特权','全包','半包','拎包入住','局部装修','设计','软装配饰','监理']},
    ],
    cates12: [
      { first: '整车 >', second: ['v60一口价39.99万','超级试驾','订金购车','新能源汽车','轿车','SUV','MPV']},
      { first: '座垫脚垫 >', second: ['秋冬座垫','汽车脚垫','专用座垫','专用座套','女性座垫','通用座垫']},
      { first: '机油轮胎 >', second: ['全合成机油','半合成机油','矿物质机油','汽车轮胎','雪地胎','防爆胎']},
      { first: '电子导航 >', second: ['行车记录仪','安全预警仪','后视镜','导航','车载导航','便携式导航','GPS定位']},
      { first: '车载电器 >', second: ['空气净化器','吸尘器','车载冷暖箱','车载MP3','逆变器','手机充电器','一拖三']},
      { first: '维修保养 >', second: ['雨刮器','空调滤芯','机油滤芯','刹车片','火花塞','汽车电瓶','大灯总成']},
      { first: '美容清洗 >', second: ['洗车机','水枪','车蜡','底盘','装甲镀晶','汽油添加剂','玻璃水','补漆笔']},
      { first: '汽车装饰 >', second: ['香水','挂件','手机支架','摆件','方向盘套','腰靠头枕','尾箱垫','车震床']},
      { first: '安全自驾 >', second: ['安全座椅','车载提篮','轮胎报警器','充气泵','安全锤','应急工具','应急电源']},
      { first: '外饰改装 >', second: ['汽车贴膜','装饰灯','改色膜','脚踏板','车顶架','汽车车衣','车顶箱','装饰条']},
      { first: '汽车服务 >', second: ['天猫养车','加油卡','4S保养','上门保养','连锁保养','镀晶服务','打蜡服务']},
    ],
    cates13: [
      { first: '当季热卖 >', second: ['印花四件套','羽绒被','蚕丝被','羊毛被','棉花被','毛毯','床笠','冬季棉拖','沙发垫','地毯','浴巾','定制窗帘','抱枕','被子','两用坐垫','国际家纺床品','国际居家布艺','国际家居饰品']},
      { first: '床上用品 >', second: ['四件套','枕头','枕芯','床单','被子','被套','床垫','针织棉四件套','床帘','枕套','真丝枕套','枕巾','毯子','毛巾毯','乳胶枕','颈椎枕','U型枕','记忆枕','婚庆床品','儿童床品','床罩']},
      { first: '居家布艺 >', second: ['窗帘','遮光窗帘','成品窗帘','进口地毯','客厅地毯','卧室地毯','沙发套','沙发巾','家居拖鞋','女士棉拖','情侣拖鞋','毛巾','纯棉毛巾','浴袍','地垫','防滑地垫','儿童泡沫地垫','抱枕','靠垫','坐垫','桌布','防水桌布','餐垫','窗帘杆','十字绣','十字绣抱枕','门帘','飘窗垫','钻石画','防尘罩','百叶帘']},
      { first: '家居饰品 >', second: ['墙贴','墙纸','自粘壁纸','3d立体墙贴','花瓶','摆件','相框','装饰画','电视背景墙','仿真花','闹钟','玻璃贴纸','结婚礼物','香薰炉','电表箱','装饰画','招财猫','雕刻工艺','果盘','数字油画','玻璃花瓶','冰箱贴','首饰盒','壁饰']},
      { first: '鲜花绿植 >', second: ['红玫瑰','香槟','玫瑰','百合','永生花','萌多肉','绿植','盆栽','表白送花','康乃馨','花束混搭','进口玫瑰','多肉植物','微景观','仿真花','绢花','情人节送花','生日送花','鲜花礼盒','多肉花盆','室内植物','园艺工具','绿萝盆栽','干花装饰']},
    ],
    cates14: [
      { first: '保健品 >', second: ['营养补充剂','芦荟','玛卡','减肥','胶原蛋白','维生素C','鱼油','美容养颜','保健食品','缓解体力疲劳','辅助降血脂','增加骨密度','护肝','减肥','通便','抗氧化','改善睡眠','祛黄褐斑','减肥茶','酵素','左旋肉碱','增肌粉','安神补脑']},
      { first: '滋补品 >', second: ['滋补养生','蜂蜜','石斛','阿胶','黑枸杞','冬虫夏草','青钱柳','西洋参','人参','藏红花','蜂胶','阿胶糕','灵芝孢子粉','黄芪','阿胶块','燕窝','铁皮枫斗','三七粉','蜂王浆','雪蛤','四物汤','山药','牛蒡茶','虫草','当归','鹿茸','固元膏']},
      { first: '医药 >', second: ['感冒','咳嗽','腰腿疼痛','妇科用药','男科用药','体检套餐','血糖仪','保健','理疗','针灸','拔罐','成人用品','男用延时','女用情趣','避孕套','润滑剂','情趣跳蛋','飞机杯','缩阴球','震动棒','肾宝片','阳痿早泄','伟哥','肝炎','皮炎','湿疹']},
      { first: '医疗器械 >', second: ['制氧机','体温计','轮椅','胎心仪','理疗仪','助听器','雾化器','呼吸机','拔罐器','口罩','血压计','创口贴','护具','导尿袋','血糖仪','针灸用品','护理床','褥疮垫','家用器械','按摩器材','吸痰器','座便椅','血氧仪','颈椎治疗仪','刮痧','洗鼻器']},
      { first: '隐形眼镜 >', second: ['强生','美瞳','博士伦','海昌','海俪恩','卫康','爱尔康','视康','实瞳','日抛','两周抛','月抛','季抛','半年抛','年抛','护理液','硬镜护理液','双氧水润眼液']},
      { first: '医疗服务 >', second: ['爱康国宾','慈铭体检','瑞慈体检','美年大健康','和睦家','美中宜和','孕期检查','月子中心','医疗美容','玻尿酸','注射瘦脸针','美丽神器','美白服务','补水服务']},
    ],
    cates15: [
      { first: '厨房烹饪 >', second: ['全球家居厨餐具','锅组套装','炒锅','不粘锅','平底锅','高压锅','奶锅','汤锅','炖锅','砂锅','蒸锅','烧水壶','刀具','菜刀','水果刀','刀架','菜板','厨房置物架','烧烤用具','烘培模具','烹饪用具','密封罐','米桶','厨房小工具','厨房清洗']},
      { first: '餐饮具 >', second: ['杯具套装','保温杯','水杯','保温壶','玻璃杯','陶瓷杯','茶杯','咖啡杯','马克杯','红酒杯','水具套装','酒具','咖啡具','餐具','瓷器','餐具套装','碗碟套装','叉勺筷套装','碗筷子茶具套装','保温饭盒','保鲜盒','一次性用品','全球家居','雨伞','太阳伞','雨衣','口罩','挂钟','家用梯','缝纫机','活性炭','创意礼品','婚庆用品','生日礼物','相册','劳保用品','驱虫']},
      { first: '居家礼品 >', second: ['全球家居','雨伞','太阳伞','雨衣','口罩','挂钟','家用梯','缝纫机','活性炭','创意礼品','婚庆用品','生日礼物','相册','劳保用品','驱虫']},
      { first: '收纳清洁 >', second: ['全球家居收纳','全球家居清洁','晾衣架','收纳箱','收纳柜','鞋柜','收纳袋','收纳盒','化妆包','旅行收纳','衣服防尘','脏衣篮','压缩袋','收纳架','置物架','旋转拖把','平板拖把','胶棉拖把','垃圾桶','垃圾袋','置物架','浴帘','梳子']},
      { first: '纸品清洁 >', second: ['软包抽纸','卷筒纸','手帕纸','厨房用纸','湿厕纸','湿巾纸','洗衣液','衣物除菌液','消毒液','洗洁精','油污净','洁厕剂','地板清洁','管道疏通','家私清洁','玻璃清洁','驱蚊驱虫','除湿防潮','驱蚊驱虫','除甲醛']},
      { first: '宠物用品 >', second: ['全球家居宠物','狗粮','猫粮','狗零食','猫零食','窝/笼','宠物服饰','鱼缸','水族世界','牵引带','医疗保健','宠物玩具','猫砂','生活日用']},
    ],
    cates16: [
      { first: '儿童读物 >', second: ['畅销童书','绘本','儿童文学','启蒙认知','益智游戏','幼儿科普','童话书']},
      { first: '畅销小说 >', second: ['都市情感','穿越架空','畅销小说','外国文学','科幻小说','影视同期']},
      { first: '文学文艺 >', second: ['畅销书','散文','随笔文学','传记','涂色字帖','现当代文学','诺贝尔','色铅笔']},
      { first: '社科生活 >', second: ['烘焙','旅游','菜谱','美容/美体','时尚家居','装修','两性健康','两性减肥']},
      { first: '育儿百科 >', second: ['家庭教育','幼儿情绪管理','能力培养','胎教','幼儿心理','孕产妇保健']},
      { first: '学习考试 >', second: ['公务员','托福','职称','英语','建造师考试','注册会计师','四六级英语','考研']},
      { first: '教材教辅 >', second: ['中学教辅','新课标','中小学作文','本科/研究生教材','高职教材','外语学习']},
      { first: '经管励志 >', second: ['管理学','金融与投资','励志','投资与理财','金融学','股市','女性励志','营销']},
      { first: '期刊杂志 >', second: ['订阅','国家地理','时尚杂志','读者','时尚芭莎','昕薇','瑞丽','青年文摘']},
      { first: '进口原版 >', second: ['进口童书','原版小说','原版设计','艺术原版','童书绘本','港台原版书']},
      { first: '大牌乐器 >', second: ['乐器','钢琴','智能钢琴','数码钢琴','电子琴','吉他','尤克里里','古筝']},
    ],
  }
})

new Vue({
  el: '#mainPage-3',
  data: {
    mp3Contexts: [
      {text: '【爆款疯抢】德国LYRA艺雅洞洞铅笔', price: '49'},
      {text: '【天猫超市】Skyworth/创维', price: '1698'}
    ]
  }
})