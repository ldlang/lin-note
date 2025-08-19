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
    link: "/css/",
    activeMatch: "^/css/",
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
        text: "jsx",
        link: "/vue/jsx.md",
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
    text: "前端面试题",
    link: "/interview/",
    activeMatch: "^/interview/",
  },
  {
    text: "Java",
    activeMatch: "^/java/",
    children:[
      {
        text: "javaSE",
        link: "/java/javaSE/",
      },
            {
        text: "常用类",
        link: "/java/commonClass/",
      },
    ]
  },
  {
    text: "linux",
    link: "/linux/",
    activeMatch: "^/linux/",
    children: [
      {
        text: "linux",
        link: "/linux/linux.md",
      },
      {
        text: "shell",
        link: "/linux/shell.md",
      },
    ],
  },
  {
    text: "Nginx",
    link: "/Nginx/",
    activeMatch: "^/Nginx/",
  },
];
