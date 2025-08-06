"use client"

import { useState } from "react"
import { AnimatePresence } from "framer-motion"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import FeatureCards from "@/components/feature-cards"
import FeaturesSection from "@/components/features-section"
import Footer from "@/components/footer"
import TripPlannerModal from "@/components/trip-planner-modal"
import LoginModal from "@/components/login-modal"
import SignupModal from "@/components/signup-modal"

export default function Home() {
  const [isTripModalOpen, setIsTripModalOpen] = useState(false)
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false)

  const handleTripModalOpen = () => setIsTripModalOpen(true)
  const handleTripModalClose = () => setIsTripModalOpen(false)

  const handleLoginModalOpen = () => setIsLoginModalOpen(true)
  const handleLoginModalClose = () => setIsLoginModalOpen(false)

  const handleSignupModalOpen = () => setIsSignupModalOpen(true)
  const handleSignupModalClose = () => setIsSignupModalOpen(false)

  const handleSwitchToSignup = () => {
    setIsLoginModalOpen(false)
    setIsSignupModalOpen(true)
  }

  const handleSwitchToLogin = () => {
    setIsSignupModalOpen(false)
    setIsLoginModalOpen(true)
  }

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        <Navbar onLoginClick={handleLoginModalOpen} />

        <HeroSection onStartPlanningClick={handleTripModalOpen} />

        <FeatureCards onPlanTripClick={handleTripModalOpen} onLoginClick={handleLoginModalOpen} />

        <FeaturesSection />

        <Footer />

        <AnimatePresence>{isTripModalOpen && <TripPlannerModal onClose={handleTripModalClose} />}</AnimatePresence>

        <AnimatePresence>
          {isLoginModalOpen && <LoginModal onClose={handleLoginModalClose} onSwitchToSignup={handleSwitchToSignup} />}
        </AnimatePresence>

        <AnimatePresence>
          {isSignupModalOpen && <SignupModal onClose={handleSignupModalClose} onSwitchToLogin={handleSwitchToLogin} />}
        </AnimatePresence>
      </div>
    </ThemeProvider>
  )
}
