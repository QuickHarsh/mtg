import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Globe, Leaf, Shield, Users, Award, Sparkles } from 'lucide-react';
import { Button } from '../components/ui/button';
import { productCategories, sustainabilityCertifications, globalStats, howItWorksSteps } from '../data/mockData';

const Home = () => {
  const statsRef = useRef(null);
  const isStatsInView = useInView(statsRef, { once: true });

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F5F3EF] to-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-emerald-50 to-transparent opacity-50" />
        
        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-block mb-4"
              >
                <motion.span 
                  className="text-emerald-600 text-sm font-semibold uppercase tracking-wide bg-emerald-50 px-4 py-2 rounded-full inline-block"
                  animate={{ 
                    boxShadow: ["0 0 0 0 rgba(16, 185, 129, 0)", "0 0 0 10px rgba(16, 185, 129, 0)", "0 0 0 0 rgba(16, 185, 129, 0)"]
                  }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                >
                  Enterprise Sourcing
                </motion.span>
              </motion.div>
              
              <motion.h1 
                className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <motion.span
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  Take Your Craft
                </motion.span>
                <motion.span 
                  className="block text-emerald-600"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  Global.
                </motion.span>
              </motion.h1>
              
              <motion.p 
                className="text-lg text-gray-600 mb-8 leading-relaxed max-w-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
              >
                The world's most sustainable B2B sourcing network. Connect with international verified suppliers seeking for ethical, high-quality production partners.
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.1 }}
              >
                <Link to="/products">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-6 text-lg group relative overflow-hidden">
                      <motion.span
                        className="absolute inset-0 bg-emerald-500"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: 0 }}
                        transition={{ duration: 0.3 }}
                      />
                      <span className="relative z-10 flex items-center">
                        Explore Collections
                        <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                      </span>
                    </Button>
                  </motion.div>
                </Link>
                <Link to="/contact">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button variant="outline" className="border-gray-300 hover:border-emerald-600 hover:text-emerald-600 px-8 py-6 text-lg">
                      Request Consultation
                    </Button>
                  </motion.div>
                </Link>
              </motion.div>
            </div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 50, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
              className="relative"
            >
              <motion.div 
                className="relative rounded-2xl overflow-hidden shadow-2xl"
                animate={{ 
                  y: [0, -10, 0],
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <motion.img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80"
                  alt="Artisan crafting textiles"
                  className="w-full h-[500px] object-cover"
                  initial={{ scale: 1.2 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1.5 }}
                />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
                
                {/* Floating badge */}
                <motion.div 
                  className="absolute bottom-6 left-6 right-6"
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  <motion.div 
                    className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg"
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 1)" }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center space-x-3">
                      <motion.div 
                        className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center"
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      >
                        <Leaf className="text-emerald-600" size={24} />
                      </motion.div>
                      <div>
                        <motion.p 
                          className="font-semibold text-gray-900"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 1 }}
                        >
                          GOTS Certified
                        </motion.p>
                        <motion.p 
                          className="text-sm text-gray-600"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 1.1 }}
                        >
                          100% Sustainable Materials
                        </motion.p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Decorative particles */}
                <motion.div
                  className="absolute top-10 right-10 w-20 h-20 bg-emerald-400/20 rounded-full blur-xl"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div
                  className="absolute bottom-20 right-20 w-16 h-16 bg-blue-400/20 rounded-full blur-xl"
                  animate={{
                    scale: [1, 1.8, 1],
                    opacity: [0.2, 0.5, 0.2],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Export Readiness Section */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: CheckCircle, title: 'Quality Standards', color: 'emerald' },
              { icon: Shield, title: 'Documentation', color: 'blue' },
              { icon: Globe, title: 'Global Network', color: 'purple' },
              { icon: Users, title: 'Verified Suppliers', color: 'orange' }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col items-center text-center p-6 rounded-xl hover:bg-gray-50 transition-colors"
              >
                <div className={`w-14 h-14 bg-${item.color}-100 rounded-full flex items-center justify-center mb-3`}>
                  <item.icon className={`text-${item.color}-600`} size={28} />
                </div>
                <h3 className="font-semibold text-gray-900">{item.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories Grid */}
      <section className="py-20 px-6 bg-gradient-to-b from-white to-[#F5F3EF]">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <motion.h2 
              className="text-4xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                Our Product
              </motion.span>{" "}
              <motion.span
                className="text-emerald-600"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                Collections
              </motion.span>
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              Premium eco-conscious home textiles sourced responsibly and delivered globally
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productCategories.map((category, idx) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  delay: idx * 0.15,
                  duration: 0.6,
                  type: "spring",
                  stiffness: 100
                }}
                className="group"
              >
                <Link to={`/products#${category.id}`}>
                  <motion.div 
                    className="bg-white rounded-2xl overflow-hidden shadow-lg relative"
                    whileHover={{ 
                      y: -12, 
                      scale: 1.02,
                      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                      transition: { duration: 0.3 }
                    }}
                  >
                    <div className="relative h-64 overflow-hidden">
                      <motion.img
                        src={category.image}
                        alt={category.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.15, rotate: 2 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                      />
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent"
                        initial={{ opacity: 0.7 }}
                        whileHover={{ opacity: 0.9 }}
                        transition={{ duration: 0.3 }}
                      />
                      
                      {/* Animated overlay on hover */}
                      <motion.div
                        className="absolute inset-0 bg-emerald-600/20 backdrop-blur-[2px]"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                      
                      <motion.div 
                        className="absolute bottom-4 left-4 right-4"
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: idx * 0.15 + 0.3 }}
                      >
                        <motion.span 
                          className="inline-block bg-emerald-500 text-white text-xs font-semibold px-3 py-1 rounded-full mb-2 shadow-lg"
                          whileHover={{ scale: 1.1, backgroundColor: "#059669" }}
                          transition={{ duration: 0.2 }}
                        >
                          {category.features[0]}
                        </motion.span>
                      </motion.div>

                      {/* Shine effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "100%" }}
                        transition={{ duration: 0.6 }}
                      />
                    </div>
                    
                    <div className="p-6">
                      <motion.h3 
                        className="text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors"
                        initial={{ x: -20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.15 + 0.4 }}
                      >
                        {category.title}
                      </motion.h3>
                      <motion.p 
                        className="text-gray-600 text-sm mb-4"
                        initial={{ x: -20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.15 + 0.5 }}
                      >
                        {category.description}
                      </motion.p>
                      <motion.div 
                        className="flex flex-wrap gap-2"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.15 + 0.6 }}
                      >
                        {category.materials.slice(0, 3).map((material, matIdx) => (
                          <motion.span 
                            key={matIdx} 
                            className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full"
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.15 + 0.7 + matIdx * 0.1 }}
                            whileHover={{ scale: 1.1, backgroundColor: "#D1FAE5", color: "#047857" }}
                          >
                            {material}
                          </motion.span>
                        ))}
                      </motion.div>
                    </div>

                    {/* Corner accent */}
                    <motion.div
                      className="absolute top-0 right-0 w-16 h-16 bg-emerald-500 rounded-bl-full opacity-0 group-hover:opacity-10"
                      initial={{ scale: 0, rotate: 0 }}
                      whileHover={{ scale: 1, rotate: 180 }}
                      transition={{ duration: 0.4 }}
                    />
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/products">
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-6 text-lg">
                View All Products
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-[#F5F3EF] to-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.span 
              className="text-emerald-600 text-sm font-semibold uppercase tracking-wide inline-block"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              Simple & Efficient
            </motion.span>
            <motion.h2 
              className="text-4xl font-bold text-gray-900 mt-4 mb-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              How <motion.span 
                className="text-emerald-600"
                animate={{ 
                  textShadow: ["0 0 0px rgba(16, 185, 129, 0)", "0 0 20px rgba(16, 185, 129, 0.5)", "0 0 0px rgba(16, 185, 129, 0)"]
                }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                MTG
              </motion.span> Works
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              A next-generation B2B marketplace simplifying sustainable sourcing for global trade.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {howItWorksSteps.map((step, idx) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  delay: idx * 0.2,
                  type: "spring",
                  stiffness: 100,
                  damping: 15
                }}
                className="relative"
              >
                <motion.div 
                  className="bg-white rounded-2xl p-8 shadow-lg h-full relative overflow-hidden"
                  whileHover={{ 
                    y: -10,
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Background gradient on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-transparent opacity-0"
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Avatar Area with enhanced animation */}
                  <motion.div 
                    className="w-40 h-40 mx-auto mb-6 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center relative overflow-hidden shadow-lg"
                    animate={{
                      boxShadow: [
                        "0 10px 30px rgba(59, 130, 246, 0.2)",
                        "0 20px 40px rgba(59, 130, 246, 0.3)",
                        "0 10px 30px rgba(59, 130, 246, 0.2)",
                      ]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 5,
                    }}
                  >
                    <motion.img
                      src={`https://images.unsplash.com/photo-${
                        idx === 0 ? '1573496359142-b89e5e5eadb8' : 
                        idx === 1 ? '1560250097-0b93528c311a' : 
                        '1573497019940-1c28c88b4f3e'
                      }?w=400&q=80`}
                      alt={`Step ${step.step}`}
                      className="w-full h-full object-cover"
                      initial={{ scale: 1.2, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.2 + 0.3, duration: 0.8 }}
                    />
                    
                    {/* Badge with pulse animation */}
                    <motion.div 
                      className="absolute bottom-2 left-2 bg-white px-3 py-1 rounded-full shadow-md flex items-center space-x-1"
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.2 + 0.5, type: "spring" }}
                      animate={{
                        y: [0, -3, 0],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <CheckCircle className="text-emerald-600" size={14} />
                      <span className="text-xs font-semibold text-gray-800">{step.badge}</span>
                    </motion.div>

                    {/* Rotating ring */}
                    <motion.div
                      className="absolute inset-0 border-4 border-emerald-400/30 rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    />
                  </motion.div>

                  {/* Step Number with bounce */}
                  <motion.div 
                    className="w-12 h-12 bg-emerald-500 text-white rounded-xl flex items-center justify-center mx-auto mb-4 font-bold text-xl shadow-lg relative z-10"
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.2 + 0.6, type: "spring", stiffness: 200 }}
                    whileHover={{ 
                      scale: 1.2,
                      rotate: 360,
                      backgroundColor: "#059669"
                    }}
                  >
                    {step.step}
                  </motion.div>

                  <motion.h3 
                    className="text-xl font-bold text-gray-900 mb-3 text-center relative z-10"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.2 + 0.7 }}
                  >
                    {step.title}
                  </motion.h3>
                  <motion.p 
                    className="text-gray-600 text-center text-sm leading-relaxed relative z-10"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.2 + 0.8 }}
                  >
                    {step.description}
                  </motion.p>

                  {/* Decorative corner element */}
                  <motion.div
                    className="absolute -bottom-10 -right-10 w-32 h-32 bg-emerald-500/5 rounded-full"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 0.8, 0.5],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: idx * 0.5
                    }}
                  />
                </motion.div>

                {/* Connector Line with animation */}
                {idx < howItWorksSteps.length - 1 && (
                  <motion.div 
                    className="hidden md:block absolute top-20 -right-4 w-8 h-0.5 bg-emerald-200 z-20"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.2 + 1, duration: 0.6 }}
                  >
                    <motion.div
                      className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-emerald-500 rounded-full"
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [1, 0.5, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                    />
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link to="/contact">
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-10 py-6 text-lg rounded-full shadow-lg">
                Start Your Sourcing Journey
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
            <p className="text-sm text-gray-500 mt-4">
              • No commitment required for initial consultation
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sustainability Highlight */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <motion.h2 
              className="text-4xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              <motion.span
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                style={{
                  backgroundImage: "linear-gradient(90deg, #111827, #10b981, #111827)",
                  backgroundSize: "200% 100%",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
                transition={{ duration: 5, repeat: Infinity }}
              >
                Built on Responsible Sourcing
              </motion.span>
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Every product meets rigorous environmental and ethical standards
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sustainabilityCertifications.map((cert, idx) => {
              const icons = {
                leaf: Leaf,
                droplets: Sparkles,
                users: Users,
                globe: Globe
              };
              const Icon = icons[cert.icon];

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30, scale: 0.8 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ 
                    delay: idx * 0.15,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ 
                    y: -10,
                    scale: 1.05,
                  }}
                  className="text-center p-6 rounded-xl hover:bg-emerald-50 transition-colors relative overflow-hidden group"
                >
                  {/* Animated background circle */}
                  <motion.div
                    className="absolute inset-0 bg-emerald-100 rounded-xl opacity-0 group-hover:opacity-100"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    transition={{ duration: 0.4 }}
                  />

                  <motion.div 
                    className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10"
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    whileHover={{
                      scale: 1.2,
                      rotate: 180,
                      transition: { duration: 0.4 }
                    }}
                  >
                    <Icon className="text-emerald-600" size={32} />
                  </motion.div>
                  
                  <motion.h3 
                    className="font-bold text-gray-900 mb-2 relative z-10"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.15 + 0.3 }}
                  >
                    {cert.title}
                  </motion.h3>
                  <motion.p 
                    className="text-sm text-gray-600 relative z-10"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.15 + 0.4 }}
                  >
                    {cert.description}
                  </motion.p>

                  {/* Sparkle effect on hover */}
                  <motion.div
                    className="absolute top-2 right-2 w-2 h-2 bg-emerald-400 rounded-full opacity-0 group-hover:opacity-100"
                    animate={{
                      scale: [0, 1, 0],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: idx * 0.3
                    }}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Global Stats */}
      <section ref={statsRef} className="py-20 px-6 bg-gradient-to-br from-gray-900 via-gray-800 to-emerald-900 text-white relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10">
          <motion.div 
            className="absolute top-0 left-0 w-96 h-96 bg-emerald-500 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 50, 0],
              y: [0, 30, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              x: [0, -50, 0],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}

        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <motion.h2 
              className="text-4xl font-bold mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              Our Global Footprint
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-300 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              We connect verified suppliers from 45+ countries to top-tier international retailers
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {globalStats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.3, y: 50 }}
                animate={isStatsInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                transition={{ 
                  delay: idx * 0.15, 
                  duration: 0.6,
                  type: "spring",
                  stiffness: 100
                }}
                className="text-center relative group"
              >
                {/* Background glow */}
                <motion.div
                  className="absolute inset-0 bg-emerald-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100"
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />

                <motion.div
                  className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
                  whileHover={{ 
                    scale: 1.05,
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div 
                    className="text-5xl font-bold text-emerald-400 mb-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isStatsInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: idx * 0.15 + 0.3 }}
                  >
                    <motion.span
                      animate={{
                        textShadow: [
                          "0 0 10px rgba(52, 211, 153, 0.5)",
                          "0 0 20px rgba(52, 211, 153, 0.8)",
                          "0 0 10px rgba(52, 211, 153, 0.5)",
                        ]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      {stat.value}
                    </motion.span>
                  </motion.div>
                  <motion.div 
                    className="text-gray-300 font-medium"
                    initial={{ opacity: 0 }}
                    animate={isStatsInView ? { opacity: 1 } : {}}
                    transition={{ delay: idx * 0.15 + 0.5 }}
                  >
                    {stat.label}
                  </motion.div>

                  {/* Animated border */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl border-2 border-emerald-400/0 group-hover:border-emerald-400/50"
                    animate={{
                      borderRadius: ["16px", "20px", "16px"],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 bg-gradient-to-b from-[#F5F3EF] to-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-3xl p-12 md:p-16 text-center text-white shadow-2xl relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20" />
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Let's Build Responsible Supply Together
              </h2>
              <p className="text-xl text-emerald-50 mb-8 max-w-2xl mx-auto">
                Join leading retailers and brands partnering with verified sustainable suppliers
              </p>
              <Link to="/contact">
                <Button className="bg-white text-emerald-600 hover:bg-gray-100 px-10 py-6 text-lg font-semibold shadow-xl">
                  Request Partnership Discussion
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
