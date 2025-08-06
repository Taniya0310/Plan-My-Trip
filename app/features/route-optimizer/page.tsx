"use client"

import { motion } from "framer-motion"
import { Route, ArrowLeft, Navigation, Clock, MapPin, Zap, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Link from "next/link"

export default function RouteOptimizerPage() {
  const features = [
    {
      icon: Navigation,
      title: "Multi-Modal Planning",
      description: "Combines flights, trains, buses, and local transport for the most efficient travel routes.",
    },
    {
      icon: Clock,
      title: "Time Optimization",
      description: "Minimizes travel time while maximizing your experience at each destination.",
    },
    {
      icon: MapPin,
      title: "Smart Waypoints",
      description: "Automatically suggests interesting stops and attractions along your route.",
    },
    {
      icon: Zap,
      title: "Real-time Updates",
      description: "Dynamic route adjustments based on traffic, delays, and changing conditions.",
    },
  ]

  const benefits = [
    "Save up to 40% on travel time",
    "Multi-modal transport integration",
    "Real-time traffic and delay updates",
    "Fuel-efficient route suggestions",
    "Scenic route alternatives",
    "Offline route access",
  ]

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <Navbar onLoginClick={() => {}} />

        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 via-white to-purple-100 dark:from-gray-800 dark:via-gray-900 dark:to-purple-900/20">
          <div className="max-w-7xl mx-auto">
            {/* Back Button */}
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="mb-8">
              <Link href="/">
                <Button
                  variant="ghost"
                  className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400"
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
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900/30 border border-purple-200 dark:border-purple-700/50 mb-6">
                  <Route className="h-5 w-5 text-purple-600 dark:text-purple-400 mr-2" />
                  <span className="text-purple-700 dark:text-purple-300 font-semibold text-sm">Route Optimizer</span>
                </div>

                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                  Intelligent{" "}
                  <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                    Route Planning
                  </span>
                </h1>

                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                  Find the most efficient routes and transportation options. Save time and money with our AI-powered
                  route optimization technology.
                </p>

                <Button className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all">
                  <Route className="h-5 w-5 mr-2" />
                  Optimize Route
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
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Route Summary</h3>
                        <span className="text-sm text-green-600 dark:text-green-400 font-medium">Optimized</span>
                      </div>
                      <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                          <div className="flex-1">
                            <div className="text-sm font-medium text-gray-900 dark:text-white">New York</div>
                            <div className="text-xs text-gray-600 dark:text-gray-400">Starting point</div>
                          </div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">0 min</div>
                        </div>
                        <div className="ml-1.5 border-l-2 border-dashed border-gray-300 dark:border-gray-600 h-6"></div>
                        <div className="flex items-center space-x-3">
                          <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                          <div className="flex-1">
                            <div className="text-sm font-medium text-gray-900 dark:text-white">Philadelphia</div>
                            <div className="text-xs text-gray-600 dark:text-gray-400">Train • 1h 30m</div>
                          </div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">90 min</div>
                        </div>
                        <div className="ml-1.5 border-l-2 border-dashed border-gray-300 dark:border-gray-600 h-6"></div>
                        <div className="flex items-center space-x-3">
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                          <div className="flex-1">
                            <div className="text-sm font-medium text-gray-900 dark:text-white">Washington DC</div>
                            <div className="text-xs text-gray-600 dark:text-gray-400">Train • 2h 45m</div>
                          </div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">255 min</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-purple-500/20 rounded-full blur-xl"></div>
                  <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl"></div>
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
                Advanced Route Intelligence
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Our route optimizer uses machine learning and real-time data to find the fastest, most cost-effective
                paths to your destination.
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
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl mb-4">
                      <IconComponent className="h-6 w-6 text-purple-600 dark:text-purple-400" />
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
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  Travel Smarter, Not Harder
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                  Our route optimizer has helped travelers save over 2 million hours and $100 million in transportation
                  costs.
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
                      <CheckCircle className="h-5 w-5 text-purple-500 flex-shrink-0" />
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
                <div className="bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">Start Optimizing Today</h3>
                  <p className="text-purple-100 mb-6">
                    Join millions of travelers who save time and money with our intelligent route planning.
                  </p>
                  <Button className="bg-white text-purple-600 hover:bg-gray-100 font-semibold px-6 py-3 rounded-xl">
                    Optimize My Route
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
