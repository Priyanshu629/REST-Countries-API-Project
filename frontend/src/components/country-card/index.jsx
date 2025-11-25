import React, { useState } from "react";
import "./style.css";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import useGetAllCountries from "../../hooks/useGetAllCountries";
import { useSearchFilter } from "../../context/search-filter";

function CountryCard({
  _id,
  name,
  flag,
  flagImageId,
  region,
  population,
  capital,
}) {
  const [isDeleting, setIsDeleting] = useState(false);
  const { getAllCountries } = useGetAllCountries();
  const {setFilteredCountries}= useSearchFilter()

  async function deleteCountry() {
    setIsDeleting(true);
    try {
      let response = await fetch(
        `http://localhost:4000/api/country/delete-country/${_id}?imageId=${flagImageId}`,
        {
          method: "DELETE",
        }
      );

      let data = await response.json();

      if (response.ok) {
       
       
          location.reload()
          toast.success(data.message);
          setIsDeleting(false);
        
      }
    } catch (error) {
      toast.error(error.message);
      setIsDeleting(false);
    }
  }

  return (
    <div className="country">
      <img src={flag} alt={name} />
      <h2>{name}</h2>

      <div>
        <span>Population : {population}</span>
        <span>Region : {region}</span>
        <span>Capital : {capital}</span>
      </div>

      <Link className="see-details" to={`/details/${_id}`}>
        See Details
      </Link>
      <button
        onClick={deleteCountry}
        className="bg-red-400 rounded-md border-2 p-2 hover:bg-red-500 font-bold cursor-pointer"
      >
        {isDeleting ? "Deleting.." : "Delete"}{" "}
      </button>
    </div>
  );
}

export default CountryCard;
