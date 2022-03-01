const path = require("path");

module.exports = {
  title: "Peyton 的博客 ｜ Peyton Blog",
  description: "个人博客",
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1,user-scalable=no",
      },
    ],
  ],

  evergreen: true,

  plugins: [
    [
      "@vuepress/google-analytics",
      {
        ga: "UA-165839722-1",
      },
    ],
  ],

  theme: "melodydl",
  themeConfig: {
    title: "Peyton Blog",

    // aside personInfo
    personalInfo: {
      name: "peyton",
      avatar: "/peyton.jpg",
      headerBackgroundImg: "/home-bg.jpeg",
      description:
        "climb the top of the mountain,<br/>don't stand at the foot<br/>有志登山顶，无志站山脚",
      email: "peytonpeng1990@163.com",
      location: "Shanghai, China",
      // organization: '',
    },
    // Nav link
    nav: [
      { text: "HOME", link: "/" },
      { text: "ABOUT", link: "/about/" },
      { text: "TAGS", link: "/tags/" },
    ],
    header: {
      home: {
        title: "Peyton Blog",
        subtitle: "TODO跨越知道和做到的鸿沟",
        headerImage: "/avatar-bg.jpeg",
      },
      tags: {
        title: "Tags",
        subtitle: "遇见你花光了我所有的运气",
        headerImage: "/tags-bg.jpg",
      },
      postHeaderImg: "/post-bg.jpeg",
    },
    // footer sns
    sns: {
      juejin: {
        account: "juejin",
        link: "https://juejin.cn/user/1820446983193261",
      },
      zhihu: {
        account: "zhihu",
        link: "https://www.zhihu.com/people/sheng-tang-de-xing-kong",
      },
      github: {
        account: "github",
        link: "https://github.com/youdeliang",
      },
    },

    // footer github button
    footer: {
      gitbtn: {
        repository:
          "https://ghbtns.com/github-btn.html?user=youdeliang&repo=vuepress-theme-melodydl&type=star&count=true",
        frameborder: 0,
        scrolling: 0,
        width: "80px",
        height: "20px",
      },
      custom: `Copyright &copy; Top Blog 2020 <br /> 
        Theme By <a href="https://www.vuepress.cn/" target="_blank">VuePress</a>
        | <a href="https://www.github.com/youdeliang/" target="_blank">youdeliang</a>`,
    },
    pagination: {
      perPage: 5,
    },

    comments: {
      owner: "youdeliang",
      repo: "vuepress-theme-melodydl",
      clientId: "dfba8ecad544784fec1f",
      clientSecret: "1358ac11bc8face24f598601991083e27372988d",
      autoCreateIssue: false,
    },
  },
};
