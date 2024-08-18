import type { ProjectData } from '@/types'

export const projectData: ProjectData = [
  {
    title: '练习项目',
    projects: [
      {
        text: 'AI Answer Center',
        description: '基于 Vue 3 + Spring Boot + Redis + ChatGLM AI + RxJava + SSE 的 AI 答题应用平台',
        icon: 'i-mdi-book-edit',
        image: '/projects_img/answer-center.png',
        href: 'https://github.com/Zzysty/yudada',
      },
      {
        text: 'OpenAPI Hub',
        description:
          '提供 API 接口供开发者调用的平台，基于 Spring Boot 后端 + React 前端的 全栈微服务项目',
        icon: 'i-mdi-api',
        image: '/projects_img/api-hub.png',
        href: 'https://github.com/Zzysty/yuApi',
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
        description:
          '结合CEEMDAN分解、AutoEncoder降维、TCN层的碳价预测模型',
        icon: 'i-simple-icons-cnn',
        image: '/projects_img/TFR.png',
        href: 'https://github.com/Zzysty/TFR',
      },
      {
        text: '碳市场数据集',
        description:
          '湖北、广东、北京、天津碳市场的最新数据，基于影刀RPA进行数据爬取',
        icon: 'i-simple-icons-databricks',
        href: '/',
      },
    ],
  },
]
