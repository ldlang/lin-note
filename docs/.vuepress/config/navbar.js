export const navbar = [
  {
    text: "首页",
    link: "/",
  },
  {
    text: "javaScript",
    activeMatch: "^/javaScript/",
    children: [
      {
        text: "js",
        link: "/javaScript/js-note/",
      },
      {
        text: "ES6",
        link: "/javaScript/ES6/",
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
        text: "node",
        link: "/node/node.md",
      },
      {
        text: "express",
        link: "/node/express.md",
      },
      {
        text: "express插件",
        link: "/node/plugin.md",
      },
    ],
  },
  {
    text: "git",
    link: "/git/",
    activeMatch: "^/git/",
  },
  {
    text: "包管理",
    activeMatch: "^/pack/",
    children: [
      {
        text: "npm",
        link: "/pack/npm/",
      },
      {
        text: "pnpm",
        link: "/pack/pnpm.md",
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
  {
    text: "面试题",
    link: "/interview/",
    activeMatch: "^/interview/",
  },
  {
    text: "Java",
    link: "/Java/",
    activeMatch: "^/Java/",
  },
];
