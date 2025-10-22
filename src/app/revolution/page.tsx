import Navigation from '@/components/Navigation';
import RupeeRevolutionSection from '@/components/RupeeRevolutionSection';
import Footer from '@/components/Footer';

export const metadata = {
  title: '₹1 Revolution | Manav Seva Charitable Trust',
  description: 'Join the ₹1 Revolution - where every rupee creates lasting change. Donate just ₹1 and be part of our mission.',
};

export default function Revolution() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <RupeeRevolutionSection />
      </main>
      <Footer />
    </div>
  );
}

