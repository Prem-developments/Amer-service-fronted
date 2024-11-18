// CountrySelect.js
import React, { useState } from 'react';
import './Contact.css'
import { MdKeyboardArrowDown } from "react-icons/md";
const countries = [
  { value: 'ZZ', label: 'International', code: '+00', flagSrc: '/assets/international.svg' },
  { value: 'AE', label: 'United Arab Emirates', code: '+971', flagSrc: '/assets/contact2.svg' },
  { value: 'US', label: 'United States', code: '+1', flagSrc: '/assets/UA.svg' },
  { value: 'AE', label: 'United Arab Emirates', code: '+971', flagSrc: '/assets/contact2.svg' },
  { value: 'US', label: 'United States', code: '+1', flagSrc: '/assets/UA.svg' },
  // Add more countries as needed with `code` and `flagSrc` properties.
];

const CountrySelect = () => {
  const [selectedCountry, setSelectedCountry] = useState(countries[1]); // Default to UAE

  const handleCountryChange = (event) => {
    const country = countries.find(c => c.value === event.target.value);
    setSelectedCountry(country);
  };

  return (
    <div className="flex items-center">
      <div className="PhoneInputCountry">
        <select
          className="PhoneInputCountrySelect"
          value={selectedCountry.value}
          onChange={handleCountryChange}
        >
          {countries.map((country) => (
            <option key={country.value} value={country.value}>
              {country.label}
            </option>
          ))}
        </select>
        <div aria-hidden="true" className="PhoneInputCountryIcon PhoneInputCountryIcon--border">
          <img
            className="PhoneInputCountryIconImg"
            alt={selectedCountry.label}
            src={selectedCountry.flagSrc}
          />
        </div>
        <MdKeyboardArrowDown />
      </div>
      <input
        autoComplete="tel"
        className="PhoneInputInput text-[#AFAFAF] text-md shadow-lg rounded-lg bg-transparent border border-grey2 focus:border-black focus:outline-none block w-full p-2 py-2"
        placeholder="Phone number"
        id="phoneNumber"
        type="text"
        value={selectedCountry.code}
        name="phoneNumber"
        onChange={() => {}}
      />
    </div>
  );
};

export default CountrySelect;
