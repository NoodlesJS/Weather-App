import React, {Component} from 'react'
import './Body.css'
import Search from './Search/Search'
import Result from './Result/Result'

// images
import Cold from './img/cold.svg'
import Rainy from './img/rainy.svg'
import Hot from './img/hot.svg'
import Warm from './img/warm.svg'

//icons
import icon_sun from './img/icon_sun.svg'
import icon_rain from './img/icon_rain.svg'
import icon_snow from './img/icon_snow.svg'


class Body extends Component {
    constructor() {
        super();
        this.state = {
            currentWeather: '',
            currentTemp: '',
            currentCity: '',
            currentImage: '',
            currentIcon: '',
            currentColor: '#E58C8C'
        }
        this.getWeather = this.getWeather.bind(this);
        this.handleError = this.handleError.bind(this);
        this.handleRainy = this.handleRainy.bind(this);
        this.handleOther = this.handleOther.bind(this);
    }

    async getWeather(data) {
        const apiKey = '9d5015b2b613b8f2e53b93e3bd3272ff';
        const city = data;

        const rawData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
        const weatherData = await rawData.json();
        
        this.handleError(weatherData);
    }

    handleError(data) {
        // data.cod === '404' ? 
        //     this.setState({
        //     currentWeather: '',
        //     currentTemp: '',
        //     currentCity: '',
        //     currentImage: '',
        //     currentIcon: '',
        //     error: 'No such city found'
        // }) 
        // : (data.weather[0].main.toLowerCase() === ('thunderstorm' || 'rain' || 'drizzle') ? this.handleRainy(data) : this.handleOther(data));

        if(data.cod === '404') {
            this.setState({
                currentWeather: '',
                currentTemp: '',
                currentCity: '',
                currentImage: '',
                currentIcon: '',
                error: 'No such city found'
            })
        }
        else if (data.weather[0].main.toLowerCase() === 'rain') {this.handleRainy(data)}
        else if (data.weather[0].main.toLowerCase() === 'thunderstorm') {this.handleRainy(data)}
        else if (data.weather[0].main.toLowerCase() === 'drizzle') {this.handleRainy(data)}
        else {this.handleOther(data)};
    }

    handleRainy(data) {
        const weather = data.weather[0].main
        const tempString = `${Math.floor(1.8*(parseInt(data.main.temp) - 273) + 32)}°F`
        const city = data.name
        const image = Rainy
        const icon = icon_rain
        const color = '#4B6EA5'

        this.setState({
            currentWeather: weather,
            currentTemp: tempString,
            currentCity: city,
            currentImage: image,
            currentIcon: icon,
            currentColor: color,
            error: ''
        });
    }

    handleOther(data) {
        const weather = data.weather[0].main
        const temp = Math.floor(1.8*(parseInt(data.main.temp) - 273) + 32)
        const tempString = `${Math.floor(1.8*(parseInt(data.main.temp) - 273) + 32)}°F`
        const city = data.name
        const image = temp < 60 ? Cold : (temp < 85 ? Warm : Hot)
        const icon = temp < 60 ? icon_snow : icon_sun
        const color = temp < 60 ? '#3A4A64' : (temp < 85 ? '#E58C8C' : '#E5BC8C')

        this.setState({
            currentWeather: weather,
            currentTemp: tempString,
            currentCity: city,
            currentImage: image,
            currentIcon: icon,
            currentColor: color,
            error:''
        });
    }

    render() {
        return (
            <div className='body'>
                <Search getCityName={this.getWeather}/>
                <Result
                weather={this.state.currentWeather}
                temp={this.state.currentTemp}
                city={this.state.currentCity} 
                icon={this.state.currentIcon} 
                image={this.state.currentImage}
                background={this.state.currentColor}
                error={this.state.error}/>
            </div>
        )
    }
}

export default Body