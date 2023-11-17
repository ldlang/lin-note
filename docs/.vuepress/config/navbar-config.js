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
    ],
  },
  {
    text: "mysql",
    link: "/mysql/",
    activeMatch: "^/mysql/",
  },
];
