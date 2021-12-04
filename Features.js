import { Typography } from '@mui/material';
import React from 'react';
import "../css/Features.css";

const Features = () => {
  return (
    <>
       <div className="my_1" >
           <div className="text">
               <Typography variant="h3" color="dimgray" style={{textAlign:"center"}}>
               <b>Features</b>
             
               </Typography>
           </div>

           <div>
           <img style={{ alignItems:"left", marginLeft:"200px" , marginTop:"40px" , position:"absolute", top:"20", left:"15", zIndex:"50"}} width="300" height="200" src="https://wallpapercave.com/wp/wp2599594.jpg" />
            <img style={{ alignItems:"left", marginLeft:"100px" , marginTop:"200px" , position:"absolute", top:"30", left:"30", zIndex:"60"}} width="300" height="200" src="https://th.bing.com/th/id/OIP.DP48uGkldTg01Wx5KTExXAHaE6?pid=ImgDet&rs=1" />
           </div>
           
             <div className="myy" style={{display:"flex", alignItems:"center", justifyContent:"center" , marginLeft:"500px", marginTop:"20px"}}>
                 <div className="image">
                   <img src="https://www.bing.com/th?id=OIP.h_QdgLW-GjHC8hIntiMypgHaE7&w=153&h=102&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2" width="50px" height="50px"/>
                 </div>
                <div>
                    <h1>Eco-System </h1>
                </div>
             </div>

             <div className="myyy" style={{display:"flex", alignItems:"center", justifyContent:"center" , marginLeft:"440px", marginTop:"20px"}}>
                 <div className="image">
                   <img src="https://www.bing.com/th?id=OIP.h_QdgLW-GjHC8hIntiMypgHaE7&w=153&h=102&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2" width="50px" height="50px"/>
                 </div>
                <div>
                    <h1>Climate</h1>
                </div>
             </div>

            

             <div className="myy" style={{display:"flex", alignItems:"center", justifyContent:"center" , marginLeft:"505px", marginTop:"20px"}}>
                 <div className="image">
                   <img src="https://www.bing.com/th?id=OIP.h_QdgLW-GjHC8hIntiMypgHaE7&w=153&h=102&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2" width="50px" height="50px"/>
                 </div>
                <div>
                    <h1>Biodiversity</h1>
                </div>
             </div>

       </div>
   </>
   )
}

export default Features