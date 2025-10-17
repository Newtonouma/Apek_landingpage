# Apek School Management System - Landing Page

A modern, responsive landing page for the Apek School Management System by APEKTECH INC.

## 🎨 Features

- **Fully Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI/UX** - Clean, professional design with smooth animations
- **Modular Architecture** - Each section is a separate component with its own styles
- **SVG Icons** - Professional icon system using custom SVG components (no emojis)
- **Optimized Performance** - Built with React and Vite for fast loading times

## 📁 Project Structure

```
landing_page/
├── src/
│   ├── components/
│   │   ├── Icons/
│   │   │   └── Icons.jsx          # Reusable SVG icon components
│   │   └── sections/
│   │       ├── Hero/              # Hero section with CTA
│   │       ├── Features/          # Feature showcase
│   │       ├── Benefits/          # Benefits overview
│   │       ├── HowItWorks/        # 4-step process
│   │       ├── Testimonials/      # Customer testimonials carousel
│   │       ├── Pricing/           # Pricing plans
│   │       ├── FAQ/               # Frequently asked questions
│   │       ├── CTA/               # Call-to-action section
│   │       └── Footer/            # Footer with links and contact
│   ├── App.jsx                    # Main app component
│   ├── App.css                    # Global app styles
│   ├── index.css                  # Global base styles
│   └── main.jsx                   # App entry point
└── package.json
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```powershell
cd landing_page
```

2. Install dependencies:
```powershell
npm install
```

3. Start the development server:
```powershell
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

### Build for Production

```powershell
npm run build
```

The optimized production build will be in the `dist/` directory.

## 🎯 Landing Page Sections

1. **Hero Section** - Value proposition with CTAs and key statistics
2. **Features Section** - 8 key features with icons
3. **Benefits Section** - 6 measurable benefits
4. **How It Works** - 4-step process visualization
5. **Testimonials** - Interactive carousel
6. **Pricing Section** - 3 pricing tiers
7. **FAQ Section** - Collapsible Q&A
8. **CTA Section** - Final conversion section
9. **Footer** - Links, contact, and social media

## 🎨 Design System

### Colors
- **Primary**: `#667eea` → `#764ba2` (Gradient)
- **Accent**: `#fbbf24` (Gold)
- **Text**: `#1f2937` (Dark gray)
- **Background**: `#f9fafb` (Light gray)

### Icons
All icons are SVG-based and defined in `src/components/Icons/Icons.jsx`

## 📱 Responsive Design

- **Desktop**: > 1024px
- **Tablet**: 768px - 1024px  
- **Mobile**: < 768px

## 📄 License

© 2025 APEKTECH INC. All rights reserved.
