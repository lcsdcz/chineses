// 高中语文古诗文数据库 - 每篇诗文独立配置
// 支持整篇练习、随机抽题、多篇组合练习
const poemDatabase = {
    '必修一': [
        {
            title: '关雎',
            author: '《诗经》',
            content: '关关雎鸠，在河之洲。窈窕淑女，君子好逑。参差荇菜，左右流之。窈窕淑女，寤寐求之。求之不得，寤寐思服。悠哉悠哉，辗转反侧。参差荇菜，左右采之。窈窕淑女，琴瑟友之。参差荇菜，左右芼之。窈窕淑女，钟鼓乐之。',
            // 自定义练习配置
            exercises: [
                {
                    type: 'fillBack', // 填后句模式
                    title: '经典名句填空',
                    description: '请根据前半句内容，填写后半句',
                    items: [
                        { front: '关关雎鸠', back: '在河之洲' },
                        { front: '窈窕淑女', back: '君子好逑' },
                        { front: '参差荇菜', back: '左右流之' },
                        { front: '窈窕淑女', back: '寤寐求之' }
                    ]
                },
                {
                    type: 'fillFront', // 填前句模式
                    title: '倒序记忆练习',
                    description: '请根据后半句内容，填写前半句',
                    items: [
                        { front: '关关雎鸠', back: '在河之洲' },
                        { front: '窈窕淑女', back: '君子好逑' },
                        { front: '参差荇菜', back: '左右流之' },
                        { front: '窈窕淑女', back: '寤寐求之' }
                    ]
                },
                {
                    type: 'auto', // 自动模式
                    title: '重点字词默写',
                    description: '请填写下划线处的字词',
                    blanks: [3, 7, 11, 15, 19, 23, 27, 31, 35, 39],

                },
                {
                    type: 'fillBack',
                    title: '整篇填后句',
                    description: '根据前半句填写后半句',
                    autoFull: true
                },
                {
                    type: 'fillFront',
                    title: '整篇填前句',
                    description: '根据后半句填写前半句',
                    autoFull: true
                }
            ]
        },
        {
            title: '蒹葭',
            author: '《诗经》',
            content: '蒹葭苍苍，白露为霜。所谓伊人，在水一方。溯洄从之，道阻且长。溯游从之，宛在水中央。蒹葭萋萋，白露未晞。所谓伊人，在水之湄。溯洄从之，道阻且跻。溯游从之，宛在水中坻。蒹葭采采，白露未已。所谓伊人，在水之涘。溯洄从之，道阻且右。溯游从之，宛在水中沚。',
            exercises: [
                {
                    type: 'fillBack',
                    title: '意境理解填空',
                    description: '请根据前半句内容，填写后半句',
                    items: [
                        { front: '蒹葭苍苍', back: '白露为霜' },
                        { front: '所谓伊人', back: '在水一方' },
                        { front: '溯洄从之', back: '道阻且长' },
                        { front: '宛在水中央', back: '' }
                    ]
                },
                {
                    type: 'auto',
                    title: '关键词默写',
                    description: '请填写下划线处的字词',
                    blanks: [2, 6, 10, 14, 18, 22, 26, 30, 34, 38],

                },
                {
                    type: 'fillBack',
                    title: '整篇填后句',
                    description: '根据前半句填写后半句',
                    autoFull: true
                },
                {
                    type: 'fillFront',
                    title: '整篇填前句',
                    description: '根据后半句填写前半句',
                    autoFull: true
                }
            ]
        },
        {
            title: '氓',
            author: '《诗经》',
            content: '氓之蚩蚩，抱布贸丝。匪来贸丝，来即我谋。送子涉淇，至于顿丘。匪我愆期，子无良媒。将子无怒，秋以为期。乘彼垝垣，以望复关。不见复关，泣涕涟涟。既见复关，载笑载言。尔卜尔筮，体无咎言。以尔车来，以我贿迁。',
            exercises: [
                {
                    type: 'fillBack',
                    title: '故事情节填空',
                    description: '请根据前半句内容，填写后半句',
                    items: [
                        { front: '氓之蚩蚩', back: '抱布贸丝' },
                        { front: '匪来贸丝', back: '来即我谋' },
                        { front: '送子涉淇', back: '至于顿丘' },
                        { front: '乘彼垝垣', back: '以望复关' }
                    ]
                },
                {
                    type: 'auto',
                    title: '情感词汇默写',
                    description: '请填写下划线处的字词',
                    blanks: [1, 5, 9, 13, 17, 21, 25, 29, 33, 37],

                },
                {
                    type: 'fillBack',
                    title: '整篇填后句',
                    description: '根据前半句填写后半句',
                    autoFull: true
                },
                {
                    type: 'fillFront',
                    title: '整篇填前句',
                    description: '根据后半句填写前半句',
                    autoFull: true
                }
            ]
        }
    ],
    '必修二': [
        {
            title: '静夜思',
            author: '李白',
            content: '床前明月光，疑是地上霜。举头望明月，低头思故乡。',
            exercises: [
                {
                    type: 'fillBack',
                    title: '思乡情怀填空',
                    description: '请根据前半句内容，填写后半句',
                    items: [
                        { front: '床前明月光', back: '疑是地上霜' },
                        { front: '举头望明月', back: '低头思故乡' }
                    ]
                },
                {
                    type: 'fillFront',
                    title: '倒序记忆练习',
                    description: '请根据后半句内容，填写前半句',
                    items: [
                        { front: '床前明月光', back: '疑是地上霜' },
                        { front: '举头望明月', back: '低头思故乡' }
                    ]
                },
                {
                    type: 'fillBack',
                    title: '整篇填后句',
                    description: '根据前半句填写后半句',
                    autoFull: true
                },
                {
                    type: 'fillFront',
                    title: '整篇填前句',
                    description: '根据后半句填写前半句',
                    autoFull: true
                }
            ]
        },
        {
            title: '春晓',
            author: '孟浩然',
            content: '春眠不觉晓，处处闻啼鸟。夜来风雨声，花落知多少。',
            exercises: [
                {
                    type: 'fillBack',
                    title: '春天景象填空',
                    description: '请根据前半句内容，填写后半句',
                    items: [
                        { front: '春眠不觉晓', back: '处处闻啼鸟' },
                        { front: '夜来风雨声', back: '花落知多少' }
                    ]
                },
                {
                    type: 'auto',
                    title: '感官体验默写',
                    description: '请填写下划线处的字词',
                    blanks: [2, 4],

                },
                {
                    type: 'fillBack',
                    title: '整篇填后句',
                    description: '根据前半句填写后半句',
                    autoFull: true
                },
                {
                    type: 'fillFront',
                    title: '整篇填前句',
                    description: '根据后半句填写前半句',
                    autoFull: true
                }
            ]
        }
    ],
    '必修三': [
        {
            title: '蜀相',
            author: '杜甫',
            content: '丞相祠堂何处寻，锦官城外柏森森。映阶碧草自春色，隔叶黄鹂空好音。三顾频烦天下计，两朝开济老臣心。出师未捷身先死，长使英雄泪满襟。',
            exercises: [
                {
                    type: 'fillBack',
                    title: '历史人物填空',
                    description: '请根据前半句内容，填写后半句',
                    items: [
                        { front: '丞相祠堂何处寻', back: '锦官城外柏森森' },
                        { front: '映阶碧草自春色', back: '隔叶黄鹂空好音' },
                        { front: '三顾频烦天下计', back: '两朝开济老臣心' },
                        { front: '出师未捷身先死', back: '长使英雄泪满襟' }
                    ]
                },
                {
                    type: 'fillFront',
                    title: '倒序理解练习',
                    description: '请根据后半句内容，填写前半句',
                    items: [
                        { front: '丞相祠堂何处寻', back: '锦官城外柏森森' },
                        { front: '映阶碧草自春色', back: '隔叶黄鹂空好音' },
                        { front: '三顾频烦天下计', back: '两朝开济老臣心' },
                        { front: '出师未捷身先死', back: '长使英雄泪满襟' }
                    ]
                },
                {
                    type: 'fillBack',
                    title: '整篇填后句',
                    description: '根据前半句填写后半句',
                    autoFull: true
                },
                {
                    type: 'fillFront',
                    title: '整篇填前句',
                    description: '根据后半句填写前半句',
                    autoFull: true
                }
            ]
        },
        {
            title: '登高',
            author: '杜甫',
            content: '风急天高猿啸哀，渚清沙白鸟飞回。无边落木萧萧下，不尽长江滚滚来。万里悲秋常作客，百年多病独登台。艰难苦恨繁霜鬓，潦倒新停浊酒杯。',
            exercises: [
                {
                    type: 'fillBack',
                    title: '登高望远填空',
                    description: '请根据前半句内容，填写后半句',
                    items: [
                        { front: '风急天高猿啸哀', back: '渚清沙白鸟飞回' },
                        { front: '无边落木萧萧下', back: '不尽长江滚滚来' },
                        { front: '万里悲秋常作客', back: '百年多病独登台' },
                        { front: '艰难苦恨繁霜鬓', back: '潦倒新停浊酒杯' }
                    ]
                },
                {
                    type: 'auto',
                    title: '意境词汇默写',
                    description: '请填写下划线处的字词',
                    blanks: [2, 4, 6, 8],

                },
                {
                    type: 'fillBack',
                    title: '整篇填后句',
                    description: '根据前半句填写后半句',
                    autoFull: true
                },
                {
                    type: 'fillFront',
                    title: '整篇填前句',
                    description: '根据后半句填写前半句',
                    autoFull: true
                }
            ]
        }
    ],
    '论语必背': [
        {
            title: '学而时习之',
            author: '《论语》',
            content: '学而时习之，不亦说乎？有朋自远方来，不亦乐乎？人不知而不愠，不亦君子乎？',
            exercises: [
                {
                    type: 'fillBack',
                    title: '学习态度填空',
                    description: '请根据前半句内容，填写后半句',
                    items: [
                        { front: '学而时习之', back: '不亦说乎' },
                        { front: '有朋自远方来', back: '不亦乐乎' },
                        { front: '人不知而不愠', back: '不亦君子乎' }
                    ]
                },
                {
                    type: 'auto',
                    title: '反问句式默写',
                    description: '请填写下划线处的字词',
                    blanks: [1, 3, 5],

                },
                {
                    type: 'fillBack',
                    title: '整篇填后句',
                    description: '根据前半句填写后半句',
                    autoFull: true
                },
                {
                    type: 'fillFront',
                    title: '整篇填前句',
                    description: '根据后半句填写前半句',
                    autoFull: true
                }
            ]
        },
        {
            title: '吾日三省吾身',
            author: '《论语》',
            content: '吾日三省吾身：为人谋而不忠乎？与朋友交而不信乎？传不习乎？',
            exercises: [
                {
                    type: 'fillBack',
                    title: '自我反省填空',
                    description: '请根据前半句内容，填写后半句',
                    items: [
                        { front: '吾日三省吾身', back: '为人谋而不忠乎' },
                        { front: '与朋友交而不信乎', back: '' },
                        { front: '传不习乎', back: '' }
                    ]
                },
                {
                    type: 'auto',
                    title: '反省内容默写',
                    description: '请填写下划线处的字词',
                    blanks: [2, 4, 6],

                },
                {
                    type: 'fillBack',
                    title: '整篇填后句',
                    description: '根据前半句填写后半句',
                    autoFull: true
                },
                {
                    type: 'fillFront',
                    title: '整篇填前句',
                    description: '根据后半句填写前半句',
                    autoFull: true
                }
            ]
        }
    ],
    '古诗文精选': [
        {
            id: 'quanxue',
            title: '劝学',
            author: '荀子',
            content: '君子曰：学不可以已。青，取之于蓝，而青于蓝；冰，水为之，而寒于水。木直中绳，輮以为轮，其曲中规。虽有槁暴，不复挺者，輮使之然也。故木受绳则直，金就砺则利，君子博学而日参省乎己，则知明而行无过矣。',
            // 句子ID配置，用于随机抽题
            sentences: [
                { id: 'quanxue_1', front: '君子曰：学不可以已', back: '' },
                { id: 'quanxue_2', front: '青，取之于蓝', back: '而青于蓝' },
                { id: 'quanxue_3', front: '冰，水为之', back: '而寒于水' },
                { id: 'quanxue_4', front: '木直中绳', back: '輮以为轮' },
                { id: 'quanxue_5', front: '其曲中规', back: '' },
                { id: 'quanxue_6', front: '虽有槁暴', back: '不复挺者' },
                { id: 'quanxue_7', front: '輮使之然也', back: '' },
                { id: 'quanxue_8', front: '故木受绳则直', back: '金就砺则利' },
                { id: 'quanxue_9', front: '君子博学而日参省乎己', back: '则知明而行无过矣' }
            ],
            exercises: [
                {
                    type: 'fillBack',
                    title: '经典名句填空',
                    description: '请根据前半句内容，填写后半句',
                    items: [
                        { id: 'quanxue_1', front: '君子曰：学不可以已', back: '' },
                        { id: 'quanxue_2', front: '青，取之于蓝', back: '而青于蓝' },
                        { id: 'quanxue_3', front: '冰，水为之', back: '而寒于水' },
                        { id: 'quanxue_4', front: '木直中绳', back: '輮以为轮' }
                    ]
                },
                {
                    type: 'fillBack',
                    title: '整篇填后句',
                    description: '根据前半句填写后半句',
                    autoFull: true
                },
                {
                    type: 'fillFront',
                    title: '整篇填前句',
                    description: '根据后半句填写前半句',
                    autoFull: true
                },
                {
                    type: 'random',
                    title: '随机抽题练习',
                    description: '从本文中随机抽取题目进行练习',
                    randomCount: 5
                }
            ]
        },
        {
            id: 'xiaoyaoyou',
            title: '逍遥游',
            author: '庄子',
            content: '北冥有鱼，其名为鲲。鲲之大，不知其几千里也。化而为鸟，其名为鹏。鹏之背，不知其几千里也。怒而飞，其翼若垂天之云。是鸟也，海运则将徙于南冥。南冥者，天池也。',
            // 句子ID配置，用于随机抽题
            sentences: [
                { id: 'xiaoyaoyou_1', front: '北冥有鱼', back: '其名为鲲' },
                { id: 'xiaoyaoyou_2', front: '鲲之大', back: '不知其几千里也' },
                { id: 'xiaoyaoyou_3', front: '化而为鸟', back: '其名为鹏' },
                { id: 'xiaoyaoyou_4', front: '鹏之背', back: '不知其几千里也' },
                { id: 'xiaoyaoyou_5', front: '怒而飞', back: '其翼若垂天之云' },
                { id: 'xiaoyaoyou_6', front: '是鸟也', back: '海运则将徙于南冥' },
                { id: 'xiaoyaoyou_7', front: '南冥者', back: '天池也' }
            ],
            exercises: [
                {
                    type: 'fillBack',
                    title: '意境理解填空',
                    description: '请根据前半句内容，填写后半句',
                    items: [
                        { id: 'xiaoyaoyou_1', front: '北冥有鱼', back: '其名为鲲' },
                        { id: 'xiaoyaoyou_2', front: '鲲之大', back: '不知其几千里也' },
                        { id: 'xiaoyaoyou_3', front: '化而为鸟', back: '其名为鹏' },
                        { id: 'xiaoyaoyou_5', front: '怒而飞', back: '其翼若垂天之云' }
                    ]
                },
                {
                    type: 'fillBack',
                    title: '整篇填后句',
                    description: '根据前半句填写后半句',
                    autoFull: true
                },
                {
                    type: 'fillFront',
                    title: '整篇填前句',
                    description: '根据后半句填写前半句',
                    autoFull: true
                },
                {
                    type: 'random',
                    title: '随机抽题练习',
                    description: '从本文中随机抽取题目进行练习',
                    randomCount: 5
                }
            ]
        },
        {
            id: 'shishuo',
            title: '师说',
            author: '韩愈',
            content: '古之学者必有师。师者，所以传道受业解惑也。人非生而知之者，孰能无惑？惑而不从师，其为惑也，终不解矣。生乎吾前，其闻道也固先乎吾，吾从而师之；生乎吾后，其闻道也亦先乎吾，吾从而师之。吾师道也，夫庸知其年之先后生于吾乎？',
            // 句子ID配置，用于随机抽题
            sentences: [
                { id: 'shishuo_1', front: '古之学者必有师', back: '' },
                { id: 'shishuo_2', front: '师者', back: '所以传道受业解惑也' },
                { id: 'shishuo_3', front: '人非生而知之者', back: '孰能无惑' },
                { id: 'shishuo_4', front: '惑而不从师', back: '其为惑也，终不解矣' },
                { id: 'shishuo_5', front: '生乎吾前', back: '其闻道也固先乎吾' },
                { id: 'shishuo_6', front: '吾从而师之', back: '' },
                { id: 'shishuo_7', front: '生乎吾后', back: '其闻道也亦先乎吾' },
                { id: 'shishuo_8', front: '吾师道也', back: '夫庸知其年之先后生于吾乎' }
            ],
            exercises: [
                {
                    type: 'fillBack',
                    title: '师道理解填空',
                    description: '请根据前半句内容，填写后半句',
                    items: [
                        { id: 'shishuo_1', front: '古之学者必有师', back: '' },
                        { id: 'shishuo_2', front: '师者', back: '所以传道受业解惑也' },
                        { id: 'shishuo_3', front: '人非生而知之者', back: '孰能无惑' },
                        { id: 'shishuo_4', front: '惑而不从师', back: '其为惑也，终不解矣' }
                    ]
                },
                {
                    type: 'fillBack',
                    title: '整篇填后句',
                    description: '根据前半句填写后半句',
                    autoFull: true
                },
                {
                    type: 'fillFront',
                    title: '整篇填前句',
                    description: '根据后半句填写前半句',
                    autoFull: true
                },
                {
                    type: 'random',
                    title: '随机抽题练习',
                    description: '从本文中随机抽取题目进行练习',
                    randomCount: 5
                }
            ]
        },
        {
            title: '阿房宫赋',
            author: '杜牧',
            content: '六王毕，四海一，蜀山兀，阿房出。覆压三百余里，隔离天日。骊山北构而西折，直走咸阳。二川溶溶，流入宫墙。五步一楼，十步一阁；廊腰缦回，檐牙高啄；各抱地势，钩心斗角。盘盘焉，囷囷焉，蜂房水涡，矗不知其几千万落。',
            exercises: [
                {
                    type: 'fillBack',
                    title: '建筑描写填空',
                    description: '请根据前半句内容，填写后半句',
                    items: [
                        { front: '六王毕', back: '四海一' },
                        { front: '覆压三百余里', back: '隔离天日' },
                        { front: '五步一楼', back: '十步一阁' },
                        { front: '廊腰缦回', back: '檐牙高啄' }
                    ]
                },
                {
                    type: 'fillBack',
                    title: '整篇填后句',
                    description: '根据前半句填写后半句',
                    autoFull: true
                },
                {
                    type: 'fillFront',
                    title: '整篇填前句',
                    description: '根据后半句填写前半句',
                    autoFull: true
                }
            ]
        },
        {
            title: '赤壁赋',
            author: '苏轼',
            content: '壬戌之秋，七月既望，苏子与客泛舟游于赤壁之下。清风徐来，水波不兴。举酒属客，诵明月之诗，歌窈窕之章。少焉，月出于东山之上，徘徊于斗牛之间。白露横江，水光接天。纵一苇之所如，凌万顷之茫然。',
            exercises: [
                {
                    type: 'fillBack',
                    title: '意境描写填空',
                    description: '请根据前半句内容，填写后半句',
                    items: [
                        { front: '壬戌之秋', back: '七月既望' },
                        { front: '清风徐来', back: '水波不兴' },
                        { front: '少焉', back: '月出于东山之上' },
                        { front: '白露横江', back: '水光接天' }
                    ]
                },
                {
                    type: 'fillBack',
                    title: '整篇填后句',
                    description: '根据前半句填写后半句',
                    autoFull: true
                },
                {
                    type: 'fillFront',
                    title: '整篇填前句',
                    description: '根据后半句填写前半句',
                    autoFull: true
                }
            ]
        },
        {
            title: '氓',
            author: '《诗经》',
            content: '氓之蚩蚩，抱布贸丝。匪来贸丝，来即我谋。送子涉淇，至于顿丘。匪我愆期，子无良媒。将子无怒，秋以为期。乘彼垝垣，以望复关。不见复关，泣涕涟涟。既见复关，载笑载言。尔卜尔筮，体无咎言。以尔车来，以我贿迁。',
            exercises: [
                {
                    type: 'fillBack',
                    title: '故事情节填空',
                    description: '请根据前半句内容，填写后半句',
                    items: [
                        { front: '氓之蚩蚩', back: '抱布贸丝' },
                        { front: '匪来贸丝', back: '来即我谋' },
                        { front: '送子涉淇', back: '至于顿丘' },
                        { front: '乘彼垝垣', back: '以望复关' }
                    ]
                },
                {
                    type: 'fillBack',
                    title: '整篇填后句',
                    description: '根据前半句填写后半句',
                    autoFull: true
                },
                {
                    type: 'fillFront',
                    title: '整篇填前句',
                    description: '根据后半句填写前半句',
                    autoFull: true
                }
            ]
        },
        {
            title: '离骚(节选)',
            author: '屈原',
            content: '帝高阳之苗裔兮，朕皇考曰伯庸。摄提贞于孟陬兮，惟庚寅吾以降。皇览揆余初度兮，肇锡余以嘉名：名余曰正则兮，字余曰灵均。纷吾既有此内美兮，又重之以修能。扈江离与辟芷兮，纫秋兰以为佩。',
            exercises: [
                {
                    type: 'fillBack',
                    title: '楚辞风格填空',
                    description: '请根据前半句内容，填写后半句',
                    items: [
                        { front: '帝高阳之苗裔兮', back: '朕皇考曰伯庸' },
                        { front: '摄提贞于孟陬兮', back: '惟庚寅吾以降' },
                        { front: '皇览揆余初度兮', back: '肇锡余以嘉名' },
                        { front: '名余曰正则兮', back: '字余曰灵均' }
                    ]
                },
                {
                    type: 'fillBack',
                    title: '整篇填后句',
                    description: '根据前半句填写后半句',
                    autoFull: true
                },
                {
                    type: 'fillFront',
                    title: '整篇填前句',
                    description: '根据后半句填写前半句',
                    autoFull: true
                }
            ]
        },
        {
            title: '蜀道难',
            author: '李白',
            content: '噫吁嚱，危乎高哉！蜀道之难，难于上青天！蚕丛及鱼凫，开国何茫然！尔来四万八千岁，不与秦塞通人烟。西当太白有鸟道，可以横绝峨眉巅。地崩山摧壮士死，然后天梯石栈相钩连。',
            exercises: [
                {
                    type: 'fillBack',
                    title: '蜀道艰险填空',
                    description: '请根据前半句内容，填写后半句',
                    items: [
                        { front: '噫吁嚱', back: '危乎高哉' },
                        { front: '蜀道之难', back: '难于上青天' },
                        { front: '蚕丛及鱼凫', back: '开国何茫然' },
                        { front: '尔来四万八千岁', back: '不与秦塞通人烟' }
                    ]
                },
                {
                    type: 'fillBack',
                    title: '整篇填后句',
                    description: '根据前半句填写后半句',
                    autoFull: true
                },
                {
                    type: 'fillFront',
                    title: '整篇填前句',
                    description: '根据后半句填写前半句',
                    autoFull: true
                }
            ]
        },
        {
            title: '登高',
            author: '杜甫',
            content: '风急天高猿啸哀，渚清沙白鸟飞回。无边落木萧萧下，不尽长江滚滚来。万里悲秋常作客，百年多病独登台。艰难苦恨繁霜鬓，潦倒新停浊酒杯。',
            exercises: [
                {
                    type: 'fillBack',
                    title: '登高望远填空',
                    description: '请根据前半句内容，填写后半句',
                    items: [
                        { front: '风急天高猿啸哀', back: '渚清沙白鸟飞回' },
                        { front: '无边落木萧萧下', back: '不尽长江滚滚来' },
                        { front: '万里悲秋常作客', back: '百年多病独登台' },
                        { front: '艰难苦恨繁霜鬓', back: '潦倒新停浊酒杯' }
                    ]
                },
                {
                    type: 'fillBack',
                    title: '整篇填后句',
                    description: '根据前半句填写后半句',
                    autoFull: true
                },
                {
                    type: 'fillFront',
                    title: '整篇填前句',
                    description: '根据后半句填写前半句',
                    autoFull: true
                }
            ]
        },
        {
            title: '琵琶行',
            author: '白居易',
            content: '浔阳江头夜送客，枫叶荻花秋瑟瑟。主人下马客在船，举酒欲饮无管弦。醉不成欢惨将别，别时茫茫江浸月。忽闻水上琵琶声，主人忘归客不发。',
            exercises: [
                {
                    type: 'fillBack',
                    title: '送别场景填空',
                    description: '请根据前半句内容，填写后半句',
                    items: [
                        { front: '浔阳江头夜送客', back: '枫叶荻花秋瑟瑟' },
                        { front: '主人下马客在船', back: '举酒欲饮无管弦' },
                        { front: '醉不成欢惨将别', back: '别时茫茫江浸月' },
                        { front: '忽闻水上琵琶声', back: '主人忘归客不发' }
                    ]
                },
                {
                    type: 'fillBack',
                    title: '整篇填后句',
                    description: '根据前半句填写后半句',
                    autoFull: true
                },
                {
                    type: 'fillFront',
                    title: '整篇填前句',
                    description: '根据后半句填写前半句',
                    autoFull: true
                }
            ]
        },
        {
            title: '锦瑟',
            author: '李商隐',
            content: '锦瑟无端五十弦，一弦一柱思华年。庄生晓梦迷蝴蝶，望帝春心托杜鹃。沧海月明珠有泪，蓝田日暖玉生烟。此情可待成追忆，只是当时已惘然。',
            exercises: [
                {
                    type: 'fillBack',
                    title: '锦瑟意象填空',
                    description: '请根据前半句内容，填写后半句',
                    items: [
                        { front: '锦瑟无端五十弦', back: '一弦一柱思华年' },
                        { front: '庄生晓梦迷蝴蝶', back: '望帝春心托杜鹃' },
                        { front: '沧海月明珠有泪', back: '蓝田日暖玉生烟' },
                        { front: '此情可待成追忆', back: '只是当时已惘然' }
                    ]
                },
                {
                    type: 'fillBack',
                    title: '整篇填后句',
                    description: '根据前半句填写后半句',
                    autoFull: true
                },
                {
                    type: 'fillFront',
                    title: '整篇填前句',
                    description: '根据后半句填写前半句',
                    autoFull: true
                }
            ]
        },
        {
            title: '虞美人',
            author: '李煜',
            content: '春花秋月何时了，往事知多少。小楼昨夜又东风，故国不堪回首月明中。雕栏玉砌应犹在，只是朱颜改。问君能有几多愁，恰似一江春水向东流。',
            exercises: [
                {
                    type: 'fillBack',
                    title: '亡国之痛填空',
                    description: '请根据前半句内容，填写后半句',
                    items: [
                        { front: '春花秋月何时了', back: '往事知多少' },
                        { front: '小楼昨夜又东风', back: '故国不堪回首月明中' },
                        { front: '雕栏玉砌应犹在', back: '只是朱颜改' },
                        { front: '问君能有几多愁', back: '恰似一江春水向东流' }
                    ]
                },
                {
                    type: 'fillBack',
                    title: '整篇填后句',
                    description: '根据前半句填写后半句',
                    autoFull: true
                },
                {
                    type: 'fillFront',
                    title: '整篇填前句',
                    description: '根据后半句填写前半句',
                    autoFull: true
                }
            ]
        },
        {
            title: '念奴娇·赤壁怀古',
            author: '苏轼',
            content: '大江东去，浪淘尽，千古风流人物。故垒西边，人道是，三国周郎赤壁。乱石穿空，惊涛拍岸，卷起千堆雪。江山如画，一时多少豪杰。',
            exercises: [
                {
                    type: 'fillBack',
                    title: '赤壁怀古填空',
                    description: '请根据前半句内容，填写后半句',
                    items: [
                        { front: '大江东去', back: '浪淘尽，千古风流人物' },
                        { front: '故垒西边', back: '人道是，三国周郎赤壁' },
                        { front: '乱石穿空', back: '惊涛拍岸，卷起千堆雪' },
                        { front: '江山如画', back: '一时多少豪杰' }
                    ]
                },
                {
                    type: 'fillBack',
                    title: '整篇填后句',
                    description: '根据前半句填写后半句',
                    autoFull: true
                },
                {
                    type: 'fillFront',
                    title: '整篇填前句',
                    description: '根据后半句填写前半句',
                    autoFull: true
                }
            ]
        },
        {
            title: '永遇乐·京口北固亭怀古',
            author: '辛弃疾',
            content: '千古江山，英雄无觅，孙仲谋处。舞榭歌台，风流总被，雨打风吹去。斜阳草树，寻常巷陌，人道寄奴曾住。想当年，金戈铁马，气吞万里如虎。',
            exercises: [
                {
                    type: 'fillBack',
                    title: '怀古咏史填空',
                    description: '请根据前半句内容，填写后半句',
                    items: [
                        { front: '千古江山', back: '英雄无觅，孙仲谋处' },
                        { front: '舞榭歌台', back: '风流总被，雨打风吹去' },
                        { front: '斜阳草树', back: '寻常巷陌，人道寄奴曾住' },
                        { front: '想当年', back: '金戈铁马，气吞万里如虎' }
                    ]
                },
                {
                    type: 'fillBack',
                    title: '整篇填后句',
                    description: '根据前半句填写后半句',
                    autoFull: true
                },
                {
                    type: 'fillFront',
                    title: '整篇填前句',
                    description: '根据后半句填写前半句',
                    autoFull: true
                }
            ]
        },
        {
            title: '关雎',
            author: '《诗经》',
            content: '关关雎鸠，在河之洲。窈窕淑女，君子好逑。参差荇菜，左右流之。窈窕淑女，寤寐求之。求之不得，寤寐思服。悠哉悠哉，辗转反侧。参差荇菜，左右采之。窈窕淑女，琴瑟友之。参差荇菜，左右芼之。窈窕淑女，钟鼓乐之。',
            exercises: [
                {
                    type: 'fillBack',
                    title: '经典名句填空',
                    description: '请根据前半句内容，填写后半句',
                    items: [
                        { front: '关关雎鸠', back: '在河之洲' },
                        { front: '窈窕淑女', back: '君子好逑' },
                        { front: '参差荇菜', back: '左右流之' },
                        { front: '窈窕淑女', back: '寤寐求之' }
                    ]
                },
                {
                    type: 'fillBack',
                    title: '整篇填后句',
                    description: '根据前半句填写后半句',
                    autoFull: true
                },
                {
                    type: 'fillFront',
                    title: '整篇填前句',
                    description: '根据后半句填写前半句',
                    autoFull: true
                }
            ]
        },
        {
            title: '蒹葭',
            author: '《诗经》',
            content: '蒹葭苍苍，白露为霜。所谓伊人，在水一方。溯洄从之，道阻且长。溯游从之，宛在水中央。蒹葭萋萋，白露未晞。所谓伊人，在水之湄。溯洄从之，道阻且跻。溯游从之，宛在水中坻。蒹葭采采，白露未已。所谓伊人，在水之涘。溯洄从之，道阻且右。溯游从之，宛在水中沚。',
            exercises: [
                {
                    type: 'fillBack',
                    title: '意境理解填空',
                    description: '请根据前半句内容，填写后半句',
                    items: [
                        { front: '蒹葭苍苍', back: '白露为霜' },
                        { front: '所谓伊人', back: '在水一方' },
                        { front: '溯洄从之', back: '道阻且长' },
                        { front: '宛在水中央', back: '' }
                    ]
                },
                {
                    type: 'fillBack',
                    title: '整篇填后句',
                    description: '根据前半句填写后半句',
                    autoFull: true
                },
                {
                    type: 'fillFront',
                    title: '整篇填前句',
                    description: '根据后半句填写前半句',
                    autoFull: true
                }
            ]
        },
        {
            title: '早春呈水部张十八员外',
            author: '韩愈',
            content: '天街小雨润如酥，草色遥看近却无。最是一年春好处，绝胜烟柳满皇都。',
            exercises: [
                {
                    type: 'fillBack',
                    title: '早春景象填空',
                    description: '请根据前半句内容，填写后半句',
                    items: [
                        { front: '天街小雨润如酥', back: '草色遥看近却无' },
                        { front: '最是一年春好处', back: '绝胜烟柳满皇都' }
                    ]
                },
                {
                    type: 'fillBack',
                    title: '整篇填后句',
                    description: '根据前半句填写后半句',
                    autoFull: true
                },
                {
                    type: 'fillFront',
                    title: '整篇填前句',
                    description: '根据后半句填写前半句',
                    autoFull: true
                }
            ]
        },
        {
            title: '观沧海',
            author: '曹操',
            content: '东临碣石，以观沧海。水何澹澹，山岛竦峙。树木丛生，百草丰茂。秋风萧瑟，洪波涌起。日月之行，若出其中；星汉灿烂，若出其里。幸甚至哉，歌以咏志。',
            exercises: [
                {
                    type: 'fillBack',
                    title: '沧海景象填空',
                    description: '请根据前半句内容，填写后半句',
                    items: [
                        { front: '东临碣石', back: '以观沧海' },
                        { front: '水何澹澹', back: '山岛竦峙' },
                        { front: '树木丛生', back: '百草丰茂' },
                        { front: '秋风萧瑟', back: '洪波涌起' }
                    ]
                },
                {
                    type: 'fillBack',
                    title: '整篇填后句',
                    description: '根据前半句填写后半句',
                    autoFull: true
                },
                {
                    type: 'fillFront',
                    title: '整篇填前句',
                    description: '根据后半句填写前半句',
                    autoFull: true
                }
            ]
        },
        {
            title: '饮酒',
            author: '陶渊明',
            content: '结庐在人境，而无车马喧。问君何能尔？心远地自偏。采菊东篱下，悠然见南山。山气日夕佳，飞鸟相与还。此中有真意，欲辨已忘言。',
            exercises: [
                {
                    type: 'fillBack',
                    title: '隐逸情怀填空',
                    description: '请根据前半句内容，填写后半句',
                    items: [
                        { front: '结庐在人境', back: '而无车马喧' },
                        { front: '问君何能尔', back: '心远地自偏' },
                        { front: '采菊东篱下', back: '悠然见南山' },
                        { front: '山气日夕佳', back: '飞鸟相与还' }
                    ]
                },
                {
                    type: 'fillBack',
                    title: '整篇填后句',
                    description: '根据前半句填写后半句',
                    autoFull: true
                },
                {
                    type: 'fillFront',
                    title: '整篇填前句',
                    description: '根据后半句填写前半句',
                    autoFull: true
                }
            ]
        },
        {
            title: '木兰诗',
            author: '北朝民歌',
            content: '唧唧复唧唧，木兰当户织。不闻机杼声，惟闻女叹息。问女何所思，问女何所忆。女亦无所思，女亦无所忆。昨夜见军帖，可汗大点兵，军书十二卷，卷卷有爷名。',
            exercises: [
                {
                    type: 'fillBack',
                    title: '木兰从军填空',
                    description: '请根据前半句内容，填写后半句',
                    items: [
                        { front: '唧唧复唧唧', back: '木兰当户织' },
                        { front: '不闻机杼声', back: '惟闻女叹息' },
                        { front: '问女何所思', back: '问女何所忆' },
                        { front: '昨夜见军帖', back: '可汗大点兵' }
                    ]
                },
                {
                    type: 'fillBack',
                    title: '整篇填后句',
                    description: '根据前半句填写后半句',
                    autoFull: true
                },
                {
                    type: 'fillFront',
                    title: '整篇填前句',
                    description: '根据后半句填写前半句',
                    autoFull: true
                }
            ]
        },
        {
            id: 'songdushao',
            title: '送杜少府之任蜀州',
            author: '王勃',
            content: '城阙辅三秦，风烟望五津。与君离别意，同是宦游人。海内存知己，天涯若比邻。无为在歧路，儿女共沾巾。',
            sentences: [
                { id: 'songdushao_1', front: '城阙辅三秦', back: '风烟望五津' },
                { id: 'songdushao_2', front: '与君离别意', back: '同是宦游人' },
                { id: 'songdushao_3', front: '海内存知己', back: '天涯若比邻' },
                { id: 'songdushao_4', front: '无为在歧路', back: '儿女共沾巾' }
            ],
            exercises: [
                {
                    type: 'fillBack',
                    title: '送别情怀填空',
                    description: '请根据前半句内容，填写后半句',
                    items: [
                        { id: 'songdushao_1', front: '城阙辅三秦', back: '风烟望五津' },
                        { id: 'songdushao_2', front: '与君离别意', back: '同是宦游人' },
                        { id: 'songdushao_3', front: '海内存知己', back: '天涯若比邻' },
                        { id: 'songdushao_4', front: '无为在歧路', back: '儿女共沾巾' }
                    ]
                },
                {
                    type: 'fillBack',
                    title: '整篇填后句',
                    description: '根据前半句填写后半句',
                    autoFull: true
                },
                {
                    type: 'fillFront',
                    title: '整篇填前句',
                    description: '根据后半句填写前半句',
                    autoFull: true
                },
                {
                    type: 'random',
                    title: '随机抽题练习',
                    description: '从本文中随机抽取题目进行练习',
                    randomCount: 4
                }
            ]
        },
        {
            id: 'dengyouzhou',
            title: '登幽州台歌',
            author: '陈子昂',
            content: '前不见古人，后不见来者。念天地之悠悠，独怆然而涕下。',
            sentences: [
                { id: 'dengyouzhou_1', front: '前不见古人', back: '后不见来者' },
                { id: 'dengyouzhou_2', front: '念天地之悠悠', back: '独怆然而涕下' }
            ],
            exercises: [
                {
                    type: 'fillBack',
                    title: '登台感怀填空',
                    description: '请根据前半句内容，填写后半句',
                    items: [
                        { id: 'dengyouzhou_1', front: '前不见古人', back: '后不见来者' },
                        { id: 'dengyouzhou_2', front: '念天地之悠悠', back: '独怆然而涕下' }
                    ]
                },
                {
                    type: 'fillBack',
                    title: '整篇填后句',
                    description: '根据前半句填写后半句',
                    autoFull: true
                },
                {
                    type: 'fillFront',
                    title: '整篇填前句',
                    description: '根据后半句填写前半句',
                    autoFull: true
                },
                {
                    type: 'random',
                    title: '随机抽题练习',
                    description: '从本文中随机抽取题目进行练习',
                    randomCount: 2
                }
            ]
        },
        {
            id: 'cibeigu',
            title: '次北固山下',
            author: '王湾',
            content: '客路青山外，行舟绿水前。潮平两岸阔，风正一帆悬。海日生残夜，江春入旧年。乡书何处达？归雁洛阳边。',
            sentences: [
                { id: 'cibeigu_1', front: '客路青山外', back: '行舟绿水前' },
                { id: 'cibeigu_2', front: '潮平两岸阔', back: '风正一帆悬' },
                { id: 'cibeigu_3', front: '海日生残夜', back: '江春入旧年' },
                { id: 'cibeigu_4', front: '乡书何处达', back: '归雁洛阳边' }
            ],
            exercises: [
                {
                    type: 'fillBack',
                    title: '江行景色填空',
                    description: '请根据前半句内容，填写后半句',
                    items: [
                        { id: 'cibeigu_1', front: '客路青山外', back: '行舟绿水前' },
                        { id: 'cibeigu_2', front: '潮平两岸阔', back: '风正一帆悬' },
                        { id: 'cibeigu_3', front: '海日生残夜', back: '江春入旧年' },
                        { id: 'cibeigu_4', front: '乡书何处达', back: '归雁洛阳边' }
                    ]
                },
                {
                    type: 'fillBack',
                    title: '整篇填后句',
                    description: '根据前半句填写后半句',
                    autoFull: true
                },
                {
                    type: 'fillFront',
                    title: '整篇填前句',
                    description: '根据后半句填写前半句',
                    autoFull: true
                },
                {
                    type: 'random',
                    title: '随机抽题练习',
                    description: '从本文中随机抽取题目进行练习',
                    randomCount: 4
                }
            ]
        },
        {
            id: 'shizhisai',
            title: '使至塞上',
            author: '王维',
            content: '单车欲问边，属国过居延。征蓬出汉塞，归雁入胡天。大漠孤烟直，长河落日圆。萧关逢候骑，都护在燕然。',
            sentences: [
                { id: 'shizhisai_1', front: '单车欲问边', back: '属国过居延' },
                { id: 'shizhisai_2', front: '征蓬出汉塞', back: '归雁入胡天' },
                { id: 'shizhisai_3', front: '大漠孤烟直', back: '长河落日圆' },
                { id: 'shizhisai_4', front: '萧关逢候骑', back: '都护在燕然' }
            ],
            exercises: [
                {
                    type: 'fillBack',
                    title: '边塞风光填空',
                    description: '请根据前半句内容，填写后半句',
                    items: [
                        { id: 'shizhisai_1', front: '单车欲问边', back: '属国过居延' },
                        { id: 'shizhisai_2', front: '征蓬出汉塞', back: '归雁入胡天' },
                        { id: 'shizhisai_3', front: '大漠孤烟直', back: '长河落日圆' },
                        { id: 'shizhisai_4', front: '萧关逢候骑', back: '都护在燕然' }
                    ]
                },
                {
                    type: 'fillBack',
                    title: '整篇填后句',
                    description: '根据前半句填写后半句',
                    autoFull: true
                },
                {
                    type: 'fillFront',
                    title: '整篇填前句',
                    description: '根据后半句填写前半句',
                    autoFull: true
                },
                {
                    type: 'random',
                    title: '随机抽题练习',
                    description: '从本文中随机抽取题目进行练习',
                    randomCount: 4
                }
            ]
        },
        {
            id: 'wenwangchang',
            title: '闻王昌龄左迁龙标遥有此寄',
            author: '李白',
            content: '杨花落尽子规啼，闻道龙标过五溪。我寄愁心与明月，随风直到夜郎西。',
            sentences: [
                { id: 'wenwangchang_1', front: '杨花落尽子规啼', back: '闻道龙标过五溪' },
                { id: 'wenwangchang_2', front: '我寄愁心与明月', back: '随风直到夜郎西' }
            ],
            exercises: [
                {
                    type: 'fillBack',
                    title: '寄情明月填空',
                    description: '请根据前半句内容，填写后半句',
                    items: [
                        { id: 'wenwangchang_1', front: '杨花落尽子规啼', back: '闻道龙标过五溪' },
                        { id: 'wenwangchang_2', front: '我寄愁心与明月', back: '随风直到夜郎西' }
                    ]
                },
                {
                    type: 'fillBack',
                    title: '整篇填后句',
                    description: '根据前半句填写后半句',
                    autoFull: true
                },
                {
                    type: 'fillFront',
                    title: '整篇填前句',
                    description: '根据后半句填写前半句',
                    autoFull: true
                },
                {
                    type: 'random',
                    title: '随机抽题练习',
                    description: '从本文中随机抽取题目进行练习',
                    randomCount: 2
                }
            ]
        },
        {
            id: 'xinglunan',
            title: '行路难',
            author: '李白',
            content: '金樽清酒斗十千，玉盘珍羞直万钱。停杯投箸不能食，拔剑四顾心茫然。欲渡黄河冰塞川，将登太行雪满山。闲来垂钓碧溪上，忽复乘舟梦日边。行路难，行路难，多歧路，今安在？长风破浪会有时，直挂云帆济沧海。',
            sentences: [
                { id: 'xinglunan_1', front: '金樽清酒斗十千', back: '玉盘珍羞直万钱' },
                { id: 'xinglunan_2', front: '停杯投箸不能食', back: '拔剑四顾心茫然' },
                { id: 'xinglunan_3', front: '欲渡黄河冰塞川', back: '将登太行雪满山' },
                { id: 'xinglunan_4', front: '闲来垂钓碧溪上', back: '忽复乘舟梦日边' },
                { id: 'xinglunan_5', front: '长风破浪会有时', back: '直挂云帆济沧海' }
            ],
            exercises: [
                {
                    type: 'fillBack',
                    title: '行路艰难填空',
                    description: '请根据前半句内容，填写后半句',
                    items: [
                        { id: 'xinglunan_1', front: '金樽清酒斗十千', back: '玉盘珍羞直万钱' },
                        { id: 'xinglunan_2', front: '停杯投箸不能食', back: '拔剑四顾心茫然' },
                        { id: 'xinglunan_3', front: '欲渡黄河冰塞川', back: '将登太行雪满山' },
                        { id: 'xinglunan_4', front: '闲来垂钓碧溪上', back: '忽复乘舟梦日边' }
                    ]
                },
                {
                    type: 'fillBack',
                    title: '整篇填后句',
                    description: '根据前半句填写后半句',
                    autoFull: true
                },
                {
                    type: 'fillFront',
                    title: '整篇填前句',
                    description: '根据后半句填写前半句',
                    autoFull: true
                },
                {
                    type: 'random',
                    title: '随机抽题练习',
                    description: '从本文中随机抽取题目进行练习',
                    randomCount: 5
                }
            ]
        },
        {
            id: 'guanyimai',
            title: '观刈麦',
            author: '白居易',
            content: '田家少闲月，五月人倍忙。夜来南风起，小麦覆陇黄。妇姑荷箪食，童稚携壶浆。相随饷田去，丁壮在南冈。足蒸暑土气，背灼炎天光。力尽不知热，但惜夏日长。复有贫妇人，抱子在其旁。右手秉遗穗，左臂悬敝筐。听其相顾言，闻者为悲伤。家田输税尽，拾此充饥肠。今我何功德，曾不事农桑。吏禄三百石，岁晏有余粮。念此私自愧，尽日不能忘。',
            sentences: [
                { id: 'guanyimai_1', front: '田家少闲月', back: '五月人倍忙' },
                { id: 'guanyimai_2', front: '夜来南风起', back: '小麦覆陇黄' },
                { id: 'guanyimai_3', front: '妇姑荷箪食', back: '童稚携壶浆' },
                { id: 'guanyimai_4', front: '足蒸暑土气', back: '背灼炎天光' },
                { id: 'guanyimai_5', front: '力尽不知热', back: '但惜夏日长' }
            ],
            exercises: [
                {
                    type: 'fillBack',
                    title: '农事艰辛填空',
                    description: '请根据前半句内容，填写后半句',
                    items: [
                        { id: 'guanyimai_1', front: '田家少闲月', back: '五月人倍忙' },
                        { id: 'guanyimai_2', front: '夜来南风起', back: '小麦覆陇黄' },
                        { id: 'guanyimai_3', front: '妇姑荷箪食', back: '童稚携壶浆' },
                        { id: 'guanyimai_4', front: '足蒸暑土气', back: '背灼炎天光' }
                    ]
                },
                {
                    type: 'fillBack',
                    title: '整篇填后句',
                    description: '根据前半句填写后半句',
                    autoFull: true
                },
                {
                    type: 'fillFront',
                    title: '整篇填前句',
                    description: '根据后半句填写前半句',
                    autoFull: true
                },
                {
                    type: 'random',
                    title: '随机抽题练习',
                    description: '从本文中随机抽取题目进行练习',
                    randomCount: 5
                }
            ]
        },
        {
            id: 'wangyue',
            title: '望岳',
            author: '杜甫',
            content: '岱宗夫如何？齐鲁青未了。造化钟神秀，阴阳割昏晓。荡胸生层云，决眦入归鸟。会当凌绝顶，一览众山小。',
            sentences: [
                { id: 'wangyue_1', front: '岱宗夫如何', back: '齐鲁青未了' },
                { id: 'wangyue_2', front: '造化钟神秀', back: '阴阳割昏晓' },
                { id: 'wangyue_3', front: '荡胸生层云', back: '决眦入归鸟' },
                { id: 'wangyue_4', front: '会当凌绝顶', back: '一览众山小' }
            ],
            exercises: [
                {
                    type: 'fillBack',
                    title: '泰山雄姿填空',
                    description: '请根据前半句内容，填写后半句',
                    items: [
                        { id: 'wangyue_1', front: '岱宗夫如何', back: '齐鲁青未了' },
                        { id: 'wangyue_2', front: '造化钟神秀', back: '阴阳割昏晓' },
                        { id: 'wangyue_3', front: '荡胸生层云', back: '决眦入归鸟' },
                        { id: 'wangyue_4', front: '会当凌绝顶', back: '一览众山小' }
                    ]
                },
                {
                    type: 'fillBack',
                    title: '整篇填后句',
                    description: '根据前半句填写后半句',
                    autoFull: true
                },
                {
                    type: 'fillFront',
                    title: '整篇填前句',
                    description: '根据后半句填写前半句',
                    autoFull: true
                },
                {
                    type: 'random',
                    title: '随机抽题练习',
                    description: '从本文中随机抽取题目进行练习',
                    randomCount: 4
                }
            ]
        },
        {
            id: 'chunwang',
            title: '春望',
            author: '杜甫',
            content: '国破山河在，城春草木深。感时花溅泪，恨别鸟惊心。烽火连三月，家书抵万金。白头搔更短，浑欲不胜簪。',
            sentences: [
                { id: 'chunwang_1', front: '国破山河在', back: '城春草木深' },
                { id: 'chunwang_2', front: '感时花溅泪', back: '恨别鸟惊心' },
                { id: 'chunwang_3', front: '烽火连三月', back: '家书抵万金' },
                { id: 'chunwang_4', front: '白头搔更短', back: '浑欲不胜簪' }
            ],
            exercises: [
                {
                    type: 'fillBack',
                    title: '国破家亡填空',
                    description: '请根据前半句内容，填写后半句',
                    items: [
                        { id: 'chunwang_1', front: '国破山河在', back: '城春草木深' },
                        { id: 'chunwang_2', front: '感时花溅泪', back: '恨别鸟惊心' },
                        { id: 'chunwang_3', front: '烽火连三月', back: '家书抵万金' },
                        { id: 'chunwang_4', front: '白头搔更短', back: '浑欲不胜簪' }
                    ]
                },
                {
                    type: 'fillBack',
                    title: '整篇填后句',
                    description: '根据前半句填写后半句',
                    autoFull: true
                },
                {
                    type: 'fillFront',
                    title: '整篇填前句',
                    description: '根据后半句填写前半句',
                    autoFull: true
                },
                {
                    type: 'random',
                    title: '随机抽题练习',
                    description: '从本文中随机抽取题目进行练习',
                    randomCount: 4
                }
            ]
        },
        {
            id: 'maowuwei',
            title: '茅屋为秋风所破歌',
            author: '杜甫',
            content: '八月秋高风怒号，卷我屋上三重茅。茅飞渡江洒江郊，高者挂罥长林梢，下者飘转沉塘坳。南村群童欺我老无力，忍能对面为盗贼。公然抱茅入竹去，唇焦口燥呼不得，归来倚杖自叹息。俄顷风定云墨色，秋天漠漠向昏黑。布衾多年冷似铁，娇儿恶卧踏里裂。床头屋漏无干处，雨脚如麻未断绝。自经丧乱少睡眠，长夜沾湿何由彻！安得广厦千万间，大庇天下寒士俱欢颜，风雨不动安如山。呜呼！何时眼前突兀见此屋，吾庐独破受冻死亦足！',
            sentences: [
                { id: 'maowuwei_1', front: '八月秋高风怒号', back: '卷我屋上三重茅' },
                { id: 'maowuwei_2', front: '茅飞渡江洒江郊', back: '高者挂罥长林梢' },
                { id: 'maowuwei_3', front: '南村群童欺我老无力', back: '忍能对面为盗贼' },
                { id: 'maowuwei_4', front: '布衾多年冷似铁', back: '娇儿恶卧踏里裂' },
                { id: 'maowuwei_5', front: '安得广厦千万间', back: '大庇天下寒士俱欢颜' }
            ],
            exercises: [
                {
                    type: 'fillBack',
                    title: '茅屋破败填空',
                    description: '请根据前半句内容，填写后半句',
                    items: [
                        { id: 'maowuwei_1', front: '八月秋高风怒号', back: '卷我屋上三重茅' },
                        { id: 'maowuwei_2', front: '茅飞渡江洒江郊', back: '高者挂罥长林梢' },
                        { id: 'maowuwei_3', front: '南村群童欺我老无力', back: '忍能对面为盗贼' },
                        { id: 'maowuwei_4', front: '布衾多年冷似铁', back: '娇儿恶卧踏里裂' }
                    ]
                },
                {
                    type: 'fillBack',
                    title: '整篇填后句',
                    description: '根据前半句填写后半句',
                    autoFull: true
                },
                {
                    type: 'fillFront',
                    title: '整篇填前句',
                    description: '根据后半句填写前半句',
                    autoFull: true
                },
                {
                    type: 'random',
                    title: '随机抽题练习',
                    description: '从本文中随机抽取题目进行练习',
                    randomCount: 5
                }
            ]
        },
        {
            id: 'baixuege',
            title: '白雪歌送武判官归京',
            author: '岑参',
            content: '北风卷地白草折，胡天八月即飞雪。忽如一夜春风来，千树万树梨花开。散入珠帘湿罗幕，狐裘不暖锦衾薄。将军角弓不得控，都护铁衣冷难着。瀚海阑干百丈冰，愁云惨淡万里凝。中军置酒饮归客，胡琴琵琶与羌笛。纷纷暮雪下辕门，风掣红旗冻不翻。轮台东门送君去，去时雪满天山路。山回路转不见君，雪上空留马行处。',
            sentences: [
                { id: 'baixuege_1', front: '北风卷地白草折', back: '胡天八月即飞雪' },
                { id: 'baixuege_2', front: '忽如一夜春风来', back: '千树万树梨花开' },
                { id: 'baixuege_3', front: '散入珠帘湿罗幕', back: '狐裘不暖锦衾薄' },
                { id: 'baixuege_4', front: '瀚海阑干百丈冰', back: '愁云惨淡万里凝' },
                { id: 'baixuege_5', front: '轮台东门送君去', back: '去时雪满天山路' }
            ],
            exercises: [
                {
                    type: 'fillBack',
                    title: '边塞雪景填空',
                    description: '请根据前半句内容，填写后半句',
                    items: [
                        { id: 'baixuege_1', front: '北风卷地白草折', back: '胡天八月即飞雪' },
                        { id: 'baixuege_2', front: '忽如一夜春风来', back: '千树万树梨花开' },
                        { id: 'baixuege_3', front: '散入珠帘湿罗幕', back: '狐裘不暖锦衾薄' },
                        { id: 'baixuege_4', front: '瀚海阑干百丈冰', back: '愁云惨淡万里凝' }
                    ]
                },
                {
                    type: 'fillBack',
                    title: '整篇填后句',
                    description: '根据前半句填写后半句',
                    autoFull: true
                },
                {
                    type: 'fillFront',
                    title: '整篇填前句',
                    description: '根据后半句填写前半句',
                    autoFull: true
                },
                {
                    type: 'random',
                    title: '随机抽题练习',
                    description: '从本文中随机抽取题目进行练习',
                    randomCount: 5
                }
            ]
        },
        {
            id: 'choule',
            title: '酬乐天扬州初逢席上见赠',
            author: '刘禹锡',
            content: '巴山楚水凄凉地，二十三年弃置身。怀旧空吟闻笛赋，到乡翻似烂柯人。沉舟侧畔千帆过，病树前头万木春。今日听君歌一曲，暂凭杯酒长精神。',
            sentences: [
                { id: 'choule_1', front: '巴山楚水凄凉地', back: '二十三年弃置身' },
                { id: 'choule_2', front: '怀旧空吟闻笛赋', back: '到乡翻似烂柯人' },
                { id: 'choule_3', front: '沉舟侧畔千帆过', back: '病树前头万木春' },
                { id: 'choule_4', front: '今日听君歌一曲', back: '暂凭杯酒长精神' }
            ],
            exercises: [
                {
                    type: 'fillBack',
                    title: '重逢感慨填空',
                    description: '请根据前半句内容，填写后半句',
                    items: [
                        { id: 'choule_1', front: '巴山楚水凄凉地', back: '二十三年弃置身' },
                        { id: 'choule_2', front: '怀旧空吟闻笛赋', back: '到乡翻似烂柯人' },
                        { id: 'choule_3', front: '沉舟侧畔千帆过', back: '病树前头万木春' },
                        { id: 'choule_4', front: '今日听君歌一曲', back: '暂凭杯酒长精神' }
                    ]
                },
                {
                    type: 'fillBack',
                    title: '整篇填后句',
                    description: '根据前半句填写后半句',
                    autoFull: true
                },
                {
                    type: 'fillFront',
                    title: '整篇填前句',
                    description: '根据后半句填写前半句',
                    autoFull: true
                },
                {
                    type: 'random',
                    title: '随机抽题练习',
                    description: '从本文中随机抽取题目进行练习',
                    randomCount: 4
                }
            ]
        },
        {
            id: 'maitanweng',
            title: '卖炭翁',
            author: '白居易',
            content: '卖炭翁，伐薪烧炭南山中。满面尘灰烟火色，两鬓苍苍十指黑。卖炭得钱何所营？身上衣裳口中食。可怜身上衣正单，心忧炭贱愿天寒。夜来城外一尺雪，晓驾炭车辗冰辙。牛困人饥日已高，市南门外泥中歇。翩翩两骑来是谁？黄衣使者白衫儿。手把文书口称敕，回车叱牛牵向北。一车炭，千余斤，宫使驱将惜不得。半匹红绡一丈绫，系向牛头充炭直。',
            sentences: [
                { id: 'maitanweng_1', front: '卖炭翁', back: '伐薪烧炭南山中' },
                { id: 'maitanweng_2', front: '满面尘灰烟火色', back: '两鬓苍苍十指黑' },
                { id: 'maitanweng_3', front: '卖炭得钱何所营', back: '身上衣裳口中食' },
                { id: 'maitanweng_4', front: '可怜身上衣正单', back: '心忧炭贱愿天寒' },
                { id: 'maitanweng_5', front: '一车炭', back: '千余斤' }
            ],
            exercises: [
                {
                    type: 'fillBack',
                    title: '卖炭艰辛填空',
                    description: '请根据前半句内容，填写后半句',
                    items: [
                        { id: 'maitanweng_1', front: '卖炭翁', back: '伐薪烧炭南山中' },
                        { id: 'maitanweng_2', front: '满面尘灰烟火色', back: '两鬓苍苍十指黑' },
                        { id: 'maitanweng_3', front: '卖炭得钱何所营', back: '身上衣裳口中食' },
                        { id: 'maitanweng_4', front: '可怜身上衣正单', back: '心忧炭贱愿天寒' }
                    ]
                },
                {
                    type: 'fillBack',
                    title: '整篇填后句',
                    description: '根据前半句填写后半句',
                    autoFull: true
                },
                {
                    type: 'fillFront',
                    title: '整篇填前句',
                    description: '根据后半句填写前半句',
                    autoFull: true
                },
                {
                    type: 'random',
                    title: '随机抽题练习',
                    description: '从本文中随机抽取题目进行练习',
                    randomCount: 5
                }
            ]
        },
        {
            id: 'qiantanghu',
            title: '钱塘湖春行',
            author: '白居易',
            content: '孤山寺北贾亭西，水面初平云脚低。几处早莺争暖树，谁家新燕啄春泥。乱花渐欲迷人眼，浅草才能没马蹄。最爱湖东行不足，绿杨阴里白沙堤。',
            sentences: [
                { id: 'qiantanghu_1', front: '孤山寺北贾亭西', back: '水面初平云脚低' },
                { id: 'qiantanghu_2', front: '几处早莺争暖树', back: '谁家新燕啄春泥' },
                { id: 'qiantanghu_3', front: '乱花渐欲迷人眼', back: '浅草才能没马蹄' },
                { id: 'qiantanghu_4', front: '最爱湖东行不足', back: '绿杨阴里白沙堤' }
            ],
            exercises: [
                {
                    type: 'fillBack',
                    title: '西湖春景填空',
                    description: '请根据前半句内容，填写后半句',
                    items: [
                        { id: 'qiantanghu_1', front: '孤山寺北贾亭西', back: '水面初平云脚低' },
                        { id: 'qiantanghu_2', front: '几处早莺争暖树', back: '谁家新燕啄春泥' },
                        { id: 'qiantanghu_3', front: '乱花渐欲迷人眼', back: '浅草才能没马蹄' },
                        { id: 'qiantanghu_4', front: '最爱湖东行不足', back: '绿杨阴里白沙堤' }
                    ]
                },
                {
                    type: 'fillBack',
                    title: '整篇填后句',
                    description: '根据前半句填写后半句',
                    autoFull: true
                },
                {
                    type: 'fillFront',
                    title: '整篇填前句',
                    description: '根据后半句填写前半句',
                    autoFull: true
                },
                {
                    type: 'random',
                    title: '随机抽题练习',
                    description: '从本文中随机抽取题目进行练习',
                    randomCount: 4
                }
            ]
        },
        {
            id: 'yanmen',
            title: '雁门太守行',
            author: '李贺',
            content: '黑云压城城欲摧，甲光向日金鳞开。角声满天秋色里，塞上燕脂凝夜紫。半卷红旗临易水，霜重鼓寒声不起。报君黄金台上意，提携玉龙为君死。',
            sentences: [
                { id: 'yanmen_1', front: '黑云压城城欲摧', back: '甲光向日金鳞开' },
                { id: 'yanmen_2', front: '角声满天秋色里', back: '塞上燕脂凝夜紫' },
                { id: 'yanmen_3', front: '半卷红旗临易水', back: '霜重鼓寒声不起' },
                { id: 'yanmen_4', front: '报君黄金台上意', back: '提携玉龙为君死' }
            ],
            exercises: [
                {
                    type: 'fillBack',
                    title: '边塞战争填空',
                    description: '请根据前半句内容，填写后半句',
                    items: [
                        { id: 'yanmen_1', front: '黑云压城城欲摧', back: '甲光向日金鳞开' },
                        { id: 'yanmen_2', front: '角声满天秋色里', back: '塞上燕脂凝夜紫' },
                        { id: 'yanmen_3', front: '半卷红旗临易水', back: '霜重鼓寒声不起' },
                        { id: 'yanmen_4', front: '报君黄金台上意', back: '提携玉龙为君死' }
                    ]
                },
                {
                    type: 'fillBack',
                    title: '整篇填后句',
                    description: '根据前半句填写后半句',
                    autoFull: true
                },
                {
                    type: 'fillFront',
                    title: '整篇填前句',
                    description: '根据后半句填写前半句',
                    autoFull: true
                },
                {
                    type: 'random',
                    title: '随机抽题练习',
                    description: '从本文中随机抽取题目进行练习',
                    randomCount: 4
                }
            ]
        },
        {
            id: 'chibi',
            title: '赤壁',
            author: '杜牧',
            content: '折戟沉沙铁未销，自将磨洗认前朝。东风不与周郎便，铜雀春深锁二乔。',
            sentences: [
                { id: 'chibi_1', front: '折戟沉沙铁未销', back: '自将磨洗认前朝' },
                { id: 'chibi_2', front: '东风不与周郎便', back: '铜雀春深锁二乔' }
            ],
            exercises: [
                {
                    type: 'fillBack',
                    title: '赤壁怀古填空',
                    description: '请根据前半句内容，填写后半句',
                    items: [
                        { id: 'chibi_1', front: '折戟沉沙铁未销', back: '自将磨洗认前朝' },
                        { id: 'chibi_2', front: '东风不与周郎便', back: '铜雀春深锁二乔' }
                    ]
                },
                {
                    type: 'fillBack',
                    title: '整篇填后句',
                    description: '根据前半句填写后半句',
                    autoFull: true
                },
                {
                    type: 'fillFront',
                    title: '整篇填前句',
                    description: '根据后半句填写前半句',
                    autoFull: true
                },
                {
                    type: 'random',
                    title: '随机抽题练习',
                    description: '从本文中随机抽取题目进行练习',
                    randomCount: 2
                }
            ]
        },
        {
            id: 'boqinhuai',
            title: '泊秦淮',
            author: '杜牧',
            content: '烟笼寒水月笼沙，夜泊秦淮近酒家。商女不知亡国恨，隔江犹唱后庭花。',
            sentences: [
                { id: 'boqinhuai_1', front: '烟笼寒水月笼沙', back: '夜泊秦淮近酒家' },
                { id: 'boqinhuai_2', front: '商女不知亡国恨', back: '隔江犹唱后庭花' }
            ],
            exercises: [
                {
                    type: 'fillBack',
                    title: '秦淮夜泊填空',
                    description: '请根据前半句内容，填写后半句',
                    items: [
                        { id: 'boqinhuai_1', front: '烟笼寒水月笼沙', back: '夜泊秦淮近酒家' },
                        { id: 'boqinhuai_2', front: '商女不知亡国恨', back: '隔江犹唱后庭花' }
                    ]
                },
                {
                    type: 'fillBack',
                    title: '整篇填后句',
                    description: '根据前半句填写后半句',
                    autoFull: true
                },
                {
                    type: 'fillFront',
                    title: '整篇填前句',
                    description: '根据后半句填写前半句',
                    autoFull: true
                },
                {
                    type: 'random',
                    title: '随机抽题练习',
                    description: '从本文中随机抽取题目进行练习',
                    randomCount: 2
                }
            ]
        },
        {
            id: 'yeyujibei',
            title: '夜雨寄北',
            author: '李商隐',
            content: '君问归期未有期，巴山夜雨涨秋池。何当共剪西窗烛，却话巴山夜雨时。',
            sentences: [
                { id: 'yeyujibei_1', front: '君问归期未有期', back: '巴山夜雨涨秋池' },
                { id: 'yeyujibei_2', front: '何当共剪西窗烛', back: '却话巴山夜雨时' }
            ],
            exercises: [
                {
                    type: 'fillBack',
                    title: '夜雨思乡填空',
                    description: '请根据前半句内容，填写后半句',
                    items: [
                        { id: 'yeyujibei_1', front: '君问归期未有期', back: '巴山夜雨涨秋池' },
                        { id: 'yeyujibei_2', front: '何当共剪西窗烛', back: '却话巴山夜雨时' }
                    ]
                },
                {
                    type: 'fillBack',
                    title: '整篇填后句',
                    description: '根据前半句填写后半句',
                    autoFull: true
                },
                {
                    type: 'fillFront',
                    title: '整篇填前句',
                    description: '根据后半句填写前半句',
                    autoFull: true
                },
                {
                    type: 'random',
                    title: '随机抽题练习',
                    description: '从本文中随机抽取题目进行练习',
                    randomCount: 2
                }
            ]
        },
        {
            id: 'wuti',
            title: '无题',
            author: '李商隐',
            content: '相见时难别亦难，东风无力百花残。春蚕到死丝方尽，蜡炬成灰泪始干。晓镜但愁云鬓改，夜吟应觉月光寒。蓬山此去无多路，青鸟殷勤为探看。',
            sentences: [
                { id: 'wuti_1', front: '相见时难别亦难', back: '东风无力百花残' },
                { id: 'wuti_2', front: '春蚕到死丝方尽', back: '蜡炬成灰泪始干' },
                { id: 'wuti_3', front: '晓镜但愁云鬓改', back: '夜吟应觉月光寒' },
                { id: 'wuti_4', front: '蓬山此去无多路', back: '青鸟殷勤为探看' }
            ],
            exercises: [
                {
                    type: 'fillBack',
                    title: '相思之苦填空',
                    description: '请根据前半句内容，填写后半句',
                    items: [
                        { id: 'wuti_1', front: '相见时难别亦难', back: '东风无力百花残' },
                        { id: 'wuti_2', front: '春蚕到死丝方尽', back: '蜡炬成灰泪始干' },
                        { id: 'wuti_3', front: '晓镜但愁云鬓改', back: '夜吟应觉月光寒' },
                        { id: 'wuti_4', front: '蓬山此去无多路', back: '青鸟殷勤为探看' }
                    ]
                },
                {
                    type: 'fillBack',
                    title: '整篇填后句',
                    description: '根据前半句填写后半句',
                    autoFull: true
                },
                {
                    type: 'fillFront',
                    title: '整篇填前句',
                    description: '根据后半句填写前半句',
                    autoFull: true
                },
                {
                    type: 'random',
                    title: '随机抽题练习',
                    description: '从本文中随机抽取题目进行练习',
                    randomCount: 4
                }
            ]
        },
        {
            id: 'xiangjianhuan',
            title: '相见欢',
            author: '李煜',
            content: '无言独上西楼，月如钩。寂寞梧桐深院锁清秋。剪不断，理还乱，是离愁。别是一般滋味在心头。',
            sentences: [
                { id: 'xiangjianhuan_1', front: '无言独上西楼', back: '月如钩' },
                { id: 'xiangjianhuan_2', front: '寂寞梧桐深院锁清秋', back: '' },
                { id: 'xiangjianhuan_3', front: '剪不断', back: '理还乱' },
                { id: 'xiangjianhuan_4', front: '别是一般滋味在心头', back: '' }
            ],
            exercises: [
                {
                    type: 'fillBack',
                    title: '离愁别绪填空',
                    description: '请根据前半句内容，填写后半句',
                    items: [
                        { id: 'xiangjianhuan_1', front: '无言独上西楼', back: '月如钩' },
                        { id: 'xiangjianhuan_2', front: '寂寞梧桐深院锁清秋', back: '' },
                        { id: 'xiangjianhuan_3', front: '剪不断', back: '理还乱' },
                        { id: 'xiangjianhuan_4', front: '别是一般滋味在心头', back: '' }
                    ]
                },
                {
                    type: 'fillBack',
                    title: '整篇填后句',
                    description: '根据前半句填写后半句',
                    autoFull: true
                },
                {
                    type: 'fillFront',
                    title: '整篇填前句',
                    description: '根据后半句填写前半句',
                    autoFull: true
                },
                {
                    type: 'random',
                    title: '随机抽题练习',
                    description: '从本文中随机抽取题目进行练习',
                    randomCount: 4
                }
            ]
        },
        {
            id: 'yujiaao',
            title: '渔家傲·秋思',
            author: '范仲淹',
            content: '塞下秋来风景异，衡阳雁去无留意。四面边声连角起，千嶂里，长烟落日孤城闭。浊酒一杯家万里，燕然未勒归无计。羌管悠悠霜满地，人不寐，将军白发征夫泪。',
            sentences: [
                { id: 'yujiaao_1', front: '塞下秋来风景异', back: '衡阳雁去无留意' },
                { id: 'yujiaao_2', front: '四面边声连角起', back: '千嶂里' },
                { id: 'yujiaao_3', front: '长烟落日孤城闭', back: '' },
                { id: 'yujiaao_4', front: '浊酒一杯家万里', back: '燕然未勒归无计' },
                { id: 'yujiaao_5', front: '羌管悠悠霜满地', back: '人不寐' },
                { id: 'yujiaao_6', front: '将军白发征夫泪', back: '' }
            ],
            exercises: [
                {
                    type: 'fillBack',
                    title: '边塞秋思填空',
                    description: '请根据前半句内容，填写后半句',
                    items: [
                        { id: 'yujiaao_1', front: '塞下秋来风景异', back: '衡阳雁去无留意' },
                        { id: 'yujiaao_2', front: '四面边声连角起', back: '千嶂里' },
                        { id: 'yujiaao_4', front: '浊酒一杯家万里', back: '燕然未勒归无计' },
                        { id: 'yujiaao_5', front: '羌管悠悠霜满地', back: '人不寐' }
                    ]
                },
                {
                    type: 'fillBack',
                    title: '整篇填后句',
                    description: '根据前半句填写后半句',
                    autoFull: true
                },
                {
                    type: 'fillFront',
                    title: '整篇填前句',
                    description: '根据后半句填写前半句',
                    autoFull: true
                },
                {
                    type: 'random',
                    title: '随机抽题练习',
                    description: '从本文中随机抽取题目进行练习',
                    randomCount: 6
                }
            ]
        },
        {
            id: 'huanxisha',
            title: '浣溪沙',
            author: '晏殊',
            content: '一曲新词酒一杯，去年天气旧亭台。夕阳西下几时回？无可奈何花落去，似曾相识燕归来。小园香径独徘徊。',
            sentences: [
                { id: 'huanxisha_1', front: '一曲新词酒一杯', back: '去年天气旧亭台' },
                { id: 'huanxisha_2', front: '夕阳西下几时回', back: '' },
                { id: 'huanxisha_3', front: '无可奈何花落去', back: '似曾相识燕归来' },
                { id: 'huanxisha_4', front: '小园香径独徘徊', back: '' }
            ],
            exercises: [
                {
                    type: 'fillBack',
                    title: '时光流逝填空',
                    description: '请根据前半句内容，填写后半句',
                    items: [
                        { id: 'huanxisha_1', front: '一曲新词酒一杯', back: '去年天气旧亭台' },
                        { id: 'huanxisha_3', front: '无可奈何花落去', back: '似曾相识燕归来' }
                    ]
                },
                {
                    type: 'fillBack',
                    title: '整篇填后句',
                    description: '根据前半句填写后半句',
                    autoFull: true
                },
                {
                    type: 'fillFront',
                    title: '整篇填前句',
                    description: '根据后半句填写前半句',
                    autoFull: true
                },
                {
                    type: 'random',
                    title: '随机抽题练习',
                    description: '从本文中随机抽取题目进行练习',
                    randomCount: 4
                }
            ]
        },
        {
            id: 'dengfeilai',
            title: '登飞来峰',
            author: '王安石',
            content: '飞来山上千寻塔，闻说鸡鸣见日升。不畏浮云遮望眼，自缘身在最高层。',
            sentences: [
                { id: 'dengfeilai_1', front: '飞来山上千寻塔', back: '闻说鸡鸣见日升' },
                { id: 'dengfeilai_2', front: '不畏浮云遮望眼', back: '自缘身在最高层' }
            ],
            exercises: [
                {
                    type: 'fillBack',
                    title: '登高望远填空',
                    description: '请根据前半句内容，填写后半句',
                    items: [
                        { id: 'dengfeilai_1', front: '飞来山上千寻塔', back: '闻说鸡鸣见日升' },
                        { id: 'dengfeilai_2', front: '不畏浮云遮望眼', back: '自缘身在最高层' }
                    ]
                },
                {
                    type: 'fillBack',
                    title: '整篇填后句',
                    description: '根据前半句填写后半句',
                    autoFull: true
                },
                {
                    type: 'fillFront',
                    title: '整篇填前句',
                    description: '根据后半句填写前半句',
                    autoFull: true
                },
                {
                    type: 'random',
                    title: '随机抽题练习',
                    description: '从本文中随机抽取题目进行练习',
                    randomCount: 2
                }
            ]
        },
        {
            id: 'jiangchengzi',
            title: '江城子·密州出猎',
            author: '苏轼',
            content: '老夫聊发少年狂，左牵黄，右擎苍，锦帽貂裘，千骑卷平冈。为报倾城随太守，亲射虎，看孙郎。酒酣胸胆尚开张，鬓微霜，又何妨！持节云中，何日遣冯唐？会挽雕弓如满月，西北望，射天狼。',
            sentences: [
                { id: 'jiangchengzi_1', front: '老夫聊发少年狂', back: '左牵黄' },
                { id: 'jiangchengzi_2', front: '右擎苍', back: '锦帽貂裘' },
                { id: 'jiangchengzi_3', front: '千骑卷平冈', back: '' },
                { id: 'jiangchengzi_4', front: '为报倾城随太守', back: '亲射虎' },
                { id: 'jiangchengzi_5', front: '看孙郎', back: '' },
                { id: 'jiangchengzi_6', front: '酒酣胸胆尚开张', back: '鬓微霜' },
                { id: 'jiangchengzi_7', front: '又何妨', back: '' },
                { id: 'jiangchengzi_8', front: '会挽雕弓如满月', back: '西北望' },
                { id: 'jiangchengzi_9', front: '射天狼', back: '' }
            ],
            exercises: [
                {
                    type: 'fillBack',
                    title: '出猎豪情填空',
                    description: '请根据前半句内容，填写后半句',
                    items: [
                        { id: 'jiangchengzi_1', front: '老夫聊发少年狂', back: '左牵黄' },
                        { id: 'jiangchengzi_2', front: '右擎苍', back: '锦帽貂裘' },
                        { id: 'jiangchengzi_4', front: '为报倾城随太守', back: '亲射虎' },
                        { id: 'jiangchengzi_6', front: '酒酣胸胆尚开张', back: '鬓微霜' },
                        { id: 'jiangchengzi_8', front: '会挽雕弓如满月', back: '西北望' }
                    ]
                },
                {
                    type: 'fillBack',
                    title: '整篇填后句',
                    description: '根据前半句填写后半句',
                    autoFull: true
                },
                {
                    type: 'fillFront',
                    title: '整篇填前句',
                    description: '根据后半句填写前半句',
                    autoFull: true
                },
                {
                    type: 'random',
                    title: '随机抽题练习',
                    description: '从本文中随机抽取题目进行练习',
                    randomCount: 9
                }
            ]
        },
        {
            id: 'shuidiaoge',
            title: '水调歌头',
            author: '苏轼',
            content: '明月几时有？把酒问青天。不知天上宫阙，今夕是何年。我欲乘风归去，又恐琼楼玉宇，高处不胜寒。起舞弄清影，何似在人间。转朱阁，低绮户，照无眠。不应有恨，何事长向别时圆？人有悲欢离合，月有阴晴圆缺，此事古难全。但愿人长久，千里共婵娟。',
            sentences: [
                { id: 'shuidiaoge_1', front: '明月几时有', back: '把酒问青天' },
                { id: 'shuidiaoge_2', front: '不知天上宫阙', back: '今夕是何年' },
                { id: 'shuidiaoge_3', front: '我欲乘风归去', back: '又恐琼楼玉宇' },
                { id: 'shuidiaoge_4', front: '高处不胜寒', back: '' },
                { id: 'shuidiaoge_5', front: '起舞弄清影', back: '何似在人间' },
                { id: 'shuidiaoge_6', front: '转朱阁', back: '低绮户' },
                { id: 'shuidiaoge_7', front: '照无眠', back: '' },
                { id: 'shuidiaoge_8', front: '人有悲欢离合', back: '月有阴晴圆缺' },
                { id: 'shuidiaoge_9', front: '此事古难全', back: '' },
                { id: 'shuidiaoge_10', front: '但愿人长久', back: '千里共婵娟' }
            ],
            exercises: [
                {
                    type: 'fillBack',
                    title: '中秋怀人填空',
                    description: '请根据前半句内容，填写后半句',
                    items: [
                        { id: 'shuidiaoge_1', front: '明月几时有', back: '把酒问青天' },
                        { id: 'shuidiaoge_2', front: '不知天上宫阙', back: '今夕是何年' },
                        { id: 'shuidiaoge_3', front: '我欲乘风归去', back: '又恐琼楼玉宇' },
                        { id: 'shuidiaoge_5', front: '起舞弄清影', back: '何似在人间' },
                        { id: 'shuidiaoge_8', front: '人有悲欢离合', back: '月有阴晴圆缺' },
                        { id: 'shuidiaoge_10', front: '但愿人长久', back: '千里共婵娟' }
                    ]
                },
                {
                    type: 'fillBack',
                    title: '整篇填后句',
                    description: '根据前半句填写后半句',
                    autoFull: true
                },
                {
                    type: 'fillFront',
                    title: '整篇填前句',
                    description: '根据后半句填写前半句',
                    autoFull: true
                },
                {
                    type: 'random',
                    title: '随机抽题练习',
                    description: '从本文中随机抽取题目进行练习',
                    randomCount: 10
                }
            ]
        },
        {
            id: 'youshanxi',
            title: '游山西村',
            author: '陆游',
            content: '莫笑农家腊酒浑，丰年留客足鸡豚。山重水复疑无路，柳暗花明又一村。箫鼓追随春社近，衣冠简朴古风存。从今若许闲乘月，拄杖无时夜叩门。',
            sentences: [
                { id: 'youshanxi_1', front: '莫笑农家腊酒浑', back: '丰年留客足鸡豚' },
                { id: 'youshanxi_2', front: '山重水复疑无路', back: '柳暗花明又一村' },
                { id: 'youshanxi_3', front: '箫鼓追随春社近', back: '衣冠简朴古风存' },
                { id: 'youshanxi_4', front: '从今若许闲乘月', back: '拄杖无时夜叩门' }
            ],
            exercises: [
                {
                    type: 'fillBack',
                    title: '乡村游历填空',
                    description: '请根据前半句内容，填写后半句',
                    items: [
                        { id: 'youshanxi_1', front: '莫笑农家腊酒浑', back: '丰年留客足鸡豚' },
                        { id: 'youshanxi_2', front: '山重水复疑无路', back: '柳暗花明又一村' },
                        { id: 'youshanxi_3', front: '箫鼓追随春社近', back: '衣冠简朴古风存' },
                        { id: 'youshanxi_4', front: '从今若许闲乘月', back: '拄杖无时夜叩门' }
                    ]
                },
                {
                    type: 'fillBack',
                    title: '整篇填后句',
                    description: '根据前半句填写后半句',
                    autoFull: true
                },
                {
                    type: 'fillFront',
                    title: '整篇填前句',
                    description: '根据后半句填写前半句',
                    autoFull: true
                },
                {
                    type: 'random',
                    title: '随机抽题练习',
                    description: '从本文中随机抽取题目进行练习',
                    randomCount: 4
                }
            ]
        },
        {
            id: 'nanxiangzi',
            title: '南乡子·登京口北固亭有怀',
            author: '辛弃疾',
            content: '何处望神州？满眼风光北固楼。千古兴亡多少事？悠悠。不尽长江滚滚流。年少万兜鍪，坐断东南战未休。天下英雄谁敌手？曹刘。生子当如孙仲谋。',
            sentences: [
                { id: 'nanxiangzi_1', front: '何处望神州', back: '满眼风光北固楼' },
                { id: 'nanxiangzi_2', front: '千古兴亡多少事', back: '悠悠' },
                { id: 'nanxiangzi_3', front: '不尽长江滚滚流', back: '' },
                { id: 'nanxiangzi_4', front: '年少万兜鍪', back: '坐断东南战未休' },
                { id: 'nanxiangzi_5', front: '天下英雄谁敌手', back: '曹刘' },
                { id: 'nanxiangzi_6', front: '生子当如孙仲谋', back: '' }
            ],
            exercises: [
                {
                    type: 'fillBack',
                    title: '登亭怀古填空',
                    description: '请根据前半句内容，填写后半句',
                    items: [
                        { id: 'nanxiangzi_1', front: '何处望神州', back: '满眼风光北固楼' },
                        { id: 'nanxiangzi_2', front: '千古兴亡多少事', back: '悠悠' },
                        { id: 'nanxiangzi_4', front: '年少万兜鍪', back: '坐断东南战未休' },
                        { id: 'nanxiangzi_5', front: '天下英雄谁敌手', back: '曹刘' }
                    ]
                },
                {
                    type: 'fillBack',
                    title: '整篇填后句',
                    description: '根据前半句填写后半句',
                    autoFull: true
                },
                {
                    type: 'fillFront',
                    title: '整篇填前句',
                    description: '根据后半句填写前半句',
                    autoFull: true
                },
                {
                    type: 'random',
                    title: '随机抽题练习',
                    description: '从本文中随机抽取题目进行练习',
                    randomCount: 6
                }
            ]
        },
        {
            id: 'pozhenzi',
            title: '破阵子·为陈同甫赋壮词以寄之',
            author: '辛弃疾',
            content: '醉里挑灯看剑，梦回吹角连营。八百里分麾下炙，五十弦翻塞外声，沙场秋点兵。马作的卢飞快，弓如霹雳弦惊。了却君王天下事，赢得生前身后名，可怜白发生！',
            sentences: [
                { id: 'pozhenzi_1', front: '醉里挑灯看剑', back: '梦回吹角连营' },
                { id: 'pozhenzi_2', front: '八百里分麾下炙', back: '五十弦翻塞外声' },
                { id: 'pozhenzi_3', front: '沙场秋点兵', back: '' },
                { id: 'pozhenzi_4', front: '马作的卢飞快', back: '弓如霹雳弦惊' },
                { id: 'pozhenzi_5', front: '了却君王天下事', back: '赢得生前身后名' },
                { id: 'pozhenzi_6', front: '可怜白发生', back: '' }
            ],
            exercises: [
                {
                    type: 'fillBack',
                    title: '壮志难酬填空',
                    description: '请根据前半句内容，填写后半句',
                    items: [
                        { id: 'pozhenzi_1', front: '醉里挑灯看剑', back: '梦回吹角连营' },
                        { id: 'pozhenzi_2', front: '八百里分麾下炙', back: '五十弦翻塞外声' },
                        { id: 'pozhenzi_4', front: '马作的卢飞快', back: '弓如霹雳弦惊' },
                        { id: 'pozhenzi_5', front: '了却君王天下事', back: '赢得生前身后名' }
                    ]
                },
                {
                    type: 'fillBack',
                    title: '整篇填后句',
                    description: '根据前半句填写后半句',
                    autoFull: true
                },
                {
                    type: 'fillFront',
                    title: '整篇填前句',
                    description: '根据后半句填写前半句',
                    autoFull: true
                },
                {
                    type: 'random',
                    title: '随机抽题练习',
                    description: '从本文中随机抽取题目进行练习',
                    randomCount: 6
                }
            ]
        },
        {
            id: 'guolingding',
            title: '过零丁洋',
            author: '文天祥',
            content: '辛苦遭逢起一经，干戈寥落四周星。山河破碎风飘絮，身世浮沉雨打萍。惶恐滩头说惶恐，零丁洋里叹零丁。人生自古谁无死？留取丹心照汗青。',
            sentences: [
                { id: 'guolingding_1', front: '辛苦遭逢起一经', back: '干戈寥落四周星' },
                { id: 'guolingding_2', front: '山河破碎风飘絮', back: '身世浮沉雨打萍' },
                { id: 'guolingding_3', front: '惶恐滩头说惶恐', back: '零丁洋里叹零丁' },
                { id: 'guolingding_4', front: '人生自古谁无死', back: '留取丹心照汗青' }
            ],
            exercises: [
                {
                    type: 'fillBack',
                    title: '爱国情怀填空',
                    description: '请根据前半句内容，填写后半句',
                    items: [
                        { id: 'guolingding_1', front: '辛苦遭逢起一经', back: '干戈寥落四周星' },
                        { id: 'guolingding_2', front: '山河破碎风飘絮', back: '身世浮沉雨打萍' },
                        { id: 'guolingding_3', front: '惶恐滩头说惶恐', back: '零丁洋里叹零丁' },
                        { id: 'guolingding_4', front: '人生自古谁无死', back: '留取丹心照汗青' }
                    ]
                },
                {
                    type: 'fillBack',
                    title: '整篇填后句',
                    description: '根据前半句填写后半句',
                    autoFull: true
                },
                {
                    type: 'fillFront',
                    title: '整篇填前句',
                    description: '根据后半句填写前半句',
                    autoFull: true
                },
                {
                    type: 'random',
                    title: '随机抽题练习',
                    description: '从本文中随机抽取题目进行练习',
                    randomCount: 4
                }
            ]
        },
        {
            id: 'tianjingsha',
            title: '天净沙·秋思',
            author: '马致远',
            content: '枯藤老树昏鸦，小桥流水人家，古道西风瘦马。夕阳西下，断肠人在天涯。',
            sentences: [
                { id: 'tianjingsha_1', front: '枯藤老树昏鸦', back: '' },
                { id: 'tianjingsha_2', front: '小桥流水人家', back: '' },
                { id: 'tianjingsha_3', front: '古道西风瘦马', back: '' },
                { id: 'tianjingsha_4', front: '夕阳西下', back: '断肠人在天涯' }
            ],
            exercises: [
                {
                    type: 'fillBack',
                    title: '秋思意境填空',
                    description: '请根据前半句内容，填写后半句',
                    items: [
                        { id: 'tianjingsha_4', front: '夕阳西下', back: '断肠人在天涯' }
                    ]
                },
                {
                    type: 'fillBack',
                    title: '整篇填后句',
                    description: '根据前半句填写后半句',
                    autoFull: true
                },
                {
                    type: 'fillFront',
                    title: '整篇填前句',
                    description: '根据后半句填写前半句',
                    autoFull: true
                },
                {
                    type: 'random',
                    title: '随机抽题练习',
                    description: '从本文中随机抽取题目进行练习',
                    randomCount: 4
                }
            ]
        },
        {
            id: 'shanpoyang',
            title: '山坡羊·潼关怀古',
            author: '张养浩',
            content: '峰峦如聚，波涛如怒，山河表里潼关路。望西都，意踌躇。伤心秦汉经行处，宫阙万间都做了土。兴，百姓苦；亡，百姓苦。',
            sentences: [
                { id: 'shanpoyang_1', front: '峰峦如聚', back: '波涛如怒' },
                { id: 'shanpoyang_2', front: '山河表里潼关路', back: '' },
                { id: 'shanpoyang_3', front: '望西都', back: '意踌躇' },
                { id: 'shanpoyang_4', front: '伤心秦汉经行处', back: '宫阙万间都做了土' },
                { id: 'shanpoyang_5', front: '兴', back: '百姓苦' },
                { id: 'shanpoyang_6', front: '亡', back: '百姓苦' }
            ],
            exercises: [
                {
                    type: 'fillBack',
                    title: '潼关怀古填空',
                    description: '请根据前半句内容，填写后半句',
                    items: [
                        { id: 'shanpoyang_1', front: '峰峦如聚', back: '波涛如怒' },
                        { id: 'shanpoyang_3', front: '望西都', back: '意踌躇' },
                        { id: 'shanpoyang_4', front: '伤心秦汉经行处', back: '宫阙万间都做了土' },
                        { id: 'shanpoyang_5', front: '兴', back: '百姓苦' },
                        { id: 'shanpoyang_6', front: '亡', back: '百姓苦' }
                    ]
                },
                {
                    type: 'fillBack',
                    title: '整篇填后句',
                    description: '根据前半句填写后半句',
                    autoFull: true
                },
                {
                    type: 'fillFront',
                    title: '整篇填前句',
                    description: '根据后半句填写前半句',
                    autoFull: true
                },
                {
                    type: 'random',
                    title: '随机抽题练习',
                    description: '从本文中随机抽取题目进行练习',
                    randomCount: 6
                }
            ]
        },
        {
            id: 'jihai',
            title: '己亥杂诗',
            author: '龚自珍',
            content: '九州生气恃风雷，万马齐喑究可哀。我劝天公重抖擞，不拘一格降人才。',
            sentences: [
                { id: 'jihai_1', front: '九州生气恃风雷', back: '万马齐喑究可哀' },
                { id: 'jihai_2', front: '我劝天公重抖擞', back: '不拘一格降人才' }
            ],
            exercises: [
                {
                    type: 'fillBack',
                    title: '改革呼吁填空',
                    description: '请根据前半句内容，填写后半句',
                    items: [
                        { id: 'jihai_1', front: '九州生气恃风雷', back: '万马齐喑究可哀' },
                        { id: 'jihai_2', front: '我劝天公重抖擞', back: '不拘一格降人才' }
                    ]
                },
                {
                    type: 'fillBack',
                    title: '整篇填后句',
                    description: '根据前半句填写后半句',
                    autoFull: true
                },
                {
                    type: 'fillFront',
                    title: '整篇填前句',
                    description: '根据后半句填写前半句',
                    autoFull: true
                },
                {
                    type: 'random',
                    title: '随机抽题练习',
                    description: '从本文中随机抽取题目进行练习',
                    randomCount: 2
                }
            ]
        },
        {
            id: 'manjianghong',
            title: '满江红',
            author: '岳飞',
            content: '怒发冲冠，凭栏处、潇潇雨歇。抬望眼，仰天长啸，壮怀激烈。三十功名尘与土，八千里路云和月。莫等闲、白了少年头，空悲切。靖康耻，犹未雪。臣子恨，何时灭。驾长车，踏破贺兰山缺。壮志饥餐胡虏肉，笑谈渴饮匈奴血。待从头、收拾旧山河，朝天阙。',
            sentences: [
                { id: 'manjianghong_1', front: '怒发冲冠', back: '凭栏处' },
                { id: 'manjianghong_2', front: '潇潇雨歇', back: '' },
                { id: 'manjianghong_3', front: '抬望眼', back: '仰天长啸' },
                { id: 'manjianghong_4', front: '壮怀激烈', back: '' },
                { id: 'manjianghong_5', front: '三十功名尘与土', back: '八千里路云和月' },
                { id: 'manjianghong_6', front: '莫等闲', back: '白了少年头' },
                { id: 'manjianghong_7', front: '空悲切', back: '' },
                { id: 'manjianghong_8', front: '靖康耻', back: '犹未雪' },
                { id: 'manjianghong_9', front: '臣子恨', back: '何时灭' },
                { id: 'manjianghong_10', front: '驾长车', back: '踏破贺兰山缺' },
                { id: 'manjianghong_11', front: '壮志饥餐胡虏肉', back: '笑谈渴饮匈奴血' },
                { id: 'manjianghong_12', front: '待从头', back: '收拾旧山河' },
                { id: 'manjianghong_13', front: '朝天阙', back: '' }
            ],
            exercises: [
                {
                    type: 'fillBack',
                    title: '爱国壮志填空',
                    description: '请根据前半句内容，填写后半句',
                    items: [
                        { id: 'manjianghong_1', front: '怒发冲冠', back: '凭栏处' },
                        { id: 'manjianghong_3', front: '抬望眼', back: '仰天长啸' },
                        { id: 'manjianghong_5', front: '三十功名尘与土', back: '八千里路云和月' },
                        { id: 'manjianghong_6', front: '莫等闲', back: '白了少年头' },
                        { id: 'manjianghong_8', front: '靖康耻', back: '犹未雪' },
                        { id: 'manjianghong_9', front: '臣子恨', back: '何时灭' },
                        { id: 'manjianghong_10', front: '驾长车', back: '踏破贺兰山缺' },
                        { id: 'manjianghong_11', front: '壮志饥餐胡虏肉', back: '笑谈渴饮匈奴血' },
                        { id: 'manjianghong_12', front: '待从头', back: '收拾旧山河' }
                    ]
                },
                {
                    type: 'fillBack',
                    title: '整篇填后句',
                    description: '根据前半句填写后半句',
                    autoFull: true
                },
                {
                    type: 'fillFront',
                    title: '整篇填前句',
                    description: '根据后半句填写前半句',
                    autoFull: true
                },
                {
                    type: 'random',
                    title: '随机抽题练习',
                    description: '从本文中随机抽取题目进行练习',
                    randomCount: 13
                }
            ]
        },
        {
            id: 'lunyu',
            title: '《论语》十二则',
            author: '孔子及其弟子',
            content: '子曰："学而时习之，不亦说乎？有朋自远方来，不亦乐乎？人不知而不愠，不亦君子乎？"子曰："温故而知新，可以为师矣。"子曰："学而不思则罔，思而不学则殆。"子曰："知之者不如好之者，好之者不如乐之者。"子曰："三人行，必有我师焉。择其善者而从之，其不善者而改之。"子曰："学而时习之，不亦说乎？"子曰："知之为知之，不知为不知，是知也。"子曰："见贤思齐焉，见不贤而内自省也。"子曰："君子坦荡荡，小人长戚戚。"子曰："君子和而不同，小人同而不和。"子曰："君子泰而不骄，小人骄而不泰。"子曰："君子求诸己，小人求诸人。"',
            sentences: [
                { id: 'lunyu_1', front: '学而时习之', back: '不亦说乎' },
                { id: 'lunyu_2', front: '有朋自远方来', back: '不亦乐乎' },
                { id: 'lunyu_3', front: '人不知而不愠', back: '不亦君子乎' },
                { id: 'lunyu_4', front: '温故而知新', back: '可以为师矣' },
                { id: 'lunyu_5', front: '学而不思则罔', back: '思而不学则殆' },
                { id: 'lunyu_6', front: '知之者不如好之者', back: '好之者不如乐之者' },
                { id: 'lunyu_7', front: '三人行', back: '必有我师焉' },
                { id: 'lunyu_8', front: '择其善者而从之', back: '其不善者而改之' },
                { id: 'lunyu_9', front: '知之为知之', back: '不知为不知' },
                { id: 'lunyu_10', front: '是知也', back: '' },
                { id: 'lunyu_11', front: '见贤思齐焉', back: '见不贤而内自省也' },
                { id: 'lunyu_12', front: '君子坦荡荡', back: '小人长戚戚' },
                { id: 'lunyu_13', front: '君子和而不同', back: '小人同而不和' },
                { id: 'lunyu_14', front: '君子泰而不骄', back: '小人骄而不泰' },
                { id: 'lunyu_15', front: '君子求诸己', back: '小人求诸人' }
            ],
            exercises: [
                {
                    type: 'fillBack',
                    title: '儒家经典填空',
                    description: '请根据前半句内容，填写后半句',
                    items: [
                        { id: 'lunyu_1', front: '学而时习之', back: '不亦说乎' },
                        { id: 'lunyu_2', front: '有朋自远方来', back: '不亦乐乎' },
                        { id: 'lunyu_3', front: '人不知而不愠', back: '不亦君子乎' },
                        { id: 'lunyu_4', front: '温故而知新', back: '可以为师矣' },
                        { id: 'lunyu_5', front: '学而不思则罔', back: '思而不学则殆' },
                        { id: 'lunyu_6', front: '知之者不如好之者', back: '好之者不如乐之者' },
                        { id: 'lunyu_7', front: '三人行', back: '必有我师焉' },
                        { id: 'lunyu_8', front: '择其善者而从之', back: '其不善者而改之' },
                        { id: 'lunyu_9', front: '知之为知之', back: '不知为不知' },
                        { id: 'lunyu_11', front: '见贤思齐焉', back: '见不贤而内自省也' },
                        { id: 'lunyu_12', front: '君子坦荡荡', back: '小人长戚戚' },
                        { id: 'lunyu_13', front: '君子和而不同', back: '小人同而不和' },
                        { id: 'lunyu_14', front: '君子泰而不骄', back: '小人骄而不泰' },
                        { id: 'lunyu_15', front: '君子求诸己', back: '小人求诸人' }
                    ]
                },
                {
                    type: 'fillBack',
                    title: '整篇填后句',
                    description: '根据前半句填写后半句',
                    autoFull: true
                },
                {
                    type: 'fillFront',
                    title: '整篇填前句',
                    description: '根据后半句填写前半句',
                    autoFull: true
                },
                {
                    type: 'random',
                    title: '随机抽题练习',
                    description: '从本文中随机抽取题目进行练习',
                    randomCount: 15
                }
            ]
        },
        {
            id: 'caogui',
            title: '曹刿论战',
            author: '左丘明',
            content: '十年春，齐师伐我。公将战。曹刿请见。其乡人曰："肉食者谋之，又何间焉？"刿曰："肉食者鄙，未能远谋。"乃入见。问："何以战？"公曰："衣食所安，弗敢专也，必以分人。"对曰："小惠未遍，民弗从也。"公曰："牺牲玉帛，弗敢加也，必以信。"对曰："小信未孚，神弗福也。"公曰："小大之狱，虽不能察，必以情。"对曰："忠之属也。可以一战。战则请从。"',
            sentences: [
                { id: 'caogui_1', front: '十年春', back: '齐师伐我' },
                { id: 'caogui_2', front: '公将战', back: '' },
                { id: 'caogui_3', front: '曹刿请见', back: '' },
                { id: 'caogui_4', front: '肉食者谋之', back: '又何间焉' },
                { id: 'caogui_5', front: '肉食者鄙', back: '未能远谋' },
                { id: 'caogui_6', front: '何以战', back: '' },
                { id: 'caogui_7', front: '衣食所安', back: '弗敢专也' },
                { id: 'caogui_8', front: '必以分人', back: '' },
                { id: 'caogui_9', front: '小惠未遍', back: '民弗从也' },
                { id: 'caogui_10', front: '牺牲玉帛', back: '弗敢加也' },
                { id: 'caogui_11', front: '必以信', back: '' },
                { id: 'caogui_12', front: '小信未孚', back: '神弗福也' },
                { id: 'caogui_13', front: '小大之狱', back: '虽不能察' },
                { id: 'caogui_14', front: '必以情', back: '' },
                { id: 'caogui_15', front: '忠之属也', back: '可以一战' },
                { id: 'caogui_16', front: '战则请从', back: '' }
            ],
            exercises: [
                {
                    type: 'fillBack',
                    title: '论战智慧填空',
                    description: '请根据前半句内容，填写后半句',
                    items: [
                        { id: 'caogui_1', front: '十年春', back: '齐师伐我' },
                        { id: 'caogui_4', front: '肉食者谋之', back: '又何间焉' },
                        { id: 'caogui_5', front: '肉食者鄙', back: '未能远谋' },
                        { id: 'caogui_7', front: '衣食所安', back: '弗敢专也' },
                        { id: 'caogui_9', front: '小惠未遍', back: '民弗从也' },
                        { id: 'caogui_10', front: '牺牲玉帛', back: '弗敢加也' },
                        { id: 'caogui_12', front: '小信未孚', back: '神弗福也' },
                        { id: 'caogui_13', front: '小大之狱', back: '虽不能察' },
                        { id: 'caogui_15', front: '忠之属也', back: '可以一战' }
                    ]
                },
                {
                    type: 'fillBack',
                    title: '整篇填后句',
                    description: '根据前半句填写后半句',
                    autoFull: true
                },
                {
                    type: 'fillFront',
                    title: '整篇填前句',
                    description: '根据后半句填写前半句',
                    autoFull: true
                },
                {
                    type: 'random',
                    title: '随机抽题练习',
                    description: '从本文中随机抽取题目进行练习',
                    randomCount: 16
                }
            ]
        },
        {
            id: 'yuwosuoyu',
            title: '鱼我所欲也',
            author: '孟子',
            content: '鱼，我所欲也；熊掌，亦我所欲也。二者不可得兼，舍鱼而取熊掌者也。生，亦我所欲也；义，亦我所欲也。二者不可得兼，舍生而取义者也。生亦我所欲，所欲有甚于生者，故不为苟得也；死亦我所恶，所恶有甚于死者，故患有所不辟也。如使人之所欲莫甚于生，则凡可以得生者，何不用也？使人之所恶莫甚于死者，则凡可以辟患者，何不为也？由是则生而有不用也，由是则可以辟患而有不为也。是故所欲有甚于生者，所恶有甚于死者。非独贤者有是心也，人皆有之，贤者能勿丧耳。',
            sentences: [
                { id: 'yuwosuoyu_1', front: '鱼', back: '我所欲也' },
                { id: 'yuwosuoyu_2', front: '熊掌', back: '亦我所欲也' },
                { id: 'yuwosuoyu_3', front: '二者不可得兼', back: '舍鱼而取熊掌者也' },
                { id: 'yuwosuoyu_4', front: '生', back: '亦我所欲也' },
                { id: 'yuwosuoyu_5', front: '义', back: '亦我所欲也' },
                { id: 'yuwosuoyu_6', front: '二者不可得兼', back: '舍生而取义者也' },
                { id: 'yuwosuoyu_7', front: '生亦我所欲', back: '所欲有甚于生者' },
                { id: 'yuwosuoyu_8', front: '故不为苟得也', back: '' },
                { id: 'yuwosuoyu_9', front: '死亦我所恶', back: '所恶有甚于死者' },
                { id: 'yuwosuoyu_10', front: '故患有所不辟也', back: '' },
                { id: 'yuwosuoyu_11', front: '非独贤者有是心也', back: '人皆有之' },
                { id: 'yuwosuoyu_12', front: '贤者能勿丧耳', back: '' }
            ],
            exercises: [
                {
                    type: 'fillBack',
                    title: '舍生取义填空',
                    description: '请根据前半句内容，填写后半句',
                    items: [
                        { id: 'yuwosuoyu_1', front: '鱼', back: '我所欲也' },
                        { id: 'yuwosuoyu_2', front: '熊掌', back: '亦我所欲也' },
                        { id: 'yuwosuoyu_3', front: '二者不可得兼', back: '舍鱼而取熊掌者也' },
                        { id: 'yuwosuoyu_4', front: '生', back: '亦我所欲也' },
                        { id: 'yuwosuoyu_5', front: '义', back: '亦我所欲也' },
                        { id: 'yuwosuoyu_6', front: '二者不可得兼', back: '舍生而取义者也' },
                        { id: 'yuwosuoyu_7', front: '生亦我所欲', back: '所欲有甚于生者' },
                        { id: 'yuwosuoyu_9', front: '死亦我所恶', back: '所恶有甚于死者' },
                        { id: 'yuwosuoyu_11', front: '非独贤者有是心也', back: '人皆有之' }
                    ]
                },
                {
                    type: 'fillBack',
                    title: '整篇填后句',
                    description: '根据前半句填写后半句',
                    autoFull: true
                },
                {
                    type: 'fillFront',
                    title: '整篇填前句',
                    description: '根据后半句填写前半句',
                    autoFull: true
                },
                {
                    type: 'random',
                    title: '随机抽题练习',
                    description: '从本文中随机抽取题目进行练习',
                    randomCount: 12
                }
            ]
        },
        {
            id: 'hezhong',
            title: '河中石兽',
            author: '纪昀',
            content: '沧州南一寺临河干，山门圮于河，二石兽并沉焉。阅十余岁，僧募金重修，求二石兽于水中，竟不可得，以为顺流下矣。棹数小舟，曳铁钯，寻十余里无迹。一讲学家设帐寺中，闻之笑曰："尔辈不能究物理。是非木杮，岂能为暴涨携之去？乃石性坚重，沙性松浮，湮于沙上，渐沉渐深耳。沿河求之，不亦颠乎？"众服为确论。一老河兵闻之，又笑曰："凡河中失石，当求之于上流。盖石性坚重，沙性松浮，水不能冲石，其反激之力，必于石下迎水处啮沙为坎穴。渐激渐深，至石之半，石必倒掷坎穴中。如是再啮，石又再转。转转不已，遂反溯流逆上矣。求之下流，固颠；求之地中，不更颠乎？"如其言，果得于数里外。然则天下之事，但知其一，不知其二者多矣，可据理臆断欤？',
            sentences: [
                { id: 'hezhong_1', front: '沧州南一寺临河干', back: '山门圮于河' },
                { id: 'hezhong_2', front: '二石兽并沉焉', back: '' },
                { id: 'hezhong_3', front: '阅十余岁', back: '僧募金重修' },
                { id: 'hezhong_4', front: '求二石兽于水中', back: '竟不可得' },
                { id: 'hezhong_5', front: '以为顺流下矣', back: '' },
                { id: 'hezhong_6', front: '棹数小舟', back: '曳铁钯' },
                { id: 'hezhong_7', front: '寻十余里无迹', back: '' },
                { id: 'hezhong_8', front: '尔辈不能究物理', back: '' },
                { id: 'hezhong_9', front: '是非木杮', back: '岂能为暴涨携之去' },
                { id: 'hezhong_10', front: '乃石性坚重', back: '沙性松浮' },
                { id: 'hezhong_11', front: '湮于沙上', back: '渐沉渐深耳' },
                { id: 'hezhong_12', front: '沿河求之', back: '不亦颠乎' },
                { id: 'hezhong_13', front: '众服为确论', back: '' },
                { id: 'hezhong_14', front: '凡河中失石', back: '当求之于上流' },
                { id: 'hezhong_15', front: '盖石性坚重', back: '沙性松浮' },
                { id: 'hezhong_16', front: '水不能冲石', back: '其反激之力' },
                { id: 'hezhong_17', front: '必于石下迎水处啮沙为坎穴', back: '' },
                { id: 'hezhong_18', front: '渐激渐深', back: '至石之半' },
                { id: 'hezhong_19', front: '石必倒掷坎穴中', back: '' },
                { id: 'hezhong_20', front: '如是再啮', back: '石又再转' },
                { id: 'hezhong_21', front: '转转不已', back: '遂反溯流逆上矣' },
                { id: 'hezhong_22', front: '求之下流', back: '固颠' },
                { id: 'hezhong_23', front: '求之地中', back: '不更颠乎' },
                { id: 'hezhong_24', front: '如其言', back: '果得于数里外' },
                { id: 'hezhong_25', front: '然则天下之事', back: '但知其一' },
                { id: 'hezhong_26', front: '不知其二者多矣', back: '' },
                { id: 'hezhong_27', front: '可据理臆断欤', back: '' }
            ],
            exercises: [
                {
                    type: 'fillBack',
                    title: '石兽寻踪填空',
                    description: '请根据前半句内容，填写后半句',
                    items: [
                        { id: 'hezhong_1', front: '沧州南一寺临河干', back: '山门圮于河' },
                        { id: 'hezhong_3', front: '阅十余岁', back: '僧募金重修' },
                        { id: 'hezhong_4', front: '求二石兽于水中', back: '竟不可得' },
                        { id: 'hezhong_6', front: '棹数小舟', back: '曳铁钯' },
                        { id: 'hezhong_9', front: '是非木杮', back: '岂能为暴涨携之去' },
                        { id: 'hezhong_10', front: '乃石性坚重', back: '沙性松浮' },
                        { id: 'hezhong_11', front: '湮于沙上', back: '渐沉渐深耳' },
                        { id: 'hezhong_12', front: '沿河求之', back: '不亦颠乎' },
                        { id: 'hezhong_14', front: '凡河中失石', back: '当求之于上流' },
                        { id: 'hezhong_15', front: '盖石性坚重', back: '沙性松浮' },
                        { id: 'hezhong_16', front: '水不能冲石', back: '其反激之力' },
                        { id: 'hezhong_18', front: '渐激渐深', back: '至石之半' },
                        { id: 'hezhong_20', front: '如是再啮', back: '石又再转' },
                        { id: 'hezhong_21', front: '转转不已', back: '遂反溯流逆上矣' },
                        { id: 'hezhong_22', front: '求之下流', back: '固颠' },
                        { id: 'hezhong_23', front: '求之地中', back: '不更颠乎' },
                        { id: 'hezhong_24', front: '如其言', back: '果得于数里外' },
                        { id: 'hezhong_25', front: '然则天下之事', back: '但知其一' }
                    ]
                },
                {
                    type: 'fillBack',
                    title: '整篇填后句',
                    description: '根据前半句填写后半句',
                    autoFull: true
                },
                {
                    type: 'fillFront',
                    title: '整篇填前句',
                    description: '根据后半句填写前半句',
                    autoFull: true
                },
                {
                    type: 'random',
                    title: '随机抽题练习',
                    description: '从本文中随机抽取题目进行练习',
                    randomCount: 27
                }
            ]
        },
        {
            id: 'shengyouhuan',
            title: '生于忧患，死于安乐',
            author: '孟子',
            content: '舜发于畎亩之中，傅说举于版筑之间，胶鬲举于鱼盐之中，管夷吾举于士，孙叔敖举于海，百里奚举于市。故天将降大任于斯人也，必先苦其心志，劳其筋骨，饿其体肤，空乏其身，行拂乱其所为，所以动心忍性，曾益其所不能。人恒过，然后能改；困于心，衡于虑，而后作；征于色，发于声，而后喻。入则无法家拂士，出则无敌国外患者，国恒亡。然后知生于忧患而死于安乐也。',
            sentences: [
                { id: 'shengyouhuan_1', front: '舜发于畎亩之中', back: '' },
                { id: 'shengyouhuan_2', front: '傅说举于版筑之间', back: '' },
                { id: 'shengyouhuan_3', front: '胶鬲举于鱼盐之中', back: '' },
                { id: 'shengyouhuan_4', front: '管夷吾举于士', back: '' },
                { id: 'shengyouhuan_5', front: '孙叔敖举于海', back: '' },
                { id: 'shengyouhuan_6', front: '百里奚举于市', back: '' },
                { id: 'shengyouhuan_7', front: '故天将降大任于斯人也', back: '必先苦其心志' },
                { id: 'shengyouhuan_8', front: '劳其筋骨', back: '饿其体肤' },
                { id: 'shengyouhuan_9', front: '空乏其身', back: '' },
                { id: 'shengyouhuan_10', front: '行拂乱其所为', back: '所以动心忍性' },
                { id: 'shengyouhuan_11', front: '曾益其所不能', back: '' },
                { id: 'shengyouhuan_12', front: '人恒过', back: '然后能改' },
                { id: 'shengyouhuan_13', front: '困于心', back: '衡于虑' },
                { id: 'shengyouhuan_14', front: '而后作', back: '' },
                { id: 'shengyouhuan_15', front: '征于色', back: '发于声' },
                { id: 'shengyouhuan_16', front: '而后喻', back: '' },
                { id: 'shengyouhuan_17', front: '入则无法家拂士', back: '出则无敌国外患者' },
                { id: 'shengyouhuan_18', front: '国恒亡', back: '' },
                { id: 'shengyouhuan_19', front: '然后知生于忧患而死于安乐也', back: '' }
            ],
            exercises: [
                {
                    type: 'fillBack',
                    title: '忧患意识填空',
                    description: '请根据前半句内容，填写后半句',
                    items: [
                        { id: 'shengyouhuan_7', front: '故天将降大任于斯人也', back: '必先苦其心志' },
                        { id: 'shengyouhuan_8', front: '劳其筋骨', back: '饿其体肤' },
                        { id: 'shengyouhuan_10', front: '行拂乱其所为', back: '所以动心忍性' },
                        { id: 'shengyouhuan_12', front: '人恒过', back: '然后能改' },
                        { id: 'shengyouhuan_13', front: '困于心', back: '衡于虑' },
                        { id: 'shengyouhuan_15', front: '征于色', back: '发于声' },
                        { id: 'shengyouhuan_17', front: '入则无法家拂士', back: '出则无敌国外患者' }
                    ]
                },
                {
                    type: 'fillBack',
                    title: '整篇填后句',
                    description: '根据前半句填写后半句',
                    autoFull: true
                },
                {
                    type: 'fillFront',
                    title: '整篇填前句',
                    description: '根据后半句填写前半句',
                    autoFull: true
                },
                {
                    type: 'random',
                    title: '随机抽题练习',
                    description: '从本文中随机抽取题目进行练习',
                    randomCount: 19
                }
            ]
        },
        {
            id: 'dedaoduo',
            title: '得道多助，失道寡助',
            author: '孟子',
            content: '天时不如地利，地利不如人和。三里之城，七里之郭，环而攻之而不胜。夫环而攻之，必有得天时者矣，然而不胜者，是天时不如地利也。城非不高也，池非不深也，兵革非不坚利也，米粟非不多也，委而去之，是地利不如人和也。故曰：域民不以封疆之界，固国不以山溪之险，威天下不以兵革之利。得道者多助，失道者寡助。寡助之至，亲戚畔之。多助之至，天下顺之。以天下之所顺，攻亲戚之所畔，故君子有不战，战必胜矣。',
            sentences: [
                { id: 'dedaoduo_1', front: '天时不如地利', back: '地利不如人和' },
                { id: 'dedaoduo_2', front: '三里之城', back: '七里之郭' },
                { id: 'dedaoduo_3', front: '环而攻之而不胜', back: '' },
                { id: 'dedaoduo_4', front: '夫环而攻之', back: '必有得天时者矣' },
                { id: 'dedaoduo_5', front: '然而不胜者', back: '是天时不如地利也' },
                { id: 'dedaoduo_6', front: '城非不高也', back: '池非不深也' },
                { id: 'dedaoduo_7', front: '兵革非不坚利也', back: '米粟非不多也' },
                { id: 'dedaoduo_8', front: '委而去之', back: '是地利不如人和也' },
                { id: 'dedaoduo_9', front: '故曰', back: '域民不以封疆之界' },
                { id: 'dedaoduo_10', front: '固国不以山溪之险', back: '' },
                { id: 'dedaoduo_11', front: '威天下不以兵革之利', back: '' },
                { id: 'dedaoduo_12', front: '得道者多助', back: '失道者寡助' },
                { id: 'dedaoduo_13', front: '寡助之至', back: '亲戚畔之' },
                { id: 'dedaoduo_14', front: '多助之至', back: '天下顺之' },
                { id: 'dedaoduo_15', front: '以天下之所顺', back: '攻亲戚之所畔' },
                { id: 'dedaoduo_16', front: '故君子有不战', back: '战必胜矣' }
            ],
            exercises: [
                {
                    type: 'fillBack',
                    title: '得道多助填空',
                    description: '请根据前半句内容，填写后半句',
                    items: [
                        { id: 'dedaoduo_1', front: '天时不如地利', back: '地利不如人和' },
                        { id: 'dedaoduo_2', front: '三里之城', back: '七里之郭' },
                        { id: 'dedaoduo_4', front: '夫环而攻之', back: '必有得天时者矣' },
                        { id: 'dedaoduo_5', front: '然而不胜者', back: '是天时不如地利也' },
                        { id: 'dedaoduo_6', front: '城非不高也', back: '池非不深也' },
                        { id: 'dedaoduo_7', front: '兵革非不坚利也', back: '米粟非不多也' },
                        { id: 'dedaoduo_8', front: '委而去之', back: '是地利不如人和也' },
                        { id: 'dedaoduo_9', front: '故曰', back: '域民不以封疆之界' },
                        { id: 'dedaoduo_12', front: '得道者多助', back: '失道者寡助' },
                        { id: 'dedaoduo_13', front: '寡助之至', back: '亲戚畔之' },
                        { id: 'dedaoduo_14', front: '多助之至', back: '天下顺之' },
                        { id: 'dedaoduo_15', front: '以天下之所顺', back: '攻亲戚之所畔' },
                        { id: 'dedaoduo_16', front: '故君子有不战', back: '战必胜矣' }
                    ]
                },
                {
                    type: 'fillBack',
                    title: '整篇填后句',
                    description: '根据前半句填写后半句',
                    autoFull: true
                },
                {
                    type: 'fillFront',
                    title: '整篇填前句',
                    description: '根据后半句填写前半句',
                    autoFull: true
                },
                {
                    type: 'random',
                    title: '随机抽题练习',
                    description: '从本文中随机抽取题目进行练习',
                    randomCount: 16
                }
            ]
        },
        {
            id: 'liezi',
            title: '《列子》一则',
            author: '列子',
            content: '伯牙善鼓琴，钟子期善听。伯牙鼓琴，志在高山，钟子期曰："善哉，峨峨兮若泰山！"志在流水，钟子期曰："善哉，洋洋兮若江河！"伯牙所念，钟子期必得之。伯牙游于泰山之阴，卒逢暴雨，止于岩下，心悲，乃援琴而鼓之。初为霖雨之操，更造崩山之音。曲每奏，钟子期辄穷其趣。伯牙乃舍琴而叹曰："善哉，善哉，子之听夫！志想象犹吾心也。吾于何逃声哉？"',
            sentences: [
                { id: 'liezi_1', front: '伯牙善鼓琴', back: '钟子期善听' },
                { id: 'liezi_2', front: '伯牙鼓琴', back: '志在高山' },
                { id: 'liezi_3', front: '钟子期曰', back: '善哉' },
                { id: 'liezi_4', front: '峨峨兮若泰山', back: '' },
                { id: 'liezi_5', front: '志在流水', back: '' },
                { id: 'liezi_6', front: '洋洋兮若江河', back: '' },
                { id: 'liezi_7', front: '伯牙所念', back: '钟子期必得之' },
                { id: 'liezi_8', front: '伯牙游于泰山之阴', back: '卒逢暴雨' },
                { id: 'liezi_9', front: '止于岩下', back: '心悲' },
                { id: 'liezi_10', front: '乃援琴而鼓之', back: '' },
                { id: 'liezi_11', front: '初为霖雨之操', back: '更造崩山之音' },
                { id: 'liezi_12', front: '曲每奏', back: '钟子期辄穷其趣' },
                { id: 'liezi_13', front: '伯牙乃舍琴而叹曰', back: '善哉' },
                { id: 'liezi_14', front: '善哉', back: '子之听夫' },
                { id: 'liezi_15', front: '志想象犹吾心也', back: '' },
                { id: 'liezi_16', front: '吾于何逃声哉', back: '' }
            ],
            exercises: [
                {
                    type: 'fillBack',
                    title: '知音难觅填空',
                    description: '请根据前半句内容，填写后半句',
                    items: [
                        { id: 'liezi_1', front: '伯牙善鼓琴', back: '钟子期善听' },
                        { id: 'liezi_2', front: '伯牙鼓琴', back: '志在高山' },
                        { id: 'liezi_3', front: '钟子期曰', back: '善哉' },
                        { id: 'liezi_7', front: '伯牙所念', back: '钟子期必得之' },
                        { id: 'liezi_8', front: '伯牙游于泰山之阴', back: '卒逢暴雨' },
                        { id: 'liezi_9', front: '止于岩下', back: '心悲' },
                        { id: 'liezi_11', front: '初为霖雨之操', back: '更造崩山之音' },
                        { id: 'liezi_12', front: '曲每奏', back: '钟子期辄穷其趣' },
                        { id: 'liezi_13', front: '伯牙乃舍琴而叹曰', back: '善哉' },
                        { id: 'liezi_14', front: '善哉', back: '子之听夫' }
                    ]
                },
                {
                    type: 'fillBack',
                    title: '整篇填后句',
                    description: '根据前半句填写后半句',
                    autoFull: true
                },
                {
                    type: 'fillFront',
                    title: '整篇填前句',
                    description: '根据后半句填写前半句',
                    autoFull: true
                },
                {
                    type: 'random',
                    title: '随机抽题练习',
                    description: '从本文中随机抽取题目进行练习',
                    randomCount: 16
                }
            ]
        },
        {
            id: 'zouji',
            title: '邹忌讽齐王纳谏',
            author: '《战国策》',
            content: '邹忌修八尺有余，而形貌昳丽。朝服衣冠，窥镜，谓其妻曰："我孰与城北徐公美？"其妻曰："君美甚，徐公何能及君也？"城北徐公，齐国之美丽者也。忌不自信，而复问其妾曰："吾孰与徐公美？"妾曰："徐公何能及君也？"旦日，客从外来，与坐谈，问之客曰："吾与徐公孰美？"客曰："徐公不若君之美也。"明日徐公来，孰视之，自以为不如；窥镜而自视，又弗如远甚。暮寝而思之，曰："吾妻之美我者，私我也；妾之美我者，畏我也；客之美我者，欲有求于我也。"',
            sentences: [
                { id: 'zouji_1', front: '邹忌修八尺有余', back: '而形貌昳丽' },
                { id: 'zouji_2', front: '朝服衣冠', back: '窥镜' },
                { id: 'zouji_3', front: '谓其妻曰', back: '我孰与城北徐公美' },
                { id: 'zouji_4', front: '其妻曰', back: '君美甚' },
                { id: 'zouji_5', front: '徐公何能及君也', back: '' },
                { id: 'zouji_6', front: '城北徐公', back: '齐国之美丽者也' },
                { id: 'zouji_7', front: '忌不自信', back: '而复问其妾曰' },
                { id: 'zouji_8', front: '吾孰与徐公美', back: '' },
                { id: 'zouji_9', front: '妾曰', back: '徐公何能及君也' },
                { id: 'zouji_10', front: '旦日', back: '客从外来' },
                { id: 'zouji_11', front: '与坐谈', back: '问之客曰' },
                { id: 'zouji_12', front: '吾与徐公孰美', back: '' },
                { id: 'zouji_13', front: '客曰', back: '徐公不若君之美也' },
                { id: 'zouji_14', front: '明日徐公来', back: '孰视之' },
                { id: 'zouji_15', front: '自以为不如', back: '' },
                { id: 'zouji_16', front: '窥镜而自视', back: '又弗如远甚' },
                { id: 'zouji_17', front: '暮寝而思之', back: '' },
                { id: 'zouji_18', front: '曰', back: '吾妻之美我者' },
                { id: 'zouji_19', front: '私我也', back: '' },
                { id: 'zouji_20', front: '妾之美我者', back: '畏我也' },
                { id: 'zouji_21', front: '客之美我者', back: '欲有求于我也' }
            ],
            exercises: [
                {
                    type: 'fillBack',
                    title: '讽谏智慧填空',
                    description: '请根据前半句内容，填写后半句',
                    items: [
                        { id: 'zouji_1', front: '邹忌修八尺有余', back: '而形貌昳丽' },
                        { id: 'zouji_2', front: '朝服衣冠', back: '窥镜' },
                        { id: 'zouji_3', front: '谓其妻曰', back: '我孰与城北徐公美' },
                        { id: 'zouji_4', front: '其妻曰', back: '君美甚' },
                        { id: 'zouji_6', front: '城北徐公', back: '齐国之美丽者也' },
                        { id: 'zouji_7', front: '忌不自信', back: '而复问其妾曰' },
                        { id: 'zouji_9', front: '妾曰', back: '徐公何能及君也' },
                        { id: 'zouji_10', front: '旦日', back: '客从外来' },
                        { id: 'zouji_11', front: '与坐谈', back: '问之客曰' },
                        { id: 'zouji_13', front: '客曰', back: '徐公不若君之美也' },
                        { id: 'zouji_14', front: '明日徐公来', back: '孰视之' },
                        { id: 'zouji_16', front: '窥镜而自视', back: '又弗如远甚' },
                        { id: 'zouji_18', front: '曰', back: '吾妻之美我者' },
                        { id: 'zouji_20', front: '妾之美我者', back: '畏我也' },
                        { id: 'zouji_21', front: '客之美我者', back: '欲有求于我也' }
                    ]
                },
                {
                    type: 'fillBack',
                    title: '整篇填后句',
                    description: '根据前半句填写后半句',
                    autoFull: true
                },
                {
                    type: 'fillFront',
                    title: '整篇填前句',
                    description: '根据后半句填写前半句',
                    autoFull: true
                },
                {
                    type: 'random',
                    title: '随机抽题练习',
                    description: '从本文中随机抽取题目进行练习',
                    randomCount: 21
                }
            ]
        },
        {
            id: 'chushibiao',
            title: '出师表',
            author: '诸葛亮',
            content: '先帝创业未半而中道崩殂，今天下三分，益州疲弊，此诚危急存亡之秋也。然侍卫之臣不懈于内，忠志之士忘身于外者，盖追先帝之殊遇，欲报之于陛下也。诚宜开张圣听，以光先帝遗德，恢弘志士之气，不宜妄自菲薄，引喻失义，以塞忠谏之路也。宫中府中，俱为一体，陟罚臧否，不宜异同。若有作奸犯科及为忠善者，宜付有司论其刑赏，以昭陛下平明之理，不宜偏私，使内外异法也。',
            sentences: [
                { id: 'chushibiao_1', front: '先帝创业未半而中道崩殂', back: '' },
                { id: 'chushibiao_2', front: '今天下三分', back: '益州疲弊' },
                { id: 'chushibiao_3', front: '此诚危急存亡之秋也', back: '' },
                { id: 'chushibiao_4', front: '然侍卫之臣不懈于内', back: '忠志之士忘身于外者' },
                { id: 'chushibiao_5', front: '盖追先帝之殊遇', back: '欲报之于陛下也' },
                { id: 'chushibiao_6', front: '诚宜开张圣听', back: '以光先帝遗德' },
                { id: 'chushibiao_7', front: '恢弘志士之气', back: '' },
                { id: 'chushibiao_8', front: '不宜妄自菲薄', back: '引喻失义' },
                { id: 'chushibiao_9', front: '以塞忠谏之路也', back: '' },
                { id: 'chushibiao_10', front: '宫中府中', back: '俱为一体' },
                { id: 'chushibiao_11', front: '陟罚臧否', back: '不宜异同' },
                { id: 'chushibiao_12', front: '若有作奸犯科及为忠善者', back: '宜付有司论其刑赏' },
                { id: 'chushibiao_13', front: '以昭陛下平明之理', back: '不宜偏私' },
                { id: 'chushibiao_14', front: '使内外异法也', back: '' }
            ],
            exercises: [
                {
                    type: 'fillBack',
                    title: '忠臣进谏填空',
                    description: '请根据前半句内容，填写后半句',
                    items: [
                        { id: 'chushibiao_2', front: '今天下三分', back: '益州疲弊' },
                        { id: 'chushibiao_4', front: '然侍卫之臣不懈于内', back: '忠志之士忘身于外者' },
                        { id: 'chushibiao_5', front: '盖追先帝之殊遇', back: '欲报之于陛下也' },
                        { id: 'chushibiao_6', front: '诚宜开张圣听', back: '以光先帝遗德' },
                        { id: 'chushibiao_8', front: '不宜妄自菲薄', back: '引喻失义' },
                        { id: 'chushibiao_10', front: '宫中府中', back: '俱为一体' },
                        { id: 'chushibiao_11', front: '陟罚臧否', back: '不宜异同' },
                        { id: 'chushibiao_12', front: '若有作奸犯科及为忠善者', back: '宜付有司论其刑赏' },
                        { id: 'chushibiao_13', front: '以昭陛下平明之理', back: '不宜偏私' }
                    ]
                },
                {
                    type: 'fillBack',
                    title: '整篇填后句',
                    description: '根据前半句填写后半句',
                    autoFull: true
                },
                {
                    type: 'fillFront',
                    title: '整篇填前句',
                    description: '根据后半句填写前半句',
                    autoFull: true
                },
                {
                    type: 'random',
                    title: '随机抽题练习',
                    description: '从本文中随机抽取题目进行练习',
                    randomCount: 14
                }
            ]
        },
        {
            id: 'taohuayuan',
            title: '桃花源记',
            author: '陶渊明',
            content: '晋太元中，武陵人捕鱼为业。缘溪行，忘路之远近。忽逢桃花林，夹岸数百步，中无杂树，芳草鲜美，落英缤纷。渔人甚异之，复前行，欲穷其林。林尽水源，便得一山，山有小口，仿佛若有光。便舍船，从口入。初极狭，才通人。复行数十步，豁然开朗。土地平旷，屋舍俨然，有良田美池桑竹之属。阡陌交通，鸡犬相闻。其中往来种作，男女衣着，悉如外人。黄发垂髫，并怡然自乐。',
            sentences: [
                { id: 'taohuayuan_1', front: '晋太元中', back: '武陵人捕鱼为业' },
                { id: 'taohuayuan_2', front: '缘溪行', back: '忘路之远近' },
                { id: 'taohuayuan_3', front: '忽逢桃花林', back: '夹岸数百步' },
                { id: 'taohuayuan_4', front: '中无杂树', back: '芳草鲜美' },
                { id: 'taohuayuan_5', front: '落英缤纷', back: '' },
                { id: 'taohuayuan_6', front: '渔人甚异之', back: '复前行' },
                { id: 'taohuayuan_7', front: '欲穷其林', back: '' },
                { id: 'taohuayuan_8', front: '林尽水源', back: '便得一山' },
                { id: 'taohuayuan_9', front: '山有小口', back: '仿佛若有光' },
                { id: 'taohuayuan_10', front: '便舍船', back: '从口入' },
                { id: 'taohuayuan_11', front: '初极狭', back: '才通人' },
                { id: 'taohuayuan_12', front: '复行数十步', back: '豁然开朗' },
                { id: 'taohuayuan_13', front: '土地平旷', back: '屋舍俨然' },
                { id: 'taohuayuan_14', front: '有良田美池桑竹之属', back: '' },
                { id: 'taohuayuan_15', front: '阡陌交通', back: '鸡犬相闻' },
                { id: 'taohuayuan_16', front: '其中往来种作', back: '男女衣着' },
                { id: 'taohuayuan_17', front: '悉如外人', back: '' },
                { id: 'taohuayuan_18', front: '黄发垂髫', back: '并怡然自乐' }
            ],
            exercises: [
                {
                    type: 'fillBack',
                    title: '桃源仙境填空',
                    description: '请根据前半句内容，填写后半句',
                    items: [
                        { id: 'taohuayuan_1', front: '晋太元中', back: '武陵人捕鱼为业' },
                        { id: 'taohuayuan_2', front: '缘溪行', back: '忘路之远近' },
                        { id: 'taohuayuan_3', front: '忽逢桃花林', back: '夹岸数百步' },
                        { id: 'taohuayuan_4', front: '中无杂树', back: '芳草鲜美' },
                        { id: 'taohuayuan_6', front: '渔人甚异之', back: '复前行' },
                        { id: 'taohuayuan_8', front: '林尽水源', back: '便得一山' },
                        { id: 'taohuayuan_9', front: '山有小口', back: '仿佛若有光' },
                        { id: 'taohuayuan_10', front: '便舍船', back: '从口入' },
                        { id: 'taohuayuan_11', front: '初极狭', back: '才通人' },
                        { id: 'taohuayuan_12', front: '复行数十步', back: '豁然开朗' },
                        { id: 'taohuayuan_13', front: '土地平旷', back: '屋舍俨然' },
                        { id: 'taohuayuan_15', front: '阡陌交通', back: '鸡犬相闻' },
                        { id: 'taohuayuan_16', front: '其中往来种作', back: '男女衣着' },
                        { id: 'taohuayuan_18', front: '黄发垂髫', back: '并怡然自乐' }
                    ]
                },
                {
                    type: 'fillBack',
                    title: '整篇填后句',
                    description: '根据前半句填写后半句',
                    autoFull: true
                },
                {
                    type: 'fillFront',
                    title: '整篇填前句',
                    description: '根据后半句填写前半句',
                    autoFull: true
                },
                {
                    type: 'random',
                    title: '随机抽题练习',
                    description: '从本文中随机抽取题目进行练习',
                    randomCount: 18
                }
            ]
        },
        {
            id: 'daxiezhongshu',
            title: '答谢中书书',
            author: '陶弘景',
            content: '山川之美，古来共谈。高峰入云，清流见底。两岸石壁，五色交辉。青林翠竹，四时俱备。晓雾将歇，猿鸟乱鸣；夕日欲颓，沉鳞竞跃。实是欲界之仙都。自康乐以来，未复有能与其奇者。',
            sentences: [
                { id: 'daxiezhongshu_1', front: '山川之美', back: '古来共谈' },
                { id: 'daxiezhongshu_2', front: '高峰入云', back: '清流见底' },
                { id: 'daxiezhongshu_3', front: '两岸石壁', back: '五色交辉' },
                { id: 'daxiezhongshu_4', front: '青林翠竹', back: '四时俱备' },
                { id: 'daxiezhongshu_5', front: '晓雾将歇', back: '猿鸟乱鸣' },
                { id: 'daxiezhongshu_6', front: '夕日欲颓', back: '沉鳞竞跃' },
                { id: 'daxiezhongshu_7', front: '实是欲界之仙都', back: '' },
                { id: 'daxiezhongshu_8', front: '自康乐以来', back: '未复有能与其奇者' }
            ],
            exercises: [
                {
                    type: 'fillBack',
                    title: '山水之美填空',
                    description: '请根据前半句内容，填写后半句',
                    items: [
                        { id: 'daxiezhongshu_1', front: '山川之美', back: '古来共谈' },
                        { id: 'daxiezhongshu_2', front: '高峰入云', back: '清流见底' },
                        { id: 'daxiezhongshu_3', front: '两岸石壁', back: '五色交辉' },
                        { id: 'daxiezhongshu_4', front: '青林翠竹', back: '四时俱备' },
                        { id: 'daxiezhongshu_5', front: '晓雾将歇', back: '猿鸟乱鸣' },
                        { id: 'daxiezhongshu_6', front: '夕日欲颓', back: '沉鳞竞跃' },
                        { id: 'daxiezhongshu_8', front: '自康乐以来', back: '未复有能与其奇者' }
                    ]
                },
                {
                    type: 'fillBack',
                    title: '整篇填后句',
                    description: '根据前半句填写后半句',
                    autoFull: true
                },
                {
                    type: 'fillFront',
                    title: '整篇填前句',
                    description: '根据后半句填写前半句',
                    autoFull: true
                },
                {
                    type: 'random',
                    title: '随机抽题练习',
                    description: '从本文中随机抽取题目进行练习',
                    randomCount: 8
                }
            ]
        },
        {
            id: 'sanxia',
            title: '三峡',
            author: '郦道元',
            content: '自三峡七百里中，两岸连山，略无阙处。重岩叠嶂，隐天蔽日，自非亭午夜分，不见曦月。至于夏水襄陵，沿溯阻绝。或王命急宣，有时朝发白帝，暮到江陵，其间千二百里，虽乘奔御风，不以疾也。春冬之时，则素湍绿潭，回清倒影，绝巘多生怪柏，悬泉瀑布，飞漱其间，清荣峻茂，良多趣味。每至晴初霜旦，林寒涧肃，常有高猿长啸，属引凄异，空谷传响，哀转久绝。故渔者歌曰："巴东三峡巫峡长，猿鸣三声泪沾裳。"',
            sentences: [
                { id: 'sanxia_1', front: '自三峡七百里中', back: '两岸连山' },
                { id: 'sanxia_2', front: '略无阙处', back: '' },
                { id: 'sanxia_3', front: '重岩叠嶂', back: '隐天蔽日' },
                { id: 'sanxia_4', front: '自非亭午夜分', back: '不见曦月' },
                { id: 'sanxia_5', front: '至于夏水襄陵', back: '沿溯阻绝' },
                { id: 'sanxia_6', front: '或王命急宣', back: '有时朝发白帝' },
                { id: 'sanxia_7', front: '暮到江陵', back: '' },
                { id: 'sanxia_8', front: '其间千二百里', back: '虽乘奔御风' },
                { id: 'sanxia_9', front: '不以疾也', back: '' },
                { id: 'sanxia_10', front: '春冬之时', back: '则素湍绿潭' },
                { id: 'sanxia_11', front: '回清倒影', back: '' },
                { id: 'sanxia_12', front: '绝巘多生怪柏', back: '悬泉瀑布' },
                { id: 'sanxia_13', front: '飞漱其间', back: '清荣峻茂' },
                { id: 'sanxia_14', front: '良多趣味', back: '' },
                { id: 'sanxia_15', front: '每至晴初霜旦', back: '林寒涧肃' },
                { id: 'sanxia_16', front: '常有高猿长啸', back: '属引凄异' },
                { id: 'sanxia_17', front: '空谷传响', back: '哀转久绝' },
                { id: 'sanxia_18', front: '故渔者歌曰', back: '巴东三峡巫峡长' },
                { id: 'sanxia_19', front: '猿鸣三声泪沾裳', back: '' }
            ],
            exercises: [
                {
                    type: 'fillBack',
                    title: '三峡风光填空',
                    description: '请根据前半句内容，填写后半句',
                    items: [
                        { id: 'sanxia_1', front: '自三峡七百里中', back: '两岸连山' },
                        { id: 'sanxia_3', front: '重岩叠嶂', back: '隐天蔽日' },
                        { id: 'sanxia_4', front: '自非亭午夜分', back: '不见曦月' },
                        { id: 'sanxia_5', front: '至于夏水襄陵', back: '沿溯阻绝' },
                        { id: 'sanxia_6', front: '或王命急宣', back: '有时朝发白帝' },
                        { id: 'sanxia_8', front: '其间千二百里', back: '虽乘奔御风' },
                        { id: 'sanxia_10', front: '春冬之时', back: '则素湍绿潭' },
                        { id: 'sanxia_12', front: '绝巘多生怪柏', back: '悬泉瀑布' },
                        { id: 'sanxia_13', front: '飞漱其间', back: '清荣峻茂' },
                        { id: 'sanxia_15', front: '每至晴初霜旦', back: '林寒涧肃' },
                        { id: 'sanxia_16', front: '常有高猿长啸', back: '属引凄异' },
                        { id: 'sanxia_17', front: '空谷传响', back: '哀转久绝' },
                        { id: 'sanxia_18', front: '故渔者歌曰', back: '巴东三峡巫峡长' }
                    ]
                },
                {
                    type: 'fillBack',
                    title: '整篇填后句',
                    description: '根据前半句填写后半句',
                    autoFull: true
                },
                {
                    type: 'fillFront',
                    title: '整篇填前句',
                    description: '根据后半句填写前半句',
                    autoFull: true
                },
                {
                    type: 'random',
                    title: '随机抽题练习',
                    description: '从本文中随机抽取题目进行练习',
                    randomCount: 19
                }
            ]
        },
        {
            id: 'mashuo',
            title: '马说',
            author: '韩愈',
            content: '世有伯乐，然后有千里马。千里马常有，而伯乐不常有。故虽有名马，祗辱于奴隶人之手，骈死于槽枥之间，不以千里称也。马之千里者，一食或尽粟一石。食马者不知其能千里而食也。是马也，虽有千里之能，食不饱，力不足，才美不外见，且欲与常马等不可得，安求其能千里也？策之不以其道，食之不能尽其材，鸣之而不能通其意，执策而临之，曰："天下无马！"呜呼！其真无马邪？其真不知马也！',
            sentences: [
                { id: 'mashuo_1', front: '世有伯乐', back: '然后有千里马' },
                { id: 'mashuo_2', front: '千里马常有', back: '而伯乐不常有' },
                { id: 'mashuo_3', front: '故虽有名马', back: '祗辱于奴隶人之手' },
                { id: 'mashuo_4', front: '骈死于槽枥之间', back: '不以千里称也' },
                { id: 'mashuo_5', front: '马之千里者', back: '一食或尽粟一石' },
                { id: 'mashuo_6', front: '食马者不知其能千里而食也', back: '' },
                { id: 'mashuo_7', front: '是马也', back: '虽有千里之能' },
                { id: 'mashuo_8', front: '食不饱', back: '力不足' },
                { id: 'mashuo_9', front: '才美不外见', back: '' },
                { id: 'mashuo_10', front: '且欲与常马等不可得', back: '安求其能千里也' },
                { id: 'mashuo_11', front: '策之不以其道', back: '食之不能尽其材' },
                { id: 'mashuo_12', front: '鸣之而不能通其意', back: '' },
                { id: 'mashuo_13', front: '执策而临之', back: '曰' },
                { id: 'mashuo_14', front: '天下无马', back: '' },
                { id: 'mashuo_15', front: '呜呼', back: '其真无马邪' },
                { id: 'mashuo_16', front: '其真不知马也', back: '' }
            ],
            exercises: [
                {
                    type: 'fillBack',
                    title: '伯乐相马填空',
                    description: '请根据前半句内容，填写后半句',
                    items: [
                        { id: 'mashuo_1', front: '世有伯乐', back: '然后有千里马' },
                        { id: 'mashuo_2', front: '千里马常有', back: '而伯乐不常有' },
                        { id: 'mashuo_3', front: '故虽有名马', back: '祗辱于奴隶人之手' },
                        { id: 'mashuo_4', front: '骈死于槽枥之间', back: '不以千里称也' },
                        { id: 'mashuo_5', front: '马之千里者', back: '一食或尽粟一石' },
                        { id: 'mashuo_7', front: '是马也', back: '虽有千里之能' },
                        { id: 'mashuo_8', front: '食不饱', back: '力不足' },
                        { id: 'mashuo_10', front: '且欲与常马等不可得', back: '安求其能千里也' },
                        { id: 'mashuo_11', front: '策之不以其道', back: '食之不能尽其材' },
                        { id: 'mashuo_13', front: '执策而临之', back: '曰' },
                        { id: 'mashuo_15', front: '呜呼', back: '其真无马邪' }
                    ]
                },
                {
                    type: 'fillBack',
                    title: '整篇填后句',
                    description: '根据前半句填写后半句',
                    autoFull: true
                },
                {
                    type: 'fillFront',
                    title: '整篇填前句',
                    description: '根据后半句填写前半句',
                    autoFull: true
                },
                {
                    type: 'random',
                    title: '随机抽题练习',
                    description: '从本文中随机抽取题目进行练习',
                    randomCount: 16
                }
            ]
        },
        {
            id: 'loushiming',
            title: '陋室铭',
            author: '刘禹锡',
            content: '山不在高，有仙则名。水不在深，有龙则灵。斯是陋室，惟吾德馨。苔痕上阶绿，草色入帘青。谈笑有鸿儒，往来无白丁。可以调素琴，阅金经。无丝竹之乱耳，无案牍之劳形。南阳诸葛庐，西蜀子云亭。孔子云：何陋之有？',
            sentences: [
                { id: 'loushiming_1', front: '山不在高', back: '有仙则名' },
                { id: 'loushiming_2', front: '水不在深', back: '有龙则灵' },
                { id: 'loushiming_3', front: '斯是陋室', back: '惟吾德馨' },
                { id: 'loushiming_4', front: '苔痕上阶绿', back: '草色入帘青' },
                { id: 'loushiming_5', front: '谈笑有鸿儒', back: '往来无白丁' },
                { id: 'loushiming_6', front: '可以调素琴', back: '阅金经' },
                { id: 'loushiming_7', front: '无丝竹之乱耳', back: '无案牍之劳形' },
                { id: 'loushiming_8', front: '南阳诸葛庐', back: '西蜀子云亭' },
                { id: 'loushiming_9', front: '孔子云', back: '何陋之有' }
            ],
            exercises: [
                {
                    type: 'fillBack',
                    title: '陋室不陋填空',
                    description: '请根据前半句内容，填写后半句',
                    items: [
                        { id: 'loushiming_1', front: '山不在高', back: '有仙则名' },
                        { id: 'loushiming_2', front: '水不在深', back: '有龙则灵' },
                        { id: 'loushiming_3', front: '斯是陋室', back: '惟吾德馨' },
                        { id: 'loushiming_4', front: '苔痕上阶绿', back: '草色入帘青' },
                        { id: 'loushiming_5', front: '谈笑有鸿儒', back: '往来无白丁' },
                        { id: 'loushiming_6', front: '可以调素琴', back: '阅金经' },
                        { id: 'loushiming_7', front: '无丝竹之乱耳', back: '无案牍之劳形' },
                        { id: 'loushiming_8', front: '南阳诸葛庐', back: '西蜀子云亭' },
                        { id: 'loushiming_9', front: '孔子云', back: '何陋之有' }
                    ]
                },
                {
                    type: 'fillBack',
                    title: '整篇填后句',
                    description: '根据前半句填写后半句',
                    autoFull: true
                },
                {
                    type: 'fillFront',
                    title: '整篇填前句',
                    description: '根据后半句填写前半句',
                    autoFull: true
                },
                {
                    type: 'random',
                    title: '随机抽题练习',
                    description: '从本文中随机抽取题目进行练习',
                    randomCount: 9
                }
            ]
        },
        {
            id: 'xiaoshitan',
            title: '小石潭记',
            author: '柳宗元',
            content: '从小丘西行百二十步，隔篁竹，闻水声，如鸣佩环，心乐之。伐竹取道，下见小潭，水尤清冽。全石以为底，近岸，卷石底以出，为坻，为屿，为嵁，为岩。青树翠蔓，蒙络摇缀，参差披拂。潭中鱼可百许头，皆若空游无所依。日光下澈，影布石上，佁然不动；俶尔远逝，往来翕忽。似与游者相乐。潭西南而望，斗折蛇行，明灭可见。其岸势犬牙差互，不可知其源。坐潭上，四面竹树环合，寂寥无人，凄神寒骨，悄怆幽邃。以其境过清，不可久居，乃记之而去。',
            sentences: [
                { id: 'xiaoshitan_1', front: '从小丘西行百二十步', back: '隔篁竹' },
                { id: 'xiaoshitan_2', front: '闻水声', back: '如鸣佩环' },
                { id: 'xiaoshitan_3', front: '心乐之', back: '' },
                { id: 'xiaoshitan_4', front: '伐竹取道', back: '下见小潭' },
                { id: 'xiaoshitan_5', front: '水尤清冽', back: '' },
                { id: 'xiaoshitan_6', front: '全石以为底', back: '近岸' },
                { id: 'xiaoshitan_7', front: '卷石底以出', back: '为坻' },
                { id: 'xiaoshitan_8', front: '为屿', back: '为嵁' },
                { id: 'xiaoshitan_9', front: '为岩', back: '' },
                { id: 'xiaoshitan_10', front: '青树翠蔓', back: '蒙络摇缀' },
                { id: 'xiaoshitan_11', front: '参差披拂', back: '' },
                { id: 'xiaoshitan_12', front: '潭中鱼可百许头', back: '皆若空游无所依' },
                { id: 'xiaoshitan_13', front: '日光下澈', back: '影布石上' },
                { id: 'xiaoshitan_14', front: '佁然不动', back: '' },
                { id: 'xiaoshitan_15', front: '俶尔远逝', back: '往来翕忽' },
                { id: 'xiaoshitan_16', front: '似与游者相乐', back: '' },
                { id: 'xiaoshitan_17', front: '潭西南而望', back: '斗折蛇行' },
                { id: 'xiaoshitan_18', front: '明灭可见', back: '' },
                { id: 'xiaoshitan_19', front: '其岸势犬牙差互', back: '不可知其源' },
                { id: 'xiaoshitan_20', front: '坐潭上', back: '四面竹树环合' },
                { id: 'xiaoshitan_21', front: '寂寥无人', back: '凄神寒骨' },
                { id: 'xiaoshitan_22', front: '悄怆幽邃', back: '' },
                { id: 'xiaoshitan_23', front: '以其境过清', back: '不可久居' },
                { id: 'xiaoshitan_24', front: '乃记之而去', back: '' }
            ],
            exercises: [
                {
                    type: 'fillBack',
                    title: '小石潭景填空',
                    description: '请根据前半句内容，填写后半句',
                    items: [
                        { id: 'xiaoshitan_1', front: '从小丘西行百二十步', back: '隔篁竹' },
                        { id: 'xiaoshitan_2', front: '闻水声', back: '如鸣佩环' },
                        { id: 'xiaoshitan_4', front: '伐竹取道', back: '下见小潭' },
                        { id: 'xiaoshitan_6', front: '全石以为底', back: '近岸' },
                        { id: 'xiaoshitan_7', front: '卷石底以出', back: '为坻' },
                        { id: 'xiaoshitan_8', front: '为屿', back: '为嵁' },
                        { id: 'xiaoshitan_10', front: '青树翠蔓', back: '蒙络摇缀' },
                        { id: 'xiaoshitan_12', front: '潭中鱼可百许头', back: '皆若空游无所依' },
                        { id: 'xiaoshitan_13', front: '日光下澈', back: '影布石上' },
                        { id: 'xiaoshitan_15', front: '俶尔远逝', back: '往来翕忽' },
                        { id: 'xiaoshitan_17', front: '潭西南而望', back: '斗折蛇行' },
                        { id: 'xiaoshitan_19', front: '其岸势犬牙差互', back: '不可知其源' },
                        { id: 'xiaoshitan_20', front: '坐潭上', back: '四面竹树环合' },
                        { id: 'xiaoshitan_21', front: '寂寥无人', back: '凄神寒骨' },
                        { id: 'xiaoshitan_23', front: '以其境过清', back: '不可久居' }
                    ]
                },
                {
                    type: 'fillBack',
                    title: '整篇填后句',
                    description: '根据前半句填写后半句',
                    autoFull: true
                },
                {
                    type: 'fillFront',
                    title: '整篇填前句',
                    description: '根据后半句填写前半句',
                    autoFull: true
                },
                {
                    type: 'random',
                    title: '随机抽题练习',
                    description: '从本文中随机抽取题目进行练习',
                    randomCount: 24
                }
            ]
        },
        {
            id: 'yueyanglou',
            title: '岳阳楼记',
            author: '范仲淹',
            content: '庆历四年春，滕子京谪守巴陵郡。越明年，政通人和，百废具兴。乃重修岳阳楼，增其旧制，刻唐贤今人诗赋于其上。属予作文以记之。予观夫巴陵胜状，在洞庭一湖。衔远山，吞长江，浩浩汤汤，横无际涯；朝晖夕阴，气象万千。此则岳阳楼之大观也，前人之述备矣。然则北通巫峡，南极潇湘，迁客骚人，多会于此，览物之情，得无异乎？',
            sentences: [
                { id: 'yueyanglou_1', front: '庆历四年春', back: '滕子京谪守巴陵郡' },
                { id: 'yueyanglou_2', front: '越明年', back: '政通人和' },
                { id: 'yueyanglou_3', front: '百废具兴', back: '' },
                { id: 'yueyanglou_4', front: '乃重修岳阳楼', back: '增其旧制' },
                { id: 'yueyanglou_5', front: '刻唐贤今人诗赋于其上', back: '' },
                { id: 'yueyanglou_6', front: '属予作文以记之', back: '' },
                { id: 'yueyanglou_7', front: '予观夫巴陵胜状', back: '在洞庭一湖' },
                { id: 'yueyanglou_8', front: '衔远山', back: '吞长江' },
                { id: 'yueyanglou_9', front: '浩浩汤汤', back: '横无际涯' },
                { id: 'yueyanglou_10', front: '朝晖夕阴', back: '气象万千' },
                { id: 'yueyanglou_11', front: '此则岳阳楼之大观也', back: '前人之述备矣' },
                { id: 'yueyanglou_12', front: '然则北通巫峡', back: '南极潇湘' },
                { id: 'yueyanglou_13', front: '迁客骚人', back: '多会于此' },
                { id: 'yueyanglou_14', front: '览物之情', back: '得无异乎' }
            ],
            exercises: [
                {
                    type: 'fillBack',
                    title: '岳阳楼记填空',
                    description: '请根据前半句内容，填写后半句',
                    items: [
                        { id: 'yueyanglou_1', front: '庆历四年春', back: '滕子京谪守巴陵郡' },
                        { id: 'yueyanglou_2', front: '越明年', back: '政通人和' },
                        { id: 'yueyanglou_4', front: '乃重修岳阳楼', back: '增其旧制' },
                        { id: 'yueyanglou_7', front: '予观夫巴陵胜状', back: '在洞庭一湖' },
                        { id: 'yueyanglou_8', front: '衔远山', back: '吞长江' },
                        { id: 'yueyanglou_9', front: '浩浩汤汤', back: '横无际涯' },
                        { id: 'yueyanglou_10', front: '朝晖夕阴', back: '气象万千' },
                        { id: 'yueyanglou_11', front: '此则岳阳楼之大观也', back: '前人之述备矣' },
                        { id: 'yueyanglou_12', front: '然则北通巫峡', back: '南极潇湘' },
                        { id: 'yueyanglou_13', front: '迁客骚人', back: '多会于此' },
                        { id: 'yueyanglou_14', front: '览物之情', back: '得无异乎' }
                    ]
                },
                {
                    type: 'fillBack',
                    title: '整篇填后句',
                    description: '根据前半句填写后半句',
                    autoFull: true
                },
                {
                    type: 'fillFront',
                    title: '整篇填前句',
                    description: '根据后半句填写前半句',
                    autoFull: true
                },
                {
                    type: 'random',
                    title: '随机抽题练习',
                    description: '从本文中随机抽取题目进行练习',
                    randomCount: 14
                }
            ]
        },
        {
            id: 'zuiongting',
            title: '醉翁亭记',
            author: '欧阳修',
            content: '环滁皆山也。其西南诸峰，林壑尤美，望之蔚然而深秀者，琅琊也。山行六七里，渐闻水声潺潺而泻出于两峰之间者，酿泉也。峰回路转，有亭翼然临于泉上者，醉翁亭也。作亭者谁？山之僧智仙也。名之者谁？太守自谓也。太守与客来饮于此，饮少辄醉，而年又最高，故自号曰醉翁也。醉翁之意不在酒，在乎山水之间也。山水之乐，得之心而寓之酒也。',
            sentences: [
                { id: 'zuiongting_1', front: '环滁皆山也', back: '' },
                { id: 'zuiongting_2', front: '其西南诸峰', back: '林壑尤美' },
                { id: 'zuiongting_3', front: '望之蔚然而深秀者', back: '琅琊也' },
                { id: 'zuiongting_4', front: '山行六七里', back: '渐闻水声潺潺' },
                { id: 'zuiongting_5', front: '而泻出于两峰之间者', back: '酿泉也' },
                { id: 'zuiongting_6', front: '峰回路转', back: '有亭翼然临于泉上者' },
                { id: 'zuiongting_7', front: '醉翁亭也', back: '' },
                { id: 'zuiongting_8', front: '作亭者谁', back: '山之僧智仙也' },
                { id: 'zuiongting_9', front: '名之者谁', back: '太守自谓也' },
                { id: 'zuiongting_10', front: '太守与客来饮于此', back: '饮少辄醉' },
                { id: 'zuiongting_11', front: '而年又最高', back: '故自号曰醉翁也' },
                { id: 'zuiongting_12', front: '醉翁之意不在酒', back: '在乎山水之间也' },
                { id: 'zuiongting_13', front: '山水之乐', back: '得之心而寓之酒也' }
            ],
            exercises: [
                {
                    type: 'fillBack',
                    title: '醉翁亭记填空',
                    description: '请根据前半句内容，填写后半句',
                    items: [
                        { id: 'zuiongting_2', front: '其西南诸峰', back: '林壑尤美' },
                        { id: 'zuiongting_3', front: '望之蔚然而深秀者', back: '琅琊也' },
                        { id: 'zuiongting_4', front: '山行六七里', back: '渐闻水声潺潺' },
                        { id: 'zuiongting_5', front: '而泻出于两峰之间者', back: '酿泉也' },
                        { id: 'zuiongting_6', front: '峰回路转', back: '有亭翼然临于泉上者' },
                        { id: 'zuiongting_8', front: '作亭者谁', back: '山之僧智仙也' },
                        { id: 'zuiongting_9', front: '名之者谁', back: '太守自谓也' },
                        { id: 'zuiongting_10', front: '太守与客来饮于此', back: '饮少辄醉' },
                        { id: 'zuiongting_11', front: '而年又最高', back: '故自号曰醉翁也' },
                        { id: 'zuiongting_12', front: '醉翁之意不在酒', back: '在乎山水之间也' },
                        { id: 'zuiongting_13', front: '山水之乐', back: '得之心而寓之酒也' }
                    ]
                },
                {
                    type: 'fillBack',
                    title: '整篇填后句',
                    description: '根据前半句填写后半句',
                    autoFull: true
                },
                {
                    type: 'fillFront',
                    title: '整篇填前句',
                    description: '根据后半句填写前半句',
                    autoFull: true
                },
                {
                    type: 'random',
                    title: '随机抽题练习',
                    description: '从本文中随机抽取题目进行练习',
                    randomCount: 13
                }
            ]
        },
        {
            id: 'ailianshuo',
            title: '爱莲说',
            author: '周敦颐',
            content: '水陆草木之花，可爱者甚蕃。晋陶渊明独爱菊；自李唐来，世人盛爱牡丹；予独爱莲之出淤泥而不染，濯清涟而不妖，中通外直，不蔓不枝，香远益清，亭亭净植，可远观而不可亵玩焉。予谓菊，花之隐逸者也；牡丹，花之富贵者也；莲，花之君子者也。噫！菊之爱，陶后鲜有闻。莲之爱，同予者何人？牡丹之爱，宜乎众矣！',
            sentences: [
                { id: 'ailianshuo_1', front: '水陆草木之花', back: '可爱者甚蕃' },
                { id: 'ailianshuo_2', front: '晋陶渊明独爱菊', back: '' },
                { id: 'ailianshuo_3', front: '自李唐来', back: '世人盛爱牡丹' },
                { id: 'ailianshuo_4', front: '予独爱莲之出淤泥而不染', back: '濯清涟而不妖' },
                { id: 'ailianshuo_5', front: '中通外直', back: '不蔓不枝' },
                { id: 'ailianshuo_6', front: '香远益清', back: '亭亭净植' },
                { id: 'ailianshuo_7', front: '可远观而不可亵玩焉', back: '' },
                { id: 'ailianshuo_8', front: '予谓菊', back: '花之隐逸者也' },
                { id: 'ailianshuo_9', front: '牡丹', back: '花之富贵者也' },
                { id: 'ailianshuo_10', front: '莲', back: '花之君子者也' },
                { id: 'ailianshuo_11', front: '噫', back: '菊之爱' },
                { id: 'ailianshuo_12', front: '陶后鲜有闻', back: '' },
                { id: 'ailianshuo_13', front: '莲之爱', back: '同予者何人' },
                { id: 'ailianshuo_14', front: '牡丹之爱', back: '宜乎众矣' }
            ],
            exercises: [
                {
                    type: 'fillBack',
                    title: '爱莲品格填空',
                    description: '请根据前半句内容，填写后半句',
                    items: [
                        { id: 'ailianshuo_1', front: '水陆草木之花', back: '可爱者甚蕃' },
                        { id: 'ailianshuo_3', front: '自李唐来', back: '世人盛爱牡丹' },
                        { id: 'ailianshuo_4', front: '予独爱莲之出淤泥而不染', back: '濯清涟而不妖' },
                        { id: 'ailianshuo_5', front: '中通外直', back: '不蔓不枝' },
                        { id: 'ailianshuo_6', front: '香远益清', back: '亭亭净植' },
                        { id: 'ailianshuo_8', front: '予谓菊', back: '花之隐逸者也' },
                        { id: 'ailianshuo_9', front: '牡丹', back: '花之富贵者也' },
                        { id: 'ailianshuo_10', front: '莲', back: '花之君子者也' },
                        { id: 'ailianshuo_11', front: '噫', back: '菊之爱' },
                        { id: 'ailianshuo_13', front: '莲之爱', back: '同予者何人' },
                        { id: 'ailianshuo_14', front: '牡丹之爱', back: '宜乎众矣' }
                    ]
                },
                {
                    type: 'fillBack',
                    title: '整篇填后句',
                    description: '根据前半句填写后半句',
                    autoFull: true
                },
                {
                    type: 'fillFront',
                    title: '整篇填前句',
                    description: '根据后半句填写前半句',
                    autoFull: true
                },
                {
                    type: 'random',
                    title: '随机抽题练习',
                    description: '从本文中随机抽取题目进行练习',
                    randomCount: 14
                }
            ]
        },
        {
            id: 'jichengtiangsi',
            title: '记承天寺夜游',
            author: '苏轼',
            content: '元丰六年十月十二日夜，解衣欲睡，月色入户，欣然起行。念无与为乐者，遂至承天寺寻张怀民。怀民亦未寝，相与步于中庭。庭下如积水空明，水中藻荇交横，盖竹柏影也。何夜无月？何处无竹柏？但少闲人如吾两人者耳。',
            sentences: [
                { id: 'jichengtiangsi_1', front: '元丰六年十月十二日夜', back: '解衣欲睡' },
                { id: 'jichengtiangsi_2', front: '月色入户', back: '欣然起行' },
                { id: 'jichengtiangsi_3', front: '念无与为乐者', back: '遂至承天寺寻张怀民' },
                { id: 'jichengtiangsi_4', front: '怀民亦未寝', back: '相与步于中庭' },
                { id: 'jichengtiangsi_5', front: '庭下如积水空明', back: '水中藻荇交横' },
                { id: 'jichengtiangsi_6', front: '盖竹柏影也', back: '' },
                { id: 'jichengtiangsi_7', front: '何夜无月', back: '何处无竹柏' },
                { id: 'jichengtiangsi_8', front: '但少闲人如吾两人者耳', back: '' }
            ],
            exercises: [
                {
                    type: 'fillBack',
                    title: '夜游雅趣填空',
                    description: '请根据前半句内容，填写后半句',
                    items: [
                        { id: 'jichengtiangsi_1', front: '元丰六年十月十二日夜', back: '解衣欲睡' },
                        { id: 'jichengtiangsi_2', front: '月色入户', back: '欣然起行' },
                        { id: 'jichengtiangsi_3', front: '念无与为乐者', back: '遂至承天寺寻张怀民' },
                        { id: 'jichengtiangsi_4', front: '怀民亦未寝', back: '相与步于中庭' },
                        { id: 'jichengtiangsi_5', front: '庭下如积水空明', back: '水中藻荇交横' },
                        { id: 'jichengtiangsi_7', front: '何夜无月', back: '何处无竹柏' }
                    ]
                },
                {
                    type: 'fillBack',
                    title: '整篇填后句',
                    description: '根据前半句填写后半句',
                    autoFull: true
                },
                {
                    type: 'fillFront',
                    title: '整篇填前句',
                    description: '根据后半句填写前半句',
                    autoFull: true
                },
                {
                    type: 'random',
                    title: '随机抽题练习',
                    description: '从本文中随机抽取题目进行练习',
                    randomCount: 8
                }
            ]
        },
        {
            id: 'songdongyang',
            title: '送东阳马生序(节选)',
            author: '宋濂',
            content: '余幼时即嗜学。家贫，无从致书以观，每假借于藏书之家，手自笔录，计日以还。天大寒，砚冰坚，手指不可屈伸，弗之怠。录毕，走送之，不敢稍逾约。以是人多以书假余，余因得遍观群书。既加冠，益慕圣贤之道。又患无硕师名人与游，尝趋百里外，从乡之先达执经叩问。先达德隆望尊，门人弟子填其室，未尝稍降辞色。余立侍左右，援疑质理，俯身倾耳以请；或遇其叱咄，色愈恭，礼愈至，不敢出一言以复；俟其欣悦，则又请焉。故余虽愚，卒获有所闻。',
            sentences: [
                { id: 'songdongyang_1', front: '余幼时即嗜学', back: '' },
                { id: 'songdongyang_2', front: '家贫', back: '无从致书以观' },
                { id: 'songdongyang_3', front: '每假借于藏书之家', back: '手自笔录' },
                { id: 'songdongyang_4', front: '计日以还', back: '' },
                { id: 'songdongyang_5', front: '天大寒', back: '砚冰坚' },
                { id: 'songdongyang_6', front: '手指不可屈伸', back: '弗之怠' },
                { id: 'songdongyang_7', front: '录毕', back: '走送之' },
                { id: 'songdongyang_8', front: '不敢稍逾约', back: '' },
                { id: 'songdongyang_9', front: '以是人多以书假余', back: '余因得遍观群书' },
                { id: 'songdongyang_10', front: '既加冠', back: '益慕圣贤之道' },
                { id: 'songdongyang_11', front: '又患无硕师名人与游', back: '尝趋百里外' },
                { id: 'songdongyang_12', front: '从乡之先达执经叩问', back: '' },
                { id: 'songdongyang_13', front: '先达德隆望尊', back: '门人弟子填其室' },
                { id: 'songdongyang_14', front: '未尝稍降辞色', back: '' },
                { id: 'songdongyang_15', front: '余立侍左右', back: '援疑质理' },
                { id: 'songdongyang_16', front: '俯身倾耳以请', back: '' },
                { id: 'songdongyang_17', front: '或遇其叱咄', back: '色愈恭' },
                { id: 'songdongyang_18', front: '礼愈至', back: '不敢出一言以复' },
                { id: 'songdongyang_19', front: '俟其欣悦', back: '则又请焉' },
                { id: 'songdongyang_20', front: '故余虽愚', back: '卒获有所闻' }
            ],
            exercises: [
                {
                    type: 'fillBack',
                    title: '求学精神填空',
                    description: '请根据前半句内容，填写后半句',
                    items: [
                        { id: 'songdongyang_2', front: '家贫', back: '无从致书以观' },
                        { id: 'songdongyang_3', front: '每假借于藏书之家', back: '手自笔录' },
                        { id: 'songdongyang_5', front: '天大寒', back: '砚冰坚' },
                        { id: 'songdongyang_6', front: '手指不可屈伸', back: '弗之怠' },
                        { id: 'songdongyang_7', front: '录毕', back: '走送之' },
                        { id: 'songdongyang_9', front: '以是人多以书假余', back: '余因得遍观群书' },
                        { id: 'songdongyang_10', front: '既加冠', back: '益慕圣贤之道' },
                        { id: 'songdongyang_11', front: '又患无硕师名人与游', back: '尝趋百里外' },
                        { id: 'songdongyang_13', front: '先达德隆望尊', back: '门人弟子填其室' },
                        { id: 'songdongyang_15', front: '余立侍左右', back: '援疑质理' },
                        { id: 'songdongyang_17', front: '或遇其叱咄', back: '色愈恭' },
                        { id: 'songdongyang_18', front: '礼愈至', back: '不敢出一言以复' },
                        { id: 'songdongyang_19', front: '俟其欣悦', back: '则又请焉' },
                        { id: 'songdongyang_20', front: '故余虽愚', back: '卒获有所闻' }
                    ]
                },
                {
                    type: 'fillBack',
                    title: '整篇填后句',
                    description: '根据前半句填写后半句',
                    autoFull: true
                },
                {
                    type: 'fillFront',
                    title: '整篇填前句',
                    description: '根据后半句填写前半句',
                    autoFull: true
                },
                {
                    type: 'random',
                    title: '随机抽题练习',
                    description: '从本文中随机抽取题目进行练习',
                    randomCount: 20
                }
            ]
        },
        {
            id: 'huxinting',
            title: '湖心亭看雪',
            author: '张岱',
            content: '崇祯五年十二月，余住西湖。大雪三日，湖中人鸟声俱绝。是日更定矣，余拏一小舟，拥毳衣炉火，独往湖心亭看雪。雾凇沆砀，天与云与山与水，上下一白。湖上影子，惟长堤一痕、湖心亭一点、与余舟一芥，舟中人两三粒而已。到亭上，有两人铺毡对坐，一童子烧酒炉正沸。见余，大喜曰："湖中焉得更有此人！"拉余同饮。余强饮三大白而别。问其姓氏，是金陵人，客此。及下船，舟子喃喃曰："莫说相公痴，更有痴似相公者！"',
            sentences: [
                { id: 'huxinting_1', front: '崇祯五年十二月', back: '余住西湖' },
                { id: 'huxinting_2', front: '大雪三日', back: '湖中人鸟声俱绝' },
                { id: 'huxinting_3', front: '是日更定矣', back: '余拏一小舟' },
                { id: 'huxinting_4', front: '拥毳衣炉火', back: '独往湖心亭看雪' },
                { id: 'huxinting_5', front: '雾凇沆砀', back: '天与云与山与水' },
                { id: 'huxinting_6', front: '上下一白', back: '' },
                { id: 'huxinting_7', front: '湖上影子', back: '惟长堤一痕' },
                { id: 'huxinting_8', front: '湖心亭一点', back: '与余舟一芥' },
                { id: 'huxinting_9', front: '舟中人两三粒而已', back: '' },
                { id: 'huxinting_10', front: '到亭上', back: '有两人铺毡对坐' },
                { id: 'huxinting_11', front: '一童子烧酒炉正沸', back: '' },
                { id: 'huxinting_12', front: '见余', back: '大喜曰' },
                { id: 'huxinting_13', front: '湖中焉得更有此人', back: '' },
                { id: 'huxinting_14', front: '拉余同饮', back: '' },
                { id: 'huxinting_15', front: '余强饮三大白而别', back: '' },
                { id: 'huxinting_16', front: '问其姓氏', back: '是金陵人' },
                { id: 'huxinting_17', front: '客此', back: '' },
                { id: 'huxinting_18', front: '及下船', back: '舟子喃喃曰' },
                { id: 'huxinting_19', front: '莫说相公痴', back: '更有痴似相公者' }
            ],
            exercises: [
                {
                    type: 'fillBack',
                    title: '湖心亭雪景填空',
                    description: '请根据前半句内容，填写后半句',
                    items: [
                        { id: 'huxinting_1', front: '崇祯五年十二月', back: '余住西湖' },
                        { id: 'huxinting_2', front: '大雪三日', back: '湖中人鸟声俱绝' },
                        { id: 'huxinting_3', front: '是日更定矣', back: '余拏一小舟' },
                        { id: 'huxinting_4', front: '拥毳衣炉火', back: '独往湖心亭看雪' },
                        { id: 'huxinting_5', front: '雾凇沆砀', back: '天与云与山与水' },
                        { id: 'huxinting_7', front: '湖上影子', back: '惟长堤一痕' },
                        { id: 'huxinting_8', front: '湖心亭一点', back: '与余舟一芥' },
                        { id: 'huxinting_10', front: '到亭上', back: '有两人铺毡对坐' },
                        { id: 'huxinting_12', front: '见余', back: '大喜曰' },
                        { id: 'huxinting_16', front: '问其姓氏', back: '是金陵人' },
                        { id: 'huxinting_18', front: '及下船', back: '舟子喃喃曰' },
                        { id: 'huxinting_19', front: '莫说相公痴', back: '更有痴似相公者' }
                    ]
                },
                {
                    type: 'fillBack',
                    title: '整篇填后句',
                    description: '根据前半句填写后半句',
                    autoFull: true
                },
                {
                    type: 'fillFront',
                    title: '整篇填前句',
                    description: '根据后半句填写前半句',
                    autoFull: true
                },
                {
                    type: 'random',
                    title: '随机抽题练习',
                    description: '从本文中随机抽取题目进行练习',
                    randomCount: 19
                }
            ]
        },
        {
            id: 'fugui',
            title: '富贵不能淫',
            author: '孟子',
            content: '景春曰："公孙衍、张仪岂不诚大丈夫哉？一怒而诸侯惧，安居而天下熄。"孟子曰："是焉得为大丈夫乎？子未学礼乎？丈夫之冠也，父命之；女子之嫁也，母命之，往送之门，戒之曰：往之女家,必敬必戒,无违夫子! 以顺为正者，妾妇之道也。居天下之广居，立天下之正位，行天下之大道。得志，与民由之；不得志，独行其道。富贵不能淫，贫贱不能移，威武不能屈。此之谓大丈夫。"',
            sentences: [
                { id: 'fugui_1', front: '景春曰', back: '公孙衍' },
                { id: 'fugui_2', front: '张仪岂不诚大丈夫哉', back: '' },
                { id: 'fugui_3', front: '一怒而诸侯惧', back: '安居而天下熄' },
                { id: 'fugui_4', front: '孟子曰', back: '是焉得为大丈夫乎' },
                { id: 'fugui_5', front: '子未学礼乎', back: '' },
                { id: 'fugui_6', front: '丈夫之冠也', back: '父命之' },
                { id: 'fugui_7', front: '女子之嫁也', back: '母命之' },
                { id: 'fugui_8', front: '往送之门', back: '戒之曰' },
                { id: 'fugui_9', front: '往之女家', back: '必敬必戒' },
                { id: 'fugui_10', front: '无违夫子', back: '' },
                { id: 'fugui_11', front: '以顺为正者', back: '妾妇之道也' },
                { id: 'fugui_12', front: '居天下之广居', back: '立天下之正位' },
                { id: 'fugui_13', front: '行天下之大道', back: '' },
                { id: 'fugui_14', front: '得志', back: '与民由之' },
                { id: 'fugui_15', front: '不得志', back: '独行其道' },
                { id: 'fugui_16', front: '富贵不能淫', back: '贫贱不能移' },
                { id: 'fugui_17', front: '威武不能屈', back: '' },
                { id: 'fugui_18', front: '此之谓大丈夫', back: '' }
            ],
            exercises: [
                {
                    type: 'fillBack',
                    title: '大丈夫品格填空',
                    description: '请根据前半句内容，填写后半句',
                    items: [
                        { id: 'fugui_1', front: '景春曰', back: '公孙衍' },
                        { id: 'fugui_3', front: '一怒而诸侯惧', back: '安居而天下熄' },
                        { id: 'fugui_4', front: '孟子曰', back: '是焉得为大丈夫乎' },
                        { id: 'fugui_6', front: '丈夫之冠也', back: '父命之' },
                        { id: 'fugui_7', front: '女子之嫁也', back: '母命之' },
                        { id: 'fugui_8', front: '往送之门', back: '戒之曰' },
                        { id: 'fugui_9', front: '往之女家', back: '必敬必戒' },
                        { id: 'fugui_11', front: '以顺为正者', back: '妾妇之道也' },
                        { id: 'fugui_12', front: '居天下之广居', back: '立天下之正位' },
                        { id: 'fugui_13', front: '行天下之大道', back: '' },
                        { id: 'fugui_14', front: '得志', back: '与民由之' },
                        { id: 'fugui_15', front: '不得志', back: '独行其道' },
                        { id: 'fugui_16', front: '富贵不能淫', back: '贫贱不能移' },
                        { id: 'fugui_17', front: '威武不能屈', back: '' }
                    ]
                },
                {
                    type: 'fillBack',
                    title: '整篇填后句',
                    description: '根据前半句填写后半句',
                    autoFull: true
                },
                {
                    type: 'fillFront',
                    title: '整篇填前句',
                    description: '根据后半句填写前半句',
                    autoFull: true
                },
                {
                    type: 'random',
                    title: '随机抽题练习',
                    description: '从本文中随机抽取题目进行练习',
                    randomCount: 18
                }
            ]
        },
        {
            id: '01_quanxue',
            title: '01. 劝学',
            author: '荀子',
            content: '君子曰：学不可以已。青，取之于蓝，而青于蓝；冰，水为之，而寒于水。木直中绳，輮以为轮，其曲中规。虽有槁暴，不复挺者，輮使之然也。故木受绳则直，金就砺则利，君子博学而日参省乎己，则知明而行无过矣。',
            sentences: [
                { id: '01_quanxue_1', front: '君子曰：学不可以已', back: '' },
                { id: '01_quanxue_2', front: '青，取之于蓝', back: '而青于蓝' },
                { id: '01_quanxue_3', front: '冰，水为之', back: '而寒于水' },
                { id: '01_quanxue_4', front: '木直中绳', back: '輮以为轮' },
                { id: '01_quanxue_5', front: '其曲中规', back: '' },
                { id: '01_quanxue_6', front: '虽有槁暴', back: '不复挺者' },
                { id: '01_quanxue_7', front: '輮使之然也', back: '' },
                { id: '01_quanxue_8', front: '故木受绳则直', back: '金就砺则利' },
                { id: '01_quanxue_9', front: '君子博学而日参省乎己', back: '则知明而行无过矣' }
            ],
            exercises: [
                {
                    type: 'fillBack',
                    title: '经典名句填空',
                    description: '请根据前半句内容，填写后半句',
                    items: [
                        { id: '01_quanxue_2', front: '青，取之于蓝', back: '而青于蓝' },
                        { id: '01_quanxue_3', front: '冰，水为之', back: '而寒于水' },
                        { id: '01_quanxue_4', front: '木直中绳', back: '輮以为轮' },
                        { id: '01_quanxue_8', front: '故木受绳则直', back: '金就砺则利' },
                        { id: '01_quanxue_9', front: '君子博学而日参省乎己', back: '则知明而行无过矣' }
                    ]
                },
                {
                    type: 'fillBack',
                    title: '整篇填后句',
                    description: '根据前半句填写后半句',
                    autoFull: true
                },
                {
                    type: 'fillFront',
                    title: '整篇填前句',
                    description: '根据后半句填写前半句',
                    autoFull: true
                },
                {
                    type: 'random',
                    title: '随机抽题练习',
                    description: '从本文中随机抽取题目进行练习',
                    randomCount: 9
                }
            ]
        },
        {
            id: '02_xiaoyaoyou',
            title: '02. 逍遥游',
            author: '庄子',
            content: '北冥有鱼，其名为鲲。鲲之大，不知其几千里也。化而为鸟，其名为鹏。鹏之背，不知其几千里也。怒而飞，其翼若垂天之云。是鸟也，海运则将徙于南冥。南冥者，天池也。',
            sentences: [
                { id: '02_xiaoyaoyou_1', front: '北冥有鱼', back: '其名为鲲' },
                { id: '02_xiaoyaoyou_2', front: '鲲之大', back: '不知其几千里也' },
                { id: '02_xiaoyaoyou_3', front: '化而为鸟', back: '其名为鹏' },
                { id: '02_xiaoyaoyou_4', front: '鹏之背', back: '不知其几千里也' },
                { id: '02_xiaoyaoyou_5', front: '怒而飞', back: '其翼若垂天之云' },
                { id: '02_xiaoyaoyou_6', front: '是鸟也', back: '海运则将徙于南冥' },
                { id: '02_xiaoyaoyou_7', front: '南冥者', back: '天池也' }
            ],
            exercises: [
                {
                    type: 'fillBack',
                    title: '意境理解填空',
                    description: '请根据前半句内容，填写后半句',
                    items: [
                        { id: '02_xiaoyaoyou_1', front: '北冥有鱼', back: '其名为鲲' },
                        { id: '02_xiaoyaoyou_2', front: '鲲之大', back: '不知其几千里也' },
                        { id: '02_xiaoyaoyou_3', front: '化而为鸟', back: '其名为鹏' },
                        { id: '02_xiaoyaoyou_5', front: '怒而飞', back: '其翼若垂天之云' },
                        { id: '02_xiaoyaoyou_6', front: '是鸟也', back: '海运则将徙于南冥' },
                        { id: '02_xiaoyaoyou_7', front: '南冥者', back: '天池也' }
                    ]
                },
                {
                    type: 'fillBack',
                    title: '整篇填后句',
                    description: '根据前半句填写后半句',
                    autoFull: true
                },
                {
                    type: 'fillFront',
                    title: '整篇填前句',
                    description: '根据后半句填写前半句',
                    autoFull: true
                },
                {
                    type: 'random',
                    title: '随机抽题练习',
                    description: '从本文中随机抽取题目进行练习',
                    randomCount: 7
                }
            ]
        },
        {
            id: '03_shishuo',
            title: '03. 师说',
            author: '韩愈',
            content: '古之学者必有师。师者，所以传道受业解惑也。人非生而知之者，孰能无惑？惑而不从师，其为惑也，终不解矣。生乎吾前，其闻道也固先乎吾，吾从而师之；生乎吾后，其闻道也亦先乎吾，吾从而师之。吾师道也，夫庸知其年之先后生于吾乎？是故无贵无贱，无长无少，道之所存，师之所存也。',
            sentences: [
                { id: '03_shishuo_1', front: '古之学者必有师', back: '' },
                { id: '03_shishuo_2', front: '师者', back: '所以传道受业解惑也' },
                { id: '03_shishuo_3', front: '人非生而知之者', back: '孰能无惑' },
                { id: '03_shishuo_4', front: '惑而不从师', back: '其为惑也' },
                { id: '03_shishuo_5', front: '终不解矣', back: '' },
                { id: '03_shishuo_6', front: '生乎吾前', back: '其闻道也固先乎吾' },
                { id: '03_shishuo_7', front: '吾从而师之', back: '' },
                { id: '03_shishuo_8', front: '生乎吾后', back: '其闻道也亦先乎吾' },
                { id: '03_shishuo_9', front: '吾从而师之', back: '' },
                { id: '03_shishuo_10', front: '吾师道也', back: '夫庸知其年之先后生于吾乎' },
                { id: '03_shishuo_11', front: '是故无贵无贱', back: '无长无少' },
                { id: '03_shishuo_12', front: '道之所存', back: '师之所存也' }
            ],
            exercises: [
                {
                    type: 'fillBack',
                    title: '师道精神填空',
                    description: '请根据前半句内容，填写后半句',
                    items: [
                        { id: '03_shishuo_2', front: '师者', back: '所以传道受业解惑也' },
                        { id: '03_shishuo_3', front: '人非生而知之者', back: '孰能无惑' },
                        { id: '03_shishuo_4', front: '惑而不从师', back: '其为惑也' },
                        { id: '03_shishuo_6', front: '生乎吾前', back: '其闻道也固先乎吾' },
                        { id: '03_shishuo_8', front: '生乎吾后', back: '其闻道也亦先乎吾' },
                        { id: '03_shishuo_10', front: '吾师道也', back: '夫庸知其年之先后生于吾乎' },
                        { id: '03_shishuo_11', front: '是故无贵无贱', back: '无长无少' },
                        { id: '03_shishuo_12', front: '道之所存', back: '师之所存也' }
                    ]
                },
                {
                    type: 'fillBack',
                    title: '整篇填后句',
                    description: '根据前半句填写后半句',
                    autoFull: true
                },
                {
                    type: 'fillFront',
                    title: '整篇填前句',
                    description: '根据后半句填写前半句',
                    autoFull: true
                },
                {
                    type: 'random',
                    title: '随机抽题练习',
                    description: '从本文中随机抽取题目进行练习',
                    randomCount: 12
                }
            ]
        },
        {
            id: '04_efanggong',
            title: '04. 阿房宫赋',
            author: '杜牧',
            content: '六王毕，四海一，蜀山兀，阿房出。覆压三百余里，隔离天日。骊山北构而西折，直走咸阳。二川溶溶，流入宫墙。五步一楼，十步一阁；廊腰缦回，檐牙高啄；各抱地势，钩心斗角。盘盘焉，囷囷焉，蜂房水涡，矗不知其几千万落。长桥卧波，未云何龙？复道行空，不霁何虹？高低冥迷，不知西东。歌台暖响，春光融融；舞殿冷袖，风雨凄凄。一日之内，一宫之间，而气候不齐。',
            sentences: [
                { id: '04_efanggong_1', front: '六王毕', back: '四海一' },
                { id: '04_efanggong_2', front: '蜀山兀', back: '阿房出' },
                { id: '04_efanggong_3', front: '覆压三百余里', back: '隔离天日' },
                { id: '04_efanggong_4', front: '骊山北构而西折', back: '直走咸阳' },
                { id: '04_efanggong_5', front: '二川溶溶', back: '流入宫墙' },
                { id: '04_efanggong_6', front: '五步一楼', back: '十步一阁' },
                { id: '04_efanggong_7', front: '廊腰缦回', back: '檐牙高啄' },
                { id: '04_efanggong_8', front: '各抱地势', back: '钩心斗角' },
                { id: '04_efanggong_9', front: '盘盘焉', back: '囷囷焉' },
                { id: '04_efanggong_10', front: '蜂房水涡', back: '矗不知其几千万落' },
                { id: '04_efanggong_11', front: '长桥卧波', back: '未云何龙' },
                { id: '04_efanggong_12', front: '复道行空', back: '不霁何虹' },
                { id: '04_efanggong_13', front: '高低冥迷', back: '不知西东' },
                { id: '04_efanggong_14', front: '歌台暖响', back: '春光融融' },
                { id: '04_efanggong_15', front: '舞殿冷袖', back: '风雨凄凄' },
                { id: '04_efanggong_16', front: '一日之内', back: '一宫之间' },
                { id: '04_efanggong_17', front: '而气候不齐', back: '' }
            ],
            exercises: [
                {
                    type: 'fillBack',
                    title: '阿房宫赋填空',
                    description: '请根据前半句内容，填写后半句',
                    items: [
                        { id: '04_efanggong_1', front: '六王毕', back: '四海一' },
                        { id: '04_efanggong_2', front: '蜀山兀', back: '阿房出' },
                        { id: '04_efanggong_3', front: '覆压三百余里', back: '隔离天日' },
                        { id: '04_efanggong_4', front: '骊山北构而西折', back: '直走咸阳' },
                        { id: '04_efanggong_5', front: '二川溶溶', back: '流入宫墙' },
                        { id: '04_efanggong_6', front: '五步一楼', back: '十步一阁' },
                        { id: '04_efanggong_7', front: '廊腰缦回', back: '檐牙高啄' },
                        { id: '04_efanggong_8', front: '各抱地势', back: '钩心斗角' },
                        { id: '04_efanggong_9', front: '盘盘焉', back: '囷囷焉' },
                        { id: '04_efanggong_10', front: '蜂房水涡', back: '矗不知其几千万落' },
                        { id: '04_efanggong_11', front: '长桥卧波', back: '未云何龙' },
                        { id: '04_efanggong_12', front: '复道行空', back: '不霁何虹' },
                        { id: '04_efanggong_13', front: '高低冥迷', back: '不知西东' },
                        { id: '04_efanggong_14', front: '歌台暖响', back: '春光融融' },
                        { id: '04_efanggong_15', front: '舞殿冷袖', back: '风雨凄凄' },
                        { id: '04_efanggong_16', front: '一日之内', back: '一宫之间' }
                    ]
                },
                {
                    type: 'fillBack',
                    title: '整篇填后句',
                    description: '根据前半句填写后半句',
                    autoFull: true
                },
                {
                    type: 'fillFront',
                    title: '整篇填前句',
                    description: '根据后半句填写前半句',
                    autoFull: true
                },
                {
                    type: 'random',
                    title: '随机抽题练习',
                    description: '从本文中随机抽取题目进行练习',
                    randomCount: 17
                }
            ]
        },
        {
            id: '05_chibifu',
            title: '05. 赤壁赋',
            author: '苏轼',
            content: '壬戌之秋，七月既望，苏子与客泛舟游于赤壁之下。清风徐来，水波不兴。举酒属客，诵明月之诗，歌窈窕之章。少焉，月出于东山之上，徘徊于斗牛之间。白露横江，水光接天。纵一苇之所如，凌万顷之茫然。浩浩乎如冯虚御风，而不知其所止；飘飘乎如遗世独立，羽化而登仙。',
            sentences: [
                { id: '05_chibifu_1', front: '壬戌之秋', back: '七月既望' },
                { id: '05_chibifu_2', front: '苏子与客泛舟游于赤壁之下', back: '' },
                { id: '05_chibifu_3', front: '清风徐来', back: '水波不兴' },
                { id: '05_chibifu_4', front: '举酒属客', back: '诵明月之诗' },
                { id: '05_chibifu_5', front: '歌窈窕之章', back: '' },
                { id: '05_chibifu_6', front: '少焉', back: '月出于东山之上' },
                { id: '05_chibifu_7', front: '徘徊于斗牛之间', back: '' },
                { id: '05_chibifu_8', front: '白露横江', back: '水光接天' },
                { id: '05_chibifu_9', front: '纵一苇之所如', back: '凌万顷之茫然' },
                { id: '05_chibifu_10', front: '浩浩乎如冯虚御风', back: '而不知其所止' },
                { id: '05_chibifu_11', front: '飘飘乎如遗世独立', back: '羽化而登仙' }
            ],
            exercises: [
                {
                    type: 'fillBack',
                    title: '赤壁赋填空',
                    description: '请根据前半句内容，填写后半句',
                    items: [
                        { id: '05_chibifu_1', front: '壬戌之秋', back: '七月既望' },
                        { id: '05_chibifu_3', front: '清风徐来', back: '水波不兴' },
                        { id: '05_chibifu_4', front: '举酒属客', back: '诵明月之诗' },
                        { id: '05_chibifu_6', front: '少焉', back: '月出于东山之上' },
                        { id: '05_chibifu_8', front: '白露横江', back: '水光接天' },
                        { id: '05_chibifu_9', front: '纵一苇之所如', back: '凌万顷之茫然' },
                        { id: '05_chibifu_10', front: '浩浩乎如冯虚御风', back: '而不知其所止' },
                        { id: '05_chibifu_11', front: '飘飘乎如遗世独立', back: '羽化而登仙' }
                    ]
                },
                {
                    type: 'fillBack',
                    title: '整篇填后句',
                    description: '根据前半句填写后半句',
                    autoFull: true
                },
                {
                    type: 'fillFront',
                    title: '整篇填前句',
                    description: '根据后半句填写前半句',
                    autoFull: true
                },
                {
                    type: 'random',
                    title: '随机抽题练习',
                    description: '从本文中随机抽取题目进行练习',
                    randomCount: 11
                }
            ]
        },
        {
            id: '06_mang',
            title: '06. 氓',
            author: '《诗经》',
            content: '氓之蚩蚩，抱布贸丝。匪来贸丝，来即我谋。送子涉淇，至于顿丘。匪我愆期，子无良媒。将子无怒，秋以为期。乘彼垝垣，以望复关。不见复关，泣涕涟涟。既见复关，载笑载言。尔卜尔筮，体无咎言。以尔车来，以我贿迁。',
            sentences: [
                { id: '06_mang_1', front: '氓之蚩蚩', back: '抱布贸丝' },
                { id: '06_mang_2', front: '匪来贸丝', back: '来即我谋' },
                { id: '06_mang_3', front: '送子涉淇', back: '至于顿丘' },
                { id: '06_mang_4', front: '匪我愆期', back: '子无良媒' },
                { id: '06_mang_5', front: '将子无怒', back: '秋以为期' },
                { id: '06_mang_6', front: '乘彼垝垣', back: '以望复关' },
                { id: '06_mang_7', front: '不见复关', back: '泣涕涟涟' },
                { id: '06_mang_8', front: '既见复关', back: '载笑载言' },
                { id: '06_mang_9', front: '尔卜尔筮', back: '体无咎言' },
                { id: '06_mang_10', front: '以尔车来', back: '以我贿迁' }
            ],
            exercises: [
                {
                    type: 'fillBack',
                    title: '氓诗填空',
                    description: '请根据前半句内容，填写后半句',
                    items: [
                        { id: '06_mang_1', front: '氓之蚩蚩', back: '抱布贸丝' },
                        { id: '06_mang_2', front: '匪来贸丝', back: '来即我谋' },
                        { id: '06_mang_3', front: '送子涉淇', back: '至于顿丘' },
                        { id: '06_mang_4', front: '匪我愆期', back: '子无良媒' },
                        { id: '06_mang_5', front: '将子无怒', back: '秋以为期' },
                        { id: '06_mang_6', front: '乘彼垝垣', back: '以望复关' },
                        { id: '06_mang_7', front: '不见复关', back: '泣涕涟涟' },
                        { id: '06_mang_8', front: '既见复关', back: '载笑载言' },
                        { id: '06_mang_9', front: '尔卜尔筮', back: '体无咎言' },
                        { id: '06_mang_10', front: '以尔车来', back: '以我贿迁' }
                    ]
                },
                {
                    type: 'fillBack',
                    title: '整篇填后句',
                    description: '根据前半句填写后半句',
                    autoFull: true
                },
                {
                    type: 'fillFront',
                    title: '整篇填前句',
                    description: '根据后半句填写前半句',
                    autoFull: true
                },
                {
                    type: 'random',
                    title: '随机抽题练习',
                    description: '从本文中随机抽取题目进行练习',
                    randomCount: 10
                }
            ]
        },
        {
            id: '07_lisao',
            title: '07. 离骚(节选)',
            author: '屈原',
            content: '帝高阳之苗裔兮，朕皇考曰伯庸。摄提贞于孟陬兮，惟庚寅吾以降。皇览揆余初度兮，肇锡余以嘉名：名余曰正则兮，字余曰灵均。纷吾既有此内美兮，又重之以修能。扈江离与辟芷兮，纫秋兰以为佩。汩余若将不及兮，恐年岁之不吾与。朝搴阰之木兰兮，夕揽洲之宿莽。日月忽其不淹兮，春与秋其代序。惟草木之零落兮，恐美人之迟暮。',
            sentences: [
                { id: '07_lisao_1', front: '帝高阳之苗裔兮', back: '朕皇考曰伯庸' },
                { id: '07_lisao_2', front: '摄提贞于孟陬兮', back: '惟庚寅吾以降' },
                { id: '07_lisao_3', front: '皇览揆余初度兮', back: '肇锡余以嘉名' },
                { id: '07_lisao_4', front: '名余曰正则兮', back: '字余曰灵均' },
                { id: '07_lisao_5', front: '纷吾既有此内美兮', back: '又重之以修能' },
                { id: '07_lisao_6', front: '扈江离与辟芷兮', back: '纫秋兰以为佩' },
                { id: '07_lisao_7', front: '汩余若将不及兮', back: '恐年岁之不吾与' },
                { id: '07_lisao_8', front: '朝搴阰之木兰兮', back: '夕揽洲之宿莽' },
                { id: '07_lisao_9', front: '日月忽其不淹兮', back: '春与秋其代序' },
                { id: '07_lisao_10', front: '惟草木之零落兮', back: '恐美人之迟暮' }
            ],
            exercises: [
                {
                    type: 'fillBack',
                    title: '离骚填空',
                    description: '请根据前半句内容，填写后半句',
                    items: [
                        { id: '07_lisao_1', front: '帝高阳之苗裔兮', back: '朕皇考曰伯庸' },
                        { id: '07_lisao_2', front: '摄提贞于孟陬兮', back: '惟庚寅吾以降' },
                        { id: '07_lisao_3', front: '皇览揆余初度兮', back: '肇锡余以嘉名' },
                        { id: '07_lisao_4', front: '名余曰正则兮', back: '字余曰灵均' },
                        { id: '07_lisao_5', front: '纷吾既有此内美兮', back: '又重之以修能' },
                        { id: '07_lisao_6', front: '扈江离与辟芷兮', back: '纫秋兰以为佩' },
                        { id: '07_lisao_7', front: '汩余若将不及兮', back: '恐年岁之不吾与' },
                        { id: '07_lisao_8', front: '朝搴阰之木兰兮', back: '夕揽洲之宿莽' },
                        { id: '07_lisao_9', front: '日月忽其不淹兮', back: '春与秋其代序' },
                        { id: '07_lisao_10', front: '惟草木之零落兮', back: '恐美人之迟暮' }
                    ]
                },
                {
                    type: 'fillBack',
                    title: '整篇填后句',
                    description: '根据前半句填写后半句',
                    autoFull: true
                },
                {
                    type: 'fillFront',
                    title: '整篇填前句',
                    description: '根据后半句填写前半句',
                    autoFull: true
                },
                {
                    type: 'random',
                    title: '随机抽题练习',
                    description: '从本文中随机抽取题目进行练习',
                    randomCount: 10
                }
            ]
        },
        {
            id: '08_shudaonan',
            title: '08. 蜀道难',
            author: '李白',
            content: '噫吁嚱，危乎高哉！蜀道之难，难于上青天，使人听此凋朱颜。连峰去天不盈尺，枯松倒挂倚绝壁。飞湍瀑流争喧豗，砯崖转石万壑雷。其险也如此，嗟尔远道之人，胡为乎来哉？剑阁峥嵘而崔嵬，一夫当关，万夫莫开。所守或匪亲，化为狼与豺。朝避猛虎，夕避长蛇；磨牙吮血，杀人如麻。锦城虽云乐，不如早还家。蜀道之难，难于上青天，侧身西望长咨嗟！',
            sentences: [
                { id: '08_shudaonan_1', front: '噫吁嚱', back: '危乎高哉' },
                { id: '08_shudaonan_2', front: '蜀道之难', back: '难于上青天' },
                { id: '08_shudaonan_3', front: '使人听此凋朱颜', back: '' },
                { id: '08_shudaonan_4', front: '连峰去天不盈尺', back: '枯松倒挂倚绝壁' },
                { id: '08_shudaonan_5', front: '飞湍瀑流争喧豗', back: '砯崖转石万壑雷' },
                { id: '08_shudaonan_6', front: '其险也如此', back: '嗟尔远道之人' },
                { id: '08_shudaonan_7', front: '胡为乎来哉', back: '' },
                { id: '08_shudaonan_8', front: '剑阁峥嵘而崔嵬', back: '一夫当关' },
                { id: '08_shudaonan_9', front: '万夫莫开', back: '' },
                { id: '08_shudaonan_10', front: '所守或匪亲', back: '化为狼与豺' },
                { id: '08_shudaonan_11', front: '朝避猛虎', back: '夕避长蛇' },
                { id: '08_shudaonan_12', front: '磨牙吮血', back: '杀人如麻' },
                { id: '08_shudaonan_13', front: '锦城虽云乐', back: '不如早还家' },
                { id: '08_shudaonan_14', front: '蜀道之难', back: '难于上青天' },
                { id: '08_shudaonan_15', front: '侧身西望长咨嗟', back: '' }
            ],
            exercises: [
                {
                    type: 'fillBack',
                    title: '蜀道难填空',
                    description: '请根据前半句内容，填写后半句',
                    items: [
                        { id: '08_shudaonan_1', front: '噫吁嚱', back: '危乎高哉' },
                        { id: '08_shudaonan_2', front: '蜀道之难', back: '难于上青天' },
                        { id: '08_shudaonan_4', front: '连峰去天不盈尺', back: '枯松倒挂倚绝壁' },
                        { id: '08_shudaonan_5', front: '飞湍瀑流争喧豗', back: '砯崖转石万壑雷' },
                        { id: '08_shudaonan_6', front: '其险也如此', back: '嗟尔远道之人' },
                        { id: '08_shudaonan_8', front: '剑阁峥嵘而崔嵬', back: '一夫当关' },
                        { id: '08_shudaonan_10', front: '所守或匪亲', back: '化为狼与豺' },
                        { id: '08_shudaonan_11', front: '朝避猛虎', back: '夕避长蛇' },
                        { id: '08_shudaonan_12', front: '磨牙吮血', back: '杀人如麻' },
                        { id: '08_shudaonan_13', front: '锦城虽云乐', back: '不如早还家' },
                        { id: '08_shudaonan_14', front: '蜀道之难', back: '难于上青天' }
                    ]
                },
                {
                    type: 'fillBack',
                    title: '整篇填后句',
                    description: '根据前半句填写后半句',
                    autoFull: true
                },
                {
                    type: 'fillFront',
                    title: '整篇填前句',
                    description: '根据后半句填写前半句',
                    autoFull: true
                },
                {
                    type: 'random',
                    title: '随机抽题练习',
                    description: '从本文中随机抽取题目进行练习',
                    randomCount: 15
                }
            ]
        },
        {
            id: '09_denggao',
            title: '09. 登高',
            author: '杜甫',
            content: '风急天高猿啸哀，渚清沙白鸟飞回。无边落木萧萧下，不尽长江滚滚来。万里悲秋常作客，百年多病独登台。艰难苦恨繁霜鬓，潦倒新停浊酒杯。',
            sentences: [
                { id: '09_denggao_1', front: '风急天高猿啸哀', back: '渚清沙白鸟飞回' },
                { id: '09_denggao_2', front: '无边落木萧萧下', back: '不尽长江滚滚来' },
                { id: '09_denggao_3', front: '万里悲秋常作客', back: '百年多病独登台' },
                { id: '09_denggao_4', front: '艰难苦恨繁霜鬓', back: '潦倒新停浊酒杯' }
            ],
            exercises: [
                {
                    type: 'fillBack',
                    title: '登高填空',
                    description: '请根据前半句内容，填写后半句',
                    items: [
                        { id: '09_denggao_1', front: '风急天高猿啸哀', back: '渚清沙白鸟飞回' },
                        { id: '09_denggao_2', front: '无边落木萧萧下', back: '不尽长江滚滚来' },
                        { id: '09_denggao_3', front: '万里悲秋常作客', back: '百年多病独登台' },
                        { id: '09_denggao_4', front: '艰难苦恨繁霜鬓', back: '潦倒新停浊酒杯' }
                    ]
                },
                {
                    type: 'fillBack',
                    title: '整篇填后句',
                    description: '根据前半句填写后半句',
                    autoFull: true
                },
                {
                    type: 'fillFront',
                    title: '整篇填前句',
                    description: '根据后半句填写前半句',
                    autoFull: true
                },
                {
                    type: 'random',
                    title: '随机抽题练习',
                    description: '从本文中随机抽取题目进行练习',
                    randomCount: 4
                }
            ]
        },
        {
            id: '10_pipaxing',
            title: '10. 琵琶行',
            author: '白居易',
            content: '浔阳江头夜送客，枫叶荻花秋瑟瑟。主人下马客在船，举酒欲饮无管弦。醉不成欢惨将别，别时茫茫江浸月。忽闻水上琵琶声，主人忘归客不发。寻声暗问弹者谁？琵琶声停欲语迟。移船相近邀相见，添酒回灯重开宴。千呼万唤始出来，犹抱琵琶半遮面。转轴拨弦三两声，未成曲调先有情。弦弦掩抑声声思，似诉平生不得志。低眉信手续续弹，说尽心中无限事。轻拢慢捻抹复挑，初为霓裳后六幺。大弦嘈嘈如急雨，小弦切切如私语。嘈嘈切切错杂弹，大珠小珠落玉盘。间关莺语花底滑，幽咽泉流冰下难。冰泉冷涩弦凝绝，凝绝不通声暂歇。别有幽愁暗恨生，此时无声胜有声。银瓶乍破水浆迸，铁骑突出刀枪鸣。曲终收拨当心画，四弦一声如裂帛。东船西舫悄无言，唯见江心秋月白。',
            sentences: [
                { id: '10_pipaxing_1', front: '浔阳江头夜送客', back: '枫叶荻花秋瑟瑟' },
                { id: '10_pipaxing_2', front: '主人下马客在船', back: '举酒欲饮无管弦' },
                { id: '10_pipaxing_3', front: '醉不成欢惨将别', back: '别时茫茫江浸月' },
                { id: '10_pipaxing_4', front: '忽闻水上琵琶声', back: '主人忘归客不发' },
                { id: '10_pipaxing_5', front: '寻声暗问弹者谁', back: '琵琶声停欲语迟' },
                { id: '10_pipaxing_6', front: '移船相近邀相见', back: '添酒回灯重开宴' },
                { id: '10_pipaxing_7', front: '千呼万唤始出来', back: '犹抱琵琶半遮面' },
                { id: '10_pipaxing_8', front: '转轴拨弦三两声', back: '未成曲调先有情' },
                { id: '10_pipaxing_9', front: '弦弦掩抑声声思', back: '似诉平生不得志' },
                { id: '10_pipaxing_10', front: '低眉信手续续弹', back: '说尽心中无限事' },
                { id: '10_pipaxing_11', front: '轻拢慢捻抹复挑', back: '初为霓裳后六幺' },
                { id: '10_pipaxing_12', front: '大弦嘈嘈如急雨', back: '小弦切切如私语' },
                { id: '10_pipaxing_13', front: '嘈嘈切切错杂弹', back: '大珠小珠落玉盘' },
                { id: '10_pipaxing_14', front: '间关莺语花底滑', back: '幽咽泉流冰下难' },
                { id: '10_pipaxing_15', front: '冰泉冷涩弦凝绝', back: '凝绝不通声暂歇' },
                { id: '10_pipaxing_16', front: '别有幽愁暗恨生', back: '此时无声胜有声' },
                { id: '10_pipaxing_17', front: '银瓶乍破水浆迸', back: '铁骑突出刀枪鸣' },
                { id: '10_pipaxing_18', front: '曲终收拨当心画', back: '四弦一声如裂帛' },
                { id: '10_pipaxing_19', front: '东船西舫悄无言', back: '唯见江心秋月白' }
            ],
            exercises: [
                {
                    type: 'fillBack',
                    title: '琵琶行填空',
                    description: '请根据前半句内容，填写后半句',
                    items: [
                        { id: '10_pipaxing_1', front: '浔阳江头夜送客', back: '枫叶荻花秋瑟瑟' },
                        { id: '10_pipaxing_2', front: '主人下马客在船', back: '举酒欲饮无管弦' },
                        { id: '10_pipaxing_3', front: '醉不成欢惨将别', back: '别时茫茫江浸月' },
                        { id: '10_pipaxing_4', front: '忽闻水上琵琶声', back: '主人忘归客不发' },
                        { id: '10_pipaxing_5', front: '寻声暗问弹者谁', back: '琵琶声停欲语迟' },
                        { id: '10_pipaxing_6', front: '移船相近邀相见', back: '添酒回灯重开宴' },
                        { id: '10_pipaxing_7', front: '千呼万唤始出来', back: '犹抱琵琶半遮面' },
                        { id: '10_pipaxing_8', front: '转轴拨弦三两声', back: '未成曲调先有情' },
                        { id: '10_pipaxing_9', front: '弦弦掩抑声声思', back: '似诉平生不得志' },
                        { id: '10_pipaxing_10', front: '低眉信手续续弹', back: '说尽心中无限事' },
                        { id: '10_pipaxing_11', front: '轻拢慢捻抹复挑', back: '初为霓裳后六幺' },
                        { id: '10_pipaxing_12', front: '大弦嘈嘈如急雨', back: '小弦切切如私语' },
                        { id: '10_pipaxing_13', front: '嘈嘈切切错杂弹', back: '大珠小珠落玉盘' },
                        { id: '10_pipaxing_14', front: '间关莺语花底滑', back: '幽咽泉流冰下难' },
                        { id: '10_pipaxing_15', front: '冰泉冷涩弦凝绝', back: '凝绝不通声暂歇' },
                        { id: '10_pipaxing_16', front: '别有幽愁暗恨生', back: '此时无声胜有声' },
                        { id: '10_pipaxing_17', front: '银瓶乍破水浆迸', back: '铁骑突出刀枪鸣' },
                        { id: '10_pipaxing_18', front: '曲终收拨当心画', back: '四弦一声如裂帛' },
                        { id: '10_pipaxing_19', front: '东船西舫悄无言', back: '唯见江心秋月白' }
                    ]
                },
                {
                    type: 'fillBack',
                    title: '整篇填后句',
                    description: '根据前半句填写后半句',
                    autoFull: true
                },
                {
                    type: 'fillFront',
                    title: '整篇填前句',
                    description: '根据后半句填写前半句',
                    autoFull: true
                },
                {
                    type: 'random',
                    title: '随机抽题练习',
                    description: '从本文中随机抽取题目进行练习',
                    randomCount: 19
                }
            ]
        },
        {
            id: '11_jinse',
            title: '11. 锦瑟',
            author: '李商隐',
            content: '锦瑟无端五十弦，一弦一柱思华年。庄生晓梦迷蝴蝶，望帝春心托杜鹃。沧海月明珠有泪，蓝田日暖玉生烟。此情可待成追忆，只是当时已惘然。',
            sentences: [
                { id: '11_jinse_1', front: '锦瑟无端五十弦', back: '一弦一柱思华年' },
                { id: '11_jinse_2', front: '庄生晓梦迷蝴蝶', back: '望帝春心托杜鹃' },
                { id: '11_jinse_3', front: '沧海月明珠有泪', back: '蓝田日暖玉生烟' },
                { id: '11_jinse_4', front: '此情可待成追忆', back: '只是当时已惘然' }
            ],
            exercises: [
                {
                    type: 'fillBack',
                    title: '锦瑟填空',
                    description: '请根据前半句内容，填写后半句',
                    items: [
                        { id: '11_jinse_1', front: '锦瑟无端五十弦', back: '一弦一柱思华年' },
                        { id: '11_jinse_2', front: '庄生晓梦迷蝴蝶', back: '望帝春心托杜鹃' },
                        { id: '11_jinse_3', front: '沧海月明珠有泪', back: '蓝田日暖玉生烟' },
                        { id: '11_jinse_4', front: '此情可待成追忆', back: '只是当时已惘然' }
                    ]
                },
                {
                    type: 'fillBack',
                    title: '整篇填后句',
                    description: '根据前半句填写后半句',
                    autoFull: true
                },
                {
                    type: 'fillFront',
                    title: '整篇填前句',
                    description: '根据后半句填写前半句',
                    autoFull: true
                },
                {
                    type: 'random',
                    title: '随机抽题练习',
                    description: '从本文中随机抽取题目进行练习',
                    randomCount: 4
                }
            ]
        },
        {
            id: '12_yumeiren',
            title: '12. 虞美人',
            author: '李煜',
            content: '春花秋月何时了，往事知多少。小楼昨夜又东风，故国不堪回首月明中。雕栏玉砌应犹在，只是朱颜改。问君能有几多愁，恰似一江春水向东流。',
            sentences: [
                { id: '12_yumeiren_1', front: '春花秋月何时了', back: '往事知多少' },
                { id: '12_yumeiren_2', front: '小楼昨夜又东风', back: '故国不堪回首月明中' },
                { id: '12_yumeiren_3', front: '雕栏玉砌应犹在', back: '只是朱颜改' },
                { id: '12_yumeiren_4', front: '问君能有几多愁', back: '恰似一江春水向东流' }
            ],
            exercises: [
                {
                    type: 'fillBack',
                    title: '虞美人填空',
                    description: '请根据前半句内容，填写后半句',
                    items: [
                        { id: '12_yumeiren_1', front: '春花秋月何时了', back: '往事知多少' },
                        { id: '12_yumeiren_2', front: '小楼昨夜又东风', back: '故国不堪回首月明中' },
                        { id: '12_yumeiren_3', front: '雕栏玉砌应犹在', back: '只是朱颜改' },
                        { id: '12_yumeiren_4', front: '问君能有几多愁', back: '恰似一江春水向东流' }
                    ]
                },
                {
                    type: 'fillBack',
                    title: '整篇填后句',
                    description: '根据前半句填写后半句',
                    autoFull: true
                },
                {
                    type: 'fillFront',
                    title: '整篇填前句',
                    description: '根据后半句填写前半句',
                    autoFull: true
                },
                {
                    type: 'random',
                    title: '随机抽题练习',
                    description: '从本文中随机抽取题目进行练习',
                    randomCount: 4
                }
            ]
        },
        {
            id: '13_niannujiao',
            title: '13. 念奴娇·赤壁怀古',
            author: '苏轼',
            content: '大江东去，浪淘尽，千古风流人物。故垒西边，人道是，三国周郎赤壁。乱石穿空，惊涛拍岸，卷起千堆雪。江山如画，一时多少豪杰。遥想公瑾当年，小乔初嫁了，雄姿英发。羽扇纶巾，谈笑间，樯橹灰飞烟灭。故国神游，多情应笑我，早生华发。人生如梦，一尊还酹江月。',
            sentences: [
                { id: '13_niannujiao_1', front: '大江东去', back: '浪淘尽' },
                { id: '13_niannujiao_2', front: '千古风流人物', back: '' },
                { id: '13_niannujiao_3', front: '故垒西边', back: '人道是' },
                { id: '13_niannujiao_4', front: '三国周郎赤壁', back: '' },
                { id: '13_niannujiao_5', front: '乱石穿空', back: '惊涛拍岸' },
                { id: '13_niannujiao_6', front: '卷起千堆雪', back: '' },
                { id: '13_niannujiao_7', front: '江山如画', back: '一时多少豪杰' },
                { id: '13_niannujiao_8', front: '遥想公瑾当年', back: '小乔初嫁了' },
                { id: '13_niannujiao_9', front: '雄姿英发', back: '' },
                { id: '13_niannujiao_10', front: '羽扇纶巾', back: '谈笑间' },
                { id: '13_niannujiao_11', front: '樯橹灰飞烟灭', back: '' },
                { id: '13_niannujiao_12', front: '故国神游', back: '多情应笑我' },
                { id: '13_niannujiao_13', front: '早生华发', back: '' },
                { id: '13_niannujiao_14', front: '人生如梦', back: '一尊还酹江月' }
            ],
            exercises: [
                {
                    type: 'fillBack',
                    title: '念奴娇填空',
                    description: '请根据前半句内容，填写后半句',
                    items: [
                        { id: '13_niannujiao_1', front: '大江东去', back: '浪淘尽' },
                        { id: '13_niannujiao_3', front: '故垒西边', back: '人道是' },
                        { id: '13_niannujiao_5', front: '乱石穿空', back: '惊涛拍岸' },
                        { id: '13_niannujiao_7', front: '江山如画', back: '一时多少豪杰' },
                        { id: '13_niannujiao_8', front: '遥想公瑾当年', back: '小乔初嫁了' },
                        { id: '13_niannujiao_10', front: '羽扇纶巾', back: '谈笑间' },
                        { id: '13_niannujiao_12', front: '故国神游', back: '多情应笑我' },
                        { id: '13_niannujiao_14', front: '人生如梦', back: '一尊还酹江月' }
                    ]
                },
                {
                    type: 'fillBack',
                    title: '整篇填后句',
                    description: '根据前半句填写后半句',
                    autoFull: true
                },
                {
                    type: 'fillFront',
                    title: '整篇填前句',
                    description: '根据后半句填写前半句',
                    autoFull: true
                },
                {
                    type: 'random',
                    title: '随机抽题练习',
                    description: '从本文中随机抽取题目进行练习',
                    randomCount: 14
                }
            ]
        },
        {
            id: '14_yongyule',
            title: '14. 永遇乐·京口北固亭怀古',
            author: '辛弃疾',
            content: '千古江山，英雄无觅，孙仲谋处。舞榭歌台，风流总被，雨打风吹去。斜阳草树，寻常巷陌，人道寄奴曾住。想当年，金戈铁马，气吞万里如虎。元嘉草草，封狼居胥，赢得仓皇北顾。四十三年，望中犹记，烽火扬州路。可堪回首，佛狸祠下，一片神鸦社鼓。凭谁问：廉颇老矣，尚能饭否？',
            sentences: [
                { id: '14_yongyule_1', front: '千古江山', back: '英雄无觅' },
                { id: '14_yongyule_2', front: '孙仲谋处', back: '' },
                { id: '14_yongyule_3', front: '舞榭歌台', back: '风流总被' },
                { id: '14_yongyule_4', front: '雨打风吹去', back: '' },
                { id: '14_yongyule_5', front: '斜阳草树', back: '寻常巷陌' },
                { id: '14_yongyule_6', front: '人道寄奴曾住', back: '' },
                { id: '14_yongyule_7', front: '想当年', back: '金戈铁马' },
                { id: '14_yongyule_8', front: '气吞万里如虎', back: '' },
                { id: '14_yongyule_9', front: '元嘉草草', back: '封狼居胥' },
                { id: '14_yongyule_10', front: '赢得仓皇北顾', back: '' },
                { id: '14_yongyule_11', front: '四十三年', back: '望中犹记' },
                { id: '14_yongyule_12', front: '烽火扬州路', back: '' },
                { id: '14_yongyule_13', front: '可堪回首', back: '佛狸祠下' },
                { id: '14_yongyule_14', front: '一片神鸦社鼓', back: '' },
                { id: '14_yongyule_15', front: '凭谁问', back: '廉颇老矣' },
                { id: '14_yongyule_16', front: '尚能饭否', back: '' }
            ],
            exercises: [
                {
                    type: 'fillBack',
                    title: '永遇乐填空',
                    description: '请根据前半句内容，填写后半句',
                    items: [
                        { id: '14_yongyule_1', front: '千古江山', back: '英雄无觅' },
                        { id: '14_yongyule_3', front: '舞榭歌台', back: '风流总被' },
                        { id: '14_yongyule_5', front: '斜阳草树', back: '寻常巷陌' },
                        { id: '14_yongyule_7', front: '想当年', back: '金戈铁马' },
                        { id: '14_yongyule_9', front: '元嘉草草', back: '封狼居胥' },
                        { id: '14_yongyule_11', front: '四十三年', back: '望中犹记' },
                        { id: '14_yongyule_13', front: '可堪回首', back: '佛狸祠下' },
                        { id: '14_yongyule_15', front: '凭谁问', back: '廉颇老矣' }
                    ]
                },
                {
                    type: 'fillBack',
                    title: '整篇填后句',
                    description: '根据前半句填写后半句',
                    autoFull: true
                },
                {
                    type: 'fillFront',
                    title: '整篇填前句',
                    description: '根据后半句填写前半句',
                    autoFull: true
                },
                {
                    type: 'random',
                    title: '随机抽题练习',
                    description: '从本文中随机抽取题目进行练习',
                    randomCount: 16
                }
            ]
        },
        {
            id: '15_guanju',
            title: '15. 关雎',
            author: '《诗经》',
            content: '关关雎鸠，在河之洲。窈窕淑女，君子好逑。参差荇菜，左右流之。窈窕淑女，寤寐求之。求之不得，寤寐思服。悠哉悠哉，辗转反侧。参差荇菜，左右采之。窈窕淑女，琴瑟友之。参差荇菜，左右芼之。窈窕淑女，钟鼓乐之。',
            sentences: [
                { id: '15_guanju_1', front: '关关雎鸠', back: '在河之洲' },
                { id: '15_guanju_2', front: '窈窕淑女', back: '君子好逑' },
                { id: '15_guanju_3', front: '参差荇菜', back: '左右流之' },
                { id: '15_guanju_4', front: '窈窕淑女', back: '寤寐求之' },
                { id: '15_guanju_5', front: '求之不得', back: '寤寐思服' },
                { id: '15_guanju_6', front: '悠哉悠哉', back: '辗转反侧' },
                { id: '15_guanju_7', front: '参差荇菜', back: '左右采之' },
                { id: '15_guanju_8', front: '窈窕淑女', back: '琴瑟友之' },
                { id: '15_guanju_9', front: '参差荇菜', back: '左右芼之' },
                { id: '15_guanju_10', front: '窈窕淑女', back: '钟鼓乐之' }
            ],
            exercises: [
                {
                    type: 'fillBack',
                    title: '关雎填空',
                    description: '请根据前半句内容，填写后半句',
                    items: [
                        { id: '15_guanju_1', front: '关关雎鸠', back: '在河之洲' },
                        { id: '15_guanju_2', front: '窈窕淑女', back: '君子好逑' },
                        { id: '15_guanju_3', front: '参差荇菜', back: '左右流之' },
                        { id: '15_guanju_4', front: '窈窕淑女', back: '寤寐求之' },
                        { id: '15_guanju_5', front: '求之不得', back: '寤寐思服' },
                        { id: '15_guanju_6', front: '悠哉悠哉', back: '辗转反侧' },
                        { id: '15_guanju_7', front: '参差荇菜', back: '左右采之' },
                        { id: '15_guanju_8', front: '窈窕淑女', back: '琴瑟友之' },
                        { id: '15_guanju_9', front: '参差荇菜', back: '左右芼之' },
                        { id: '15_guanju_10', front: '窈窕淑女', back: '钟鼓乐之' }
                    ]
                },
                {
                    type: 'fillBack',
                    title: '整篇填后句',
                    description: '根据前半句填写后半句',
                    autoFull: true
                },
                {
                    type: 'fillFront',
                    title: '整篇填前句',
                    description: '根据后半句填写前半句',
                    autoFull: true
                },
                {
                    type: 'random',
                    title: '随机抽题练习',
                    description: '从本文中随机抽取题目进行练习',
                    randomCount: 10
                }
            ]
        },
        {
            id: '16_jianjia',
            title: '16. 蒹葭',
            author: '《诗经》',
            content: '蒹葭苍苍，白露为霜。所谓伊人，在水一方。溯洄从之，道阻且长。溯游从之，宛在水中央。蒹葭萋萋，白露未晞。所谓伊人，在水之湄。溯洄从之，道阻且跻。溯游从之，宛在水中坻。蒹葭采采，白露未已。所谓伊人，在水之涘。溯洄从之，道阻且右。溯游从之，宛在水中沚。',
            sentences: [
                { id: '16_jianjia_1', front: '蒹葭苍苍', back: '白露为霜' },
                { id: '16_jianjia_2', front: '所谓伊人', back: '在水一方' },
                { id: '16_jianjia_3', front: '溯洄从之', back: '道阻且长' },
                { id: '16_jianjia_4', front: '溯游从之', back: '宛在水中央' },
                { id: '16_jianjia_5', front: '蒹葭萋萋', back: '白露未晞' },
                { id: '16_jianjia_6', front: '所谓伊人', back: '在水之湄' },
                { id: '16_jianjia_7', front: '溯洄从之', back: '道阻且跻' },
                { id: '16_jianjia_8', front: '溯游从之', back: '宛在水中坻' },
                { id: '16_jianjia_9', front: '蒹葭采采', back: '白露未已' },
                { id: '16_jianjia_10', front: '所谓伊人', back: '在水之涘' },
                { id: '16_jianjia_11', front: '溯洄从之', back: '道阻且右' },
                { id: '16_jianjia_12', front: '溯游从之', back: '宛在水中沚' }
            ],
            exercises: [
                {
                    type: 'fillBack',
                    title: '蒹葭填空',
                    description: '请根据前半句内容，填写后半句',
                    items: [
                        { id: '16_jianjia_1', front: '蒹葭苍苍', back: '白露为霜' },
                        { id: '16_jianjia_2', front: '所谓伊人', back: '在水一方' },
                        { id: '16_jianjia_3', front: '溯洄从之', back: '道阻且长' },
                        { id: '16_jianjia_4', front: '溯游从之', back: '宛在水中央' },
                        { id: '16_jianjia_5', front: '蒹葭萋萋', back: '白露未晞' },
                        { id: '16_jianjia_6', front: '所谓伊人', back: '在水之湄' },
                        { id: '16_jianjia_7', front: '溯洄从之', back: '道阻且跻' },
                        { id: '16_jianjia_8', front: '溯游从之', back: '宛在水中坻' },
                        { id: '16_jianjia_9', front: '蒹葭采采', back: '白露未已' },
                        { id: '16_jianjia_10', front: '所谓伊人', back: '在水之涘' },
                        { id: '16_jianjia_11', front: '溯洄从之', back: '道阻且右' },
                        { id: '16_jianjia_12', front: '溯游从之', back: '宛在水中沚' }
                    ]
                },
                {
                    type: 'fillBack',
                    title: '整篇填后句',
                    description: '根据前半句填写后半句',
                    autoFull: true
                },
                {
                    type: 'fillFront',
                    title: '整篇填前句',
                    description: '根据后半句填写前半句',
                    autoFull: true
                },
                {
                    type: 'random',
                    title: '随机抽题练习',
                    description: '从本文中随机抽取题目进行练习',
                    randomCount: 12
                }
            ]
        },
        {
            id: '17_zaochun',
            title: '17. 早春呈水部张十八员外',
            author: '韩愈',
            content: '天街小雨润如酥，草色遥看近却无。最是一年春好处，绝胜烟柳满皇都。',
            sentences: [
                { id: '17_zaochun_1', front: '天街小雨润如酥', back: '草色遥看近却无' },
                { id: '17_zaochun_2', front: '最是一年春好处', back: '绝胜烟柳满皇都' }
            ],
            exercises: [
                {
                    type: 'fillBack',
                    title: '早春填空',
                    description: '请根据前半句内容，填写后半句',
                    items: [
                        { id: '17_zaochun_1', front: '天街小雨润如酥', back: '草色遥看近却无' },
                        { id: '17_zaochun_2', front: '最是一年春好处', back: '绝胜烟柳满皇都' }
                    ]
                },
                {
                    type: 'fillBack',
                    title: '整篇填后句',
                    description: '根据前半句填写后半句',
                    autoFull: true
                },
                {
                    type: 'fillFront',
                    title: '整篇填前句',
                    description: '根据后半句填写前半句',
                    autoFull: true
                },
                {
                    type: 'random',
                    title: '随机抽题练习',
                    description: '从本文中随机抽取题目进行练习',
                    randomCount: 2
                }
            ]
        },
        {
            id: '18_guanchanghai',
            title: '18. 观沧海',
            author: '曹操',
            content: '东临碣石，以观沧海。水何澹澹，山岛竦峙。树木丛生，百草丰茂。秋风萧瑟，洪波涌起。日月之行，若出其中；星汉灿烂，若出其里。幸甚至哉，歌以咏志。',
            sentences: [
                { id: '18_guanchanghai_1', front: '东临碣石', back: '以观沧海' },
                { id: '18_guanchanghai_2', front: '水何澹澹', back: '山岛竦峙' },
                { id: '18_guanchanghai_3', front: '树木丛生', back: '百草丰茂' },
                { id: '18_guanchanghai_4', front: '秋风萧瑟', back: '洪波涌起' },
                { id: '18_guanchanghai_5', front: '日月之行', back: '若出其中' },
                { id: '18_guanchanghai_6', front: '星汉灿烂', back: '若出其里' },
                { id: '18_guanchanghai_7', front: '幸甚至哉', back: '歌以咏志' }
            ],
            exercises: [
                {
                    type: 'fillBack',
                    title: '观沧海填空',
                    description: '请根据前半句内容，填写后半句',
                    items: [
                        { id: '18_guanchanghai_1', front: '东临碣石', back: '以观沧海' },
                        { id: '18_guanchanghai_2', front: '水何澹澹', back: '山岛竦峙' },
                        { id: '18_guanchanghai_3', front: '树木丛生', back: '百草丰茂' },
                        { id: '18_guanchanghai_4', front: '秋风萧瑟', back: '洪波涌起' },
                        { id: '18_guanchanghai_5', front: '日月之行', back: '若出其中' },
                        { id: '18_guanchanghai_6', front: '星汉灿烂', back: '若出其里' },
                        { id: '18_guanchanghai_7', front: '幸甚至哉', back: '歌以咏志' }
                    ]
                },
                {
                    type: 'fillBack',
                    title: '整篇填后句',
                    description: '根据前半句填写后半句',
                    autoFull: true
                },
                {
                    type: 'fillFront',
                    title: '整篇填前句',
                    description: '根据后半句填写前半句',
                    autoFull: true
                },
                {
                    type: 'random',
                    title: '随机抽题练习',
                    description: '从本文中随机抽取题目进行练习',
                    randomCount: 7
                }
            ]
        },
        {
            id: '19_yinjiu',
            title: '19. 饮酒',
            author: '陶渊明',
            content: '结庐在人境，而无车马喧。问君何能尔？心远地自偏。采菊东篱下，悠然见南山。山气日夕佳，飞鸟相与还。此中有真意，欲辨已忘言。',
            sentences: [
                { id: '19_yinjiu_1', front: '结庐在人境', back: '而无车马喧' },
                { id: '19_yinjiu_2', front: '问君何能尔', back: '心远地自偏' },
                { id: '19_yinjiu_3', front: '采菊东篱下', back: '悠然见南山' },
                { id: '19_yinjiu_4', front: '山气日夕佳', back: '飞鸟相与还' },
                { id: '19_yinjiu_5', front: '此中有真意', back: '欲辨已忘言' }
            ],
            exercises: [
                {
                    type: 'fillBack',
                    title: '饮酒填空',
                    description: '请根据前半句内容，填写后半句',
                    items: [
                        { id: '19_yinjiu_1', front: '结庐在人境', back: '而无车马喧' },
                        { id: '19_yinjiu_2', front: '问君何能尔', back: '心远地自偏' },
                        { id: '19_yinjiu_3', front: '采菊东篱下', back: '悠然见南山' },
                        { id: '19_yinjiu_4', front: '山气日夕佳', back: '飞鸟相与还' },
                        { id: '19_yinjiu_5', front: '此中有真意', back: '欲辨已忘言' }
                    ]
                },
                {
                    type: 'fillBack',
                    title: '整篇填后句',
                    description: '根据前半句填写后半句',
                    autoFull: true
                },
                {
                    type: 'fillFront',
                    title: '整篇填前句',
                    description: '根据后半句填写前半句',
                    autoFull: true
                },
                {
                    type: 'random',
                    title: '随机抽题练习',
                    description: '从本文中随机抽取题目进行练习',
                    randomCount: 5
                }
            ]
        },
        {
            id: '20_mulanshi',
            title: '20. 木兰诗',
            author: '北朝民歌',
            content: '唧唧复唧唧，木兰当户织。不闻机杼声，惟闻女叹息。问女何所思，问女何所忆。女亦无所思，女亦无所忆。昨夜见军帖，可汗大点兵，军书十二卷，卷卷有爷名。阿爷无大儿，木兰无长兄，愿为市鞍马，从此替爷征。东市买骏马，西市买鞍鞯，南市买辔头，北市买长鞭。旦辞爷娘去，暮宿黄河边，不闻爷娘唤女声，但闻黄河流水鸣溅溅。旦辞黄河去，暮至黑山头，不闻爷娘唤女声，但闻燕山胡骑鸣啾啾。万里赴戎机，关山度若飞。朔气传金柝，寒光照铁衣。将军百战死，壮士十年归。归来见天子，天子坐明堂。策勋十二转，赏赐百千强。可汗问所欲，木兰不用尚书郎，愿驰千里足，送儿还故乡。爷娘闻女来，出郭相扶将；阿姊闻妹来，当户理红妆；小弟闻姊来，磨刀霍霍向猪羊。开我东阁门，坐我西阁床，脱我战时袍，著我旧时裳，当窗理云鬓，对镜帖花黄。出门看火伴，火伴皆惊忙：同行十二年，不知木兰是女郎。雄兔脚扑朔，雌兔眼迷离；双兔傍地走，安能辨我是雄雌？',
            sentences: [
                { id: '20_mulanshi_1', front: '唧唧复唧唧', back: '木兰当户织' },
                { id: '20_mulanshi_2', front: '不闻机杼声', back: '惟闻女叹息' },
                { id: '20_mulanshi_3', front: '问女何所思', back: '问女何所忆' },
                { id: '20_mulanshi_4', front: '女亦无所思', back: '女亦无所忆' },
                { id: '20_mulanshi_5', front: '昨夜见军帖', back: '可汗大点兵' },
                { id: '20_mulanshi_6', front: '军书十二卷', back: '卷卷有爷名' },
                { id: '20_mulanshi_7', front: '阿爷无大儿', back: '木兰无长兄' },
                { id: '20_mulanshi_8', front: '愿为市鞍马', back: '从此替爷征' },
                { id: '20_mulanshi_9', front: '东市买骏马', back: '西市买鞍鞯' },
                { id: '20_mulanshi_10', front: '南市买辔头', back: '北市买长鞭' },
                { id: '20_mulanshi_11', front: '旦辞爷娘去', back: '暮宿黄河边' },
                { id: '20_mulanshi_12', front: '不闻爷娘唤女声', back: '但闻黄河流水鸣溅溅' },
                { id: '20_mulanshi_13', front: '旦辞黄河去', back: '暮至黑山头' },
                { id: '20_mulanshi_14', front: '不闻爷娘唤女声', back: '但闻燕山胡骑鸣啾啾' },
                { id: '20_mulanshi_15', front: '万里赴戎机', back: '关山度若飞' },
                { id: '20_mulanshi_16', front: '朔气传金柝', back: '寒光照铁衣' },
                { id: '20_mulanshi_17', front: '将军百战死', back: '壮士十年归' },
                { id: '20_mulanshi_18', front: '归来见天子', back: '天子坐明堂' },
                { id: '20_mulanshi_19', front: '策勋十二转', back: '赏赐百千强' },
                { id: '20_mulanshi_20', front: '可汗问所欲', back: '木兰不用尚书郎' },
                { id: '20_mulanshi_21', front: '愿驰千里足', back: '送儿还故乡' },
                { id: '20_mulanshi_22', front: '爷娘闻女来', back: '出郭相扶将' },
                { id: '20_mulanshi_23', front: '阿姊闻妹来', back: '当户理红妆' },
                { id: '20_mulanshi_24', front: '小弟闻姊来', back: '磨刀霍霍向猪羊' },
                { id: '20_mulanshi_25', front: '开我东阁门', back: '坐我西阁床' },
                { id: '20_mulanshi_26', front: '脱我战时袍', back: '著我旧时裳' },
                { id: '20_mulanshi_27', front: '当窗理云鬓', back: '对镜帖花黄' },
                { id: '20_mulanshi_28', front: '出门看火伴', back: '火伴皆惊忙' },
                { id: '20_mulanshi_29', front: '同行十二年', back: '不知木兰是女郎' },
                { id: '20_mulanshi_30', front: '雄兔脚扑朔', back: '雌兔眼迷离' },
                { id: '20_mulanshi_31', front: '双兔傍地走', back: '安能辨我是雄雌' }
            ],
            exercises: [
                {
                    type: 'fillBack',
                    title: '木兰诗填空',
                    description: '请根据前半句内容，填写后半句',
                    items: [
                        { id: '20_mulanshi_1', front: '唧唧复唧唧', back: '木兰当户织' },
                        { id: '20_mulanshi_2', front: '不闻机杼声', back: '惟闻女叹息' },
                        { id: '20_mulanshi_3', front: '问女何所思', back: '问女何所忆' },
                        { id: '20_mulanshi_4', front: '女亦无所思', back: '女亦无所忆' },
                        { id: '20_mulanshi_5', front: '昨夜见军帖', back: '可汗大点兵' },
                        { id: '20_mulanshi_6', front: '军书十二卷', back: '卷卷有爷名' },
                        { id: '20_mulanshi_7', front: '阿爷无大儿', back: '木兰无长兄' },
                        { id: '20_mulanshi_8', front: '愿为市鞍马', back: '从此替爷征' },
                        { id: '20_mulanshi_9', front: '东市买骏马', back: '西市买鞍鞯' },
                        { id: '20_mulanshi_10', front: '南市买辔头', back: '北市买长鞭' },
                        { id: '20_mulanshi_11', front: '旦辞爷娘去', back: '暮宿黄河边' },
                        { id: '20_mulanshi_12', front: '不闻爷娘唤女声', back: '但闻黄河流水鸣溅溅' },
                        { id: '20_mulanshi_13', front: '旦辞黄河去', back: '暮至黑山头' },
                        { id: '20_mulanshi_14', front: '不闻爷娘唤女声', back: '但闻燕山胡骑鸣啾啾' },
                        { id: '20_mulanshi_15', front: '万里赴戎机', back: '关山度若飞' },
                        { id: '20_mulanshi_16', front: '朔气传金柝', back: '寒光照铁衣' },
                        { id: '20_mulanshi_17', front: '将军百战死', back: '壮士十年归' },
                        { id: '20_mulanshi_18', front: '归来见天子', back: '天子坐明堂' },
                        { id: '20_mulanshi_19', front: '策勋十二转', back: '赏赐百千强' },
                        { id: '20_mulanshi_20', front: '可汗问所欲', back: '木兰不用尚书郎' },
                        { id: '20_mulanshi_21', front: '愿驰千里足', back: '送儿还故乡' },
                        { id: '20_mulanshi_22', front: '爷娘闻女来', back: '出郭相扶将' },
                        { id: '20_mulanshi_23', front: '阿姊闻妹来', back: '当户理红妆' },
                        { id: '20_mulanshi_24', front: '小弟闻姊来', back: '磨刀霍霍向猪羊' },
                        { id: '20_mulanshi_25', front: '开我东阁门', back: '坐我西阁床' },
                        { id: '20_mulanshi_26', front: '脱我战时袍', back: '著我旧时裳' },
                        { id: '20_mulanshi_27', front: '当窗理云鬓', back: '对镜帖花黄' },
                        { id: '20_mulanshi_28', front: '出门看火伴', back: '火伴皆惊忙' },
                        { id: '20_mulanshi_29', front: '同行十二年', back: '不知木兰是女郎' },
                        { id: '20_mulanshi_30', front: '雄兔脚扑朔', back: '雌兔眼迷离' },
                        { id: '20_mulanshi_31', front: '双兔傍地走', back: '安能辨我是雄雌' }
                    ]
                },
                {
                    type: 'fillBack',
                    title: '整篇填后句',
                    description: '根据前半句填写后半句',
                    autoFull: true
                },
                {
                    type: 'fillFront',
                    title: '整篇填前句',
                    description: '根据后半句填写前半句',
                    autoFull: true
                },
                {
                    type: 'random',
                    title: '随机抽题练习',
                    description: '从本文中随机抽取题目进行练习',
                    randomCount: 31
                }
            ]
        }
    ]
};

// 多篇组合练习配置
const multiPoemExercises = {
    // 经典名句组合练习
    '经典名句组合': {
        title: '经典名句组合练习',
        description: '从多篇古诗文中随机抽取经典名句进行练习',
        poems: ['quanxue', 'shishuo', 'xiaoyaoyou', 'chibifu', 'shudaonan', 'denggao'],
        randomCount: 10,
        types: ['fillBack', 'fillFront']
    },
    // 唐宋诗词组合练习
    '唐宋诗词组合': {
        title: '唐宋诗词组合练习',
        description: '从唐宋诗词中随机抽取句子进行练习',
        poems: ['denggao', 'pipaxing', 'jinse', 'yumeiren', 'niannujiao', 'yongyule'],
        randomCount: 8,
        types: ['fillBack', 'fillFront']
    },
    // 诗经组合练习
    '诗经组合': {
        title: '诗经组合练习',
        description: '从诗经篇目中随机抽取句子进行练习',
        poems: ['guanju', 'jianjia', 'mang'],
        randomCount: 6,
        types: ['fillBack', 'fillFront']
    },
    // 自定义组合练习
    'custom': {
        title: '自定义组合练习',
        description: '用户自定义选择多篇文章进行练习',
        poems: [], // 用户选择
        randomCount: 5, // 用户设置
        types: ['fillBack', 'fillFront']
    }
};

// 练习模式配置
const exerciseModes = {
    // 单篇练习模式
    single: {
        types: ['fillBack', 'fillFront', 'auto', 'random'],
        descriptions: {
            fillBack: '根据前半句填写后半句',
            fillFront: '根据后半句填写前半句',
            auto: '自动生成填空练习',
            random: '随机抽取题目练习'
        }
    },
    // 多篇组合练习模式
    multi: {
        types: ['fillBack', 'fillFront', 'mixed'],
        descriptions: {
            fillBack: '多篇填后句练习',
            fillFront: '多篇填前句练习',
            mixed: '混合模式练习'
        }
    }
};

// 导出数据库和配置
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        poemDatabase,
        multiPoemExercises,
        exerciseModes
    };
}
