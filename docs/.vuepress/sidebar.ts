import {sidebar} from "vuepress-theme-hope";

const {getChildren} = require("./vuepress-sidebar-auto/vuepress-sidebar-auto");

export default sidebar({
    "/database/mysql-basic/": [{
        title: "MySQL基础",
        collapsable: false,
        children: getChildren('./docs/database', 'mysql-basic'),
        // children: ["1-data-type"],
    },
    ],
    "/redis/redis-basic/": [
        {
            title: "Redis基础",
            collapsable: false,
            children: getChildren('./docs/redis', 'redis-basic'),
        },
    ],
    "/advance/design-pattern/": [
        {
            title: "设计模式",
            collapsable: false,
            children: getChildren('./docs/advance', 'design-pattern'),
        },
    ],
    //'/': "auto", //不能放在数组第一个，否则会导致右侧栏无法使用
    //"/",
    //"/home",
    //"/slide",
    //{
    //  icon: "creative",
    //  text: "Guide",
    //  prefix: "/guide/",
    //  link: "/guide/",
    //  children: "structure",
    //},
    //{
    //  text: "Articles",
    //  icon: "note",
    //  prefix: "/posts/",
    //  children: [
    //    {
    //      text: "Articles 1-4",
    //      icon: "note",
    //      collapsable: true,
    //      prefix: "article/",
    //      children: ["article1", "article2", "article3", "article4"],
    //    },
    //    {
    //      text: "Articles 5-12",
    //      icon: "note",
    //      children: [
    //        {
    //          text: "Articles 5-8",
    //          icon: "note",
    //          collapsable: true,
    //          prefix: "article/",
    //          children: ["article5", "article6", "article7", "article8"],
    //        },
    //        {
    //          text: "Articles 9-12",
    //          icon: "note",
    //          children: ["article9", "article10", "article11", "article12"],
    //        },
    //      ],
    //    },
    //  ],
    //},
});
