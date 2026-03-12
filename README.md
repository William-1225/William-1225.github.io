![Github Forks](https://img.shields.io/github/forks/William-1225/William-1225.github.io?style=flat)
![Github Stars](https://img.shields.io/github/stars/William-1225/William-1225.github.io?style=flat)
![License](https://img.shields.io/github/license/William-1225/William-1225.github.io)
![Last Commit](https://img.shields.io/github/last-commit/William-1225/William-1225.github.io)
![Deploy Status](https://img.shields.io/github/deployments/William-1225/William-1225.github.io/github-pages)

# 个人主页模板 | Personal Homepage Template
✨ 适用于学术申请、求职展示、个人作品集展示 | Perfect for academic applications, job seeking, and portfolio showcase ✨

## 🚀 在线预览 | Live Preview
[![Website Screenshot](https://raw.githubusercontent.com/William-1225/William-1225.github.io/main/screenshot_full.png?20260312)](https://william-1225.github.io/)

👉 **立即访问：[https://william-1225.github.io/](https://william-1225.github.io/)**

## ✨ 特性 | Features
- 🎯 **双语言支持**：完整中英文对照界面，适合国内外使用
- 💼 **工作经历板块**：专门为求职者设计的工作经验展示区
- 📚 **学术项目支持**：保留了论文、项目、获奖等学术展示模块
- 🎨 **美观现代**：简洁优雅的设计，响应式布局适配各种设备
- ⚡ **快速部署**：基于 GitHub Pages，只需几分钟即可完成部署
- 🔧 **易于自定义**：所有内容都在 Markdown 文件中，无需修改代码
- 📱 **移动端友好**：完美适配手机、平板等各种屏幕尺寸

## 📖 介绍 | Introduction
这是一个**通用的个人主页模板**，基于 [Sen Li 的学术主页模板](https://github.com/senli1073/senli1073.github.io) 进行优化和扩展。

在原有学术模板基础上，我新增了**工作经历板块**，使其不仅适用于学术研究人员，也非常适合程序员、设计师等各行业求职者使用。模板采用中英文对照设计，满足不同场景需求。

This is a **general-purpose personal website template**, optimized and extended based on [Sen Li's academic template](https://github.com/senli1073/senli1073.github.io).

I have added a **work experience section** on top of the original academic template, making it suitable not only for researchers but also for job seekers in all industries such as programmers and designers. The template adopts a bilingual (Chinese/English) design to meet the needs of different scenarios.

## 🎥 教程 | Tutorials
- **Bilibili 视频教程**：[【2025 最新保姆级教程】手把手教你用 github 制作个人主页（申学找工作必备）](https://www.bilibili.com/video/BV16nNMeFEzm?vd_source=79b688b1a191b9f9e8204aa1c3d0adab)
- **CSDN 图文教程**：[从零开始搭建个人主页详细指南](https://blog.csdn.net/qq_45743991/article/details/145505150?spm=1001.2014.3001.5502)

## 🚀 快速开始 | Quick Start
### 1. Fork 仓库 | Fork the Repository
点击页面右上角的 Fork 按钮，将仓库复制到你的 GitHub 账户下。

仓库名称必须命名为 `<你的用户名>.github.io`，这样部署后你的个人网站地址将是 `https://<你的用户名>.github.io/`。

Click the Fork button at the top right corner of the page to copy the repository to your GitHub account.

The repository name must be `<your-username>.github.io`, so your website URL will be `https://<your-username>.github.io/` after deployment.

### 2. 克隆到本地 | Clone to Local
进入你想存放项目的文件夹，克隆你刚刚 Fork 的仓库：
```bash
git clone https://github.com/<你的用户名>/<你的用户名>.github.io.git
cd <你的用户名>.github.io
```

### 3. 修改内容 | Customize Content
项目结构非常简单，所有内容都可以通过修改 `contents/` 文件夹下的文件来完成：
```
.
├── contents/          # 所有页面内容都在这里
│   ├── config.yml     # 网站配置：标题、版权、社交链接等
│   ├── about.md       # 个人介绍部分
│   ├── experience.md  # 工作经历部分
│   ├── education.md   # 教育背景部分
│   ├── projects.md    # 项目经历部分
│   ├── publications.md # 论文发表部分
│   ├── awards.md      # 获奖荣誉部分
│   └── interests.md   # 兴趣爱好部分
└── static/
    ├── assets/img/    # 图片资源：头像、背景图等
    ├── css/           # 样式文件
    └── js/            # 脚本文件
```

修改步骤：
1. **编辑内容**：修改 `contents/*.md` 中的内容为你自己的信息
2. **调整配置**：修改 `contents/config.yml` 中的网站标题、版权信息、社交链接等
3. **替换图片**：将你的头像、背景图等替换到 `static/assets/img/` 文件夹下
4. **更新预览图**：替换根目录下的 `screenshot_full.png` 为你的网站截图

### 4. 提交部署 | Deploy
将修改提交到 GitHub 仓库：
```bash
git add .
git commit -m "Update personal information"
git push
```

提交完成后，等待几分钟，GitHub Pages 会自动部署你的网站。

### 5. 访问网站 | Enjoy
打开浏览器，访问 `https://<你的用户名>.github.io` 即可看到你的个人主页！

## 📝 使用提示 | Tips
- 所有内容都支持 Markdown 语法，可以自由排版
- 可以通过修改 `static/css/custom.css` 来调整网站样式
- 图片建议压缩后再上传，加快网站加载速度
- 如果需要添加新的板块，可以参考现有文件的格式进行扩展

## 🤝 贡献 | Contributing
欢迎提交 Issue 和 Pull Request 来改进这个模板！如果你有好的建议或者发现了 Bug，欢迎反馈。

## 📄 许可证 | License
本项目基于 MIT 许可协议开源，你可以自由使用、修改和分发此模板。

Copyright © 2025 Pinrun Chen. Licensed under the MIT License.

---

⭐ 如果这个模板对你有帮助，欢迎给个 Star 支持一下！
If you find this template helpful, please give it a Star ⭐
