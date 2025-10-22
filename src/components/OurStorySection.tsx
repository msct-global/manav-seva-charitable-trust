import { Heart, Users, Award, Target } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const OurStorySection = () => {
  const values = [
    {
      icon: <Heart className="h-6 w-6 text-caramel" />,
      title: "Compassion",
      description: "We believe in treating every person with dignity and kindness"
    },
    {
      icon: <Award className="h-6 w-6 text-golden-cream" />,
      title: "Integrity", 
      description: "Transparency and honesty guide every action we take"
    },
    {
      icon: <Users className="h-6 w-6 text-sage-green" />,
      title: "Respect",
      description: "Honoring diverse cultures and individual perspectives"
    },
    {
      icon: <Target className="h-6 w-6 text-mauve-purple" />,
      title: "Impact",
      description: "Focused on creating measurable, lasting positive change"
    }
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Story Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-charcoal-gray mb-6">
                Our Journey of <span className="text-caramel">Service</span>
              </h2>
              
              <div className="space-y-6 text-charcoal-gray/80 leading-relaxed">
                <p className="text-lg">
                  Founded on the belief that <strong className="text-charcoal-gray">small donations could create big 'Miracles'</strong>, 
                  Manav Seva Charitable Trust began as a small initiative to provide food and clothing 
                  to underprivileged communities.
                </p>
                
                <p>
                  What started as a humble effort has grown into a comprehensive mission that now spans 
                  <strong className="text-sage-green"> education, healthcare, disaster relief, and sustainable development</strong>. 
                  We've learned that when communities unite with purpose, even the smallest contributions 
                  can create waves of transformation.
                </p>
                
                <p>
                  Today, our <strong className="text-golden-cream">₹1 Revolution</strong> embodies this philosophy - 
                  proving that collective micro-actions can solve macro problems. Every rupee donated 
                  is a vote for a better, more equitable world.
                </p>
              </div>
            </div>

            {/* Core Values */}
            <div>
              <h3 className="text-2xl font-playfair font-semibold text-charcoal-gray mb-6">
                Our Core Values
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {values.map((value, index) => (
                  <div 
                    key={index}
                    className="flex items-start space-x-3 p-4 bg-white rounded-lg shadow-soft hover:shadow-medium transition-all duration-300"
                  >
                    <div className="p-2 rounded-lg bg-caramel/10">
                      {value.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-charcoal-gray mb-1">
                        {value.title}
                      </h4>
                      <p className="text-sm text-charcoal-gray/70">
                        {value.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/about" className="w-full sm:w-auto">
                <Button className="donation-button w-full">
                  Learn More About Us
                </Button>
              </Link>
              <Link href="/impact" className="w-full sm:w-auto">
                <Button variant="outline" className="border-warm-brown text-warm-brown w-full">
                  See Our Impact
                </Button>
              </Link>
            </div>
          </div>

          {/* Image Placeholder */}
          <div className="relative">
            <div className="rounded-2xl shadow-strong w-full h-[600px] bg-gradient-to-br from-sage-green/20 via-golden-cream/20 to-caramel/20 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">👥</div>
                <p className="text-charcoal-gray text-lg font-semibold">Community Impact</p>
                <p className="text-charcoal-gray/60 text-sm mt-2">Volunteers Helping Community Members</p>
              </div>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-charcoal-gray/5 via-caramel/5 to-sage-green/5 rounded-2xl p-12 shadow-medium">
            <h3 className="text-3xl font-playfair font-bold text-charcoal-gray mb-6">
              Our Mission
            </h3>
            <blockquote className="text-xl lg:text-2xl font-playfair italic text-charcoal-gray max-w-4xl mx-auto leading-relaxed">
              "To create a world where every individual has access to quality education, 
              healthcare, and a sustainable environment. We believe that through collective 
              action and unwavering compassion, we can build stronger, more resilient communities 
              that thrive for generations to come."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStorySection;

