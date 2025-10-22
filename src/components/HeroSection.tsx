import { ArrowRight, Users, GraduationCap, Heart } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="hero-section min-h-screen flex items-center parallax-container">
      {/* Parallax Background Layers */}
      <div className="parallax-bg"></div>
      
      {/* Floating Donation Dots Animation */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="floating-dots"
            style={{
              left: `${20 + i * 10}%`,
              top: `${30 + (i % 3) * 20}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + i * 0.3}s`
            }}
          />
        ))}
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 min-w-0">
            <div className="space-y-4">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-playfair font-bold text-warm-brown leading-tight">
                <div className="break-words">
                  One Community, Countless Possibilities
                </div>
                <div className="text-caramel break-words">
                  <span className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl">Where Humanity</span><br />
                  <span className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl">Finds Its Voice</span>
                </div>
              </h1>

              <p className="text-xl text-warm-brown/80 leading-relaxed">
                Every moment you wait, someone else struggles in silence. <strong>If not you, then who?</strong> Your support today can turn their story around — giving them the chance they need, the voice they deserve. Don't let another opportunity slip by. Stand with us and make a real, lasting impact.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/donate">
                <Button className="donation-button text-lg px-8 py-6 w-full sm:w-auto">
                  Make your impact
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              
              <Link href="/about">
                <Button
                  variant="outline"
                  className="border-warm-brown text-warm-brown hover:bg-warm-brown hover:text-cream px-8 py-6 text-lg w-full sm:w-auto"
                >
                  Our Story
                </Button>
              </Link>
            </div>

            {/* Impact Stats Preview */}
            <div className="flex flex-wrap gap-8 pt-8">
              <div className="flex items-center space-x-2">
                <Users className="h-6 w-6 text-caramel" />
                <span className="text-warm-brown font-semibold">10,000+ Lives Touched</span>
              </div>
              <div className="flex items-center space-x-2">
                <GraduationCap className="h-6 w-6 text-golden-cream" />
                <span className="text-warm-brown font-semibold">5,000+ Children Educated</span>
              </div>
              <div className="flex items-center space-x-2">
                <Heart className="h-6 w-6 text-caramel" />
                <span className="text-warm-brown font-semibold">₹1 = 1 Day of School</span>
              </div>
            </div>
          </div>

          {/* Hero Image Placeholder */}
          <div className="lg:order-last">
            <div className="relative">
              <div className="rounded-2xl shadow-strong w-full h-[600px] bg-gradient-to-br from-caramel/20 via-golden-cream/20 to-peach-blush/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🤝</div>
                  <p className="text-warm-brown text-lg font-semibold">Children Learning & Growing</p>
                  <p className="text-warm-brown/60 text-sm mt-2">Manav Seva Charitable Trust Impact</p>
                </div>
              </div>

              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-medium border border-peach-blush">
                <div className="text-center">
                  <div className="text-3xl font-bold text-caramel">₹1</div>
                  <div className="text-sm text-warm-brown">Can change a life</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

