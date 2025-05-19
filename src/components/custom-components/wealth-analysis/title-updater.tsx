"use client"

import { useEffect } from "react"

export function TitleUpdater() {
  useEffect(() => {
    const header = document.querySelector("header h1")
    if (header) {
      header.textContent = "Owner Wealth Analysis"
    }

    // Restore original title when component unmounts
    return () => {
      if (header) {
        header.textContent = "Dashboard"
      }
    }
  }, [])

  return null
}
