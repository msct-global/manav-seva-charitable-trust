import { Coins, BookOpen, Stethoscope, TreePine, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const RupeeRevolutionSection = () => {
  const impacts = [
    {
      icon: <BookOpen className="h-6 w-6 text-caramel" />,
      title: "₹1 = 1 Day of School",
      description: "Provide educational materials and support for a child's learning journey"
    },
    {
      icon: <Stethoscope className="h-6 w-6 text-sunset-orange" />,
      title: "₹1 = Health Check",
      description: "Basic health screening and preventive care for underprivileged communities"
    },
    {
      icon: <TreePine className="h-6 w-6 text-sage-green" />,
      title: "₹1 = Plant a Sapling",
      description: "Environmental conservation through tree plantation and sustainability projects"
    }
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-dusty-rose/20 mb-6">
            <div className="text-4xl">₹</div>
          </div>

          <h2 className="text-5xl font-playfair font-bold text-charcoal-gray mb-6">
            The ₹1 <span className="text-sunset-orange">Revolution</span>
          </h2>
          
          <p className="text-xl text-charcoal-gray/80 max-w-4xl mx-auto leading-relaxed">
            <span className="font-semibold text-caramel">"Just ₹1 don't let kids miss school and Nature die. Donate now!"</span>
            <br />
            Every small effort counts. When millions unite with just ₹1 donations, 
            we create a powerful wave of change that transforms communities forever.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Impact Visualization */}
          <div className="space-y-8">
            <h3 className="text-3xl font-playfair font-semibold text-charcoal-gray mb-8">
              How Your ₹1 Creates Miracles
            </h3>
            
            {impacts.map((impact, index) => (
              <div 
                key={index}
                className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-soft hover:shadow-medium transition-all duration-300"
              >
                <div className="p-3 rounded-lg bg-sage-green/10">
                  {impact.icon}
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-charcoal-gray mb-2">
                    {impact.title}
                  </h4>
                  <p className="text-charcoal-gray/70">
                    {impact.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="bg-white rounded-2xl p-8 shadow-medium border border-peach-blush">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-caramel/20 mb-4">
                <Coins className="h-8 w-8 text-caramel" />
              </div>
              
              <h3 className="text-3xl font-playfair font-bold text-charcoal-gray mb-4">
                Start Your Impact Today
              </h3>
              
              <p className="text-charcoal-gray/80 mb-8">
                Join thousands of changemakers who believe that together, we can create 
                a better, greener world. Your ₹1 is the seed of transformation.
              </p>
            </div>

            <div className="space-y-6">
              {/* QR Code Payment Option */}
              <div className="bg-sage-green/10 rounded-xl p-6 border border-sage-green/20">
                <h4 className="text-lg font-semibold text-charcoal-gray mb-3 text-center">
                  Scan QR Code to Donate
                </h4>
                <div className="flex justify-center mb-3">
                  <div className="bg-white p-2 rounded-lg shadow-soft">
                    <img
                      src="/donate1.jpg"
                      alt="UPI QR Code for ₹1 donation to manavseva2025@sbi"
                      className="w-48 h-48 object-contain"
                    />
                  </div>
                </div>
                <p className="text-sm text-charcoal-gray/70 text-center">
                  UPI ID: <span className="font-mono font-semibold">manavseva2025@sbi</span>
                </p>
              </div>

              {/* Divider */}
              <div className="flex items-center gap-3">
                <div className="flex-1 h-px bg-peach-blush"></div>
                <span className="text-sm text-charcoal-gray/60 font-medium">OR</span>
                <div className="flex-1 h-px bg-peach-blush"></div>
              </div>

              {/* Direct UPI Link Button */}
              <a
                href="upi://pay?pa=manavseva2025@sbi&pn=ManavSevaCharitableTrust&am=1.00&cu=INR&tn=Donation&tr=MSCT001"
                className="block"
              >
                <Button className="w-full donation-button text-lg py-6">
                  Donate ₹1 Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
              
              <div className="text-center">
                <p className="text-sm text-charcoal-gray/60">
                  Secure • Instant • Transparent
                </p>
              </div>
            </div>

            {/* Success Metrics */}
            <div className="mt-8 pt-8 border-t border-peach-blush">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-golden-cream">₹1L+</div>
                  <div className="text-xs text-charcoal-gray/60">Raised</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-caramel">50K+</div>
                  <div className="text-xs text-charcoal-gray/60">Donors</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-sage-green">95%</div>
                  <div className="text-xs text-charcoal-gray/60">Impact</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial */}
        <div className="mt-20 text-center">
          <blockquote className="text-2xl font-playfair italic text-charcoal-gray max-w-4xl mx-auto">
            "Every small effort counts, and with just ₹1 donations, you can be a part of this change. 
            Together, we can create a better, greener world. Join us in making a lasting impact!"
          </blockquote>
          <cite className="text-caramel font-semibold mt-4 block">- Manav Seva Charitable Trust</cite>
        </div>
      </div>
    </section>
  );
};

export default RupeeRevolutionSection;

