"use client"

import { motion } from "framer-motion"
import { Calendar, ArrowLeft, Music, Star, Clock, Users, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Link from "next/link"

export default function EventDiscoveryPage() {
  const features = [
    {
      icon: Music,
      title: "Local Events & Festivals",
      description: "Discover concerts, festivals, cultural events, and local celebrations happening during your visit.",
    },
    {
      icon: Star,
      title: "Personalized Recommendations",
      description: "Get event suggestions based on your interests, from art exhibitions to sports events.",
    },
    {
      icon: Clock,
      title: "Real-time Updates",
      description: "Stay informed about event changes, cancellations, and last-minute additions to your itinerary.",
    },
    {
      icon: Users,
      title: "Social Integration",
      description: "Connect with other travelers and locals attending the same events and activities.",
    },
  ]

  const benefits = [
    "Discover hidden local events",
    "Personalized event recommendations",
    "Real-time event updates",
    "Ticket booking integration",
    "Social event networking",
    "Cultural calendar insights",
  ]

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <Navbar onLoginClick={() => {}} />

        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-50 via-white to-indigo-100 dark:from-gray-800 dark:via-gray-900 dark:to-indigo-900/20">
          <div className="max-w-7xl mx-auto">
            {/* Back Button */}
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="mb-8">
              <Link href="/">
                <Button
                  variant="ghost"
                  className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400"
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
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-100 dark:bg-indigo-900/30 border border-indigo-200 dark:border-indigo-700/50 mb-6">
                  <Calendar className="h-5 w-5 text-indigo-600 dark:text-indigo-400 mr-2" />
                  <span className="text-indigo-700 dark:text-indigo-300 font-semibold text-sm">Event Discovery</span>
                </div>

                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                  Discover Amazing{" "}
                  <span className="bg-gradient-to-r from-indigo-400 to-indigo-600 bg-clip-text text-transparent">
                    Local Events
                  </span>
                </h1>

                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                  Find local events, festivals, and activities happening during your visit. Never miss out on unique
                  cultural experiences and entertainment.
                </p>

                <Button className="bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all">
                  <Calendar className="h-5 w-5 mr-2" />
                  Discover Events
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
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">This Weekend in Paris</h3>
                        <span className="text-sm text-indigo-600 dark:text-indigo-400 font-medium">12 events</span>
                      </div>
                      <div className="space-y-4">
                        <div className="flex items-center space-x-3 p-3 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg">
                          <Music className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                          <div className="flex-1">
                            <div className="text-sm font-medium text-gray-900 dark:text-white">Jazz Festival</div>
                            <div className="text-xs text-gray-600 dark:text-gray-400">
                              Sat 8:00 PM • Parc de la Villette
                            </div>
                          </div>
                          <Star className="h-4 w-4 text-yellow-500" />
                        </div>
                        <div className="flex items-center space-x-3 p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                          <Calendar className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                          <div className="flex-1">
                            <div className="text-sm font-medium text-gray-900 dark:text-white">Art Exhibition</div>
                            <div className="text-xs text-gray-600 dark:text-gray-400">Sun 10:00 AM • Louvre Museum</div>
                          </div>
                          <Users className="h-4 w-4 text-green-500" />
                        </div>
                        <div className="flex items-center space-x-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                          <Clock className="h-5 w-5 text-green-600 dark:text-green-400" />
                          <div className="flex-1">
                            <div className="text-sm font-medium text-gray-900 dark:text-white">Food Market</div>
                            <div className="text-xs text-gray-600 dark:text-gray-400">
                              Sun 9:00 AM • Marché des Enfants Rouges
                            </div>
                          </div>
                          <div className="text-xs text-indigo-600 dark:text-indigo-400 font-medium">Free</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-indigo-500/20 rounded-full blur-xl"></div>
                  <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl"></div>
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
                Smart Event Discovery
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Our AI-powered event discovery finds the perfect activities and experiences based on your interests and
                travel dates.
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
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-xl mb-4">
                      <IconComponent className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
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
                  Never Miss Amazing Experiences
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                  Discover unique local events, festivals, and cultural experiences that make your trip truly
                  unforgettable.
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
                      <CheckCircle className="h-5 w-5 text-indigo-500 flex-shrink-0" />
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
                <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">Start Discovering</h3>
                  <p className="text-indigo-100 mb-6">
                    Find amazing local events and experiences that match your interests and travel schedule.
                  </p>
                  <Button className="bg-white text-indigo-600 hover:bg-gray-100 font-semibold px-6 py-3 rounded-xl">
                    Explore Events
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
