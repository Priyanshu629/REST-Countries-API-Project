import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import useGetCountryDetails from "./useGetCountryDetails";
import useRefetchCountries from "./useRefetchCountries";
import { useNavigate } from "react-router-dom";

function useUpdateCountry({ countryId }) {
  const details = useGetCountryDetails({ countryId });

  const [countryData, setCountryData] = useState({});
  const [updatedDetails, setUpdatedDetails] = useState({});
  const [isUpdating, setIsUpdating] = useState(false);
  const reFetch = useRefetchCountries()
  const navigate =  useNavigate()

  useEffect(() => {
    if (details) {
      setCountryData(details);
      setUpdatedDetails({
        name: details?.name,
        nativeName: details?.nativeName,
        capital: details?.capital,
        region: details?.region,
        subRegion: details?.subRegion,
        population: details?.population,
        currency: details?.currency,
        language: details?.language,
        borderCountry: details?.borderCountry,
      });
    }
  }, [details]);

  const handleUpdateCountry = async () => {
    try {
      if (
        !updatedDetails.name ||
        !updatedDetails.capital ||
        !updatedDetails.nativeName ||
        !updatedDetails.region ||
        !updatedDetails.subRegion ||
        !updatedDetails.currency ||
        !updatedDetails.population ||
        !updatedDetails.language ||
        !updatedDetails.borderCountry
      ) {
        return toast.error("All fields are required");
      }

      setIsUpdating(true);

      console.log(updatedDetails);

      let response = await fetch(
        `${import.meta.env.VITE_BASE_BACKEND_URL}/update-country/${countryId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedDetails),
        }
      );
      const data = await response.json();
      if (response.ok) {
        await reFetch()
        navigate("/")
        toast.success(data?.message);
        setIsUpdating(false);
      }
    } catch (error) {
      toast.error(error.message);
      setIsUpdating(false);
    }
  };

  return {
    updatedDetails,
    countryData,
    setUpdatedDetails,
    handleUpdateCountry,
    isUpdating,
  };
}

export default useUpdateCountry;
