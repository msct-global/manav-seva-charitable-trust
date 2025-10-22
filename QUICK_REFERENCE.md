# Quick Reference Guide

## 🚀 Common Commands

```bash
# Development
npm run dev              # Start dev server (http://localhost:3000)
npm run build           # Build for production
npm start               # Start production server
npm run lint            # Run ESLint
npm run type-check      # Check TypeScript types

# Testing
npm test                # Run tests
npm run test:watch      # Watch mode
npm run test:coverage   # Coverage report
```

## 📁 File Locations

| What | Where |
|------|-------|
| Pages | `src/app/*/page.tsx` |
| Components | `src/components/` |
| Styles | `src/app/globals.css` |
| Config | Root directory |
| Assets | `public/` |
| Environment | `.env.local` |

## 🔗 Routes

| Route | File | Purpose |
|-------|------|---------|
| `/` | `src/app/page.tsx` | Home page |
| `/about` | `src/app/about/page.tsx` | About page |
| `/impact` | `src/app/impact/page.tsx` | Programs |
| `/revolution` | `src/app/revolution/page.tsx` | ₹1 Campaign |
| `/donate` | `src/app/donate/page.tsx` | Donations |
| `/contact` | `src/app/contact/page.tsx` | Contact |
| `/blog` | `src/app/blog/page.tsx` | Blog |
| `/404` | `src/app/not-found.tsx` | Not found |

## 🎨 Colors (Tailwind)

```css
/* Primary Colors */
--caramel: #C17A4A
--golden-cream: #E8D4B8
--sage-green: #8B9D83
--mauve-purple: #9B7BA8
--dusty-rose: #C9A8A0

/* Neutral Colors */
--charcoal-gray: #2C2C2C
--warm-brown: #5C4033
--vanilla-cream: #F5F1E8
--peach-blush: #F4D4C8
```

## 📦 Key Dependencies

```json
{
  "next": "^14.0.0",
  "react": "^18.0.0",
  "tailwindcss": "^3.0.0",
  "@radix-ui/*": "latest",
  "react-hook-form": "^7.0.0",
  "@tanstack/react-query": "^5.0.0",
  "lucide-react": "latest",
  "sonner": "latest"
}
```

## 🔧 Component Template

```tsx
'use client'; // Add if using hooks

import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function MyComponent() {
  return (
    <div className="space-y-4">
      <h1 className="text-4xl font-bold">Title</h1>
      <p className="text-lg text-gray-600">Description</p>
      <Link href="/donate">
        <Button>Action</Button>
      </Link>
    </div>
  );
}
```

## 📄 Page Template

```tsx
export const metadata = {
  title: 'Page Title | MSCT',
  description: 'Page description for SEO',
};

export default function Page() {
  return (
    <div>
      <h1>Page Content</h1>
    </div>
  );
}
```

## 🎯 Common Patterns

### Navigation Link
```tsx
import Link from 'next/link';

<Link href="/donate">
  <Button>Donate</Button>
</Link>
```

### Active Link Detection
```tsx
'use client';

import { usePathname } from 'next/navigation';

export function Navigation() {
  const pathname = usePathname();
  const isActive = pathname === '/about';
  
  return <div className={isActive ? 'active' : ''}>...</div>;
}
```

### Form with State
```tsx
'use client';

import { useState } from 'react';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form>
      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
    </form>
  );
}
```

### API Route
```tsx
// src/app/api/donations/route.ts

export async function POST(request: Request) {
  const data = await request.json();
  
  // Process data
  
  return Response.json({ success: true });
}
```

## 🎨 Tailwind Classes

```tsx
// Spacing
className="p-4 m-2 space-y-4"

// Colors
className="text-caramel bg-sage-green/10"

// Sizing
className="w-full h-64"

// Responsive
className="md:grid-cols-2 lg:grid-cols-3"

// Hover/Active
className="hover:shadow-lg active:scale-95"

// Animations
className="animate-fade-in transition-all duration-300"
```

## 🔍 Debugging

```bash
# Check for errors
npm run lint

# Type checking
npm run type-check

# Build locally
npm run build

# Check bundle size
npm run build -- --analyze
```

## 📱 Responsive Breakpoints

```css
sm: 640px
md: 768px
lg: 1024px
xl: 1280px
2xl: 1536px
```

## 🌐 Environment Variables

```bash
# Copy template
cp .env.example .env.local

# Add your values
NEXT_PUBLIC_APP_URL=http://localhost:3000
DATABASE_URL=your_database_url
```

## 🚀 Deployment Checklist

- [ ] All pages tested
- [ ] No console errors
- [ ] Images optimized
- [ ] Links working
- [ ] Forms functional
- [ ] Mobile responsive
- [ ] SEO metadata added
- [ ] Environment variables set
- [ ] Build successful

## 📚 Documentation

- **README.md** - Project overview
- **MIGRATION_GUIDE.md** - Technical details
- **DEPLOYMENT.md** - Deployment guide
- **DEVELOPMENT_ROADMAP.md** - Future plans
- **MIGRATION_COMPLETE.md** - Completion summary

## 🆘 Troubleshooting

| Issue | Solution |
|-------|----------|
| Port 3000 in use | `lsof -i :3000` then kill process |
| Build fails | `rm -rf .next && npm run build` |
| Styles not applying | Check Tailwind config content paths |
| Images not loading | Verify images in `public/` folder |
| TypeScript errors | Run `npm run type-check` |

## 📞 Quick Links

- **GitHub**: [Repository URL]
- **Vercel**: [Deployment URL]
- **Email**: manavsevacharitabletrust773@gmail.com
- **Phone**: +91 79768 92938

## 💡 Tips

1. Use `'use client'` only when needed
2. Prefer server components for data fetching
3. Use path aliases: `@/components/Button`
4. Keep components small and focused
5. Use TypeScript for type safety
6. Test responsive design on mobile
7. Optimize images before uploading
8. Use semantic HTML
9. Follow naming conventions
10. Comment complex logic

---

**Last Updated**: October 2025
**Version**: 1.0

