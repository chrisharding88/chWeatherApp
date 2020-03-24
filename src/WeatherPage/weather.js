import React, { Component } from 'react';
import { WeatherForm } from '../Components/WeatherForm';
import { WeatherInfo } from '../Components/WeatherInfo';
import { Nav } from '../Components/Nav';
import API from '../Utils/API';
import Moment from 'moment';

class WeatherPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			city: '',
			name: '',
			weatherResult: {},
			displayResults: false,
			weatherIcon: '',
			weatherDescription: '',
			humidity: '',
			longitude: '',
			latitude: '',
			highTemp: '',
			lowTemp: '',
			time: Moment().format('LTS'),
			sunrise: Moment().format('LT'),
			sunset: Moment().format('LT')
		};
	}

	// Calculates the Fahrenheit
	calFahrenheit(temp) {
		let celsius = Math.floor(temp - 273.15);

		let Fahrenheit = Math.floor(celsius * 1.8 + 32);
		return Fahrenheit;
	}

	// Function that displays the Current Time
	currentTime(time) {
		const cTime = Moment(time).format('LTS');
		this.setState({
			time: cTime
		});
		return cTime;
	}

	getTime(timezone) {
		const realTime = Moment(timezone * 1000).format('LT');
		return realTime;
	}

	componentWillMount() {
		setInterval(() => this.currentTime(), 1000);
	}

	componentDidMount() {
		this.getWeather(this.state.city);
	}

	getWeather = (city) => {
		API.citySearch(city)
			.then((res) => {
				const response = res.data;
				console.log(response);
				this.setState({
					weatherResult: response,
					name: response.name,
					sunrise: this.getTime(response.sys.sunrise),
					sunset: this.getTime(response.sys.sunset),
					weatherIcon: response.weather[0].icon,
					temperature: this.calFahrenheit(response.main.temp),
					highTemp: this.calFahrenheit(response.main.temp_max),
					lowTemp: this.calFahrenheit(response.main.temp_min),
					weatherDescription: response.weather[0].description,
					humidity: response.main.humidity
				});
			})
			.catch((err) => console.log(err));
	};

	/*map = (lon, lat) => {
		API.map(lon, lat)
			.then(() => {
				const response = res.data;
				this.setState({
					longitude: response.coord.lon,
					latitude: response.coord.lat
				});
			})
			.catch((err) => console.log(err));
	};*/

	handleInputChange = (event) => {
		const { name, value } = event.target;

		this.setState({
			[name]: value
		});
	};

	handleFormSubmit = (event) => {
		event.preventDefault();
		const cityQuery = this.state.city;
		this.getWeather(cityQuery);

		if (cityQuery) {
			this.setState({
				displayResults: true
			});
		}
	};

	render() {
		return (
			<div className="container">
				<Nav time={this.state.time} />

				<WeatherForm value={this.state.city} onChange={this.handleInputChange} />
				<button className="btn btn-primary" onClick={this.handleFormSubmit}>
					Get Weather
				</button>

				<WeatherInfo
					name={this.state.name}
					timeplace={this.state.timeplace}
					sunrise={this.state.sunrise}
					sunset={this.state.sunset}
					icons={this.state.weatherIcon}
					temperature={this.state.temperature}
					highTemp={this.state.highTemp}
					lowTemp={this.state.lowTemp}
					weather={this.state.weatherDescription}
					humidity={this.state.humidity}
				/>
			</div>
		);
	}
}
export default WeatherPage;
