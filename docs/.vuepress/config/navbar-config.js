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
];
