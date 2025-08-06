"use client"

import type React from "react"

import { useEffect } from "react"
import { motion } from "framer-motion"

interface ModalWrapperProps {
  children: React.ReactNode
  onClose: () => void
}

export default function ModalWrapper({ children, onClose }: ModalWrapperProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose()
      }
    }

    document.addEventListener("keydown", handleEscape)
    document.body.style.overflow = "hidden"

    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = "unset"
    }
  }, [onClose])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      {/* Modal Content */}
      <div className="relative z-10 w-full max-w-2xl" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </motion.div>
  )
}
