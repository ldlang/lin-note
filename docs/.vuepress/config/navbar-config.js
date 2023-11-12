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
    text: "mysql",
    activeMatch: "^/mysql/",
    children: [
      {
        text: "基础部分",
        link: "/mysql/basis.md",
      },
      {
        text: "SELECT部分",
        link: "/mysql/SELECT.md",
      },
      {
        text: "运算符",
        link: "/mysql/operator.md",
      },
      {
        text: "排序和分页",
        link: "/mysql/sort-and-limit.md",
      },
    ],
  },
];
