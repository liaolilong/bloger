module.exports={
    title:'Leon’blog',
    description:'Talk is cheap.Show me the code.',
    base:'/bloger/',
    themeConfig: {
        logo: 'Leon.jpg',
        smoothScroll: true,
        nav: [
            { text: '前端',
            items:[
                {text:'Vue',link:'/前端/vue/'},
                {text:'React',link:'/前端/react/'}
            ]
            },
            { text: '后端', link: '/后端/' },
            { text: '技术文档', 
            items:[
                {text: 'Vuepress博客的搭建',link: '/Vuepress博客的搭建/'},
                {text: 'MarkDown的使用',link: '/MarkDown的使用/'}
            ]      
            },
            { text: 'My github', link: 'https://github.com/liaolilong' },
          ],
          sidebar:'auto',
          markdown: {
            extendMarkdown: md => {
              md.use(require("markdown-it-disable-url-encode"));
            }
          }

      }
}

