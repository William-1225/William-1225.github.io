let currentLang = 'zh'; // 默认中文

// 内嵌所有内容数据
const contentData = {
    zh: {
        config: {
            title: "William's Homepage",
            "page-top-title": "Pinrun Chen (William)",
            "top-section-bg-text": "William's Homepage",
            "home-subtitle": "陈品润&ensp;|&ensp; William",
            "copyright-text": "&copy; Pinrun Chen 2023-2026. All Rights Reserved."
        },
        home: `[![William-1225](https://img.shields.io/badge/William--1225-blue?logo=github)](https://github.com/William-1225)<br>
悉尼大学计算机硕士在读`,
        education: `- 2025.02 - 2027.02 悉尼大学计算机硕士<br><br><br>

- 2020.09 - 2024.07 温州肯恩大学会计学士`,
        experience: `### **捷豹路虎中国**
**2025.12 - 2026.03&nbsp;&nbsp;|&nbsp;&nbsp;商务运营实习生&nbsp;&nbsp;|&nbsp;&nbsp;Base: 上海**

负责经销商渠道监测、竞品分析与市场研究相关工作，为品牌市场策略与产品决策提供数据支撑。
<br>

#### 主要贡献:
- **渠道洞察**：基于Claude Code搭建经销商网络自动监测体系，覆盖15+主流品牌、10,000+网点，动态更新渠道布局、区域覆盖及渗透率数据，将人工调研周期压缩至小时级，为渠道布局优化与资源投放决策提供数据支撑。
- **竞对分析**：分析5+传统豪华品牌销量、财报及产品规划，围绕销量同比、量价变化及渗透率等核心指标拆解竞品市场动作，输出5+份竞品分析报告，提炼各品牌销量驱动因素与产品周期节奏，支持部门产品定位与市场策略制定。
- **残值研究**：整合中汽协5,000+条二手车交易数据，构建残值分析底表，聚焦车型保值率、车龄结构等维度，并横向对比本品牌各车型残值表现，判断二手车市场各车型竞争力差异，为产品生命周期管理与定价策略提供数据支撑。
- **情报综研**：持续追踪20+主流车企月度销量、年度目标及达成进度，结合乘联会数据、行业政策及机构宏观报告，撰写3期月度市场快报及5+专题分析报告，捕捉行业量价走势与中长期市场趋势，为部门市场决策提供参考依据。
<br><br>

---
<br>

### **极氪智能科技**
**2025.07 - 2025.10&nbsp;&nbsp;|&nbsp;&nbsp;商业分析实习生&nbsp;&nbsp;|&nbsp;&nbsp;Base: 上海**

负责上海区域销售数据分析、运营优化与市场研究工作，助力区域销售业绩提升。
<br>

#### 主要贡献:
- **数据分析**：基于销售漏斗模型，深度拆解上海战区门店全链路销售数据，覆盖线索流入、试驾转化、订单成交全环节，定位各层级转化瓶颈与流失节点，输出销售数据分析报告，向管理层同步区域销售关键卡点，支持针对性策略优化。
- **看板搭建**：梳理跨区域、跨部门销售报表需求，使用Python + Playwright搭建多源数据自动采集与清洗脚本，实现数据自动聚合与日报定时下发，单次报表产出耗时降低约60%，确保实时监控各门店销售动态，支持快速业务决策。
- **运营优化**：实地调研上海区域5+门店销售与服务全流程，结合漏斗数据识别留资率不足、线索跟进滞后等一线运营痛点，量化各门店关键指标偏差并协调试驾车资源调配，形成问题诊断报告，支持区域销售SOP优化。
- **市场研究**：跟踪5+竞品品牌销量与市场动态，汇总销售与市场部门复盘信息及行业政策，从品牌建设、市场策略与交付效率等维度开展竞品研究，明确竞品核心优劣势与可借鉴策略方向，撰写专题报告为部门市场研判提供参考。
<br><br>

---
<br>

### **东方日升新能源股份有限公司**
**2023.06 - 2023.09&nbsp;&nbsp;|&nbsp;&nbsp;海外市场实习生&nbsp;&nbsp;|&nbsp;&nbsp;Base: 宁波**

负责海外业务订单监控、获客分析与竞品研究工作，支持海外销售业务增长。
<br>

#### 主要贡献:
- **数据监控**：维护ERP系统中出海业务订单全流程交付节点信息，规范化记录订单状态与跟进进度，动态追踪交付情况，协助销售团队及时响应客户需求，提升订单履约效率。
- **获客分析**：基于销售管理系统中询盘频次、历史成交及客户体量等维度，对展会、社媒、自然流等多渠道线索进行价值评估与优先级排序，识别高意向客户与热销产品组合，支持销售团队聚焦资源重点跟进，提升线索转化效率。
- **竞品研究**：追踪Amazon等海外零售平台竞品动态，系统整合竞品参数、定价信息，建立竞品对比底表，针对热销产品与自有产品进行功能与价格维度横向对标，为新品开发与产品功能迭代提供数据支撑。
- **商务支持**：整理新品产品参数对比表与报价单，对接北美存量客户开展新品介绍与选品支持，结合客户历史采购偏好推荐适配产品组合，辅助客户完成新订单周期选品决策，支持销售团队维护客户关系与复购转化。
<br><br>`,
        project: `### **上海交通大学国际暑校**
**2024.06 - 2024.08&nbsp;&nbsp;|&nbsp;&nbsp;市场营销课程助教&nbsp;&nbsp;|&nbsp;&nbsp;Base: 上海**

担任上海交通大学市场营销课程助教，负责课程教学支持、学生项目辅导以及教学数据分析等工作。
<br>

#### 主要贡献:
- **项目辅导**：辅导上海交通大学国际暑校30余名学生开展市场调研项目，基于Stata和Excel进行数据建模与回归分析，并嵌入SWOT与PESTEL分析框架，辅导数据清洗与逻辑论证，实现100%结课率，优秀报告占比环比提升25%。
<br><br>`
    },
    en: {
        config: {
            title: "William's Homepage",
            "page-top-title": "Pinrun Chen (William)",
            "top-section-bg-text": "William's Homepage",
            "home-subtitle": "Pinrun Chen &ensp;|&ensp; William",
            "copyright-text": "&copy; Pinrun Chen 2023-2026. All Rights Reserved."
        },
        home: `[![William-1225](https://img.shields.io/badge/William--1225-blue?logo=github)](https://github.com/William-1225)<br>
Master of Computer Science Candidate at The University of Sydney`,
        education: `- Feb 2025 – Feb 2027 The University of Sydney, Master of Computer Science<br><br><br>

- Sept 2020 – June 2024 Wenzhou-Kean University, Bachelor of Accounting`,
        experience: `### **Jaguar Land Rover China**
**Dec 2025 - Mar 2026&nbsp;&nbsp;|&nbsp;&nbsp;Business Operations Intern&nbsp;&nbsp;|&nbsp;&nbsp;Shanghai**

Dealer channel monitoring, competitive analysis and market research to support brand strategy decisions.
<br>

#### Key Contributions:
- Built automated dealer monitoring system covering 15+ brands and 10,000+ outlets, reducing research cycle from days to hours.
- Analyzed 5+ luxury brands' sales and product strategies, delivered 5+ competitive analysis reports for product positioning.
- Built residual value analysis model with 5,000+ used car transaction records to support pricing and lifecycle management.
- Tracked 20+ automakers' performance, published 3 monthly market bulletins and 5+ industry trend reports.
<br><br>

---
<br>

### **ZEEKR Intelligent Technology**
**Jul 2025 - Oct 2025&nbsp;&nbsp;|&nbsp;&nbsp;Business Analysis Intern&nbsp;&nbsp;|&nbsp;&nbsp;Shanghai**

Sales data analysis and operation optimization for Shanghai region to drive sales performance growth.
<br>

#### Key Contributions:
- Analyzed full-funnel sales data across all Shanghai stores, identified conversion bottlenecks and proposed optimization strategies.
- Developed Python + Playwright automated reporting system, reducing report generation time by 60% with real-time KPI monitoring.
- Conducted on-site operation audits for 5+ stores, diagnosed pain points and optimized regional sales SOPs.
- Researched 5+ competitor brands' market dynamics, provided strategy recommendations for regional marketing.
<br><br>

---
<br>

### **Risen Energy Co., Ltd.**
**Jun 2023 - Sep 2023&nbsp;&nbsp;|&nbsp;&nbsp;Overseas Marketing Intern&nbsp;&nbsp;|&nbsp;&nbsp;Ningbo**

Overseas order management and customer analysis to support international business expansion.
<br>

#### Key Contributions:
- Monitored full-lifecycle order delivery in ERP system, improved order fulfillment efficiency by streamlining tracking processes.
- Evaluated multi-channel leads, identified high-value customer segments and improved lead conversion efficiency.
- Conducted competitive product research on Amazon platform, provided data support for new product development.
- Supported North American customer product selection, assisted in customer relationship maintenance and repurchase growth.
<br><br>`,
        project: `### **Shanghai Jiao Tong University International Summer School**
**Jun 2024 - Aug 2024&nbsp;&nbsp;|&nbsp;&nbsp;Marketing Course Teaching Assistant&nbsp;&nbsp;|&nbsp;&nbsp;Shanghai**

Supported teaching activities and student project guidance for international summer school program.
<br>

#### Key Contributions:
- Tutored 30+ international students in market research projects, achieved 100% completion rate with 25% increase in excellent reports.
<br><br>`
    }
};

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // 语言切换按钮事件
    document.getElementById('lang-toggle').addEventListener('click', toggleLanguage);

    // 初始化加载中文内容
    loadContent('zh');
});

// 加载对应语言的内容
function loadContent(lang) {
    const data = contentData[lang];

    // 加载配置
    Object.keys(data.config).forEach(key => {
        try {
            document.getElementById(key).innerHTML = data.config[key];
        } catch {
            console.log("Unknown id and value: " + key + "," + data.config[key].toString())
        }
    });

    // Marked
    marked.use({ mangle: false, headerIds: false })

    // 加载各个section内容
    const sections = ['home', 'education', 'experience', 'project'];
    sections.forEach(name => {
        const html = marked.parse(data[name]);
        document.getElementById(name + '-md').innerHTML = html;
    });

    // 更新导航栏文本
    updateNavText(lang);
    // 更新section标题
    updateSectionTitles(lang);
    // 更新切换按钮文本
    document.getElementById('lang-toggle').textContent = lang === 'zh' ? 'EN' : '中文';

    // MathJax
    MathJax.typeset();
}

// 切换语言
function toggleLanguage() {
    currentLang = currentLang === 'zh' ? 'en' : 'zh';
    loadContent(currentLang);
}

// 更新导航栏文本
function updateNavText(lang) {
    if (lang === 'zh') {
        document.getElementById('nav-home').textContent = '首页';
        document.getElementById('nav-education').textContent = '教育经历';
        document.getElementById('nav-experience').textContent = '实习经历';
        document.getElementById('nav-project').textContent = '项目经历';
    } else {
        document.getElementById('nav-home').textContent = 'HOME';
        document.getElementById('nav-education').textContent = 'EDUCATION';
        document.getElementById('nav-experience').textContent = 'EXPERIENCE';
        document.getElementById('nav-project').textContent = 'PROJECTS';
    }
}

// 更新section标题
function updateSectionTitles(lang) {
    if (lang === 'zh') {
        document.getElementById('experience-subtitle').innerHTML = '<i class="bi bi-briefcase-fill"></i> 实习经历 ';
        document.getElementById('project-subtitle').innerHTML = '<i class="bi bi-file-earmark-code-fill"></i> 项目经历 ';
        document.getElementById('education-subtitle').innerHTML = '<i class="bi-layers-fill"></i> 教育经历';
    } else {
        document.getElementById('experience-subtitle').innerHTML = '<i class="bi bi-briefcase-fill"></i> EXPERIENCE ';
        document.getElementById('project-subtitle').innerHTML = '<i class="bi bi-file-earmark-code-fill"></i> PROJECTS ';
        document.getElementById('education-subtitle').innerHTML = '<i class="bi-layers-fill"></i> EDUCATION';
    }
}
