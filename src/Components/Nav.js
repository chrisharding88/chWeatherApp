import React from 'react';
import './styles.css';

export const Nav = (props) => {
	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<div className="navbar-nav">
					<h1 id="brandName">myWeatherApp</h1>
					<h2 id="currentTime">
						Current Time: <span>{props.time}</span>
					</h2>
				</div>
			</nav>
		</div>
	);
};
