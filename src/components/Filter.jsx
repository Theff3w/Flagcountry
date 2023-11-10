import { useState, useEffect } from "react";

const Filter = () => {
  const [searchValue, setSearchValue] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("Filter by region");
  const [visibleCountries, setVisibleCountries] = useState([]);

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleRegionChange = (e) => {
    setSelectedRegion(e.target.value);
  };

  useEffect(() => {
    const countryName = document.querySelectorAll(".country-name");
    const visibleCountriesArray = [];

    countryName.forEach((name) => {
      const country = name.parentElement.parentElement;
      const region = country.querySelector(".region").innerText;

      const isMatchSearch =
        name.innerText.toLowerCase().includes(searchValue.toLowerCase()) ||
        searchValue === "";

      const isMatchRegion =
        selectedRegion === "Filter by region" ||
        region.toLowerCase() === selectedRegion.toLowerCase();

      if (isMatchSearch && isMatchRegion) {
        visibleCountriesArray.push(country);
      }
    });

    setVisibleCountries(visibleCountriesArray);
  }, [searchValue, selectedRegion]);

  return (
    <section className="filter">
      <form className="form-control">
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search for country"
          value={searchValue}
          onChange={handleSearchChange}
        />
      </form>
      <div className="region-filter">
        <select
          name="select"
          id="select"
          className="select"
          value={selectedRegion}
          onChange={handleRegionChange}
        >
          <option value="Filter by region">Filter by region</option>
          <option value="Africa">Africa</option>
          <option value="America">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </section>
  );
};

export default Filter;
