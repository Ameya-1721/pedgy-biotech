# Pedgy Biotech Website & GitHub-Driven CMS

Official corporate website for Pedgy Biotech Private Limited, a Hyderabad-based biotech company focused on innovative probiotic solutions for kidney health and nephrology care.

🌐 Live Website: https://pedgy.in

---

## 🚀 Project Summary

This repository contains:

- A production-grade React (Vite) corporate website
- A structured JSON-based content architecture
- A GitHub Issue Form–driven content management system
- An automated CI/CD pipeline for content updates
- Vercel-based deployment with custom domain integration

This project replaces traditional CMS platforms with a Git-native, automation-first workflow.

---

## 🏗 Architecture Overview

Content Update Flow:

    GitHub Issue Form  
            ↓  
    Issue labeled "approved"  
            ↓  
    GitHub Action triggered  
            ↓  
    Python script parses submission  
            ↓  
    Updates structured JSON files  
            ↓  
    Creates feature branch  
            ↓  
    Opens Pull Request  
            ↓  
    Merge to dev branch  
            ↓  
    Vercel auto-deploys to production  

Non-technical stakeholders can update website content without accessing the codebase directly.

---

## 🧰 Tech Stack

### Frontend
- React (Vite)
- React Router
- react-helmet-async (Dynamic SEO)
- react-markdown
- Modular JSON-driven content rendering

### Automation
- GitHub Issue Forms (YAML schema)
- GitHub Actions
- Python (content parser + validation logic)
- Automated branch creation & PR generation

### Deployment
- Vercel (preview + production environments)
- Custom domain (pedgy.in)
- External DNS configuration via domain provider
- SSL & production routing

---

## 📌 Key Features

- Multi-page SPA architecture
- Dynamic per-route SEO metadata
- Open Graph + Twitter Cards
- Structured data (Schema.org Organization markup)
- Canonical URLs
- JSON-based content management
- Automated product add/update (slug-based upsert logic)
- Event-driven CI/CD pipeline
- Version-controlled content updates
- Production-grade deployment setup

---

## 🧠 SEO Implementation

- Unique title & meta description per page
- Canonical URL handling
- Open Graph metadata for social previews
- Twitter Card integration
- Structured data (JSON-LD)
- Google Search Console integration

---

## 📂 Project Structure

    src/
    ├── components/
    ├── pages/
    ├── content/ # Structured JSON content
    ├── App.jsx
    └── main.jsx

    .github/
    ├── workflows/
    └── scripts/ # Content automation scripts

---

## ⚙️ Running Locally

    Clone the repository:
    ```
    git clone <repo-url>
    cd <repo-folder>
    ```

    Install dependencies:
    ```
    npm install
    ```

    Start development server:
    ```
    npm run dev
    ```

---

## 🚀 Deployment Workflow

- Feature branches → Vercel preview deployments
- dev branch → Production deployment
- Domain mapped to pedgy.in
- DNS configured via external provider
- SSL auto-managed by Vercel

Fully automated CI/CD pipeline from GitHub to production.

---

## 🎯 Engineering Highlights

- Designed a GitHub-native CMS instead of using WordPress or headless CMS
- Implemented structured content validation in automation layer
- Built event-driven automation using GitHub webhooks
- Integrated frontend, DevOps, and DNS configuration into a unified workflow
- Production-ready architecture with zero backend server

---

## 📬 Contact

If you'd like to discuss this project or collaborate:

Email: pedgaonkar1721@gmail.com
LinkedIn: https://www.linkedin.com/in/ameya-pedgaonkar/