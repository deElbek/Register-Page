// import axios from "axios";
// import { useEffect, useState } from "react";

// import Card from '@mui/material/Card';
// import { Card } from '@mui/material';
// function API() {

//     const [state, setState] = useState([])

//     useEffect(() => {
//         axios.get("https://jsonplaceholder.typicode.com/users").then(e => setState(e.data))
//     }, [])

//     // <p>{e.name}</p>
//     //                     <p>{e.username}</p>
//     //                     <p>{e.email}</p>
//     //                     <p>{e.address.city}</p> 
//     //                     <p>{e.phone}</p>

//     // return (
//     //     <div className="api">
//     //         <h1>API</h1>
//     //         {state.map(e => {
//     //             return (
//     //                 <>
                            
//     //                 </>
//     //             )
//     //         })}
//     //     </div>
//     // );
    
// }

// export default API;
import './api.scss';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';

export default function MediaCard() {

    const [state, setState] = useState([])

    useEffect(() => {
        axios.get("http://localhost:2100/").then(e => setState(e.data))
    }, [])

  return (
        <div className="card">
            {state.map(e=>{
                return(
                    <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                      component="img"
                      height="160"
                      width="60%"
                      image="https://randomuser.me/api/portraits/men/71.jpg"
                      alt="rasmdi qoy"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {e.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                       email: {e.email}
                      </Typography>
                      <Typography variant="body2" className='' color="text.secondary">
                       bio: {e.bio}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">Share</Button>
                      <Button size="small">Learn More</Button>
                    </CardActions>
                  </Card>
                )
            })}
        </div>
  );
}

