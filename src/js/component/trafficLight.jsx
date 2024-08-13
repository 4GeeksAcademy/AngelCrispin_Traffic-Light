import React, { useEffect, useState } from 'react'


 const TrafficLight=(props)=>{


    const [lights, setLights] = useState(["","",""]);

    const TurnOnLight = (index) => {
        //const lightsAux = [...lights];
        const lightsAux = ["","",""];
        lightsAux[index]="light";
        setLights(lightsAux);
    }

    return(
        <div className="trafficLight">
            <div className="rectangle mx-auto"> 
            </div>
            <div className="square mx-auto"> 
                <div className={`circle bg-danger m-auto ${lights[0]}`} onClick={()=>{TurnOnLight(0)}}></div>
                <div className={`circle bg-warning m-auto ${lights[1]}`} onClick={()=>{TurnOnLight(1)}}></div>
                <div className={`circle bg-success m-auto ${lights[2]}`} onClick={()=>{TurnOnLight(2)}}></div>
            </div>
        </div>
    );
}


export default TrafficLight;