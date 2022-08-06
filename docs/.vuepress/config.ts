import { defineUserConfig } from "vuepress";
import theme from "./theme";

export default defineUserConfig({
  lang: "zh-CN",
  title: "程序员大彬",
  description: "自学转码之路",

  base: "/",

  theme,
});
