import React from "react";
import useAddCountry from "../../hooks/useAddCountry";
import "./style.css"

function AddCountry() {

  const { countryData, setCountryData, handleAddCountry, isAdding } =  useAddCountry();
  
  return (
    <main className="w-[90%] mx-auto p-2 my-2">
      <div className="max-w-[400px] mx-auto border-2 border-orange-300 p-3  rounded-md ">
        <h1 className="font-bold text-xl text-center my-2">Add Country</h1>

        <div className=" h-[400px] overflow-y-scroll scrollbar    flex flex-col gap-3">

          <div className="">
            <input
              id="flag"
              className="p-2 border-2 w-full placeholder-yellow-500 rounded-md border-green-400"
              type="file"
              onChange={(e) =>
                setCountryData((prev) => {
                  return { ...prev, flag: e.target.files[0] };
                })
              }
              hidden

            />
          </div>

            <label htmlFor="flag" className="border-2 text-center p-2 rounded-sm w-full italic cursor-pointer hover:bg-orange-200 bg-orange-300">
              {countryData?.flag?`Selected Image  => ${countryData?.flag?.name}`:"Select Image"}
            </label>

          <div className="">
            <input
              className="p-2 border-2 w-full placeholder-yellow-500 rounded-md border-green-400"
              type="text"
              placeholder="Enter Country Name"
              onChange={(e) =>
                setCountryData((prev) => {
                  return { ...prev, name: e.target.value };
                })
              }
              value={countryData?.name}
            />
          </div>
          <div className="">
            <input
              className="p-2 border-2 w-full placeholder-yellow-500 rounded-md border-green-400"
              type="text"
              placeholder="Enter Country Native Name"
              onChange={(e) =>
                setCountryData((prev) => {
                  return { ...prev, nativeName: e.target.value };
                })
              }
              value={countryData?.nativeName}
            />
          </div>
          <div className="">
            <input
              className="p-2 border-2 w-full placeholder-yellow-500 rounded-md border-green-400"
              type="text"
              placeholder="Enter Country Region"
              onChange={(e) =>
                setCountryData((prev) => {
                  return { ...prev, region: e.target.value };
                })
              }
              value={countryData?.region}
            />
          </div>
          <div className="">
            <input
              className="p-2 border-2 w-full placeholder-yellow-500 rounded-md border-green-400"
              type="text"
              placeholder="Enter Country Sub Region"
              onChange={(e) =>
                setCountryData((prev) => {
                  return { ...prev, subRegion: e.target.value };
                })
              }
              value={countryData?.subRegion}
            />
          </div>
          <div className="">
            <input
              className="p-2 border-2 w-full placeholder-yellow-500 rounded-md border-green-400"
              type="text"
              placeholder="Enter Country Capital"
              onChange={(e) =>
                setCountryData((prev) => {
                  return { ...prev, capital: e.target.value };
                })
              }
              value={countryData?.capital}
            />
          </div>
          <div className="">
            <input
              className="p-2 border-2 w-full placeholder-yellow-500 rounded-md border-green-400"
              type="text"
              placeholder="Enter Country Currency"
              onChange={(e) =>
                setCountryData((prev) => {
                  return { ...prev, currency: e.target.value };
                })
              }
              value={countryData?.currency}
            />
          </div>
          <div className="">
            <input
              className="p-2 border-2 w-full placeholder-yellow-500 rounded-md border-green-400"
              type="text"
              placeholder="Enter Country Language"
              onChange={(e) =>
                setCountryData((prev) => {
                  return { ...prev, language: e.target.value };
                })
              }
              value={countryData?.language}
            />
          </div>
          <div className="">
            <input
              className="p-2 border-2 w-full placeholder-yellow-500 rounded-md border-green-400"
              type="text"
              placeholder="Enter Border Countries with comma seperate "
              onChange={(e) =>
                setCountryData((prev) => {
                  return { ...prev, borderCountry: e.target.value };
                })
              }
              value={countryData?.borderCountry}
            />
          </div>
          <div className="">
            <input
              className="p-2 border-2 w-full placeholder-yellow-500 rounded-md border-green-400"
              type="number"
              placeholder="Enter Country Population in number"
              onChange={(e) =>
                setCountryData((prev) => {
                  return { ...prev, population: e.target.value };
                })
              }
              value={countryData?.population}
            />
          </div>
        </div>

    <div className="w-[80%] mx-auto my-2">
        <button
          onClick={handleAddCountry}
          className="w-full p-2 rounded-md border-2 bg-green-400 hover:bg-green-500 cursor-pointer"
        >
          {isAdding ? "Submitting..." : "Submit"}
        </button>
</div>

      </div>
    </main>
  );
}

export default AddCountry;
