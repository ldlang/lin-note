export const navbarConfig = [
  {
    text: "首页",
    link: "/",
  },
  {
    text: "git",
    link: "/git/",
    activeMatch: "^/git/",
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
    text: "mysql",
    link: "/mysql/",
    activeMatch: "^/mysql/",
  },
];
