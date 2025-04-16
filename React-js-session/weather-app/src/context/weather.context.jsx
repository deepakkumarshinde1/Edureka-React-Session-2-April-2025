import { createContext, useContext, useEffect, useState } from "react";
import { getWeatherByCityName } from "../service/weather.api.service";

// create context
const WeatherContext = createContext({});

// create custom hook (to access data form context)
export function useWeatherContext() {
  return useContext(WeatherContext);
}

// create wrapper component => share logic to all component
export default function WeatherContextWrapperComponent({ children }) {
  let [cityName, setCityName] = useState("");
  let [list, setList] = useState([]);
  let handelChange = (event) => {
    console.log(event.keyCode);
    if (event.keyCode === 13) {
      setCityName(event.target.value);
    }
  };

  useEffect(() => {
    (async () => {
      if (cityName.length !== 0) {
        let result = await getWeatherByCityName(cityName);
        if (result.status === true) {
          if (result.data.cod === 200) {
            setList([{ ...result.data }, ...list]);
          }
        }
      }
    })();
  }, [cityName]);
  let share = {
    cityName,
    handelChange,
    list,
  };
  return (
    <WeatherContext.Provider value={share}>{children}</WeatherContext.Provider>
  );
}
