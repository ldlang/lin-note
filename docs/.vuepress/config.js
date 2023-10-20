import { defineUserConfig } from "vuepress";
import { defaultTheme } from "vuepress";
import { jsConfig } from "./config/sidebar-config.js";
import { navbarConfig } from "./config/navbar-config.js";

export default defineUserConfig({
  base: "/lin-note/",
  lang: "zh-CN",
  title: "笔记",
  description: "ldlang-note",
  theme: defaultTheme({
    contributors: false,
    navbar: [...navbarConfig],
    sidebar: {
      ...jsConfig,
    },
  }),
});
