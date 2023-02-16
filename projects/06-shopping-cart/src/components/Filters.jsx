import './Filters.css'
import { useState, useId } from 'react'
import { useFilters } from '../hooks/useFilters'

export function Filters() {
  const { setFilters } = useFilters()
  const [minPrice, setPrice] = useState(0)
  const minPriceFilterId = useId()
  const categoryFilterId = useId()

  const handleChangeMinPrice = (event) => {
    setPrice(event.target.value)
    setFilters((prevState) => ({ ...prevState, minPrice: event.target.value }))
  }

  const handleChangeCategory = (event) => {
    setFilters((prevState) => ({ ...prevState, category: event.target.value }))
  }

  return (
    <section className="filters">
      <div>
        <label htmlFor={minPriceFilterId}>Precio a partir de:</label>
        <input
          type="range"
          id={minPriceFilterId}
          min="0"
          max="1000"
          onChange={handleChangeMinPrice}
        />
        <span>{minPrice}</span>
      </div>
      <div>
        <label htmlFor={categoryFilterId}>Categoría</label>
        <select id={categoryFilterId} onChange={handleChangeCategory}>
          <option value="all">todas</option>
          <option value="laptops">Portátiles</option>
          <option value="smartphones">Móviles</option>
        </select>
      </div>
    </section>
  )
}
