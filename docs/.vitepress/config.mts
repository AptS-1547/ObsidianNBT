import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "ObsidianNBT",
  description: "一个用 Rust 编写的 Minecraft NBT 数据操作命令行工具",
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '快速开始', link: '/guide/getting-started' },
      { text: 'NBT 格式', link: '/guide/nbt-format' }
    ],

    sidebar: [
      {
        text: '指南',
        items: [
          { text: '快速开始', link: '/guide/getting-started' },
          { text: 'NBT 格式说明', link: '/guide/nbt-format' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/AptS-1547/ObsidianNBT' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2026 AptS:1547'
    }
  }
})
