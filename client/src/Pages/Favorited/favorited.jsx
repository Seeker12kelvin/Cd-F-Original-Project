import React from 'react'
import { useLocation } from 'react-router-dom'

const Favorite = () => {

  const { name } = useLocation().state

  return (
    <div>Favorite{name}</div>
  )
}

export default Favorite