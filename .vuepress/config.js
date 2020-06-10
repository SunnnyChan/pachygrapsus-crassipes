// .vuepress/config.js
module.exports = {
  title: 'Practical Statistics For Data Scientists',  // 设置网站标题
  description : "",
  base : '/pachygrapsus-crassipes/',
  themeConfig: {
    nav : [
        { text: 'Github', link: 'http://www.github.com/sunnnychan' }
    ],
    sidebar: [
 
      {
        title: '内容摘录',   // 必要的
        path: '/content/',      // 可选的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
      },
      {
        title: 'R演示代码',   // 必要的
        path: '/r/',      // 可选的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
      },
      {
        title: '封面说明',   // 必要的
        path: '/cover/',      // 可选的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
      },
      {
        title: '作者简介',   // 必要的
        path: '/author/',      // 可选的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
      }
    ]
  }
}
