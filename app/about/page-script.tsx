"use client"

import { useEffect } from "react"

export default function AboutPageScript() {
  useEffect(() => {
    // Animate skill bars on page load
    const skillBars = document.querySelectorAll("[data-level]")

    setTimeout(() => {
      skillBars.forEach((bar) => {
        const level = bar.getAttribute("data-level")
        if (level && bar.parentElement) {
          const indicator = bar.querySelector("div")
          if (indicator) {
            indicator.style.transform = `translateX(-${100 - Number.parseInt(level)}%)`
          }
        }
      })
    }, 300)

    return () => {
      // Reset skill bars when component unmounts
      skillBars.forEach((bar) => {
        const indicator = bar.querySelector("div")
        if (indicator) {
          indicator.style.transform = "translateX(-100%)"
        }
      })
    }
  }, [])

  return null
}
