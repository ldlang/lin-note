import { defineUserConfig } from "vuepress";
import { defaultTheme } from "vuepress";
import { sidebar } from "./config/sidebar.js";
import { navbar } from "./config/navbar.js";
import { searchPlugin } from "@vuepress/plugin-search";
import CodeCopyPulgin from 'vuepress-code-copy'

export default defineUserConfig({
  base: "/lin-note/",
  lang: "zh-CN",
  title: "学海无涯，苦乐自知。",
  description: "ldlang-note",
  plugins: [
    searchPlugin({
      locales: {
        "/": {
          placeholder: "搜索",
        },
      },
    }),
    CodeCopyPulgin({
      copyText: '复制',
      copiedText: '复制成功',
    })
  ],
  theme: defaultTheme({
    contributors: false,
    navbar,
    sidebar,
  }),
});
