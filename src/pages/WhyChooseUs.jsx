import React from 'react';
import { motion } from 'framer-motion';
import { whyChooseUs } from '../data/mockData';
import { CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';

const WhyChooseUs = () => {
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
              Why Meridian Trade Global
            </span>
            <h1 className="text-5xl font-bold text-gray-900 mt-4 mb-6">
              Your Strategic Partner in Sustainable Sourcing
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Combining boutique-level attention with global trade capability to deliver exceptional results
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Differentiators */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, idx) => {
              const iconMap = {
                award: require('lucide-react').Award,
                globe: require('lucide-react').Globe,
                'shield-check': require('lucide-react').ShieldCheck,
                handshake: require('lucide-react').Handshake,
                clock: require('lucide-react').Clock,
                sparkles: require('lucide-react').Sparkles
              };
              const Icon = iconMap[item.icon];

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="text-emerald-600" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-white to-[#F5F3EF]">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              The Meridian Advantage
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              What sets us apart from traditional sourcing agents and mass exporters
            </p>
          </motion.div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200">
              {/* Traditional Agents Column */}
              <div className="p-8">
                <h3 className="text-lg font-bold text-gray-500 mb-6 text-center">
                  Traditional Agents
                </h3>
                <ul className="space-y-4">
                  {[
                    'Limited sustainability focus',
                    'Minimal quality oversight',
                    'Transaction-based relationships',
                    'Basic documentation only',
                    'Limited product development'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-3 text-gray-500">
                      <span className="text-gray-400 mt-1">•</span>
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Meridian Column - Highlighted */}
              <div className="p-8 bg-gradient-to-br from-emerald-50 to-emerald-100">
                <h3 className="text-lg font-bold text-emerald-600 mb-6 text-center flex items-center justify-center">
                  Meridian Trade Global
                  <CheckCircle className="ml-2" size={20} />
                </h3>
                <ul className="space-y-4">
                  {[
                    'Sustainability at core',
                    'Multi-stage quality control',
                    'Long-term partnerships',
                    'Comprehensive compliance',
                    'Full custom development'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-3 text-emerald-900">
                      <CheckCircle className="text-emerald-600 flex-shrink-0 mt-0.5" size={18} />
                      <span className="text-sm font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Mass Exporters Column */}
              <div className="p-8">
                <h3 className="text-lg font-bold text-gray-500 mb-6 text-center">
                  Mass Exporters
                </h3>
                <ul className="space-y-4">
                  {[
                    'Volume over quality',
                    'Minimal customization',
                    'Impersonal service',
                    'Generic certifications',
                    'Limited communication'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-3 text-gray-500">
                      <span className="text-gray-400 mt-1">•</span>
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Factors */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Makes Partnerships Successful
            </h2>
            <p className="text-lg text-gray-600">
              Key factors that define our collaborative approach
            </p>
          </motion.div>

          <div className="space-y-8">
            {[
              {
                title: 'Transparent Communication',
                description: 'Regular updates, proactive problem-solving, and dedicated account management ensuring you always know the status of your orders.'
              },
              {
                title: 'Flexible Minimums',
                description: 'Scalable order quantities that grow with your business, from initial sampling to full production runs.'
              },
              {
                title: 'Technical Support',
                description: 'Expert guidance on material selection, production techniques, and product development to bring your vision to life.'
              },
              {
                title: 'Predictable Timelines',
                description: 'Realistic scheduling with buffer time built in, ensuring on-time delivery without cutting corners on quality.'
              },
              {
                title: 'Competitive Pricing',
                description: 'Fair pricing that reflects true quality and sustainability costs, without hidden fees or surprise charges.'
              },
              {
                title: 'After-Sales Support',
                description: 'Ongoing support for warranty claims, reorders, and product modifications based on market feedback.'
              }
            ].map((factor, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-start space-x-4 bg-gradient-to-r from-emerald-50 to-transparent rounded-xl p-6"
              >
                <div className="w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm">
                  {idx + 1}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{factor.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{factor.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ideal Partner Profile */}
      <section className="py-20 px-6 bg-gradient-to-b from-[#F5F3EF] to-white">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Who We Work Best With
            </h2>
            <p className="text-lg text-gray-600">
              Our ideal partners share our values and vision
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              'Sustainability-focused retailers seeking verified eco-products',
              'Boutique brands requiring custom development support',
              'Hospitality groups needing consistent bulk supply',
              'Interior designers sourcing artisanal textiles',
              'E-commerce brands launching sustainable lines',
              'Corporate buyers prioritizing ethical sourcing'
            ].map((profile, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-center space-x-3 bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300"
              >
                <CheckCircle className="text-emerald-600 flex-shrink-0" size={24} />
                <span className="text-gray-800 font-medium">{profile}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-3xl p-12 text-center text-white shadow-2xl"
          >
            <h2 className="text-4xl font-bold mb-6">
              Experience the Meridian Difference
            </h2>
            <p className="text-xl text-emerald-50 mb-8 max-w-2xl mx-auto">
              Join leading brands that trust Meridian Trade Global for sustainable textile sourcing
            </p>
            <Link to="/contact">
              <Button className="bg-white text-emerald-600 hover:bg-gray-100 px-10 py-6 text-lg font-semibold shadow-xl">
                Start a Partnership Conversation
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default WhyChooseUs;
