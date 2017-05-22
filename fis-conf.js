// npm install [-g] fis3-hook-commonjs
fis.hook('amd', {
  // 配置项
});


fis.match('/js/**.js', {
    isMod: true, // 设置 comp 下都是一些组件，组件建议都是匿名方式 define
});

fis.match('::package', {
    // npm install [-g] fis3-postpackager-loader
    // 分析 __RESOURCE_MAP__ 结构，来解决资源加载问题
    postpackager: fis.plugin('loader', {
       resourceType: 'require',

        useInlineMap: true // 资源映射表内嵌
    })
})

