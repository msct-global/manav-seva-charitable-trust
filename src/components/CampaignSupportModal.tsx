'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { CreditCard, MessageCircle, Banknote, X } from 'lucide-react';
import Link from 'next/link';

interface CampaignSupportModalProps {
  isOpen: boolean;
  onClose: () => void;
  campaignName: string;
  campaignId: string;
  targetAmount: number;
  currentAmount: number;
  whatsappNumber: string;
}

export default function CampaignSupportModal({
  isOpen,
  onClose,
  campaignName,
  campaignId,
  targetAmount,
  currentAmount,
  whatsappNumber,
}: CampaignSupportModalProps) {
  const [step, setStep] = useState<'main' | 'donate' | 'donate-qr' | 'whatsapp' | 'bank'>('main');
  const [selectedAmount, setSelectedAmount] = useState(500);

  const predefinedAmounts = [100, 500, 1000, 5000, 10000];
  const progressPct = (currentAmount / targetAmount) * 100;
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hi! I want to support the ${campaignName} campaign. Can you help me with donation options?`;
  const bankDetails = {
    accountName: 'Manav Seva Charitable Trust',
    accountNumber: '43848735873',
    ifsc: 'SBIN0001533',
    upi: 'manavseva2025@sbi',
  };

  const renderMainStep = () => (
    <div className="space-y-6">
      {/* Campaign Info */}
      <div className="bg-gradient-to-r from-sage-mist to-peach-blush p-4 rounded-lg">
        <h3 className="font-semibold text-charcoal-gray mb-2">{campaignName}</h3>
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Progress</span>
            <span className="font-bold text-sage-green">{Math.round(progressPct)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              className="h-full bg-gradient-to-r from-sage-green to-mauve-purple rounded-full"
              style={{ width: `${progressPct}%` }}
            ></div>
          </div>
          <div className="flex justify-between text-xs text-charcoal-gray/70">
            <span>₹{currentAmount.toLocaleString()}</span>
            <span>₹{targetAmount.toLocaleString()}</span>
          </div>
        </div>
      </div>

      {/* Options */}
      <div className="space-y-3">
        <p className="text-sm font-semibold text-sunset-orange drop-shadow-sm">Choose your way to support:</p>

        {/* Option A: Donate Online */}
        <Card
          onClick={() => setStep('donate')}
          className="p-4 border-2 border-caramel hover:border-caramel hover:bg-cream cursor-pointer transition-all"
        >
          <div className="flex items-center gap-3">
            <CreditCard className="h-6 w-6 text-caramel" />
            <div>
              <h4 className="font-semibold text-charcoal-gray">Donate Online</h4>
              <p className="text-sm text-charcoal-gray/70">Quick and secure payment</p>
            </div>
          </div>
        </Card>

        {/* Option B: Chat on WhatsApp */}
        <Card
          onClick={() => setStep('whatsapp')}
          className="p-4 border-2 border-sage-green hover:border-sage-green hover:bg-sage-mist cursor-pointer transition-all"
        >
          <div className="flex items-center gap-3">
            <MessageCircle className="h-6 w-6 text-sage-green" />
            <div>
              <h4 className="font-semibold text-charcoal-gray">Chat on WhatsApp</h4>
              <p className="text-sm text-charcoal-gray/70">Get personal guidance</p>
            </div>
          </div>
        </Card>

        {/* Option C: Bank Transfer */}
        <Card
          onClick={() => setStep('bank')}
          className="p-4 border-2 border-mauve-purple hover:border-mauve-purple hover:bg-white cursor-pointer transition-all"
        >
          <div className="flex items-center gap-3">
            <Banknote className="h-6 w-6 text-mauve-purple" />
            <div>
              <h4 className="font-semibold text-charcoal-gray">Bank Transfer</h4>
              <p className="text-sm text-charcoal-gray/70">Direct fund transfer</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );

  const renderDonateStep = () => (
    <div className="space-y-6">
      <p className="text-sm text-charcoal-gray/80">Select donation amount for {campaignName}</p>

      {/* Predefined Amounts */}
      <div className="grid grid-cols-2 gap-3">
        {predefinedAmounts.map((amount) => (
          <Button
            key={amount}
            onClick={() => setSelectedAmount(amount)}
            variant={selectedAmount === amount ? 'default' : 'outline'}
            className={`py-3 ${
              selectedAmount === amount
                ? 'bg-sage-green text-white'
                : 'border-sage-green text-sage-green hover:bg-sage-mist'
            }`}
          >
            ₹{amount}
          </Button>
        ))}
      </div>

      {/* Custom Amount */}
      <div>
        <label className="text-sm font-medium text-charcoal-gray">Custom Amount</label>
        <input
          type="number"
          value={selectedAmount}
          onChange={(e) => setSelectedAmount(Number(e.target.value))}
          className="w-full mt-2 p-3 border border-caramel rounded-lg text-charcoal-gray placeholder-charcoal-gray/50"
          placeholder="Enter custom amount"
        />
      </div>

      {/* Amount Display */}
      <div className="bg-sage-mist p-4 rounded-lg text-center">
        <p className="text-sm text-charcoal-gray/70">Amount to donate</p>
        <p className="text-3xl font-bold text-sage-green">₹{selectedAmount.toLocaleString()}</p>
      </div>

      {/* Action Buttons */}
      <div className="space-y-2">
        <Button
          onClick={() => setStep('donate-qr')}
          className="w-full bg-sage-green text-white py-3 hover:bg-sage-green/90"
        >
          Scan QR Code
        </Button>
        <Button
          onClick={() => setStep('main')}
          variant="outline"
          className="w-full border-charcoal-gray/20"
        >
          Back
        </Button>
      </div>
    </div>
  );

  const renderDonateQRStep = () => (
    <div className="space-y-6">
      <p className="text-sm font-semibold text-sunset-orange drop-shadow-sm">Scan QR code to donate ₹{selectedAmount.toLocaleString()}</p>

      {/* QR Code Display - No Background */}
      <div className="flex flex-col items-center justify-center py-4">
        <Image
          src="/qr.png"
          alt="Payment QR Code"
          width={280}
          height={280}
          priority
          className="rounded-lg"
        />
      </div>

      {/* Instructions */}
      <div className="bg-peach-blush/30 p-4 rounded-lg border border-caramel/30">
        <p className="text-sm text-charcoal-gray leading-relaxed">
          <strong>How to donate:</strong>
          <br/>
          1. Open your payment app (Google Pay, PhonePe, etc.)
          <br/>
          2. Scan this QR code
          <br/>
          3. Enter amount: ₹{selectedAmount}
          <br/>
          4. Complete the transaction
        </p>
      </div>

      {/* Action Buttons */}
      <div className="space-y-2">
        <Button
          onClick={() => setStep('donate')}
          variant="outline"
          className="w-full border-charcoal-gray/20"
        >
          Change Amount
        </Button>
        <Button
          onClick={() => setStep('main')}
          variant="outline"
          className="w-full border-charcoal-gray/20"
        >
          Back to Menu
        </Button>
      </div>
    </div>
  );

  const renderWhatsAppStep = () => (
    <div className="space-y-6">
      <div className="bg-sage-mist p-4 rounded-lg">
        <p className="text-charcoal-gray text-sm leading-relaxed">
          Connect with our team on WhatsApp to discuss:
        </p>
        <ul className="mt-3 space-y-2 text-sm text-charcoal-gray">
          <li>✓ Custom donation amounts</li>
          <li>✓ Recurring donation options</li>
          <li>✓ Corporate partnerships</li>
          <li>✓ Donation updates and impact</li>
        </ul>
      </div>

      <div className="space-y-2">
        <Link href={whatsappLink} target="_blank">
          <Button className="w-full bg-green-500 text-white py-3 hover:bg-green-600">
            💬 Open WhatsApp
          </Button>
        </Link>
        <Button
          onClick={() => setStep('main')}
          variant="outline"
          className="w-full border-charcoal-gray/20"
        >
          Back
        </Button>
      </div>
    </div>
  );

  const renderBankStep = () => (
    <div className="space-y-6">
      <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
        <p className="text-yellow-800 text-sm font-medium">Bank Transfer Details</p>
      </div>

      <div className="space-y-3 text-sm">
        <div className="bg-white p-3 rounded-lg border border-charcoal-gray/20">
          <p className="text-charcoal-gray/70">Account Holder</p>
          <p className="font-semibold text-charcoal-gray">{bankDetails.accountName}</p>
        </div>

        <div className="bg-white p-3 rounded-lg border border-charcoal-gray/20">
          <p className="text-charcoal-gray/70">Account Number</p>
          <p className="font-semibold text-charcoal-gray">{bankDetails.accountNumber}</p>
        </div>

        <div className="bg-white p-3 rounded-lg border border-charcoal-gray/20">
          <p className="text-charcoal-gray/70">IFSC Code</p>
          <p className="font-semibold text-charcoal-gray">{bankDetails.ifsc}</p>
        </div>

        <div className="bg-white p-3 rounded-lg border border-charcoal-gray/20">
          <p className="text-charcoal-gray/70">UPI ID</p>
          <p className="font-semibold text-charcoal-gray">{bankDetails.upi}</p>
        </div>
      </div>

      <p className="text-xs text-charcoal-gray/70 text-center">
        Please mention "Aspire Mobility" in the transfer reference
      </p>

      <Button
        onClick={() => setStep('main')}
        variant="outline"
        className="w-full border-charcoal-gray/20"
      >
        Back
      </Button>
    </div>
  );

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md bg-transparent backdrop-blur-xl border border-white/20 shadow-2xl" style={{ backdropFilter: 'blur(20px) saturate(180%)' }}>
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-sunset-orange drop-shadow-lg">
            {step === 'main' && '❤️ Support Campaign'}
            {step === 'donate' && '💳 Donate Online'}
            {step === 'whatsapp' && '💬 WhatsApp Chat'}
            {step === 'bank' && '🏦 Bank Transfer'}
          </DialogTitle>
          <DialogDescription className="text-sunset-orange font-semibold drop-shadow-md">
            {campaignName}
          </DialogDescription>
        </DialogHeader>

        <div className="mt-6">
          {step === 'main' && renderMainStep()}
          {step === 'donate' && renderDonateStep()}
          {step === 'donate-qr' && renderDonateQRStep()}
          {step === 'whatsapp' && renderWhatsAppStep()}
          {step === 'bank' && renderBankStep()}
        </div>
      </DialogContent>
    </Dialog>
  );
}
