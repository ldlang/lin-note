import { defineUserConfig } from "vuepress";
import { defaultTheme } from "vuepress";

export default defineUserConfig({
  base: "/lin-note/",
  lang: "zh-CN",
  title: "笔记",
  description: "ldlang-note",
  theme: defaultTheme({
    contributors:false,
    navbar: [
      {
        text: "首页",
        link: "/",
      },
      {
        text: "git笔记",
        link: "/git-note/",
        activeMatch: '^/git-note/',
      },
    ],
    sidebar: 'auto'
  }),
});
