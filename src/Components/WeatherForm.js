import React from 'react';
import './styles.css';

export const WeatherForm = (props) => {
	return (
		<div className="form-name">
			<div>
				<label>Type in the City</label>
			</div>
			<input
				type="text"
				className="form-control"
				id="city"
				name="city"
				placeholder="City"
				onChange={(event) => props.onChange(event)}
			/>
			<button onClick={props.onClick} className="btn btn-primary">
				Get Weather
			</button>
		</div>
	);
};
