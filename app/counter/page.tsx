"use client"

import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import { toast } from "sonner"



export default function CounterPage() {

    const [count, setCount] = useState<number>(0)

    useEffect(() => {
        toast.info(`Count is now ${count}`)
    }, [count])

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
            <h1 className="text-2xl font-bold text-center text-gray-900">Counter</h1>
            <div>Current Count: {count}</div>
            <Button onClick={() => setCount(count + 1)}>Increment</Button>
        </div>
        </div>
    )
}       