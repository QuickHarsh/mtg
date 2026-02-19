import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Droplets, Users, Shield, Award, Heart, Recycle, CheckCircle } from 'lucide-react';

const Sustainability = () => {
  const certifications = [
    {
      title: 'GOTS Certification',
      description: 'Global Organic Textile Standard certification ensures all organic materials meet stringent environmental and social criteria throughout the entire supply chain.',
      icon: Leaf,
      color: 'emerald',
      details: [
        'Organic fiber content verification',
        'Prohibited substances testing',
        'Environmental management compliance',
        'Social criteria adherence'
      ]
    },
    {
      title: 'Natural Dye Processes',
      description: 'We prioritize plant-based and mineral dyes that eliminate toxic chemicals while producing rich, lasting colors.',
      icon: Droplets,
      color: 'blue',
      details: [
        'Zero synthetic chemical dyes',
        'Plant and mineral based colorants',
        'Water conservation practices',
        'Biodegradable dye processes'
      ]
    },
    {
      title: 'Ethical Artisan Partnerships',
      description: 'Direct collaboration with craft communities ensures fair wages, safe working conditions, and preservation of traditional techniques.',
      icon: Users,
      color: 'purple',
      details: [
        'Fair Trade certified partnerships',
        'Safe working environments',
        'Skills training programs',
        'Community development initiatives'
      ]
    },
    {
      title: 'Traceable Supply Chains',
      description: 'Complete transparency from fiber cultivation to finished product, with documented verification at every stage.',
      icon: Shield,
      color: 'orange',
      details: [
        'Fiber origin documentation',
        'Production facility audits',
        'Transport documentation',
        'Third-party verification'
      ]
    }
  ];

  const environmentalImpact = [
    {
      metric: '0%',
      label: 'Virgin Plastics',
      description: 'All packaging uses recycled or biodegradable materials'
    },
    {
      metric: '-42%',
      label: 'Carbon Footprint',
      description: 'Reduced emissions compared to conventional production methods'
    },
    {
      metric: '100%',
      label: 'Renewable Energy',
      description: 'Partner facilities powered by solar and wind energy'
    },
    {
      metric: '2.4k+',
      label: 'Artisans Supported',
      description: 'Fair wage employment across global partnerships'
    }
  ];

  const sustainablePractices = [
    {
      title: 'Responsible Fiber Sourcing',
      icon: Recycle,
      description: 'We source only organic, recycled, or sustainably harvested natural fibers including organic cotton, linen, hemp, and Tencel.',
      color: 'emerald'
    },
    {
      title: 'Water Conservation',
      icon: Droplets,
      description: 'Advanced water recycling systems and natural dyeing processes reduce water consumption by up to 90% compared to conventional methods.',
      color: 'blue'
    },
    {
      title: 'Energy Efficiency',
      icon: Award,
      description: 'Partner facilities utilize renewable energy sources and energy-efficient machinery to minimize carbon footprint.',
      color: 'amber'
    },
    {
      title: 'Waste Reduction',
      icon: Recycle,
      description: 'Zero-waste production goals with fabric scraps recycled into new products or composted when organic.',
      color: 'emerald'
    },
    {
      title: 'Fair Labor Standards',
      icon: Heart,
      description: 'All production partners undergo regular audits to ensure fair wages, reasonable hours, and safe working conditions.',
      color: 'red'
    },
    {
      title: 'Biodiversity Protection',
      icon: Leaf,
      description: 'Organic farming practices protect soil health, prevent chemical runoff, and support ecosystem biodiversity.',
      color: 'green'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F5F3EF] to-white">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="text-emerald-600 text-sm font-semibold uppercase tracking-wide">
              Sustainability & Certifications
            </span>
            <h1 className="text-5xl font-bold text-gray-900 mt-4 mb-6">
              Environmental Authority Through Action
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Our commitment to sustainability is not a marketing claim - it is a structured, measurable framework embedded in every aspect of our operations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Certifications Grid */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Certifications & Standards
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Verified compliance with international environmental and social standards
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {certifications.map((cert, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className={`w-16 h-16 bg-${cert.color}-100 rounded-xl flex items-center justify-center mb-6`}>
                  <cert.icon className={`text-${cert.color}-600`} size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{cert.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{cert.description}</p>
                <div className="space-y-2">
                  {cert.details.map((detail, idx) => (
                    <div key={idx} className="flex items-start space-x-2">
                      <CheckCircle className="text-emerald-600 flex-shrink-0 mt-0.5" size={16} />
                      <span className="text-sm text-gray-700">{detail}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Environmental Impact Metrics */}
      <section className="py-20 px-6 bg-gradient-to-br from-emerald-600 to-emerald-700 text-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Measurable Environmental Impact</h2>
            <p className="text-xl text-emerald-50 max-w-2xl mx-auto">
              Transparent metrics demonstrating our commitment to sustainable practices
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {environmentalImpact.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300"
              >
                <div className="text-5xl font-bold text-white mb-2">
                  {item.metric}
                </div>
                <div className="text-emerald-100 font-semibold mb-2 uppercase tracking-wide text-sm">
                  {item.label}
                </div>
                <p className="text-emerald-50 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainable Practices */}
      <section className="py-20 px-6 bg-gradient-to-b from-white to-[#F5F3EF]">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Sustainability Practices
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Every stage of production reflects our commitment to environmental responsibility
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sustainablePractices.map((practice, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-14 h-14 bg-${practice.color}-100 rounded-xl flex items-center justify-center mb-4`}>
                  <practice.icon className={`text-${practice.color}-600`} size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{practice.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{practice.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Traceability Section */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Supply Chain Traceability
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Complete transparency from fiber to finished product ensures accountability and builds trust with our partners.
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                step: 'Fiber Origin',
                description: 'Documentation of organic certification and farm location for all natural fibers'
              },
              {
                step: 'Manufacturing',
                description: 'Facility audits, worker safety records, and environmental compliance verification'
              },
              {
                step: 'Processing & Dyeing',
                description: 'Chemical usage logs, water treatment records, and natural dye verification'
              },
              {
                step: 'Quality Control',
                description: 'Independent testing for prohibited substances and quality benchmarks'
              },
              {
                step: 'Logistics & Delivery',
                description: 'Carbon-neutral shipping options with complete chain of custody documentation'
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-start space-x-4 bg-gradient-to-r from-emerald-50 to-transparent rounded-xl p-6"
              >
                <div className="w-10 h-10 bg-emerald-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                  {idx + 1}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{item.step}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment Statement */}
      <section className="py-20 px-6 bg-gradient-to-b from-[#F5F3EF] to-white">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-900 to-emerald-900 rounded-3xl p-12 text-white text-center shadow-2xl"
          >
            <h2 className="text-4xl font-bold mb-6">
              Our Promise to Future Generations
            </h2>
            <p className="text-xl text-gray-100 leading-relaxed">
              We recognize that true sustainability requires constant improvement. Our commitment extends beyond current certifications to ongoing research, innovation, and investment in practices that restore and protect our planet's resources for generations to come.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Sustainability;
