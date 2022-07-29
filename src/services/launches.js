const API_URL = "https://api.spacexdata.com/v3"

export async function getAllLaunches(){
    try {
        const response = await fetch(`${API_URL}/launches`);
        const data = await response.json();
        //el ultimo elemento tenia el Flight Number repetido
        data.pop();
        return data;
        
    } catch (error) {
        alert('Hubo un error en el fetch de launches')
        console.log(error)
    }
}


export async function getLaunchByFlightNumber(flightNumber){
    try {
        const response = await fetch(`${API_URL}/launches/${flightNumber}`);
        const data = await response.json();
    
        return data;
    } catch (error) {
        alert('Hubo un error en el fetch de launches por flight num')
        console.log(error)
    }
}