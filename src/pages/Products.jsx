import React from 'react';
import { motion } from 'framer-motion';
import { productCategories } from '../data/mockData';
import { CheckCircle, Package, Award, Truck } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';

const Products = () => {
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
              Product Collections
            </span>
            <h1 className="text-5xl font-bold text-gray-900 mt-4 mb-6">
              Eco-Conscious Home Products for Global Markets
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Premium sustainable products sourced from verified artisans and manufacturers worldwide
            </p>
          </motion.div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-12 px-6">
        <div className="container mx-auto">
          {productCategories.map((category, idx) => (
            <motion.div
              key={category.id}
              id={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`mb-20 ${idx % 2 === 0 ? '' : 'md:flex-row-reverse'}`}
            >
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${idx % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}>
                {/* Image */}
                <div className={`${idx % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="w-full h-[400px] object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
                    <div className="absolute top-4 right-4">
                      <span className="bg-emerald-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        {category.features[0]}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`${idx % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="inline-block mb-3">
                    <span className="text-emerald-600 text-sm font-semibold uppercase tracking-wide bg-emerald-50 px-4 py-2 rounded-full">
                      Category {idx + 1}
                    </span>
                  </div>
                  <h2 className="text-4xl font-bold text-gray-900 mb-4">
                    {category.title}
                  </h2>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {category.description}
                  </p>

                  {/* Materials */}
                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">
                      Available Materials
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {category.materials.map((material, idx) => (
                        <span
                          key={idx}
                          className="bg-white border border-emerald-200 text-emerald-700 px-4 py-2 rounded-lg text-sm font-medium"
                        >
                          {material}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-8">
                    <h3 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">
                      Key Features
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {category.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="text-emerald-600 flex-shrink-0" size={18} />
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link to="/contact">
                    <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
                      Request Quote for {category.title}
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Wholesale Features */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Wholesale & Customization Options
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Flexible ordering and customization capabilities for retail and hospitality partners
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Package,
                title: 'Bulk Orders',
                description: 'Minimum order quantities starting from 50 units per SKU',
                color: 'blue'
              },
              {
                icon: Award,
                title: 'Private Label',
                description: 'Custom branding and packaging for your retail brand',
                color: 'purple'
              },
              {
                icon: CheckCircle,
                title: 'Custom Development',
                description: 'Product development support for unique specifications',
                color: 'emerald'
              },
              {
                icon: Truck,
                title: 'Global Logistics',
                description: 'Worldwide shipping with tracking and compliance documentation',
                color: 'orange'
              }
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className={`w-14 h-14 bg-${feature.color}-100 rounded-xl flex items-center justify-center mb-4`}>
                  <feature.icon className={`text-${feature.color}-600`} size={28} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-[#F5F3EF] to-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-3xl p-12 text-center text-white shadow-2xl"
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Source Premium Products?
            </h2>
            <p className="text-xl text-emerald-50 mb-8 max-w-2xl mx-auto">
              Request a detailed product catalog and pricing information tailored to your requirements
            </p>
            <Link to="/contact">
              <Button className="bg-white text-emerald-600 hover:bg-gray-100 px-10 py-6 text-lg font-semibold">
                Request Product Catalog
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Products;
