"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { MapPin, LogIn } from "lucide-react"

interface FeatureCardsProps {
  onPlanTripClick: () => void
  onLoginClick: () => void
}

export default function FeatureCards({ onPlanTripClick, onLoginClick }: FeatureCardsProps) {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-transparent">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Plan a Trip Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-emerald-100 to-green-200 dark:from-emerald-900/30 dark:to-green-900/30 backdrop-blur-sm border-2 border-emerald-300 dark:border-emerald-600 rounded-2xl p-8 hover:border-emerald-500/80 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/30"
          >
            <div className="mb-6">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-xl mb-4 shadow-lg hover:shadow-emerald-500/50 transition-shadow duration-300">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-emerald-900 dark:text-emerald-100 mb-3">Plan a Trip</h3>
              <p className="text-emerald-800 dark:text-emerald-200 text-lg leading-relaxed">
                Enter destination, budget, and interests to get started with your personalized AI-powered itinerary
              </p>
            </div>

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                onClick={onPlanTripClick}
                className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-semibold py-3 rounded-xl transition-all hover:shadow-lg hover:shadow-emerald-500/40"
              >
                <MapPin className="mr-2 h-5 w-5" />
                Start Planning
              </Button>
            </motion.div>
          </motion.div>

          {/* Login to Save Trips Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-blue-100 to-indigo-200 dark:from-blue-900/30 dark:to-indigo-900/30 backdrop-blur-sm border-2 border-blue-300 dark:border-blue-600 rounded-2xl p-8 hover:border-blue-500/80 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/30"
          >
            <div className="mb-6">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl mb-4 shadow-lg hover:shadow-blue-500/50 transition-shadow duration-300">
                <LogIn className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-blue-900 dark:text-blue-100 mb-3">Login to Save Trips</h3>
              <p className="text-blue-800 dark:text-blue-200 text-lg leading-relaxed">
                Sign in to save and view your itineraries anytime, anywhere. Never lose your perfect travel plans
              </p>
            </div>

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                onClick={onLoginClick}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 rounded-xl transition-all hover:shadow-lg hover:shadow-blue-500/40"
              >
                <LogIn className="mr-2 h-5 w-5" />
                Login
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
