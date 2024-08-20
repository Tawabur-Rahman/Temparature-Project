import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"
import { useState } from 'react';
export default function SearchBox({updateInfo}){
let[city,setCity]=useState("");
let [error,setError]=useState(false);
const API_URL="https://api.openweathermap.org/data/2.5/weather";
const API_KEY="3c25bb159481849a3b580ac95078e01c";
let getWeatherInfo=async()=>{
try{
    let response=await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`)
    let jesoneResponse=await response.json();
    console.log(jesoneResponse)
    let result={
    city:city,
    temp: jesoneResponse.main.temp,
    tempMin:jesoneResponse.main.temp_min,
    tempMax:jesoneResponse.main.temp_man,
    humidity:jesoneResponse.main.humidity,
    feelsLike:jesoneResponse.main.feels_like,
    weather:jesoneResponse.weather[0].description
    }
    console.log(result)
    return result;
}catch(err){
throw err;

}




}


let handleChange=(event)=>{
setCity(event.target.value);
}
let handleSubmit=async (event)=>{
try{
    event.preventDefault();
    setCity("")
    let newInfo=await getWeatherInfo();
    updateInfo(newInfo)
}catch(err){
    setError(true);
}



}




return(<div className='SearchBox'>

<form onSubmit={handleSubmit}>
<TextField id="city" label="City Name" variant="outlined" required 
value={city} onChange={handleChange}

/><br /><br />
<Button variant="contained" type='submit' >Search</Button>
{error&&<p style={{color:"red"}}>No Such Place Exists</p>}

</form>
</div>)

}