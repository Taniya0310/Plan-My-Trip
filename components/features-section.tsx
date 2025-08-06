"use client"

import { motion } from "framer-motion"
import { MapPin, DollarSign, Cloud, Route, Languages, Backpack, Shield, Calendar } from "lucide-react"
import Link from "next/link"

const features = [
  {
    id: 1,
    icon: MapPin,
    title: "Smart Trip Planner",
    description: "AI-powered itineraries tailored to your preferences and budget",
    gradient: "from-blue-700 to-blue-900",
    bgGradient: "from-blue-200 to-blue-300",
    darkBgGradient: "from-blue-900/50 to-blue-800/50",
    textColor: "text-blue-900 dark:text-blue-100",
    borderColor: "border-blue-400 dark:border-blue-500",
    href: "/features/smart-trip-planner",
  },
  {
    id: 2,
    icon: DollarSign,
    title: "Real-time Budget Estimator",
    description: "Track expenses and get accurate cost predictions for your trip",
    gradient: "from-emerald-700 to-emerald-900",
    bgGradient: "from-emerald-200 to-emerald-300",
    darkBgGradient: "from-emerald-900/50 to-emerald-800/50",
    textColor: "text-emerald-900 dark:text-emerald-100",
    borderColor: "border-emerald-400 dark:border-emerald-500",
    href: "/features/budget-estimator",
  },
  {
    id: 3,
    icon: Cloud,
    title: "Weather Analyzer",
    description: "Get detailed weather forecasts and packing recommendations",
    gradient: "from-cyan-700 to-cyan-900",
    bgGradient: "from-cyan-200 to-cyan-300",
    darkBgGradient: "from-cyan-900/50 to-cyan-800/50",
    textColor: "text-cyan-900 dark:text-cyan-100",
    borderColor: "border-cyan-400 dark:border-cyan-500",
    href: "/features/weather-analyzer",
  },
  {
    id: 4,
    icon: Route,
    title: "Route Optimizer",
    description: "Find the most efficient routes and transportation options",
    gradient: "from-purple-700 to-purple-900",
    bgGradient: "from-purple-200 to-purple-300",
    darkBgGradient: "from-purple-900/50 to-purple-800/50",
    textColor: "text-purple-900 dark:text-purple-100",
    borderColor: "border-purple-400 dark:border-purple-500",
    href: "/features/route-optimizer",
  },
  {
    id: 5,
    icon: Languages,
    title: "Language Converter",
    description: "Instant translation and local phrase suggestions for any destination",
    gradient: "from-orange-700 to-orange-900",
    bgGradient: "from-orange-200 to-orange-300",
    darkBgGradient: "from-orange-900/50 to-orange-800/50",
    textColor: "text-orange-900 dark:text-orange-100",
    borderColor: "border-orange-400 dark:border-orange-500",
    href: "/features/language-converter",
  },
  {
    id: 6,
    icon: Backpack,
    title: "Packing Assistant",
    description: "Smart packing lists based on destination, weather, and activities",
    gradient: "from-teal-700 to-teal-900",
    bgGradient: "from-teal-200 to-teal-300",
    darkBgGradient: "from-teal-900/50 to-teal-800/50",
    textColor: "text-teal-900 dark:text-teal-100",
    borderColor: "border-teal-400 dark:border-teal-500",
    href: "/features/packing-assistant",
  },
  {
    id: 7,
    icon: Shield,
    title: "Emergency Help",
    description: "24/7 support with local emergency contacts and safety information",
    gradient: "from-red-700 to-red-900",
    bgGradient: "from-red-200 to-red-300",
    darkBgGradient: "from-red-900/50 to-red-800/50",
    textColor: "text-red-900 dark:text-red-100",
    borderColor: "border-red-400 dark:border-red-500",
    href: "/features/emergency-help",
  },
  {
    id: 8,
    icon: Calendar,
    title: "Event Discovery",
    description: "Find local events, festivals, and activities during your visit",
    gradient: "from-indigo-700 to-indigo-900",
    bgGradient: "from-indigo-200 to-indigo-300",
    darkBgGradient: "from-indigo-900/50 to-indigo-800/50",
    textColor: "text-indigo-900 dark:text-indigo-100",
    borderColor: "border-indigo-400 dark:border-indigo-500",
    href: "/features/event-discovery",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

export default function FeaturesSection() {
  return (
    <section
      id="features"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div
          className="w-full h-full bg-repeat opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23000000' fillOpacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 border border-blue-200 dark:border-blue-700/50 mb-6"
          >
            <MapPin className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2" />
            <span className="text-blue-700 dark:text-blue-300 font-semibold text-sm">AI-Powered Features</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            Everything You Need for the{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
              Perfect Trip
            </span>
          </h2>

          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Our AI-powered platform provides intelligent tools to plan, organize, and enhance every aspect of your
            travel experience
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature) => {
            const IconComponent = feature.icon
            return (
              <motion.div
                key={feature.id}
                variants={cardVariants}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  transition: { duration: 0.3, ease: "easeOut" },
                }}
              >
                <Link href={feature.href} className="block h-full">
                  <div
                    className={`group relative bg-gradient-to-br ${feature.bgGradient} dark:${feature.darkBgGradient} backdrop-blur-sm border-2 ${feature.borderColor} rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden h-full hover:border-opacity-80`}
                  >
                    {/* Animated Background Glow */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-2xl`}
                    />

                    {/* Icon Container */}
                    <motion.div
                      whileHover={{
                        rotate: [0, -10, 10, -5, 0],
                        scale: 1.1,
                      }}
                      transition={{ duration: 0.5 }}
                      className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br ${feature.gradient} rounded-xl shadow-lg mb-4 group-hover:shadow-xl transition-shadow duration-300 group-hover:shadow-${feature.gradient.split('-')[1]}-600/60`}
                    >
                      <IconComponent className="h-5 w-5 text-white" />
                    </motion.div>

                    {/* Content */}
                    <div className="relative z-10">
                      <h3 className={`text-lg font-bold ${feature.textColor} mb-2 group-hover:text-gray-900 dark:group-hover:text-white transition-colors`}>
                        {feature.title}
                      </h3>
                      <p className="text-sm text-gray-900 dark:text-gray-100 leading-relaxed group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors">
                        {feature.description}
                      </p>
                    </div>

                    {/* Decorative Elements */}
                    <div className={`absolute top-4 right-4 w-8 h-8 bg-${feature.gradient.split('-')[1]}-600/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                    <div className={`absolute bottom-4 right-4 w-4 h-4 bg-${feature.gradient.split('-')[1]}-600/40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75`} />
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-center mt-16"
        >
          <Link href="/#features">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <MapPin className="h-5 w-5 mr-2" />
              Explore All Features
              <motion.div
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                className="ml-2"
              >
                →
              </motion.div>
            </motion.div>
          </Link>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="absolute top-20 left-10 w-16 h-16 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-xl"
      />

      <motion.div
        animate={{
          y: [0, 25, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute bottom-20 right-16 w-24 h-24 bg-gradient-to-br from-teal-400/20 to-green-400/20 rounded-full blur-2xl"
      />
    </section>
  )
}
