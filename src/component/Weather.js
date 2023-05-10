import React from 'react';
import axios from 'axios';

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherData: [],
      iconCode: '',
    };
  }

  componentDidMount() {
    this.getMeteo();
  }

  getMeteo() {
    const apiKey = 'f3b347f2af8d5b66be900203eb18ac75';
    const city = 'Victoriaville'; // Remplacez par la ville de votre choix

    axios({
      method: 'get',
      url: `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
    })
      .then((response) => {
        const weatherData = response.data;
        const iconCode = weatherData.weather[0].icon;
        this.setState({ weatherData, iconCode });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  convertToCelsius(tempKelvin) {
    return Math.round(tempKelvin - 273.15);
  }

  render() {
    const { weatherData, iconCode } = this.state;

    return (
      <div>
        <h1>Weather Information</h1>
        <p>City: {weatherData.name}</p>
        <p>
          Temperature: {weatherData.main && this.convertToCelsius(weatherData.main.temp)}°C
        </p>
        <p>
          Description: {weatherData.weather && weatherData.weather[0].description}
        </p>
        {iconCode && (
          <img
            src={`https://openweathermap.org/img/w/${iconCode}.png`}
            alt="Weather Icon"
            width="175" height="175"
          />
        )}
      </div>
    );
  }
}

export default Weather;
