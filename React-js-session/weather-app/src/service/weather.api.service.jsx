import axios from "axios";

const API_KEY = "417e5e47e007f7938b48ffa2581405b0";
const UNIT = "metric";

axios.defaults.baseURL = "https://api.openweathermap.org/data/2.5/weather";

export async function getWeatherByCityName(cityName) {
  try {
    let queryParams = `?q=${cityName}&appid=${API_KEY}&units=${UNIT}`;
    let { data } = await axios.get(queryParams);
    return {
      status: true,
      data,
    };
  } catch (error) {
    alert(error.message);
    return {
      status: false,
    };
  }
}
