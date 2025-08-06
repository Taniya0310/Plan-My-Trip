"use client"

import { motion } from "framer-motion"
import { Cloud, ArrowLeft, Sun, CloudRain, Thermometer, Wind, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Link from "next/link"

export default function WeatherAnalyzerPage() {
  const features = [
    {
      icon: Sun,
      title: "15-Day Forecasts",
      description: "Extended weather predictions to help you plan the perfect travel dates and activities.",
    },
    {
      icon: CloudRain,
      title: "Weather Alerts",
      description: "Real-time notifications about weather changes that might affect your travel plans.",
    },
    {
      icon: Thermometer,
      title: "Climate Analysis",
      description: "Historical weather data and seasonal patterns to choose the best time to visit.",
    },
    {
      icon: Wind,
      title: "Activity Recommendations",
      description: "Weather-based suggestions for indoor and outdoor activities during your trip.",
    },
  ]

  const benefits = [
    "Accurate 15-day weather forecasts",
    "Packing recommendations by weather",
    "Best time to visit analysis",
    "Weather-based activity suggestions",
    "Real-time weather alerts",
    "Climate comparison tools",
  ]

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <Navbar onLoginClick={() => {}} />

        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-cyan-50 via-white to-cyan-100 dark:from-gray-800 dark:via-gray-900 dark:to-cyan-900/20">
          <div className="max-w-7xl mx-auto">
            {/* Back Button */}
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="mb-8">
              <Link href="/">
                <Button
                  variant="ghost"
                  className="text-gray-600 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400"
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
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-100 dark:bg-cyan-900/30 border border-cyan-200 dark:border-cyan-700/50 mb-6">
                  <Cloud className="h-5 w-5 text-cyan-600 dark:text-cyan-400 mr-2" />
                  <span className="text-cyan-700 dark:text-cyan-300 font-semibold text-sm">Weather Analyzer</span>
                </div>

                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                  Smart{" "}
                  <span className="bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent">
                    Weather Planning
                  </span>
                </h1>

                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                  Get detailed weather forecasts and packing recommendations. Never be caught unprepared with our
                  intelligent weather analysis.
                </p>

                <Button className="bg-gradient-to-r from-cyan-600 to-cyan-700 hover:from-cyan-700 hover:to-cyan-800 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all">
                  <Cloud className="h-5 w-5 mr-2" />
                  Check Weather
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
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Paris, France</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Next 7 days</p>
                        </div>
                        <div className="text-right">
                          <div className="text-3xl font-bold text-cyan-600 dark:text-cyan-400">22°C</div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">Partly Cloudy</div>
                        </div>
                      </div>
                      <div className="grid grid-cols-7 gap-2">
                        {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, index) => (
                          <div key={day} className="text-center">
                            <div className="text-xs text-gray-600 dark:text-gray-400 mb-1">{day}</div>
                            <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full mx-auto mb-1 flex items-center justify-center">
                              <Sun className="h-4 w-4 text-white" />
                            </div>
                            <div className="text-xs font-medium">{20 + index}°</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-cyan-500/20 rounded-full blur-xl"></div>
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
                Advanced Weather Intelligence
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Our weather analyzer combines multiple data sources and AI to provide the most accurate and actionable
                weather insights.
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
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-cyan-100 dark:bg-cyan-900/30 rounded-xl mb-4">
                      <IconComponent className="h-6 w-6 text-cyan-600 dark:text-cyan-400" />
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
                  Weather-Ready Travel
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                  Be prepared for any weather condition with our comprehensive analysis and smart recommendations.
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
                      <CheckCircle className="h-5 w-5 text-cyan-500 flex-shrink-0" />
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
                <div className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">Never Miss Perfect Weather</h3>
                  <p className="text-cyan-100 mb-6">
                    Get personalized weather insights and packing recommendations for your destination.
                  </p>
                  <Button className="bg-white text-cyan-600 hover:bg-gray-100 font-semibold px-6 py-3 rounded-xl">
                    Analyze Weather
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
