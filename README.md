# Komoku - Multi-Channel Phishing Detection System

[![GitHub](https://img.shields.io/badge/GitHub-Repo-181717?style=flat&logo=github)](https://github.com/daffalde) ![NextJs](https://img.shields.io/badge/-NextJs-informational?style=flat) ![FastApi](https://img.shields.io/badge/-FastApi-informational?style=flat) ![HuggingFace](https://img.shields.io/badge/-HuggingFace-informational?style=flat) ![Docker](https://img.shields.io/badge/-Docker-informational?style=flat) ![Render](https://img.shields.io/badge/-Render-informational?style=flat)

> Komoku is an advanced, web-based cybersecurity platform designed to detect and mitigate phishing threats across multiple communication channels: **URLs, Emails, and SMS (Smishing)**. Developed as an undergraduate thesis project, the system utilizes a high-efficiency **multi-tier approach** combined with the **Random Forest** machine learning algorithm to deliver rapid and precise classification.

🌐 **Vercel Demo:** [https://komokuv2.vercel.app/](https://komokuv2.vercel.app/)

🌐 **Render Demo:** [https://komoku.onrender.com/](https://komoku.onrender.com/)

## 🛠️ Tech Stack

- NextJs
- FastApi
- HuggingFace
- Docker
- Render

## 🌟 Key Features

- **Multi-Channel Protection**:
  - **URL Phishing**: Detects malicious links using structural analysis and predictive modeling.
  - **Email Phishing**: Analyzes email content, headers, and sender patterns to flag suspicious communication or spoofing attempts.
  - **SMS Phishing (Smishing)**: Evaluates text messages for urgency cues, deceptive wording, and malicious payloads.
- **Multi-Tier Analysis Workflow**: Optimizes computational resources by filtering data through sequential, specialized validation layers before full machine learning inference.
- **Whitelist & Rule-Based Filtration**: Instantly verifies trusted entities, minimizing false positives and drastically speeding up processing times for reputable sources.
- **HTTP HEAD Status Verification**: Safely probes destination servers of embedded URLs to check their status without downloading hazardous web assets.
- **Advanced Machine Learning Engine**: Features optimized **Random Forest** classifiers tailored specifically for lexical URL features and text-based NLP classification.
- **QR Code Scanner**: Extracts embedded hyperlinks from uploaded or scanned QR codes, subjecting them directly to the multi-tier inspection pipeline.

## 📋 Prerequisites

- Node.js >= 25
- npm >= 10

## 🚀 Installation

1. Clone this repository:

```bash
https://github.com/daffalde/komokuv2.git
cd komokuv2
```

2. Install the dependencies:

```bash
npm install
```

## ▶️ Running the Project

```bash
npm run dev
```

## 👤 Author

**Daffa Alde**

- GitHub: [https://github.com/daffalde](https://github.com/daffalde)

---
