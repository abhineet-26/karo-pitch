# Karo Pitch – Demo Website

This repository contains the source code for the **Karo Pitch** demo landing page, a modern, investor-focused web application designed for **KaroStartup**. The platform aims to bridge the gap between early-stage founders in Bharat (Tier-2 and Tier-3 cities) and leading investors.

## 🚀 Vision
Karo Pitch is an initiative by KaroStartup to provide a structured discovery and funding platform. It empowers founders in categories like D2C, MSME, SaaS, and Manufacturing by giving them direct access to capital, mentorship, and visibility.

---

## 🛠️ Built With
* **React 19**: Frontend library for building the UI.
* **Vite**: Next-generation frontend tooling for fast development.
* **Tailwind CSS 4**: For high-performance, modern styling.
* **Motion (Framer Motion)**: For smooth scroll animations and transitions.
* **Lucide React**: For clean, professional iconography.
* **Google AI Studio**: Used as the primary environment for rapid prototyping and generation.

---

## 📁 Project Structure
* `App.tsx`: The main landing page containing all sections (Hero, About, How It Works, Investors, etc.).
* `index.css`: Custom theme configurations, including Google Fonts (**Space Grotesk** for headings, **Inter** for body) and marquee animations.
* `vite.config.ts`: Configuration for path aliasing and environment variables.
* `metadata.json`: App metadata for the AI Studio environment.

---

## ⚡ Run Locally

**Prerequisites:** Node.js installed on your machine.

1.  **Clone the repository** (or download the files).
2.  **Install dependencies**:
    ```bash
    npm install
    ```
3.  **Set up Environment Variables**:
    Create a `.env.local` file and add your Gemini API key:
    ```text
    GEMINI_API_KEY=your_key_here
    ```
4.  **Launch the development server**:
    ```bash
    npm run dev
    ```
5.  Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🎨 Design Rationale
* **Color Palette**: A "Dark Mode" aesthetic using `zinc-950` provides a premium, tech-forward feel. We used **Electric Lime (`#ccff00`)** as the primary accent color to represent energy, growth, and the "startup vibe," while ensuring high contrast and readability.
* **Typography**: **Space Grotesk** was chosen for headings to give a modern, geometric look typical of high-growth tech companies. **Inter** provides excellent legibility for long-form content.
* **Layout**: A single-page, mobile-responsive layout ensures that busy investors and founders can quickly scan the value proposition. 
* **Interactive Elements**: 
    * **Marquee**: An infinite-scroll investor section to simulate a high-activity ecosystem.
    * **Scroll Animations**: Motion components trigger as the user scrolls to keep the experience engaging.
    * **Glassmorphism**: Backdrop blurs on the navbar and cards add depth to the minimal UI.

---

## 🤖 Platform Note
This demo was built and refined using **Google AI Studio**. By leveraging AI-assisted design and development, we were able to move from concept to a fully responsive, animated prototype in a fraction of the traditional development time.

**Organization:** KaroStartup  
**Project:** Karo Pitch – Intern Assignment
