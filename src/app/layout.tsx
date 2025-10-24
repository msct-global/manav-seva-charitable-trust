import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import "./globals.css";

export const metadata: Metadata = {
  title: "Manav Seva Charitable Trust - ₹1 Revolution",
  description: "Join the ₹1 Revolution with Manav Seva Charitable Trust. Every ₹1 donation creates lasting change through education, healthcare, and sustainability initiatives.",
  keywords: "NGO, charity, education, healthcare, sustainability, ₹1 revolution, donation, India, social welfare",
  authors: [{ name: "Manav Seva Charitable Trust" }],
  openGraph: {
    title: "Manav Seva Charitable Trust - ₹1 Revolution",
    description: "Join the ₹1 Revolution. Every small donation creates lasting change through education, healthcare, and sustainability initiatives.",
    type: "website",
    images: [
      {
        url: "/msct_logo.png",
        width: 1200,
        height: 630,
        alt: "Manav Seva Charitable Trust",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@manavseva",
    images: ["/msct_logo.png"],
  },
  icons: {
    icon: "/msct_logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="google-site-verification" content="1VrE983IVdtUgeOccAeUKHc92mlPq2xNBcGh4BiOL_o" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <TooltipProvider>
            <Toaster />
            {children}
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

