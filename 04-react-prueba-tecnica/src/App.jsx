import { useEffect, useState } from 'react'
import './App.css'

// const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`
const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com/'

export function App() {
  const [fact, setFact] = useState()
  const [imageURL, setImageURL] = useState()

  // Recuperar la frase
  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then((res) => {
        if (!res.ok) throw new Error('Error fetching data')
        return res.json()
      })
      .then((data) => {
        setFact(data.fact)
        const { fact } = data
        setFact(fact)

        // Otra forma con async, debemos envolverlo

        // async function getRandomFact() {
        //   const res = await fetch(CAT_ENDPOINT_RANDOM_FACT)
        //   const json = await res.json()
        //   setFact(json.fact)
        // }
        // getRandomFact()
      })
      .catch((err) => {
        // Error si hay error en la respuesta
        // Error si un error en la petición
      })
  }, [])

  // recuperar imagen con cada nueva frase
  useEffect(() => {
    if (!fact) return
    const firstWord = fact.split(' ')[0]
    // Tres primera palabas
    // const firstWord = fact.split(' ').slice(0, 3).join()
    // o
    // const firstWord = fact.split(' ', 3)

    fetch(`https://cataas.com/cat/says/${firstWord}?json=true`)
      .then((res) => {
        if (!res.ok) throw new Error('Error fetching cat image')
        return res.json()
      })
      .then((response) => {
        const { url } = response
        console.log(response)
        setImageURL(url)
      })
  }, [fact])

  return (
    <main>
      <h1>App de 🐱</h1>
      {fact && <p> {fact}</p>}
      {imageURL && (
        <img
          src={`${CAT_PREFIX_IMAGE_URL}${imageURL}`}
          alt={`Image extracted from first word of the fact`}
        />
      )}
    </main>
  )
}
