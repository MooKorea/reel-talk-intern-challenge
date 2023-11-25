"use client"
import { useQueryState } from "next-usequerystate"
import { useEffect } from "react"

export default function TopMovies() {
    const [_progress, setProgress] = useQueryState("progress")
    useEffect(() => {
      setProgress("3")
    }, [])
    return (
        <div>hi</div>
    )
}