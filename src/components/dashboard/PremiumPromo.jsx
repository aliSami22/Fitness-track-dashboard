
import React from 'react';
import { Button } from '@/components/ui/button';

const PremiumPromo = () => {
  return (
    <div className="relative mt-6 p-6 rounded-2xl bg-gradient-to-br from-purple-600 via-indigo-700 to-blue-700 text-white shadow-2xl shadow-black/30 overflow-hidden">
      <div className="relative z-10">
        <h4 className="text-xl font-semibold">Unlock Your Full Potential!</h4>
        <p className="text-sm opacity-80 mt-1 mb-4">Get 50% off on Premium Membership for advanced tracking, personalized plans, and more.</p>
        <Button variant="secondary" size="lg" className="bg-white/95 hover:bg-white text-purple-700 font-semibold shadow-md transition-all hover:shadow-lg">
          Upgrade to Premium
        </Button>
      </div>
      <div className="absolute -bottom-8 -right-8 w-32 h-32 md:w-40 md:h-40 z-0">
        <img  class="opacity-20 transform rotate-12" alt="Fitness dumbbell illustration" src="https://images.unsplash.com/photo-1602457470974-de8e6cb2f6dd" />
      </div>
    </div>
  );
};

export default PremiumPromo;
  