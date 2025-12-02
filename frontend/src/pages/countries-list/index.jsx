import React, { useEffect, useState } from "react";
import "./style.css";
import CountryCard from "../../components/country-card";
import { useSearchFilter } from "../../context/search-filter";
import SearchFilter from "../../components/search-filter";

function CountryList() {
  const { filteredCountries, searchText, region } = useSearchFilter();

  // UI messages


  let msg = `Showing result for "${searchText}"`;
  let filterMsg = `Showing countries of the region "${region}"`;

  return (
    <div className="content">
      
      <SearchFilter />

      {/* showing messages */}

      {searchText ? <p className="msg">{msg}</p> : ""}
      {filteredCountries?.length == 0 && <p className="msg">No result</p>}

      {region !== "all" ? <p className="msg">{filterMsg}</p> : ""}

      {/* listing countries */}
      
      <div className="country-list">
        {filteredCountries?.map((country, index) => {
          return <CountryCard key={index} {...country} />;
        })}
      </div>

    </div>
  );
}

export default CountryList;
