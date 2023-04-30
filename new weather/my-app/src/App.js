import { data } from "./AppSetting";
import axios from "axios";
import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      searchRes: null,
    };
  }

  handleSearchInputChange = (event) => {
    this.setState({ searchTerm: event.target.value });
  };

  handleSearchButtonClick = () => {
    // Do something with the search term, such as fetching search results
    this.getWeather(this.state.searchTerm);
  };

  getWeather = (city) => {
    const params = { q: city, units: 'metric', appid: data.WEATHER_TOKEN };
    axios
      .get(data.WEATHER_URL, { params })
      .then((response) => {
        this.setState({ searchRes: response.data });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  render() {
    const { searchTerm, searchRes } = this.state;

    return (
      <div>
        <input
          type="text"
          value={searchTerm}
          onChange={this.handleSearchInputChange}
          placeholder="Search..."
        />
        <button onClick={this.handleSearchButtonClick}>Search</button>
        {searchRes && (
          <div>
            <div>{`Location is ${searchRes.name}, ${searchRes.sys.country}`}</div>
            <div>{` temperature is: ${searchRes.main.temp}`}</div>
            <div>{` description: ${searchRes.weather[0].description}`}</div>
            <div>{` temperature feels like: ${searchRes.main.feels_like}`}</div>
          </div>
        )}
      </div>
    );
  }
}

export default SearchBar;

