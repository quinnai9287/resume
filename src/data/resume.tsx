import { Icons } from "@/components/icons";

export const DATA = {
  name: "Stephie Yang",
  initials: "SY",
  url: "https://quinnai9287.github.io/resume",
  location: "Taipei, Taiwan",
  locationLink: "https://www.google.com/maps/place/taipei",
  description:
    `3y+ Front-end developer. 1y+ Formerly a visual/UI designer.   
    \nPassionate about creative web visuals and developing impressive functionalities, with a balance of aesthetic and logical skills.`,
  summary:
    `I have approximately 3-4 years of experience as a front-end engineer. During this time, I have worked on various web development projects, including corporate websites, e-commerce platforms, and SaaS applications.  
     \nMy primary expertise lies in __Vue 3__, __Nuxt.js__, __React__, __Next.js__, __TypeScript__, and __TailwindCSS__. Additionally, I have a personal interest in __Three.js__ and __WebGL__.  
     \nIn addition to developing front-end application functionality, I have a keen eye for visual details in front-end web development and place a high emphasis on the visual presentation of web pages.  
     \nI am currently seeking a position as a Front-end Developer, where I can continue to grow my skills and contribute to a team that values creativity and innovation.`,
  avatarUrl: "/me2.jpg",
  skills: [
    "Front-end Development",
    "UI/UX Design",
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
      company: "Freelancing",
      href: "",
      badges: ['Vue3/Nuxt','WebSocket', 'Svelte', 'React/Next', 'React-Native', 'TypeScript', 'Swagger/OpenAPI', 'ci/cd', 'Firebase', 'Markdown'],
      logoUrl: "",
      location: "Remote",
      title: "Front End Engineer",
      start: "Sep 2023",
      end: "Present",
      description:
      [
        `▦ June ~ August 2024 ▦  
        [Project] SHOPLINE x LINE Membership Card Platform & Shopline Merchant Extension Plugin.  
        Collaborated as an outsourced team with Crescendo Lab, contributing to the front-end development of this product.`,
        `▦ March ~ April 2024 ▦  
        [Project] TeamSync - Multi-user AI Chatroom.  
        Developed the front-end of this application using the Svelte framework and WebSocket technology.`,
        `▦ September 2023 ~ June 2024 ▦  
        [Contract] Long-term collaboration with Alion Tech under a personal contract.  
        Participated in front-end development for virtual office spaces, ERP systems, and other SaaS applications during this period.`,
      ]
    },
    {
      company: "TG3D Studio",
      href: "https://dmktz.io",
      badges: ['Vue3/Nuxt', 'Three.js', 'Web3', 'Ether.js', 'MetaMask', 'Stripe'],
      location: "Taipei, Taiwan",
      title: "Front-end Engineer",
      logoUrl: "/dmktz.png",
      start: "May 2022",
      end: "Sep 2023",
      description:
        [
          "Developed Visual Editing Features: Utilized Three.js and Vue.js to create WYSIWYG (What You See Is What You Get) editing functionalities for a digital fashion design platform. This included syncing body measurement data with 3D models, and editing, drawing, and setting materials on 3D models.",
          'Front-End Development for Game-Fi App FITzOn: Led the front-end development of the [FITzOn official website](https://fitzon.io/). Focused on creating dynamic content and implementing complex animations. Integrated smart contracts and MetaMask, enabling users to perform NFT-related operations on the site.',
          "NFT Global Minting: Managed the front-end development for the NFT Global Minting process on the FITzOn official website.",
          "Metaverse Integration: Connected [RPM  Avatar](https://readyplayer.me/) with the development of 3D Avatar x DMKTZ virtual clothing try-on features for the metaverse.",
          "Participated in the development of a breast surgery body simulation system for an aesthetic clinic."
        ],
      projects:[
        {
          title: "DMKTZ",
          dates: "Nov 2022 - Aug 2023",
          location: "Worldwide",
          description:
            ["Involved in front-end interface and feature development for a digital fashion design platform. Integrated virtual character Clonex from the metaverse and RPM x DMKTZ 3D clothing try-on functionality."],
          icon: "public",
          image:
            "/dmktz.png",
          poster: "/dmktz_poster.png",
          links: [
            {
              title: "Official Entry",
              icon: <Icons.globe className="h-4 w-4" />,
              href: "https://dmktz.io/",
            },
            {
              title: "Try-on",
              icon: <Icons.youtube className="h-4 w-4" />,
              href: "https://www.youtube.com/watch?v=lQdSmOR7UHs",
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
          location: "Worldwide",
          description:
            ["Responsible for front-end development of the official website, covering a wide range including various animations, NFT transaction operations, and the player dashboard for the app."],
          icon: "public",
          image:
            "/fitzon.png",
          poster: "/fitzon_poster.png",
          links: [
            {
                title: "Official",
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
      company: "Freelancing",
      href: "https://quinnai9287.github.io",
      badges: ['Vue 2','Nuxt.js','Shopify(liquid)','Bootsrap 5', 'GraphQL'],
      logoUrl: "",
      location: "Remote",
      title: "Front-end Engineer",
      start: "January 2020",
      end: "May 2022",
      description:
      [
        `▦ May 2021 ~ December 2021 ▦  
        [Project] No Party for Cao Dong [Official Website](https://www.nopartyforcaodong.com/zh-hant) / Shopify Store  
        Collaborated with Blockcode Studio and Whatever Co., responsible for front-end development.`,
        
        `▦ May 2021 ~ June 2022 ▦  
        [Contract] with Alion Tech  
        Participated in the front-end development for [JaFun Japanese Souvenir Purchasing Platform](https://www.jafun.com.tw/).`,
        
        `▦ October 2020 ~ November 2020 ▦  
        [Project] Hospice Foundation of Taiwan [Instawish Limited Wish Wall](https://www.youtube.com/watch?v=DZ3EqGJHCCI)  
        Collaborated with Blockcode Studio and Medialand Creative, responsible for front-end development.`,
        
        `▦ June 2020 ~ July 2022 ▦  
        [Contract] with Kanekt Creative Studio  
        Front-end maintenance and development for LCY Chemical Corp's official website.`,
        
        `▦ February 2020 ~ April 2020 ▦  
        [Project] [The Central Boulevard Official](https://www.thecentralboulevard.com/en-us), a large shopping mall in Myanmar. Responsible for front-end development of the official website.  
        Collaborated with Blockcode Studio and Kanekt Creative Studio.`
        ]
    },
    {
      company: "Albertlan Creative",
      href: "https://albertlan.com/",
      badges: ['html, css, js', 'jQuery', 'Gulp', 'Bootstrap', 'CSS/SCSS', 'GSAP','CSS Animation'],
      location: "Taipei, Taiwan",
      title: "Front-end Developer",
      logoUrl: "/albertlancreative.png",
      start: "Aug 2016",
      end: "Nov 2019",
      description:[
        "Bringing designers' concepts to life using HTML, CSS, and JavaScript",
        "Responsible for creating, modifying, and maintaining user interfaces for websites and web applications.",
        "Ensuring consistent visual and interactive experiences across different browsers and devices.",
        "Implementing responsive design for mobile websites.",
        "Maintaining the software workflow using project management tools like GitHub.",
        "Testing website usability during the development process and fixing any bugs.",
        "Creating web animations using tools like GSAP and CSS animations.",
        "Participating in front-end development and maintenance for multiple corporate websites.",
        "Using GA & GTM SDK to set up GA events for page elements, allowing clients to track user behavior in the GA dashboard."
      ],
      projects:[
        {
          title: "Cathay Group",
          image:
          "/cathaybk.webp",
          poster: "/cathayins.png",
          links: [
            {
              title: "Cathay Bank",
              icon: <Icons.globe className="h-4 w-4" />,
              href: "https://cathaybk.com.tw/cathaybk/",
            },
            {
              title: "Cathay Insurance",
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
              title: "Official",
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
      school: "Yuan Ze University",
      href: "https://www.yzu.edu.tw/index.php/en/",
      degree: ["Bachelor of Information and Communication"],
      logoUrl: "/yzu.png",
      start: "2009",
      end: "2013",
    },
  ],
  projects: [
    {
      title: "ST/FND. - Personal Playground",
      href: "https://quinnai9287.github.io",
      dates: "July 2024 - Present",
      active: false,
      description:
        "My personal official website, which includes a 3D visual experimentation section. I update this area with fun and interesting visual effects irregularly.",
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
      title: "Pieces",
      href: "",
      dates: "Nov 2023 - Present",
      active: false,
      description:
        "Making physical garment production simpler! Pieces is an application that allows fashion designers to easily and quickly start producing their own clothing after finishing their designs.",
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
    //   title: "Lonely Diver",
    //   href: "https://pieces.io",
    //   dates: "July 2024 - Present",
    //   active: false,
    //   description:
    //     "The ultimate dive travel planning platform for avid divers! Dive trips covering everything from dining to leisure activities. Building a diving community to connect diving enthusiasts across Taiwan!",
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
    //     "Cybershop is a lightweight e-commerce platform that allows users to quickly build their own online stores.",
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
      title: "SHOPLINE x LINE Membership Card Platform & Merchant Extension",
      dates: "June - August 2024",
      location: "Taipei, Taiwan",
      credit: "Contract collaboration with Crescendo Lab",
      description:
        [
          "Integrated LINE LIFF and collaborated with the backend to implement SHOPLINE membership card functionality using LINE as the platform.",
          "Worked with the backend to develop a merchant extension plugin, allowing merchants to configure membership card features in the SHOPLINE admin panel."
        ],
      image:'/crescendolab.png',
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [
        {
          title: "Introduction",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://crescendolab.zendesk.com/hc/zh-tw/articles/36619431030809-%E6%95%99%E5%AD%B8-%E6%BC%B8%E5%BC%B7%E5%AF%A6%E9%A9%97%E5%AE%A4-EC-%E5%B0%8F%E5%B9%AB%E6%89%8B-Shopline",
        },
      ],
    },
    {
      title: "Swise - Virtual Office Space Solving Remote Work Challenges",
      credit: "Contract collaboration with Alion Tech",
      dates: "November 2021 - January 2022",
      location: "Remote",
      description:
        ["Participated in the front-end interface and feature development, as well as maintenance, modification, and debugging."],
      icon: "public",
      image: "/swise.png",
      links: [
        {
          title: "Official Entry",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://swise.jp/",
        },
      ],
    },
    {
      title: "Instawish Limited-Time Story Wish Wall",
      dates: "October - December 2020",
      location: "Taipei, Taiwan",
      credit: "Project collaboration with Blockcode Studio and Medialand Digital Design",
      description:
        [
          "Collaborated with designers to implement website visuals.",
          "Implemented bi-directional carousel animations on the landing page using CSS3 Animation and JavaScript.",
          "Built the front-end application using the Nuxt 2 framework (SSG), responsible for most of the front-end development.",
        ],
      image: "/instawish.png",
      links: [
        {
          title: "Video",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=DZ3EqGJHCCI",
        },
        {
          title: "Press",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://www.hospice.org.tw/content/3025",
        },
        {
          title: "Event Highlights",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://www.hospice.org.tw/content/3157",
        },
      ],
    },
    {
      title: "No Party for Cao Dong",
      dates: "May - December 2021",
      location: "Taipei, Taiwan",
      credit: "Project collaboration with Blockcode Studio and Whatever Co.",
      description:
        [
          "Collaborated with designers to implement website visuals.",
          "Built the front-end application using the Nuxt 2 framework (SSR), responsible for front-end development.",
          "Integrated APIs using GraphQL and worked with backend engineers to launch the website.",
          "Developed a customized Shopify theme using the Shopify Liquid template language."
        ],
      image: "/noparty.jpg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Official",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://www.nopartyforcaodong.com/zh-hant",
        },
        {
          title: "Shopify Store",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://store.nopartyforcaodong.com/",
        }
      ],
    },
    {
      title: "LCY Chemical Corp",
      dates: "June 2020 - July 2022",
      credit: "Contract collaboration with Kanekt Creative",
      location: "Taipei, Taiwan",
      description:
        [
          "Collaborated with designers to implement website visuals.",
          "Developed the front-end of the official website using HTML, CSS, and JavaScript.",
          "Maintained and updated website content."
        ],
      image: "/lcy.jpeg",
      links: [
        {
          title: "LCY Chemical Corp",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://www.lcycic.com/zh",
        },
      ],
    },
    {
      title: "JaFun - Japanese Souvenir Purchasing Platform",
      dates: "May - November 2021",
      credit: "Contract collaboration with Alion Tech",
      location: "Remote",
      description:
        [
          "Participated in front-end interface layout and feature development.",
          "Implemented functionalities such as product search, product pages, shopping cart, and order pages."
        ],
      image: "/jafun.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Official",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://www.jafun.com.tw/",
        },
      ],
    },
    {
      title: "The Central Boulevard Official",
      dates: "February - April 2020",
      credit: "Project collaboration with Kanekt Creative and Blockcode Studio",
      location: "Remote",
      description:
        [
          "Responsible for front-end visual layout."
        ],
      image: "/thecentralboulevard1.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Official",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://www.thecentralboulevard.com/en-us",
        },
      ],
    },
    
  ],
} as const;
