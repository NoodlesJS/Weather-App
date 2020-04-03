import React, {Component} from 'react'
import './Body.css'
import Search from './Search/Search'
import Result from './Result/Result'

// images
import Cold from './img/cold.svg'
import Rainy from './img/rainy.svg'
import Sunny from './img/sunny.svg'

//icons
import icon_sun from './img/icon_sun.svg'
import icon_rain from './img/icon_rain.svg'
import icon_snow from './img/icon_snow.svg'


class Body extends Component {
    constructor() {
        super();
        this.state = {
            currentWeather: 'Rainy',
            currentTemp: '78°F',
            currentCity: 'Houston',
            currentImage: Rainy,
            currentIcon: icon_rain,
            currentColor: '#4B6EA5'
        }
    }

    render() {
        return (
            <div className='body'>
                <Search />
                <Result
                weather={this.state.currentWeather}
                temp={this.state.currentTemp}
                city={this.state.currentCity} 
                icon={this.state.currentIcon} 
                image={this.state.currentImage}
                background={this.state.currentColor}/>
            </div>
        )
    }
}

export default Body