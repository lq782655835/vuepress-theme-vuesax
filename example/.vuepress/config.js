module.exports = {
    title: "vuepress-theme-vuesax",
    base: '/vuepress-theme-vuesax/',
    theme: require.resolve('../..'),
    themeConfig: {
        sidebarDepth: 1,
        repo: 'https://github.com/lq782655835/vuepress-theme-vuesax',
        docsRepo: 'https://github.com/lq782655835/vuepress-theme-vuesax',
        docsDir: 'example',
        docsBranch: 'master',
        nav: [
            { text: '首页', link: '/' },
            { text: '博客', link: '/team-standard/0.standard-ai-summary' },
            {
                text: '工具',
                items: [
                    { text: 'yiai-cli脚手架', link: 'https://github.com/lq782655835/yiai-cli' },
                    { text: 'yi-ui组件库', link: 'https://github.com/lq782655835/yi-ui' },
                    {
                        text: '自动生成blog目录工具',
                        link: 'https://github.com/lq782655835/node-vuepress-auto-read'
                    },
                    {
                        text: 'url自动生成TypeScript代码',
                        link: 'https://github.com/lq782655835/json2ts'
                    },
                    {
                        text: 'svg转icon webpack插件',
                        link: 'https://github.com/lq782655835/svg-icon-webpack-plugin'
                    },
                    { text: '缓存管理工具', link: 'https://github.com/lq782655835/cache-manage-js' }
                ]
            },
            {
                text: '工程模板',
                items: [
                    { text: 'vue', link: 'https://github.com/lq782655835/standard-vue-project' },
                    {
                        text: 'typescript',
                        link: 'https://github.com/lq782655835/standard-vue-typescript-project'
                    },
                    {
                        text: 'official-website',
                        link: 'https://github.com/lq782655835/official-website-template'
                    },
                    {
                        text: 'electron',
                        link: 'https://github.com/lq782655835/electron-vue-template'
                    },
                    { text: 'mpvue', link: 'https://github.com/lq782655835/mpvue-project' },
                    { text: 'tool', link: 'https://github.com/lq782655835/json2ts' }
                ]
            }
        ],
        sidebar: 'auto',
        lastUpdated: '最后更新时间'
    }
}
