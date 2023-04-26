import React, { useState } from "react";
import { data } from "./AppSetting";
import axios from "axios";
function SearchBar(props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchRes, setSearchRes] = useState(null);

  const handleSearchInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchButtonClick = () => {
    // Do something with the search term, such as fetching search results
    getWeather(searchTerm);
  };


  const getWeather = (city) => {
    const params = {'q': city, 'units': 'metric', 'appid': data.WEATHER_TOKEN }
	  axios.get(data.WEATHER_URL, { params })
  .then(response => {
    setSearchRes(response.data)
  })
  .catch(error => {
    console.error(error);
  });
  }

  return (
    <div>
      <input
           type="text"
           value={searchTerm}
           onChange={handleSearchInputChange}
           placeholder="Search..."
         />
         <button onClick={handleSearchButtonClick}>Search</button>
         {searchRes && 
        // <pre>{JSON.stringify(searchRes, null, 2)}</pre>
        <div>
            <div>{`Location is ${searchRes.name}, ${searchRes.sys.country}`}</div>
            <div>{` temperature is: ${searchRes.main.temp}`}</div>
            <div>{` description: ${searchRes.weather[0].description}`}</div>
            <div>{` temperature feels like: ${searchRes.main.feels_like}`}</div>
        </div>
      }
    </div>
  );
}

export default SearchBar;
