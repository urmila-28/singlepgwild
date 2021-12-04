import { Button, Typography } from '@mui/material';
import React from 'react';
import "../css/Ops.css";
const Ops = () => {
    return (
        <>
        <div className="My" color="white">
           <Typography variant="h4" color="white" style={{marginRight:"2000px"}}> 
            <b> WILDLIFE </b><br/>
           <h5> Act Before It Vanishes Forever!!</h5> 
           <h6>If we can teach people about wildlife,they will be touched. Share my <br/>wildlife with me. Because humans want to save  <br/>things that they love.</h6> 
            </Typography>
            <img style={{ alignItems:"right", marginLeft:"500px" , marginTop:"10px" , position:"absolute", top:"20", left:"15", zIndex:"50"}} width="300" height="200" src="https://wallpapercave.com/wp/wp2599594.jpg" />
            <img style={{ alignItems:"right", marginLeft:"400px" , marginTop:"60px" , position:"absolute", top:"30", left:"30", zIndex:"60"}} width="300" height="200" src="https://th.bing.com/th/id/OIP.DP48uGkldTg01Wx5KTExXAHaE6?pid=ImgDet&rs=1" />
            
            <Button variant="outlined"  style={{height:"5vh" , marginTop:"300px" , marginLeft:"-1400px" , color: '#fff' }}>
             Learn More
            </Button>
        </div>
        </>
    )
}

export default Ops