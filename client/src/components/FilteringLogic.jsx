import React, { useMemo, useState } from 'react'
import properDetails from '../data/data'

const FilteringLogic = ({category, range, fOne, fTwo}) => {

  const [categoryData, setCategoryData] = useState(category)
  const [rangeData, setRangeData] = useState(range)
  const [fOneData, setFoneData] = useState(fOne)
  const [fTwoData, setFtwoData] = useState(fTwo)
  
  const filter = properDetails.filter(data => {
    const categoryMatch = !categoryData || data.category.includes(categoryData)
    const rangeMatch = !rangeData || data.price.includes(rangeData)
    const fOneMatch = !fOneData || data.bedroom.includes(fOneData)
    const fTwoMatch = !fTwoData || data.bathrooms.includes(fTwoData)
    return categoryMatch && rangeMatch && fOneMatch && fTwoMatch
  })

  return (
    
  )
}

export default FilteringLogic