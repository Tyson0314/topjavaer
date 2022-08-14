import {defineUserConfig} from "vuepress";
import theme from "./theme";

const {searchPlugin} = require('@vuepress/plugin-search')


export default defineUserConfig({
    lang: "zh-CN",
    title: "程序员大彬",
    description: "自学转码之路",
    base: "/",
    dest: './public',
    theme,

    head: [
        //meta
        ["meta", { name: "robots", content: "all" }],
        ["meta", {name: "author", content: "大彬"}],
        [
            "meta",
            {
                "http-equiv": "Cache-Control",
                content: "no-cache, no-store, must-revalidate",
            },
        ],
        ["meta", { "http-equiv": "Pragma", content: "no-cache" }],
        ["meta", { "http-equiv": "Expires", content: "0" }],
        ['meta', {name: 'baidu-site-verification', content: 'code-mtJaPDeFwy'}],
        // ['meta', { name: 'google-site-verification', content: 'eGgkbT6uJR-WQeSkhhcB6RbnZ2RtF5poPf1ai-Fgmy8' }],
        ['meta', {name: 'keywords', content: 'Java, Spring, Mybatis, SpringMVC, Springboot, 编程, 程序员, MySQL, Redis, 系统设计, 分布式, RPC, 高可用, 高并发'}],
        [
            'script', {}, `
			var _hmt = _hmt || [];
			(function() {
				var hm = document.createElement("script");
				hm.src = "https://hm.baidu.com/hm.js?f9b36644dd9e756e508a77f272a63e07";
				var s = document.getElementsByTagName("script")[0];
				s.parentNode.insertBefore(hm, s);
			})();
		`
        ],
    ],

    plugins: [
        searchPlugin({
            // 配置项
        }),
    ],
    //plugins: [
    //    copyright({
    //        disableCopy: true,
    //        global: true,
    //        disableSelection: true,
    //        author: "大彬",
    //        license: "MIT",
    //        hostname: "https://www.topjavaer.cn",
    //    }),
    //    [
    //        'vuepress-plugin-baidu-autopush'
    //    ],
    //    sitemapPlugin({
    //        // 配置选项
    //        hostname: "https:www.topjavaer.cn"
    //    }),
    //    photoSwipePlugin({
    //        // 你的选项
    //    }),
    //    readingTimePlugin({
    //        // 你的选项
    //    }),
    //    [
    //        nprogressPlugin(),
    //    ],
    //    //['@vuepress/nprogress'],
    //],
})
;
