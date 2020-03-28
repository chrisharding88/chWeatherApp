import React from 'react';
import './styles.css';

export const WeatherInfo = (props) => {
	return (
		<div>
			<div className="box" id="temperature">
				<div className="city">
					<h1 id="cityName">{props.name}</h1>
				</div>
				<div className="weather left">
					<span>
						{props.icons && (
							<img
								src={`http://openweathermap.org/img/wn/${props.icons}.png`}
								alt="weather icons"
								className="icons"
							/>
						)}
					</span>
					<div>
						<span id="description">{props.weather}</span>
					</div>
				</div>

				<div className="temperature right">
					<span id="mainTemp">{props.temperature}&deg;</span>
					<div>
						<span id="highTemp">H: {props.highTemp}&deg;</span>
						<span id="lowTemp">L: {props.lowTemp}&deg;</span>
					</div>
				</div>
				<div className="humidity">
					<h1>Humidity</h1>
					<span>{props.humidity}%</span>
				</div>
				<div className="wind">
					<h1>Wind</h1>
					<span>{props.wind} MPH</span>
				</div>
				<div className="sunrise">
					<h1>Sunrise</h1>
					<span>{props.sunrise}</span>
				</div>
				<div className="sunset">
					<h1>Sunset</h1>
					<span>{props.sunset}</span>
				</div>
			</div>
		</div>
	);
};
