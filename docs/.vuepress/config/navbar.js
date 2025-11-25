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
    activeMatch: "^/git/",
    children: [
      {
        text: "git",
        link: "/git/",
      },
      {
        text: "git技巧",
        link: "/git/git-skill.md",
      },
    ],
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
    children: [
      {
        text: "javaSE",
        link: "/java/javaSE/",
      },
      {
        text: "常用类",
        link: "/java/object.md",
      },
      {
        text: "集合",
        link: "/java/collection.md",
      },
      {
        text: "IO",
        link: "/java/IO-stream.md",
      },
      {
        text: "多线程",
        link: "/java/multithreading.md",
      },
      {
        text: "网络编程",
        link: "/java/network.md",
      },
      {
        text: "注解和反射",
        link: "/java/annotation.md",
      },
      {
        text: "javaWeb",
        link: "/java/javaWeb.md",
      },
      {
        text: "Mybatis",
        link: "/java/Mybatis.md",
      },
      {
        text: "Spring",
        link: "/java/Spring.md",
      },
      {
        text: "SpringMVC",
        link: "/java/SpringMVC.md",
      },
      {
        text: "SpringBoot",
        link: "/java/SpringBoot.md",
      },
    ],
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
