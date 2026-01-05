import React, { useState } from 'react'
import properDetails from '../../../data/data';
import RenderedMap from '../../../components/renderedMap';
import SearchProperty from './Property/searchProperty';
import User from '../../../components/User';
import useFilterLogic from '../../../components/FilterLogic';

const RentSearch = () => {

  const isStyle = {
    color: '#100A55'
  }

  const isStyleTwo = {
    color: '#100A55'
  }

  const [touch, setTouch] = useState(false)
  const [sort, setSort] = useState(false)

  const [properties, setProperties] = useState(properDetails);
  const filterLogic = useFilterLogic(properties);
  const { filteredProperties } = filterLogic;

  const filtered = (filt) => {
    setProperties(properDetails)
    if(!touch){
      const filter = properties.filter(data => data.beds >= filt)
      setProperties(filter);
    }
  }

  const handleSearch = (searchTerm) => {
    const filtered = properDetails.filter((property) =>
      property.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      property.location.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setProperties(filtered);
  }

  return (
    <main className='flex mt-21 justify-between h-screen w-screen relative'>
      <RenderedMap />
      <SearchProperty
        filt={filtered}
        sor={sort}
        search={handleSearch}
        btntouch={touch}
        proper={filteredProperties}
        styleOne={isStyle}
        styleTwo={isStyleTwo}
        setBtnTouch={setTouch}
        setSor={setSort}
        filtLogic={filterLogic}
      />
    </main>
  )
}

export default RentSearch