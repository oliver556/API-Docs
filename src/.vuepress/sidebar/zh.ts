import { sidebar } from "vuepress-theme-hope";

// @ts-ignore
export const zhSidebar = sidebar({
  "/userSGuidance/": 'structure',
  "userSGuidance": [
    "",
    {
      text: "使用指南",
      icon: "creative",
      prefix: "userSGuidance/",
      children: ["install"],
    },
  ],

  "/cookbook/sync-core/": "structure",
  "cookbook/sync-core": [
    "",
    {
      text: "使用指南",
      icon: "engine",
      prefix: "cookbook/sync-core/",
      children: ["install"],
    },
  ],

  "/cookbook/sync-utils/": "structure",
  "cookbook/sync-utils": [
    "",
    {
      text: "工具",
      icon: "build",
      prefix: "cookbook/sync-utils/",
      children: ["install"],
    },
  ],


});
