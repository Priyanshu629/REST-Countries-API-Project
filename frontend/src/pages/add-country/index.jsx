import React from "react";
import useAddCountry from "../../hooks/useAddCountry";

function AddCountry() {
  const { countryData, setCountryData,handleAddCountry,isAdding } = useAddCountry();
  return (
    <main className="w-[90%] mx-auto p-2">
      <div className="max-w-[400px] h-[500px] overflow-y-scroll mx-auto p-2 rounded-md border-2 flex flex-col gap-3">
        <h1 className="font-bold text-xl text-center">Add Country</h1>

        <div className="">
          <input
            className="p-2 border-2 w-full rounded-md border-green-400"
            type="file"
            onChange={(e) =>
              setCountryData((prev) => {
                return { ...prev, flag: e.target.files[0] };
              })
            }
            
          />
        </div>

        <div className="">
          <input
            className="p-2 border-2 w-full rounded-md border-green-400"
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
            className="p-2 border-2 w-full rounded-md border-green-400"
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
            className="p-2 border-2 w-full rounded-md border-green-400"
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
            className="p-2 border-2 w-full rounded-md border-green-400"
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
            className="p-2 border-2 w-full rounded-md border-green-400"
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
            className="p-2 border-2 w-full rounded-md border-green-400"
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
            className="p-2 border-2 w-full rounded-md border-green-400"
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
            className="p-2 border-2 w-full rounded-md border-green-400"
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
            className="p-2 border-2 w-full rounded-md border-green-400"
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

        <button onClick={handleAddCountry}  className="w-full p-2 rounded-md border-2 bg-green-400 hover:bg-green-500 cursor-pointer">{isAdding?"Submitting...":"Submit"}</button>
      </div>
    </main>
  );
}

export default AddCountry;
