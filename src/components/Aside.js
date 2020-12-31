import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import "swiper/swiper.scss";

const SideBar = styled.div`
	position: fixed;
	top: 12rem;
	left: 50%;
	width: 16rem;
	padding: 0 0 2rem 0;
	transform: translate(-50%, 0);
	margin-left: 70rem;
	background: #fff;
	border-radius: 1.6rem;
	.weather_icon {
		display: block;
		margin: 0 auto;
		width: 8rem;
	}
`;

const DateState = styled.ul`
	display: flex;
	justify-content: center;
	> li {
		color:#333;
		&:not(:last-child) {
			&::after {
				content: "-";
			}
		}
	}
`;

const WeatherState = styled.ul`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	> li {
		font-size: 1.6rem;
		color:#333;
		&:not(:last-child) {
			margin: 0 0.6rem 0 0;
		}
	}
	&::before {
		content: "";
		display: block;
		width: 80%;
		height: 1px;
		margin: 0.8rem 10% 0.6rem 10%;
		background: #666;
	}
`;

const TimeState = styled.ul`
	display:flex;
	margin:0.4rem 0 0 0;
	justify-content:center;
	> li {
		color:#333;
		&:not(:last-child) {
			&::after {content:':';}
		}
	}
`

const currentDate = new Date();
const yyyy = currentDate.getFullYear();
const mm = String(currentDate.getMonth() + 1).padStart(2, "0");
const dd = String(currentDate.getDate()).padStart(2, "0");
const week = ['일', '월', '화', '수', '목', '금', '토']
const weekDay = week[currentDate.getDay()]

const Aside = () => {
	const WEATHER_KEY = "c3536ffa906169ce67fb6c597517237c";
	const [ weather, setWeather ] = useState({
		temp: '',
		village: '',
		weatherState: '',
		icon: ''
	})
	const [ location, setLocation ] = useState({
		LAT: '',
		LON: '',
	}) 
	const [ time, setTime ] = useState(new Date());

	useEffect(() => {
		navigator.geolocation.getCurrentPosition((position) => {
			setLocation({
				LAT: position.coords.latitude, // 위도
				LON: position.coords.longitude // 경도
			})		
		});
	},[setLocation])

	useEffect(() => {
		const getWeatherAPI = async () => {
			return await axios
				.get(`https://api.openweathermap.org/data/2.5/weather?lat=${location.LAT}&lon=${location.LON}&appid=${WEATHER_KEY}&units=metric`)
				.then((result) => {
					console.log("날씨data", result);
					setWeather({
						temp: result.data.main.temp,
						village: result.data.name,
						weatherState: result.data.weather[0].main,
						icon: result.data.weather[0].icon
					})
				})
				.catch((error) => {
				//	console.log("에러", error);
				});
		};
		getWeatherAPI();
	}, [location.LAT, location.LON]);

	useEffect(() => {
		/*
		const get5DaysWeatherAPI = async () => {
			return await axios
			.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${location.LAT}&lon=${location.LON}&appid=${WEATHER_KEY}&units=metric`)
			.then((result) => {
				console.log("날씨5day data", result.data.list)
				setNextWeather(result.data.list)				
			})
			.catch((error) => {
				console.log('에러', error)
			});
		};
		get5DaysWeatherAPI();
		*/
	},[])

	const imgSrc = "http://openweathermap.org/img/wn/" + weather.icon + "@2x.png";


	useEffect(() => {
		const timer = setInterval(() => tick(), 1000);
		return () => {
				clearInterval(timer)
		}
	})

	const tick = () => {
		setTime(new Date());
	}

	return (
		<SideBar>
			<img src={imgSrc} alt="weather" className="weather_icon" />
			<DateState>
				<li>{yyyy}</li>
				<li>{mm}</li>
				<li>{dd}({weekDay})</li>
			</DateState>
			<TimeState>
				<li>{time.toLocaleTimeString('en-US')}</li>
			</TimeState>			
			<WeatherState>
				<li>
					{
						weather.weatherState === "Clear" ? "맑음" :
						(weather.weatherState === "Clouds") ? "구름" :
						(weather.weatherState === "Rain") ? "비" :
						(weather.weatherState === "Thunderstrom") ? "뇌우" :
						(weather.weatherState === "Snow") ? "눈" :
						(weather.weatherState === "Mist") && "안개"					
					}
				</li>
				<li>{weather.temp}°</li>
			</WeatherState>		
		</SideBar>
	);
};

export default Aside;
