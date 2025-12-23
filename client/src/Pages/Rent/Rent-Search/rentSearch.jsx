import React, { useContext, useState } from 'react'
import properDetails from '../../../data/data';
import RenderedMap from '../../../components/renderedMap';
import SearchProperty from './Property/searchProperty';
import User from '../../../components/User';
import MoreFilters from './moreFilters';

const RentSearch = () => {
  
  const { moreFilters } = useContext(User)

  const isStyle = {
    color: '#100A55'
  }

  const isStyleTwo = {
    color: '#100A55'
  }

  const [properties, setProperties] = useState(properDetails)
  const [touch, setTouch] = useState(false)
  const [sort, setSort] = useState(false)

  const filtered = (filt) => {
    setProperties(properDetails)
    if(!touch){
      const filter = properties.filter(data => data.bathrooms >= filt)
      setProperties(filter);
    }
  }

  return (
    <main className='flex mt-21 justify-between h-screen w-screen'>
      <RenderedMap />
      <SearchProperty 
        filt={filtered}
        sor={sort}
        btntouch={touch}
        proper={properties}
        styleOne={isStyle}
        styleTwo={isStyleTwo}
        setBtnTouch={setTouch}
        setSor={setSort}/>
      {moreFilters ? <MoreFilters />: null}
    </main>
  )
}

export default RentSearch