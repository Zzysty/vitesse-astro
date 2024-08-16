export const siteConfig = {
  author: 'zzy',
  title: 'zzy\'s site',
  subtitle: 'Vitesse theme for Astro, supports Vue and UnoCSS.',
  description: 'A Minimal, SEO-friendly portfolio and blog theme for Astro.',
  image: {
    src: '/hero.jpg',
    alt: 'Website Main Image',
  },
  email: 'kevinwong865@gmail.com',
  socialLinks: [
    {
      text: 'GitHub',
      href: 'https://github.com/Zzysty',
      icon: 'i-mdi-github',
    },
    {
      text: 'Email',
      href: '17573204410@163.com',
      icon: 'i-mdi-email',
    },
    {
      text: 'Wechat',
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
      {
        text: 'Notes',
        href: '/blog/notes',
      },
      {
        text: 'Talks',
        href: '/blog/talks',
      },
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
      {
        text: 'Posts Props',
        href: '/posts-props',
      },
      {
        text: 'Markdown Style',
        href: '/md-style',
      },
      {
        text: 'View on Astro',
        href: 'https://astro.build/themes/details/vitesse-theme-for-astro/',
      },
      {
        text: 'GitHub Repository',
        href: 'https://github.com/kevinwong865/astro-theme-vitesse',
      },
    ],
  },
}

export default siteConfig
