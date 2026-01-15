# Rishabh's Portfolio 💎

A modern, high-performance portfolio website showcasing my journey and expertise as a Data Scientist and Machine Learning Engineer.

[![Performance](https://img.shields.io/badge/Performance-68%25_Faster-success)]()
[![SEO](https://img.shields.io/badge/SEO-Optimized-blue)]()
[![Mobile](https://img.shields.io/badge/Mobile-Responsive-green)]()

🔗 **Live Site:** [rishabhsingh.me](https://rishabhsingh.me)

---

## 🚀 Features

### **⚡ Performance Optimized**
- **Scroll-Based Lazy Loading**: Sections load progressively as you scroll
- **68% Faster Initial Load**: Reduced from ~2.5s to ~0.8s
- **87% Fewer Initial Images**: Only critical assets loaded upfront
- **Skeleton Loaders**: Smooth visual feedback during content loading
- **Progressive Enhancement**: Works without JavaScript (SEO-friendly)

### **🔍 SEO Optimized**
- **Comprehensive Meta Tags**: Title, description, keywords
- **Open Graph Tags**: Rich previews on Facebook, LinkedIn, WhatsApp
- **Twitter Cards**: Professional sharing on Twitter/X
- **Schema.org Structured Data**: Enhanced Google search results
- **XML Sitemaps**: Both main sitemap and sitemap index
- **robots.txt**: Proper crawler directives

### **🎨 Design Features**
- **Responsive Design**: Seamless experience on all devices
- **Dark/Light Mode**: Toggle between themes
- **Multiple Color Schemes**: 4 customizable color themes
- **Interactive UI**: Smooth scrolling and fade-in animations
- **Accessibility**: WCAG compliant, keyboard navigable

### **📊 Analytics**
- **Visitor Map**: Real-time global visitor tracking
- **Cross-Browser Compatible**: Chrome, Firefox, Safari, Edge

---

## 🎯 Professional Overview

### 🎓 Education
- **B.S. Data Science and Applications** - IIT Madras (2021 - 2025)
  - CGPA: 7.89
  - Minor in Economics & Finance

### 💼 Experience
- **Data Scientist** @ Chryselys (Oct 2024 - Present)
  - Machine Learning and AWS
  - Insight-Driven Analysis
  - Strategic Impact
  - APLD Data Expertise

- **ML Intern** @ iNeuron.ai (March 2024 - April 2024)
  - Developed ML models for cybersecurity
  - Domain authenticity prediction
  - Tech: scikit-learn, REST API, Azure

### 🏆 Achievements
- oneArena Flask / Machine Learning Trainer
- Rank-3 in Codechef Competition

### 📍 Location
Delhi, India

---

## � Open Source Contributions

Contributing to the open-source community and major Python ecosystem projects:

### Featured Contributions

1. **<a href="https://github.com/conda/conda-build/pull/4782"><img src="https://anaconda.org/static/img/anaconda_org_logo.svg" title="Conda" alt="Conda" width="40"/></a> Conda Build**
   - [PR #4782](https://github.com/conda/conda-build/pull/4782) - Conda package management improvements
   - Contributing to the Anaconda ecosystem

2. **<a href="https://github.com/python/cpython/pull/134804"><img src="https://s3.dualstack.us-east-2.amazonaws.com/pythondotorg-assets/media/files/python-logo-only.svg" title="Python" alt="Python" width="30"/></a> Python (CPython)**
   - [PR #134804](https://github.com/python/cpython/pull/134804) - Core Python language contributions
   - Contributing to Python's official implementation

3. **Applied Machine Learning Course**
   - [PR #1](https://github.com/moshesipper/Applied-Machine-Learning-Course/pull/1)
   - Educational content improvements for ML learning resources

4. **<a href="https://github.com/kdmdelhincr/events/pull/4"><img src="https://github.com/user-attachments/assets/44d15235-8728-4aee-9927-119c1b6cc563" title="kdmdelhincr" alt="kdmdelhincr" width="20"/></a> KDM Delhi Events**
   - [PR #4](https://github.com/kdmdelhincr/events/pull/4)
   - Contributing to local tech community initiatives

---

## �🛠️ Technical Stack

### Languages & Core Skills
- **Python** (90% proficiency)
- **Machine Learning** (80% proficiency)
- **Git & GitHub** (90% proficiency)
- **PostgreSQL & SQL** (80% proficiency)
- **Azure Cloud** (75% proficiency)
- **PyTorch** (80% proficiency)

### Frameworks & Libraries
- **Backend**: Flask, Django
- **Frontend**: VueJs, HTML5, CSS3, Vanilla JavaScript
- **ML/DL**: Scikit-learn, PyTorch, TensorFlow
- **DevOps**: Redis, Celery, Azure, AWS
- **APIs**: REST APIs, Webhooks

---

## 📂 Project Structure

```
Profile/
├── index.html                # Main HTML file (optimized with lazy loading)
├── sections/                 # Lazy-loaded HTML partials
│   ├── services.html        # Services section
│   ├── portfolio.html       # Portfolio projects
│   └── visitors.html        # Visitor map
├── css/                      # Styling files
│   ├── style.css            # Main styles
│   ├── lazy-skeleton.css    # Skeleton loader animations
│   ├── style-switcher.css   # Theme switcher
│   └── skins/               # Color themes (4 variants)
├── js/                       # JavaScript files
│   ├── script.js            # Main functionality
│   ├── lazy-loader.js       # IntersectionObserver lazy loading
│   └── style-switcher.js    # Theme switching logic
├── images/                   # Image assets
│   ├── Logo.svg
│   └── me.png
├── CV/                       # Resume/CV files
├── sitemap.xml              # Main sitemap (SEO)
├── sitemap_index.xml        # Sitemap index
└── robots.txt               # Crawler directives
```

---

## ⚡ Key Projects

### 1. **Parking Management System** 🅿️
Advanced multi-tenant parking management solution with real-time monitoring.

**Tech Stack:**
- Backend: Flask, Python
- Frontend: VueJs
- Cloud: Azure
- Background Tasks: Redis, Celery
- Integration: Webhooks

🔗 [Live Demo](https://parking.rishabhsingh.me) | [GitHub](https://github.com/rishabh11336)

---

### 2. **Bloglite - Compass** 📝
Simple blogging platform for creating and managing blog posts.

**Tech Stack:**
- Backend: Flask
- Frontend: HTML, CSS, JavaScript
- Database: PostgreSQL, Supabase

🔗 [Live Demo](https://compass.rishabhsingh.me) | [GitHub](https://github.com/rishabh11336/Blogsite)

---

### 3. **Coming Soon** 🚧
Deep Learning & AI projects in development.

**Planned Tech:**
- PyTorch, TensorFlow
- Computer Vision (CNNs)
- NLP Models
- Advanced ML Algorithms

---

## 🎨 Website Architecture

### **Lazy Loading Implementation**
The portfolio uses **Intersection Observer API** for progressive content loading:

```javascript
// Sections load 200px before entering viewport
IntersectionObserver({
  rootMargin: '200px',
  threshold: 0.01
});
```

**Loading Strategy:**
1. **Initial Load**: Home, About, Contact (inline)
2. **On Scroll**: Services, Portfolio, Visitors (lazy-loaded)
3. **Result**: 68% faster initial load, same UX

### **SEO Strategy**
- Content injected into DOM (Googlebot can index)
- All section IDs present immediately
- Schema.org Person markup for rich results
- Canonical URLs and meta tags

---

## 🚀 Quick Start

### **Option 1: Direct Access**
Simply open `index.html` in any modern browser - no build process required!

### **Option 2: Local Server**
```bash
# Clone the repository
git clone https://github.com/rishabh11336/Profile.git
cd Profile

# Start local server (Python)
python3 -m http.server 8000

# Or use Node.js
npx http-server -p 8000

# Open browser
open http://localhost:8000
```

### **Option 3: Deploy**
Deploy to any static hosting:
- GitHub Pages
- Netlify
- Vercel
- Azure Static Web Apps

---

## 📊 Performance Metrics

### **Before Lazy Loading:**
- Initial HTML Size: ~250KB
- DOM Nodes: ~800
- Images Loaded: 8
- Time to Interactive: ~2.5s

### **After Lazy Loading:**
- Initial HTML Size: ~80KB ✅ **(-68%)**
- DOM Nodes: ~300 ✅ **(-62%)**
- Images Loaded: 1 ✅ **(-87%)**
- Time to Interactive: ~0.8s ✅ **(-68%)**

### **Lighthouse Scores:**
- Performance: 90+ (was ~75)
- Accessibility: 95+
- Best Practices: 90+
- SEO: 100

---

## 📱 Responsive Design

### **Breakpoints:**
- **Desktop**: 1200px+
- **Laptop**: 992px - 1199px
- **Tablet**: 768px - 991px
- **Mobile**: < 768px

### **Features:**
- Adaptive navigation (hamburger menu on mobile)
- Touch-friendly interactions
- Optimized images for different screen sizes
- Readable typography across devices

---

## 🔍 SEO Features

### **Meta Tags:**
✅ Title, Description, Keywords  
✅ Author, Language, Robots  
✅ Canonical URL  
✅ Geographic targeting (India)

### **Social Media:**
✅ Open Graph (Facebook, LinkedIn)  
✅ Twitter Cards  
✅ Profile image optimization

### **Structured Data:**
```json
{
  "@type": "Person",
  "name": "Rishabh Singh",
  "jobTitle": "Data Scientist",
  "worksFor": "Chryselys",
  "alumniOf": "IIT Madras",
  "knowsAbout": ["Data Science", "ML", "Python"]
}
```

### **Sitemaps:**
- `sitemap.xml` - Main portfolio sitemap
- `sitemap_index.xml` - References all project sitemaps
- Automatic submission to search engines

---

## 🤝 Connect with Me

[![GitHub](https://img.shields.io/badge/GitHub-rishabh11336-black?logo=github)](https://github.com/rishabh11336)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-rishabh11336-blue?logo=linkedin)](https://www.linkedin.com/in/rishabh11336/)
[![Medium](https://img.shields.io/badge/Medium-@asusrishabh-green?logo=medium)](https://medium.com/@asusrishabh)
[![Email](https://img.shields.io/badge/Email-asusrishabh@outlook.com-red?logo=gmail)](mailto:asusrishabh@outlook.com)

---

## 🛠️ Development

### **Technologies Used:**
- **HTML5** - Semantic markup
- **CSS3** - Modern styling, animations
- **Vanilla JavaScript** - No frameworks, pure JS
- **IntersectionObserver API** - Lazy loading
- **Fetch API** - Dynamic content loading

### **Best Practices:**
- ✅ Progressive enhancement
- ✅ Mobile-first design
- ✅ Accessibility (WCAG 2.1)
- ✅ SEO optimization
- ✅ Performance budgets
- ✅ Clean, maintainable code

### **Browser Support:**
- Chrome 58+
- Firefox 55+
- Safari 12.1+
- Edge 79+
- 97% global browser coverage

---

## 📝 Recent Updates

### **v2.0.0 (January 2026)**
- ✨ Implemented scroll-based lazy loading (68% faster)
- 🔍 Added comprehensive SEO optimization
- 📊 Integrated visitor analytics map
- 🎨 Enhanced skeleton loading animations
- 📱 Improved mobile responsiveness

### **v1.0.0 (Initial Release)**
- 🎉 Portfolio website launch
- 🎨 Multiple color themes
- 🌓 Dark/Light mode toggle
- 📂 Project showcase

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🙏 Acknowledgments

- IIT Madras for the education
- Chryselys and iNeuron.ai for professional experience
- Open-source community for inspiration

---

## 📊 Stats

![Visitors](https://visitor-badge.laobi.icu/badge?page_id=rishabh11336.Profile)
![GitHub Stars](https://img.shields.io/github/stars/rishabh11336/Profile?style=social)
![GitHub Forks](https://img.shields.io/github/forks/rishabh11336/Profile?style=social)

---

**Made with ❤️ by Rishabh Singh**

*Building innovative data science solutions, one project at a time.*