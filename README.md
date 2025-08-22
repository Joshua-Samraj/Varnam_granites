# Varnam Granites - Premium Stone Solutions

A modern, responsive website for Varnam Granites showcasing premium marble, granite, and natural stone products and services.

## 🚀 Features

- **Responsive Design**: Mobile-first approach with perfect mobile, tablet, and desktop layouts
- **Dark/Light Theme**: Persistent theme switching with localStorage
- **Product Catalog**: Comprehensive product showcase with filtering and search
- **Service Pages**: Detailed service information with expandable mobile cards
- **Modern UI**: Built with React, TypeScript, and Tailwind CSS
- **Fast Performance**: Optimized with Vite for lightning-fast loading

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **Build Tool**: Vite
- **Deployment**: Vercel

## 📦 Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd varnam-granites
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## 🚀 Deploy to Vercel

### Option 1: Deploy from Git Repository

1. Push your code to GitHub/GitLab/Bitbucket
2. Go to [Vercel Dashboard](https://vercel.com/dashboard)
3. Click "New Project"
4. Import your repository
5. Vercel will automatically detect it's a Vite project and configure everything
6. Click "Deploy"

### Option 2: Deploy using Vercel CLI

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy:
```bash
vercel
```

4. For production deployment:
```bash
vercel --prod
```

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
├── contexts/           # React contexts (Theme)
├── pages/              # Page components
├── data/               # Data files (Products only)
└── main.tsx           # App entry point
```

## 🎨 Customization

### Adding New Products
Edit `src/pages/productsData.ts` to add new products to the catalog.

### Updating Services
Edit the services array in `src/components/Services.tsx` or `src/pages/Services.tsx`.

### Changing Company Information
Update company details directly in the Header component and other relevant files.

## 🌐 Environment Variables

No environment variables are required for basic deployment. The site works out of the box.

## 📱 Mobile Optimization

- Responsive grid layouts (2 columns on mobile, 4 on desktop)
- Touch-friendly interactions
- Expandable service cards on mobile
- Optimized typography and spacing
- Mobile-first navigation

## 🎯 Performance

- Lazy loading for images
- Optimized bundle size with Vite
- Efficient React rendering
- Tailwind CSS purging for minimal CSS

## 📄 License

This project is private and proprietary to Varnam Granites.

## 🤝 Support

For support or questions, contact: info@varnamgranites.com