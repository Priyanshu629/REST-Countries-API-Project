import React from "react";
import useRefetchCountries from "./useRefetchCountries";
import { useState } from "react";
import toast from "react-hot-toast";

function useDeleteCountry({ _id, flagImageId }) {
  const [isDeleting, setIsDeleting] = useState(false);
  const reFetch = useRefetchCountries();

  async function deleteCountry() {
    setIsDeleting(true);
    try {
      let response = await fetch(
        `${import.meta.env.VITE_BASE_BACKEND_URL}/delete-country/${_id}?imageId=${flagImageId}`,
        {
          method: "DELETE",
        }
      );

      let data = await response.json();

      if (response.ok) {
        await reFetch();
        toast.success(data.message);
        setIsDeleting(false);
      }
    } catch (error) {
      toast.error(error.message);
      setIsDeleting(false);
    }
  }

  return {deleteCountry,isDeleting}
}

export default useDeleteCountry;
