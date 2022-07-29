import { Box,Text,Flex,Spacer,Tag,Button }  from '@chakra-ui/react';
import { HiCalendar } from "react-icons/hi";
import { Link } from 'react-router-dom';


export function LaunchItem(launch){


  return (
    <Box bg="gray.100" p={4} m={4} borderRadius="lg">
      <Flex display="flex">
        <Text fontSize="2x1">
          Mission <strong> {launch.mission_name}</strong> ({launch.launch_year})
        </Text>

        <Spacer />
        <Tag p={2} colorScheme={launch.launch_success ? "green" : "red"}>
          {launch.launch_success ? "Success" : "Failure"}
        </Tag>
      </Flex>
      <Flex align="center">
        <HiCalendar />
        <Text ml="1">{launch.launch_date_local.split("T")[0]}</Text>
      </Flex>
      <Link to={`/launch/${launch.flight_number}`}>
        <Button mt={2} colorScheme="blue">
          More Details
        </Button>
      </Link>
    </Box>
  );
    
}