import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import useRefetchCountries from "./useRefetchCountries";

function useAddCountry() {
  const [countryData, setCountryData] = useState({
    name: "",
    nativeName: "",
    capital: "",
    region: "",
    subRegion: "",
    flag: null,
    population: "",
    currency: "",
    language: "",
    borderCountry: "",
  });
  const [isAdding, setIsAdding] = useState(false);
  const navigate = useNavigate();
  const reFetch = useRefetchCountries();

  const handleAddCountry = async () => {
    try {
      if (
        !countryData.name ||
        !countryData.capital ||
        !countryData.nativeName ||
        !countryData.region ||
        !countryData.subRegion ||
        !countryData.currency ||
        !countryData.population ||
        !countryData.language ||
        !countryData.borderCountry ||
        !countryData?.flag
      ) {
        return toast.error("All fields are required");
      }

      setIsAdding(true);

      let formData = new FormData();

      formData.append("name", countryData.name);
      formData.append("nativeName", countryData.nativeName);
      formData.append("capital", countryData.capital);
      formData.append("region", countryData.region);
      formData.append("subRegion", countryData.subRegion);
      formData.append("flag", countryData.flag);
      formData.append("population", countryData.population);
      formData.append("currency", countryData.currency);
      formData.append("language", countryData.language);
      formData.append("borderCountry", countryData.borderCountry);

      let response = await fetch(
        "http://localhost:4000/api/country/add-country",
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await response.json();
      if (response.ok) {
        await reFetch();
        toast.success(data?.message);
        navigate("/");
        setIsAdding(false);
      }
    } catch (error) {
      toast.error(error.message);
      setIsAdding(false);
    }
  };

  return { countryData, setCountryData, handleAddCountry, isAdding };
}

export default useAddCountry;
