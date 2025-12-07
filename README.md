# 🎨 Personal Portfolio Website

A modern, responsive personal portfolio website built with **React**, **Tailwind CSS**, and **Framer Motion**. Designed for a 3rd-year IT student at SLIIT seeking Software Engineering internship opportunities.

## ✨ Features

- 🎯 **Modern Design**: Clean, minimal, and lovable UI with soft pastel colors
- 📱 **Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- ⚡ **Smooth Animations**: Beautiful scroll animations using Framer Motion
- 🧩 **Component-Based**: Reusable React components for maintainability
- 🎨 **Tailwind CSS**: Utility-first CSS with custom theme configuration
- 📄 **Download CV**: One-click CV download functionality
- 📬 **Contact Form**: Interactive contact form with validation

## 🚀 Tech Stack

- **React** 18.2.0
- **Vite** 5.0.8 (Fast build tool)
- **Tailwind CSS** 3.4.0 (Styling)
- **Framer Motion** 10.16.16 (Animations)
- **React Icons** 4.12.0 (Icon library)

## 📁 Project Structure

```
Portfolio/
├── public/
│   └── cv.pdf              # Your CV file (add this)
├── src/
│   ├── components/
│   │   ├── shared/         # Reusable components
│   │   │   ├── SectionTitle.jsx
│   │   │   ├── SkillCard.jsx
│   │   │   └── ProjectCard.jsx
│   │   ├── Navbar.jsx      # Navigation bar
│   │   ├── Hero.jsx        # Landing section
│   │   ├── About.jsx       # About me section
│   │   ├── Skills.jsx      # Technical skills
│   │   ├── Projects.jsx    # Portfolio projects
│   │   ├── Education.jsx   # Education & certifications
│   │   ├── Contact.jsx     # Contact form
│   │   └── Footer.jsx      # Footer section
│   ├── App.jsx             # Main app component
│   ├── main.jsx            # React entry point
│   └── index.css           # Global styles
├── index.html              # HTML entry point
├── package.json            # Dependencies
├── vite.config.js          # Vite configuration
├── tailwind.config.js      # Tailwind configuration
└── postcss.config.js       # PostCSS configuration
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Steps

1. **Clone/Download the project**
   ```bash
   cd Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   - Navigate to `http://localhost:5173` (or the URL shown in terminal)

5. **Build for production**
   ```bash
   npm run build
   ```

6. **Preview production build**
   ```bash
   npm run preview
   ```

## ✏️ Customization Guide

### 1. Personal Information

Update the following files with your information:

#### `src/components/Hero.jsx`
- Update name, tagline, and description
- Update social media links (GitHub, LinkedIn, Twitter, Email)

#### `src/components/About.jsx`
- Edit personal description and story
- Update profile image (add your image to `/public` folder)
- Update stats (years of experience, projects completed)

#### `src/components/Skills.jsx`
- Add/remove technologies
- Update skill categories and proficiency levels

#### `src/components/Projects.jsx`
- Replace sample projects with your actual projects
- Add GitHub and live demo links
- Update project descriptions and technologies

#### `src/components/Education.jsx`
- Update university details and GPA
- Modify coursework and certifications
- Add relevant academic achievements

#### `src/components/Contact.jsx`
- Update email, phone number, and location
- Update social media links
- (Optional) Integrate form backend (EmailJS, Formspree, etc.)

#### `src/components/Footer.jsx`
- Update social links and personal information

### 2. Add Your CV

1. Place your CV PDF in the `public/` folder as `cv.pdf`
2. Or update the path in `Navbar.jsx`:
   ```jsx
   <a href="/your-cv-name.pdf" download>
     Download CV
   </a>
   ```

### 3. Color Theme

Edit `tailwind.config.js` to customize colors:

```js
colors: {
  primary: {
    50: '#eff6ff',   // Lightest blue
    600: '#2563eb',  // Main blue
    // ... customize other shades
  },
  accent: {
    50: '#fef2f2',   // Lightest pink
    500: '#ec4899',  // Main pink
    // ... customize other shades
  },
}
```

### 4. Add Profile Image

1. Add your image to `public/` folder (e.g., `profile.jpg`)
2. Update in `About.jsx`:
   ```jsx
   <img src="/profile.jpg" alt="Profile" />
   ```

### 5. Contact Form Integration

The contact form currently simulates submission. To make it functional:

**Option 1: EmailJS**
```bash
npm install @emailjs/browser
```

**Option 2: Formspree**
```jsx
<form action="https://formspree.io/f/your-form-id" method="POST">
```

**Option 3: Custom Backend**
- Set up your own API endpoint
- Update the `handleSubmit` function in `Contact.jsx`

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint (if configured)

## 🎨 Design Features

- **Soft Pastel Gradient**: Blue → Purple → Pink color scheme
- **Glassmorphism**: Frosted glass effects on cards
- **Smooth Animations**: Fade-in, slide-up, hover effects
- **Responsive Grid**: Adaptive layouts for all screen sizes
- **Modern Typography**: Inter font family from Google Fonts

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🚀 Deployment

### Deploy to Netlify

1. Build the project:
   ```bash
   npm run build
   ```

2. Drag and drop the `dist` folder to Netlify

### Deploy to Vercel

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

### Deploy to GitHub Pages

1. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Add to `package.json`:
   ```json
   "homepage": "https://yourusername.github.io/portfolio",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

3. Deploy:
   ```bash
   npm run deploy
   ```

## 🐛 Troubleshooting

**Issue**: Blank page after build
- Check console for errors
- Ensure all imports are correct
- Verify base path in `vite.config.js`

**Issue**: Images not loading
- Place images in `public/` folder
- Use absolute paths: `/image.jpg` not `./image.jpg`

**Issue**: Animations not working
- Ensure Framer Motion is installed
- Check browser compatibility

## 📄 License

Feel free to use this template for your own portfolio. No attribution required!

## 🤝 Contributing

Found a bug or want to add a feature? Contributions are welcome!

## 📧 Contact

For questions or feedback, reach out via the contact form on the website.

---

**Built with ❤️ by a SLIIT Student**

*Last Updated: 2024*
