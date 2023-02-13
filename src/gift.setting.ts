export const GLOBAL_KEYS = {
  EXIST_KEY: "HAS_GIFT",
  NAME_KEY: "GIFT_NAME",
  IMAGE_KEY: "GIFT_IMAGE_URL",
};

// 是否允许对方在抽奖结束后重新抽奖
export const IS_SHOW_RESTART = false;
export interface HomeConfig {
  title: string;
  messages: { key: string; wording: string }[];
  owner: string;
  timeout: 5000;
  targetGiftIndex: number;
}

// 首页配置
export const homeConfig: HomeConfig = {
  // 标题
  title: "情人节送礼抽奖",
  // 留言，数组的每一项代表一行
  messages: [
    { key: "a", wording: "2023.02.14" },
    { key: "s", wording: "从一点点喜欢，" },
    { key: "d", wording: "变成满是欢喜。" },
  ],
  // 最终解释权归属人
  owner: "ivan0525",
  // 抽奖转盘的动画时间，单位毫秒
  timeout: 5000,
  // 指定赠送的礼物的索引（第几个礼物中奖），取值范围 0-8
  targetGiftIndex: 3,
};

// 礼物清单
// 字段 key 不用改，只要保证每个礼物的 key 字段是不同的即可
// 图片放在 public/images 中，建议是正方形，否则影响视觉体验
// name 是礼物的全称；alias 是礼物的简称（用来显示在抽奖方格里）

export interface IGift {
  key: string;
  name: string;
  alias: string;
  image: string;
  description: string;
}

export const gifts: IGift[] = [
  {
    key: "q",
    name: "Dior双飞套装",
    alias: "Dior双飞",
    image: new URL("./images/1.png", import.meta.url).href,
    description: "「经典迷人色彩，彰显奢华魅力」",
  },
  {
    key: "w",
    name: "腾讯视频终身VIP",
    alias: "VIP",
    image: new URL("./images/2.png", import.meta.url).href,
    description: "“为你承包一辈子的 VIP”",
  },
  {
    key: "e",
    name: "兰蔻小黑瓶套装",
    alias: "小黑瓶套装",
    image: new URL("./images/3.png", import.meta.url).href,
    description: "「强维稳，快修护」",
  },
  {
    key: "r",
    name: "520红包",
    alias: "520",
    image: new URL("./images/6.png", import.meta.url).href,
    description: "“想给你唱一百首情歌”",
  },
  {
    key: "t",
    name: "Dior星空套装",
    alias: "Dior星空",
    image: new URL("./images/5.png", import.meta.url).href,
    description: "「百变唇妆，精美雕琢」",
  },
  {
    key: "y",
    name: "1314红包",
    alias: "1314",
    image: new URL("./images/6.png", import.meta.url).href,
    description: "“从今往后，我都会在你旁边”",
  },
  {
    key: "u",
    name: "UR购物券：¥1,000",
    alias: "UR",
    image: new URL("./images/7.png", import.meta.url).href,
    description: "“UR！买！”",
  },
  {
    key: "i",
    name: "Dyson美发套装",
    alias: "戴森",
    image: new URL("./images/8.png", import.meta.url).href,
    description: "「不同造型需求，全面满足」",
  },
];
