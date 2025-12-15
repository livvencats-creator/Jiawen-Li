// Default music data
const defaultMusicData = [
  {
    id: 1,
    title: "诗歌舞街",
    artist: "my little airport",
    cover: "assets/Sabina之泪.jpg",
    genres: ["Indie", "Electronic"],
    scenes: ["Solitude", "Studying"],
    reason: "深夜画图时听这首歌，会让时间变得缓慢。",
    contributor: {
      major: "Architecture",
      occupation: "Student"
    },
    link: "https://open.spotify.com/track/45rZ0CtRR470rAOFiWJNeM?si=f8b4f02e4dac471b/"
  },
  {
    id: 2,
    title: "train to heaven",
    artist: "安溥",
    cover: "assets/9522.jpg",
    genres: ["Pop"],
    scenes: ["Solitude", "Studying", "Commuting"],
    reason: "一个人在路上时听，会有被包裹的感觉。",
    contributor: {
      major: "Architecture",
      occupation: "Student"
    },
    link: "https://open.spotify.com/track/49EIVXKajHp0cPLM4eDhIF?si=36c4091c0d674054"
  },
  {
    id: 3,
    title: "Whisky",
    artist: "my little airport",
    cover: "assets/威士忌.jpg",
    genres: ["Indie", "Electronic"],
    scenes: ["Solitude", "Studying", "Commuting"],
    reason: "It reminds me of a lot of memories.",
    contributor: {
      major: "Architecture",
      occupation: "Student"
    },
    link: "https://open.spotify.com/track/0FGkzJY7uDgzN26n6lWHx7?si=f046b22e7bbd4a5f"
  },
  {
    id: 4,
    title: "Come Together",
    artist: "The Beatles",
    cover: "assets/Abbey_Road.jpg",
    genres: ["Pop", "Rock"],
    scenes: ["Solitude", "Studying"],
    reason: "This song has a great rhythm.",
    contributor: {
      major: "Architecture",
      occupation: "Student"
    },
    link: "https://open.spotify.com/track/2EqlS6tkEnglzr7tkKAAYD?si=2f1509bf120c45e4"
  },
  {
    id: 5,
    title: "四分钟热度",
    artist: "想想XiangXiang",
    cover: "assets/也就听个响.jpg",
    genres: ["Pop", "Rock", "Indie"],
    scenes: ["Solitude", "Commuting", "Traveling"],
    reason: "Feels very warm.",
    contributor: {
      major: "Architecture",
      occupation: "Student"
    },
    link: "https://open.spotify.com/track/33Df4GZI7KLYVd4Id72bxo?si=d6facef6c207497a"
  },
  {
    id: 6,
    title: "Intro(Just Like Honey)",
    artist: "yourboyfriendsucks!",
    cover: "assets/第一集.jpg",
    genres: ["Pop", "Rock", "Indie"],
    scenes: ["Solitude", "Commuting", "Traveling"],
    reason: "Feels very warm.",
    contributor: {
      major: "Architecture",
      occupation: "Student"
    },
    link: "https://open.spotify.com/track/2zlOXyVWCaJiHNQja2MnoB?si=3cf442b8bc904e0d"
  },
  {
    id: 7,
    title: "跑个步3000",
    artist: "yourboyfriendsucks!",
    cover: "assets/第二集.jpg",
    genres: ["Pop", "Rock", "Indie"],
    scenes: ["Solitude", "Commuting", "Exercising"],
    reason: "Feels very warm.",
    contributor: {
      major: "Architecture",
      occupation: "Student"
    },
    link: "https://open.spotify.com/track/6rPuxRL7nlilRbiLu0M1xO?si=b5f22e8fc8f3447b"
  },
  {
    id: 8,
    title: "关心人事物",
    artist: "想想XiangXiang",
    cover: "assets/玩玩你的.jpg",
    genres: ["Pop", "Rock", "Indie"],
    scenes: ["Solitude", "Commuting", "Exercising", "Traveling"],
    reason: "Feels very warm.",
    contributor: {
      major: "Architecture",
      occupation: "Student"
    },
    link: "https://open.spotify.com/track/0sE8rThcN9Webc0g1lL388?si=852e2f82f78e4828"
  },
  {
    id: 9,
    title: "再也不玩C86",
    artist: "想想XiangXiang",
    cover: "assets/噪想流行.jpeg",
    genres: ["Rock", "Indie"],
    scenes: ["Solitude", "Traveling"],
    reason: "Feels very warm.",
    contributor: {
      major: "Architecture",
      occupation: "Student"
    },
    link: "https://open.spotify.com/track/0iGWPKHCyZV7P0i0mGahus?si=716c088677124851"
  },
  {
    id: 10,
    title: "Paradise City",
    artist: "Guns N' Roses",
    cover: "assets/Paradisecity.jpg",
    genres: ["Pop", "Rock"],
    scenes: ["Exercising"],
    reason: "Noisy enough",
    contributor: {
      major: "Architecture",
      occupation: "Student"
    },
    link: "https://open.spotify.com/track/6eN1f9KNmiWEhpE2RhQqB5?si=6d5463830f5b47ba"
  },
  {
    id: 11,
    title: "Sweet Child O' Mine",
    artist: "Guns N' Roses",
    cover: "assets/Guns_N'_Roses_-_Sweet_Child_o'_Mine.png",
    genres: ["Pop", "Rock"],
    scenes: ["Exercising", "Studying"],
    reason: "Noisy enough",
    contributor: {
      major: "Architecture",
      occupation: "Student"
    },
    link: "https://open.spotify.com/track/7snQQk1zcKl8gZ92AnueZW?si=0e7e27fed74f46a6"
  },
  {
    id: 12,
    title: "Knockin' On Heaven's Door",
    artist: "Guns N' Roses",
    cover: "assets/Knockin' On Heaven's Door.jpg",
    genres: ["Pop", "Rock"],
    scenes: ["Studying"],
    reason: "Really knocking on Heaven's Door when studying.",
    contributor: {
      major: "Architecture",
      occupation: "Student"
    },
    link: "https://open.spotify.com/track/7snQQk1zcKl8gZ92AnueZW?si=0e7e27fed74f46a6"
  },
  {
    id: 13,
    title: "World Cup Fantasy",
    artist: "Chinese Football",
    cover: "assets/Chinese Football.jpg",
    genres: ["Pop", "Rock", "Indie", "Electronic"],
    scenes: ["Studying", "Traveling", "Solitude"],
    reason: "As if every word had evaporated.",
    contributor: {
      major: "Architecture",
      occupation: "Student"
    },
    link: "https://open.spotify.com/track/1DKDNwlhCH3aIBFluNRHNw?si=ef7cab2f1aac4c24"
  },
  {
    id: 14,
    title: "Continue",
    artist: "Chinese Football",
    cover: "assets/Continue.jpg",
    genres: ["Pop", "Rock", "Indie", "Electronic"],
    scenes: ["Studying", "Solitude"],
    reason: "As if every word had evaporated.",
    contributor: {
      major: "Architecture",
      occupation: "Student"
    },
    link: "https://open.spotify.com/track/3ibJvwJyKyeIfEcUxqtzxh?si=44b92ef17e654ecd"
  },
  {
    id: 15,
    title: "Eclipse",
    artist: "Pink Floyd",
    cover: "assets/Dark_Side_of_the_Moon.png",
    genres: ["Pop", "Rock", "Electronic"],
    scenes: ["Solitude"],
    reason: "All that you see",
    contributor: {
      major: "Architecture",
      occupation: "Student"
    },
    link: "https://open.spotify.com/track/1tDWVeCR9oWGX8d5J9rswk?si=c3a9e69f0fb34687"
  },
  {
    id: 16,
    title: "The Grants",
    artist: "Lana Del Rey",
    cover: "assets/Lana_Del_Rey_-_Did_You_Know_That_There's_a_Tunnel_Under_Ocean_Blvd.png",
    genres: ["Pop"],
    scenes: ["Studying", "Traveling", "Solitude"],
    reason: "All that you see",
    contributor: {
      major: "Architecture",
      occupation: "Student"
    },
    link: "https://open.spotify.com/track/3KbOflJ5JqHWtmco4PiO3h?si=1fbff89709824aab"
  },
  {
    id: 17,
    title: "Electronic Girl",
    artist: "Chinese Football",
    cover: "assets/Electronic girl.jpg",
    genres: ["Pop", "Rock", "Indie", "Electronic"],
    scenes: ["Traveling", "Solitude"],
    reason: "Unclear",
    contributor: {
      major: "Architecture",
      occupation: "Student"
    },
    link: "https://open.spotify.com/track/3jLdAQ7guhHOppAj02RJmW?si=dc9fd4573d5848db"
  },
  {
    id: 18,
    title: "If It's In You",
    artist: "Syd Barrett",
    cover: "assets/Sydbarrett-madcaplaughs.jpg",
    genres: ["Pop", "Rock"],
    scenes: ["Commuting","Traveling"],
    reason: "Very random.",
    contributor: {
      major: "Architecture",
      occupation: "Student"
    },
    link: "https://open.spotify.com/track/7Hx8aFS0iHvHSo0oUS7gAZ?si=2184a9c5fffb4dff"
  },
  {
    id: 19,
    title: "In My Life",
    artist: "The Beatles",
    cover: "assets/Rubber_Soul.png",
    genres: ["Pop", "Rock"],
    scenes: ["Commuting","Traveling", "Solitude"],
    reason: "Always love it.",
    contributor: {
      major: "Architecture",
      occupation: "Student"
    },
    link: "https://open.spotify.com/track/3KfbEIOC7YIv90FIfNSZpo?si=98465e57cb1f457f"
  },
  {
    id: 20,
    title: "April Story",
    artist: "Chinese Football",
    cover: "assets/win&lose.jpg",
    genres: ["Pop", "Rock", "Indie", "Electronic"],
    scenes: ["Commuting", "Traveling"],
    reason: " .",
    contributor: {
      major: "Architecture",
      occupation: "Student"
    },
    link: "https://open.spotify.com/track/5NtGuldGLSPIxACTIf2my0?si=7355df1558cb4e16"
  },
  {
    id: 21,
    title: "一个眼神",
    artist: "my little airport",
    cover: "assets/one look.png",
    genres: ["Pop", "Indie", "Electronic"],
    scenes: ["Studying", "Solitude"],
    reason: " ",
    contributor: {
      major: "Architecture",
      occupation: "Student"
    },
    link: "https://open.spotify.com/track/6BtPxWB4UsgZraWugItyrn?si=ed799df4c4bc4ccf"
  },
  {
    id: 22,
    title: "milan",
    artist: "my little airport",
    cover: "assets/香港是个大商场.jpg",
    genres: ["Pop", "Indie", "Electronic"],
    scenes: ["Studying", "Solitude"],
    reason: "Like an old friend of mine.",
    contributor: {
      major: "Architecture",
      occupation: "Student"
    },
    link: "https://open.spotify.com/track/2qZREisw5C5yCvoLHZx29a?si=26b58d75a1a84df3"
  },
  {
    id: 23,
    title: "Suspension",
    artist: "8Immortals",
    cover: "assets/巨人川.jpg",
    genres: ["Indie", "Electronic", "Rock"],
    scenes: ["Studying"],
    reason: " ",
    contributor: {
      major: "Architecture",
      occupation: "Student"
    },
    link: "https://open.spotify.com/track/52G8inivYHa2kOXQGIb9De?si=62e335654217465a"
  },
  {
    id: 24,
    title: "吞吐",
    artist: "8Immortals",
    cover: "assets/极乐大厦揭幕.jpg",
    genres: ["Indie", "Electronic"],
    scenes: ["Studying", "Commuting", "Rock"],
    reason: " ",
    contributor: {
      major: "Architecture",
      occupation: "Student"
    },
    link: "https://open.spotify.com/track/52JGmgJojrEWKTkGXYqHHU?si=d31013a552ee4887"
  },
  {
    id: 25,
    title: "巫堵",
    artist: "deca joins",
    cover: "assets/浴室.jpg",
    genres: ["Indie", "Rock"],
    scenes: ["Solitude"],
    reason: " ",
    contributor: {
      major: "Architecture",
      occupation: "Student"
    },
    link: "https://open.spotify.com/track/6CxQsBfTmhx0RsoJoV8hH7?si=d5ac89b10df64e23"
  },
  {
    id: 26,
    title: "人洞山",
    artist: "草东没有派对",
    cover: "assets/瓦合.jpg",
    genres: ["Indie", "Rock"],
    scenes: ["Commuting", "Solitude"],
    reason: " ",
    contributor: {
      major: "Architecture",
      occupation: "Student"
    },
    link: "https://open.spotify.com/track/1sVa1skVE7TerpNTWVyrGh?si=b6e079e19e6e479a"
  },
  {
    id: 27,
    title: "消亡史",
    artist: "陈婧霏",
    cover: "assets/陈婧霏.jpg",
    genres: ["Indie", "Pop"],
    scenes: ["Commuting", "Studying"],
    reason: " ",
    contributor: {
      major: "Architecture",
      occupation: "Student"
    },
    link: "https://open.spotify.com/track/7LOKYieAwZPjyjydCmxqan?si=049d4184281f41ef"
  },
  {
    id: 28,
    title: "LUNCH",
    artist: "my little airport",
    cover: "assets/lunch.png",
    genres: ["Indie", "Electronic"],
    scenes: ["Commuting","Studying","Solitude"],
    reason: " ",
    contributor: {
      major: "Architecture",
      occupation: "Student"
    },
    link: "https://open.spotify.com/track/4KPYzvCbNRFCljGyqyhlQb?si=44d0d1c9c9b847ef"
  },
  {
    id: 29,
    title: "你叫我译一首德国歌词",
    artist: "my little airport",
    cover: "assets/你说之后会找我.jpg",
    genres: ["Indie", "Electronic"],
    scenes: ["Traveling","Solitude"],
    reason: " ",
    contributor: {
      major: "Architecture",
      occupation: "Student"
    },
    link: "https://open.spotify.com/track/4bpyDBROAFaXmL2roHP3Mp?si=8df4c285e3d44d39"
  },
  {
    id: 30,
    title: "不要把冬天衫放回衣柜",
    artist: "my little airport",
    cover: "assets/跟你开玩笑.jpg",
    genres: ["Indie", "Electronic"],
    scenes: ["Studying","Solitude"],
    reason: " ",
    contributor: {
      major: "Architecture",
      occupation: "Student"
    },
    link: "https://open.spotify.com/track/2NmGfvtRSYdxUOeJDtf8VN?si=3036356273714297"
  },
  {
    id: 31,
    title: "如果流浪",
    artist: "Veegee徐若僑, 陳婧霏",
    cover: "assets/如果流浪.jpg",
    genres: ["Pop"],
    scenes: ["Studying","Solitude","Traveling"],
    reason: " ",
    contributor: {
      major: "Architecture",
      occupation: "Student"
    },
    link: "https://open.spotify.com/track/4n7NL3NfnpLzelcOaFsXQJ?si=9797904bb5324e21"
  },
  {
    id: 32,
    title: "山顶. 公仔. 波板糖",
    artist: "my little airport",
    cover: "assets/山顶公仔波板糖.jpg",
    genres: ["Indie", "Electronic"],
    scenes: ["Traveling"],
    reason: " ",
    contributor: {
      major: "Architecture",
      occupation: "Student"
    },
    link: "https://open.spotify.com/track/4XuNf6AjDMerjTEjCVjIik?si=b7700ec40d35498c"
  },
  {
    id: 33,
    title: "银河公园",
    artist: "THE BOOTLEGS",
    cover: "assets/I feel good.jpg",
    genres: ["Indie", "Rock"],
    scenes: ["Commuting"],
    reason: " ",
    contributor: {
      major: "Architecture",
      occupation: "Student"
    },
    link: "https://open.spotify.com/track/1iWkUD1Iyi1UmKolsJzRQ8?si=ea0694926cf048b0"
  },
  {
    id: 34,
    title: "你有无试过",
    artist: "粉红A",
    cover: "assets/为艺术牺牲.jpg",
    genres: ["Indie", "Electronic"],
    scenes: ["Solitude"],
    reason: " ",
    contributor: {
      major: "Architecture",
      occupation: "Student"
    },
    link: "https://open.spotify.com/track/2vHgpFPZB8frgEL77zSvaP?si=94097ff20cfe42a9"
  },
  {
    id: 35,
    title: "肥蝶他久久不能离去",
    artist: "超级市场",
    cover: "assets/2022我们的零零碎碎.jpg",
    genres: ["Indie", "Electronic"],
    scenes: ["Commuting", "Solitude"],
    reason: " ",
    contributor: {
      major: "Architecture",
      occupation: "Student"
    },
    link: "https://open.spotify.com/track/6ekSD6k8VEA86innmrWBpg?si=2c1d24ee72c74d5c"
  },
  {
    id: 36,
    title: "下亚厘毕道",
    artist: "my little airport",
    cover: "assets/火炭丽琪.png",
    genres: ["Indie", "Electronic"],
    scenes: ["Traveling","Solitude", "Commuting"],
    reason: " ",
    contributor: {
      major: "Architecture",
      occupation: "Student"
    },
    link: "https://open.spotify.com/track/1iIFrkPdNSvYz8XIXmSJoY?si=8bfe1a02686a4277"
  },
  {
    id: 37,
    title: "土瓜湾情歌",
    artist: "my little airport",
    cover: "assets/适婚的年龄.jpg",
    genres: ["Indie", "Electronic"],
    scenes: ["Solitude", "Commuting","Studying"],
    reason: " ",
    contributor: {
      major: "Architecture",
      occupation: "Student"
    },
    link: "https://open.spotify.com/track/1hnWusq6OGMuRsKvcmFLl8?si=b77f20fa69b3494d"
  },
  {
    id: 38,
    title: "超度我",
    artist: "福禄寿",
    cover: "assets/我用什么把你留住.jpg",
    genres: ["Indie", "Electronic"],
    scenes: ["Studying", "Commuting"],
    reason: " ",
    contributor: {
      major: "Architecture",
      occupation: "Student"
    },
    link: "https://open.spotify.com/track/3XjpT7DTXGVcHxsExf5nVE?si=1e809828ebeb447b"
  },
  {
    id: 39,
    title: "恐怖的房子",
    artist: "超级市场",
    cover: "assets/音乐会.jpg",
    genres: ["Indie", "Electronic"],
    scenes: ["Commuting", "Solitude", "Traveling"],
    reason: " ",
    contributor: {
      major: "Architecture",
      occupation: "Student"
    },
    link: "https://open.spotify.com/track/55bnsbmJ4SMs6xziBQhuxi?si=baff0bcec2454052"
  },
  {
    id: 40,
    title: "The Subway",
    artist: "Chappell Roan",
    cover: "assets/Chappell_Roan_-_The_Subway.png",
    genres: ["Pop"],
    scenes: ["Studying", "Commuting", "Traveling"],
    reason: " ",
    contributor: {
      major: "Architecture",
      occupation: "Student"
    },
    link: "https://open.spotify.com/track/2SsY5k7UWFqgye3PUMG3Oq?si=2cb5aa74964947d1"
  },
  {
    id: 41,
    title: "我们一起离开吧",
    artist: "my little airport",
    cover: "assets/寂寞星期五.jpg",
    genres: ["Indie", "Electronic"],
    scenes: ["Traveling"],
    reason: " ",
    contributor: {
      major: "Architecture",
      occupation: "Student"
    },
    link: "https://open.spotify.com/track/5HtnfNpC6FoeKIswjbML92?si=20ac63116fd8455f"
  },
  {
    id: 42,
    title: "Pink Pony Club",
    artist: "Chappell Roan",
    cover: "assets/Chappell_Roan_-_The_Rise_and_Fall_of_a_Midwest_Princess.png",
    genres: ["Pop"],
    scenes: ["Exercising","Studying"],
    reason: " ",
    contributor: {
      major: "Architecture",
      occupation: "Student"
    },
    link: "https://open.spotify.com/track/1k2pQc5i348DCHwbn5KTdc?si=3a0eec710ccb434b"
  },
  {
    id: 43,
    title: "SOS",
    artist: "超级市场",
    cover: "assets/二零零五我们零零碎碎的理论.jpg",
    genres: ["Indie", "Electronic"],
    scenes: ["Studying", "Solitude"],
    reason: " ",
    contributor: {
      major: "Architecture",
      occupation: "Student"
    },
    link: "https://open.spotify.com/track/2o2JUyGLfMZPxh9mHhk2I2?si=c0155fc829b54af2"
  },
  {
    id: 44,
    title: "With Or Without You",
    artist: "U2",
    cover: "assets/with or without you.jpg",
    genres: ["Pop", "Electronic", "Rock"],
    scenes: ["Traveling", "Solitude"],
    reason: " ",
    contributor: {
      major: "Architecture",
      occupation: "Student"
    },
    link: "https://open.spotify.com/track/6ADSaE87h8Y3lccZlBJdXH?si=76106682e52f480e"
  },
  {
    id: 45,
    title: "Wish You Were Here",
    artist: "Pink Floyd",
    cover: "assets/wish you were here.jpg",
    genres: ["Pop", "Rock"],
    scenes: ["Traveling", "Commuting"],
    reason: " ",
    contributor: {
      major: "Architecture",
      occupation: "Student"
    },
    link: "https://open.spotify.com/track/6mFkJmJqdDVQ1REhVfGgd1?si=913346f1cd174450"
  },
  {
    id: 46,
    title: "让我搭一班会爆炸的飞机",
    artist: "my little airport",
    cover: "assets/我们在炎热与抑郁的夏天 无法停止抽烟.jpg",
    genres: ["Indie", "Electronic"],
    scenes: ["Traveling", "Studying"],
    reason: " ",
    contributor: {
      major: "Architecture",
      occupation: "Student"
    },
    link: "https://open.spotify.com/track/4jeJIw8nPdUiqBYiWRIP3g?si=7a1a516d2bdf4f63"
  },
  {
    id: 47,
    title: "Into the Red",
    artist: "Hans Zimmer",
    cover: "assets/rush.jpg",
    genres: ["Others"],
    scenes: ["Studying"],
    reason: " ",
    contributor: {
      major: "Computer Science",
      occupation: "Student"
    },
    link: "https://open.spotify.com/track/7B9WXEqhJqkXAtLOGdg9Kf?si=b6355900ebe040d4"
  },
  {
    id: 48,
    title: "Wrath of Man",
    artist: "Chris Benstead",
    cover: "assets/Warth of Man.jpg",
    genres: ["Others"],
    scenes: ["Studying"],
    reason: " ",
    contributor: {
      major: "Computer Science",
      occupation: "Student"
    },
    link: "https://open.spotify.com/track/72OwjpRu5Hl3CGXSDfgbYz?si=8d83eb90c4aa4320"
  },
  {
    id: 49,
    title: "14.3 Billion Years",
    artist: "Andrew Prahlow",
    cover: "assets/outer wilds.jpg",
    genres: ["Electronic", "Others"],
    scenes: ["Studying","Traveling"],
    reason: " ",
    contributor: {
      major: "Computer Science",
      occupation: "Student"
    },
    link: "https://open.spotify.com/track/6Pk74EH6WUornCtIoP12jE?si=146a599111454fc2"
  },
  {
    id: 50,
    title: "Traveler's encore",
    artist: "Andrew Prahlow",
    cover: "assets/outer wilds2.jpg",
    genres: ["Electronic", "Others"],
    scenes: ["Studying","Traveling"],
    reason: " ",
    contributor: {
      major: "Computer Science",
      occupation: "Student"
    },
    link: "https://open.spotify.com/track/3ocxOcf7yvQCJ5LRuex2iY?si=45287da256854faf"
  },
  {
    id: 51,
    title: "Event Horizon",
    artist: "Younha",
    cover: "assets/end theory.jpg",
    genres: ["Pop", "Rock"],
    scenes: ["Studying","Traveling", "Commuting"],
    reason: " ",
    contributor: {
      major: "Architecture",
      occupation: "Student"
    },
    link: "https://open.spotify.com/track/6RBziRcDeiho3iTPdtEeg9?si=817829f958ed44ae"
  },
  {
    id: 52,
    title: "Waiting",
    artist: "Younha",
    cover: "assets/Waiting.jpg",
    genres: ["Pop", "Rock"],
    scenes: ["Traveling", "Commuting"],
    reason: " ",
    contributor: {
      major: "Architecture",
      occupation: "Student"
    },
    link: "https://open.spotify.com/track/33uA9i4mmbHbaFZ3i8GgxS?si=34cbd6c58ed74895"
  },
  {
    id: 53,
    title: "Sudden Shower",
    artist: "ECLIPSE",
    cover: "assets/Lovely_Runner_Pt.1.png",
    genres: ["Pop", "Rock"],
    scenes: ["Studying", "Commuting"],
    reason: " ",
    contributor: {
      major: "Architecture",
      occupation: "Student"
    },
    link: "https://open.spotify.com/track/1OhIn0L6iofnk5bjalWfHq?si=92cd6a2cdeef4321"
  },
  {
    id: 54,
    title: "Farewell Once Again",
    artist: "Changseop Lee",
    cover: "assets/Farewell once again.jpg",
    genres: ["Pop"],
    scenes: ["Studying", "Commuting"],
    reason: " ",
    contributor: {
      major: "Architecture",
      occupation: "Student"
    },
    link: "https://open.spotify.com/track/352KleOeLaDzFo8ieVd08b?si=160ba4a9208647eb"
  },
  {
    id: 55,
    title: "Coming of Age Story",
    artist: "Mujin Lee",
    cover: "assets/Coming Of Age Story.png",
    genres: ["Pop"],
    scenes: ["Traveling", "Commuting"],
    reason: " ",
    contributor: {
      major: "Architecture",
      occupation: "Student"
    },
    link: "https://open.spotify.com/track/2ZTU8atPwouhoQSvxv9aQj?si=d6d9296311d24cc7"
  },
  {
    id: 56,
    title: "Me After You",
    artist: "Paul Kim",
    cover: "assets/Me After You.jpg",
    genres: ["Pop"],
    scenes: ["Traveling", "Commuting"],
    reason: " ",
    contributor: {
      major: "Architecture",
      occupation: "Student"
    },
    link: "https://open.spotify.com/track/3gucipmp9z0bf7pjEbtTX0?si=d0a7cd5cfa914724"
  },
  {
    id: 57,
    title: "Every day, Every Moment",
    artist: "Paul Kim",
    cover: "assets/Every day, Every Moment.jpg",
    genres: ["Pop"],
    scenes: ["Studying", "Commuting"],
    reason: " ",
    contributor: {
      major: "Architecture",
      occupation: "Student"
    },
    link: "https://open.spotify.com/track/3Ml2s37uS9jqRM2R3bfDiB?si=b83e574dec04479b"
  },
  {
    id: 58,
    title: "Wherever you are",
    artist: "ONE OK ROCK",
    cover: "assets/Wherever you are.png",
    genres: ["Pop", "Rock"],
    scenes: ["Traveling"],
    reason: " ",
    contributor: {
      major: "Architecture",
      occupation: "Student"
    },
    link: "https://open.spotify.com/track/0YAMQSmHk6BSUGTYpaoqTJ?si=1a2eb1daa1414892"
  },
  {
    id: 59,
    title: "C.h.a.o.s.m.y.t.h.",
    artist: "ONE OK ROCK",
    cover: "assets/chaosmyth.jpg",
    genres: ["Pop", "Rock"],
    scenes: ["Studying", "Traveling"],
    reason: " ",
    contributor: {
      major: "Architecture",
      occupation: "Student"
    },
    link: "https://open.spotify.com/track/36rXRdVigyIu1HA4F31zgf?si=a0f68b04dd6d4c6d"
  },
  {
    id: 60,
    title: "The Beginning",
    artist: "ONE OK ROCK",
    cover: "assets/the beginning.jpg",
    genres: ["Pop", "Rock"],
    scenes: ["Studying", "Traveling"],
    reason: " ",
    contributor: {
      major: "Architecture",
      occupation: "Student"
    },
    link: "https://open.spotify.com/track/4f3nDjgqXurMryYBSp0TZD?si=9b02b62c09714454"
  },
  {
    id: 61,
    title: "TALACOWA",
    artist: "珂拉琪 Collage",
    cover: "assets/TALACOWA.jpg",
    genres: ["Rock"],
    scenes: ["Traveling"],
    reason: " ",
    contributor: {
      major: "Architecture",
      occupation: "Student"
    },
    link: "https://open.spotify.com/track/4098XwIN0tRJdWBq5mqe7m?si=433633cae6f34e89"
  },
  {
    id: 62,
    title: "Ruby",
    artist: "Foster The People",
    cover: "assets/Ruby.jpg",
    genres: ["Pop"],
    scenes: ["Solitude"],
    reason: " ",
    contributor: {
      major: "Architecture",
      occupation: "Student"
    },
    link: "https://open.spotify.com/track/1nPjPnOhuKXhhjHA5LSaqL?si=6c5dcd79d6d84484"
  },
  {
    id: 63,
    title: "The Trip",
    artist: "Still Corners",
    cover: "assets/The Trip.jpg",
    genres: ["Pop", "Indie"],
    scenes: ["Commuting", "Traveling"],
    reason: " ",
    contributor: {
      major: "Architecture",
      occupation: "Student"
    },
    link: "https://open.spotify.com/track/5nNNHAwXNpf8Nu7JgqizjJ?si=6688262271b74ef9"
  },
  {
    id: 64,
    title: "Dancehall",
    artist: "Tribes",
    cover: "assets/Dancehall.jpg",
    genres: ["Pop"],
    scenes: ["Commuting"],
    reason: " ",
    contributor: {
      major: "Architecture",
      occupation: "Student"
    },
    link: "https://open.spotify.com/track/6yfeHdqv6FPUofkSi4XOHM?si=44a440a49a0f4b90"
  },
  {
    id: 65,
    title: "Night Cruising",
    artist: "kensuke ushio",
    cover: "assets/Stream Night Cruising.jpg",
    genres: ["Pop"],
    scenes: ["Exercising"],
    reason: " ",
    contributor: {
      major: "Architecture",
      occupation: "Student"
    },
    link: "https://open.spotify.com/track/6DYBBhnfzBAXaILKWeV6ZR?si=79144ca19935440b"
  },
  {
    id: 66,
    title: "KIDS RETURN",
    artist: "Joe Hisaish",
    cover: "assets/Kidsreturn.jpg",
    genres: ["Pop"],
    scenes: ["Exercising"],
    reason: " ",
    contributor: {
      major: "Architecture",
      occupation: "Student"
    },
    link: "https://open.spotify.com/track/73bKDtwdyJaWkSoIlqhU9w?si=bc44e342f37a49e2"
  },
  {
    id: 67,
    title: "不再猶豫",
    artist: "Beyond",
    cover: "assets/不再猶豫.jpg",
    genres: ["Rock"],
    scenes: ["Exercising"],
    reason: " ",
    contributor: {
      major: "Architecture",
      occupation: "Student"
    },
    link: "https://open.spotify.com/track/56N5g7gyv5RYbEyM49EM5Z?si=120dafa8ae9a4818"
  },
  {
    id: 68,
    title: "Let's Get It Started",
    artist: "Black Eyed Peas",
    cover: "assets/LetsGetItStarted.jpg",
    genres: ["Others"],
    scenes: ["Exercising"],
    reason: " ",
    contributor: {
      major: "Architecture",
      occupation: "Student"
    },
    link: "https://open.spotify.com/track/37LEkmNdegFwoS55DdL6Ov?si=959bbf6fbfee4ea1"
  },
  {
    id: 69,
    title: "Pac Man Fever",
    artist: "Buckner & Garcia",
    cover: "assets/61HMPBEiw+L._UXNaN_FMjpg_QL85_.jpg",
    genres: ["Rock"],
    scenes: ["Commuting","Exercising"],
    reason: " ",
    contributor: {
      major: "Architecture",
      occupation: "Student"
    },
    link: "https://open.spotify.com/track/3xVcolYBGPcTQD1jvd1U3l?si=c6f98137b51942ec"
  },
  {
    id: 70,
    title: "Nochentera",
    artist: "Vicco",
    cover: "assets/Nochentera_Single_Cover.jpg",
    genres: ["Pop"],
    scenes: ["Exercising"],
    reason: " ",
    contributor: {
      major: "Architecture",
      occupation: "Student"
    },
    link: "https://open.spotify.com/track/20CozgjF6bshBw8cLhN23B?si=392fbb8be430461e"
  },
  {
    id: 71,
    title: "JUMP",
    artist: "Black Eyed Peas",
    cover: "assets/JUMP.jpg",
    genres: ["Pop"],
    scenes: ["Exercising"],
    reason: " ",
    contributor: {
      major: "Architecture",
      occupation: "Student"
    },
    link: "https://open.spotify.com/track/3tw0Q7so1hjsXKSnDkurHT?si=d8096e66829a43de"
  },
  {
    id: 72,
    title: "I Gotta Feeling",
    artist: "Black Eyed Peas",
    cover: "assets/The_E.N.D._cover.png",
    genres: ["Pop"],
    scenes: ["Exercising", "Commuting", "Traveling"],
    reason: " ",
    contributor: {
      major: "Architecture",
      occupation: "Student"
    },
    link: "https://open.spotify.com/track/2H1047e0oMSj10dgp7p2VG?si=7e01de3325c341a9"
  },
  {
    id: 73,
    title: "Pump It",
    artist: "Black Eyed Peas",
    cover: "assets/Pump_It.png",
    genres: ["Others"],
    scenes: ["Exercising"],
    reason: " ",
    contributor: {
      major: "Architecture",
      occupation: "Student"
    },
    link: "https://open.spotify.com/track/2ygMBIctKIAfbEBcT9065L?si=8f071d148e8d48ec"
  },
  {
    id: 74,
    title: "places to be",
    artist: "Fred again.., Anderson .Paak, CHIKA",
    cover: "assets/Places to be.webp",
    genres: ["Indie", "Electronic"],
    scenes: ["Exercising", "Commuting","Traveling"],
    reason: " ",
    contributor: {
      major: "Architecture",
      occupation: "Student"
    },
    link: "https://open.spotify.com/track/561pBFcFL2Pwb9HPO9tU8J?si=1c93b8fef2d243c9"
  },
  {
    id: 75,
    title: "coffee",
    artist: "corn wave",
    cover: "assets/coffee.jpg",
    genres: ["Indie", "Rock"],
    scenes: ["Commuting","Solitude"],
    reason: " ",
    contributor: {
      major: "Architecture",
      occupation: "Student"
    },
    link: "https://open.spotify.com/track/3Z43ko96z4mcQ4CqTtofiV?si=03e08f9378714094"
  },
  {
    id: 76,
    title: "元気です",
    artist: "Takuro Yoshida",
    cover: "assets/元気です.jpg",
    genres: ["Pop"],
    scenes: ["Commuting","Solitude"],
    reason: " ",
    contributor: {
      major: "Architecture",
      occupation: "Student"
    },
    link: "https://open.spotify.com/track/6a0bS1qyuykfwKDuYumCh3?si=253ae2ad3611452a"
  },
  {
    id: 77,
    title: "Nangilima",
    artist: "Smith & Thell",
    cover: "assets/Nangilima.jpg",
    genres: ["Pop"],
    scenes: ["Commuting","Traveling"],
    reason: " ",
    contributor: {
      major: "Architecture",
      occupation: "Student"
    },
    link: "https://open.spotify.com/track/75eWcdirphZClDeEinSvnp?si=0463af14a4614fb8"
  },
  {
    id: 78,
    title: "Going to School",
    artist: "John Williams, Yo-Yo Ma, Itzhak Perlman",
    cover: "assets/going to school.jpg",
    genres: ["Classical"],
    scenes: ["Commuting","Solitude"],
    reason: " ",
    contributor: {
      major: "Architecture",
      occupation: "Student"
    },
    link: "https://open.spotify.com/track/7DP0JcrmISMPEioK46hONz?si=8294852602ab4fd7"
  },
  {
    id: 79,
    title: "いつも雨",
    artist: "never young beach",
    cover: "assets/いつも雨.jpg",
    genres: ["Pop"],
    scenes: ["Traveling","Solitude", "Studying"],
    reason: " ",
    contributor: {
      major: "Architecture",
      occupation: "Student"
    },
    link: "https://open.spotify.com/track/3uCh7UhRyfrybQM9Q2WVoG?si=ea75561dbe5e49d4"
  },
  {
    id: 80,
    title: "哀しいことばかり",
    artist: "never young beach",
    cover: "assets/Natsuga Sousaseta.jpg",
    genres: ["Pop"],
    scenes: ["Solitude", "Studying"],
    reason: " ",
    contributor: {
      major: "Architecture",
      occupation: "Student"
    },
    link: "https://open.spotify.com/track/6WSqMiLMpRgfmUx7ceUeLE?si=aac2e23a25ca491b"
  },
  {
    id: 81,
    title: "漫游",
    artist: "迷失克莱因",
    cover: "assets/漫游.jpg",
    genres: ["Pop"],
    scenes: ["Solitude", "Commuting"],
    reason: " ",
    contributor: {
      major: "Architecture",
      occupation: "Student"
    },
    link: "https://open.spotify.com/track/2niMrxF0xecLzeYSFzXY7q?si=f5d98460c4b64d58"
  },
  {
    id: 82,
    title: "足首",
    artist: "Kinokoteikoku",
    cover: "assets/足首.jpg",
    genres: ["Pop"],
    scenes: ["Solitude", "Commuting"],
    reason: " ",
    contributor: {
      major: "Architecture",
      occupation: "Student"
    },
    link: "https://open.spotify.com/track/7351nV7Ns6TEbBLKPYeu72?si=680b458d1d63436c"
  },
  {
    id: 83,
    title: "或る日の隅田川",
    artist: "Miraidempa",
    cover: "assets/或る日の隅田川.jpg",
    genres: ["Indie", "Rock"],
    scenes: ["Solitude", "Commuting", "Exercising"],
    reason: " ",
    contributor: {
      major: "Architecture",
      occupation: "Student"
    },
    link: "https://open.spotify.com/track/4uo6Q43ED5SryFjXbqSM4b?si=2nn4MBfGTIq0CFMTxm9OUw"
  },
  {
    id: 84,
    title: "Cloudy Mind",
    artist: "Miraidempa",
    cover: "assets/Cloud mind.jpg",
    genres: ["Indie", "Rock"],
    scenes: ["Solitude", "Commuting", "Exercising"],
    reason: " ",
    contributor: {
      major: "Architecture",
      occupation: "Student"
    },
    link: "https://open.spotify.com/track/39DcCQxPIMiTJnYOiqb2a2?si=57b5144ae7674df0"
  },
  {
    id: 85,
    title: "種",
    artist: "GO!GO!7188",
    cover: "assets/Tategami.jpg",
    genres: ["Indie", "Rock"],
    scenes: ["Solitude", "Commuting", "Exercising"],
    reason: " ",
    contributor: {
      major: "Architecture",
      occupation: "Student"
    },
    link: "https://open.spotify.com/track/0ZO57ZTSo5FABPb6tN2xGM?si=2232ecfb6df54450"
  },
  {
    id: 86,
    title: "神様のヒマ潰し",
    artist: "GO!GO!7188",
    cover: "assets/神様のヒマ潰し.jpg",
    genres: ["Rock"],
    scenes: ["Commuting", "Exercising"],
    reason: " ",
    contributor: {
      major: "Architecture",
      occupation: "Student"
    },
    link: "https://open.spotify.com/track/1NsGG8KGGX1iwB9SSgddCn?si=8df97623077a49f0"
  },
  {
    id: 87,
    title: "Flamenco Sketches",
    artist: "Miles Davis",
    cover: "assets/Flamenco Sketches.jpg",
    genres: ["Jazz"],
    scenes: ["Solitude"],
    reason: " ",
    contributor: {
      major: "Architecture",
      occupation: "Student"
    },
    link: "https://open.spotify.com/track/6dRx7OUXfvosnXG3g9lWGi?si=a80438a7192a445a"
  },
  {
    id: 88,
    title: "夜が明けたら",
    artist: "Maki Asakawa",
    cover: "assets/夜が明けたら Maki Asakawa.jpg",
    genres: ["Jazz"],
    scenes: ["Solitude"],
    reason: " ",
    contributor: {
      major: "Architecture",
      occupation: "Student"
    },
    link: "https://open.spotify.com/track/6eVMlMSGkU0sCsIKMeI46n?si=267633d750b84c8b"
  },
  {
    id: 89,
    title: "裏窓 - Live version",
    artist: "Maki Asakawa",
    cover: "assets/裏窓 - Live version.jpg",
    genres: ["Jazz"],
    scenes: ["Solitude"],
    reason: " ",
    contributor: {
      major: "Architecture",
      occupation: "Student"
    },
    link: "https://open.spotify.com/track/2Ly6HDCMJy4boloLOZCLmK?si=09bff9f35e8e4df4"
  },
  {
    id: 90,
    title: "Lord Mayo",
    artist: "Joanie Madden",
    cover: "assets/Lord Mayo Joanie Madden.jpg",
    genres: ["Others"],
    scenes: ["Commuting", "Traveling"],
    reason: " ",
    contributor: {
      major: "Architecture",
      occupation: "Student"
    },
    link: "https://open.spotify.com/track/5Hn1YvxUiVaIBvPkqeuX8z?si=7fe503bae21e450f"
  },
  {
    id: 91,
    title: "Thank You",
    artist: "Dido",
    cover: "assets/Dimitri_Vegas_&_Like_Mike_-_Thank_You_(Not_So_Bad).png",
    genres: ["Pop"],
    scenes: ["Commuting"],
    reason: " ",
    contributor: {
      major: "Architecture",
      occupation: "Student"
    },
    link: "https://open.spotify.com/track/09CnYHiZ5jGT1wr1TXJ9Zt?si=661ba42449ca4a4d"
  },
  {
    id: 92,
    title: "Un trago de ti",
    artist: "Vicco, Suu",
    cover: "assets/Un trago de ti.jpg",
    genres: ["Pop"],
    scenes: ["Commuting"],
    reason: " ",
    contributor: {
      major: "Architecture",
      occupation: "Student"
    },
    link: "https://open.spotify.com/track/09gbRdYD9b0bk3478Pgeiy?si=c877d7f089af4c0b"
  },
  {
    id: 93,
    title: "A Little While",
    artist: "Yellow Days",
    cover: "assets/A Little While.jpg",
    genres: ["Pop"],
    scenes: ["Commuting"],
    reason: " ",
    contributor: {
      major: "Architecture",
      occupation: "Student"
    },
    link: "https://open.spotify.com/track/1ahzHj4rfljE8w4ZwpEjOM?si=6adb556c192e4905"
  },
  {
    id: 94,
    title: "踊り子",
    artist: "Vaundy",
    cover: "assets/踊り子.jpg",
    genres: ["Pop"],
    scenes: ["Commuting"],
    reason: " ",
    contributor: {
      major: "Architecture",
      occupation: "Student"
    },
    link: "https://open.spotify.com/track/1YXot2MLAG9sttepCtBRM7?si=65762ed14cdc47a5"
  },
  {
    id: 95,
    title: "夜走",
    artist: "打倒三明治",
    cover: "assets/夜走.jpg",
    genres: ["Pop"],
    scenes: ["Commuting"],
    reason: " ",
    contributor: {
      major: "Architecture",
      occupation: "Student"
    },
    link: "https://open.spotify.com/track/62HK3n0X9aZDptkhnoRvjG?si=e13f6a4bdf394a2c"
  },
  {
    id: 96,
    title: "I Could Fight On A Wall",
    artist: "Aquilo",
    cover: "assets/I Could Fight On A Wall.jpg",
    genres: ["Pop"],
    scenes: ["Commuting","Traveling"],
    reason: " ",
    contributor: {
      major: "Architecture",
      occupation: "Student"
    },
    link: "https://open.spotify.com/track/0ykOwUlNIOejwOOSylGlQs?si=e105674568e94b9a"
  },
  {
    id: 97,
    title: "Fake Empire",
    artist: "The National",
    cover: "assets/Fake Empire.jpg",
    genres: ["Rock"],
    scenes: ["Studying", "Solitude"],
    reason: " ",
    contributor: {
      major: "Architecture",
      occupation: "Student"
    },
    link: "https://open.spotify.com/track/7hanhZrUArC9qUerln4jh1?si=fc340e6530134d70"
  },
  {
    id: 98,
    title: "At Home",
    artist: "Crystal Fighters",
    cover: "assets/at home crystal fighters.jpg",
    genres: ["Pop"],
    scenes: ["Commuting", "Traveling"],
    reason: " ",
    contributor: {
      major: "Architecture",
      occupation: "Student"
    },
    link: "https://open.spotify.com/track/3dXNrqnhNUPdrkvnj8TjvX?si=d7680690bf0c40a0"
  },
  {
    id: 99,
    title: "おつかれSUMMER",
    artist: "HALCALI",
    cover: "assets/おつかれSUMMER.jpg",
    genres: ["Pop"],
    scenes: ["Commuting", "Traveling"],
    reason: " ",
    contributor: {
      major: "Architecture",
      occupation: "Student"
    },
    link: "https://open.spotify.com/track/3clPsjTbx4UOPMeQn7FZkV?si=94a6813f08ab4336"
  },
  {
    id: 100,
    title: "Natsuga Sousaseta",
    artist: "never young beach",
    cover: "assets/Natsuga Sousaseta.jpg",
    genres: ["Pop"],
    scenes: ["Studying", "Traveling", "Solitude"],
    reason: " ",
    contributor: {
      major: "Architecture",
      occupation: "Student"
    },
    link: "https://open.spotify.com/track/6WSqMiLMpRgfmUx7ceUeLE?si=5952f60066da4d98"
  }
];

let musicData = defaultMusicData;
const stored = localStorage.getItem('musicData');
if (stored) {
  try {
    const parsed = JSON.parse(stored);
    const merged = [...parsed];
    defaultMusicData.forEach(d => { if (!parsed.find(m => m.id === d.id)) merged.push(d); });
    musicData = merged.sort((a, b) => a.id - b.id);
    if (merged.length > parsed.length) localStorage.setItem('musicData', JSON.stringify(musicData));
  } catch (e) {
    console.error('Error parsing stored music data:', e);
    musicData = defaultMusicData;
  }
} else {
  localStorage.setItem('musicData', JSON.stringify(defaultMusicData));
}
