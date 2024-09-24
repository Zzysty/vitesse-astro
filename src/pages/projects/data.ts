import type { ProjectData } from '@/types'

export const projectData: ProjectData = [
  {
    title: '练习项目',
    projects: [
      {
        text: 'AI Answer Center',
        description:
          '基于 Vue 3 + Spring Boot + Redis + ChatGLM AI 的 AI 答题应用平台',
        icon: 'i-mdi-book-edit',
        image: '/projects_img/answer-center.png',
        href: 'https://github.com/Zzysty/yudada',
      },
      {
        text: 'OpenAPI Hub',
        description:
          '提供 API 接口供开发者调用的平台，基于 Spring Boot + React 的全栈微服务项目',
        icon: 'i-mdi-api',
        image: '/projects_img/api-hub.png',
        href: 'https://github.com/Zzysty/yuApi',
      },
      {
        text: 'CampusBuddy（校园伙伴）',
        description:
          '面向校园学生群体的伙伴组队匹配系统，基于Vue3和Spring Boot2的移动端网站。',
        icon: 'i-mdi-partnership',
        image: 'https://pic.yupi.icu/1285/(null)-20240516114022982.(null)',
        href: 'https://github.com/Zzysty/Partner_matching',
      },
    ],
  },
  {
    title: '课题项目',
    projects: [
      {
        text: 'DGCPN',
        description:
          '结合GCN层表征、TCN层时序特征提取、全连接层预测的动态图碳价预测模型',
        icon: 'i-simple-icons-graphql',
        image: '/projects_img/DGCPN.png',
        href: 'https://github.com/Zzysty/GC-TCN',
      },
      {
        text: 'TFR',
        description: '结合CEEMDAN分解、AutoEncoder降维、TCN层的碳价预测模型',
        icon: 'i-simple-icons-cnn',
        image: '/projects_img/TFR.png',
        href: 'https://github.com/Zzysty/TFR',
      },
      {
        text: '碳市场数据集',
        description:
          '湖北、广东、北京、天津碳市场的最新数据，基于影刀RPA进行数据爬取',
        icon: 'i-simple-icons-databricks',
        image: '/projects_img/carbon-dataset.png',
        href: 'https://github.com/Zzysty/Carbon_Price',
      },
      {
        text: 'Carbon Price 信息平台',
        description:
            '统计可视化湖北、广东、北京、天津碳市场数据及因素数据',
        icon: 'i-simple-icons-databricks',
        image: '/projects_img/carbon_price.png',
        href: 'https://github.com/Zzysty/Carbon_Price',
      },
    ],
  },
  {
    title: '专利成果',
    projects: [
      {
        text: '一种基于动态图网络的水质预测方法',
        description: '',
        icon: 'i-simple-icons-graphql',
        image: '/projects_img/DGTCN.png',
        href: 'https://www.patenthub.cn/patent/CN118228160A.html?ds=cn&ds=cn&dm=mix&p=1&ps=10&s=score!&m=none&q=%E5%91%A8%E6%B4%8B%20%E6%B7%AE%E9%98%B4%E5%B7%A5%E5%AD%A6%E9%99%A2',
      },
      {
        text: '基于CEEMDAN和AE-TCN的多维碳价预测方法',
        description: '',
        icon: 'i-simple-icons-cnn',
        image: '/projects_img/CEEMADN-TCN.jpg',
        href: 'https://www.patenthub.cn/patent/CN116823313A.html?ds=cn&ds=cn&dm=mix&p=1&ps=10&s=score!&m=none&q=%E5%91%A8%E6%B4%8B%20%E6%B7%AE%E9%98%B4%E5%B7%A5%E5%AD%A6%E9%99%A2',
      },
    ],
  },
]
