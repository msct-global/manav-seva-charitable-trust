import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, Users, Globe, Award } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'About Us | Manav Seva Charitable Trust',
  description: 'Learn about our journey, mission, and the impact we\'re creating in communities across India.',
};

const milestones = [
  { year: "2010", title: "Foundation", description: "Started with food distribution in local communities" },
  { year: "2015", title: "Education Focus", description: "Launched first school support programs" },
  { year: "2018", title: "Healthcare Initiative", description: "Established mobile medical camps" },
  { year: "2020", title: "₹1 Revolution", description: "Launched micro-donation campaign" },
  { year: "2024", title: "50K+ Lives", description: "Reached milestone of transforming 50,000 lives" }
];

export default function About() {
  return (
    <div className="min-h-screen bg-vanilla-cream">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-vanilla-cream to-dusty-rose overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h1 className="text-6xl font-inter font-bold text-charcoal-gray mb-6">
              Our Journey to <span className="text-mauve-purple">Change Lives</span>
            </h1>
            <p className="text-xl text-charcoal-gray/80 max-w-3xl mx-auto leading-relaxed">
              Founded on the belief that small donations could create big 'Miracles', we've been 
              transforming communities through compassion, integrity, and unwavering dedication.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-sage-mist">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <Card className="bg-white border-peach-blush shadow-elegant hover:shadow-strong transition-all duration-300">
              <CardHeader className="text-center">
                <Heart className="h-12 w-12 text-mauve-purple mx-auto mb-4" />
                <CardTitle className="text-3xl font-inter font-bold text-charcoal-gray">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-charcoal-gray/80 text-lg leading-relaxed text-center">
                  To uplift underprivileged communities through education, healthcare, and sustainable 
                  development while fostering a culture of compassion and social responsibility. 
                  We believe every ₹1 can create lasting change.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-peach-blush shadow-elegant hover:shadow-strong transition-all duration-300">
              <CardHeader className="text-center">
                <Globe className="h-12 w-12 text-sage-green mx-auto mb-4" />
                <CardTitle className="text-3xl font-inter font-bold text-charcoal-gray">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-charcoal-gray/80 text-lg leading-relaxed text-center">
                  A world where every individual has access to quality education, healthcare, 
                  and sustainable livelihoods. Together, we envision communities that thrive 
                  in harmony with nature and human dignity.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-inter font-bold text-charcoal-gray mb-6">Our Journey</h2>
            <p className="text-xl text-charcoal-gray/80 max-w-3xl mx-auto">
              Every milestone represents thousands of lives touched and communities transformed
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-mauve-purple/30"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="animate-fade-in">
                      <div className="text-3xl font-bold text-sunset-orange mb-2">{milestone.year}</div>
                      <div className="text-xl font-semibold text-charcoal-gray mb-2">{milestone.title}</div>
                      <div className="text-charcoal-gray/70">{milestone.description}</div>
                    </div>
                  </div>
                  <div className="w-4 h-4 bg-mauve-purple rounded-full border-4 border-white shadow-medium relative z-10"></div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-inter font-bold text-charcoal-gray mb-6">Our Core Values</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-xl bg-white shadow-elegant hover:shadow-strong transition-all duration-300">
              <Heart className="h-16 w-16 text-mauve-purple mx-auto mb-6" />
              <h3 className="text-2xl font-inter font-bold text-charcoal-gray mb-4">Compassion</h3>
              <p className="text-charcoal-gray/70">
                Every action is driven by genuine care for human dignity and well-being
              </p>
            </div>
            
            <div className="text-center p-8 rounded-xl bg-white shadow-elegant hover:shadow-strong transition-all duration-300">
              <Award className="h-16 w-16 text-sage-green mx-auto mb-6" />
              <h3 className="text-2xl font-inter font-bold text-charcoal-gray mb-4">Integrity</h3>
              <p className="text-charcoal-gray/70">
                Transparency and honesty guide our operations and community relationships
              </p>
            </div>
            
            <div className="text-center p-8 rounded-xl bg-white shadow-elegant hover:shadow-strong transition-all duration-300">
              <Users className="h-16 w-16 text-sunset-orange mx-auto mb-6" />
              <h3 className="text-2xl font-inter font-bold text-charcoal-gray mb-4">Respect</h3>
              <p className="text-charcoal-gray/70">
                Honoring the diversity and potential of every individual and community
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-caramel to-golden-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-inter font-bold text-warm-brown mb-6">
            Join Our Mission
          </h2>
          <p className="text-xl text-warm-brown/90 mb-8">
            Every small effort counts. Be part of the change you want to see in the world.
          </p>
          <Link href="/donate">
            <Button className="donation-button text-lg px-8 py-3">
              Start Your Impact with ₹1
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}

