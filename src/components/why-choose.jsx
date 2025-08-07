import React from 'react';
import FeatureCard from './ui/card';
import { ShieldCheck, Globe, Zap, Gavel, Headset, BadgeCheck } from 'lucide-react';

const WhyChooseSection = () => {
  const features = [
    {
      icon: <ShieldCheck size={20} />,
      title: 'Bank-Level Security',
      description: 'Enjoy the security of a bank, combined with the ease of online payments.',
    },
    {
      icon: <Globe size={20} />,
      title: 'Global Reach',
      description: 'Support for multiple currencies and international transactions.',
    },
    {
      icon: <Zap size={20} />,
      title: 'Fast Transactions',
      description: 'Quick processing times with automated systems for efficient transfers.',
    },
    {
      icon: <Gavel size={20} />,
      title: 'Dispute Resolution',
      description: 'Fair and efficient dispute resolution processes with expert mediators.',
    },
    {
      icon: <Headset size={20} />,
      title: '24/7 Support',
      description: 'Round-the-clock customer support to help you with any questions or issues.',
    },
    {
      icon: <BadgeCheck size={20} />,
      title: 'Verified Users',
      description: 'All users go through our KYC process to ensure safe transactions.',
    },
  ];

  return (
    <section className=" py-16 px-4 md:px-8" id="features">
      <div className="max-w-8xl mx-auto text-center space-y-6">
        <h2 className="text-2xl md:text-4xl font-bold text-white">Why Choose HoldBridge?</h2>
        <p className="text-white/70 max-w-2xl mx-auto text-sm md:text-base">
          Every transaction follows a clear path—funds are safely held, work gets delivered,
          payments are released. No risks, no drama.
        </p>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-10">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
