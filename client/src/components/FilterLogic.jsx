import React from 'react'
import { useState, useMemo } from 'react'

const useFilterLogic = (properties) => {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');
  const [bedrooms, setBedrooms] = useState(0);
  const [bathrooms, setBathrooms] = useState(0);

  const filteredProperties = useMemo(() => {
    return properties.filter(p => {
      return (
        (!category || p.category === category) &&
        (!bedrooms || p.beds >= bedrooms) &&
        (!bathrooms || p.bathrooms >= bathrooms)
      );
    });
  }, [properties, category, bedrooms, bathrooms]);

  return {
    filteredProperties,
    bedrooms,
    bathrooms,
    category,
    search,
    setSearch,
    setCategory,
    setBedrooms,
    setBathrooms,
    resetFilters: () => {
      setSearch('');
      setCategory('');
      setBedrooms(0);
      setBathrooms(0);
    }
  };
}

export default useFilterLogic