import { Button, Typography } from '@mui/material';

import React from 'react';
import "../css/Adv.css";

const Adv = () => {
    return (
        <div className="my" >
            <div className="my_3">
            <Typography variant="h3" color="black" style={{  marginTop:"30px", textAlign:"center" }}>
              <b>Wildlife Sanctuary</b>
            </Typography>
            </div>
        <div>
            <table>
                <tr>
                    <td style={{textAlign:"center", marginTop:"300px"}}>
                        <figure style={{textAlign:"center", marginTop:"150px"}}>
                            <img src="https://www.bing.com/th?id=OIP.avxhtQqr5FoubGjq4sIXugHaEo&w=190&h=110&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2"/>
                        <figcaption>Bhadra Wildlife Sanctuary</figcaption>
                        </figure>  
                    </td>
                    <td style={{textAlign:"center", marginTop:"300px"}}>
                        <figure style={{textAlign:"center", marginTop:"150px"}}>
                            <img src="https://www.bing.com/th?id=OIP.avxhtQqr5FoubGjq4sIXugHaEo&w=190&h=110&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2"/>
                        <figcaption>Balpakaram National Park</figcaption>
                        </figure>  
                    </td>
                    <td style={{textAlign:"center", marginTop:"300px"}}>
                        <figure style={{textAlign:"center", marginTop:"150px"}}>
                            <img src="https://www.bing.com/th?id=OIP.avxhtQqr5FoubGjq4sIXugHaEo&w=190&h=110&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2"/>
                        <figcaption>Kruger National Park</figcaption>
                        </figure>  
                    </td>
                </tr>
            </table>
        </div>

        <Button variant="contained" style={{height:"5vh" ,  marginTop:"350px" , marginLeft:"5px" , color: '#fff' }}>
             Learn More
            </Button>

    </div>

        
    )
}

export default Adv