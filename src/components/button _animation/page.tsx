"use client"

import React from "react"

interface Props {
  children: React.ReactNode
}

export default function AttentionButton({ children }: Props) {
  return (
    <div className="bounce-btn cta-attention">
      {children}
    </div>
  )
}