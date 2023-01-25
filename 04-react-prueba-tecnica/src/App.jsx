import './App.css'
import { useCatFact } from './hooks/useCatFact'
import { useCatImage } from './hooks/useCatImage'

// const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`

export function App() {
  const { fact, refreshFact } = useCatFact()
  const { imageURL } = useCatImage({ fact })

  const handleClick = async () => {
    refreshFact()
  }

  return (
    <main>
      <h1>App de 🐱</h1>
      <button onClick={handleClick}>Get new fact</button>
      {fact && <p> {fact}</p>}
      {imageURL && (
        <img
          src={imageURL}
          alt={`Image extracted from first word of the fact`}
        />
      )}
    </main>
  )
}
