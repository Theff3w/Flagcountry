import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const url = "https://restcountries.com/v3.1/all";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  
  const fetchCountryData = async () => {
    try {
      const response = await fetch(url);
      const countries = await response.json();
      setCountries(countries);
      console.log(countries);
    } catch (error) {
      console.error("Error fetching country data:", error);
    }
  };

  useEffect(() => {
    fetchCountryData();
  }, []);
  return (
    <>
      <section className="grid">
        {countries.map((country, index) => {
          if (!country || !country.name || !country.population || !country.region || !country.capital || !country.flags) {
            return null; 
          }
  
          const { name, population, region, capital, flags } = country;
          const flagUrl = flags ? flags.svg : null;
  
          return (
            <article key={index}>
              <div>
                {flagUrl && <img src={flagUrl} alt={name.common} />}
                
                <div className="details">
                <h3>{name.common}</h3>
                <h4>
                    Population: <span>{population}</span>
                </h4>
                <h4>
                    Region: <span>{region}</span>
                </h4>
                <h4>
                    Capital: <span>{capital[0]}</span>
                </h4>
                <Link to={`/countries/${name.common}`}>Learn more</Link>
                </div>

              </div>
            </article>
          );
        })}
      </section>
    </>
  );
}

export default Countries;
