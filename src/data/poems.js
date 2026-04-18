// 诗歌数据 - 包含115首诗歌，带拼音标注、解析和背景信息
export const poems = [
  {
    id: 1,
    title: '静夜思',
    author: '李白',
    dynasty: '唐代',
    content: '床前明月光，疑是地上霜。举头望明月，低头思故乡。',
    pinyin: [
      'chuáng qián míng yuè guāng，yí shì dì shàng shuāng。jǔ tóu wàng míng yuè，dī tóu sī gù xiāng。'
    ],
    analysis: '这首诗描绘了一个人在夜晚看到月光，误以为是地上的霜，抬头看明月，低头思念故乡的情景。语言简洁，意境深远，表达了游子对故乡的思念之情。',
    background: '李白（701-762），字太白，号青莲居士，唐代伟大的浪漫主义诗人，被后人称为"诗仙"。这首诗作于唐玄宗开元年间，当时李白客游他乡，触景生情，写下了这首脍炙人口的思乡诗。'
  },
  {
    id: 2,
    title: '望庐山瀑布',
    author: '李白',
    dynasty: '唐代',
    content: '日照香炉生紫烟，遥看瀑布挂前川。飞流直下三千尺，疑是银河落九天。',
    pinyin: [
      'rì zhào xiāng lú shēng zǐ yān，yáo kàn pù bù guà qián chuān。fēi liú zhí xià sān qiān chǐ，yí shì yín hé luò jiǔ tiān。'
    ],
    analysis: '这首诗描绘了庐山瀑布的壮丽景象。阳光照射在香炉峰上，产生紫色的烟雾，远看瀑布像一条白练挂在山前。瀑布从高处飞泻而下，仿佛银河从天上倾泻下来。诗人用夸张的手法，生动地表现了瀑布的雄伟气势。',
    background: '庐山位于江西省九江市，是中国著名的风景名胜区。李白游览庐山时，被瀑布的壮观景象所震撼，写下了这首气势磅礴的诗篇。'
  },
  {
    id: 3,
    title: '春望',
    author: '杜甫',
    dynasty: '唐代',
    content: '国破山河在，城春草木深。感时花溅泪，恨别鸟惊心。烽火连三月，家书抵万金。白头搔更短，浑欲不胜簪。',
    pinyin: [
      'guó pò shān hé zài，chéng chūn cǎo mù shēn。gǎn shí huā jiàn lèi，hèn bié niǎo jīng xīn。fēng huǒ lián sān yuè，jiā shū dǐ wàn jīn。bái tóu sāo gèng duǎn，hún yù bù shèng zān。'
    ],
    analysis: '这首诗写于安史之乱期间，诗人目睹国家破败，城春草木深，感慨时事，见花落泪，闻鸟惊心。战争持续了三个月，家书珍贵如金。诗人因忧国忧民而白发稀疏，几乎插不住簪子。全诗表达了诗人对国家命运的忧虑和对家人的思念。',
    background: '杜甫（712-770），字子美，号少陵野老，唐代伟大的现实主义诗人，被后人称为"诗圣"。安史之乱爆发后，杜甫被困长安，看到国家残破，写下了这首感人肺腑的诗作。'
  },
  {
    id: 4,
    title: '赋得古原草送别',
    author: '白居易',
    dynasty: '唐代',
    content: '离离原上草，一岁一枯荣。野火烧不尽，春风吹又生。远芳侵古道，晴翠接荒城。又送王孙去，萋萋满别情。',
    pinyin: [
      'lí lí yuán shàng cǎo，yī suì yī kū róng。yě huǒ shāo bù jìn，chūn fēng chuī yòu shēng。yuǎn fāng qīn gǔ dào，qíng cuì jiē huāng chéng。yòu sòng wáng sūn qù，qī qī mǎn bié qíng。'
    ],
    analysis: '这首诗以原上草为喻，赞美了小草顽强的生命力。野火无法烧尽它，春风一吹又会重新生长。远处的芳草延伸到古道，翠绿的颜色连接着荒城。最后两句表达了送别友人时的不舍之情，萋萋的芳草象征着离别的愁绪。',
    background: '白居易（772-846），字乐天，号香山居士，唐代伟大的现实主义诗人。这首诗作于贞元三年（787年），当时白居易16岁，是他的成名作。'
  },
  {
    id: 5,
    title: '悯农',
    author: '李绅',
    dynasty: '唐代',
    content: '锄禾日当午，汗滴禾下土。谁知盘中餐，粒粒皆辛苦。',
    pinyin: [
      'chú hé rì dāng wǔ，hàn dī hé xià tǔ。shuí zhī pán zhōng cān，lì lì jiē xīn kǔ。'
    ],
    analysis: '这首诗描绘了农民在烈日下锄地的情景，汗水滴落在禾苗下的土地上。诗人提醒人们，盘中的每一粒粮食都来之不易，都是农民辛勤劳动的结果。全诗语言朴实，情感真挚，表达了对农民的同情和对粮食的珍惜。',
    background: '李绅（772-846），字公垂，唐代诗人。这首诗作于元和年间，反映了农民的辛勤劳动和生活的艰辛。'
  },
  {
    id: 6,
    title: '泊船瓜洲',
    author: '王安石',
    dynasty: '宋代',
    content: '京口瓜洲一水间，钟山只隔数重山。春风又绿江南岸，明月何时照我还。',
    pinyin: [
      'jīng kǒu guā zhōu yī shuǐ jiān，zhōng shān zhǐ gé shù chóng shān。chūn fēng yòu lǜ jiāng nán àn，míng yuè hé shí zhào wǒ huán。'
    ],
    analysis: '这首诗写诗人泊船瓜洲时的所见所感。京口和瓜洲只隔一条江水，钟山也只隔几重山。春风又吹绿了江南的岸边，明月什么时候才能照着我回到家乡呢？诗中"绿"字用得精妙，将春风的作用生动地表现出来。',
    background: '王安石（1021-1086），字介甫，号半山，北宋政治家、文学家、思想家。这首诗作于熙宁八年（1075年），当时王安石被罢相后又被起用，赴京途中泊船瓜洲，写下了这首思乡诗。'
  },
  {
    id: 7,
    title: '题西林壁',
    author: '苏轼',
    dynasty: '宋代',
    content: '横看成岭侧成峰，远近高低各不同。不识庐山真面目，只缘身在此山中。',
    pinyin: [
      'héng kàn chéng lǐng cè chéng fēng，yuǎn jìn gāo dī gè bù tóng。bù shí lú shān zhēn miàn mù，zhǐ yuán shēn zài cǐ shān zhōng。'
    ],
    analysis: '这首诗写诗人游览庐山时的感受。从不同的角度看庐山，会看到不同的形态，横看是山岭，侧看是山峰，远近高低都不一样。之所以认不清庐山的真面目，是因为自己就在庐山之中。诗人通过描绘庐山的变化多姿，说明当局者迷，旁观者清的道理。',
    background: '苏轼（1037-1101），字子瞻，号东坡居士，北宋文学家、书画家。这首诗作于元丰七年（1084年），当时苏轼游览庐山，写下了这首富含哲理的诗篇。'
  },
  {
    id: 8,
    title: '饮湖上初晴后雨',
    author: '苏轼',
    dynasty: '宋代',
    content: '水光潋滟晴方好，山色空蒙雨亦奇。欲把西湖比西子，淡妆浓抹总相宜。',
    pinyin: [
      'shuǐ guāng liàn yàn qíng fāng hǎo，shān sè kōng méng yǔ yì qí。yù bǎ xī hú bǐ xī zǐ，dàn zhuāng nóng mǒ zǒng xiāng yí。'
    ],
    analysis: '这首诗描绘了西湖在晴天和雨天的不同景色。晴天时，湖水波光粼粼，非常美丽；雨天时，山色迷茫，也很奇妙。诗人把西湖比作西施，无论是淡雅的妆扮还是浓艳的妆扮，都很合适。全诗通过比喻的手法，生动地表现了西湖的美丽。',
    background: '这首诗作于熙宁六年（1073年），当时苏轼任杭州通判，游览西湖时写下了这首赞美西湖的诗篇。'
  },
  {
    id: 9,
    title: '示儿',
    author: '陆游',
    dynasty: '宋代',
    content: '死去元知万事空，但悲不见九州同。王师北定中原日，家祭无忘告乃翁。',
    pinyin: [
      'sǐ qù yuán zhī wàn shì kōng，dàn bēi bù jiàn jiǔ zhōu tóng。wáng shī běi dìng zhōng yuán rì，jiā jì wú wàng gào nǎi wēng。'
    ],
    analysis: '这首诗是陆游的绝笔，表达了他对国家统一的渴望。诗人知道人死了就什么都没有了，但唯一悲伤的是没有看到国家统一。当朝廷的军队收复中原的那一天，家里祭祀的时候不要忘记告诉自己。全诗情感真挚，表现了诗人强烈的爱国情怀。',
    background: '陆游（1125-1210），字务观，号放翁，南宋爱国诗人。这首诗作于嘉定三年（1210年），陆游临终前写下了这首诗，表达了他对国家统一的期望。'
  },
  {
    id: 10,
    title: '小池',
    author: '杨万里',
    dynasty: '宋代',
    content: '泉眼无声惜细流，树阴照水爱晴柔。小荷才露尖尖角，早有蜻蜓立上头。',
    pinyin: [
      'quán yǎn wú shēng xī xì liú，shù yīn zhào shuǐ ài qíng róu。xiǎo hé cái lù jiān jiān jiǎo，zǎo yǒu qīng tíng lì shàng tóu。'
    ],
    analysis: '这首诗描绘了小池的清新景色。泉眼无声地流淌着细细的水流，树阴映照在水面上，喜爱晴天的柔和。小荷叶刚刚露出尖尖的角，早有蜻蜓立在上面。全诗语言清新，画面生动，表现了初夏的生机与活力。',
    background: '杨万里（1127-1206），字廷秀，号诚斋，南宋诗人。这首诗作于乾道六年（1170年），描绘了初夏小池的景色。'
  },
  {
    id: 11,
    title: '登鹳雀楼',
    author: '王之涣',
    dynasty: '唐代',
    content: '白日依山尽，黄河入海流。欲穷千里目，更上一层楼。',
    pinyin: [
      'bái rì yī shān jìn，huáng hé rù hǎi liú。yù qióng qiān lǐ mù，gèng shàng yī céng lóu。'
    ],
    analysis: '这首诗描绘了登鹳雀楼所见的壮丽景色。太阳依着西山落下，黄河奔腾流向大海。想要看到更远的景色，就要再登上一层楼。诗的后两句富有哲理，告诉人们只有站得更高，才能看得更远。',
    background: '王之涣（688-742），字季凌，唐代诗人。鹳雀楼位于山西省永济市，是唐代著名的楼阁。这首诗作于盛唐时期，表现了诗人积极向上的精神。'
  },
  {
    id: 12,
    title: '相思',
    author: '王维',
    dynasty: '唐代',
    content: '红豆生南国，春来发几枝。愿君多采撷，此物最相思。',
    pinyin: [
      'hóng dòu shēng nán guó，chūn lái fā jǐ zhī。yuàn jūn duō cǎi xié，cǐ wù zuì xiāng sī。'
    ],
    analysis: '这首诗以红豆为喻，表达了对友人的思念之情。红豆生长在南方，春天来了不知发了多少枝。希望你多采摘一些，因为红豆最能寄托相思之情。全诗语言简洁，情感真挚，是一首著名的相思诗。',
    background: '王维（701-761），字摩诘，唐代诗人、画家。这首诗作于盛唐时期，是王维的代表作之一。'
  },
  {
    id: 13,
    title: '鹿柴',
    author: '王维',
    dynasty: '唐代',
    content: '空山不见人，但闻人语响。返景入深林，复照青苔上。',
    pinyin: [
      'kōng shān bù jiàn rén，dàn wén rén yǔ xiǎng。fǎn jǐng rù shēn lín，fù zhào qīng tái shàng。'
    ],
    analysis: '这首诗描绘了鹿柴的幽静景色。空寂的山林里看不见人，只听到有人说话的声音。夕阳的余晖映入深林，又照在青苔上。全诗通过听觉和视觉的对比，营造出一种幽静深远的意境。',
    background: '鹿柴是王维在辋川的别墅之一。这首诗作于盛唐时期，表现了王维对自然景色的敏锐观察和独特感受。'
  },
  {
    id: 14,
    title: '竹里馆',
    author: '王维',
    dynasty: '唐代',
    content: '独坐幽篁里，弹琴复长啸。深林人不知，明月来相照。',
    pinyin: [
      'dú zuò yōu huáng lǐ，tán qín fù cháng xiào。shēn lín rén bù zhī，míng yuè lái xiāng zhào。'
    ],
    analysis: '这首诗描绘了诗人在竹林中独自弹琴长啸的情景。诗人独自坐在幽深的竹林里，一边弹琴一边长啸。深林里没有人知道他，只有明月来陪伴他。全诗营造出一种宁静、淡泊的意境，表现了诗人对隐居生活的喜爱。',
    background: '这首诗作于盛唐时期，是王维辋川集的代表作之一。'
  },
  {
    id: 15,
    title: '江雪',
    author: '柳宗元',
    dynasty: '唐代',
    content: '千山鸟飞绝，万径人踪灭。孤舟蓑笠翁，独钓寒江雪。',
    pinyin: [
      'qiān shān niǎo fēi jué，wàn jìng rén zōng miè。gū zhōu suō lì wēng，dú diào hán jiāng xuě。'
    ],
    analysis: '这首诗描绘了一幅江雪图。所有的山上都没有鸟儿飞翔，所有的道路都没有人的踪迹。只有一条小船上的渔翁，穿着蓑衣戴着斗笠，独自在寒冷的江面上钓鱼。全诗通过对雪景的描绘，表现了诗人孤独、清高的品格。',
    background: '柳宗元（773-819），字子厚，唐代文学家、思想家。这首诗作于永州时期，当时柳宗元被贬谪到永州，心情抑郁，写下了这首意境深远的诗篇。'
  },
  {
    id: 16,
    title: '枫桥夜泊',
    author: '张继',
    dynasty: '唐代',
    content: '月落乌啼霜满天，江枫渔火对愁眠。姑苏城外寒山寺，夜半钟声到客船。',
    pinyin: [
      'yuè luò wū tí shuāng mǎn tiān，jiāng fēng yú huǒ duì chóu mián。gū sū chéng wài hán shān sì，yè bàn zhōng shēng dào kè chuán。'
    ],
    analysis: '这首诗描绘了枫桥夜泊的情景。月亮落下，乌鸦啼叫，霜满天，江边的枫树和渔火对着忧愁的睡眠。姑苏城外的寒山寺，半夜的钟声传到客船上。全诗通过对夜景的描绘，表达了诗人旅途中的孤寂和忧愁。',
    background: '张继（约715-约779），唐代诗人。这首诗作于安史之乱后，诗人途经苏州时写下了这首著名的羁旅诗。'
  },
  {
    id: 17,
    title: '清明',
    author: '杜牧',
    dynasty: '唐代',
    content: '清明时节雨纷纷，路上行人欲断魂。借问酒家何处有，牧童遥指杏花村。',
    pinyin: [
      'qīng míng shí jié yǔ fēn fēn，lù shàng xíng rén yù duàn hún。jiè wèn jiǔ jiā hé chù yǒu，mù tóng yáo zhǐ xìng huā cūn。'
    ],
    analysis: '这首诗描绘了清明时节的景象。清明时节细雨纷纷，路上的行人心情悲伤。向人询问哪里有酒家，牧童远远地指向杏花村。全诗语言通俗易懂，情景交融，表现了清明节的氛围和行人的心情。',
    background: '杜牧（803-852），字牧之，唐代诗人。这首诗作于晚唐时期，是一首脍炙人口的清明节诗篇。'
  },
  {
    id: 18,
    title: '山行',
    author: '杜牧',
    dynasty: '唐代',
    content: '远上寒山石径斜，白云生处有人家。停车坐爱枫林晚，霜叶红于二月花。',
    pinyin: [
      'yuǎn shàng hán shān shí jìng xié，bái yún shēng chù yǒu rén jiā。tíng chē zuò ài fēng lín wǎn，shuāng yè hóng yú èr yuè huā。'
    ],
    analysis: '这首诗描绘了秋日山行的景色。沿着弯弯曲曲的石板路登上寒山，在白云缭绕的地方有几户人家。因为喜爱枫林的晚景而停车，经霜的枫叶比二月的鲜花还要红。全诗通过对秋日山景的描绘，表达了诗人对自然景色的喜爱之情。',
    background: '这首诗作于晚唐时期，是杜牧的代表作之一。'
  },
  {
    id: 19,
    title: '江南春',
    author: '杜牧',
    dynasty: '唐代',
    content: '千里莺啼绿映红，水村山郭酒旗风。南朝四百八十寺，多少楼台烟雨中。',
    pinyin: [
      'qiān lǐ yīng tí lǜ yìng hóng，shuǐ cūn shān guō jiǔ qí fēng。nán cháo sì bǎi bā shí sì，duō shǎo lóu tái yān yǔ zhōng。'
    ],
    analysis: '这首诗描绘了江南春天的景色。千里江南，黄莺啼叫，绿树红花相映，水边的村庄和山脚下的城郭，酒旗在风中飘扬。南朝留下的四百八十座寺庙，有多少楼台笼罩在烟雾雨中。全诗通过对江南春景的描绘，表达了诗人对江南春天的赞美之情。',
    background: '这首诗作于晚唐时期，是杜牧的代表作之一。'
  },
  {
    id: 20,
    title: '送元二使安西',
    author: '王维',
    dynasty: '唐代',
    content: '渭城朝雨浥轻尘，客舍青青柳色新。劝君更尽一杯酒，西出阳关无故人。',
    pinyin: [
      'wèi chéng zhāo yǔ yì qīng chén，kè shè qīng qīng liǔ sè xīn。quàn jūn gèng jìn yī bēi jiǔ，xī chū yáng guān wú gù rén。'
    ],
    analysis: '这首诗是王维送朋友元二出使安西时所作。渭城早晨的雨湿润了路上的尘土，客舍周围的柳树显得格外清新。劝你再喝一杯酒，向西出了阳关就没有老朋友了。全诗语言简洁，情感真挚，表达了对朋友的不舍之情。',
    background: '安西是唐代安西都护府的所在地，在今新疆库车一带。这首诗作于盛唐时期，是王维的代表作之一。'
  },
  {
    id: 21,
    title: '九月九日忆山东兄弟',
    author: '王维',
    dynasty: '唐代',
    content: '独在异乡为异客，每逢佳节倍思亲。遥知兄弟登高处，遍插茱萸少一人。',
    pinyin: [
      'dú zài yì xiāng wéi yì kè，měi féng jiā jié bèi sī qīn。yáo zhī xiōng dì dēng gāo chù，biàn chā zhū yú shǎo yī rén。'
    ],
    analysis: '这首诗是王维在重阳节思念家乡兄弟时所作。独自在他乡做客，每到佳节就更加思念亲人。遥想兄弟们登上高处，插上茱萸，发现少了自己一人。全诗语言朴素，情感真挚，表达了对家乡和兄弟的思念之情。',
    background: '山东指华山以东，王维的家乡蒲州（今山西永济）在华山以东。这首诗作于盛唐时期，是王维的代表作之一。'
  },
  {
    id: 22,
    title: '春晓',
    author: '孟浩然',
    dynasty: '唐代',
    content: '春眠不觉晓，处处闻啼鸟。夜来风雨声，花落知多少。',
    pinyin: [
      'chūn mián bù jué xiǎo，chù chù wén tí niǎo。yè lái fēng yǔ shēng，huā luò zhī duō shǎo。'
    ],
    analysis: '这首诗描绘了春天早晨的情景。春天睡觉不知不觉天就亮了，到处都能听到鸟儿的叫声。想起夜里的风雨声，不知道吹落了多少花瓣。全诗语言简洁，意境清新，表现了春天的生机和诗人对春天的喜爱。',
    background: '孟浩然（689-740），字浩然，唐代诗人。这首诗作于盛唐时期，是孟浩然的代表作之一。'
  },
  {
    id: 23,
    title: '咏鹅',
    author: '骆宾王',
    dynasty: '唐代',
    content: '鹅鹅鹅，曲项向天歌。白毛浮绿水，红掌拨清波。',
    pinyin: [
      'é é é，qū xiàng xiàng tiān gē。bái máo fú lǜ shuǐ，hóng zhǎng bō qīng bō。'
    ],
    analysis: '这首诗是骆宾王七岁时所作，描绘了鹅在水中游动的情景。鹅啊鹅，弯曲着脖子向着天空唱歌。洁白的羽毛漂浮在绿水上，红色的脚掌划动着清波。全诗语言简洁，形象生动，表现了儿童对自然的观察和喜爱。',
    background: '骆宾王（约640-约684），唐代诗人。这首诗作于他童年时期，是中国古代最著名的儿童诗之一。'
  },
  {
    id: 24,
    title: '风',
    author: '李峤',
    dynasty: '唐代',
    content: '解落三秋叶，能开二月花。过江千尺浪，入竹万竿斜。',
    pinyin: [
      'jiě luò sān qiū yè，néng kāi èr yuè huā。guò jiāng qiān chǐ làng，rù zhú wàn gān xié。'
    ],
    analysis: '这首诗描绘了风的力量。风能吹落秋天的树叶，能吹开春天的花朵。风吹过江面掀起千尺浪花，吹进竹林使万竿竹子倾斜。全诗通过对风的不同作用的描绘，表现了风的神奇力量。',
    background: '李峤（645-714），唐代诗人。这首诗作于盛唐时期，是一首描写自然现象的诗篇。'
  },
  {
    id: 25,
    title: '江上渔者',
    author: '范仲淹',
    dynasty: '宋代',
    content: '江上往来人，但爱鲈鱼美。君看一叶舟，出没风波里。',
    pinyin: [
      'jiāng shàng wǎng lái rén，dàn ài lú yú měi。jūn kàn yī yè zhōu，chū mò fēng bō lǐ。'
    ],
    analysis: '这首诗描绘了江上渔民的艰辛生活。江上来来往往的人，只喜爱鲈鱼的美味。你看那一条小船，在风浪中时隐时现。全诗通过对比的手法，表现了渔民的辛苦和危险，表达了对渔民的同情。',
    background: '范仲淹（989-1052），字希文，北宋政治家、文学家。这首诗作于北宋时期，反映了渔民的生活状况。'
  },
  {
    id: 26,
    title: '元日',
    author: '王安石',
    dynasty: '宋代',
    content: '爆竹声中一岁除，春风送暖入屠苏。千门万户曈曈日，总把新桃换旧符。',
    pinyin: [
      'bào zhú shēng zhōng yī suì chú，chūn fēng sòng nuǎn rù tú sū。qiān mén wàn hù tóng tóng rì，zǒng bǎ xīn táo huàn jiù fú。'
    ],
    analysis: '这首诗描绘了春节的热闹景象。爆竹声中旧的一年过去了，春风送暖，人们喝着屠苏酒。初升的太阳照耀着千家万户，人们总把新的桃符换下旧的桃符。全诗通过对春节习俗的描绘，表现了春节的喜庆氛围和人们对新年的美好期望。',
    background: '这首诗作于熙宁元年（1068年），是王安石的代表作之一。'
  },
  {
    id: 27,
    title: '墨梅',
    author: '王冕',
    dynasty: '元代',
    content: '我家洗砚池头树，朵朵花开淡墨痕。不要人夸好颜色，只留清气满乾坤。',
    pinyin: [
      'wǒ jiā xǐ yàn chí tóu shù，duǒ duǒ huā kāi dàn mò hén。bù yào rén kuā hǎo yán sè，zhǐ liú qīng qì mǎn qián kūn。'
    ],
    analysis: '这首诗描绘了墨梅的特点。我家洗砚池边的梅树，朵朵花开都有淡淡的墨痕。不需要别人夸奖它的颜色好看，只希望留下清香之气充满天地间。全诗通过对墨梅的描绘，表达了诗人不慕虚名、保持高洁品质的志向。',
    background: '王冕（1287-1359），字元章，号煮石山农，元代画家、诗人。这首诗作于元代，是王冕的代表作之一。'
  },
  {
    id: 28,
    title: '石灰吟',
    author: '于谦',
    dynasty: '明代',
    content: '千锤万凿出深山，烈火焚烧若等闲。粉骨碎身全不怕，要留清白在人间。',
    pinyin: [
      'qiān chuí wàn záo chū shēn shān，liè huǒ fén shāo ruò děng xián。fěn gǔ suì shēn quán bù pà，yào liú qīng bái zài rén jiān。'
    ],
    analysis: '这首诗以石灰为喻，表达了诗人的志向。石灰经过千锤万凿从深山里开采出来，烈火焚烧也像平常事一样。即使粉身碎骨也毫不畏惧，只希望在人间留下清白的名声。全诗通过对石灰的描绘，表达了诗人不怕牺牲、保持高洁品质的志向。',
    background: '于谦（1398-1457），字廷益，明代政治家、军事家、诗人。这首诗作于明代，是于谦的代表作之一。'
  },
  {
    id: 29,
    title: '竹石',
    author: '郑燮',
    dynasty: '清代',
    content: '咬定青山不放松，立根原在破岩中。千磨万击还坚劲，任尔东西南北风。',
    pinyin: [
      'yǎo dìng qīng shān bù fàng sōng，lì gēn yuán zài pò yán zhōng。qiān mó wàn jī hái jiān jìn，rèn ěr dōng xī nán běi fēng。'
    ],
    analysis: '这首诗以竹子为喻，表达了诗人的志向。竹子紧紧咬定青山不放松，根深深地扎在破岩中。经过千磨万击仍然坚韧不拔，任凭你刮东西南北风。全诗通过对竹子的描绘，表达了诗人坚韧不拔、不屈不挠的精神。',
    background: '郑燮（1693-1765），字克柔，号板桥，清代书画家、诗人。这首诗作于清代，是郑燮的代表作之一。'
  },
  {
    id: 30,
    title: '村居',
    author: '高鼎',
    dynasty: '清代',
    content: '草长莺飞二月天，拂堤杨柳醉春烟。儿童散学归来早，忙趁东风放纸鸢。',
    pinyin: [
      'cǎo zhǎng yīng fēi èr yuè tiān，fú dī yáng liǔ zuì chūn yān。ér tóng sàn xué guī lái zǎo，máng chèn dōng fēng fàng zhǐ yuān。'
    ],
    analysis: '这首诗描绘了春天村居的景象。二月里草长莺飞，杨柳拂堤，仿佛陶醉在春烟中。儿童放学回来得早，忙着趁着东风放风筝。全诗语言清新，画面生动，表现了春天的生机和儿童的欢乐。',
    background: '高鼎（1821-1861），字象一，号省斋，清代诗人。这首诗作于清代，是高鼎的代表作之一。'
  },
  {
    id: 31,
    title: '长歌行',
    author: '汉乐府',
    dynasty: '汉代',
    content: '青青园中葵，朝露待日晞。阳春布德泽，万物生光辉。常恐秋节至，焜黄华叶衰。百川东到海，何时复西归？少壮不努力，老大徒伤悲。',
    pinyin: [
      'qīng qīng yuán zhōng kuí，zhāo lù dài rì xī。yáng chūn bù dé zé，wàn wù shēng guāng huī。cháng kǒng qiū jié zhì，kūn huáng huá yè shuāi。bǎi chuān dōng dào hǎi，hé shí fù xī guī？shào zhuàng bù nǔ lì，lǎo dà tú shāng bēi。'
    ],
    analysis: '这首诗以园中葵为喻，告诫人们要珍惜时间。园中的葵菜青青，早晨的露水等待太阳晒干。春天布施恩泽，万物生机盎然。常常担心秋天到来，花叶枯黄衰落。百川向东流到大海，什么时候才能再向西流？年轻力壮时不努力，到老来只能白白悲伤。全诗通过自然现象的描绘，告诫人们要珍惜青春时光，努力奋斗。',
    background: '汉乐府是汉代的官方音乐机构，负责收集、整理民歌。这首诗作于汉代，是汉乐府的代表作之一。'
  },
  {
    id: 32,
    title: '七步诗',
    author: '曹植',
    dynasty: '三国',
    content: '煮豆燃豆萁，豆在釜中泣。本是同根生，相煎何太急？',
    pinyin: [
      'zhǔ dòu rán dòu qí，dòu zài fǔ zhōng qì。běn shì tóng gēn shēng，xiāng jiān hé tài jí？'
    ],
    analysis: '这首诗是曹植在七步之内所作，用豆和豆萁的关系比喻兄弟关系。煮豆的时候用豆萁作燃料，豆子在锅里哭泣。本来是同根生长的，为什么要这样急迫地相互煎熬呢？全诗通过比喻的手法，表达了曹植对兄弟相残的悲愤之情。',
    background: '曹植（192-232），字子建，三国时期魏国诗人。这首诗作于曹丕称帝后，曹植被曹丕猜忌，被迫在七步之内作诗，否则将被处死。'
  },
  {
    id: 33,
    title: '敕勒歌',
    author: '北朝民歌',
    dynasty: '北朝',
    content: '敕勒川，阴山下。天似穹庐，笼盖四野。天苍苍，野茫茫，风吹草低见牛羊。',
    pinyin: [
      'chì lè chuān，yīn shān xià。tiān sì qióng lú，lóng gài sì yě。tiān cāng cāng，yě máng máng，fēng chuī cǎo dī xiàn niú yáng。'
    ],
    analysis: '这首诗描绘了敕勒川的壮丽景色。敕勒川在阴山下，天空像毡帐一样笼罩着大地。天空苍苍，原野茫茫，风吹草低，露出牛羊。全诗语言质朴，画面宏大，表现了北方草原的辽阔和牧民的生活。',
    background: '敕勒歌是北朝时期的民歌，反映了北方游牧民族的生活。'
  },
  {
    id: 34,
    title: '回乡偶书',
    author: '贺知章',
    dynasty: '唐代',
    content: '少小离家老大回，乡音无改鬓毛衰。儿童相见不相识，笑问客从何处来。',
    pinyin: [
      'shào xiǎo lí jiā lǎo dà huí，xiāng yīn wú gǎi bìn máo shuāi。ér tóng xiāng jiàn bù xiāng shí，xiào wèn kè cóng hé chù lái。'
    ],
    analysis: '这首诗是贺知章回乡时所作。年轻时离开家乡，年老时才回来，乡音没有改变，但头发已经稀疏。儿童们见了不认识，笑着问客人从哪里来。全诗通过对比的手法，表达了诗人对家乡的思念和时光流逝的感慨。',
    background: '贺知章（659-744），字季真，唐代诗人。这首诗作于天宝三年（744年），贺知章辞官回乡时写下了这首诗。'
  },
  {
    id: 35,
    title: '咏柳',
    author: '贺知章',
    dynasty: '唐代',
    content: '碧玉妆成一树高，万条垂下绿丝绦。不知细叶谁裁出，二月春风似剪刀。',
    pinyin: [
      'bì yù zhuāng chéng yī shù gāo，wàn tiáo chuí xià lǜ sī tāo。bù zhī xì yè shuí cái chū，èr yuè chūn fēng sì jiǎn dāo。'
    ],
    analysis: '这首诗描绘了春天柳树的美丽。柳树像碧玉装扮成的一样高大，万条柳枝垂下像绿色的丝带。不知道细细的柳叶是谁裁剪出来的，原来是二月的春风像剪刀一样。全诗通过比喻的手法，生动地表现了柳树的美丽和春风的神奇。',
    background: '这首诗作于盛唐时期，是贺知章的代表作之一。'
  },
  {
    id: 36,
    title: '凉州词',
    author: '王之涣',
    dynasty: '唐代',
    content: '黄河远上白云间，一片孤城万仞山。羌笛何须怨杨柳，春风不度玉门关。',
    pinyin: [
      'huáng hé yuǎn shàng bái yún jiān，yī piàn gū chéng wàn rèn shān。qiāng dí hé xū yuàn yáng liǔ，chūn fēng bù dù yù mén guān。'
    ],
    analysis: '这首诗描绘了凉州的边塞风光。黄河远远地伸向白云之间，一座孤城坐落在万仞高山之中。羌笛何必吹奏《折杨柳》的曲子，春风是吹不到玉门关的。全诗通过对边塞风光的描绘，表达了戍边将士的思乡之情。',
    background: '凉州是唐代的一个州，在今甘肃武威一带。这首诗作于盛唐时期，是王之涣的代表作之一。'
  },
  {
    id: 37,
    title: '凉州词',
    author: '王翰',
    dynasty: '唐代',
    content: '葡萄美酒夜光杯，欲饮琵琶马上催。醉卧沙场君莫笑，古来征战几人回？',
    pinyin: [
      'pú táo měi jiǔ yè guāng bēi，yù yǐn pí pá mǎ shàng cuī。zuì wò shā chǎng jūn mò xiào，gǔ lái zhēng zhàn jǐ rén huí？'
    ],
    analysis: '这首诗描绘了边塞将士的生活。葡萄美酒倒在夜光杯里，正要喝的时候，琵琶声在马上催促。醉卧在沙场上请你不要笑，自古以来征战的人有几个能回来？全诗通过对边塞生活的描绘，表现了将士们的豪迈气概和视死如归的精神。',
    background: '王翰（约687-约726），唐代诗人。这首诗作于盛唐时期，是王翰的代表作之一。'
  },
  {
    id: 38,
    title: '出塞',
    author: '王昌龄',
    dynasty: '唐代',
    content: '秦时明月汉时关，万里长征人未还。但使龙城飞将在，不教胡马度阴山。',
    pinyin: [
      'qín shí míng yuè hàn shí guān，wàn lǐ cháng zhēng rén wèi huán。dàn shǐ lóng chéng fēi jiàng zài，bù jiào hú mǎ dù yīn shān。'
    ],
    analysis: '这首诗描绘了边塞的战争景象。秦汉时期的明月和边关，万里长征的人还没有回来。只要龙城的飞将军还在，就不会让胡人的马越过阴山。全诗通过对边塞战争的描绘，表达了诗人对和平的渴望和对戍边将士的赞美。',
    background: '王昌龄（698-757），字少伯，唐代诗人。这首诗作于盛唐时期，是王昌龄的代表作之一。'
  },
  {
    id: 39,
    title: '芙蓉楼送辛渐',
    author: '王昌龄',
    dynasty: '唐代',
    content: '寒雨连江夜入吴，平明送客楚山孤。洛阳亲友如相问，一片冰心在玉壶。',
    pinyin: [
      'hán yǔ lián jiāng yè rù wú，píng míng sòng kè chǔ shān gū。luò yáng qīn yǒu rú xiāng wèn，yī piàn bīng xīn zài yù hú。'
    ],
    analysis: '这首诗是王昌龄送朋友辛渐时所作。寒雨连江，夜晚进入吴地，天亮时送客，楚山显得孤独。如果洛阳的亲友问起我，就说我的心像玉壶里的冰一样纯洁。全诗通过对送别场景的描绘，表达了诗人的高洁品格和对朋友的深情。',
    background: '芙蓉楼在今江苏镇江。这首诗作于盛唐时期，是王昌龄的代表作之一。'
  },
  {
    id: 40,
    title: '别董大',
    author: '高适',
    dynasty: '唐代',
    content: '千里黄云白日曛，北风吹雁雪纷纷。莫愁前路无知己，天下谁人不识君？',
    pinyin: [
      'qiān lǐ huáng yún bái rì xūn，běi fēng chuī yàn xuě fēn fēn。mò chóu qián lù wú zhī jǐ，tiān xià shuí rén bù shí jūn？'
    ],
    analysis: '这首诗是高适送朋友董大时所作。千里黄云，太阳昏暗，北风吹雁，雪花纷纷。不要担心前面的路上没有知己，天下谁不认识你呢？全诗通过对送别场景的描绘，表达了诗人对朋友的鼓励和信任。',
    background: '董大是唐代著名的琴师董庭兰。这首诗作于盛唐时期，是高适的代表作之一。'
  },
  {
    id: 41,
    title: '望天门山',
    author: '李白',
    dynasty: '唐代',
    content: '天门中断楚江开，碧水东流至此回。两岸青山相对出，孤帆一片日边来。',
    pinyin: [
      'tiān mén zhōng duàn chǔ jiāng kāi，bì shuǐ dōng liú zhì cǐ huí。liǎng àn qīng shān xiāng duì chū，gū fān yī piàn rì biān lái。'
    ],
    analysis: '这首诗描绘了天门山的壮丽景色。天门山被楚江从中断开，碧绿的江水东流到这里回旋。两岸的青山相对而出，一片孤帆从日边驶来。全诗通过对天门山景色的描绘，表现了大自然的雄伟壮丽。',
    background: '天门山位于安徽省当涂县西南长江两岸。这首诗作于盛唐时期，是李白的代表作之一。'
  },
  {
    id: 42,
    title: '早发白帝城',
    author: '李白',
    dynasty: '唐代',
    content: '朝辞白帝彩云间，千里江陵一日还。两岸猿声啼不住，轻舟已过万重山。',
    pinyin: [
      'zhāo cí bái dì cǎi yún jiān，qiān lǐ jiāng líng yī rì huán。liǎng àn yuán shēng tí bù zhù，qīng zhōu yǐ guò wàn chóng shān。'
    ],
    analysis: '这首诗描绘了李白从白帝城出发，顺流而下到江陵的情景。早晨辞别白帝城，那里彩云缭绕，千里之外的江陵一天就可以到达。两岸的猿猴不停地啼叫，轻舟已经穿过了万重山。全诗通过对行程的描绘，表现了诗人轻松愉快的心情。',
    background: '白帝城位于重庆市奉节县。这首诗作于乾元二年（759年），李白被流放夜郎，行至白帝城时遇赦，于是乘舟东下，写下了这首诗。'
  },
  {
    id: 43,
    title: '赠汪伦',
    author: '李白',
    dynasty: '唐代',
    content: '李白乘舟将欲行，忽闻岸上踏歌声。桃花潭水深千尺，不及汪伦送我情。',
    pinyin: [
      'lǐ bái chéng zhōu jiāng yù xíng，hū wén àn shàng tà gē shēng。táo huā tán shuǐ shēn qiān chǐ，bù jí wāng lún sòng wǒ qíng。'
    ],
    analysis: '这首诗是李白赠给汪伦的。李白乘船将要出发，忽然听到岸上的踏歌声。桃花潭的水深达千尺，也比不上汪伦送我的情谊。全诗通过对比的手法，表达了诗人对汪伦的深厚情谊。',
    background: '汪伦是唐代泾县的一位村民，他邀请李白到家中做客，李白离开时，汪伦前来相送，李白写下了这首诗。'
  },
  {
    id: 44,
    title: '黄鹤楼送孟浩然之广陵',
    author: '李白',
    dynasty: '唐代',
    content: '故人西辞黄鹤楼，烟花三月下扬州。孤帆远影碧空尽，唯见长江天际流。',
    pinyin: [
      'gù rén xī cí huáng hè lóu，yān huā sān yuè xià yáng zhōu。gū fān yuǎn yǐng bì kōng jìn，wéi jiàn cháng jiāng tiān jì liú。'
    ],
    analysis: '这首诗是李白送孟浩然去广陵时所作。老朋友向西辞别黄鹤楼，在烟花三月的春天去扬州。孤帆的影子渐渐消失在碧空尽头，只看见长江向天际流去。全诗通过对送别场景的描绘，表达了诗人对友人的不舍之情。',
    background: '黄鹤楼位于湖北省武汉市。这首诗作于盛唐时期，是李白的代表作之一。'
  },
  {
    id: 45,
    title: '望岳',
    author: '杜甫',
    dynasty: '唐代',
    content: '岱宗夫如何？齐鲁青未了。造化钟神秀，阴阳割昏晓。荡胸生曾云，决眦入归鸟。会当凌绝顶，一览众山小。',
    pinyin: [
      'dài zōng fū rú hé？qí lǔ qīng wèi liǎo。zào huà zhōng shén xiù，yīn yáng gē hūn xiǎo。dàng xiōng shēng céng yún，jué zì rù guī niǎo。huì dāng líng jué dǐng，yī lǎn zhòng shān xiǎo。'
    ],
    analysis: '这首诗描绘了泰山的壮丽景色。泰山怎么样？在齐鲁大地上，那青翠的山色没有尽头。大自然把神奇和秀丽都集中在泰山，山南山北分隔出清晨和黄昏。层层云气在胸中荡漾，睁大眼睛远望归鸟。一定要登上泰山的顶峰，俯瞰那众山，而众山就会显得极为渺小。全诗通过对泰山景色的描绘，表达了诗人的雄心壮志和对大自然的赞美。',
    background: '泰山又称岱宗，是五岳之首。这首诗作于唐玄宗天宝三年（744年），杜甫游览泰山时写下了这首诗。'
  },
  {
    id: 46,
    title: '茅屋为秋风所破歌',
    author: '杜甫',
    dynasty: '唐代',
    content: '八月秋高风怒号，卷我屋上三重茅。茅飞渡江洒江郊，高者挂罥长林梢，下者飘转沉塘坳。南村群童欺我老无力，忍能对面为盗贼。公然抱茅入竹去，唇焦口燥呼不得，归来倚杖自叹息。俄顷风定云墨色，秋天漠漠向昏黑。布衾多年冷似铁，娇儿恶卧踏里裂。床头屋漏无干处，雨脚如麻未断绝。自经丧乱少睡眠，长夜沾湿何由彻？安得广厦千万间，大庇天下寒士俱欢颜，风雨不动安如山。呜呼！何时眼前突兀见此屋，吾庐独破受冻死亦足！',
    pinyin: [
      'bā yuè qiū gāo fēng nù háo，juǎn wǒ wū shàng sān chóng máo。máo fēi dù jiāng sǎ jiāng jiāo，gāo zhě guà juàn cháng lín shāo，xià zhě piāo zhuǎn chén táng ào。nán cūn qún tóng qī wǒ lǎo wú lì，rěn néng duì miàn wéi dào zéi。gōng rán bào máo rù zhú qù，chún jiāo kǒu zào hū bù dé，guī lái yǐ zhàng zì tàn xī。é qǐng fēng dìng yún mò sè，qiū tiān mò mò xiàng hūn hēi。bù qīn duō nián lěng sì tiě，jiāo ér è wò tà lǐ liè。chuáng tóu wū lòu wú gàn chù，yǔ jiǎo rú má wèi duàn jué。zì jīng sàng luàn shǎo shuì mián，cháng yè zhān shī hé yóu chè？ān dé guǎng shà qiān wàn jiān，dà bì tiān xià hán shì jù huān yán，fēng yǔ bù dòng ān rú shān。wū hū！hé shí yǎn qián tū wù jiàn cǐ wū，wú lú dú pò shòu dòng sǐ yì zú！'
    ],
    analysis: '这首诗描绘了杜甫的茅屋被秋风吹破的情景。八月秋高，狂风怒号，卷走了屋上的三重茅草。茅草飞过江去，洒落在江郊，高的挂在长林梢，低的飘转沉到塘坳。南村的一群孩子欺负我年老无力，忍心当面做盗贼，公然抱着茅草跑进竹林。我喊得唇焦口燥也没有用，回来倚着拐杖自己叹息。一会儿风停了，乌云像墨一样黑，秋天的天空阴沉沉的，渐渐黑了下来。布被子多年冷得像铁，娇儿睡相不好，把被子踢破了。床头漏雨，没有干的地方，雨脚像麻一样不断。自从经历战乱以来，很少睡眠，长夜沾湿，如何才能熬到天亮？怎么才能得到千万间宽敞的房子，庇护天下贫寒的士人，让他们都露出欢颜，风雨不动，安稳如山。唉！什么时候眼前能突然出现这样的房子，即使我的茅屋独自破败，我受冻而死也甘心！全诗通过对自己遭遇的描写，表达了诗人对天下寒士的同情和美好愿望。',
    background: '这首诗作于唐肃宗乾元二年（759年），杜甫住在成都西郊的浣花溪畔，他的茅屋被秋风吹破，于是写下了这首诗。'
  },
  {
    id: 47,
    title: '闻官军收河南河北',
    author: '杜甫',
    dynasty: '唐代',
    content: '剑外忽传收蓟北，初闻涕泪满衣裳。却看妻子愁何在，漫卷诗书喜欲狂。白日放歌须纵酒，青春作伴好还乡。即从巴峡穿巫峡，便下襄阳向洛阳。',
    pinyin: [
      'jiàn wài hū chuán shōu jì běi，chū wén tì lèi mǎn yī shang。què kàn qī zǐ chóu hé zài，màn juǎn shī shū xǐ yù kuáng。bái rì fàng gē xū zòng jiǔ，qīng chūn zuò bàn hǎo huán xiāng。jí cóng bā xiá chuān wū xiá，biàn xià xiāng yáng xiàng luò yáng。'
    ],
    analysis: '这首诗写于安史之乱结束时，杜甫听到官军收复河南河北的消息，非常高兴。剑外忽然传来收复蓟北的消息，刚听到时涕泪沾满衣裳。回头看妻子和孩子，愁容哪里去了，随手卷起诗书，高兴得几乎发狂。白天要放声高歌，痛饮美酒，趁着明媚的春光与妻儿一同返回家乡。立即从巴峡穿过巫峡，再顺流而下到襄阳，然后直奔洛阳。全诗通过对自己听到好消息后的反应的描写，表达了诗人对和平的渴望和喜悦之情。',
    background: '这首诗作于唐代宗广德元年（763年），安史之乱结束，杜甫听到官军收复河南河北的消息，写下了这首诗。'
  },
  {
    id: 48,
    title: '江畔独步寻花',
    author: '杜甫',
    dynasty: '唐代',
    content: '黄四娘家花满蹊，千朵万朵压枝低。留连戏蝶时时舞，自在娇莺恰恰啼。',
    pinyin: [
      'huáng sì niáng jiā huā mǎn xī，qiān duǒ wàn duǒ yā zhī dī。liú lián xì dié shí shí wǔ，zì zài jiāo yīng qià qià tí。'
    ],
    analysis: '这首诗描绘了黄四娘家周围的美景。黄四娘家的小路上开满了鲜花，千朵万朵压得树枝低垂。蝴蝶在花丛中留恋飞舞，黄莺在枝头自由自在地鸣叫。全诗通过对春天景色的描绘，表达了诗人对春天的喜爱之情。',
    background: '这首诗作于唐肃宗上元元年（760年），杜甫住在成都西郊的浣花溪畔，漫步寻花时写下了这首诗。'
  },
  {
    id: 49,
    title: '江南逢李龟年',
    author: '杜甫',
    dynasty: '唐代',
    content: '岐王宅里寻常见，崔九堂前几度闻。正是江南好风景，落花时节又逢君。',
    pinyin: [
      'qí wáng zhái lǐ xún cháng jiàn，cuī jiǔ táng qián jǐ dù wén。zhèng shì jiāng nán hǎo fēng jǐng，luò huā shí jié yòu féng jūn。'
    ],
    analysis: '这首诗是杜甫在江南遇到李龟年时所作。当年在岐王的宅子里经常见到你，在崔九的堂前也多次听到你的歌声。现在正是江南风景最好的时候，在落花的季节又遇到了你。全诗通过对比的手法，表达了诗人对过去的怀念和对现实的感慨。',
    background: '李龟年是唐代著名的音乐家。这首诗作于唐代宗大历五年（770年），杜甫在潭州（今湖南长沙）遇到了流落江南的李龟年，写下了这首诗。'
  },
  {
    id: 50,
    title: '滁州西涧',
    author: '韦应物',
    dynasty: '唐代',
    content: '独怜幽草涧边生，上有黄鹂深树鸣。春潮带雨晚来急，野渡无人舟自横。',
    pinyin: [
      'dú lián yōu cǎo jiàn biān shēng，shàng yǒu huáng lí shēn shù míng。chūn cháo dài yǔ wǎn lái jí，yě dù wú rén zhōu zì héng。'
    ],
    analysis: '这首诗描绘了滁州西涧的景色。我独自喜爱涧边生长的幽草，上面有黄鹂在深树中鸣叫。春潮带着雨水在傍晚来得很急，野外的渡口没有人，只有小船独自横在那里。全诗通过对西涧景色的描绘，表达了诗人对自然景色的喜爱和对宁静生活的向往。',
    background: '滁州西涧在今安徽省滁州市。这首诗作于唐代宗建中年间，韦应物任滁州刺史时写下了这首诗。'
  },
  {
    id: 51,
    title: '塞下曲',
    author: '卢纶',
    dynasty: '唐代',
    content: '月黑雁飞高，单于夜遁逃。欲将轻骑逐，大雪满弓刀。',
    pinyin: [
      'yuè hēi yàn fēi gāo，chán yú yè dùn táo。yù jiāng qīng qí zhú，dà xuě mǎn gōng dāo。'
    ],
    analysis: '这首诗描绘了边塞的战斗场景。月亮黑了，大雁高飞，单于在夜里逃跑。想要率领轻骑兵追击，大雪落满了弓刀。全诗通过对战斗场景的描绘，表现了将士们的勇敢和边塞的艰苦。',
    background: '卢纶（739-799），唐代诗人。这首诗作于唐代宗大历年间，是卢纶的代表作之一。'
  },
  {
    id: 52,
    title: '游子吟',
    author: '孟郊',
    dynasty: '唐代',
    content: '慈母手中线，游子身上衣。临行密密缝，意恐迟迟归。谁言寸草心，报得三春晖。',
    pinyin: [
      'cí mǔ shǒu zhōng xiàn，yóu zǐ shēn shàng yī。lín xíng mì mì féng，yì kǒng chí chí guī。shuí yán cùn cǎo xīn，bào dé sān chūn huī。'
    ],
    analysis: '这首诗描绘了母亲为游子缝衣的情景。慈母手中的线，缝制成游子身上的衣服。临行前密密地缝制，担心儿子迟迟归来。谁说像小草一样的孝心，能报答得了像春天阳光一样的母爱？全诗通过对母亲缝衣的描写，表达了对母爱的赞美和感激之情。',
    background: '孟郊（751-814），字东野，唐代诗人。这首诗作于唐德宗贞元年间，孟郊外出求学时写下了这首诗。'
  },
  {
    id: 53,
    title: '秋夕',
    author: '杜牧',
    dynasty: '唐代',
    content: '银烛秋光冷画屏，轻罗小扇扑流萤。天阶夜色凉如水，卧看牵牛织女星。',
    pinyin: [
      'yín zhú qiū guāng lěng huà píng，qīng luó xiǎo shàn pū liú yíng。tiān jiē yè sè liáng rú shuǐ，wò kàn qiān niú zhī nǚ xīng。'
    ],
    analysis: '这首诗描绘了秋夜的情景。银烛的光芒照在冷的画屏上，宫女用轻罗小扇扑打流萤。天阶的夜色凉如水，宫女卧着看牵牛织女星。全诗通过对秋夜景色的描绘，表达了宫女的孤独和寂寞。',
    background: '这首诗作于晚唐时期，是杜牧的代表作之一。'
  },
  {
    id: 54,
    title: '商山早行',
    author: '温庭筠',
    dynasty: '唐代',
    content: '晨起动征铎，客行悲故乡。鸡声茅店月，人迹板桥霜。槲叶落山路，枳花明驿墙。因思杜陵梦，凫雁满回塘。',
    pinyin: [
      'chén qǐ dòng zhēng duó，kè xíng bēi gù xiāng。jī shēng máo diàn yuè，rén jì bǎn qiáo shuāng。hú yè luò shān lù，zhǐ huā míng yì qiáng。yīn sī dù líng mèng，fú yàn mǎn huí táng。'
    ],
    analysis: '这首诗描绘了商山早行的情景。早晨起来，车马的铃铛响起，客行的人悲伤地思念故乡。鸡声在茅店边，月亮还在天上，人迹留在板桥的霜上。槲叶落在山路上，枳花照亮了驿站的墙。因为思念杜陵的梦，那里凫雁满塘。全诗通过对早行景色的描绘，表达了诗人对故乡的思念之情。',
    background: '商山在今陕西省商洛市。这首诗作于晚唐时期，温庭筠早行时写下了这首诗。'
  },
  {
    id: 55,
    title: '乐游原',
    author: '李商隐',
    dynasty: '唐代',
    content: '向晚意不适，驱车登古原。夕阳无限好，只是近黄昏。',
    pinyin: [
      'xiàng wǎn yì bù shì，qū chē dēng gǔ yuán。xī yáng wú xiàn hǎo，zhǐ shì jìn huáng hūn。'
    ],
    analysis: '这首诗描绘了乐游原的景色。傍晚时分心情不适，驱车登上古原。夕阳无限美好，只是已经接近黄昏。全诗通过对夕阳的描绘，表达了诗人对美好事物短暂的感慨。',
    background: '乐游原在今陕西省西安市。这首诗作于晚唐时期，是李商隐的代表作之一。'
  },
  {
    id: 56,
    title: '夜雨寄北',
    author: '李商隐',
    dynasty: '唐代',
    content: '君问归期未有期，巴山夜雨涨秋池。何当共剪西窗烛，却话巴山夜雨时。',
    pinyin: [
      'jūn wèn guī qī wèi yǒu qī，bā shān yè yǔ zhǎng qiū chí。hé dāng gòng jiǎn xī chuāng zhú，què huà bā shān yè yǔ shí。'
    ],
    analysis: '这首诗是李商隐写给妻子的。你问我归期，我还没有确定的日期，巴山的夜雨涨满了秋池。什么时候我们才能一起在西窗下剪烛夜谈，谈论巴山夜雨时的情景。全诗通过对夜雨的描绘，表达了诗人对妻子的思念之情。',
    background: '这首诗作于晚唐时期，李商隐在巴蜀地区任职时写下了这首诗。'
  },
  {
    id: 57,
    title: '锦瑟',
    author: '李商隐',
    dynasty: '唐代',
    content: '锦瑟无端五十弦，一弦一柱思华年。庄生晓梦迷蝴蝶，望帝春心托杜鹃。沧海月明珠有泪，蓝田日暖玉生烟。此情可待成追忆，只是当时已惘然。',
    pinyin: [
      'jǐn sè wú duān wǔ shí xián，yī xián yī zhù sī huá nián。zhuāng shēng xiǎo mèng mí hú dié，wàng dì chūn xīn tuō dù juān。cāng hǎi yuè míng zhū yǒu lèi，lán tián rì nuǎn yù shēng yān。cǐ qíng kě dài chéng zhuī yì，zhǐ shì dāng shí yǐ wǎng rán。'
    ],
    analysis: '这首诗是李商隐的代表作之一，以锦瑟为喻，表达了对过去的追忆。锦瑟无缘无故有五十根弦，每根弦每根柱都让我想起美好的年华。庄周在清晨的梦中变成了蝴蝶，望帝的春心寄托在杜鹃鸟身上。沧海明月高照，珍珠有泪，蓝田阳光温暖，玉石生烟。这种情感可以留到以后回忆，只是当时已经迷惘了。全诗通过丰富的意象，表达了诗人对过去的追忆和对人生的感慨。',
    background: '这首诗作于晚唐时期，是李商隐的代表作之一。'
  },
  {
    id: 58,
    title: '无题',
    author: '李商隐',
    dynasty: '唐代',
    content: '相见时难别亦难，东风无力百花残。春蚕到死丝方尽，蜡炬成灰泪始干。晓镜但愁云鬓改，夜吟应觉月光寒。蓬山此去无多路，青鸟殷勤为探看。',
    pinyin: [
      'xiāng jiàn shí nán bié yì nán，dōng fēng wú lì bǎi huā cán。chūn cán dào sǐ sī fāng jìn，là jù chéng huī lèi shǐ gàn。xiǎo jìng dàn chóu yún bìn gǎi，yè yín yīng jué yuè guāng hán。péng shān cǐ qù wú duō lù，qīng niǎo yīn qín wèi tàn kàn。'
    ],
    analysis: '这首诗以男女离别为主题，表达了恋人之间的深情和相思之苦。相见很难，离别更难，东风无力，百花凋零。春蚕到死才停止吐丝，蜡烛烧成灰才停止流泪。早晨照镜子，担心鬓发改变，夜晚吟诗，应该感觉月光寒冷。蓬山离此不远，青鸟殷勤为我探看。全诗通过比喻的手法，表达了诗人对爱情的执着和深情。',
    background: '李商隐（约813-约858），字义山，号玉溪生，唐代诗人。这首诗作于晚唐时期，是李商隐的代表作之一。'
  },
  {
    id: 59,
    title: '蜂',
    author: '罗隐',
    dynasty: '唐代',
    content: '不论平地与山尖，无限风光尽被占。采得百花成蜜后，为谁辛苦为谁甜？',
    pinyin: ['bù lùn píng dì yǔ shān jiān，wú xiàn fēng guāng jìn bèi zhān。cǎi dé bǎi huā chéng mì hòu，wèi shuí xīn kǔ wèi shuí tián？'],
    analysis: '这首诗以蜜蜂为喻，表达了诗人对劳动者艰辛的同情。无论在平地还是山尖，无限的风光都被蜜蜂占尽。采完了百花酿成蜂蜜之后，究竟是为谁辛苦为谁甜呢？全诗通过对蜜蜂的描绘，表达了诗人对劳动者的同情和对不公社会的批判。',
    background: '罗隐（833-910），字昭谏，唐代诗人。这首诗作于晚唐时期，是罗隐的代表作之一。'
  },
  {
    id: 60,
    title: '小儿垂钓',
    author: '胡令能',
    dynasty: '唐代',
    content: '蓬头稚子学垂纶，侧坐莓苔草映身。路人借问遥招手，怕得鱼惊不应人。',
    pinyin: ['péng tóu zhì zǐ xué chuí lún，cè zuò méi tái cǎo yìng shēn。lù rén jiè wèn yáo zhāo shǒu，pà dé yú jīng bù yìng rén。'],
    analysis: '这首诗描绘了一个儿童钓鱼的情景。头发乱蓬蓬的小孩学着钓鱼，侧身坐在长满莓苔的岸边，草丛映衬着他的身子。过路的人向他问路，他远远地招手，害怕吓跑鱼儿而不回答。全诗通过对儿童钓鱼的描绘，表现了儿童的天真可爱。',
    background: '胡令能（约785-约826），唐代诗人。这首诗作于中唐时期，是胡令能的代表作之一。'
  },
  {
    id: 61,
    title: '夏日绝句',
    author: '李清照',
    dynasty: '宋代',
    content: '生当作人杰，死亦为鬼雄。至今思项羽，不肯过江东。',
    pinyin: ['shēng dāng zuò rén jié，sǐ yì wéi guǐ xióng。zhì jīn sī xiàng yǔ，bù kěn guò jiāng dōng。'],
    analysis: '这首诗表达了诗人对英雄气概的赞美。活着的时候应当做人中的豪杰，死了也要做鬼中的英雄。直到今天人们还思念项羽，因为他不肯偷生过江东。全诗通过对项羽的赞美，表达了诗人强烈的爱国情怀。',
    background: '李清照（1084-约1155），号易安居士，宋代女词人。这首诗作于南宋时期，是李清照的代表作之一。'
  },
  {
    id: 62,
    title: '三衢道中',
    author: '曾几',
    dynasty: '宋代',
    content: '梅子黄时日日晴，小溪泛尽却山行。绿阴不减来时路，添得黄鹂四五声。',
    pinyin: ['méi zǐ huáng shí rì rì qíng，xiǎo xī fàn jìn què shān xíng。lǜ yīn bù jiǎn lái shí lù，tiān dé huáng lí sì wǔ shēng。'],
    analysis: '这首诗描绘了夏日山行的景色。梅子黄的时候天天都是晴天，乘小船到小溪的尽头，再走山路继续前行。树荫和来时一样浓密，还多了几声黄鹂的叫声。全诗通过对夏日山行的描绘，表现了诗人的愉悦心情。',
    background: '曾几（1085-1166），字吉甫，南宋诗人。这首诗作于南宋时期，是曾几的代表作之一。'
  },
  {
    id: 63,
    title: '秋夜将晓出篱门迎凉有感',
    author: '陆游',
    dynasty: '宋代',
    content: '三万里河东入海，五千仞岳上摩天。遗民泪尽胡尘里，南望王师又一年。',
    pinyin: ['sān wàn lǐ hé dōng rù hǎi，wǔ qiān rèn yuè shàng mó tiān。yí mín lèi jǐn hú chén lǐ，nán wàng wáng shī yòu yī nián。'],
    analysis: '这首诗表达了诗人对沦陷区人民的同情和对国家统一的渴望。三万里长的黄河奔腾向东流入大海，五千仞高的华山直插云霄。沦陷区的人民在金兵的统治下眼泪已经流尽，面向南方盼望官军收复失地又过了一年。全诗通过对沦陷区人民悲惨生活的描绘，表达了诗人对国家的忧虑。',
    background: '陆游（1125-1210），字务观，号放翁，南宋爱国诗人。这首诗作于南宋时期，是陆游的代表作之一。'
  },
  {
    id: 64,
    title: '四时田园杂兴',
    author: '范成大',
    dynasty: '宋代',
    content: '昼出耘田夜绩麻，村庄儿女各当家。童孙未解供耕织，也傍桑阴学种瓜。',
    pinyin: ['zhòu chū yún tián yè jì má，cūn zhuāng ér nǚ gè dāng jiā。tóng sūn wèi jiě gōng gē zhī，yě bàng sāng yīn xué zhòng guā。'],
    analysis: '这首诗描绘了夏日农村的生活景象。白天出去除草晚上搓麻，村里的年轻人各自撑持着家务。小孩子还不会耕田织布，也在桑树阴下学着种瓜。全诗通过对农村生活的描绘，表现了农民的勤劳和农村生活的和谐。',
    background: '范成大（1126-1193），字致能，号石湖居士，南宋诗人。这首诗作于淳熙十三年（1186年），是范成大的代表作之一。'
  },
  {
    id: 65,
    title: '四时田园杂兴',
    author: '范成大',
    dynasty: '宋代',
    content: '梅子金黄杏子肥，麦花雪白菜花稀。日长篱落无人过，唯有蜻蜓蛱蝶飞。',
    pinyin: ['méi zǐ jīn huáng xìng zǐ féi，mài huā xuě bái cài huā xī。rì cháng lí luò wú rén guò，wéi yǒu qīng tíng jiá dié fēi。'],
    analysis: '这首诗描绘了夏日农村的自然景象。梅子金黄，杏子肥大，麦花雪白，菜花稀疏。白天变长，篱笆边没有人经过，只有蜻蜓和蝴蝶在飞舞。全诗通过对夏日农村景色的描绘，表现了农村生活的宁静和美好。',
    background: '范成大（1126-1193），字致能，号石湖居士，南宋诗人。这首诗作于淳熙十三年（1186年），是范成大的代表作之一。'
  },
  {
    id: 66,
    title: '春日',
    author: '朱熹',
    dynasty: '宋代',
    content: '胜日寻芳泗水滨，无边光景一时新。等闲识得东风面，万紫千红总是春。',
    pinyin: ['shèng rì xún fāng sì shuǐ bīn，wú biān guāng jǐng yī shí xīn。děng xián shí dé dōng fēng miàn，wàn zǐ qiān hóng zǒng shì chūn。'],
    analysis: '这首诗描绘了春天的美景。在风和日丽的日子里到泗水河边踏青，无边的风光景色一时都焕然一新。轻易就能感受到东风的面容，万紫千红到处都是春天的景致。全诗通过对春天的描绘，表达了诗人对春天的喜爱和对美好生活的向往。',
    background: '朱熹（1130-1200），字元晦，号晦庵，南宋理学家、教育家。这首诗作于南宋时期，是朱熹的代表作之一。'
  },
  {
    id: 67,
    title: '观书有感',
    author: '朱熹',
    dynasty: '宋代',
    content: '半亩方塘一鉴开，天光云影共徘徊。问渠那得清如许，为有源头活水来。',
    pinyin: ['bàn mǔ fāng táng yī jiàn kāi，tiān guāng yún yǐng gòng pái huái。wèn qú nà dé qīng rú xǔ，wèi yǒu yuán tóu huó shuǐ lái。'],
    analysis: '这首诗以方塘为喻，说明学习需要不断获取新知识。半亩大的方形池塘像镜子一样打开，天光云影一起在水中徘徊。问它为什么能够这样清澈，因为有源头的水不断流来。全诗通过对方塘的描绘，说明了不断学习的重要性。',
    background: '朱熹（1130-1200），字元晦，号晦庵，南宋理学家、教育家。这首诗作于南宋时期，是朱熹的代表作之一。'
  },
  {
    id: 68,
    title: '题临安邸',
    author: '林升',
    dynasty: '宋代',
    content: '山外青山楼外楼，西湖歌舞几时休？暖风熏得游人醉，直把杭州作汴州。',
    pinyin: ['shān wài qīng shān lóu wài lóu，xī hú gē wǔ jǐ shí xiū？nuǎn fēng xūn dé yóu rén zuì，zhí bǎ háng zhōu zuò biàn zhōu。'],
    analysis: '这首诗讽刺了南宋统治者的腐败。山外有青山，楼外有楼，西湖的歌舞什么时候才能停止？暖洋洋的风吹得游客们陶醉，简直把杭州当成了汴州。全诗通过对西湖美景的描绘，讽刺了统治者的腐败和不知收复失地。',
    background: '林升，字云栋，南宋诗人。这首诗作于南宋时期，讽刺了当时统治者的腐败。'
  },
  {
    id: 69,
    title: '游园不值',
    author: '叶绍翁',
    dynasty: '宋代',
    content: '应怜屐齿印苍苔，小扣柴扉久不开。春色满园关不住，一枝红杏出墙来。',
    pinyin: ['yīng lián jī chǐ yìn cāng tái，xiǎo kòu chái fēi jiǔ bù kāi。chūn sè mǎn yuán guān bù zhù，yī zhī hóng xìng chū qiáng lái。'],
    analysis: '这首诗描绘了春日游园的情景。应该是怜爱苍苔怕被木屐踩坏，轻轻敲柴门久久不开。可是满园的春色怎么也关不住，一枝红色的杏花已经伸出墙外来。全诗通过对春日游园的描绘，表达了诗人对春天的喜爱之情。',
    background: '叶绍翁，字嗣宗，号靖逸，南宋诗人。这首诗作于南宋时期，是叶绍翁的代表作之一。'
  },
  {
    id: 70,
    title: '乡村四月',
    author: '翁卷',
    dynasty: '宋代',
    content: '绿遍山原白满川，子规声里雨如烟。乡村四月闲人少，才了蚕桑又插田。',
    pinyin: ['lǜ biàn shān yuán bái mǎn chuān，zǐ guī shēng lǐ yǔ rú yān。xiāng cūn sì yuè xián rén shǎo，cái le cán sāng yòu chā tián。'],
    analysis: '这首诗描绘了乡村四月的繁忙景象。绿色布满山原，河水涨满，白茫茫的一片，在杜鹃的叫声中，细雨濛濛如烟。四月的乡村没有闲人，刚忙完蚕桑又要插秧。全诗通过对乡村四月景色的描绘，表现了农民的勤劳和农村生活的繁忙。',
    background: '翁卷，字续古，一字灵舒，南宋诗人。这首诗作于南宋时期，是翁卷的代表作之一。'
  },
  {
    id: 71,
    title: '墨梅',
    author: '王冕',
    dynasty: '元代',
    content: '吾家洗砚池头树，个个花开淡墨痕。不要人夸好颜色，只留清气满乾坤。',
    pinyin: ['wú jiā xǐ yàn chí tóu shù，gè gè huā kāi dàn mò hén。bù yào rén kuā hǎo yán sè，zhǐ liú qīng qì mǎn qián kūn。'],
    analysis: '这首诗描绘了墨梅的特点。我家洗砚池边的梅树，朵朵花开都有淡淡的墨痕。不需要别人夸奖它的颜色好看，只希望留下清香之气充满天地间。全诗通过对墨梅的描绘，表达了诗人不慕虚名、保持高洁品质的志向。',
    background: '王冕（1287-1359），字元章，号煮石山农，元代画家、诗人。这首诗作于元代，是王冕的代表作之一。'
  },
  {
    id: 72,
    title: '石灰吟',
    author: '于谦',
    dynasty: '明代',
    content: '千锤万凿出深山，烈火焚烧若等闲。粉骨碎身全不怕，要留清白在人间。',
    pinyin: ['qiān chuí wàn záo chū shēn shān，liè huǒ fén shāo ruò děng xián。fěn gǔ suì shēn quán bù pà，yào liú qīng bái zài rén jiān。'],
    analysis: '这首诗以石灰为喻，表达了诗人的志向。石灰经过千锤万凿从深山里开采出来，烈火焚烧也像平常事一样。即使粉身碎骨也毫不畏惧，只希望在人间留下清白的名声。全诗通过对石灰的描绘，表达了诗人不怕牺牲、保持高洁品质的志向。',
    background: '于谦（1398-1457），字廷益，明代政治家、军事家、诗人。这首诗作于明代，是于谦的代表作之一。'
  },
  {
    id: 73,
    title: '竹石',
    author: '郑燮',
    dynasty: '清代',
    content: '咬定青山不放松，立根原在破岩中。千磨万击还坚劲，任尔东西南北风。',
    pinyin: ['yǎo dìng qīng shān bù fàng sōng，lì gēn yuán zài pò yán zhōng。qiān mó wàn jī hái jiān jìn，rèn ěr dōng xī nán běi fēng。'],
    analysis: '这首诗以竹子为喻，表达了诗人的志向。竹子紧紧咬定青山不放松，根深深地扎在破岩中。经过千磨万击仍然坚韧不拔，任凭你刮东西南北风。全诗通过对竹子的描绘，表达了诗人坚韧不拔、不屈不挠的精神。',
    background: '郑燮（1693-1765），字克柔，号板桥，清代书画家、诗人。这首诗作于清代，是郑燮的代表作之一。'
  },
  {
    id: 74,
    title: '村居',
    author: '高鼎',
    dynasty: '清代',
    content: '草长莺飞二月天，拂堤杨柳醉春烟。儿童散学归来早，忙趁东风放纸鸢。',
    pinyin: ['cǎo zhǎng yīng fēi èr yuè tiān，fú dī yáng liǔ zuì chūn yān。ér tóng sàn xué guī lái zǎo，máng chèn dōng fēng fàng zhǐ yuān。'],
    analysis: '这首诗描绘了春天村居的景象。二月里草长莺飞，杨柳拂堤，仿佛陶醉在春烟中。儿童放学回来得早，忙着趁着东风放风筝。全诗语言清新，画面生动，表现了春天的生机和儿童的欢乐。',
    background: '高鼎（1821-1861），字象一，号省斋，清代诗人。这首诗作于清代，是高鼎的代表作之一。'
  },
  {
    id: 75,
    title: '己亥杂诗',
    author: '龚自珍',
    dynasty: '清代',
    content: '九州生气恃风雷，万马齐喑究可哀。我劝天公重抖擞，不拘一格降人才。',
    pinyin: ['jiǔ zhōu shēng qì shì fēng léi，wàn mǎ qí yīn jiū kě āi。wǒ quàn tiān gōng zhòng dǒu sǒu，bù jū yī gé jiàng rén cái。'],
    analysis: '这首诗表达了诗人对国家命运的担忧和对人才的渴望。中国要有生气必须依靠风雷，万马齐喑的局面实在可悲。我劝老天爷重新振作精神，不拘一格地降下人才。全诗通过对国家现状的批判，表达了诗人对改革的渴望。',
    background: '龚自珍（1792-1841），字璱人，号定庵，清代思想家、文学家。这首诗作于道光十九年（1839年），是龚自珍的代表作之一。'
  },
  {
    id: 76,
    title: '长歌行',
    author: '汉乐府',
    dynasty: '汉代',
    content: '青青园中葵，朝露待日晞。阳春布德泽，万物生光辉。常恐秋节至，焜黄华叶衰。百川东到海，何时复西归？少壮不努力，老大徒伤悲。',
    pinyin: ['qīng qīng yuán zhōng kuí，zhāo lù dài rì xī。yáng chūn bù dé zé，wàn wù shēng guāng huī。cháng kǒng qiū jié zhì，kūn huáng huá yè shuāi。bǎi chuān dōng dào hǎi，hé shí fù xī guī？shào zhuàng bù nǔ lì，lǎo dà tú shāng bēi。'],
    analysis: '这首诗以园中葵为喻，告诫人们要珍惜时间。园中的葵菜青青，早晨的露水等待太阳晒干。春天布施恩泽，万物生机盎然。常常担心秋天到来，花叶枯黄衰落。百川向东流到大海，什么时候才能再向西流？年轻力壮时不努力，到老来只能白白悲伤。全诗通过自然现象的描绘，告诫人们要珍惜青春时光，努力奋斗。',
    background: '汉乐府是汉代的官方音乐机构，负责收集、整理民歌。这首诗作于汉代，是汉乐府的代表作之一。'
  },
  {
    id: 77,
    title: '七步诗',
    author: '曹植',
    dynasty: '三国',
    content: '煮豆燃豆萁，豆在釜中泣。本是同根生，相煎何太急？',
    pinyin: ['zhǔ dòu rán dòu qí，dòu zài fǔ zhōng qì。běn shì tóng gēn shēng，xiāng jiān hé tài jí？'],
    analysis: '这首诗是曹植在七步之内所作，用豆和豆萁的关系比喻兄弟关系。煮豆的时候用豆萁作燃料，豆子在锅里哭泣。本来是同根生长的，为什么要这样急迫地相互煎熬呢？全诗通过比喻的手法，表达了曹植对兄弟相残的悲愤之情。',
    background: '曹植（192-232），字子建，三国时期魏国诗人。这首诗作于曹丕称帝后，曹植被曹丕猜忌，被迫在七步之内作诗，否则将被处死。'
  },
  {
    id: 78,
    title: '敕勒歌',
    author: '北朝民歌',
    dynasty: '北朝',
    content: '敕勒川，阴山下。天似穹庐，笼盖四野。天苍苍，野茫茫，风吹草低见牛羊。',
    pinyin: ['chì lè chuān，yīn shān xià。tiān sì qióng lú，lóng gài sì yě。tiān cāng cāng，yě máng máng，fēng chuī cǎo dī xiàn niú yáng。'],
    analysis: '这首诗描绘了敕勒川的壮丽景色。敕勒川在阴山下，天空像毡帐一样笼罩着大地。天空苍苍，原野茫茫，风吹草低，露出牛羊。全诗语言质朴，画面宏大，表现了北方草原的辽阔和牧民的生活。',
    background: '敕勒歌是北朝时期的民歌，反映了北方游牧民族的生活。'
  },
  {
    id: 79,
    title: '回乡偶书',
    author: '贺知章',
    dynasty: '唐代',
    content: '少小离家老大回，乡音无改鬓毛衰。儿童相见不相识，笑问客从何处来。',
    pinyin: ['shào xiǎo lí jiā lǎo dà huí，xiāng yīn wú gǎi bìn máo shuāi。ér tóng xiāng jiàn bù xiāng shí，xiào wèn kè cóng hé chù lái。'],
    analysis: '这首诗是贺知章回乡时所作。年轻时离开家乡，年老时才回来，乡音没有改变，但头发已经稀疏。儿童们见了不认识，笑着问客人从哪里来。全诗通过对比的手法，表达了诗人对家乡的思念和时光流逝的感慨。',
    background: '贺知章（659-744），字季真，唐代诗人。这首诗作于天宝三年（744年），贺知章辞官回乡时写下了这首诗。'
  },
  {
    id: 80,
    title: '咏柳',
    author: '贺知章',
    dynasty: '唐代',
    content: '碧玉妆成一树高，万条垂下绿丝绦。不知细叶谁裁出，二月春风似剪刀。',
    pinyin: ['bì yù zhuāng chéng yī shù gāo，wàn tiáo chuí xià lǜ sī tāo。bù zhī xì yè shuí cái chū，èr yuè chūn fēng sì jiǎn dāo。'],
    analysis: '这首诗描绘了春天柳树的美丽。柳树像碧玉装扮成的一样高大，万条柳枝垂下像绿色的丝带。不知道细细的柳叶是谁裁剪出来的，原来是二月的春风像剪刀一样。全诗通过比喻的手法，生动地表现了柳树的美丽和春风的神奇。',
    background: '这首诗作于盛唐时期，是贺知章的代表作之一。'
  },
  {
    id: 81,
    title: '凉州词',
    author: '王之涣',
    dynasty: '唐代',
    content: '黄河远上白云间，一片孤城万仞山。羌笛何须怨杨柳，春风不度玉门关。',
    pinyin: ['huáng hé yuǎn shàng bái yún jiān，yī piàn gū chéng wàn rèn shān。qiāng dí hé xū yuàn yáng liǔ，chūn fēng bù dù yù mén guān。'],
    analysis: '这首诗描绘了凉州的边塞风光。黄河远远地伸向白云之间，一座孤城坐落在万仞高山之中。羌笛何必吹奏《折杨柳》的曲子，春风是吹不到玉门关的。全诗通过对边塞风光的描绘，表达了戍边将士的思乡之情。',
    background: '凉州是唐代的一个州，在今甘肃武威一带。这首诗作于盛唐时期，是王之涣的代表作之一。'
  },
  {
    id: 82,
    title: '凉州词',
    author: '王翰',
    dynasty: '唐代',
    content: '葡萄美酒夜光杯，欲饮琵琶马上催。醉卧沙场君莫笑，古来征战几人回？',
    pinyin: ['pú táo měi jiǔ yè guāng bēi，yù yǐn pí pá mǎ shàng cuī。zuì wò shā chǎng jūn mò xiào，gǔ lái zhēng zhàn jǐ rén huí？'],
    analysis: '这首诗描绘了边塞将士的生活。葡萄美酒倒在夜光杯里，正要喝的时候，琵琶声在马上催促。醉卧在沙场上请你不要笑，自古以来征战的人有几个能回来？全诗通过对边塞生活的描绘，表现了将士们的豪迈气概和视死如归的精神。',
    background: '王翰（约687-约726），唐代诗人。这首诗作于盛唐时期，是王翰的代表作之一。'
  },
  {
    id: 83,
    title: '出塞',
    author: '王昌龄',
    dynasty: '唐代',
    content: '秦时明月汉时关，万里长征人未还。但使龙城飞将在，不教胡马度阴山。',
    pinyin: ['qín shí míng yuè hàn shí guān，wàn lǐ cháng zhēng rén wèi huán。dàn shǐ lóng chéng fēi jiàng zài，bù jiào hú mǎ dù yīn shān。'],
    analysis: '这首诗描绘了边塞的战争景象。秦汉时期的明月和边关，万里长征的人还没有回来。只要龙城的飞将军还在，就不会让胡人的马越过阴山。全诗通过对边塞战争的描绘，表达了诗人对和平的渴望和对戍边将士的赞美。',
    background: '王昌龄（698-757），字少伯，唐代诗人。这首诗作于盛唐时期，是王昌龄的代表作之一。'
  },
  {
    id: 84,
    title: '芙蓉楼送辛渐',
    author: '王昌龄',
    dynasty: '唐代',
    content: '寒雨连江夜入吴，平明送客楚山孤。洛阳亲友如相问，一片冰心在玉壶。',
    pinyin: ['hán yǔ lián jiāng yè rù wú，píng míng sòng kè chǔ shān gū。luò yáng qīn yǒu rú xiāng wèn，yī piàn bīng xīn zài yù hú。'],
    analysis: '这首诗是王昌龄送朋友辛渐时所作。寒雨连江，夜晚进入吴地，天亮时送客，楚山显得孤独。如果洛阳的亲友问起我，就说我的心像玉壶里的冰一样纯洁。全诗通过对送别场景的描绘，表达了诗人的高洁品格和对朋友的深情。',
    background: '芙蓉楼在今江苏镇江。这首诗作于盛唐时期，是王昌龄的代表作之一。'
  },
  {
    id: 85,
    title: '古朗月行',
    author: '李白',
    dynasty: '唐代',
    content: '小时不识月，呼作白玉盘。又疑瑶台镜，飞在青云端。',
    pinyin: ['xiǎo shí bù shí yuè，hū zuò bái yù pán。yòu yí yáo tái jìng，fēi zài qīng yún duān。'],
    analysis: '这首诗描绘了儿童对月亮的想象。小时候不认识月亮，把它叫做白玉盘。又怀疑是瑶台上的镜子，飞在青云的上端。全诗通过儿童的视角，表现了对月亮的美好想象。',
    background: '这首诗作于盛唐时期，是李白的代表作之一。'
  },
  {
    id: 86,
    title: '早发白帝城',
    author: '李白',
    dynasty: '唐代',
    content: '朝辞白帝彩云间，千里江陵一日还。两岸猿声啼不住，轻舟已过万重山。',
    pinyin: ['zhāo cí bái dì cǎi yún jiān，qiān lǐ jiāng líng yī rì huán。liǎng àn yuán shēng tí bù zhù，qīng zhōu yǐ guò wàn chóng shān。'],
    analysis: '这首诗描绘了李白从白帝城出发，顺流而下到江陵的情景。早晨辞别白帝城，那里彩云缭绕，千里之外的江陵一天就可以到达。两岸的猿猴不停地啼叫，轻舟已经穿过了万重山。全诗通过对行程的描绘，表现了诗人轻松愉快的心情。',
    background: '白帝城位于重庆市奉节县。这首诗作于乾元二年（759年），李白被流放夜郎，行至白帝城时遇赦，于是乘舟东下，写下了这首诗。'
  },
  {
    id: 87,
    title: '赠汪伦',
    author: '李白',
    dynasty: '唐代',
    content: '李白乘舟将欲行，忽闻岸上踏歌声。桃花潭水深千尺，不及汪伦送我情。',
    pinyin: ['lǐ bái chéng zhōu jiāng yù xíng，hū wén àn shàng tà gē shēng。táo huā tán shuǐ shēn qiān chǐ，bù jí wāng lún sòng wǒ qíng。'],
    analysis: '这首诗是李白赠给汪伦的。李白乘船将要出发，忽然听到岸上的踏歌声。桃花潭的水深达千尺，也比不上汪伦送我的情谊。全诗通过对比的手法，表达了诗人对汪伦的深厚情谊。',
    background: '汪伦是唐代泾县的一位村民，他邀请李白到家中做客，李白离开时，汪伦前来相送，李白写下了这首诗。'
  },
  {
    id: 88,
    title: '黄鹤楼送孟浩然之广陵',
    author: '李白',
    dynasty: '唐代',
    content: '故人西辞黄鹤楼，烟花三月下扬州。孤帆远影碧空尽，唯见长江天际流。',
    pinyin: ['gù rén xī cí huáng hè lóu，yān huā sān yuè xià yáng zhōu。gū fān yuǎn yǐng bì kōng jìn，wéi jiàn cháng jiāng tiān jì liú。'],
    analysis: '这首诗是李白送孟浩然去广陵时所作。老朋友向西辞别黄鹤楼，在烟花三月的春天去扬州。孤帆的影子渐渐消失在碧空尽头，只看见长江向天际流去。全诗通过对送别场景的描绘，表达了诗人对友人的不舍之情。',
    background: '黄鹤楼位于湖北省武汉市。这首诗作于盛唐时期，是李白的代表作之一。'
  },
  {
    id: 89,
    title: '春夜喜雨',
    author: '杜甫',
    dynasty: '唐代',
    content: '好雨知时节，当春乃发生。随风潜入夜，润物细无声。野径云俱黑，江船火独明。晓看红湿处，花重锦官城。',
    pinyin: ['hǎo yǔ zhī shí jié，dāng chūn nǎi fā shēng。suí fēng qián rù yè，rùn wù xì wú shēng。yě jìng yún jù hēi，jiāng chuán huǒ dú míng。xiǎo kàn hóng shī chù，huā zhòng jǐn guān chéng。'],
    analysis: '这首诗描绘了春夜降雨的景象。好雨知道季节，春天一到就发生了。随风在夜里悄悄来临，滋润万物细无声。野外的小路和云都是黑的，江上的船火独自明亮。早晨看去湿润的地方，锦官城里花朵沉甸甸的。全诗通过对春雨的描绘，表现了诗人对春雨的喜爱。',
    background: '这首诗作于唐肃宗上元二年（761年），当时杜甫居住在成都西郊的草堂。'
  },
  {
    id: 90,
    title: '绝句',
    author: '杜甫',
    dynasty: '唐代',
    content: '两个黄鹂鸣翠柳，一行白鹭上青天。窗含西岭千秋雪，门泊东吴万里船。',
    pinyin: ['liǎng gè huáng lí míng cuì liǔ，yī háng bái lù shàng qīng tiān。chuāng hán xī lǐng qiān qiū xuě，mén bó dōng wú wàn lǐ chuán。'],
    analysis: '这首诗描绘了春天的景色。两只黄鹂在翠绿的柳树上鸣叫，一行白鹭飞上青天。从窗口可以看到西岭千年不化的雪，门前停泊着从东吴万里而来的船。全诗通过对自然景色的描绘，表现了诗人对美好春光的赞美。',
    background: '这首诗作于唐代宗广德二年（764年），当时杜甫居住在成都草堂。'
  },
  {
    id: 91,
    title: '江畔独步寻花',
    author: '杜甫',
    dynasty: '唐代',
    content: '黄四娘家花满蹊，千朵万朵压枝低。留连戏蝶时时舞，自在娇莺恰恰啼。',
    pinyin: ['huáng sì niáng jiā huā mǎn xī，qiān duǒ wàn duǒ yā zhī dī。liú lián xì dié shí shí wǔ，zì zài jiāo yīng qià qià tí。'],
    analysis: '这首诗描绘了黄四娘家周围的美景。黄四娘家的小路上开满了鲜花，千朵万朵压得树枝低垂。蝴蝶在花丛中留恋飞舞，黄莺在枝头自由自在地鸣叫。全诗通过对春天景色的描绘，表达了诗人对春天的喜爱之情。',
    background: '这首诗作于唐肃宗上元元年（760年），杜甫住在成都西郊的浣花溪畔，漫步寻花时写下了这首诗。'
  },
  {
    id: 92,
    title: '相思',
    author: '王维',
    dynasty: '唐代',
    content: '红豆生南国，春来发几枝。愿君多采撷，此物最相思。',
    pinyin: ['hóng dòu shēng nán guó，chūn lái fā jǐ zhī。yuàn jūn duō cǎi xié，cǐ wù zuì xiāng sī。'],
    analysis: '这首诗以红豆为喻，表达了对友人的思念之情。红豆生长在南方，春天来了不知发了多少枝。希望你多采摘一些，因为红豆最能寄托相思之情。全诗语言简洁，情感真挚，是一首著名的相思诗。',
    background: '王维（701-761），字摩诘，唐代诗人、画家。这首诗作于盛唐时期，是王维的代表作之一。'
  },
  {
    id: 93,
    title: '鹿柴',
    author: '王维',
    dynasty: '唐代',
    content: '空山不见人，但闻人语响。返景入深林，复照青苔上。',
    pinyin: ['kōng shān bù jiàn rén，dàn wén rén yǔ xiǎng。fǎn jǐng rù shēn lín，fù zhào qīng tái shàng。'],
    analysis: '这首诗描绘了鹿柴的幽静景色。空寂的山林里看不见人，只听到有人说话的声音。夕阳的余晖映入深林，又照在青苔上。全诗通过听觉和视觉的对比，营造出一种幽静深远的意境。',
    background: '鹿柴是王维在辋川的别墅之一。这首诗作于盛唐时期，表现了王维对自然景色的敏锐观察和独特感受。'
  },
  {
    id: 94,
    title: '竹里馆',
    author: '王维',
    dynasty: '唐代',
    content: '独坐幽篁里，弹琴复长啸。深林人不知，明月来相照。',
    pinyin: ['dú zuò yōu huáng lǐ，tán qín fù cháng xiào。shēn lín rén bù zhī，míng yuè lái xiāng zhào。'],
    analysis: '这首诗描绘了诗人在竹林中独自弹琴长啸的情景。诗人独自坐在幽深的竹林里，一边弹琴一边长啸。深林里没有人知道他，只有明月来陪伴他。全诗营造出一种宁静、淡泊的意境，表现了诗人对隐居生活的喜爱。',
    background: '这首诗作于盛唐时期，是王维辋川集的代表作之一。'
  },
  {
    id: 95,
    title: '鸟鸣涧',
    author: '王维',
    dynasty: '唐代',
    content: '人闲桂花落，夜静春山空。月出惊山鸟，时鸣春涧中。',
    pinyin: ['rén xián guì huā luò，yè jìng chūn shān kōng。yuè chū jīng shān niǎo，shí míng chūn jiàn zhōng。'],
    analysis: '这首诗描绘了春夜山涧的幽静景色。人闲的时候桂花飘落，夜晚寂静，春天的山中空旷无人。月亮出来惊动了山鸟，不时在春涧中鸣叫。全诗通过对春夜景色的描绘，营造出一种宁静幽远的意境。',
    background: '这首诗作于盛唐时期，是王维的代表作之一。'
  },
  {
    id: 96,
    title: '送元二使安西',
    author: '王维',
    dynasty: '唐代',
    content: '渭城朝雨浥轻尘，客舍青青柳色新。劝君更尽一杯酒，西出阳关无故人。',
    pinyin: ['wèi chéng zhāo yǔ yì qīng chén，kè shè qīng qīng liǔ sè xīn。quàn jūn gèng jìn yī bēi jiǔ，xī chū yáng guān wú gù rén。'],
    analysis: '这首诗是王维送朋友元二出使安西时所作。渭城早晨的雨湿润了路上的尘土，客舍周围的柳树显得格外清新。劝你再喝一杯酒，向西出了阳关就没有老朋友了。全诗语言简洁，情感真挚，表达了对朋友的不舍之情。',
    background: '安西是唐代安西都护府的所在地，在今新疆库车一带。这首诗作于盛唐时期，是王维的代表作之一。'
  },
  {
    id: 97,
    title: '九月九日忆山东兄弟',
    author: '王维',
    dynasty: '唐代',
    content: '独在异乡为异客，每逢佳节倍思亲。遥知兄弟登高处，遍插茱萸少一人。',
    pinyin: ['dú zài yì xiāng wéi yì kè，měi féng jiā jié bèi sī qīn。yáo zhī xiōng dì dēng gāo chù，biàn chā zhū yú shǎo yī rén。'],
    analysis: '这首诗是王维在重阳节思念家乡兄弟时所作。独自在他乡做客，每到佳节就更加思念亲人。遥想兄弟们登上高处，插上茱萸，发现少了自己一人。全诗语言朴素，情感真挚，表达了对家乡和兄弟的思念之情。',
    background: '山东指华山以东，王维的家乡蒲州（今山西永济）在华山以东。这首诗作于盛唐时期，是王维的代表作之一。'
  },
  {
    id: 98,
    title: '使至塞上',
    author: '王维',
    dynasty: '唐代',
    content: '单车欲问边，属国过居延。征蓬出汉塞，归雁入胡天。大漠孤烟直，长河落日圆。萧关逢候骑，都护在燕然。',
    pinyin: ['dān chē yù wèn biān，shǔ guó guò jū yán。zhēng péng chū hàn sài，guī yàn rù hú tiān。dà mò gū yān zhí，cháng hé luò rì yuán。xiāo guān féng hòu qí，dū hù zài yàn rán。'],
    analysis: '这首诗描绘了边塞的壮丽景色。诗人轻车前往边塞慰问，经过居延属国。像蓬草一样出了汉塞，像归雁一样进入胡天。广阔沙漠中孤烟直上，黄河尽头落日正圆。在萧关遇到侦察的骑兵，都护正在燕然前线。全诗通过对边塞景色的描绘，表现了边塞的壮阔和诗人的孤独。',
    background: '这首诗作于开元二十五年（737年），王维以监察御史的身份出使边塞时写下了这首诗。'
  },
  {
    id: 99,
    title: '山居秋暝',
    author: '王维',
    dynasty: '唐代',
    content: '空山新雨后，天气晚来秋。明月松间照，清泉石上流。竹喧归浣女，莲动下渔舟。随意春芳歇，王孙自可留。',
    pinyin: ['kōng shān xīn yǔ hòu，tiān qì wǎn lái qiū。míng yuè sōng jiān zhào，qīng quán shí shàng liú。zhú xuān guī huàn nǚ，lián dòng xià yú zhōu。suí yì chūn fāng xiē，wáng sūn zì kě liú。'],
    analysis: '这首诗描绘了秋山晚景。空寂的山中刚下过雨，傍晚的天气带着秋意。明月照在松林间，清泉在石上流淌。竹林中传来洗衣女子归来的笑声，莲叶晃动是渔舟顺流而下。春天的芳华虽然消歇，但秋景也很美好，王孙自然可以留下来。全诗通过对秋山景色的描绘，表现了诗人对隐居生活的喜爱。',
    background: '这首诗作于盛唐时期，是王维辋川集的代表作之一。'
  },
  {
    id: 100,
    title: '过故人庄',
    author: '孟浩然',
    dynasty: '唐代',
    content: '故人具鸡黍，邀我至田家。绿树村边合，青山郭外斜。开轩面场圃，把酒话桑麻。待到重阳日，还来就菊花。',
    pinyin: ['gù rén jù jī shǔ，yāo wǒ zhì tián jiā。lǜ shù cūn biān hé，qīng shān guō wài xié。kāi xuān miàn chǎng pǔ，bǎ jiǔ huà sāng má。dài dào chóng yáng rì，hái lái jiù jú huā。'],
    analysis: '这首诗描写了诗人到农村朋友家做客的情景。老朋友准备了丰盛的饭菜，邀请我到田家。绿色的树木环绕着村庄，青青的山峦在城郭外斜立。打开窗户面对着谷场和菜园，一边喝酒一边谈论着农事。等到重阳节的时候，我还要来欣赏菊花。全诗通过对农村景色的描绘，表现了诗人对田园生活的向往。',
    background: '孟浩然（689-740），字浩然，唐代诗人。这首诗作于盛唐时期，是孟浩然的代表作之一。'
  },
  {
    id: 101,
    title: '望洞庭湖赠张丞相',
    author: '孟浩然',
    dynasty: '唐代',
    content: '八月湖水平，涵虚混太清。气蒸云梦泽，波撼岳阳城。欲济无舟楫，端居耻圣明。坐观垂钓者，徒有羡鱼情。',
    pinyin: ['bā yuè hú shuǐ píng，hán xū hùn tài qīng。qì zhēng yún mèng zé，bō hàn yuè yáng chéng。yù jì wú zhōu jí，duān jū chǐ shèng míng。zuò guān chuí diào zhě，tú yǒu xiàn yú qíng。'],
    analysis: '这首诗描绘了洞庭湖的壮丽景象，并表达了诗人希望得到引荐的心情。八月里洞庭湖水涨平岸，与天空混为一体。云梦泽水汽蒸腾，岳阳城在波涛中摇撼。想要渡湖却没有舟楫，闲居又愧对圣明的时代。坐着看别人钓鱼，只是白白羡慕别人有所收获。全诗借景抒情，表达了诗人希望得到引荐的心情。',
    background: '孟浩然（689-740），字浩然，唐代诗人。这首诗是孟浩然写给张九龄的，希望得到引荐。'
  },
  {
    id: 102,
    title: '宿建德江',
    author: '孟浩然',
    dynasty: '唐代',
    content: '移舟泊烟渚，日暮客愁新。野旷天低树，江清月近人。',
    pinyin: ['yí zhōu bó yān zhǔ，rì mù kè chóu xīn。yě kuàng tiān dī shù，jiāng qīng yuè jìn rén。'],
    analysis: '这首诗描绘了建德江上的夜景。把船停泊在烟雾笼罩的小洲边，夕阳西下，旅途中新的愁思又涌上心头。原野空旷，天空显得比树还低，江水清澈，月亮离人很近。全诗通过对江夜景色的描绘，表现了诗人的孤独和惆怅。',
    background: '孟浩然（689-740），字浩然，唐代诗人。这首诗作于开元十八年（730年），孟浩然漫游吴越时写下了这首诗。'
  },
  {
    id: 103,
    title: '春晓',
    author: '孟浩然',
    dynasty: '唐代',
    content: '春眠不觉晓，处处闻啼鸟。夜来风雨声，花落知多少。',
    pinyin: ['chūn mián bù jué xiǎo，chù chù wén tí niǎo。yè lái fēng yǔ shēng，huā luò zhī duō shǎo。'],
    analysis: '这首诗描绘了春天早晨的情景。春天睡觉不知不觉天就亮了，到处都能听到鸟儿的叫声。想起夜里的风雨声，不知道吹落了多少花瓣。全诗语言简洁，意境清新，表现了春天的生机和诗人对春天的喜爱。',
    background: '孟浩然（689-740），字浩然，唐代诗人。这首诗作于盛唐时期，是孟浩然的代表作之一。'
  },
  {
    id: 104,
    title: '清明',
    author: '杜牧',
    dynasty: '唐代',
    content: '清明时节雨纷纷，路上行人欲断魂。借问酒家何处有，牧童遥指杏花村。',
    pinyin: ['qīng míng shí jié yǔ fēn fēn，lù shàng xíng rén yù duàn hún。jiè wèn jiǔ jiā hé chù yǒu，mù tóng yáo zhǐ xìng huā cūn。'],
    analysis: '这首诗描绘了清明时节的景象。清明时节细雨纷纷，路上的行人心情悲伤。向人询问哪里有酒家，牧童远远地指向杏花村。全诗语言通俗易懂，情景交融，表现了清明节的氛围和行人的心情。',
    background: '杜牧（803-852），字牧之，唐代诗人。这首诗作于晚唐时期，是一首脍炙人口的清明节诗篇。'
  },
  {
    id: 105,
    title: '山行',
    author: '杜牧',
    dynasty: '唐代',
    content: '远上寒山石径斜，白云生处有人家。停车坐爱枫林晚，霜叶红于二月花。',
    pinyin: ['yuǎn shàng hán shān shí jìng xié，bái yún shēng chù yǒu rén jiā。tíng chē zuò ài fēng lín wǎn，shuāng yè hóng yú èr yuè huā。'],
    analysis: '这首诗描绘了秋日山行的景色。沿着弯弯曲曲的石板路登上寒山，在白云缭绕的地方有几户人家。因为喜爱枫林的晚景而停车，经霜的枫叶比二月的鲜花还要红。全诗通过对秋日山景的描绘，表达了诗人对自然景色的喜爱之情。',
    background: '这首诗作于晚唐时期，是杜牧的代表作之一。'
  },
  {
    id: 106,
    title: '江南春',
    author: '杜牧',
    dynasty: '唐代',
    content: '千里莺啼绿映红，水村山郭酒旗风。南朝四百八十寺，多少楼台烟雨中。',
    pinyin: ['qiān lǐ yīng tí lǜ yìng hóng，shuǐ cūn shān guō jiǔ qí fēng。nán cháo sì bǎi bā shí sì，duō shǎo lóu tái yān yǔ zhōng。'],
    analysis: '这首诗描绘了江南春天的景色。千里江南，黄莺啼叫，绿树红花相映，水边的村庄和山脚下的城郭，酒旗在风中飘扬。南朝留下的四百八十座寺庙，有多少楼台笼罩在烟雾雨中。全诗通过对江南春景的描绘，表达了诗人对江南春天的赞美之情。',
    background: '这首诗作于晚唐时期，是杜牧的代表作之一。'
  },
  {
    id: 107,
    title: '秋夕',
    author: '杜牧',
    dynasty: '唐代',
    content: '银烛秋光冷画屏，轻罗小扇扑流萤。天阶夜色凉如水，卧看牵牛织女星。',
    pinyin: ['yín zhú qiū guāng lěng huà píng，qīng luó xiǎo shàn pū liú yíng。tiān jiē yè sè liáng rú shuǐ，wò kàn qiān niú zhī nǚ xīng。'],
    analysis: '这首诗描绘了秋夜的情景。银烛的光芒照在冷的画屏上，宫女用轻罗小扇扑打流萤。天阶的夜色凉如水，宫女卧着看牵牛织女星。全诗通过对秋夜景色的描绘，表达了宫女的孤独和寂寞。',
    background: '这首诗作于晚唐时期，是杜牧的代表作之一。'
  },
  {
    id: 108,
    title: '泊秦淮',
    author: '杜牧',
    dynasty: '唐代',
    content: '烟笼寒水月笼沙，夜泊秦淮近酒家。商女不知亡国恨，隔江犹唱后庭花。',
    pinyin: ['yān lóng hán shuǐ yuè lóng shā，yè bó qín huái jìn jiǔ jiā。shāng nǚ bù zhī wáng guó hèn，gé jiāng yóu chàng hòu tíng huā。'],
    analysis: '这首诗讽刺了统治者的腐败。烟雾笼罩着寒冷的江水，月光笼罩着沙滩，夜晚停泊在秦淮河靠近酒家的地方。卖唱的歌女不知道亡国的怨恨，隔着江还在唱着《后庭花》。全诗通过对夜泊秦淮的描绘，讽刺了统治者的腐败和不知亡国恨。',
    background: '秦淮河在今江苏南京。这首诗作于晚唐时期，是杜牧的代表作之一。'
  },
  {
    id: 109,
    title: '赤壁',
    author: '杜牧',
    dynasty: '唐代',
    content: '折戟沉沙铁未销，自将磨洗认前朝。东风不与周郎便，铜雀春深锁二乔。',
    pinyin: ['zhé jǐ chén shā tiě wèi xiāo，zì jiāng mó xǐ rèn qián cháo。dōng fēng bù yǔ zhōu láng biàn，tóng què chūn shēn suǒ èr qiáo。'],
    analysis: '这首诗是杜牧经过赤壁时所作。折断的兵器沉在沙中，铁还没有销蚀，自己拿来磨洗认出是前朝的遗物。如果东风不给周瑜方便，铜雀台上春意正深，就会锁住二乔。全诗通过对赤壁之战的抒怀，表达了诗人对历史的感慨。',
    background: '赤壁在今湖北咸宁西北。这首诗作于会昌二年（842年），杜牧被贬为黄州刺史时写下了这首诗。'
  },
  {
    id: 110,
    title: '夜雨寄北',
    author: '李商隐',
    dynasty: '唐代',
    content: '君问归期未有期，巴山夜雨涨秋池。何当共剪西窗烛，却话巴山夜雨时。',
    pinyin: ['jūn wèn guī qī wèi yǒu qī，bā shān yè yǔ zhǎng qiū chí。hé dāng gòng jiǎn xī chuāng zhú，què huà bā shān yè yǔ shí。'],
    analysis: '这首诗是李商隐写给妻子的。你问我归期，我还没有确定的日期，巴山的夜雨涨满了秋池。什么时候我们才能一起在西窗下剪烛夜谈，谈论巴山夜雨时的情景。全诗通过对夜雨的描绘，表达了诗人对妻子的思念之情。',
    background: '这首诗作于晚唐时期，李商隐在巴蜀地区任职时写下了这首诗。'
  },
  {
    id: 111,
    title: '无题',
    author: '李商隐',
    dynasty: '唐代',
    content: '昨夜星辰昨夜风，画楼西畔桂堂东。身无彩凤双飞翼，心有灵犀一点通。隔座送钩春酒暖，分曹射覆蜡灯红。嗟余听鼓应官去，走马兰台类转蓬。',
    pinyin: ['zuó yè xīng chén zuó yè fēng，huà lóu xī pàn guì táng dōng。shēn wú cǎi fèng shuāng fēi yì，xīn yǒu líng xī yī diǎn tōng。gé zuò sòng gōu chūn jiǔ nuǎn，fēn cáo shè fù là dēng hóng。jiē yú tīng gǔ yīng guān qù，zǒu mǎ lán tái lèi zhuǎn péng。'],
    analysis: '这首诗描写了诗人与心爱之人之间的深厚情感。昨夜的星辰昨夜的微风，在画楼的西边桂堂的东边。虽然身上没有彩凤那样的双翅可以飞到对方身边，但心里却像灵犀一样心意相通。隔着座位送钩春酒温暖，分组射覆蜡灯分红。可惜我听到鼓声就要去官府应差，骑着马走向兰台就像转动的蓬草一样漂泊无依。全诗通过对爱情和仕途的描绘，表达了诗人对爱情的渴望和对仕途漂泊的感慨。',
    background: '李商隐（约813-约858），字义山，号玉溪生，唐代诗人。这首诗作于晚唐时期，是李商隐的代表作之一。'
  },
  {
    id: 112,
    title: '锦瑟',
    author: '李商隐',
    dynasty: '唐代',
    content: '锦瑟无端五十弦，一弦一柱思华年。庄生晓梦迷蝴蝶，望帝春心托杜鹃。沧海月明珠有泪，蓝田日暖玉生烟。此情可待成追忆，只是当时已惘然。',
    pinyin: ['jǐn sè wú duān wǔ shí xián，yī xián yī zhù sī huá nián。zhuāng shēng xiǎo mèng mí hú dié，wàng dì chūn xīn tuō dù juān。cāng hǎi yuè míng zhū yǒu lèi，lán tián rì nuǎn yù shēng yān。cǐ qíng kě dài chéng zhuī yì，zhǐ shì dāng shí yǐ wǎng rán。'],
    analysis: '这首诗是李商隐的代表作之一，以锦瑟为喻，表达了对过去的追忆。锦瑟无缘无故有五十根弦，每根弦每根柱都让我想起美好的年华。庄周在清晨的梦中变成了蝴蝶，望帝的春心寄托在杜鹃鸟身上。沧海明月高照，珍珠有泪，蓝田阳光温暖，玉石生烟。这种情感可以留到以后回忆，只是当时已经迷惘了。全诗通过丰富的意象，表达了诗人对过去的追忆和对人生的感慨。',
    background: '这首诗作于晚唐时期，是李商隐的代表作之一。'
  },
  {
    id: 113,
    title: '登乐游原',
    author: '李商隐',
    dynasty: '唐代',
    content: '向晚意不适，驱车登古原。夕阳无限好，只是近黄昏。',
    pinyin: ['xiàng wǎn yì bù shì，qū chē dēng gǔ yuán。xī yáng wú xiàn hǎo，zhǐ shì jìn huáng hūn。'],
    analysis: '这首诗描绘了乐游原的景色。傍晚时分心情不适，驱车登上古原。夕阳无限美好，只是已经接近黄昏。全诗通过对夕阳的描绘，表达了诗人对美好事物短暂的感慨。',
    background: '乐游原在今陕西省西安市。这首诗作于晚唐时期，是李商隐的代表作之一。'
  },
  {
    id: 114,
    title: '嫦娥',
    author: '李商隐',
    dynasty: '唐代',
    content: '云母屏风烛影深，长河渐落晓星沉。嫦娥应悔偷灵药，碧海青天夜夜心。',
    pinyin: ['yún mǔ píng fēng zhú yǐng shēn，cháng hé jiàn luò xiǎo xīng chén。cháng é yīng huǐ tōu líng yào，bì hǎi qīng tiān yè yè xīn。'],
    analysis: '这首诗描绘了嫦娥在月宫中的孤独情景。云母屏风上烛影深深，长河渐渐落下，晨星也沉下去了。嫦娥应该后悔偷吃了灵药，现在只能独自面对碧海青天，夜夜心寒。全诗通过对嫦娥的描绘，表达了诗人对孤独和寂寞的感慨。',
    background: '李商隐（约813-约858），字义山，号玉溪生，唐代诗人。这首诗作于晚唐时期，是李商隐的代表作之一。'
  },
  {
    id: 115,
    title: '虞美人',
    author: '李煜',
    dynasty: '五代',
    content: '春花秋月何时了，往事知多少？小楼昨夜又东风，故国不堪回首月明中。雕栏玉砌应犹在，只是朱颜改。问君能有几多愁？恰似一江春水向东流。',
    pinyin: ['chūn huā qiū yuè hé shí liǎo，wǎng shì zhī duō shǎo？xiǎo lóu zuó yè yòu dōng fēng，gù guó bù kān huí shǒu yuè míng zhōng。diāo lán yù qì yīng yóu zài，zhǐ shì zhū yán gǎi。wèn jūn néng yǒu jǐ duō chóu？qià sì yī jiāng chūn shuǐ xiàng dōng liú。'],
    analysis: '这首词是李煜的绝笔之作，表达了诗人对故国的深深思念和亡国的悲痛。春花秋月什么时候才能结束，以前的往事还记得多少？小楼昨夜又吹起了东风，在月光照耀下的故国不堪回首。精美的栏杆和台阶应该还在，只是人的容颜已经改变。问你还能有多少忧愁？就像那满江的春水一样向东流去。全词通过对比的手法，表达了诗人对亡国的悲痛和对往事的无限怀念。',
    background: '李煜（937-978），字重光，南唐最后一位国君。这首词作于李煜被囚禁期间，是他生日（七夕）之夜所作，随后被害。'
  }
]