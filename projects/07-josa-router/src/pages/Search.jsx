import { useEffect, useState } from 'react'

export default function SearchPage({ routeParams }) {
  useEffect(() => {
    document.title = `Search: ${routeParams.query}`
  }, [])

  return (
    <div>
      <h1>Search Page</h1>
      <p>Search results for: {routeParams.query}</p>
    </div>
  )
}
