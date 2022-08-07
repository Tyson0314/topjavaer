import {defineUserConfig} from "vuepress";
import theme from "./theme";
const { searchPlugin } = require('@vuepress/plugin-search')


export default defineUserConfig({
    lang: "zh-CN",
    title: "程序员大彬",
    description: "自学转码之路",
    base: "/",
    dest: './public',
    theme,

    head: [
        [
            'meta', { name: 'baidu-site-verification', content: 'code-mtJaPDeFwy' },
            // 'meta', { name: 'google-site-verification', content: 'eGgkbT6uJR-WQeSkhhcB6RbnZ2RtF5poPf1ai-Fgmy8' },
        ],
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
