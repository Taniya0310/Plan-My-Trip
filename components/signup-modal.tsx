"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { X, Mail, Lock, User, Eye, EyeOff, UserPlus, Sparkles, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import ModalWrapper from "@/components/modal-wrapper"
import { useToast } from "@/hooks/use-toast"

interface SignupModalProps {
  onClose: () => void
  onSwitchToLogin: () => void
}

export default function SignupModal({ onClose, onSwitchToLogin }: SignupModalProps) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  })

  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required"
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email"
    }

    if (!formData.password) {
      newErrors.password = "Password is required"
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters"
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password"
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match"
    }

    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = "You must agree to the terms and conditions"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (validateForm()) {
      setIsSubmitting(true)
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      console.log("Signup form submitted:", formData)
      
      // Show success message
      toast({
        title: "Successfully Signed Up!",
        description: "Welcome to PlanMyTrip.ai! Your account has been created.",
        duration: 2000,
        className: "bg-gradient-to-r from-emerald-500 to-emerald-600 text-white border-emerald-400",
      })
      
      setIsSubmitting(false)
      onClose()
    }
  }

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }))
    }
  }

  return (
    <ModalWrapper onClose={onClose}>
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border-2 border-gray-700/50 rounded-3xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto"
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
                <UserPlus className="h-7 w-7 text-white" />
              </motion.div>
              <div>
                <motion.h2 
                  className="text-3xl font-bold text-white mb-1"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  Create Account
                </motion.h2>
                <motion.p 
                  className="text-gray-300"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  Join PlanMyTrip.ai today
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
        <form onSubmit={handleSubmit} className="relative p-8 space-y-5">
          {/* Name Fields */}
          <motion.div 
            className="grid grid-cols-2 gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="space-y-3">
              <Label htmlFor="firstName" className="text-sm font-semibold text-gray-200">
                First Name
              </Label>
              <div className="relative group">
                <User className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 group-focus-within:text-emerald-400 transition-colors duration-300" />
                <Input
                  id="firstName"
                  type="text"
                  placeholder="John"
                  value={formData.firstName}
                  onChange={(e) => handleInputChange("firstName", e.target.value)}
                  className={`pl-12 h-14 bg-gray-800/50 border-2 text-white placeholder-gray-400 focus:border-emerald-500 focus:ring-emerald-500/20 rounded-xl transition-all duration-300 focus:bg-gray-800/70 ${
                    errors.firstName ? "border-red-500" : "border-gray-600"
                  }`}
                  required
                  disabled={isSubmitting}
                />
              </div>
              {errors.firstName && <p className="text-red-400 text-xs mt-1">{errors.firstName}</p>}
            </div>

            <div className="space-y-3">
              <Label htmlFor="lastName" className="text-sm font-semibold text-gray-200">
                Last Name
              </Label>
              <div className="relative group">
                <User className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 group-focus-within:text-emerald-400 transition-colors duration-300" />
                <Input
                  id="lastName"
                  type="text"
                  placeholder="Doe"
                  value={formData.lastName}
                  onChange={(e) => handleInputChange("lastName", e.target.value)}
                  className={`pl-12 h-14 bg-gray-800/50 border-2 text-white placeholder-gray-400 focus:border-emerald-500 focus:ring-emerald-500/20 rounded-xl transition-all duration-300 focus:bg-gray-800/70 ${
                    errors.lastName ? "border-red-500" : "border-gray-600"
                  }`}
                  required
                  disabled={isSubmitting}
                />
              </div>
              {errors.lastName && <p className="text-red-400 text-xs mt-1">{errors.lastName}</p>}
            </div>
          </motion.div>

          {/* Email */}
          <motion.div 
            className="space-y-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Label htmlFor="email" className="text-sm font-semibold text-gray-200">
              Email Address
            </Label>
            <div className="relative group">
              <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 group-focus-within:text-emerald-400 transition-colors duration-300" />
              <Input
                id="email"
                type="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className={`pl-12 h-14 bg-gray-800/50 border-2 text-white placeholder-gray-400 focus:border-emerald-500 focus:ring-emerald-500/20 rounded-xl transition-all duration-300 focus:bg-gray-800/70 ${
                  errors.email ? "border-red-500" : "border-gray-600"
                }`}
                required
                disabled={isSubmitting}
              />
            </div>
            {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
          </motion.div>

          {/* Password */}
          <motion.div 
            className="space-y-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Label htmlFor="password" className="text-sm font-semibold text-gray-200">
              Password
            </Label>
            <div className="relative group">
              <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 group-focus-within:text-emerald-400 transition-colors duration-300" />
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Create a strong password"
                value={formData.password}
                onChange={(e) => handleInputChange("password", e.target.value)}
                className={`pl-12 pr-12 h-14 bg-gray-800/50 border-2 text-white placeholder-gray-400 focus:border-emerald-500 focus:ring-emerald-500/20 rounded-xl transition-all duration-300 focus:bg-gray-800/70 ${
                  errors.password ? "border-red-500" : "border-gray-600"
                }`}
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
            {errors.password && <p className="text-red-400 text-xs mt-1">{errors.password}</p>}
          </motion.div>

          {/* Confirm Password */}
          <motion.div 
            className="space-y-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <Label htmlFor="confirmPassword" className="text-sm font-semibold text-gray-200">
              Confirm Password
            </Label>
            <div className="relative group">
              <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 group-focus-within:text-emerald-400 transition-colors duration-300" />
              <Input
                id="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                className={`pl-12 pr-12 h-14 bg-gray-800/50 border-2 text-white placeholder-gray-400 focus:border-emerald-500 focus:ring-emerald-500/20 rounded-xl transition-all duration-300 focus:bg-gray-800/70 ${
                  errors.confirmPassword ? "border-red-500" : "border-gray-600"
                }`}
                required
                disabled={isSubmitting}
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-emerald-400 transition-colors duration-300"
                disabled={isSubmitting}
              >
                {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
            </div>
            {errors.confirmPassword && <p className="text-red-400 text-xs mt-1">{errors.confirmPassword}</p>}
          </motion.div>

          {/* Terms and Conditions */}
          <motion.div 
            className="space-y-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <div className="flex items-start space-x-3">
              <Checkbox
                id="agreeToTerms"
                checked={formData.agreeToTerms}
                onCheckedChange={(checked) => handleInputChange("agreeToTerms", checked as boolean)}
                className="mt-1 border-gray-500 data-[state=checked]:bg-emerald-600 data-[state=checked]:border-emerald-600"
                disabled={isSubmitting}
              />
              <Label
                htmlFor="agreeToTerms"
                className="text-sm text-gray-300 leading-relaxed cursor-pointer"
              >
                I agree to the{" "}
                <button
                  type="button"
                  className="text-emerald-400 hover:text-emerald-300 font-semibold hover:underline transition-colors duration-300"
                  onClick={() => console.log("Open terms")}
                  disabled={isSubmitting}
                >
                  Terms of Service
                </button>{" "}
                and{" "}
                <button
                  type="button"
                  className="text-emerald-400 hover:text-emerald-300 font-semibold hover:underline transition-colors duration-300"
                  onClick={() => console.log("Open privacy policy")}
                  disabled={isSubmitting}
                >
                  Privacy Policy
                </button>
              </Label>
            </div>
            {errors.agreeToTerms && <p className="text-red-400 text-xs mt-1">{errors.agreeToTerms}</p>}
          </motion.div>

          {/* Submit Button */}
          <motion.div 
            whileHover={{ scale: 1.02 }} 
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full h-14 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-semibold rounded-xl shadow-lg hover:shadow-emerald-500/30 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3" />
                  Creating Account...
                </>
              ) : (
                <>
                  <UserPlus className="mr-3 h-5 w-5" />
                  Create Account
                  <Sparkles className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </motion.div>

          {/* Login Link */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
          >
            <p className="text-sm text-gray-400">
              Already have an account?{" "}
              <button
                type="button"
                className="text-emerald-400 hover:text-emerald-300 font-semibold hover:underline transition-colors duration-300"
                onClick={onSwitchToLogin}
                disabled={isSubmitting}
              >
                Sign in
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
