'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, Stethoscope, TreePine, Users, Heart, Target, Filter } from 'lucide-react';
import Link from 'next/link';

const programs = [
  {
    id: 1,
    title: "Digital Learning Centers",
    category: "Education",
    image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=600&h=400&fit=crop",
    description: "Establishing computer labs and digital literacy programs in rural schools to bridge the technology gap.",
    impact: "2,500+ students trained",
    icon: <BookOpen className="h-6 w-6" />
  },
  {
    id: 2,
    title: "Mobile Health Clinics", 
    category: "Healthcare",
    image: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=600&h=400&fit=crop",
    description: "Bringing essential medical care to remote villages through fully equipped mobile units and trained staff.",
    impact: "15,000+ patients served",
    icon: <Stethoscope className="h-6 w-6" />
  },
  {
    id: 3,
    title: "Green Villages Initiative",
    category: "Sustainability", 
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&h=400&fit=crop",
    description: "Converting villages to sustainable communities through renewable energy, waste management, and organic farming.",
    impact: "50+ villages transformed",
    icon: <TreePine className="h-6 w-6" />
  },
  {
    id: 4,
    title: "School Meal Program",
    category: "Education",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&h=400&fit=crop", 
    description: "Providing nutritious meals to school children to improve attendance and learning outcomes.",
    impact: "5,000+ children fed daily",
    icon: <Heart className="h-6 w-6" />
  },
  {
    id: 5,
    title: "Maternal Care Centers",
    category: "Healthcare",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop",
    description: "Supporting expectant mothers with prenatal care, safe delivery services, and postnatal support.",
    impact: "3,000+ safe deliveries",
    icon: <Heart className="h-6 w-6" />
  },
  {
    id: 6,
    title: "Tree Plantation Drive",
    category: "Sustainability",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=400&fit=crop",
    description: "Large-scale tree plantation and forest restoration projects to combat climate change.",
    impact: "100,000+ trees planted",
    icon: <TreePine className="h-6 w-6" />
  }
];

const categories = ['All', 'Education', 'Healthcare', 'Sustainability'];

export default function Impact() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredPrograms = activeFilter === 'All' 
    ? programs 
    : programs.filter(program => program.category === activeFilter);

  const getCategoryColor = (category: string) => {
    switch(category) {
      case 'Education': return 'text-caramel';
      case 'Healthcare': return 'text-golden-cream';
      case 'Sustainability': return 'text-warm-beige';
      default: return 'text-warm-brown';
    }
  };

  const getCategoryBg = (category: string) => {
    switch(category) {
      case 'Education': return 'bg-caramel/10';
      case 'Healthcare': return 'bg-golden-cream/10';
      case 'Sustainability': return 'bg-warm-beige/10';
      default: return 'bg-warm-brown/10';
    }
  };

  return (
    <div className="min-h-screen bg-vanilla-cream">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-vanilla-cream to-dusty-rose">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h1 className="text-6xl font-inter font-bold text-charcoal-gray mb-6">
              Our <span className="text-mauve-purple">Impact Programs</span>
            </h1>
            <p className="text-xl text-charcoal-gray/80 max-w-3xl mx-auto leading-relaxed">
              Transforming communities through targeted initiatives in education, healthcare, 
              and sustainability. Every program is designed to create lasting change.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Stats */}
      <section className="py-16 bg-sage-mist">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-mauve-purple mb-2">50K+</div>
              <div className="text-charcoal-gray/70">Lives Transformed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-sage-green mb-2">100+</div>
              <div className="text-charcoal-gray/70">Villages Reached</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-sunset-orange mb-2">25+</div>
              <div className="text-charcoal-gray/70">Active Programs</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-dusty-rose mb-2">10</div>
              <div className="text-charcoal-gray/70">Years of Impact</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Filter className="h-5 w-5 text-charcoal-gray/60 mr-2 mt-2" />
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeFilter === category ? "default" : "outline"}
                onClick={() => setActiveFilter(category)}
                className={`transition-all duration-300 ${
                  activeFilter === category 
                    ? 'bg-mauve-purple text-white hover:bg-mauve-purple/90' 
                    : 'border-mauve-purple/30 text-charcoal-gray hover:bg-mauve-purple/10'
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPrograms.map((program, index) => (
              <Card 
                key={program.id} 
                className="bg-white border-peach-blush shadow-elegant hover:shadow-strong hover:scale-105 transition-all duration-300 group overflow-hidden"
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={program.image} 
                    alt={program.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-medium ${getCategoryBg(program.category)} ${getCategoryColor(program.category)}`}>
                    <div className="flex items-center gap-2">
                      {program.icon}
                      {program.category}
                    </div>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl font-inter font-bold text-charcoal-gray">
                    {program.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-charcoal-gray/70 text-sm leading-relaxed">
                    {program.description}
                  </p>
                  
                  <div className="flex items-center gap-2">
                    <Target className="h-4 w-4 text-mauve-purple" />
                    <span className="text-sm font-semibold text-mauve-purple">
                      {program.impact}
                    </span>
                  </div>
                  
                  <div className="flex gap-2 pt-4">
                    <Button size="sm" className="flex-1 bg-mauve-purple text-white hover:bg-mauve-purple/90">
                      Learn More
                    </Button>
                    <Link href="/donate" className="flex-1">
                      <Button size="sm" variant="outline" className="w-full border-mauve-purple/30 text-charcoal-gray hover:bg-mauve-purple/10">
                        Donate
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Story */}
      <section className="py-20 bg-gradient-to-r from-sage-mist to-peach-blush">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-inter font-bold text-charcoal-gray mb-6">Real Impact Stories</h2>
            <p className="text-xl text-charcoal-gray/80 max-w-3xl mx-auto">
              Behind every statistic is a human story of transformation and hope
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-12 shadow-elegant max-w-4xl mx-auto">
            <blockquote className="text-2xl font-inter italic text-charcoal-gray text-center mb-8">
              "The mobile health clinic saved my daughter's life. When she fell critically ill, 
              the nearest hospital was 50 kilometers away. Thanks to Manav Seva's team, 
              she received immediate care and is now healthy and back in school."
            </blockquote>
            <div className="text-center">
              <cite className="text-mauve-purple font-semibold">- Sunita Devi, Mother of Priya</cite>
              <p className="text-charcoal-gray/60 text-sm mt-2">Beneficiary from Rajasthan Village</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-mauve-purple to-dusty-rose">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-inter font-bold text-white mb-6">
            Be Part of Our Programs
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Your support helps us expand these life-changing programs to more communities
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/donate">
              <Button className="donation-button text-lg px-8 py-3">
                Fund a Program
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" className="text-lg px-8 py-3 bg-white/10 border-white text-white hover:bg-white/20">
                Volunteer With Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

