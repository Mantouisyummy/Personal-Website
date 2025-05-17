import type React from "react"
import AboutPageScript from "./page-script"
import ClientOnly from "@/components/client-only"

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
      <ClientOnly>
        <AboutPageScript />
      </ClientOnly>
    </>
  )
}
