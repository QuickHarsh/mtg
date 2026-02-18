import React from 'react';
import { motion } from 'framer-motion';
import { Globe as GlobeIcon, MapPin, Truck, Shield, Award, TrendingUp } from 'lucide-react';
import { sourcingRegions } from '../data/mockData';

import { WorldMap } from '../components/ui/world-map';

const GlobalNetwork = () => {
  // Manually map lat/long to approximate x/y on a 1000x500 svg grid
  // Equirectangular projection: x = (lon + 180) * (1000 / 360), y = (90 - lat) * (500 / 180)
  const mapDots = sourcingRegions
    .filter(region => region.location)
    .map(region => {
      const lat = region.location[0];
      const lon = region.location[1];
      const x = (lon + 180) * (1000 / 360);
      const y = (90 - lat) * (500 / 180);
      return { x, y, label: region.name };
    });

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
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative bg-[#0B1121] rounded-3xl p-4 md:p-12 shadow-2xl overflow-hidden border border-gray-800"
          >

            <div className="relative z-10">
              <h2 className="text-4xl font-bold text-white text-center mb-8">
                Our Global Footprint
              </h2>

              {/* World map placeholder */}
              <div className="relative flex items-center justify-center">
                <WorldMap dots={mapDots} />

              </div>


            </div>
          </motion.div>
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
                icon: GlobeIcon,
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
            <GlobeIcon className="w-16 h-16 mx-auto mb-6" />
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
