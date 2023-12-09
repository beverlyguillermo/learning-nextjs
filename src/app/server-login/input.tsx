// We're using a client component to show a loading state
"use client"

import { useFormStatus } from "react-dom"

export function Input() {
  const { pending } = useFormStatus()

  return (
    <input
      type="text"
      disabled={pending}
      name="username"
      placeholder=""
      defaultValue="Robot"
      required
      autoComplete="off"
    />
  )
}
