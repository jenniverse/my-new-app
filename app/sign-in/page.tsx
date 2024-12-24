"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useEffect, useState } from "react"
import { toast } from "sonner"


export default function SignInPage() {

  const [error, setError] = useState<{
    email: string | null
    password: string | null
  }>({
    email: "",
    password: ""
  })


  useEffect(() => {
    if (!error.email && !error.password) {
      toast.info(`Good to go!`)
    }
  }, [error])

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center text-gray-900">Sign In</h1>
        <form  className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              onChange={(event) => {
                if (event.target.value.includes("@")) {
                  setError({ ...error, email: null })
                } else {
                  setError({ ...error, email: "Please enter a valid email." })
                }
              }}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              name="password"
              type="password"
              required
              onChange={(event) => {
                if (event.target.value.length >= 4) {
                  setError({ ...error, password: null })
                } else {
                  setError({ ...error, password: "Password must be at least 4 characters." })
                }
              }}
            />
          </div>
          {error && <div className="text-red-500">{error.email || error.password}</div>}
          <Button type="submit" className="w-full" disabled={!!error.email || !!error.password}>
            Sign In
          </Button>
        </form>
      </div>
    </div>
  )
}
