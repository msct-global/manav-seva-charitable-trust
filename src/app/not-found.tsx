import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Home, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-vanilla-cream">
      <Navigation />

      <div className="min-h-[80vh] flex items-center justify-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <img
              src="/msct_logo.png"
              alt="MSCT Logo"
              className="h-20 w-20 object-contain mx-auto mb-6"
            />
          </div>

          <h1 className="text-6xl font-playfair font-bold text-warm-brown mb-4">404</h1>
          <h2 className="text-3xl font-playfair font-semibold text-caramel mb-6">
            Page Not Found
          </h2>
          <p className="text-xl text-warm-brown/80 mb-8 leading-relaxed">
            Oops! The page you're looking for seems to have wandered off.
            But don't worry, you can still make a difference with us.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <Button
                variant="outline"
                className="border-deep-charcoal text-deep-charcoal hover:bg-deep-charcoal hover:text-cream px-8 py-3"
              >
                <Home className="mr-2 h-5 w-5" />
                Return to Home
              </Button>
            </Link>

            <Link href="/donate">
              <Button className="donation-button px-8 py-3">
                Start Your ₹1 Impact
              </Button>
            </Link>
          </div>

          <div className="mt-12 p-6 bg-cream/50 rounded-xl border border-ivory">
            <p className="text-deep-charcoal/70 mb-4">
              While you're here, why not join our mission?
            </p>
            <Link href="/revolution">
              <Button className="donation-button">
                Join the ₹1 Revolution
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

