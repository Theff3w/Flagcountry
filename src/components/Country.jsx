import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const Country = () => {
  const [country, setCountry] = useState({});
  const { name } = useParams();

  useEffect(() => {
    const fetchCountryData = async () => {
      try {
        const response = await fetch(`https://restcountries.com/v3.1/name/${name}`);
        if (!response.ok) {
          throw new Error('Country not found');
        }
        const countryData = await response.json();
        setCountry(countryData[0]);

        console.log(countryData);
      } catch (error) {
        console.error('Error fetching country data:', error);
      }
    };

    fetchCountryData();
  }, [name]);

  return (
    <>
      <Link to="/" className="btn btn-light">
        <i className="fas fa-arrow-left"></i> Back Home
      </Link>
      {country && (
        <div>
          <h1>{country.name?.common}</h1>
          <h2>Capital: {country.capital?.[0]}</h2>
          <p>Population: {country.population}</p>
          <p>Region: {country.region}</p>
          <p>Subregion: {country.subregion}</p>
          <h3>Languages:</h3>
          <ul>
            {country.languages && Object.values(country.languages).map((language, index) => (
              <li key={index}>{language}</li>
            ))}
          </ul>
          <h3>Flag:</h3>
          <img src={country.flags?.png} alt={`${country.name?.common} Flag`} style={{ maxWidth: '200px' }} />
        </div>
      )}
    </>
  );
};

export default Country;
