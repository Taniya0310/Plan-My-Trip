"use client"

import { motion } from "framer-motion"
import { Backpack, ArrowLeft, CheckSquare, Cloud, Thermometer, Shirt, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Link from "next/link"

export default function PackingAssistantPage() {
  const features = [
    {
      icon: CheckSquare,
      title: "Smart Checklists",
      description: "Personalized packing lists based on your destination, activities, and travel duration.",
    },
    {
      icon: Cloud,
      title: "Weather-Based Suggestions",
      description: "Clothing recommendations that adapt to weather forecasts and seasonal conditions.",
    },
    {
      icon: Thermometer,
      title: "Climate Adaptation",
      description: "Specialized packing advice for different climates, from tropical to arctic destinations.",
    },
    {
      icon: Shirt,
      title: "Activity-Specific Items",
      description: "Tailored recommendations for business trips, adventures, beach vacations, and more.",
    },
  ]

  const benefits = [
    "Never forget essential items again",
    "Weather-optimized packing lists",
    "Weight and space optimization",
    "Activity-specific recommendations",
    "Shared packing for group trips",
    "Last-minute packing reminders",
  ]

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <Navbar onLoginClick={() => {}} />

        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-teal-50 via-white to-teal-100 dark:from-gray-800 dark:via-gray-900 dark:to-teal-900/20">
          <div className="max-w-7xl mx-auto">
            {/* Back Button */}
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="mb-8">
              <Link href="/">
                <Button
                  variant="ghost"
                  className="text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Home
                </Button>
              </Link>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-teal-100 dark:bg-teal-900/30 border border-teal-200 dark:border-teal-700/50 mb-6">
                  <Backpack className="h-5 w-5 text-teal-600 dark:text-teal-400 mr-2" />
                  <span className="text-teal-700 dark:text-teal-300 font-semibold text-sm">Packing Assistant</span>
                </div>

                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                  Smart{" "}
                  <span className="bg-gradient-to-r from-teal-400 to-teal-600 bg-clip-text text-transparent">
                    Packing Lists
                  </span>
                </h1>

                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                  Never overpack or forget essentials again. Get personalized packing lists based on your destination,
                  weather, and planned activities.
                </p>

                <Button className="bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all">
                  <Backpack className="h-5 w-5 mr-2" />
                  Create Packing List
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="relative">
                  <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 border border-gray-200 dark:border-gray-700">
                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Tokyo Trip Packing</h3>
                        <span className="text-sm text-teal-600 dark:text-teal-400 font-medium">7 days</span>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center space-x-3">
                          <div className="w-5 h-5 bg-green-500 rounded flex items-center justify-center">
                            <CheckSquare className="h-3 w-3 text-white" />
                          </div>
                          <span className="text-sm text-gray-900 dark:text-white line-through">Rain jacket</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-5 h-5 bg-green-500 rounded flex items-center justify-center">
                            <CheckSquare className="h-3 w-3 text-white" />
                          </div>
                          <span className="text-sm text-gray-900 dark:text-white line-through">Comfortable shoes</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-5 h-5 border-2 border-gray-300 dark:border-gray-600 rounded"></div>
                          <span className="text-sm text-gray-900 dark:text-white">Portable charger</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-5 h-5 border-2 border-gray-300 dark:border-gray-600 rounded"></div>
                          <span className="text-sm text-gray-900 dark:text-white">JR Pass</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-5 h-5 border-2 border-gray-300 dark:border-gray-600 rounded"></div>
                          <span className="text-sm text-gray-900 dark:text-white">Translation app</span>
                        </div>
                      </div>
                      <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600 dark:text-gray-400">Progress</span>
                          <span className="text-teal-600 dark:text-teal-400 font-medium">2/5 packed</span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mt-2">
                          <div className="bg-teal-500 h-2 rounded-full w-2/5"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-teal-500/20 rounded-full blur-xl"></div>
                  <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-green-500/20 rounded-full blur-2xl"></div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Intelligent Packing Features
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Our packing assistant learns from millions of successful trips to suggest exactly what you need for your
                journey.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => {
                const IconComponent = feature.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white dark:bg-gray-800/50 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all"
                  >
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-teal-100 dark:bg-teal-900/30 rounded-xl mb-4">
                      <IconComponent className="h-6 w-6 text-teal-600 dark:text-teal-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{feature.description}</p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">Pack Like a Pro</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                  Join millions of travelers who never forget essentials or overpack thanks to our intelligent packing
                  recommendations.
                </p>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="flex items-center space-x-3"
                    >
                      <CheckCircle className="h-5 w-5 text-teal-500 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="bg-gradient-to-br from-teal-500 to-green-600 rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">Start Packing Smart</h3>
                  <p className="text-teal-100 mb-6">
                    Get personalized packing lists that ensure you have everything you need and nothing you don't.
                  </p>
                  <Button className="bg-white text-teal-600 hover:bg-gray-100 font-semibold px-6 py-3 rounded-xl">
                    Create My List
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </ThemeProvider>
  )
}
