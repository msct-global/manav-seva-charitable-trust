import { GraduationCap, Heart, Stethoscope, Leaf, Users, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const ImpactStats = () => {
  const stats = [
    {
      icon: <GraduationCap className="h-8 w-8 text-caramel" />,
      number: "5,000+",
      label: "Children Educated",
      description: "Quality learning opportunities provided",
      bgColor: "bg-caramel/10",
      borderColor: "border-caramel"
    },
    {
      icon: <Stethoscope className="h-8 w-8 text-golden-cream" />,
      number: "50,000+",
      label: "Health Consultations",
      description: "Free medical camps & assistance",
      bgColor: "bg-golden-cream/10",
      borderColor: "border-golden-cream"
    },
    {
      icon: <Leaf className="h-8 w-8 text-warm-beige" />,
      number: "100+",
      label: "Green Projects",
      description: "Environmental conservation initiatives",
      bgColor: "bg-warm-beige/10",
      borderColor: "border-warm-beige"
    },
    {
      icon: <Users className="h-8 w-8 text-warm-brown" />,
      number: "10,000+",
      label: "Lives Touched",
      description: "Direct beneficiaries of our programs",
      bgColor: "bg-warm-brown/10",
      borderColor: "border-warm-brown"
    },
    {
      icon: <Heart className="h-8 w-8 text-caramel" />,
      number: "₹1,00,000+",
      label: "₹1 Donations",
      description: "Collective micro-donations received",
      bgColor: "bg-vanilla/10",
      borderColor: "border-vanilla"
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-soft-taupe" />,
      number: "95%",
      label: "Impact Rate",
      description: "Funds directly reaching beneficiaries",
      bgColor: "bg-soft-taupe/10",
      borderColor: "border-soft-taupe"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-playfair font-bold text-charcoal-gray mb-4">
            Our Impact in Numbers
          </h2>
          <p className="text-xl text-charcoal-gray/70 max-w-3xl mx-auto">
            Every ₹1 donation creates a ripple effect of positive change across communities. 
            See how your contribution makes a difference.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`impact-card hover:scale-105 transition-all duration-300 ${stat.bgColor} ${stat.borderColor} border-l-4`}
            >
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-lg bg-white shadow-soft">
                  {stat.icon}
                </div>
                <div className="flex-1">
                  <div className="text-3xl font-bold text-charcoal-gray mb-1">
                    {stat.number}
                  </div>
                  <div className="text-lg font-semibold text-charcoal-gray mb-2">
                    {stat.label}
                  </div>
                  <div className="text-charcoal-gray/70">
                    {stat.description}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-sunset-orange/20 to-dusty-rose/20 rounded-2xl p-8 shadow-medium">
            <h3 className="text-2xl font-playfair font-bold text-charcoal-gray mb-4">
              Ready to multiply these numbers?
            </h3>
            <p className="text-charcoal-gray/80 mb-6">
              Your ₹1 can be the catalyst that changes someone's life forever.
            </p>
            <Link href="/donate">
              <Button className="donation-button">
                Join the ₹1 Revolution
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;

