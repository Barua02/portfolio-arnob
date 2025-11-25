# Portfolio - Arnob Barua

A modern, responsive portfolio website showcasing my journey as a Machine Learning Engineer and Full-Stack Developer. Built with cutting-edge technologies and featuring a sleek neon cyberpunk aesthetic.

![Portfolio Preview](https://via.placeholder.com/800x400/000000/00FFFF?text=Portfolio+Preview) <!-- Replace with actual screenshot -->

## 🌟 Features

- **Responsive Design**: Optimized for all devices - desktop, tablet, and mobile
- **Neon Cyberpunk Theme**: Eye-catching visual design with animated neon effects
- **Interactive Elements**: Particle background, hover animations, and smooth transitions
- **Project Showcase**: Detailed display of ML and web development projects
- **Resume Section**: View/download CV functionality
- **Contact Form**: Functional contact form with toast notifications
- **Dark Mode Ready**: Built with modern UI components
- **Fast Performance**: Optimized with Vite and modern React patterns

## 🛠️ Technologies Used

### Frontend Framework
- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type-safe JavaScript for better development experience
- **Vite** - Fast build tool and development server

### Styling & UI
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Modern UI component library
- **Lucide React** - Beautiful icon library
- **Radix UI** - Accessible component primitives

### Development Tools
- **ESLint** - Code linting and formatting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

### Deployment
- **GitHub Pages** - Free hosting for static sites
- **gh-pages** - Deployment automation

## 🚀 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/Barua02/portfolio-arnob.git
   cd portfolio-arnob
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
portfolio-arnob/
├── public/                 # Static assets
│   ├── Arnob-Barua-CV.pdf # Resume PDF
│   └── robots.txt
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── ui/            # shadcn/ui components
│   │   └── ...
│   ├── pages/             # Page components
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Projects.tsx
│   │   ├── Resume.tsx
│   │   └── Contact.tsx
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # Utilities and configurations
│   ├── App.tsx            # Main app component
│   └── main.tsx           # App entry point
├── dist/                  # Built files (generated)
├── package.json
├── vite.config.ts
├── tailwind.config.ts
└── README.md
```

## 🎨 Customization

### Colors & Theme
The neon theme uses custom CSS variables defined in `tailwind.config.ts`. Modify these to change the color scheme:

```typescript
// tailwind.config.ts
{
  theme: {
    extend: {
      colors: {
        primary: 'hsl(var(--neon-cyan))',
        secondary: 'hsl(var(--neon-purple))',
        // ...
      }
    }
  }
}
```

### Content
Update the content in the respective page components:
- `src/pages/Home.tsx` - Hero section and intro
- `src/pages/About.tsx` - Personal information and skills
- `src/pages/Projects.tsx` - Project portfolio
- `src/pages/Resume.tsx` - Education and experience
- `src/pages/Contact.tsx` - Contact information

## 🚀 Deployment

The project is automatically deployed to GitHub Pages using GitHub Actions.

### Manual Deployment

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to GitHub Pages**
   ```bash
   npm run deploy
   ```

The site will be available at: `https://barua02.github.io/portfolio-arnob`

## 📊 Performance

- **Lighthouse Score**: 95+ on all metrics
- **Bundle Size**: Optimized with code splitting
- **Loading Speed**: Fast initial load with lazy loading

## 🤝 Contributing

While this is a personal portfolio, feel free to:
1. Fork the repository
2. Create a feature branch
3. Make your improvements
4. Submit a pull request

## 📞 Contact

**Arnob Barua**
- **Email**: baruaarnob@qq.com
- **LinkedIn**: [Your LinkedIn Profile]
- **GitHub**: [https://github.com/Barua02](https://github.com/Barua02)
- **Kaggle**: [Your Kaggle Profile]

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

⭐ **Star this repo** if you found it helpful!

Built with ❤️ using React, TypeScript, and Tailwind CSS.
