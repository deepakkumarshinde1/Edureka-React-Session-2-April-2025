import WeatherContextWrapperComponent from "./context/weather.context";
import WeatherInput from "./WeatherInput";

function App() {
  return (
    <>
      <WeatherContextWrapperComponent>
        <WeatherInput />
      </WeatherContextWrapperComponent>
    </>
  );
}

export default App;
