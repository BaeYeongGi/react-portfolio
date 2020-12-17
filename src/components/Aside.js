import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

const SideBar = styled.div`
	position: fixed;
	top: 12rem;
	left: 50%;
	width: 14rem;
	padding: 0 0 2rem 0;
	transform: translate(-50%, 0);
	margin-left: 70rem;
	background:#fff;
	border-radius:1.6rem;
	.weather_icon {display:block; margin:0 auto; width:8rem;}
`;

const DateState = styled.ul`
	display:flex; justify-content:center;
	> li {
		&:not(:last-child) {
			&::after {content:'-';}
		}		
	}
`

const WeatherState = styled.ul`
	display:flex;
	flex-wrap:wrap;
	justify-content:center;
	> li {font-size:1.6rem;
		&:not(:last-child) {margin:0 0.6rem 0 0;}
	}
	&::before {content:''; display:block; width:80%; height:1px; margin:0 auto 1.2rem auto; background:#666; }
`

const currentDate = new Date();
const yyyy = currentDate.getFullYear();
const mm = String(currentDate.getMonth() + 1).padStart(2, "0");
const dd = String(currentDate.getDate()).padStart(2, "0");
const hours = currentDate.getHours();
const minutes = currentDate.getMinutes();

const Aside = () => {

  const [ nation, setNation ] = useState('');
	const [ temp, setTemp ] = useState('');
	const [ village, setVillage ] = useState('');
	const [ weather, setWeather ] = useState('');
	const [ icon, setIcon ] = useState('');
	useEffect(() => {
		navigator.geolocation.getCurrentPosition((position) => {
			console.log('포지션',position)
			const LAT = position.coords.latitude; // 위도
			const LON = position.coords.longitude; // 경도
			const WEATHER_KEY = 'c3536ffa906169ce67fb6c597517237c';
			console.log('위도',LAT, '경도', LON);

			const getWeatherAPI = async () => {
				return await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${LAT}&lon=${LON}&appid=${WEATHER_KEY}&units=metric`)
				.then((result) => {
					console.log('날씨data',result);
					setNation(result.data.sys.country);
					setTemp(result.data.main.temp);
					setVillage(result.data.name);
					setWeather(result.data.weather[0].main);
					setIcon(result.data.weather[0].icon);
				})
				.catch((error) => {
					console.log('에러',error)
				})
			}
			getWeatherAPI();
		})
	},[])

	console.log('국가', nation)
	console.log('온도', temp)
	console.log('동네', village)
	console.log('날씨', weather)

	useEffect(() => {
		if(weather === 'Clear'){
			setWeather('맑음')
		} else if (weather === 'Clouds'){
			setWeather('구름')
		} else if (weather === 'Rain'){
			setWeather('비')
		} else if (weather === 'Snow'){
			setWeather('눈')
		} else if (weather === 'Mist'){
			setWeather('안개')
		}
	},[weather])

	return (
		<SideBar>			
			<img
			src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
			alt="weather"
			className="weather_icon"
			/>
			<DateState>
				<li>{yyyy}</li>
				<li>{mm}</li>
				<li>{dd}</li> 
			</DateState>
			<WeatherState>
				<li>{weather}</li>
				<li>{temp}°</li>
			</WeatherState>

		</SideBar>
	);
};

export default Aside;
