import {copyright, hopeTheme} from "vuepress-theme-hope";
import navbar from "./navbar";
import sidebar from "./sidebar";
import {photoSwipePlugin} from "vuepress-plugin-photo-swipe";
import {sitemapPlugin} from "vuepress-plugin-sitemap2";
import {readingTimePlugin} from "vuepress-plugin-reading-time2";
import {baiduAutoPush} from "vuepress-plugin-baidu-autopush";
// const { googleAnalyticsPlugin } = require('@vuepress/plugin-google-analytics')
const {nprogressPlugin} = require('@vuepress/plugin-nprogress')

export default hopeTheme({
    hostname: "https://www.topjavaer.cn",

    author: {
        name: "大彬",
        url: "https://www.topjavaer.cn",
    },

    iconAssets: "iconfont",

    logo: "/logo.svg",

    repo: "Tyson0314/topjavaer",

    docsDir: "docs",

    // navbar
    navbar: navbar,

    // sidebar
    sidebar: sidebar,

    //footer: "Default footer",

    //displayFooter: true,

    pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],

    blog: {
        description: "野生程序员",
        intro: "https://mp.weixin.qq.com/s/84ZDT5d9TIbnyg-jeRKIIA",
        medias: {
            Github: "https://github.com/Tyson0314",
            Gitee: "https://gitee.com/tysondai",
            ZhiHu: "https://www.zhihu.com/people/dai-shu-bin-13",
        },
    },

    // encrypt: {
    //   config: {
    //     "/guide/encrypt.html": ["1234"],
    //   },
    // },

    plugins: {
        blog: {
            autoExcerpt: true,
        },

        // If you don't need comment feature, you can remove following option
        // The following config is for demo ONLY, if you need comment feature, please generate and use your own config, see comment plugin documentation for details.
        // To avoid disturbing the theme developer and consuming his resources, please DO NOT use the following config directly in your production environment!!!!!
        comment: {
            /**
             * Using Giscus
             */
            provider: "Giscus",
            repo: "Tyson0314/topjavaer",
            repoId: "R_kgDOHxs_3g",
            category: "Announcements",
            categoryId: "DIC_kwDOHxs_3s4CQpxA",

            /**
             * Using Twikoo
             */
            // provider: "Twikoo",
            // envId: "https://twikoo.ccknbc.vercel.app",

            /**
             * Using Waline
             */
            // provider: "Waline",
            // serverURL: "https://vuepress-theme-hope-comment.vercel.app",
        },

        mdEnhance: {
            enableAll: true,
            presentation: {
                plugins: ["highlight", "math", "search", "notes", "zoom"],
            },
        },

        //myplugin
        copyright: {
            disableCopy: true,
            global: true,
            author: "大彬",
            license: "MIT",
            hostname: "https://www.topjavaer.cn",
        },
        baiduAutoPush: {},
        sitemapPlugin: {
            // 配置选项
            hostname: "https:www.topjavaer.cn"
        },
        photoSwipePlugin: {
            // 你的选项
        },
        readingTimePlugin: {},

        nprogressPlugin: {},
    },
})
;
