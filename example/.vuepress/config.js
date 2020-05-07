module.exports = {
    title: "vuepress-theme-vuesax",
    base: '/vuepress-theme-vuesax/',
    theme: require.resolve('../..'),
    themeConfig: {
        sidebarDepth: 2,
        repo: 'https://github.com/lq782655835/vuepress-theme-vuesax',
        docsRepo: 'https://github.com/lq782655835/vuepress-theme-vuesax',
        docsDir: 'example',
        docsBranch: 'master',
        nav: [
            { text: '首页', link: '/' },
            { text: '博客', link: 'https://lq782655835.github.io/blogs' },
            {
                text: '工具',
                items: [
                    { text: 'yiai-cli脚手架', link: 'https://github.com/lq782655835/yiai-cli' },
                    { text: '可视化布局工具', link: 'https://github.com/lq782655835/vue-layout-preview' },
                    { text: '缓存管理工具', link: 'https://github.com/lq782655835/cache-manage-js' },
                    {
                        text: '自动生成blog目录工具',
                        link: 'https://github.com/lq782655835/node-vuepress-auto-read'
                    },
                    {
                        text: 'url自动生成TypeScript类型',
                        link: 'https://github.com/lq782655835/json2ts'
                    },
                    { text: '批量生成模板代码工具', link: 'https://github.com/lq782655835/auto-code' },
                    {
                        text: 'svg转icon webpack插件',
                        link: 'https://github.com/lq782655835/svg-icon-webpack-plugin'
                    },
                ]
            },
            {
                text: '组件库',
                items: [
                    { text: 'yi-ui基础组件库', link: 'https://github.com/lq782655835/yi-ui' },
                    { text: 'vuele业务组件库', link: 'https://github.com/lq782655835/vuele' },
                    { text: '基于el-table的配置化组件', link: 'https://github.com/lq782655835/el-table-plus' },
                    { text: '基于el-form的配置化组件', link: 'https://github.com/lq782655835/el-form-plus' },
                    { text: 'js api解耦dialog组件', link: 'https://github.com/lq782655835/el-dialog-helper' },
                    { text: '常用工具函数库', link: 'https://github.com/lq782655835/30-seconds-of-code' },
                ]
            },
            {
                text: 'vuepress插件',
                items: [
                    { text: 'vuepress Vue代码预览插件', link: 'https://github.com/lq782655835/vuepress-plugin-demo-block' },
                    { text: 'vuepress element-ui扩展插件', link: 'https://github.com/lq782655835/vuepress-plugin-element-ui' },
                    { text: 'vuepress sax主题插件', link: 'https://github.com/lq782655835/vuepress-theme-vuesax' },
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
        sidebar: ['/', '/about'],
        lastUpdated: '最后更新时间'
    }
}
