'use client' // Error components must be Client Components
 
import { useEffect } from 'react'
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
 
   return(
        <main className="error">
            <h1>An Error occurred!</h1>
            <p>Failed to fetch meals!</p>
        </main>
    )
}
