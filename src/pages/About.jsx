import React from 'react';
import { motion } from 'framer-motion';
import { Award, Target, Heart, Globe, Shield, Users } from 'lucide-react';

const About = () => {
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
              About Meridian Trade Global
            </span>
            <h1 className="text-5xl font-bold text-gray-900 mt-4 mb-6">
              Building Bridges Between Craftsmanship and Global Commerce
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              We are a premium sourcing and distribution partner specializing in eco-conscious home products, connecting artisanal craftsmanship with international retail markets.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl p-8"
            >
              <div className="w-16 h-16 bg-emerald-600 rounded-xl flex items-center justify-center mb-6">
                <Target className="text-white" size={32} />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-700 leading-relaxed">
                To transform global product sourcing by combining environmental responsibility with exceptional quality, creating sustainable value chains that empower artisans and serve discerning retailers worldwide.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8"
            >
              <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                <Globe className="text-white" size={32} />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-gray-700 leading-relaxed">
                To become the world's most trusted platform for sustainable product sourcing, where every transaction advances environmental stewardship and supports ethical craftsmanship across global supply chains.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-white to-[#F5F3EF]">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide every decision and partnership
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: 'Ethical Sourcing',
                description: 'We partner only with suppliers who demonstrate fair labor practices, safe working conditions, and respect for artisan communities.',
                color: 'red'
              },
              {
                icon: Shield,
                title: 'Quality Assurance',
                description: 'Every product undergoes rigorous quality control, ensuring consistency and excellence across all orders.',
                color: 'blue'
              },
              {
                icon: Users,
                title: 'Partnership Focus',
                description: 'We build long-term relationships based on mutual growth, transparency, and shared commitment to sustainability.',
                color: 'purple'
              },
              {
                icon: Globe,
                title: 'Global Expertise',
                description: 'Decades of international trade experience, navigating complex logistics and compliance requirements seamlessly.',
                color: 'emerald'
              },
              {
                icon: Award,
                title: 'Excellence',
                description: 'Uncompromising standards in product quality, customer service, and operational reliability.',
                color: 'amber'
              },
              {
                icon: Target,
                title: 'Innovation',
                description: 'Continuously advancing sustainable practices and exploring new materials and techniques.',
                color: 'indigo'
              }
            ].map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-14 h-14 bg-${value.color}-100 rounded-xl flex items-center justify-center mb-4`}>
                  <value.icon className={`text-${value.color}-600`} size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Ethical Sourcing Philosophy
            </h2>
          </motion.div>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-start space-x-4"
            >
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-emerald-600 font-bold text-lg">1</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Transparent Supply Chains</h3>
                <p className="text-gray-600 leading-relaxed">
                  Complete visibility from fiber cultivation to finished product, ensuring accountability at every stage of production.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex items-start space-x-4"
            >
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-emerald-600 font-bold text-lg">2</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Artisan Empowerment</h3>
                <p className="text-gray-600 leading-relaxed">
                  We work directly with craft communities, ensuring fair compensation and supporting traditional techniques that preserve cultural heritage.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex items-start space-x-4"
            >
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-emerald-600 font-bold text-lg">3</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Environmental Stewardship</h3>
                <p className="text-gray-600 leading-relaxed">
                  Prioritizing organic fibers, natural dyes, and low-impact production methods that minimize environmental footprint.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex items-start space-x-4"
            >
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-emerald-600 font-bold text-lg">4</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Quality Control Standards</h3>
                <p className="text-gray-600 leading-relaxed">
                  Rigorous testing and inspection protocols that guarantee consistency and meet international quality benchmarks.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-emerald-600 to-emerald-700 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Commitment to Responsible Growth
            </h2>
            <p className="text-xl text-emerald-50 leading-relaxed mb-8">
              We believe that business success and environmental responsibility are not mutually exclusive. Every partnership we form, every product we source, and every transaction we facilitate is designed to create positive impact for our partners, for artisan communities, and for the planet.
            </p>
            <p className="text-lg text-emerald-100 leading-relaxed">
              This is not just our business model. It is our commitment to future generations.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
