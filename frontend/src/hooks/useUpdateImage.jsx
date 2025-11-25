import React, { useState } from "react";
import toast from "react-hot-toast";
import useRefetchCountries from "./useRefetchCountries";
import { useNavigate } from "react-router-dom";

function useUpdateImage({ flagImageId, countryId }) {
  const [image, setImage] = useState(null);
  const [isImageUpdating,setIsImageUpdating]= useState(false)
  const reFetch = useRefetchCountries();
  const navigate = useNavigate()

  async function updateImage() {
    try {
      if (!image) {
        return toast.error("Image is required");
      }
 

      const imageData = new FormData();
      imageData.append("flag", image);
     
      setIsImageUpdating(true)

      let response = await fetch(
        `http://localhost:4000/api/country/update-image/${countryId}?flagImageId=${flagImageId}`,
        {
          method: "PATCH",
          body: imageData,
        }
      );
      const data = await response.json();
      if (response.ok) {
        await reFetch();
        toast.success(data.message);
        setIsImageUpdating(false)
        navigate("/")
      }
    } catch (error) {
      toast.error(error.message);
      setIsImageUpdating(false)
    }
  }

  return { setImage, updateImage,isImageUpdating };
}

export default useUpdateImage;
