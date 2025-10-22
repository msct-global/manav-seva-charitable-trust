# Manav Seva Charitable Trust - Next.js Migration

## 🎯 Project Overview

This is a comprehensive migration of the Manav Seva Charitable Trust website from **React + Vite** to **Next.js 14+** with the App Router. The migration prepares the project for advanced features like real-time donation tracking, user authentication, and backend integrations.

## 📋 Migration Summary

### What Changed

| Aspect | Before (Vite) | After (Next.js) |
|--------|---------------|-----------------|
| **Framework** | React 18 + Vite | Next.js 14+ |
| **Routing** | React Router (BrowserRouter) | Next.js App Router (file-based) |
| **Build Tool** | Vite | Next.js built-in |
| **Navigation** | `<Link to="">` | `<Link href="">` |
| **Hooks** | `useLocation()`, `useNavigate()` | `usePathname()`, `useRouter()` |
| **Styling** | Tailwind CSS | Tailwind CSS (unchanged) |
| **Components** | Shadcn UI | Shadcn UI (compatible) |
| **Metadata** | React Helmet | Next.js Metadata API |

### Project Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout with providers
│   ├── globals.css             # Global styles & design system
│   ├── page.tsx                # Home page (/)
│   ├── about/
│   │   └── page.tsx            # About page (/about)
│   ├── impact/
│   │   └── page.tsx            # Impact programs page (/impact)
│   ├── revolution/
│   │   └── page.tsx            # ₹1 Revolution page (/revolution)
│   ├── donate/
│   │   └── page.tsx            # Donation page (/donate)
│   ├── contact/
│   │   └── page.tsx            # Contact page (/contact)
│   ├── blog/
│   │   └── page.tsx            # Blog page (/blog)
│   └── not-found.tsx           # 404 page
├── components/
│   ├── Navigation.tsx          # Header with navigation
│   ├── Footer.tsx              # Footer component
│   ├── ScrollToTop.tsx         # Scroll restoration
│   ├── HeroSection.tsx         # Hero section
│   ├── GrowingImpactSection.tsx # Impact visualization
│   ├── OurStorySection.tsx     # Story section
│   ├── ImpactStats.tsx         # Statistics grid
│   ├── RupeeRevolutionSection.tsx # ₹1 campaign
│   └── ui/                     # Shadcn UI components
├── lib/
│   └── utils.ts                # Utility functions
├── hooks/
│   ├── use-mobile.tsx          # Mobile detection hook
│   └── use-toast.ts            # Toast notifications
├── public/                     # Static assets
└── config files
    ├── next.config.ts
    ├── tailwind.config.ts
    ├── tsconfig.json
    └── postcss.config.js
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ (LTS recommended)
- npm or yarn package manager

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint

# Type checking
npm run type-check
```

The application will be available at `http://localhost:3000`

## 🔑 Key Features

### ✅ Completed

- ✅ Full migration to Next.js 14+ App Router
- ✅ All 7 pages converted (Home, About, Impact, Revolution, Donate, Contact, Blog)
- ✅ Responsive design maintained
- ✅ Tailwind CSS styling preserved
- ✅ Shadcn UI components integrated
- ✅ Client-side interactivity (forms, filters, animations)
- ✅ SEO metadata for all pages
- ✅ 404 error page
- ✅ Scroll-to-top functionality
- ✅ Mobile-responsive navigation

### 🔄 In Progress / Planned

- 🔄 API routes for backend integration
- 🔄 Database connection (Supabase/Firebase)
- 🔄 Real-time donation tracking
- 🔄 User authentication system
- 🔄 Admin dashboard
- 🔄 Email notifications
- 🔄 Payment gateway integration

## 📝 Important Notes

### Client vs Server Components

Components marked with `'use client'` directive:
- `Navigation.tsx` - Uses `usePathname()` hook
- `ScrollToTop.tsx` - Uses `usePathname()` hook
- `GrowingImpactSection.tsx` - Uses `useState()` and `useEffect()` for animations
- `Impact/page.tsx` - Uses `useState()` for filtering
- `Donate/page.tsx` - Uses `useState()` for form state
- `Contact/page.tsx` - Uses `useState()` for form handling
- `Blog/page.tsx` - Uses `useState()` for search and filtering

### Styling

- **Design System**: Vanilla Macaron theme with warm, charitable colors
- **Colors**: Caramel, Golden Cream, Sage Green, Mauve Purple, Dusty Rose, etc.
- **Animations**: Parallax effects, fade-in, float-up, pulse-glow animations
- **Responsive**: Mobile-first approach with Tailwind breakpoints

### Navigation Changes

**Before (React Router):**
```tsx
import { Link, useLocation } from 'react-router-dom';
<Link to="/donate">Donate</Link>
const location = useLocation();
```

**After (Next.js):**
```tsx
import Link from 'next/link';
import { usePathname } from 'next/navigation';
<Link href="/donate">Donate</Link>
const pathname = usePathname();
```

## 🔧 Configuration Files

### next.config.ts
- Image optimization with remote patterns
- Security headers (X-Frame-Options, CSP)
- SWC minification enabled

### tailwind.config.ts
- Custom color palette (vanilla macaron theme)
- Content paths for app directory
- Custom animations and utilities

### tsconfig.json
- Path aliases: `@/*` → `./src/*`
- Strict mode disabled (matching original project)
- Module resolution: bundler

## 📦 Dependencies

### Core
- `next@14+` - React framework
- `react@18+` - UI library
- `typescript` - Type safety

### UI & Styling
- `tailwindcss` - Utility-first CSS
- `@radix-ui/*` - Headless UI components (via shadcn)
- `lucide-react` - Icon library

### Forms & Data
- `react-hook-form` - Form state management
- `@tanstack/react-query` - Data fetching
- `sonner` - Toast notifications

### Utilities
- `clsx` - Conditional classnames
- `tailwind-merge` - Merge Tailwind classes

## 🚀 Deployment

### Vercel (Recommended)

```bash
# Push to GitHub
git push origin main

# Vercel automatically deploys on push
# Configure domain in Vercel dashboard
```

### Environment Variables

Create `.env.local` for local development:
```env
# Add your environment variables here
# Example:
# NEXT_PUBLIC_API_URL=https://api.example.com
# DATABASE_URL=your_database_url
```

## 📚 Next Steps for Development

### 1. Backend Integration
```typescript
// Create API routes in src/app/api/
// Example: src/app/api/donations/route.ts
export async function POST(request: Request) {
  // Handle donation processing
}
```

### 2. Database Setup
- Choose: Supabase, Firebase, or traditional database
- Set up connection in environment variables
- Create database schema for donations, users, etc.

### 3. Authentication
- Implement user login/signup
- Add protected routes
- Create user dashboard

### 4. Real-time Features
- WebSocket integration for live donation updates
- Real-time impact counter
- Notification system

### 5. Admin Dashboard
- Donation management
- Content management
- Analytics and reporting

## 🧪 Testing

```bash
# Run tests (when configured)
npm run test

# Run tests in watch mode
npm run test:watch

# Generate coverage report
npm run test:coverage
```

## 📖 Documentation

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Shadcn UI Documentation](https://ui.shadcn.com)
- [React Query Documentation](https://tanstack.com/query/latest)

## 🤝 Contributing

When adding new features:

1. Create a new branch: `git checkout -b feature/your-feature`
2. Make your changes
3. Test thoroughly
4. Commit with clear messages
5. Push and create a pull request

## 📞 Support

For questions or issues:
- Email: manavsevacharitabletrust773@gmail.com
- Phone: +91 79768 92938
- Website: https://msct.in

## 📄 License

This project is maintained by Manav Seva Charitable Trust.

---

**Migration Completed**: October 2025
**Next.js Version**: 14+
**Status**: ✅ Ready for Development

