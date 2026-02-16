import React from 'react';
import { motion } from 'framer-motion';
import { Globe, MapPin, Truck, Shield, Award, TrendingUp } from 'lucide-react';
import { sourcingRegions } from '../data/mockData';

const GlobalNetwork = () => {
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
              Global Network
            </span>
            <h1 className="text-5xl font-bold text-gray-900 mt-4 mb-6">
              Worldwide Sourcing Expertise
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Decades of international trade experience connecting verified suppliers across continents with retailers worldwide
            </p>
          </motion.div>
        </div>
      </section>

      {/* World Map Visual */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-12 shadow-2xl overflow-hidden"
          >
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 left-10 w-64 h-64 bg-emerald-500 rounded-full blur-3xl" />
              <div className="absolute bottom-10 right-10 w-64 h-64 bg-blue-500 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10">
              <h2 className="text-4xl font-bold text-white text-center mb-8">
                Our Global Footprint
              </h2>
              
              {/* World map placeholder */}
              <div className="relative h-96 flex items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=1200&q=80"
                  alt="Global network map"
                  className="w-full h-full object-contain opacity-60"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <Globe className="w-24 h-24 text-emerald-400 mx-auto mb-4 animate-pulse" />
                    <p className="text-2xl font-bold text-white">45+ Countries</p>
                    <p className="text-emerald-300">Connected Globally</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
                {[
                  { label: 'Sourcing Regions', value: '15+' },
                  { label: 'Export Markets', value: '45+' },
                  { label: 'Logistics Partners', value: '30+' },
                  { label: 'Years Experience', value: '25+' }
                ].map((stat, idx) => (
                  <div key={idx} className="text-center">
                    <div className="text-4xl font-bold text-emerald-400 mb-1">
                      {stat.value}
                    </div>
                    <div className="text-gray-300 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sourcing Regions */}
      <section className="py-20 px-6 bg-gradient-to-b from-white to-[#F5F3EF]">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Primary Sourcing Regions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Strategic partnerships across key textile manufacturing regions worldwide
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sourcingRegions.map((region, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-emerald-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{region.name}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      <span className="font-semibold text-emerald-600">Specialty:</span> {region.speciality}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trade Capabilities */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              International Trade Expertise
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive capabilities ensuring smooth cross-border transactions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Truck,
                title: 'Global Logistics',
                description: 'Partnerships with major freight forwarders enabling door-to-door delivery worldwide with real-time tracking.',
                color: 'blue'
              },
              {
                icon: Shield,
                title: 'Customs & Compliance',
                description: 'Expert navigation of international regulations, tariffs, and documentation requirements for seamless imports.',
                color: 'emerald'
              },
              {
                icon: Award,
                title: 'Quality Assurance',
                description: 'Multi-stage inspection protocols at origin, during production, and pre-shipment to ensure consistency.',
                color: 'purple'
              },
              {
                icon: Globe,
                title: 'Multi-Currency Support',
                description: 'Flexible payment terms with support for major international currencies and secure transaction processing.',
                color: 'orange'
              },
              {
                icon: TrendingUp,
                title: 'Market Intelligence',
                description: 'Regular updates on regional trends, material availability, and pricing to inform sourcing decisions.',
                color: 'indigo'
              },
              {
                icon: MapPin,
                title: 'On-Ground Presence',
                description: 'Local teams in key sourcing regions providing oversight, communication, and problem resolution.',
                color: 'red'
              }
            ].map((capability, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className={`w-14 h-14 bg-${capability.color}-100 rounded-xl flex items-center justify-center mb-4`}>
                  <capability.icon className={`text-${capability.color}-600`} size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{capability.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{capability.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Export Process */}
      <section className="py-20 px-6 bg-gradient-to-b from-[#F5F3EF] to-white">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Export Process
            </h2>
            <p className="text-lg text-gray-600">
              Streamlined workflow ensuring reliability and transparency
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                step: 'Order Confirmation',
                description: 'Detailed specifications, pricing, and delivery timeline confirmation with complete documentation'
              },
              {
                step: 'Production Oversight',
                description: 'Regular factory visits and progress updates ensuring adherence to specifications and quality standards'
              },
              {
                step: 'Quality Inspection',
                description: 'Independent third-party inspection prior to shipment with detailed quality reports'
              },
              {
                step: 'Export Documentation',
                description: 'Complete preparation of commercial invoices, packing lists, certificates of origin, and compliance documents'
              },
              {
                step: 'Logistics Coordination',
                description: 'Booking, tracking, and management of international freight with real-time status updates'
              },
              {
                step: 'Customs Clearance',
                description: 'Assistance with import documentation and customs procedures at destination'
              }
            ].map((process, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-start space-x-4 bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="w-10 h-10 bg-emerald-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                  {idx + 1}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{process.step}</h3>
                  <p className="text-gray-600 text-sm">{process.description}</p>
                </div>
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
            <Globe className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-6">
              Ready to Source Globally?
            </h2>
            <p className="text-xl text-emerald-50 mb-8 max-w-2xl mx-auto">
              Connect with our international trade team to discuss your sourcing requirements
            </p>
            <button className="bg-white text-emerald-600 hover:bg-gray-100 px-10 py-4 rounded-lg font-semibold text-lg transition-colors shadow-lg">
              Start Global Sourcing
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default GlobalNetwork;
