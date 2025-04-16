import { useWeatherContext } from "./context/weather.context";

function WeatherInput() {
  let { cityName, handelChange } = useWeatherContext();
  return (
    <>
      <section>
        <label htmlFor="">Enter City Name</label>
        <input
          type="text"
          onKeyUp={handelChange}
          placeholder="Only city name"
        />
      </section>
      <section>
        <table className="table">
          <thead>
            <tr>
              <th>Sr No</th>
              <th>Name</th>
              <th colSpan={2}>Temp</th>
              <th>Wind</th>
              <th>Country</th>
            </tr>

            <tr>
              <th colSpan={2} className="th"></th>
              <th>Min</th>
              <th>Max</th>
            </tr>
          </thead>
        </table>
      </section>
    </>
  );
}

export default WeatherInput;
