'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Heart, Check, Users, Award, Zap, ChevronRight, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import AspireConsultationForm from '@/components/AspireConsultationForm';

const steps = [
  { num: 1, title: 'Consultation', desc: 'Understanding medical history and needs', icon: '💬' },
  { num: 2, title: 'Measurement', desc: 'Precise casting for perfect fit', icon: '📏' },
  { num: 3, title: 'Fabrication', desc: 'Custom prosthetic with carbon fiber', icon: '🔧' },
  { num: 4, title: 'Gait Training', desc: 'Learn to walk confidently again', icon: '🚶' },
];

const benefits = [
  { icon: <Check className="h-6 w-6" />, title: 'Expert Team', desc: 'Experienced prosthetist & rehab specialists' },
  { icon: <Zap className="h-6 w-6" />, title: 'Advanced Materials', desc: 'Carbon fiber & modern alignment tech' },
  { icon: <Heart className="h-6 w-6" />, title: 'Patient-First', desc: 'Customized approach for each person' },
  { icon: <Award className="h-6 w-6" />, title: 'Lifetime Support', desc: 'Regular follow-ups and repairs' },
];

export default function AspireMobilityPage() {
  const [donationType, setDonationType] = useState('one-time');
  const [progress] = useState({ current: 32500, target: 50000 });
  const [showConsultationForm, setShowConsultationForm] = useState(false);

  const progressPct = (progress.current / progress.target) * 100;

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="relative">
        {/* Partnership Banner */}
        <section className="py-16 bg-gradient-to-r from-vanilla-cream via-white to-peach-blush border-b-4 border-caramel">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-center gap-12">
              {/* MSCT Logo - Large and Prominent */}
              <div className="flex flex-col items-center gap-4">
                <Image
                  src="/msct_logo2.png"
                  alt="MSCT Logo"
                  width={140}
                  height={140}
                  className="drop-shadow-lg"
                  priority
                />
                <div className="text-center">
                  <h1 className="text-3xl md:text-4xl font-bold text-warm-brown">
                    Manav Seva
                  </h1>
                  <p className="text-xl font-semibold text-caramel">
                    Charitable Trust
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div className="hidden md:flex flex-col items-center gap-2">
                <div className="w-1 h-16 bg-caramel/30 rounded-full"></div>
                <span className="text-caramel font-bold text-lg">×</span>
                <div className="w-1 h-16 bg-caramel/30 rounded-full"></div>
              </div>

              {/* Partnership Section - Smaller */}
              <div className="flex flex-col items-center gap-6 md:border-l-2 md:border-caramel/20 md:pl-12">
                {/* Partnership Label */}
                <div className="text-center space-y-1">
                  <p className="text-sm font-semibold text-mauve-purple uppercase tracking-wide">
                    In Partnership With
                  </p>
                  <h2 className="text-2xl md:text-3xl font-bold text-warm-brown">
                    Aspire Mobility Clinic
                  </h2>
                  <p className="text-sm text-charcoal-gray/70 font-medium">
                    Expert Prosthetic Solutions
                  </p>
                </div>

                {/* Prosthetic Icon */}
                <Image
                  src="/prosthetic-leg.png"
                  alt="Prosthetic Leg"
                  width={100}
                  height={150}
                  className="drop-shadow-lg"
                />
              </div>
            </div>

            {/* Mission Statement Below */}
            <div className="mt-12 pt-8 border-t border-caramel/20 text-center max-w-2xl mx-auto">
              <p className="text-charcoal-gray/80 leading-relaxed">
                Together, we're making quality prosthetic solutions accessible to everyone,
                regardless of their financial capacity. Through this partnership, we provide
                expert care at 70% below market rate.
              </p>
            </div>
          </div>
        </section>

        {/* Hero */}
        <section className="py-32 bg-gradient-to-r from-vanilla-cream to-peach-blush">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
            {/* Main Tagline - Blended Concept */}
            <div className="space-y-4">
              <p className="text-3xl md:text-4xl text-mauve-purple font-semibold italic">
                "नयी ज़िंदगी बस एक कदम दूर है"
              </p>
              <p className="text-xl md:text-2xl text-warm-brown/80 font-medium">
                Every small step, every small contribution
              </p>
              <p className="text-lg md:text-xl text-caramel font-semibold">
                <span className="block">✦ Chota Yogdan, Badi Udaan ✦</span>
                <span className="text-charcoal-gray/70 mt-2 block">Small Contribution. Big Dreams.</span>
              </p>
            </div>

            {/* MSCT Mission Integration */}
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-caramel/20">
              <p className="text-charcoal-gray/90 leading-relaxed mb-6">
                At Manav Seva Charitable Trust, we believe that compassion knows no boundaries.
                Through the Aspire Mobility partnership, we extend healthcare beyond limits.
              </p>
              <p className="text-xl md:text-2xl font-bold text-warm-brown mb-4">
                <span className="block mb-3">Give Steps, Give Hope</span>
                <span className="text-caramel text-lg">✦ Seva Jo Seemaon Se Pare ✦</span>
              </p>
              <p className="text-charcoal-gray/80 font-medium">
                Service Beyond Boundaries
              </p>
            </div>

            {/* Core Message */}
            <div className="space-y-6">
              <p className="text-lg md:text-xl text-warm-brown/90 font-medium">
                Prosthetics at <span className="text-caramel font-bold text-2xl">70% below market rate</span>
              </p>

              {/* Highlighted Message - Elegant Text Shadow */}
              <p className="text-lg md:text-2xl text-sage-green font-serif italic font-light leading-relaxed" style={{ textShadow: '0 2px 6px rgba(92, 82, 72, 0.12)' }}>
                Because every person deserves the chance to walk with dignity and independence
              </p>
            </div>
          </div>
        </section>

        {/* About */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-vanilla-cream to-golden-cream rounded-2xl p-12">
              <h2 className="text-4xl font-bold text-charcoal-gray mb-6">About Aspire Mobility</h2>
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <p className="text-lg text-charcoal-gray/80">
                    Aspire Clinic provides custom-fit below-knee prosthetic solutions helping people return to daily life quickly and safely.
                  </p>
                  <div className="space-y-3">
                    <div className="flex gap-3">
                      <div className="text-2xl">✓</div>
                      <div>
                        <h4 className="font-bold text-charcoal-gray">Customized Design</h4>
                        <p className="text-charcoal-gray/70">Tailored to your body and lifestyle needs</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="text-2xl">✓</div>
                      <div>
                        <h4 className="font-bold text-charcoal-gray">Advanced Materials</h4>
                        <p className="text-charcoal-gray/70">Carbon fiber socket and foot with stainless steel pylon</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="text-2xl">✓</div>
                      <div>
                        <h4 className="font-bold text-charcoal-gray">Complete Support</h4>
                        <p className="text-charcoal-gray/70">Training, repairs, and lifetime follow-up care</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-8 shadow-elegant">
                  <h3 className="text-2xl font-bold text-charcoal-gray mb-4">Cost Breakdown</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center pb-3 border-b">
                      <span className="text-charcoal-gray/70">Market Rate:</span>
                      <span className="text-lg font-bold text-gray-400 line-through">₹150,000+</span>
                    </div>
                    <div className="flex justify-between items-center pb-3 border-b">
                      <span className="font-semibold text-charcoal-gray">Aspire Clinic Price:</span>
                      <span className="text-3xl font-bold text-green-600">₹50,000</span>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg mt-4">
                      <p className="text-green-700 font-semibold">You Save: ₹100,000+ (67%)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Large Prosthetic Image Section */}
        <section className="py-20 bg-gradient-to-br from-peach-blush to-golden-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="flex justify-center">
                <Image
                  src="/prosthetic-leg.png"
                  alt="Aspire Mobility Prosthetic"
                  width={400}
                  height={600}
                  className="drop-shadow-2xl hover:scale-105 transition-transform duration-300"
                  priority
                />
              </div>
              <div className="space-y-6">
                <h2 className="text-4xl font-bold text-charcoal-gray">Advanced Prosthetic Technology</h2>
                <p className="text-lg text-charcoal-gray/80">
                  Our prosthetics combine advanced materials with expert craftsmanship to give you mobility, comfort, and confidence.
                </p>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="text-3xl flex-shrink-0">🏆</div>
                    <div>
                      <h3 className="font-bold text-charcoal-gray">Carbon Fiber Socket</h3>
                      <p className="text-charcoal-gray/70">Lightweight yet durable for all-day comfort</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="text-3xl flex-shrink-0">⚙️</div>
                    <div>
                      <h3 className="font-bold text-charcoal-gray">Stainless Steel Pylon</h3>
                      <p className="text-charcoal-gray/70">Strong, reliable, and built to last</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="text-3xl flex-shrink-0">👣</div>
                    <div>
                      <h3 className="font-bold text-charcoal-gray">Advanced Foot Design</h3>
                      <p className="text-charcoal-gray/70">Natural gait and movement pattern</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Dual Pathway */}
        <section className="py-20 bg-sage-mist">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-charcoal-gray text-center mb-12">Choose Your Way</h2>
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Direct Purchase */}
              <Card className="bg-white border-2 border-mauve-purple shadow-elegant">
                <CardHeader>
                  <h3 className="text-3xl font-bold text-charcoal-gray">💳 Direct Purchase</h3>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-charcoal-gray/80">For someone ready to get a prosthetic now</p>
                  <ul className="space-y-3">
                    {[
                      { text: 'Immediate consultation', emoji: '✨' },
                      { text: 'Customized fitting', emoji: '🎯' },
                      { text: 'Professional training', emoji: '👣' },
                      { text: 'Lifetime support', emoji: '💪' }
                    ].map((item, i) => (
                      <li key={i} className="flex gap-3">
                        <span className="text-xl flex-shrink-0">{item.emoji}</span>
                        <span className="text-charcoal-gray">{item.text}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    onClick={() => setShowConsultationForm(true)}
                    className="w-full bg-mauve-purple text-white py-3 text-lg hover:bg-mauve-purple/90"
                  >
                    Ready to Walk Again?
                  </Button>
                  <p className="text-sm text-charcoal-gray/70">Fill the form and chat with us on WhatsApp</p>
                </CardContent>
              </Card>

              {/* Fundraising */}
              <Card className="bg-white border-2 border-sage-green shadow-elegant">
                <CardHeader>
                  <h3 className="text-3xl font-bold text-charcoal-gray">❤️ Fundraising Campaign</h3>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-charcoal-gray/80">Help via community-driven fundraising</p>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="font-semibold">Campaign Progress</span>
                      <span className="text-2xl font-bold text-green-600">{Math.round(progressPct)}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-4">
                      <div className="h-full bg-gradient-to-r from-mauve-purple to-sage-green" style={{ width: `${progressPct}%` }}></div>
                    </div>
                    <div className="flex justify-between text-sm text-charcoal-gray/70">
                      <span>₹{progress.current.toLocaleString()}</span>
                      <span>₹{progress.target.toLocaleString()}</span>
                    </div>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <p className="text-green-700 font-semibold">Lives Helped: 5+</p>
                  </div>
                  <Button className="w-full bg-sage-green text-white py-3 text-lg hover:bg-sage-green/90">
                    Support Campaign
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* 4-Step Process */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-charcoal-gray text-center mb-12">Your Journey</h2>
            <div className="grid md:grid-cols-4 gap-8">
              {steps.map((step, i) => (
                <div key={i} className="text-center">
                  <div className="text-6xl mb-4">{step.icon}</div>
                  <h3 className="text-2xl font-bold text-charcoal-gray mb-2">Step {step.num}</h3>
                  <h4 className="text-lg font-semibold text-mauve-purple mb-2">{step.title}</h4>
                  <p className="text-charcoal-gray/70">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Information Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Tagline */}
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-4xl font-bold text-charcoal-gray italic">
                "नयी ज़िंदगी बस एक कदम दूर है"
              </h2>
              <p className="text-xl text-charcoal-gray/80">
                "New Life is Just One Step Away"
              </p>
            </div>

            {/* Key Message */}
            <Card className="bg-gradient-to-r from-vanilla-cream to-peach-blush border-2 border-caramel mb-12">
              <CardContent className="pt-8 space-y-6">
                <div className="space-y-4">
                  <p className="text-lg text-charcoal-gray leading-relaxed">
                    अगर आप या आपका कोई जानने वाला नीचे से पैर खो चुका है...
                    तो ये चलने का अंत नहीं, बल्कि Aspire के साथ एक नई शुरुआत है।
                  </p>
                  <p className="text-lg text-charcoal-gray leading-relaxed">
                    Aspire Clinic में, हम लोगों को फिर से आत्मविश्वास और आराम के
                    साथ चलना सिखाते हैं। हमारे व्यक्तिगत रूप से बनाए गए घुटने के नीचे
                    के कृत्रिम पैरों के नीचे के कृत्रिमों के अपने हर कदम को सहज और संतुलित बनाते हैं
                    – ताकि आप जी सकें "जीवन बिना सीमाओं के"।
                  </p>
                </div>

                {/* Key Features */}
                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-charcoal-gray flex items-center gap-2">
                      <span className="text-2xl">👨‍⚕️</span>संवेदनशील और अनुभवी टीम
                    </h3>
                    <p className="text-charcoal-gray/70">
                      Experienced prosthetist & rehab team
                    </p>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-charcoal-gray flex items-center gap-2">
                      <span className="text-2xl">🎯</span>विशेषज्ञ द्वारा फिटिंग और ट्रेनिंग
                    </h3>
                    <p className="text-charcoal-gray/70">
                      Advanced materials and alignment techniques
                    </p>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-charcoal-gray flex items-center gap-2">
                      <span className="text-2xl">🤝</span>नए मरीजों और परिवारों के लिए पूरी सहायता
                    </h3>
                    <p className="text-charcoal-gray/70">
                      Patient-first approach
                    </p>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-charcoal-gray flex items-center gap-2">
                      <span className="text-2xl">⚙️</span>आधुनिक और हल्के कार्बन फाइबर क्रिम/नकली पैर
                    </h3>
                    <p className="text-charcoal-gray/70">
                      Support through every step of recovery
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* The Process - Detailed */}
            <div className="mb-16">
              <h3 className="text-3xl font-bold text-charcoal-gray mb-12 text-center">
                एक समाधान ~ एक कीमत ~ एक दिन
              </h3>
              <p className="text-center text-lg text-charcoal-gray/80 mb-12">
                One Solution ~ One Price ~ One Day (Complete Process)
              </p>

              <div className="grid md:grid-cols-4 gap-6">
                <Card className="bg-white border-l-4 border-l-mauve-purple">
                  <CardContent className="pt-6">
                    <h4 className="text-xl font-bold text-charcoal-gray mb-4">परामर्श</h4>
                    <h5 className="font-semibold text-mauve-purple mb-3">Consultation</h5>
                    <p className="text-charcoal-gray/70 text-sm">
                      Our specialist understands your medical history, amputation level, and lifestyle needs.
                    </p>
                    <p className="text-charcoal-gray/70 text-sm mt-3">
                      हमारा विशेषज्ञ आपकी स्थिति, सर्जरी और जीवनशैली को समझकर सही समाधान सुझाता है।
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white border-l-4 border-l-caramel">
                  <CardContent className="pt-6">
                    <h4 className="text-xl font-bold text-charcoal-gray mb-4">माप और कास्टिंग</h4>
                    <h5 className="font-semibold text-caramel mb-3">Measurement & Casting</h5>
                    <p className="text-charcoal-gray/70 text-sm">
                      Precise measurement and casting of your limb to ensure a perfect fit.
                    </p>
                    <p className="text-charcoal-gray/70 text-sm mt-3">
                      आपके पैर का सटीक माप और कास्ट लिया जाता है ताकि फिटिंग बिल्कुल सही हो।
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white border-l-4 border-l-warm-brown">
                  <CardContent className="pt-6">
                    <h4 className="text-xl font-bold text-charcoal-gray mb-4">निर्माण और फिटिंग</h4>
                    <h5 className="font-semibold text-warm-brown mb-3">Fabrication & Fitting</h5>
                    <p className="text-charcoal-gray/70 text-sm">
                      We design and build your customized below-knee prosthesis using high quality components.
                    </p>
                    <p className="text-charcoal-gray/70 text-sm mt-3">
                      आपके लिए व्यक्तिगत रूप से बनाया गया प्रोस्थेटिक तैयार किया जाता है।
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white border-l-4 border-l-sage-green">
                  <CardContent className="pt-6">
                    <h4 className="text-xl font-bold text-charcoal-gray mb-4">प्रशिक्षण</h4>
                    <h5 className="font-semibold text-sage-green mb-3">Gait Training & Follow-Up</h5>
                    <p className="text-charcoal-gray/70 text-sm">
                      We help you learn to walk confidently again and provide regular follow-ups for adjustments.
                    </p>
                    <p className="text-charcoal-gray/70 text-sm mt-3">
                      हम आपको आत्मविश्वास के साथ चलना सिखाते हैं और नियमित फॉलो-अप करते हैं।
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Components */}
            <Card className="bg-gradient-to-r from-gray-50 to-blue-50 border-2 border-gray-200">
              <CardHeader>
                <CardTitle className="text-3xl text-charcoal-gray text-center">
                  उच्च गुणवत्ता वाले घटक
                </CardTitle>
                <p className="text-center text-charcoal-gray/70 mt-2">Premium Quality Components</p>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="text-center space-y-2">
                    <div className="text-4xl mb-3">🎯</div>
                    <h4 className="font-bold text-charcoal-gray">कार्बन फाइबर सॉकेट</h4>
                    <p className="text-sm text-charcoal-gray/70">Carbon Fiber Socket</p>
                    <p className="text-xs text-charcoal-gray/60">Lightweight & Durable</p>
                  </div>
                  <div className="text-center space-y-2">
                    <div className="text-4xl mb-3">👣</div>
                    <h4 className="font-bold text-charcoal-gray">कार्बन फाइबर पैर</h4>
                    <p className="text-sm text-charcoal-gray/70">Carbon Fiber Foot + Shell</p>
                    <p className="text-xs text-charcoal-gray/60">Natural Walking</p>
                  </div>
                  <div className="text-center space-y-2">
                    <div className="text-4xl mb-3">⚙️</div>
                    <h4 className="font-bold text-charcoal-gray">स्टेनलेस स्टील पाइलन</h4>
                    <p className="text-sm text-charcoal-gray/70">Stainless Steel Pylon</p>
                    <p className="text-xs text-charcoal-gray/60">Strong & Reliable</p>
                  </div>
                  <div className="text-center space-y-2">
                    <div className="text-4xl mb-3">🔒</div>
                    <h4 className="font-bold text-charcoal-gray">लॉकिंग एडेप्टर</h4>
                    <p className="text-sm text-charcoal-gray/70">Locking Adaptor</p>
                    <p className="text-xs text-charcoal-gray/60">Secure Connection</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Why Aspire */}
        <section className="py-20 bg-sage-mist">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-charcoal-gray text-center mb-12">Why Choose Aspire?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((b, i) => (
                <Card key={i} className="bg-white text-center">
                  <CardContent className="pt-8 space-y-4">
                    <div className="flex justify-center text-mauve-purple">{b.icon}</div>
                    <h3 className="text-xl font-bold text-charcoal-gray">{b.title}</h3>
                    <p className="text-charcoal-gray/70">{b.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Footer */}
        <section className="py-20 bg-gradient-to-r from-caramel to-golden-cream">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-warm-brown mb-6">
              ₹50,000 for Life-Changing Independence
            </h2>
            <p className="text-xl text-warm-brown/90 mb-8">
              Someone in your city is waiting. Help them take their first step toward independence.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-white text-warm-brown font-semibold px-8 py-3 text-lg hover:bg-white/90">
                Support Campaign
              </Button>
              <Link href="/projects">
                <Button className="border-2 border-warm-brown text-warm-brown bg-transparent px-8 py-3 text-lg hover:bg-warm-brown/10">
                  View All Projects
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Consultation Form Modal */}
        {showConsultationForm && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
              <div className="sticky top-0 bg-white border-b p-4 flex items-center justify-between">
                <h2 className="text-xl font-bold text-warm-brown">Patient Consultation Form</h2>
                <button
                  onClick={() => setShowConsultationForm(false)}
                  className="text-charcoal-gray/70 hover:text-charcoal-gray"
                >
                  ✕
                </button>
              </div>
              <div className="p-6">
                <AspireConsultationForm />
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
