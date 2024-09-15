import { Icons } from "@/components/icons";

export const DATA = {
  name: "Stephie Yang",
  initials: "SY",
  url: "https://quinnai9287.github.io/resume",
  location: "台北, 台灣",
  locationLink: "https://www.google.com/maps/place/taipei",
  description:
    `3y+ 前端工程師，1y+ 前平面/UI設計師。喜歡富有創意的網頁視覺，也喜歡做酷炫的功能，美感邏輯雙修。興趣是音樂、時尚、潛水，擅長英文閒聊。`,
  summary:
    `任職前端工程師約 3-4 年經驗。任職前端工程師期間經手數種網頁開發，從形象網站、電商網站至 SaaS 應用皆有涉獵。    
    \n擅長開發工具包含 __Vue 3__、__Nuxt.js__、__React__、__Next.js__、__TypeScript__ 和 __TailwindCSS__。此外，我對 __Three.js__ 和 __WebGL__ 有個人興趣。  
    \n除了開發前端應用功能外，我對前端網頁開發中的視覺細節也非常注重，並強調網頁的視覺呈現。目前正在尋找前端開發人員的職位，希望在創意和創新的團隊中繼續成長並貢獻我的技能。`,
  avatarUrl: "/me2.jpg",
  skills: [
    "網頁前端開發",
    "UI/UX 設計",
  ],
  contact: {
    email: "keira0930@gmail.com",
    tel: "+886912959287",
    social: {
      GitHub: {
        url: "https://github.com/quinnai9287/resume",
        icon: Icons.github,
      },
      LinkedIn: {
        url: "https://www.linkedin.com/in/jiarungyang",
        icon: Icons.linkedin,
      }
    },
  },

  work: [
    {
      company: "自由接案",
      href: "",
      badges: ['Vue3/Nuxt','WebSocket', 'Svelte', 'React/Next', 'React-Native', 'TypeScript', 'Swagger/OpenAPI', 'ci/cd', 'Firebase', 'Markdown'],
      location: "Remote",
      logoUrl: "",
      title: "前端工程師",
      start: "Sep 2023",
      end: "Present",
      description:
        [
          `▦ 2024 六月 ~ 八月 ▦  
          [專案] 漸強實驗室 x SHOPLINE LINE 會員卡功能平台 & Shopline 商家擴充插件。  
          以外包團隊模式與漸強實驗室簽約專案，參與此產品的前端開發。`,
          `▦ 2024 三月 ~ 四月 ▦  
          [專案] TeamSync AI 多人聊天室。
          以外包團隊模式與數辰藝創公司簽約專案，負責此產品前端開發，當中使用到了 Svelte 框架以及 Socket 技術。`,
          `▦ 2023 九月 ~ 2024 六月 ▦  
          [合約]以個人合約方式與 Alion Tech 長期合作。
          期間參與虛擬辦公空間、ERP 系統、其他 SaaS 應用的前端開發。`,
        ]
    },
    {
      company: "適著三圍 TG3D Studio",
      href: "https://dmktz.io",
      badges: ['Vue3/Nuxt', 'Three.js', 'Web3', 'Ether.js', 'MetaMask', 'Stripe'],
      location: "Taipei, Taiwan",
      title: "前端工程師",
      logoUrl: "/tg3d.png",
      start: "May 2022",
      end: "Sep 2023",
      description:
        [
          "使用 Three.js 與 Vue.js 開發數位服裝設計平台當中的，某幾項所見及所得編輯功能(e.g.身體量測數據與3D模型同步、3D模型的編輯、繪製、材質設定等)。",
          "負責 Game-Fi App [FITzOn 官方網站](https://fitzon.io) 的前端開發。著重於創建動態內容，實現複雜的動畫效果。串接智慧合約 (Smart Contract) 加密貨幣錢包 (MetaMask)，令使用者可以在官網上做 NFT 的相關操作。",
          "負責 FITzOn 官方網站 NFT Global Minting 流程的前端開發。",
          "串接 [RPM  Avatar](https://readyplayer.me/) 開發 Metaverse 3D Avatar x DMKTZ 虛擬服裝試穿功能。",
          "參與醫美診所美胸手術人體樣態模擬系統專案。"
        ],
      projects:[
        {
          title: "DMKTZ",
          dates: "Nov 2022 - Aug 2023",
          location: "台灣, 台北",
          icon: "public",
          image:
            "/dmktz.png",
          poster: "/dmktz_poster.png",
          links: [
            {
                title: "官方入口",
                icon: <Icons.globe className="h-4 w-4" />,
                href: "https://dmktz.io/",
            },
            {
              title: "Try-on",
              icon: <Icons.youtube className="h-4 w-4" />,
              href: "https://www.youtube.com/watch?v=a6L5QI1GYsk&t=1s",
            },
            {
              title: "Instagram",
              icon: <Icons.globe className="h-4 w-4" />,
              href: "https://www.instagram.com/dmktz.official/",
            }
          ],
      },
      {
          title: "FITzOn - Fit To Earn Game-Fi App",
          dates: "May 2022 - Nov 2022",
          location: "台灣, 台北",
          icon: "public",
          image:
            "/fitzon.png",
          poster: "/fitzon_poster.png",
          links: [
            {
                title: "官方網站",
                icon: <Icons.globe className="h-4 w-4" />,
                href: "https://fitzon.io/",
            },
            {
              title: "Reveal Intro",
              icon: <Icons.youtube className="h-4 w-4" />,
              href: "/resume/video/reveal_intro.mp4",
            },
            {
              title: "App Store",
              icon: <Icons.globe className="h-4 w-4" />,
              href: "https://apps.apple.com/us/app/fitzon/id1641147474",
            },
            {
              title: "Google Play",
              icon: <Icons.globe className="h-4 w-4" />,
              href: "https://play.google.com/store/apps/details?id=io.fition.fitzon&pli=1",
            },
          ],
      },
      ]
    },
    {
      company: "自由接案",
      href: "https://quinnai9287.github.io",
      badges: ['Vue 2','Nuxt.js','Shopify(liquid)','Bootsrap 5', 'GraphQL'],
      logoUrl: "",
      location: "Remote",
      title: "前端工程師",
      start: "January 2020",
      end: "May 2022",
      description:[
        `▦ 2021 五月 ~ 2021 十二月 ▦  
        [專案] 草東沒有派對 [官方網站](https://www.nopartyforcaodong.com/zh-hant) / Shopify 商店  
        與 Blockcode Studio, Whatever Co.合作專案，負責前端開發。`,
        `▦ 2021 五月 ~ 2022 六月 ▦  
        [合約] Alion Tech   
        參與 [JaFun 日本伴手禮代購平台](https://www.jafun.com.tw/) 的前端開發。`,
        `▦ 2020 十月 ~ 十一月 ▦  
        [專案] 安寧基金會 [Instawish 限實許願牆](https://www.youtube.com/watch?v=DZ3EqGJHCCI)  
        與 Blockcode Studio, 米蘭數位設計合作專案，負責前端開發。`,
        `▦ 2020 六月 ~ 2022 七月 ▦  
        [合約] 李長榮化工集團官方網站前端維護與開發  
        與 Kanekt Creative Studio 合作。`,
        `▦ 2020 二月 ~ 2020 四月 ▦  
        [專案] 緬甸大型購物中心 The Central Boulevard [官方網站](https://www.thecentralboulevard.com/en-us)  
        與 Blockcode Studio, Kanekt Creative Studio 合作。負責官網前端開發。`,
      ]
    },
    {
      company: "Albertlan Creative 歐拔藍數位創意",
      href: "https://albertlan.com",
      badges: ['HTML5', 'jQuery', 'Gulp', 'Bootstrap', 'CSS/SCSS', 'GSAP','CSS Animation'],
      location: "台灣, 台北",
      title: "前端工程師",
      logoUrl: "/albertlancreative.png",
      start: "Aug 2016",
      end: "Nov 2019",
      description:
        [
          "以 HTML、CSS 和 JavaScript 將設計師的概念變為現實",
          "負責網站和網頁應用用戶界面的製作、修改和維護",
          "使用戶在各瀏覽器中的視覺和互動體驗一致",
          "實現移動網站的響應式設計",
          "使用 GitHub 等專案管理工具維護軟體工作流程",
          "在開發過程中測試網站的可用性並修復任何錯誤", 
          "以 GSAP 等工具實現網頁動畫",
          "參與多個企業官網前端開發與維護",
          "使用 GA & GTM SDK，設定頁面元素的 GA EVENT，使客戶可以在 GA 後台追蹤用戶行為"
        ],
      projects:[
        {
          title: "國泰企業系列",
          image:
          "/cathaybk.webp",
          poster: "/cathayins.png",
          links: [
            {
              title: "國泰世華銀行",
              icon: <Icons.globe className="h-4 w-4" />,
              href: "https://cathaybk.com.tw/cathaybk/",
            },
            {
              title: "國泰產險",
              icon: <Icons.globe className="h-4 w-4" />,
              href: "https://www.cathay-ins.com.tw/cathayins/personal/online/",
            },
          ],
        },
        {
          title: "LE BLE D'OR 金色三麥",
          image:
            "/lebledor.jpeg",
          poster: "/lebledor_poster.png",
          links: [
            {
              title: "官方網站",
              icon: <Icons.globe className="h-4 w-4" />,
              href: "https://www.lebledor.com/",
            },
            {
              title: "CSS Design Awards",
              icon: <Icons.globe className="h-4 w-4" />,
              href: "https://www.cssdesignawards.com/sites/le-ble-d-or/30799",
            }
          ],
      },
      ]
    },
  ],
  education: [
    {
      school: "私立元智大學",
      href: "https://www.yzu.edu.tw/index.php/tw/",
      degree: ["資訊傳播學系學士"],
      logoUrl: "/yzu.png",
      start: "2009",
      end: "2013",
    },
  ],
  projects: [
    {
      title: "ST/FND. 個人遊樂場",
      href: "https://quinnai9287.github.io",
      dates: "July 2024 - Present",
      active: false,
      description:
        "個人官方網站以及 3D 視覺實驗區。不定期更新好玩有趣的視覺效果。",
      technologies: [
        "Nuxt.js",
        "Three.js",
        "TailwindCSS",
      ],
      roles: ['UI/UX Designer', 'Front-end Developer'],
      links: [
        {
          type: "Website",
          href: "https://quinnai9287.github.io",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "/video/stfnd.mp4",
    },
    {
      title: "Pieces 摺摺",
      href: "",
      dates: "Nov 2023 - Present",
      active: false,
      description:
        "讓實體服裝製作變得更簡單！Pieces 是個讓服裝設計師打完板後可以方便、快速開始製作自己的服裝的應用。",
      technologies: [
        "Nuxt.js",
        "Typescript",
        "TailwindCSS",
        "Canvas"
      ],
      roles: ['UI/UX Designer', 'Front-end Developer'],
      links: [],
      image: "/video/pieces.png",
      video: "",
    },
    // {
    //   title: "Lonely Diver 潛水孤兒",
    //   href: "https://pieces.io",
    //   dates: "July 2024 - Present",
    //   active: false,
    //   description:
    //     "最了解潛水人的潛旅規劃平台，潛水旅行吃喝玩樂一把罩！建立潛水社群，讓台灣各地的潛水孤兒們連結在一起！",
    //   technologies: [
    //     "Nuxt.js",
    //     "Typescript",
    //     "TailwindCSS"
    //   ],
    //   roles: ['UI/UX Designer', 'Front-end Developer'],
    //   links: [],
    //   image: "",
    //   video: "https://cdn.magicui.design/bento-grid.mp4",
    // },
    // {
    //   title: "Cybershop",
    //   href: "",
    //   dates: "July 2024 - Present",
    //   active: false,
    //   description:
    //     "Cybershop 是一個輕量型的電商架設平台，提供使用者快速建立自己的電商網站。",
    //   technologies: [
    //     "Nuxt.js",
    //     "TypeScript",
    //     "TailwindCSS",
    //   ],
    //   roles: ['UI/UX Designer', 'Front-end Developer'],
    //   links: [],
    //   image: "",
    //   video:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    // },
  ],
  hackathons: [
    {
      title: "SHOPLINE x LINE 會員卡功能平台 & SHOPLINE 商家擴充插件",
      dates: "June - August 2024",
      location: "台灣, 台北",
      credit: "專案合作 w/ Crescendo Lab 漸強實驗室",
      description:
        [
          "串接 LINE LIFF 並與後端合作，實現以 LINE 為載體的 SHOPLINE 會員卡功能頁面。",
          "與後端合作，實現商家擴充插件，讓商家可以在 SHOPLINE 後台設定會員卡功能。"
        ],
      image:'/crescendolab.png',
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [
        {
          title: "介紹",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://crescendolab.zendesk.com/hc/zh-tw/articles/36619431030809-%E6%95%99%E5%AD%B8-%E6%BC%B8%E5%BC%B7%E5%AF%A6%E9%A9%97%E5%AE%A4-EC-%E5%B0%8F%E5%B9%AB%E6%89%8B-Shopline",
        },
      ],
    },
    {
      title: "Swise - 解決遠距工作課題的虛擬辦公空間",
      credit: "合約合作 w/ Alion Tech 阿利恩科技",
      dates: "November 2021 - January 2022",
      location: "遠端",
      description:
        ["參與部分前端介面、功能開發，以及維護、修改以及除錯工作。"],
      icon: "public",
      image:
        "/swise.png",
      links: [
        {
            title: "官方入口",
            icon: <Icons.globe className="h-4 w-4" />,
            href: "https://swise.jp/",
        },
      ],
    },
    {
      title: "Instawish 限時許願牆",
      dates: "October - December 2020",
      location: "台北, 台灣",
      credit: "專案合作 w/ Blockcode Studio 德穎數位, Medialand 米蘭數位設計",
      description:
        [
          "與設計師合作，實現網站視覺效果。",
          "以 CSS3 Animation、Javscript 實現 Lading Page 中雙向輪播圖動畫。",
          "以 Nuxt 2 框架 (SSG) 建立前端應用，負責大部分前端開發。",
        ],
      image:
        "/instawish.png",
      links: [
        {
          title: "影片",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=DZ3EqGJHCCI",
        },
        {
          title: "介紹",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://www.hospice.org.tw/content/3025"
        },
        {
          title: "活動花絮",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://www.hospice.org.tw/content/3157"
        }
      ],
    },
    {
        title: "草東沒有派對",
        dates: "May - December 2021",
        location: "台北, 台灣",
        credit: "專案合作 w/ Blockcode Studio 德穎數位, Whatever Co.",
        description:
          [
            "與設計師合作，實現網站視覺效果。",
            "以 Nuxt 2 框架 (SSR) 建立前端應用，負責前端開發。", 
            "使用 GraphQL 串接 API 並與後端工程師合作，完成網站上線。",
            "使用 Shopify Liquid 模板語言製作 Shopify 商店客製化佈景主題。"
          ],
        image:
          "/noparty.jpg",
        mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
        links: [
          {
            title: "官方網站",
            icon: <Icons.globe className="h-4 w-4" />,
            href: "https://www.nopartyforcaodong.com/zh-hant",
          },
          {
            title: "Shopify 商店",
            icon: <Icons.globe className="h-4 w-4" />,
            href: "https://store.nopartyforcaodong.com/",
          }
        ],
    },
    {
      title: "李長榮化工集團",
      dates: "June 2020 - July 2022",
      credit: "合約合作 w/ Kanekt Creative 意馳創造",
      location: "台北, 台灣",
      description:
        [
          "與設計師合作，實現網站視覺效果。",
          "使用 HTML、CSS、JavaScript 開發官方網站前端。",
          "維護與更新網站內容。"
        ],
      image:
        "/lcy.jpeg",
      links: [
        {
          title: "李長榮化工",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://www.lcycic.com/zh",
        },
      ],
    },
    {
      title: "JaFun - 日本伴手禮代購平台",
      dates: "May - November 2021",
      credit: "合約合作 w/ Alion Tech 阿利恩科技",
      location: "遠端",
      description:
        ["參與前端介面切版，以及功能開發。", "實現搜尋商品、商品頁面、購物車、訂單頁面等功能。"],
      image:
        "/jafun.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "官方平台",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://www.jafun.com.tw/",
        },
      ],
    },
    {
      title: "The Central Boulevard Official",
      dates: "Feburary - April 2020",
      credit: "專案合作 w/ Kanekt Creative 意馳創造, Blockcode Studio 德穎數位",
      location: "遠端",
      description:
        ["負責前端視覺切版。"],
      image:
        "/thecentralboulevard1.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "官方網站",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://www.thecentralboulevard.com/en-us",
        },
      ],
    },
  ],
} as const;
