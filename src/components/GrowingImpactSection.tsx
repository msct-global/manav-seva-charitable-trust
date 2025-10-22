'use client';

import { useState, useEffect } from 'react';
import { GraduationCap, Heart, Stethoscope, Leaf, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const GrowingImpactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animationStage, setAnimationStage] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Stagger animation stages
          setTimeout(() => setAnimationStage(1), 500);
          setTimeout(() => setAnimationStage(2), 1200);
          setTimeout(() => setAnimationStage(3), 2000);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('growing-impact');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const impactItems = [
    {
      icon: <GraduationCap className="h-12 w-12" />,
      title: "Education",
      description: "Quality learning opportunities",
      color: "text-caramel",
      bgColor: "bg-caramel/10",
      delay: 0
    },
    {
      icon: <Stethoscope className="h-12 w-12" />,
      title: "Healthcare",
      description: "Free medical assistance",
      color: "text-sunset-orange",
      bgColor: "bg-sunset-orange/10",
      delay: 300
    },
    {
      icon: <Leaf className="h-12 w-12" />,
      title: "Sustainability",
      description: "Environmental conservation",
      color: "text-sage-green",
      bgColor: "bg-sage-green/10",
      delay: 600
    }
  ];

  return (
    <section id="growing-impact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-playfair font-bold text-charcoal-gray mb-6">
            Watch Your ₹1 Grow Into Impact
          </h2>
          <p className="text-xl text-charcoal-gray/70 max-w-3xl mx-auto">
            Every donation starts as a single rupee and multiplies into lasting change across communities.
          </p>
        </div>

        <div className="relative">
          {/* Central ₹1 Coin Animation */}
          <div className="flex justify-center mb-16">
            <div className={`relative ${isVisible ? 'animate-[expand-impact_2s_ease-out]' : ''}`}>
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-golden-cream to-caramel flex items-center justify-center shadow-strong">
                <span className="text-4xl font-bold text-white">₹1</span>
              </div>
              
              {/* Ripple Effect */}
              {animationStage >= 1 && (
                <div className="absolute inset-0 rounded-full border-4 border-golden-cream/30 animate-ping"></div>
              )}
              
              {/* Particle Multiplication Effect */}
              {animationStage >= 2 && (
                <>
                  {[...Array(12)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-6 h-6 rounded-full bg-golden-cream/60"
                      style={{
                        top: '50%',
                        left: '50%',
                        transform: `translate(-50%, -50%) rotate(${i * 30}deg) translateY(-80px)`,
                        animation: `float-up 2s ease-out ${i * 0.1}s`
                      }}
                    />
                  ))}
                </>
              )}
            </div>
          </div>

          {/* Impact Icons Grid */}
          <div className="grid md:grid-cols-3 gap-12 max-w-4xl mx-auto">
            {impactItems.map((item, index) => (
              <div
                key={index}
                className={`text-center growing-icon ${
                  animationStage >= 3 ? 'opacity-100' : 'opacity-0'
                }`}
                style={{
                  animationDelay: `${2.5 + item.delay}ms`
                }}
              >
                <div className={`mx-auto w-24 h-24 rounded-2xl ${item.bgColor} flex items-center justify-center mb-6 shadow-medium hover:shadow-strong transition-all duration-300 hover:scale-110`}>
                  <div className={item.color}>
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-playfair font-semibold text-charcoal-gray mb-3">
                  {item.title}
                </h3>
                <p className="text-charcoal-gray/70 mb-4">
                  {item.description}
                </p>
                <div className="flex items-center justify-center space-x-2 text-mauve-purple font-semibold">
                  <span>₹1 = 1 Day Impact</span>
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA with Pulse Animation */}
          <div className="text-center mt-16">
            <Link href="/revolution">
              <Button 
                className={`donation-button text-lg px-12 py-6 ${
                  animationStage >= 3 ? 'animate-[pulse-glow_3s_ease-in-out_infinite]' : ''
                }`}
              >
                Join the ₹1 Revolution
                <Heart className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <p className="text-charcoal-gray/60 mt-4">
              Small donations. Big dreams. Lasting change.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrowingImpactSection;

