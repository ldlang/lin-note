import { defineUserConfig } from "vuepress";
import { defaultTheme } from "vuepress";
import { jsConfig } from "./config/sidebar-config.js";
import { navbarConfig } from "./config/navbar-config.js";
import { searchPlugin } from "@vuepress/plugin-search";

export default defineUserConfig({
  base: "/lin-note/",
  lang: "zh-CN",
  title: "学海无涯，苦乐自知。",
  description: "ldlang-note",
  head: [["link", { rel: "icon", href: "/avatar.jpg" }]],
  plugins: [
    searchPlugin({
      locales: {
        "/": {
          placeholder: "搜索",
        },
      },
    }),
  ],
  theme: defaultTheme({
    contributors: false,
    navbar: [...navbarConfig],
    sidebar: {
      ...jsConfig,
    },
  }),
});
