import React, { useEffect, useState } from 'react';

interface WeatherProps extends React.HTMLAttributes<HTMLDivElement> {
    language: string;
    size: number;
}

export function Weather(props: WeatherProps) {
    const { language, size } = props;
    const [currentPosition, setCurrentPosition] = useState<GeolocationPosition>({
        coords: {
            longitude: 105.804817,
            latitude: 21.028511,
            heading: 0,
            speed: 0,
            accuracy: 0,
            altitude: 0,
            altitudeAccuracy: 0
        },
        timestamp: 0
    });

    const [weather, setWeather] = useState();

    const getCurrentPosition = () => {
        return navigator.geolocation.getCurrentPosition((value) => {
            setCurrentPosition(value);
        }, (value) => {
            console.log("failed", value);
        });
    }

    const getCurrentWeather = () => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${currentPosition.coords.latitude}&lon=${currentPosition.coords.longitude}&lang=${language}&appid=e5f90c43bbe500d89495f3599dcc1534`, { method: "GET" })
        .then(res => res.json())
        .then(data => setWeather(data));
    }

    useEffect(() => {
        getCurrentPosition();
    }, []);

    useEffect(() => {
        getCurrentWeather();
    }, [currentPosition, language]);

    return (
        <div className='weather-component'>
            {
                weather ? <>
                    <div className='weather-status'>
                        <div className='weather-icon' style={{ width: size || 50, height: size || 50 }}>
                            <img src={`https://openweathermap.org/img/wn/${weather.weather![0].icon}@2x.png`} alt="" srcSet={`https://openweathermap.org/img/wn/${weather.weather![0].icon}@2x.png`} />
                        </div>
                    </div>

                    <div className="weather-status">
                        <div className="weather-location">
                            {weather.name}, {weather.sys!.country}
                        </div>
                        <div className="temperatures">
                            {Math.round(weather.main!.temp - 273.15)}°C, {weather.weather![0].description}
                        </div>
                    </div>
                </> :
                    <></>
            }

        </div>
    )
}