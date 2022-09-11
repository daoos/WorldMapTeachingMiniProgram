//世界国家
const worldCountry = {
        "Afghanistan": "阿富汗",
        "Albania": "阿尔巴尼亚",
        "Algeria": "阿尔及利亚",
        "Angola": "安哥拉",
        "Argentina": "阿根廷",
        "Armenia": "亚美尼亚",
        "Australia": "澳大利亚",
        "Austria": "奥地利",
        "Azerbaijan": "阿塞拜疆",
        "Bahamas": "巴哈马",
        "Bahrain": "巴林",
        "Bangladesh": "孟加拉国",
        "Belarus": "白俄罗斯",
        "Belgium": "比利时",
        "Belize": "伯利兹",
        "Benin": "贝宁",
        "Bhutan": "不丹",
        "Bolivia": "玻利维亚",
        "Bosnia and Herz.": "波斯尼亚和黑塞哥维那",
        "Botswana": "博茨瓦纳",
        "Brazil": "巴西",
        "British Virgin Islands" : "英属维京群岛",
        "Brunei": "文莱",
        "Bulgaria": "保加利亚 ",
        "Burkina Faso": "布基纳法索",
        "Burundi": "布隆迪",
        "Cambodia": "柬埔寨",
        "Cameroon": "喀麦隆",
        "Canada": "加拿大",
        "Cape Verde": "佛得角",
        "Cayman Islands": "开曼群岛",
        "Central African Rep.": "中非共和国",
        "Chad": "乍得",
        "Chile": "智利",
        "China": "中国",
        "Colombia": "哥伦比亚",
        "Comoros": "科摩罗",
        "Congo": "刚果",
        "Costa Rica": "哥斯达黎加",
        "Croatia": "克罗地亚",
        "Cuba": "古巴",
        "Cyprus": "塞浦路斯",
        "Czech Rep.": "捷克共和国",
        "Côte d'Ivoire": "科特迪瓦",
        "Dem. Rep. Congo": "刚果民主共和国",
        "Dem. Rep. Korea": "朝鲜",
        "Denmark": "丹麦",
        "Djibouti": "吉布提",
        "Dominican Rep.": "多米尼加共和国",
        "Ecuador": "厄瓜多尔",
        "Egypt": "埃及",
        "El Salvador": "萨尔瓦多",
        "Equatorial Guinea": "赤道几内亚",
        "Eritrea": "厄立特里亚",
        "Estonia": "爱沙尼亚",
        "Ethiopia": "埃塞俄比亚",
        "Falkland Is.": "福克兰群岛",
        "Fiji": "斐济",
        "Finland": "芬兰",
        "Fr. S. Antarctic Lands": "所罗门群岛",
        "France": "法国",
        "Gabon": "加蓬",
        "Gambia": "冈比亚",
        "Georgia": "格鲁吉亚",
        "Germany": "德国",
        "Ghana": "加纳",
        "Greece": "希腊",
        "Greenland": "格陵兰",
        "Guatemala": "危地马拉",
        "Guinea": "几内亚",
        "Guinea-Bissau": "几内亚比绍",
        "Guyana": "圭亚那",
        "Haiti": "海地",
        "Honduras": "洪都拉斯",
        "Hungary": "匈牙利",
        "Iceland": "冰岛",
        "India": "印度",
        "Indonesia": "印度尼西亚",
        "Iran": "伊朗",
        "Iraq": "伊拉克",
        "Ireland": "爱尔兰",
        "Isle of Man": "马恩岛",
        "Israel": "以色列",
        "Italy": "意大利",
        "Jamaica": "牙买加",
        "Japan": "日本",
        "Jordan": "约旦",
        "Kazakhstan": "哈萨克斯坦",
        "Kenya": "肯尼亚",
        "Korea": "韩国",
        "Kuwait": "科威特",
        "Kyrgyzstan": "吉尔吉斯斯坦",
        "Lao PDR": "老挝",
        "Latvia": "拉脱维亚",
        "Lebanon": "黎巴嫩",
        "Lesotho": "莱索托",
        "Liberia": "利比里亚",
        "Libya": "利比亚",
        "Lithuania": "立陶宛",
        "Luxembourg": "卢森堡",
        "Macedonia": "马其顿",
        "Madagascar": "马达加斯加",
        "Malawi": "马拉维",
        "Malaysia": "马来西亚",
        "Maldives": "马尔代夫",
        "Mali": "马里",
        "Malta": "马耳他",
        "Mauritania": "毛利塔尼亚",
        "Mauritius": "毛里求斯",
        "Mexico": "墨西哥",
        "Moldova": "摩尔多瓦",
        "Monaco": "摩纳哥",
        "Mongolia": "蒙古",
        "Montenegro": "黑山共和国",
        "Morocco": "摩洛哥",
        "Mozambique": "莫桑比克",
        "Myanmar": "缅甸",
        "Namibia": "纳米比亚",
        "Nepal": "尼泊尔",
        "Netherlands": "荷兰",
        "New Caledonia": "新喀里多尼亚",
        "New Zealand": "新西兰",
        "Nicaragua": "尼加拉瓜",
        "Niger": "尼日尔",
        "Nigeria": "尼日利亚",
        "Norway": "挪威",
        "Oman": "阿曼",
        "Pakistan": "巴基斯坦",
        "Panama": "巴拿马",
        "Papua New Guinea": "巴布亚新几内亚",
        "Paraguay": "巴拉圭",
        "Peru": "秘鲁",
        "Philippines": "菲律宾",
        "Poland": "波兰",
        "Portugal": "葡萄牙",
        "Puerto Rico": "波多黎各",
        "Qatar": "卡塔尔",
        "Reunion": "留尼旺",
        "Romania": "罗马尼亚",
        "Russia": "俄罗斯",
        "Rwanda": "卢旺达",
        "S. Geo. and S. Sandw. Is.": "南乔治亚和南桑威奇群岛",
        "S. Sudan": "南苏丹",
        "San Marino": "圣马力诺",
        "Saudi Arabia": "沙特阿拉伯",
        "Senegal": "塞内加尔",
        "Serbia": "塞尔维亚",
        "Sierra Leone": "塞拉利昂",
        "Singapore": "新加坡",
        "Slovakia": "斯洛伐克",
        "Slovenia": "斯洛文尼亚",
        "Solomon Is.": "所罗门群岛",
        "Somalia": "索马里",
        "South Africa": "南非",
        "Spain": "西班牙",
        "Sri Lanka": "斯里兰卡",
        "Sudan": "苏丹",
        "Suriname": "苏里南",
        "Swaziland": "斯威士兰",
        "Sweden": "瑞典",
        "Switzerland": "瑞士",
        "Syria": "叙利亚",
        "Tajikistan": "塔吉克斯坦",
        "Tanzania": "坦桑尼亚",
        "Thailand": "泰国",
        "Togo": "多哥",
        "Tonga": "汤加",
        "Trinidad and Tobago": "特立尼达和多巴哥",
        "Tunisia": "突尼斯",
        "Turkey": "土耳其",
        "Turkmenistan": "土库曼斯坦",
        "U.S. Virgin Islands": "美属维尔京群岛",
        "Uganda": "乌干达",
        "Ukraine": "乌克兰",
        "United Arab Emirates": "阿拉伯联合酋长国",
        "United Kingdom": "英国",
        "United States": "美国",
        "Uruguay": "乌拉圭",
        "Uzbekistan": "乌兹别克斯坦",
        "Vanuatu": "瓦努阿图",
        "Vatican City": "梵蒂冈城",
        "Venezuela": "委内瑞拉",
        "Vietnam": "越南",
        "W. Sahara": "西撒哈拉",
        "Yemen": "也门",
        "Yugoslavia": "南斯拉夫",
        "Zaire": "扎伊尔",
        "Zambia": "赞比亚",
        "Zimbabwe": "津巴布韦"
}

const ChinaCity = {
	"Beijing":["北京",116.3671875, 39.90973623453719, 0],
	"Shanghai":["上海",121.46, 31.23, 0], 
	"Guangzhou":["广州",113.26, 23.14, 0], 
	"Chengdu":["成都",104.06, 30.73, 0], 
	"Shenzhen":["深圳",114.06, 22.55, 0],
	"Hong Kong":["香港",114.15, 22.29, 0],
	"Tianjin":["天津", 117.19, 39.10, 0]
}

//英国城市
const EnglandCity = {
    "London":["伦敦",-0.05,51.36, 0],
	"Birmingham":["伯明翰", -1.90, 52.48, 0],
	"Manchester":["曼切斯特", -2.24, 53.48, 0],
	"Liverpool":["利物浦",  -2.99, 53.41, 0],
	"Leeds":["利兹", -1.54, 53.80, 0]
}

//德国城市
const GermanCity = {
    "Berlin":["柏林",53,13.25, 0],
	"Munich":["慕尼黑", 11.55, 48.16, 0],
	"Hamburg":["汉堡",  9.99, 53.56, 0]
}

//澳大利亚城市
const AustraliaCity = {
    "Canberra":["堪培拉",149.08, -35.15, 0],
	"Sydney":["悉尼", 151.25, -33.87, 0],
	"Melbourne":["墨尔本", 144.93, -37.75, 0]

}

//美国城市
const AmericaCity = {
    "Washington": ["华盛顿", -77.02, 38.53, 0],
	"New York":["纽约",  -74.00, 40.78, 0],
	"Los Angeles":["洛杉矶",  -118.30, 34.01, 0],
	"Chicago":["芝加哥", -87.62, 42.03, 0],
	"Houston":["休斯顿", -95.44, 29.84, 0],
	"San Francisco":["旧金山",  -122.43, 37.82, 0]
}

//巴西城市
const BrazilCity = {
    "Brasilia": ["巴西利亚",-47.55,-15.47, 0],
	"Salvador":["萨尔瓦多", -38.49, -12.94, 0],
	"Rio de Janeiro":["里约热内卢", -43.24, -22.83, 0]
}

export const worldCountryNameMap = worldCountry;

//返回世界的名字数组
export function getWorldCountryNameList() {
    let list = [];
    for (let key in worldCountry) {
        list.push(worldCountry[key]+'('+key+')');
    }
    //将六个重点国家的城市名字也放进去
    // for (let key in ChinaCity) {
    //     list.push(ChinaCity[key][0] + '(' + key + ')');
    // }
    // for (let key in EnglandCity) {
    //     list.push(EnglandCity[key][0]  + '(' + key + ')');
    // }
    // for (let key in GermanCity) {
    //     list.push(GermanCity[key][0]  + '(' + key + ')');
    // }
    // for (let key in AustraliaCity) {
    //     list.push(AustraliaCity[key][0]  + '(' + key + ')');
    // }
    // for (let key in AmericaCity) {
    //     list.push(AmericaCity[key][0]  + '(' + key + ')');
    // }
    // for (let key in BrazilCity) {
    //     list.push(BrazilCity[key][0]  + '(' + key + ')');
    // }
    return list;
}

//根据英文查找国家中文名称
export function getCountryNameByEnglish(EnName){
    for (let key in worldCountry){
        if(key==EnName){
            return worldCountry[key]+'('+key+')'
        }
    }
}

//查看是否是国家
export function ifNameIsCountry(name){
    return !(Object.keys(worldCountry).indexOf(name)==-1);
}

//根据城市名字找到城市的经纬度
export function findCityByName(name){
    for (let key in ChinaCity) {
        if (key == name) {
            return [ChinaCity[key],"China"]
        }
    }
    for (let key in EnglandCity) {
        if (key == name) {
            return [EnglandCity[key], "United Kingdom"]
        }
    }
    for (let key in GermanCity) {
        if (key == name) {
            return [GermanCity[key],"Germany"]
        }
    }
    for (let key in AustraliaCity) {
        if (key == name) {
            return [AustraliaCity[key],"Australia"]
        }
    }
    for (let key in AmericaCity) {
        if (key == name) {
            return [AmericaCity[key],"United States"]
        }
    }
    for (let key in BrazilCity) {
        if (key == name) {
            return [BrazilCity[key],"Brazil"]
        }
    }
}
