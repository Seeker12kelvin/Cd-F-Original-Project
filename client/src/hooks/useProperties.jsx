import { useState } from "react";
import properDetails from "../data/data";

const useProperties = () => {

  const [filteredProperties, setFilteredProperties] = useState(properDetails);
  const [moreFilters, setMoreFilters] = useState(false);

  const handleSearch = (term) => {
    const filtered = properDetails.filter(p =>
      p.name.toLowerCase().includes(term.toLowerCase()) ||
      p.location.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredProperties(filtered);
  };

  return {
    filteredProperties,
    handleSearch,
    moreFilters,
    setMoreFilters
  };
};

export default useProperties;
