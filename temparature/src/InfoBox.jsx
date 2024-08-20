import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css"
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox({info}){
let img="https://images.unsplash.com/photo-1680352267694-a7fd4c33d4e1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGR1c3R5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D"
const HOT_URL="https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
const COLD_URL="https://images.unsplash.com/photo-1612208695882-02f2322b7fee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
const RAIN_URL="https://images.unsplash.com/photo-1635823288719-93f2c8ac7f3f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmFpbiUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";





return(<div className="InfoBox">

<div className='cardContainer'>
<Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={
        info.humidity>80
        ?RAIN_URL:info.temp>15?HOT_URL:COLD_URL


        }
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {info.city}{
        info.humidity>80
        ?<AcUnitIcon/>:info.temp>15?<ThunderstormIcon/>:<WbSunnyIcon/>


        }
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
         <p>Temperature= {info.temp}&deg; C</p>
        <p>Humidity= {info.humidity}</p>
        <p>Min Temp= {info.tempMin}&deg; C</p>
        <p>Max Temp= {info.tempMax}&deg; C</p>
        <p>The Weather can be described as <i>{info.weather}</i> and
        feels like {info.feelslike}
        </p>
        </Typography>
      </CardContent>
   
    </Card>
    </div>
</div>)

}