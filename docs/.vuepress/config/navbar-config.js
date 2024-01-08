export const navbarConfig = [
  {
    text: "首页",
    link: "/",
  },
  {
    text: "javaScript",
    activeMatch: "^/javaScript/",
    children: [
      {
        text: "js笔记",
        link: "/javaScript/js-note/",
      },
      {
        text: "红宝书笔记",
        link: "/javaScript/red-book/",
      },
    ],
  },
  {
    text: "css",
    activeMatch: "^/css/",
    children: [
      {
        text: "grid布局",
        link: "/css/grid.md",
      },
      {
        text: "过渡与动画",
        link: "/css/transition-and-animation.md",
      },
    ],
  },
  {
    text: "node",
    activeMatch: "^/node/",
    children: [
      {
        text: "node 笔记",
        link: "/node/node.md",
      },
      {
        text: "express 笔记",
        link: "/node/express.md",
      },
      {
        text: "jwt的使用",
        link: "/node/jwt.md",
      },
      {
        text: "使用mysql",
        link: "/node/use-mysql.md",
      },
    ],
  },
  {
    text: "git",
    link: "/git/",
    activeMatch: "^/git/",
  },
  {
    text: "vue",
    activeMatch: "^/vue/",
    children: [
      {
        text: "vue2",
        link: "/vue/vue2.md",
      },
      {
        text: "vue3",
        link: "/vue/vue3.md",
      },
      {
        text: "nuxt",
        link: "/vue/nuxt.md",
      },
      {
        text: "常用插件",
        link: "/vue/plugins.md",
      },
      {
        text: "技巧积累",
        link: "/vue/skill.md",
      },
    ],
  },
  {
    text: "ts",
    link: "/ts/",
    activeMatch: "^/ts/",
  },
  {
    text: "mysql",
    link: "/mysql/",
    activeMatch: "^/mysql/",
  },
];
