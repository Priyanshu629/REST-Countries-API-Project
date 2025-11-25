import { createContext, useContext, useEffect, useState } from "react";
import useGetAllCountries from "../hooks/useGetAllCountries";
import useGetRegions from "../hooks/useGetRegions";

const searchFilterContext = createContext();

export const SearchFilterProvider = ({ children }) => {
  const [searchText, setSearchText] = useState("");
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [region, setRegion] = useState("all");
  const [countries, setCountries] = useState([]);
  const [regions, setRegions] = useState([]);

  
    useGetAllCountries(setFilteredCountries, setCountries, setRegions);
 

  // Searching and Filtering
  useEffect(() => {
    let result = countries;

    if (searchText) {
      result = result?.filter((country) =>
        country?.name?.toLowerCase().includes(searchText.toLowerCase())
      );
    }
    if (region !== "all") {
      result = result?.filter(
        (country) => country?.region?.toLowerCase() == region.toLowerCase()
      );
    }

    setFilteredCountries(result);
  }, [searchText, region]);

  return (
    <searchFilterContext.Provider
      value={{
        searchText,
        setSearchText,
        filteredCountries,
        regions,
        setRegion,
        region,
        setFilteredCountries,
        setCountries,
        setRegions
      }}
    >
      {children}
    </searchFilterContext.Provider>
  );
};

export const useSearchFilter = () => useContext(searchFilterContext);
