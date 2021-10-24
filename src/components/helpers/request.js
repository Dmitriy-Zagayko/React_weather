// export const gettingWeather = async (e, nameCity) => {
// 	e.preventDefault();
// 	const KEY = '76cfd9fa055d05ce8567c07074a8ee2e';
// 	const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${nameCity},ua&appid=${KEY}&units=metric`);
// 	const data = await api_url.json();
// 	const celsius = (data.main.temp - 32) * 5 / 9;
// 	return {
// 		weather: `${data.name}: ${celsius.toFixed(0)}`,
// 	};
// };

// export const gettingWeather = (e, nameCity) => {
// 	e.preventDefault();
// 	if (value.trim()) {
// 		fetch(`https://api.openweathermap.org/data/2.5/weather?q=${nameCity},ua&appid=${KEY}&units=metric`)
// 		.then((response) => response.json())
// 		.then((data) => setData(data));
// 		onCreate(value);
// 		setValue('');
// 	}
// };
