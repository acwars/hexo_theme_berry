'use strict'

hexo.on('generateBefore', function () {
  const rootConfig = hexo.config
  if (hexo.locals.get) {
    const data = hexo.locals.get('data')
    data && data.berry && (hexo.theme.config = data.berry)
  }
  hexo.theme.config.rootConfig = rootConfig
})
