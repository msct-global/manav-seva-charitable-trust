'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Heart, Shield, Clock, Users, CreditCard, Smartphone, Building, ChevronRight } from 'lucide-react';

const predefinedAmounts = [1, 50, 100, 500, 1000, 2500];

const faqs = [
  {
    question: "Is my donation secure?",
    answer: "Yes, all donations are processed through encrypted, secure payment gateways. We use industry-standard security measures to protect your personal and financial information."
  },
  {
    question: "How much of my donation goes directly to programs?",
    answer: "95% of your donation goes directly to our programs and beneficiaries. Only 5% is used for administrative costs to ensure maximum impact of your contribution."
  },
  {
    question: "Can I get a tax receipt?",
    answer: "Yes, we provide tax-deductible receipts for all donations. You'll receive an email receipt immediately after your donation, and we can provide additional documentation if needed."
  },
  {
    question: "How can I track the impact of my donation?",
    answer: "We send regular updates to our donors about program progress and impact stories. You can also visit our Impact page to see real-time statistics and success stories."
  },
  {
    question: "Can I cancel my recurring donation?",
    answer: "Yes, you can cancel or modify your recurring donation at any time by contacting us or through the link in your confirmation email."
  }
];

const impactExamples = [
  { amount: 1, impact: "Provides 1 day of school meals for a child" },
  { amount: 50, impact: "Supports a child's education for 1 month" },
  { amount: 100, impact: "Funds basic healthcare for a family" },
  { amount: 500, impact: "Sponsors school supplies for 50 children" },
  { amount: 1000, impact: "Provides clean water access for a village" },
  { amount: 2500, impact: "Funds a mobile health camp" }
];

export default function Donate() {
  const [selectedAmount, setSelectedAmount] = useState(100);
  const [donationType, setDonationType] = useState('one-time');
  const [currentGoal] = useState({ current: 7500, target: 10000 });

  const progressPercentage = (currentGoal.current / currentGoal.target) * 100;

  return (
    <div className="min-h-screen bg-vanilla-cream">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-vanilla-cream to-dusty-rose">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h1 className="text-6xl font-inter font-bold text-charcoal-gray mb-6">
              Your Support <span className="text-mauve-purple">Changes Lives</span>
            </h1>
            <p className="text-xl text-charcoal-gray/80 max-w-3xl mx-auto leading-relaxed">
              Every donation, no matter the size, creates ripples of positive change. 
              Join thousands of compassionate supporters in transforming communities.
            </p>
          </div>
        </div>
      </section>

      {/* Current Campaign Progress */}
      <section className="py-16 bg-sage-mist">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-white border-peach-blush shadow-elegant">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-inter font-bold text-charcoal-gray">
                🎯 Current Campaign: Education for All
              </CardTitle>
              <p className="text-charcoal-gray/70">Help us reach our goal to build 10 new classrooms</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between text-sm font-medium">
                  <span className="text-charcoal-gray">₹{currentGoal.current.toLocaleString()}</span>
                  <span className="text-charcoal-gray">₹{currentGoal.target.toLocaleString()}</span>
                </div>
                <div className="w-full bg-peach-blush/30 rounded-full h-4 overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-mauve-purple to-sunset-orange transition-all duration-1000 ease-out"
                    style={{ width: `${progressPercentage}%` }}
                  ></div>
                </div>
                <div className="text-center">
                  <span className="text-2xl font-bold text-mauve-purple">{Math.round(progressPercentage)}%</span>
                  <span className="text-charcoal-gray/70 ml-2">of goal achieved</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Donation Form Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Donation Form */}
            <Card className="bg-white border-peach-blush shadow-elegant">
              <CardHeader>
                <CardTitle className="text-3xl font-inter font-bold text-charcoal-gray text-center">
                  Make a Donation
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                
                {/* Donation Type */}
                <div>
                  <label className="text-lg font-semibold text-charcoal-gray mb-4 block">Donation Type</label>
                  <div className="grid grid-cols-2 gap-4">
                    <Button
                      variant={donationType === 'one-time' ? 'default' : 'outline'}
                      onClick={() => setDonationType('one-time')}
                      className={donationType === 'one-time' ? 'bg-mauve-purple text-white' : 'border-mauve-purple/30'}
                    >
                      One-time
                    </Button>
                    <Button
                      variant={donationType === 'monthly' ? 'default' : 'outline'}
                      onClick={() => setDonationType('monthly')}
                      className={donationType === 'monthly' ? 'bg-mauve-purple text-white' : 'border-mauve-purple/30'}
                    >
                      Monthly
                    </Button>
                  </div>
                </div>

                {/* Amount Selection */}
                <div>
                  <label className="text-lg font-semibold text-charcoal-gray mb-4 block">Select Amount (₹)</label>
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    {predefinedAmounts.map((amount) => (
                      <Button
                        key={amount}
                        variant={selectedAmount === amount ? 'default' : 'outline'}
                        onClick={() => setSelectedAmount(amount)}
                        className={selectedAmount === amount ? 'bg-mauve-purple text-white' : 'border-mauve-purple/30'}
                      >
                        ₹{amount}
                      </Button>
                    ))}
                  </div>
                  <div className="relative">
                    <input
                      type="number"
                      value={selectedAmount}
                      onChange={(e) => setSelectedAmount(Number(e.target.value))}
                      placeholder="Custom amount"
                      className="w-full px-4 py-3 border border-peach-blush rounded-lg focus:outline-none focus:ring-2 focus:ring-mauve-purple focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Impact Preview */}
                <div className="bg-sage-mist/50 rounded-lg p-4">
                  <h4 className="font-semibold text-charcoal-gray mb-2">Your Impact:</h4>
                  <p className="text-charcoal-gray/80">
                    {impactExamples.find(example => example.amount <= selectedAmount)?.impact || 
                     `Your ₹${selectedAmount} donation will help fund multiple programs and create lasting change in communities.`}
                  </p>
                </div>

                {/* Payment Methods */}
                <div>
                  <label className="text-lg font-semibold text-warm-brown mb-4 block">Payment Method</label>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 border border-soft-taupe rounded-lg cursor-pointer hover:bg-warm-beige/30 transition-colors">
                      <CreditCard className="h-5 w-5 text-caramel" />
                      <span className="text-warm-brown">Credit/Debit Card</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 border border-soft-taupe rounded-lg cursor-pointer hover:bg-warm-beige/30 transition-colors">
                      <Smartphone className="h-5 w-5 text-caramel" />
                      <span className="text-warm-brown">UPI/Mobile Wallet</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 border border-soft-taupe rounded-lg cursor-pointer hover:bg-warm-beige/30 transition-colors">
                      <Building className="h-5 w-5 text-caramel" />
                      <span className="text-warm-brown">Net Banking</span>
                    </div>
                  </div>
                </div>

                {/* Donate Button */}
                <Button className="w-full donation-button text-lg py-4">
                  Donate ₹{selectedAmount} {donationType === 'monthly' ? 'Monthly' : 'Now'}
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>

                {/* Security Info */}
                <div className="flex items-center justify-center gap-2 text-sm text-charcoal-gray/60">
                  <Shield className="h-4 w-4" />
                  <span>Secure encrypted payment • 256-bit SSL</span>
                </div>
              </CardContent>
            </Card>

            {/* Why Donate Section */}
            <div className="space-y-8">
              
              {/* Trust Indicators */}
              <Card className="bg-white border-peach-blush shadow-elegant">
                <CardHeader>
                  <CardTitle className="text-2xl font-inter font-bold text-charcoal-gray">
                    Why Choose Us?
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-4">
                    <Shield className="h-6 w-6 text-sage-green mt-1" />
                    <div>
                      <h4 className="font-semibold text-charcoal-gray">Transparent Operations</h4>
                      <p className="text-charcoal-gray/70 text-sm">95% of funds go directly to programs with full financial transparency</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock className="h-6 w-6 text-mauve-purple mt-1" />
                    <div>
                      <h4 className="font-semibold text-charcoal-gray">Proven Impact</h4>
                      <p className="text-charcoal-gray/70 text-sm">10+ years of successfully transforming communities across India</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Users className="h-6 w-6 text-sunset-orange mt-1" />
                    <div>
                      <h4 className="font-semibold text-charcoal-gray">Community-Driven</h4>
                      <p className="text-charcoal-gray/70 text-sm">Programs designed with and for the communities we serve</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Impact Statistics */}
              <Card className="bg-gradient-to-br from-caramel to-golden-cream text-warm-brown border-none shadow-elegant">
                <CardHeader>
                  <CardTitle className="text-2xl font-inter font-bold">
                    Lives Changed So Far
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold mb-1">50,000+</div>
                      <div className="text-warm-brown/80 text-sm">People Helped</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold mb-1">100+</div>
                      <div className="text-warm-brown/80 text-sm">Villages</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold mb-1">5,000+</div>
                      <div className="text-warm-brown/80 text-sm">Children Educated</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold mb-1">25,000+</div>
                      <div className="text-white/80 text-sm">Medical Checkups</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Testimonial */}
              <Card className="bg-white border-peach-blush shadow-elegant">
                <CardContent className="pt-6">
                  <blockquote className="text-lg font-inter italic text-charcoal-gray mb-4">
                    "I've been donating ₹100 monthly for 2 years. Seeing the impact reports and 
                    knowing that my small contribution is part of something bigger gives me immense joy."
                  </blockquote>
                  <cite className="text-mauve-purple font-semibold">- Rakesh Kumar, Regular Donor</cite>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-sage-mist">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-inter font-bold text-charcoal-gray mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-charcoal-gray/80">
              Have questions about donating? We're here to help.
            </p>
          </div>
          
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white border border-peach-blush rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold text-charcoal-gray hover:text-mauve-purple">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-charcoal-gray/80 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Emergency Appeal */}
      <section className="py-16 bg-gradient-to-r from-sunset-orange to-dusty-rose">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-4">
            <Heart className="h-8 w-8 text-white mr-3" />
            <h2 className="text-3xl font-inter font-bold text-white">Emergency: Flood Relief Fund</h2>
          </div>
          <p className="text-xl text-white/90 mb-6">
            Recent floods have affected 1,000+ families. Your immediate support can provide emergency shelter, 
            food, and medical aid to those in desperate need.
          </p>
          <Button className="bg-white text-sunset-orange font-semibold px-8 py-3 text-lg hover:bg-white/90">
            Donate for Emergency Relief
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}

