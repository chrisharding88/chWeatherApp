import React from 'react';
import './styles.css';

export const WeatherForm = (props) => {
	return (
		<div className="form-name">
			<label>Type in the City</label>
			<input
				type="text"
				className="form-control"
				id="city"
				name="city"
				placeholder="City"
				onChange={(event) => props.onChange(event)}
			/>
		</div>
	);
};
