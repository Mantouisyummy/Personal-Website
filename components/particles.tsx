"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { useTheme } from "next-themes"

interface ParticlesProps {
  className?: string
}

export function Particles({ className = "" }: ParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme } = useTheme()
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isMouseInCanvas, setIsMouseInCanvas] = useState(false)

  const drawParticles = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const isDark = theme === "dark"

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Particle properties
    const particleCount = 150
    const particles: {
      x: number
      y: number
      radius: number
      color: string
      speedX: number
      speedY: number
      originalX: number
      originalY: number
    }[] = []

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      const radius = Math.random() * 2 + 1
      const x = Math.random() * canvas.width
      const y = Math.random() * canvas.height

      particles.push({
        x,
        y,
        originalX: x,
        originalY: y,
        radius,
        color: isDark ? `rgba(255, 255, 255, ${Math.random() * 0.3})` : `rgba(0, 0, 0, ${Math.random() * 0.2})`,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
      })
    }

    // Animation
    const animate = () => {
      requestAnimationFrame(animate)
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      for (let i = 0; i < particleCount; i++) {
        const p = particles[i]

        // Move particles
        p.x += p.speedX
        p.y += p.speedY

        // Mouse interaction
        if (isMouseInCanvas) {
          const dx = mousePosition.x - p.x
          const dy = mousePosition.y - p.y
          const distance = Math.sqrt(dx * dx + dy * dy)
          const maxDistance = 150

          if (distance < maxDistance) {
            const force = (maxDistance - distance) / maxDistance
            p.x -= dx * force * 0.03
            p.y -= dy * force * 0.03
          }

          // Gradually return to original position when not affected by mouse
          if (distance > maxDistance) {
            p.x += (p.originalX - p.x) * 0.01
            p.y += (p.originalY - p.y) * 0.01
          }
        } else {
          // Return to original position when mouse is not in canvas
          p.x += (p.originalX - p.x) * 0.01
          p.y += (p.originalY - p.y) * 0.01
        }

        // Bounce off edges
        if (p.x < 0 || p.x > canvas.width) {
          p.speedX *= -1
          p.x = p.x < 0 ? 0 : canvas.width
        }
        if (p.y < 0 || p.y > canvas.height) {
          p.speedY *= -1
          p.y = p.y < 0 ? 0 : canvas.height
        }

        // Draw particle
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = p.color
        ctx.fill()

        // Connect particles
        connectParticles(p, particles)
      }
    }

    // Connect particles with lines if they're close enough
    const connectParticles = (p1: (typeof particles)[0], particles: typeof particles) => {
      const maxDistance = 150

      for (let i = 0; i < particles.length; i++) {
        const p2 = particles[i]
        const dx = p1.x - p2.x
        const dy = p1.y - p2.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < maxDistance) {
          ctx.beginPath()
          ctx.strokeStyle = isDark
            ? `rgba(255, 255, 255, ${0.15 * (1 - distance / maxDistance)})`
            : `rgba(0, 0, 0, ${0.08 * (1 - distance / maxDistance)})`
          ctx.lineWidth = 0.5
          ctx.moveTo(p1.x, p1.y)
          ctx.lineTo(p2.x, p2.y)
          ctx.stroke()
        }
      }
    }

    // Mouse event handlers
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      })
    }

    const handleMouseEnter = () => {
      setIsMouseInCanvas(true)
    }

    const handleMouseLeave = () => {
      setIsMouseInCanvas(false)
    }

    canvas.addEventListener("mousemove", handleMouseMove)
    canvas.addEventListener("mouseenter", handleMouseEnter)
    canvas.addEventListener("mouseleave", handleMouseLeave)

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
      canvas.removeEventListener("mousemove", handleMouseMove)
      canvas.removeEventListener("mouseenter", handleMouseEnter)
      canvas.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [theme, mousePosition, isMouseInCanvas])

  useEffect(() => {
    drawParticles()
  }, [drawParticles])

  return <canvas ref={canvasRef} className={`${className}`} />
}
