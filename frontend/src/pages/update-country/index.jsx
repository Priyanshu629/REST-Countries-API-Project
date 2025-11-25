import { useParams } from "react-router-dom";
import useUpdateCountry from "../../hooks/useUpdateCountry";
import useUpdateImage from "../../hooks/useUpdateImage";


function UpdateCountry() {
    const {countryId} = useParams()
    
 const {countryData,updatedDetails,setUpdatedDetails,handleUpdateCountry,isUpdating}= useUpdateCountry({countryId})

 const {flagImageId}=countryData

 const {setImage,updateImage,isImageUpdating} = useUpdateImage({flagImageId,countryId})

 console.log(countryData?.flagImageId)

  return (
   <main className="w-[90%] mx-auto p-2 my-2">
      <div className="max-w-[400px] mx-auto border-2 border-orange-300 p-3  rounded-md ">
        <h1 className="font-bold text-xl text-center my-2">Edit & Update Country</h1>

        <div className=" h-[400px] overflow-y-scroll scrollbar    flex flex-col gap-3">
          
          <div className="border-2 rounded-md p-2 ">
            <input type="file" onChange={(e)=> setImage(e.target.files[0])}/>
            <button className="bg-gray-500 p-2 rounded-md hover:bg-gray-400 cursor-pointer" onClick={updateImage}>{isImageUpdating?"Updating...":"Update"}</button>
          </div>
         
          <img src={countryData?.flag} className="w-[100px]" />

          <div className="">
            <input
              className="p-2 border-2 w-full placeholder-yellow-500 rounded-md border-green-400"
              type="text"
              placeholder="Enter Country Name"
              onChange={(e) =>
                setUpdatedDetails((prev) => {
                  return { ...prev, name: e.target.value };
                })
              }
              value={updatedDetails?.name}
            />
          </div>
          <div className="">
            <input
              className="p-2 border-2 w-full placeholder-yellow-500 rounded-md border-green-400"
              type="text"
              placeholder="Enter Country Native Name"
              onChange={(e) =>
                setUpdatedDetails((prev) => {
                  return { ...prev, nativeName: e.target.value };
                })
              }
              value={updatedDetails?.nativeName}
            />
          </div>
          <div className="">
            <input
              className="p-2 border-2 w-full placeholder-yellow-500 rounded-md border-green-400"
              type="text"
              placeholder="Enter Country Region"
              onChange={(e) =>
                setUpdatedDetails((prev) => {
                  return { ...prev, region: e.target.value };
                })
              }
              value={updatedDetails?.region}
            />
          </div>
          <div className="">
            <input
              className="p-2 border-2 w-full placeholder-yellow-500 rounded-md border-green-400"
              type="text"
              placeholder="Enter Country Sub Region"
              onChange={(e) =>
                setUpdatedDetails((prev) => {
                  return { ...prev, subRegion: e.target.value };
                })
              }
              value={updatedDetails?.subRegion}
            />
          </div>
          <div className="">
            <input
              className="p-2 border-2 w-full placeholder-yellow-500 rounded-md border-green-400"
              type="text"
              placeholder="Enter Country Capital"
              onChange={(e) =>
                setUpdatedDetails((prev) => {
                  return { ...prev, capital: e.target.value };
                })
              }
              value={updatedDetails?.capital}
            />
          </div>
          <div className="">
            <input
              className="p-2 border-2 w-full placeholder-yellow-500 rounded-md border-green-400"
              type="text"
              placeholder="Enter Country Currency"
              onChange={(e) =>
                setUpdatedDetails((prev) => {
                  return { ...prev, currency: e.target.value };
                })
              }
              value={updatedDetails?.currency}
            />
          </div>
          <div className="">
            <input
              className="p-2 border-2 w-full placeholder-yellow-500 rounded-md border-green-400"
              type="text"
              placeholder="Enter Country Language"
              onChange={(e) =>
                setUpdatedDetails((prev) => {
                  return { ...prev, language: e.target.value };
                })
              }
              value={updatedDetails?.language}
            />
          </div>
          <div className="">
            <input
              className="p-2 border-2 w-full placeholder-yellow-500 rounded-md border-green-400"
              type="text"
              placeholder="Enter Border Countries with comma seperate "
              onChange={(e) =>
                setUpdatedDetails((prev) => {
                  return { ...prev, borderCountry: e.target.value };
                })
              }
              value={updatedDetails?.borderCountry}
            />
          </div>
          <div className="">
            <input
              className="p-2 border-2 w-full placeholder-yellow-500 rounded-md border-green-400"
              type="number"
              placeholder="Enter Country Population in number"
              onChange={(e) =>
                setUpdatedDetails((prev) => {
                  return { ...prev, population: e.target.value };
                })
              }
              value={updatedDetails?.population}
            />
          </div>
        </div>

    <div className="w-[80%] mx-auto my-2">
        <button
          onClick={handleUpdateCountry}
          className="w-full p-2 rounded-md border-2 bg-green-400 hover:bg-green-500 cursor-pointer"
        >
          {isUpdating ? "Submitting..." : "Submit"}
        </button>
</div>

      </div>
    </main>
  )
}

export default UpdateCountry