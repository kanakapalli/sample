import React, { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

function IpAddress(props) {
    let [userLocation,setLocation]=useState({});
    
    useEffect(()=>{
        axios.get("https://geolocation-db.com/json")
        .then(response=>setLocation(response.data))
        .catch(err=>console.log(err))
    })
        return (
            <span>
                IP Address:{userLocation.IPv4}
            </span>
        );
    }


export default IpAddress;