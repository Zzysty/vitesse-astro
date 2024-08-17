export const siteConfig = {
  author: 'zzy',
  title: 'Zzy profile',
  subtitle: 'Vitesse theme for Astro, supports Vue and UnoCSS.',
  description: 'A Minimal, SEO-friendly portfolio and blog theme for Astro.',
  image: {
    src: '/hero.jpg',
    alt: 'Website Main Image',
  },
  email163: '17573204410@163.com',
  emailqq: '1184271384@qq.com',
  gmail: 'zzyisyyds@gmail.com',
  socialLinks: [
    {
      text: 'GitHub',
      href: 'https://github.com/Zzysty',
      icon: 'i-mdi-github',
    },
    {
      text: '编程导航',
      href: 'https://www.code-nav.cn/user/1634088558341971970/info',
      icon: 'i-mdi-code-json',
    },
    {
      text: '哔哩哔哩',
      href: 'https://space.bilibili.com/174414101?spm_id_from=333.1007.0.0',
      icon: 'i-ant-design-bilibili-outlined',
    },
  ],
  userInfo: [
    {
      text: '微信',
      href: '17573204410',
      icon: 'i-mdi-wechat',
    },
    {
      text: 'QQ',
      href: '1184271384',
      icon: 'i-ant-design-qq-outlined',
    },
  ],
  header: {
    logo: {
      src: '/favicon-32.svg',
      alt: 'Logo Image',
    },
    navLinks: [
      {
        text: 'Blog',
        href: '/blog',
      },
      // {
      //   text: "Notes",
      //   href: "/blog/notes",
      // },
      // {
      //   text: "Talks",
      //   href: "/blog/talks",
      // },
      {
        text: 'Projects',
        href: '/projects',
      },
    ],
  },
  page: {
    blogLinks: [
      {
        text: 'Blog',
        href: '/blog',
      },
      {
        text: 'Notes',
        href: '/blog/notes',
      },
      {
        text: 'Talks',
        href: '/blog/talks',
      },
    ],
  },
  footer: {
    navLinks: [
      // {
      //   text: "Posts Props",
      //   href: "/posts-props",
      // },
      // {
      //   text: "Markdown Style",
      //   href: "/md-style",
      // },
      {
        text: 'GitHub Repository',
        href: 'https://github.com/Zzysty/vitesse-astro',
      },
    ],
  },
}

export default siteConfig
