import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { sidebars } from './sidebar.js'

export default defineUserConfig({
  bundler: viteBundler(),
  theme: defaultTheme({
    editLink: false,
    contributors: false,
    sidebar: sidebars
  }),
  base: "/Analysis-of-the-Special-Curriculum-Schedule-of-ECJTU/",
  lang: 'zh-CN',
  title: '华东交通大学特殊课程表解析文档站',
  description: '解析特殊课程表'
})