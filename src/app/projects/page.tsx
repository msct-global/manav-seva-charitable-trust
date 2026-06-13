'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, BookOpen, Stethoscope, Users, ArrowRight, Filter } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const projects = [
  {
    id: 'aspire-mobility',
    name: 'Aspire Mobility - Prosthetics',
    icon: '',
    featured: true,
    status: 'active',
    description: 'Providing affordable prosthetic limbs at 70% below market rate',
    shortDescription: 'Below-knee prosthetics at ₹50,000',
    progress: 0,
    raised: '₹0',
    target: '₹50,000',
    livesHelped: 0,
    color: 'from-blue-500 to-cyan-500',
    link: '/aspire-mobility',
    tags: ['fundraising', 'healthcare', 'partnership'],
  },
  {
    id: 'education',
    name: 'Education for All',
    icon: '🎓',
    featured: false,
    status: 'active',
    description: 'School support, scholarships, skill development',
    shortDescription: '5,000+ children educated annually',
    progress: 75,
    raised: '375',
    target: '500',
    livesHelped: 5000,
    color: 'from-amber-500 to-orange-500',
    link: '/impact',
    tags: ['education', 'ongoing'],
  },
  {
    id: 'healthcare',
    name: 'Mobile Healthcare',
    icon: '🏥',
    featured: false,
    status: 'active',
    description: 'Mobile medical camps in rural villages',
    shortDescription: '25,000+ checkups annually',
    progress: 80,
    raised: '80',
    target: '100',
    livesHelped: 25000,
    color: 'from-red-500 to-pink-500',
    link: '/donate',
    tags: ['healthcare', 'ongoing'],
  },
  {
    id: 'disaster',
    name: 'Disaster Relief',
    icon: '🆘',
    featured: false,
    status: 'active',
    description: 'Emergency relief during natural disasters',
    shortDescription: 'Current: Flood Relief Fund',
    progress: 60,
    raised: '₹3,00,000',
    target: '₹5,00,000',
    livesHelped: 1000,
    color: 'from-orange-500 to-red-500',
    link: '/donate',
    tags: ['emergency', 'urgent'],
  },
  {
    id: 'sustainability',
    name: 'Sustainability',
    icon: '🌱',
    featured: false,
    status: 'active',
    description: 'Environmental & sustainable livelihood programs',
    shortDescription: 'Supporting sustainable development',
    progress: 50,
    raised: '50%',
    target: '100%',
    livesHelped: 2000,
    color: 'from-green-500 to-emerald-500',
    link: '/impact',
    tags: ['sustainability', 'ongoing'],
  },
];

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState('all');
  const filteredProjects = projects.filter(p => activeFilter === 'all' || p.tags.includes(activeFilter));
  const featured = projects.find(p => p.featured);

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="relative">
        {/* Hero */}
        <section className="py-20 bg-gradient-to-r from-vanilla-cream to-dusty-rose">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-6xl font-inter font-bold text-charcoal-gray mb-6">
              Our Active <span className="text-mauve-purple">Projects</span>
            </h1>
            <p className="text-xl text-charcoal-gray/80 max-w-3xl mx-auto">
              Transforming lives through diverse initiatives. See where your support creates impact.
            </p>
          </div>
        </section>

        {/* Featured */}
        {featured && (
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="inline-block bg-mauve-purple text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                ⭐ Featured Campaign
              </div>
              <Card className="border-2 border-blue-500 bg-gradient-to-br from-blue-50 to-cyan-50 shadow-elegant">
                <div className="grid lg:grid-cols-2 gap-8 p-8">
                  <div className="space-y-6">
                    <div>
                      <div className="text-6xl mb-4">{featured.icon}</div>
                      <h3 className="text-4xl font-bold text-charcoal-gray mb-2">{featured.name}</h3>
                      <p className="text-lg text-charcoal-gray/70">{featured.description}</p>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="font-semibold">Progress</span>
                        <span className="text-2xl font-bold text-mauve-purple">{featured.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-4">
                        <div className={`h-full bg-gradient-to-r ${featured.color}`} style={{ width: `${featured.progress}%` }}></div>
                      </div>
                    </div>
                    <Link href={featured.link}>
                      <Button className="w-full bg-mauve-purple text-white py-3 text-lg">
                        Support Campaign <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </Link>
                  </div>
                  <div className="flex items-center justify-center h-96 bg-gradient-to-br from-blue-200 to-cyan-200 rounded-2xl p-8 flex-col">
                    <Image
                      src="/prosthetic-leg.png"
                      alt="Prosthetic Leg"
                      width={180}
                      height={280}
                      className="mb-6 drop-shadow-lg"
                    />
                    <p className="text-xl font-bold text-charcoal-gray text-center">Give Steps, Give Hope</p>
                  </div>
                </div>
              </Card>
            </div>
          </section>
        )}

        {/* Filter */}
        <section className="py-12 bg-sage-mist">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-lg font-semibold text-charcoal-gray mb-4">Filter:</h3>
            <div className="flex flex-wrap gap-3">
              {['all', 'fundraising', 'healthcare', 'education', 'emergency', 'ongoing'].map(f => (
                <button key={f} onClick={() => setActiveFilter(f)} className={`px-6 py-2 rounded-full font-medium capitalize transition-all ${activeFilter === f ? 'bg-mauve-purple text-white' : 'bg-white border border-gray-300'}`}>
                  {f}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* All Projects */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-charcoal-gray mb-12">All Initiatives</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map(p => (
                <Card key={p.id} className="bg-white border border-gray-200 hover:shadow-strong transition-all">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-4">
                      {p.id === 'aspire-mobility' ? (
                        <Image src="/prosthetic-leg.png" alt={p.name} width={80} height={100} className="drop-shadow-md" />
                      ) : (
                        <div className="text-5xl">{p.icon}</div>
                      )}
                      <span className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">{p.status}</span>
                    </div>
                    <CardTitle className="text-2xl">{p.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-charcoal-gray/80">{p.shortDescription}</p>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div className={`h-full bg-gradient-to-r ${p.color}`} style={{ width: `${p.progress}%` }}></div>
                    </div>
                    <div className="flex justify-between text-sm text-charcoal-gray/70">
                      <span>{p.raised}</span>
                      <span className="font-semibold">{p.progress}%</span>
                    </div>
                    <div className="text-charcoal-gray/70">{p.livesHelped.toLocaleString()}+ Lives Impacted</div>
                    <Link href={p.link}>
                      <Button className="w-full bg-mauve-purple text-white">Learn More</Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-caramel to-golden-cream">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-warm-brown mb-6">Be Part of the Change</h2>
            <Link href="/donate">
              <Button className="donation-button text-lg px-8 py-3">
                Support a Project <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
