import { useState,useEffect } from "react";
import { Heading }  from '@chakra-ui/react';
import { LaunchItem } from "./LaunchItem";
import * as API from '../services/launches.js'

export function LaunchList(){
    const[launches,setLaunches] = useState([]);

    useEffect(()=>{
      
        //llamada al API y set launches y despues cambia "launches"
        API.getAllLaunches().then(setLaunches);
    },[]);

    return (
      <>
        <Heading as="h1" size="lg" m={4}>
          Space X Launches
        </Heading>
        {launches.length === 0 ? (
          <div> Loading</div>
        ) : (
          <section>
            {launches.map((launch) => (
              <LaunchItem key={launch.flight_number} {...launch} />
            ))}
          </section>
        )}
      </>
    );
}

