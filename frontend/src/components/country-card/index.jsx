
import { Link, useNavigate } from "react-router-dom";
import useDeleteCountry from "../../hooks/useDeleteCountry";


function CountryCard({
  _id,
  name,
  flag,
  flagImageId,
  region,
  population,
  capital,
}) {
  
const {deleteCountry,isDeleting} = useDeleteCountry({_id,flagImageId})

  return (
    <div className="max-w-[300px] rounded-md p-2 flex gap-4 flex-col border-2">
      <img src={flag} alt={name} />
      <h2 className="text-2xl italic font-semibold">{name}</h2>

      <div className="flex flex-col font-bold ">
        <span>Population : {population}</span>
        <span>Region : {region}</span>
        <span>Capital : {capital}</span>
      </div>

      <Link className="w-full text-center  border-2 rounded-sm bg-yellow-500 hover:bg-yellow-400" to={`/details/${_id}`}>
        See Details
      </Link>

      <div className="flex justify-between   w-full">
        <button
          onClick={deleteCountry}
          className="bg-red-400 rounded-md border-2 p-2 hover:bg-red-500 cursor-pointer"
        >
          {isDeleting ? "Deleting.." : "Delete"}
        </button>

        <Link to={`/update-country/${_id}`} className="bg-gray-400 border-2 p-2 rounded-sm cursor-pointer hover:bg-gray-500">Update</Link>
      </div>

    </div>
  );
}

export default CountryCard;
