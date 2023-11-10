import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const Country = () => {
  const [country, setCountry] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    const fetchCountryData = async () => {
      try {
        const response = await fetch(`https://restcountries.com/v3.1/name/${name}`);
        if (!response.ok) {
          throw new Error('Country not found');
        }
        const countryData = await response.json();
        setCountry(countryData);

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
      <h1>{name}</h1>
      {country.length > 0 && (
        <div>
          
          <h2>Capital: {country[0].capital?.[0]}</h2>
          
        </div>
      )}
    </>
  );
};

export default Country;
