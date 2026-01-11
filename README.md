# WinRegi Landing Page 🚀

A stunning, high-converting landing page for **WinRegi** - an AI-powered Windows administration tool. Built with modern web technologies and featuring a cyberpunk-inspired design aesthetic.

![WinRegi](https://img.shields.io/badge/Next.js-14+-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=for-the-badge&logo=tailwind-css)

## 🎨 Design Features

- **Cyberpunk Aesthetic**: Deep slate backgrounds (#0f172a) with vibrant emerald green (#10b981) and electric cyan accents
- **Glassmorphism Effects**: Modern glass-like cards with backdrop blur
- **Smooth Animations**: Framer Motion powered animations throughout
- **Responsive Design**: Fully responsive from mobile to desktop
- **Custom Scrollbar**: Themed scrollbar matching the cyberpunk aesthetic
- **Interactive Elements**: Hover effects and smooth transitions on all components

## 🛠️ Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Inter (sans-serif) + JetBrains Mono (monospace)

## 📦 Installation & Setup

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🌐 Development Server

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 📄 Page Structure

The landing page includes these sections:

1. **Navigation Bar**: Logo and action buttons
2. **Hero Section**: Eye-catching headline with CTAs and interactive terminal demo
3. **Problem vs Solution**: Side-by-side comparison highlighting pain points and solutions
4. **Features Grid**: Four key features with animations and icons
5. **How It Works**: Three-step process visualization
6. **Video Section**: Demo video placeholder (ready for your content)
7. **Tech Stack**: Technologies showcased
8. **CTA Section**: Final conversion-focused call-to-action
9. **Footer**: Social links and copyright

## 🎯 Key Features Highlighted

- ✅ **Hybrid AI Engine**: Cloud (Gemini) + Local (Ollama) options
- ✅ **Safety Tiers**: Color-coded command risk analysis
- ✅ **Admin Power**: Seamless privilege escalation
- ✅ **Curated Hacks**: Library of verified Windows tweaks

## 🎨 Customization Guide

### Update Links

Edit `app/page.tsx` to update:
```typescript
// GitHub repository
href="https://github.com/yourusername/winregi"

// Download link
href="https://yoursite.com/download"
```

### Modify Colors

Edit `tailwind.config.ts`:
```typescript
colors: {
  primary: {
    DEFAULT: '#10b981',  // Emerald green
    dark: '#059669',
  },
  accent: {
    DEFAULT: '#06b6d4',  // Cyan
    dark: '#0891b2',
  },
}
```

### Add Your Demo Video

Replace the placeholder in the "See It In Action" section:
```tsx
// Replace with YouTube embed or video player
<iframe 
  src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
  className="w-full aspect-video rounded-xl"
/>
```

## 📱 Components

Reusable components in `/components`:

- **Button.tsx**: Multi-variant button with animations
- **FeatureCard.tsx**: Glassmorphism feature cards
- **Section.tsx**: Animated section wrapper

## 🚀 Deployment

### Deploy to Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

```bash
npm install -g vercel
vercel
```

### Other Platforms

- **Netlify**: Connect your Git repository
- **AWS Amplify**: Use the Amplify Console  
- **Cloudflare Pages**: Git integration available

## ⚡ Performance

- **Optimized Images**: Next.js Image component ready
- **Code Splitting**: Automatic with Next.js App Router
- **Fast Refresh**: Instant feedback during development
- **Turbopack**: Ultra-fast bundler enabled

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)

## 🛠️ Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 📝 Environment Variables

Create a `.env.local` file for custom configurations:

```env
NEXT_PUBLIC_GITHUB_URL=https://github.com/yourusername/winregi
NEXT_PUBLIC_DOWNLOAD_URL=https://yoursite.com/download
```

## 🎓 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)

## 📄 License

This landing page is created for the WinRegi project.

---

**Built with ❤️ for WinRegi** | Powered by Next.js, TypeScript & Tailwind CSS


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
