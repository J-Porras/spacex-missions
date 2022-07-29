import { useParams,Link } from "react-router-dom"
import { useEffect,useState } from "react";
import { Box,Text,Flex,Spacer,Tag,Button }  from '@chakra-ui/react';
import * as API from "../services/launches.js"


export function LaunchDetails(props){

    const  [launch,setLaunch] = useState({})

    const { launchId } = useParams();

    useEffect(()=>{
        API.getLaunchByFlightNumber(launchId)
        .then(setLaunch)
        .catch(error => console.log("ERROR GETTING DATA: ",err))

    },[launchId])

    return (
      <Box bg="gray.100" p={4} m={4} borderRadius="lg">
        {!launch ? (
          <div> Loading... </div>
        ) : (
          <>
            <Flex display="flex">
              <Text fontSize="2x1">
                Mission <strong> {launch.mission_name}</strong> (
                {launch.launch_year})
              </Text>

              <Spacer />
              <Tag p={2} colorScheme={launch.launch_success ? "green" : "red"}>
                {launch.launch_success ? "Success" : "Failure"}
              </Tag>
            </Flex>
            <Box>
                Rocket: <Link to={`/rockets/${launch.rocket?.rocket_id}`}>{launch.rocket?.rocket_name}</Link> 
            </Box>

          </>
        )}
      </Box>
    );
} 