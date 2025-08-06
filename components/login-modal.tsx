"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { X, Mail, Lock, LogIn, Sparkles, Eye, EyeOff, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import ModalWrapper from "@/components/modal-wrapper"
import { useToast } from "@/hooks/use-toast"

interface LoginModalProps {
  onClose: () => void
  onSwitchToSignup: () => void
}

export default function LoginModal({ onClose, onSwitchToSignup }: LoginModalProps) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const [showPassword, setShowPassword] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    console.log("Login form submitted:", formData)
    
    // Show success message
    toast({
      title: "Successfully Signed In!",
      description: "Welcome back to PlanMyTrip.ai",
      duration: 2000,
      className: "bg-gradient-to-r from-emerald-500 to-emerald-600 text-white border-emerald-400",
    })
    
    setIsSubmitting(false)
    onClose()
  }

  return (
    <ModalWrapper onClose={onClose}>
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border-2 border-gray-700/50 rounded-3xl shadow-2xl w-full max-w-md overflow-hidden"
      >
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-blue-500/10 to-purple-500/10 animate-pulse" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent" />

        {/* Header */}
        <div className="relative p-8 border-b border-gray-700/50 bg-gradient-to-r from-gray-800/50 to-gray-700/50">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <motion.div 
                className="p-3 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl shadow-lg"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <LogIn className="h-7 w-7 text-white" />
              </motion.div>
              <div>
                <motion.h2 
                  className="text-3xl font-bold text-white mb-1"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  Welcome Back
                </motion.h2>
                <motion.p 
                  className="text-gray-300"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  Sign in to your account
                </motion.p>
              </div>
            </div>
            <motion.div
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
            >
              <Button
                variant="ghost"
                size="icon"
                onClick={onClose}
                className="text-gray-400 hover:text-white hover:bg-gray-700/50 rounded-full transition-all duration-300"
              >
                <X className="h-6 w-6" />
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="relative p-8 space-y-6">
          {/* Email */}
          <motion.div 
            className="space-y-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Label htmlFor="email" className="text-sm font-semibold text-gray-200">
              Email Address
            </Label>
            <div className="relative group">
              <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 group-focus-within:text-emerald-400 transition-colors duration-300" />
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                className="pl-12 h-14 bg-gray-800/50 border-2 border-gray-600 text-white placeholder-gray-400 focus:border-emerald-500 focus:ring-emerald-500/20 rounded-xl transition-all duration-300 focus:bg-gray-800/70"
                required
                disabled={isSubmitting}
              />
            </div>
          </motion.div>

          {/* Password */}
          <motion.div 
            className="space-y-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Label htmlFor="password" className="text-sm font-semibold text-gray-200">
              Password
            </Label>
            <div className="relative group">
              <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 group-focus-within:text-emerald-400 transition-colors duration-300" />
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={formData.password}
                onChange={(e) => setFormData((prev) => ({ ...prev, password: e.target.value }))}
                className="pl-12 pr-12 h-14 bg-gray-800/50 border-2 border-gray-600 text-white placeholder-gray-400 focus:border-emerald-500 focus:ring-emerald-500/20 rounded-xl transition-all duration-300 focus:bg-gray-800/70"
                required
                disabled={isSubmitting}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-emerald-400 transition-colors duration-300"
                disabled={isSubmitting}
              >
                {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
            </div>
          </motion.div>

          {/* Submit Button */}
          <motion.div 
            whileHover={{ scale: 1.02 }} 
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full h-14 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-semibold rounded-xl shadow-lg hover:shadow-emerald-500/30 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3" />
                  Signing In...
                </>
              ) : (
                <>
                  <LogIn className="mr-3 h-5 w-5" />
                  Sign In
                  <Sparkles className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </motion.div>

          {/* Sign Up Link */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <p className="text-sm text-gray-400">
              {"Don't have an account? "}
              <button
                type="button"
                className="text-emerald-400 hover:text-emerald-300 font-semibold hover:underline transition-colors duration-300"
                onClick={onSwitchToSignup}
                disabled={isSubmitting}
              >
                Sign up
              </button>
            </p>
          </motion.div>
        </form>

        {/* Decorative Elements */}
        <div className="absolute top-4 right-4 w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
        <div className="absolute bottom-4 left-4 w-1 h-1 bg-blue-400 rounded-full animate-pulse delay-1000" />
      </motion.div>
    </ModalWrapper>
  )
}
