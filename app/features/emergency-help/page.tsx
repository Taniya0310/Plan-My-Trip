"use client"

import { motion } from "framer-motion"
import { Shield, ArrowLeft, Phone, MapPin, AlertTriangle, Heart, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Link from "next/link"

export default function EmergencyHelpPage() {
  const features = [
    {
      icon: Phone,
      title: "24/7 Emergency Hotline",
      description: "Instant access to emergency services and local authorities in any country worldwide.",
    },
    {
      icon: MapPin,
      title: "Location Sharing",
      description: "Share your exact location with emergency contacts and local rescue services instantly.",
    },
    {
      icon: AlertTriangle,
      title: "Safety Alerts",
      description: "Real-time notifications about natural disasters, political unrest, and safety concerns.",
    },
    {
      icon: Heart,
      title: "Medical Assistance",
      description: "Connect with local hospitals, pharmacies, and medical professionals in emergencies.",
    },
  ]

  const benefits = [
    "24/7 multilingual support",
    "Instant emergency contact access",
    "Real-time safety alerts",
    "Medical emergency assistance",
    "Embassy and consulate contacts",
    "Travel insurance integration",
  ]

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <Navbar onLoginClick={() => {}} />

        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-50 via-white to-red-100 dark:from-gray-800 dark:via-gray-900 dark:to-red-900/20">
          <div className="max-w-7xl mx-auto">
            {/* Back Button */}
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="mb-8">
              <Link href="/">
                <Button
                  variant="ghost"
                  className="text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400"
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
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-100 dark:bg-red-900/30 border border-red-200 dark:border-red-700/50 mb-6">
                  <Shield className="h-5 w-5 text-red-600 dark:text-red-400 mr-2" />
                  <span className="text-red-700 dark:text-red-300 font-semibold text-sm">Emergency Help</span>
                </div>

                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                  Travel{" "}
                  <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                    Safely & Securely
                  </span>
                </h1>

                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                  Stay protected with 24/7 emergency support, real-time safety alerts, and instant access to local
                  emergency services worldwide.
                </p>

                <Button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all">
                  <Shield className="h-5 w-5 mr-2" />
                  Get Emergency Help
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
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Emergency Contacts</h3>
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      </div>
                      <div className="space-y-4">
                        <div className="flex items-center space-x-3 p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
                          <Phone className="h-5 w-5 text-red-600 dark:text-red-400" />
                          <div>
                            <div className="text-sm font-medium text-gray-900 dark:text-white">Emergency Services</div>
                            <div className="text-xs text-gray-600 dark:text-gray-400">112 (Europe)</div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                          <MapPin className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                          <div>
                            <div className="text-sm font-medium text-gray-900 dark:text-white">US Embassy</div>
                            <div className="text-xs text-gray-600 dark:text-gray-400">+33 1 43 12 22 22</div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                          <Heart className="h-5 w-5 text-green-600 dark:text-green-400" />
                          <div>
                            <div className="text-sm font-medium text-gray-900 dark:text-white">Medical Hotline</div>
                            <div className="text-xs text-gray-600 dark:text-gray-400">15 (France)</div>
                          </div>
                        </div>
                      </div>
                      <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                        <div className="flex items-center space-x-2">
                          <AlertTriangle className="h-4 w-4 text-yellow-500" />
                          <span className="text-xs text-gray-600 dark:text-gray-400">
                            Current location: Paris, France
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-red-500/20 rounded-full blur-xl"></div>
                  <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-orange-500/20 rounded-full blur-2xl"></div>
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
                Comprehensive Safety Features
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Our emergency help system provides instant access to local emergency services and safety information
                wherever you travel.
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
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-xl mb-4">
                      <IconComponent className="h-6 w-6 text-red-600 dark:text-red-400" />
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
                  Your Safety is Our Priority
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                  Travel with confidence knowing that help is always just a tap away, no matter where you are in the
                  world.
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
                      <CheckCircle className="h-5 w-5 text-red-500 flex-shrink-0" />
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
                <div className="bg-gradient-to-br from-red-500 to-pink-600 rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">Stay Protected</h3>
                  <p className="text-red-100 mb-6">
                    Get instant access to emergency services, safety alerts, and medical assistance worldwide.
                  </p>
                  <Button className="bg-white text-red-600 hover:bg-gray-100 font-semibold px-6 py-3 rounded-xl">
                    Activate Safety Features
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
