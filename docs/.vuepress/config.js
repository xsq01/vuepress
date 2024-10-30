module.exports = {
    title: "Luminosity Blog",
    description: "An awesome documentation website built with VuePress.",
    // base: process.env.BASE_URL || "/vuepress/",
    plugins: [
        ["@vuepress/back-to-top"],
        ["@vuepress/medium-zoom"],
        [
            "@vuepress/last-updated",
            {
                transformer: (timestamp, lang) => {
                    const moment = require("moment");
                    moment.locale(lang);
                    return moment(timestamp).fromNow();
                },
            },
        ],
    ],
    head: [["link", { rel: "icon", href: "/favicon.ico" }]],
    themeConfig: {
        logo: "/ming.png",
        smoothScroll: true,
        lastUpdated: "上次更新",
        nav: [
            { text: "Home", link: "/" },
            {
                text: "Blog",
                items: [
                    { text: "CSS", link: "/blog/css/" },
                    { text: "VUE", link: "/blog/vue/" },
                    { text: "微前端", link: "/blog/micro/" },
                    { text: "服务器", link: "/blog/server/" },
                    { text: "小程序", link: "/blog/vxmp/" },
                ],
            },
            { text: "GitHub", link: "https://github.com/fadeache" },
        ],
        sidebar: {
            "/blog/css/": [
                {
                    title: "CSS",
                    collapsable: false,
                    sidebarDepth: 2,
                    children: [
                        "",
                        "animation",
                    ],
                },
            ],
            ...
        },
    },
};

