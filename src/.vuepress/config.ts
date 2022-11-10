import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
// import { searchPlugin } from "@vuepress/plugin-search";

// @ts-ignore
export default defineUserConfig({
  base: "/",

  lang: "zh-CN",

  title: "Syncsoft 文档",

  locales: {
    // "/": {
    //   lang: "en-US",
    //   title: "Docs Demo",
    //   description: "A docs demo for vuepress-theme-hope",
    // },
    // "/sync-core": {
    //   lang: "zh-CN",
    //   title: "Syncsoft 文档",
    //   description: "vuepress-theme-hope 的文档演示",
    // },
    // "/zh/": {
    //   lang: "zh-CN",
    //   title: "Syncsoft 文档",
    //   description: "vuepress-theme-hope 的文档演示",
    // },
  },

  theme,

  shouldPrefetch: false,

  // plugins: [
    // searchPlugin({
    //   locales: {
    //     '/': {
    //       placeholder: '搜索',
    //     }
    //   }
    // })
  // ]
});
