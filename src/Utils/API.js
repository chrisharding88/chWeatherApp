import axios from 'axios';
const API_Key = 'd096455542965b7fad872613badaa0ff';
//const precipitation = 'precipitation_new';

export default {
	citySearch: function(city) {
		return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_Key}`);
	}
	/*map: function(lon, lat) {
		return axios.get(`https://tile.openweathermap.org/map/${precipitation}/10/${lon}/${lat}.png?appid=${API_Key}`);
	}*/
};
