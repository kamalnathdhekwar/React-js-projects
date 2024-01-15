import Search from './components/Search';
import Result from './components/Result'
import {useState} from "react";
import axios from "axios"


function App() {
  const [search,setSearch] = useState("");
const [weather,setWeather] =useState([]);

const changeSearch = (value) =>{

  setSearch(value);

}
const  getWeatherData = () =>{
  // https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
}
useEffect(
  () => {
  if(search !=="")
  {
      getWeatherData();
  }
  },
  [search]
)

  return (
    <div className="max-w-[1240px] mx-auto mt-2 p-3 ">
      <Search searchData={search} eventHandler={changeSearch}/>
      <Result weatherData={weather}/>
    </div>
  )
}

export default App
