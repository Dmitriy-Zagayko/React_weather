// async function requestWeather(city = '') {
// 	if (!city) {
// 		throw new Error('Введите название города');
// 	}

// 	const KEY = '76cfd9fa055d05ce8567c07074a8ee2e';

// const uri = 'http://api.openweathermap.org/data/2.5/weather';

// 	const options = {
// 		uri,
// 		qs: {
// 			appid: KEY,
// 			q: city,
// 			units: 'imperial',
// 		},
// 		json: true,
// 	};

// 	try {
// 		const data = await fetch(options);
// 		const celsius = (data.main.temp - 32) * 5 / 9;

// 		return {
// 			weather: `${data.name}: ${celsius.toFixed(0)}`,
// 			error: null,
// 		};
// 	} catch (error) {
// 		return {
// 			weather: null,
// 			error: error.error.message,
// 		};
// 	}
// }

// export default requestWeather;

// export const requestWeather = async (city = '') => {
// 	const KEY = '76cfd9fa055d05ce8567c07074a8ee2e';
// 	const uri = 'https://api.openweathermap.org/data/2.5/weather';

// 	const options = {
// 		uri,
// 		qs: {
// 			appid: KEY,
// 			q: city,
// 			units: 'imperial',
// 		},
// 		json: true,
// 	};

// 	const data = await fetch(options);
// 	console.log(data);

// const celsius = (data.main.temp - 32) * 5 / 9;

// return {
// 	weather: `${data.name}: ${celsius.toFixed(0)}`,
// };
// };

export const gettingWeather = async (e, nameCity) => {
	e.preventDefault();
	const KEY = '76cfd9fa055d05ce8567c07074a8ee2e';
	const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${nameCity},ua&appid=${KEY}&units=metric`);
	const data = await api_url.json();
	console.log(data);
};
