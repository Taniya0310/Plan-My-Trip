"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { X, MapPin, Calendar, Wallet, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import ModalWrapper from "@/components/modal-wrapper"

interface TripPlannerModalProps {
  onClose: () => void
}

export default function TripPlannerModal({ onClose }: TripPlannerModalProps) {
  const [formData, setFormData] = useState({
    destination: "",
    startDate: "",
    endDate: "",
    budget: "",
    interests: [] as string[],
  })

  const interests = [
    { id: "adventure", label: "Adventure", icon: "🏔️" },
    { id: "culture", label: "Culture", icon: "🏛️" },
    { id: "food", label: "Food", icon: "🍜" },
    { id: "nature", label: "Nature", icon: "🌿" },
    { id: "nightlife", label: "Nightlife", icon: "🌃" },
    { id: "relaxation", label: "Relaxation", icon: "🧘" },
  ]

  const handleInterestChange = (interestId: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      interests: checked ? [...prev.interests, interestId] : prev.interests.filter((id) => id !== interestId),
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Trip planner form submitted:", formData)
    onClose()
  }

  return (
    <ModalWrapper onClose={onClose}>
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700/50 rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-700/50">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-emerald-500/20 rounded-xl">
              <MapPin className="h-6 w-6 text-emerald-400" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Plan Your Trip</h2>
              <p className="text-gray-400">Tell us about your dream destination</p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="text-gray-400 hover:text-white hover:bg-gray-700 rounded-full"
          >
            <X className="h-6 w-6" />
          </Button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Destination */}
          <div className="space-y-2">
            <Label htmlFor="destination" className="text-sm font-semibold text-gray-300">
              Destination
            </Label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                id="destination"
                placeholder="Where would you like to go?"
                value={formData.destination}
                onChange={(e) => setFormData((prev) => ({ ...prev, destination: e.target.value }))}
                className="pl-10 h-12 bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-emerald-500 focus:ring-emerald-500"
                required
              />
            </div>
          </div>

          {/* Dates */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="startDate" className="text-sm font-semibold text-gray-300">
                Start Date
              </Label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  id="startDate"
                  type="date"
                  value={formData.startDate}
                  onChange={(e) => setFormData((prev) => ({ ...prev, startDate: e.target.value }))}
                  className="pl-10 h-12 bg-gray-700/50 border-gray-600 text-white focus:border-emerald-500 focus:ring-emerald-500"
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="endDate" className="text-sm font-semibold text-gray-300">
                End Date
              </Label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  id="endDate"
                  type="date"
                  value={formData.endDate}
                  onChange={(e) => setFormData((prev) => ({ ...prev, endDate: e.target.value }))}
                  className="pl-10 h-12 bg-gray-700/50 border-gray-600 text-white focus:border-emerald-500 focus:ring-emerald-500"
                  required
                />
              </div>
            </div>
          </div>

          {/* Budget */}
          <div className="space-y-2">
            <Label htmlFor="budget" className="text-sm font-semibold text-gray-300">
              Budget Range
            </Label>
            <div className="relative">
              <Wallet className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 z-10" />
              <Select
                value={formData.budget}
                onValueChange={(value) => setFormData((prev) => ({ ...prev, budget: value }))}
              >
                <SelectTrigger className="pl-10 h-12 bg-gray-700/50 border-gray-600 text-white focus:border-emerald-500 focus:ring-emerald-500">
                  <SelectValue placeholder="Select your budget range" />
                </SelectTrigger>
                <SelectContent className="bg-gray-800 border-gray-700">
                  <SelectItem value="10000-25000" className="text-white hover:bg-gray-700">
                    ₹10,000 - ₹25,000
                  </SelectItem>
                  <SelectItem value="25000-50000" className="text-white hover:bg-gray-700">
                    ₹25,000 - ₹50,000
                  </SelectItem>
                  <SelectItem value="50000-75000" className="text-white hover:bg-gray-700">
                    ₹50,000 - ₹75,000
                  </SelectItem>
                  <SelectItem value="75000-100000" className="text-white hover:bg-gray-700">
                    ₹75,000 - ₹1,00,000
                  </SelectItem>
                  <SelectItem value="100000+" className="text-white hover:bg-gray-700">
                    ₹1,00,000+
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Interests */}
          <div className="space-y-4">
            <Label className="text-sm font-semibold text-gray-300">What interests you? (Select all that apply)</Label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {interests.map((interest) => (
                <motion.div
                  key={interest.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center space-x-3 p-3 bg-gray-700/30 border border-gray-600 rounded-xl hover:border-emerald-500/50 hover:bg-gray-700/50 transition-all cursor-pointer"
                  onClick={() => handleInterestChange(interest.id, !formData.interests.includes(interest.id))}
                >
                  <Checkbox
                    id={interest.id}
                    checked={formData.interests.includes(interest.id)}
                    onCheckedChange={(checked) => handleInterestChange(interest.id, checked as boolean)}
                    className="border-gray-500 data-[state=checked]:bg-emerald-600 data-[state=checked]:border-emerald-600"
                  />
                  <span className="text-xl">{interest.icon}</span>
                  <Label htmlFor={interest.id} className="text-sm font-medium text-gray-300 cursor-pointer">
                    {interest.label}
                  </Label>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button
              type="submit"
              className="w-full h-12 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-semibold rounded-xl shadow-lg hover:shadow-emerald-500/25 transition-all"
            >
              <Sparkles className="mr-2 h-5 w-5" />
              Generate Itinerary
            </Button>
          </motion.div>
        </form>
      </motion.div>
    </ModalWrapper>
  )
}
