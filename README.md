# Mohamed Naizan - Portfolio Website

A modern, responsive portfolio website showcasing my skills, projects, and experience in AI, Machine Learning, and Web Development.

## 🚀 Features

- **Responsive Design**: Fully responsive across all devices (mobile, tablet, desktop)
- **Dark Mode**: Toggle between light and dark themes with persistent preference
- **Smooth Animations**: Beautiful transitions and hover effects
- **Modern UI**: Built with Tailwind CSS for a clean, professional look
- **Interactive Sections**:
  - Hero section with social links
  - About section with education details
  - Experience timeline with detailed internship information
  - Projects showcase with GitHub links
  - Skills categorized by expertise
  - Contact form with social media links
  - Professional footer

## 🛠️ Technologies Used

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
- **CSS Animations** - Smooth transitions

## 📦 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/naizannaiz/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:5173`

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Navbar.tsx      # Navigation with dark mode toggle
│   │   ├── Hero.tsx        # Landing section
│   │   ├── About.tsx       # About and education
│   │   ├── Experience.tsx  # Internship timeline
│   │   ├── Projects.tsx    # Project showcase
│   │   ├── Skills.tsx      # Skills grid
│   │   ├── Contact.tsx     # Contact form
│   │   └── Footer.tsx      # Footer section
│   ├── App.tsx             # Main app component
│   ├── main.tsx            # Entry point
│   └── index.css           # Global styles
├── public/                 # Static assets
├── index.html              # HTML template
├── tailwind.config.js      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies
```

## 🎨 Customization

To customize this portfolio for your own use:

1. **Update personal information** in each component:
   - `Hero.tsx` - Name, title, tagline
   - `About.tsx` - Background, education
   - `Experience.tsx` - Work history
   - `Projects.tsx` - Your projects
   - `Skills.tsx` - Your skills
   - `Contact.tsx` - Contact information

2. **Change color scheme** in `tailwind.config.js`:
   ```js
   theme: {
     extend: {
       colors: {
         primary: { /* your colors */ }
       }
     }
   }
   ```

3. **Update social links** in:
   - `Hero.tsx`
   - `Contact.tsx`
   - `Footer.tsx`

## 🚀 Deployment

This portfolio can be easily deployed to:

- **Vercel** (Recommended)
  ```bash
  npm install -g vercel
  vercel
  ```

- **Netlify**
  - Connect your GitHub repository
  - Build command: `npm run build`
  - Publish directory: `dist`

- **GitHub Pages**
  - Install gh-pages: `npm install -g gh-pages`
  - Add to package.json: `"homepage": "https://yourusername.github.io/portfolio"`
  - Deploy: `npm run build && gh-pages -d dist`

## 📱 Contact

- **Email**: naizan9846@gmail.com
- **LinkedIn**: [Mohamed Naizan](https://www.linkedin.com/in/mohamednaizan/)
- **GitHub**: [@naizannaiz](https://github.com/naizannaiz)
- **Instagram**: [@naizz.af](https://www.instagram.com/naizz.af/)

## 📄 License

This project is open source and available for personal use. Feel free to fork and customize it for your own portfolio!

## 🙏 Acknowledgments

- Built with love using React and Tailwind CSS
- Icons by Lucide React
- Inspired by modern portfolio designs

---

**Made with ❤️ by Mohamed Naizan**
