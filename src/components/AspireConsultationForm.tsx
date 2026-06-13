'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageCircle, Upload, CheckCircle } from 'lucide-react';

export default function AspireConsultationForm() {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    age: '',
    phone: '',
    gender: '',
    amputationLevel: '',
    amputationCause: '',
    medicalHistory: '',
    lifestyle: '',
    photo: null as File | null,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setFormData(prev => ({ ...prev, photo: e.target.files![0] }));
    }
  };

  const handleNext = () => {
    if (step < 4) setStep(step + 1);
  };

  const handleSubmit = async () => {
    // Log form data
    console.log('Patient Details:', formData);

    // Open WhatsApp
    const whatsappPhone = '7976892938';
    const message = `Hi! I'm interested in Aspire Mobility Clinic's prosthetic services. My details:\n\nName: ${formData.fullName}\nAge: ${formData.age}\nPhone: ${formData.phone}\nGender: ${formData.gender}\n\nAmputation Level: ${formData.amputationLevel}\nCause: ${formData.amputationCause}\n\nI've submitted my complete details through your form.`;

    window.open(`https://wa.me/${whatsappPhone}?text=${encodeURIComponent(message)}`, '_blank');
    setSubmitted(true);
  };

  const steps = [
    {
      title: 'Personal Information',
      icon: '👤',
      fields: ['fullName', 'age', 'phone', 'gender']
    },
    {
      title: 'Amputation Details',
      icon: '📋',
      fields: ['amputationLevel', 'amputationCause']
    },
    {
      title: 'Medical History',
      icon: '🏥',
      fields: ['medicalHistory']
    },
    {
      title: 'Lifestyle & Photo',
      icon: '📸',
      fields: ['lifestyle', 'photo']
    }
  ];

  if (submitted) {
    return (
      <Card className="bg-gradient-to-r from-sage-green/10 to-golden-cream/10 border-2 border-sage-green">
        <CardContent className="py-12 text-center space-y-4">
          <CheckCircle className="h-16 w-16 text-sage-green mx-auto" />
          <h3 className="text-2xl font-bold text-warm-brown">Thank You!</h3>
          <p className="text-charcoal-gray/80">Your details have been submitted. Our team will contact you shortly via WhatsApp.</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-white shadow-elegant">
      <CardHeader>
        <CardTitle className="text-2xl text-center">Ready to Walk Again?</CardTitle>
        <p className="text-center text-charcoal-gray/70 mt-2">Step {step + 1} of {steps.length}: {steps[step].title}</p>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="text-4xl text-center">{steps[step].icon}</div>
        
        {/* Step Content */}
        {step === 0 && (
          <div className="space-y-4">
            <input type="text" name="fullName" placeholder="Full Name" className="w-full p-3 border rounded-lg" onChange={handleInputChange} />
            <input type="number" name="age" placeholder="Age" className="w-full p-3 border rounded-lg" onChange={handleInputChange} />
            <input type="tel" name="phone" placeholder="Phone Number" className="w-full p-3 border rounded-lg" onChange={handleInputChange} />
            <select name="gender" className="w-full p-3 border rounded-lg" onChange={handleInputChange}>
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
        )}

        {step === 1 && (
          <div className="space-y-4">
            <select name="amputationLevel" className="w-full p-3 border rounded-lg" onChange={handleInputChange}>
              <option value="">Select Amputation Level</option>
              <option value="Below Knee">Below Knee</option>
              <option value="Above Knee">Above Knee</option>
              <option value="Partial Foot">Partial Foot</option>
            </select>
            <textarea name="amputationCause" placeholder="What caused the amputation?" className="w-full p-3 border rounded-lg" onChange={handleInputChange} />
          </div>
        )}

        {step === 2 && (
          <textarea name="medicalHistory" placeholder="Any existing medical conditions or allergies?" className="w-full p-3 border rounded-lg h-32" onChange={handleInputChange} />
        )}

        {step === 3 && (
          <div className="space-y-4">
            <textarea name="lifestyle" placeholder="Describe your lifestyle (work, activities, mobility goals)" className="w-full p-3 border rounded-lg h-24" onChange={handleInputChange} />
            <div className="border-2 border-dashed border-caramel rounded-lg p-6 text-center">
              <Upload className="h-8 w-8 mx-auto text-caramel mb-2" />
              <label className="block cursor-pointer">
                <span className="text-caramel font-semibold">Upload Your Photo</span>
                <input type="file" name="photo" accept="image/*" className="hidden" onChange={handlePhotoUpload} />
              </label>
              {formData.photo && <p className="text-sm text-green-600 mt-2">✓ Photo selected: {formData.photo.name}</p>}
            </div>
          </div>
        )}

        {/* Navigation */}
        <div className="flex gap-4 mt-8">
          {step > 0 && (
            <Button onClick={() => setStep(step - 1)} className="flex-1 bg-gray-400 text-white">
              Back
            </Button>
          )}
          {step < steps.length - 1 ? (
            <Button onClick={handleNext} className="flex-1 bg-mauve-purple text-white">
              Next
            </Button>
          ) : (
            <Button onClick={handleSubmit} className="flex-1 bg-sage-green text-white flex items-center justify-center gap-2">
              <MessageCircle className="h-5 w-5" />
              Continue on WhatsApp
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
