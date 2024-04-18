import * as Carousel from './carousel.js'
import * as DOM from './dom.js'

const applicationId = '13c7d002-5b9b-40d8-8f6a-6c9536be08ab';
const applicationSecret = '120c5b697566ac3fb25846278a74edc030675916824c3d15d622683a9721035271e158040b1f9c6feef4d7c4c19f302fa241fcd3453a94aef03fcae57fff9f3c097687787497fc2520314d9f5d28a1e51c6942290b94abbdf99f52a1bb7d13017aab7b48e72a4f89153365b43486fd16';
export const authString = btoa(`${applicationId}:${applicationSecret}`);


// export async function astronomyAPI (){ 
//     const url = 'https://api.astronomyapi.com/api/v2/bodies';

//     fetch(url, {
//         method: 'GET',
//         headers: {
//             'Authorization': `Basic ${authString}`
//         }
//     })
//     .then(response => {
//         if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         return response.json();
//     })
//     .then(data => console.log(data))
//     .catch(error => console.error('Fetch error:', error));
//     };

export async function planetaryPositions (){ 
    const url = 'https://api.astronomyapi.com/api/v2/bodies/positions?longitude=-84.39733&latitude=33.775867&elevation=1&from_date=2024-04-17&to_date=2024-04-17&time=10%3A21%3A28';
        fetch(url, {
            method: 'GET',
            headers: {
                'Authorization': `Basic ${authString}`
            }
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
    
            const planetsData = data.data.table.rows;
            const planets = planetsData.map(element => element.entry.name);
      
            for (let i in planets ){
                Carousel.listOfBodies (i, planets[i], DOM.celestialObjects);
            
            }

        })
        .catch(error => console.error('Fetch error:', error));
};

export async function bodyData (){ 
  
    const getData =  Carousel.getCelestialObjects()
    const url = `https://api.astronomyapi.com/api/v2/bodies/positions?longitude=${getData.longitude}&latitude=${getData.latitude}&elevation=0&from_date=${getData.date}&to_date=${getData.date}&time=${getData.time}`;
        fetch(url, {
            method: 'GET',
            headers: {
                'Authorization': `Basic ${authString}`
            }
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
         
            const planetsData = data.data.table.rows;

            if (!planetsData) {
                throw new Error("Celestial bodies data is not available.");
            }
            else {
            const celestialBody = planetsData.find(element => element.entry.name === getData.name);
            if (!celestialBody) {
                throw new Error(`No celestial body found with the name ${getData.name}`);
            }
            else {
            const bodyInfo = {
                name : celestialBody.entry.name,
                fromEarthKm : celestialBody.cells[0].distance.fromEarth.km,
                fromEarthAu : celestialBody.cells[0].distance.fromEarth.au,
                constellation : celestialBody.cells[0].position.constellation.name,
            }
            Carousel.addCelestialBodyInfo(bodyInfo);
            
        }
        }})
        .catch(error => console.error('Fetch error:', error));
};


export async function celestialEvents(){
    const inputData = Carousel.getValueEvents();

const url = `https://api.astronomyapi.com/api/v2/bodies/events/${inputData.bodyId}?latitude=${inputData.latitude}&longitude=${inputData.longitude}&elevation=0&from_date=${inputData.fromDate}&to_date=${inputData.toDate}&time=${inputData.time}`;
    

    fetch (url, {
        method: 'GET',
        headers: {
            'Authorization': `Basic ${authString}`
        }
    })
    .then (response => {
        if (!response.ok) {
            throw new Error (`HTTP error! Status: ${response.status}`)
        }
        return response.json();
    }) 
    .then (data => {
        console.log(data)
    })
    .catch(error => console.log('Fetch error:', error))

}

export async function initializeWidgets(){
const inputData = Carousel.getValueMoonPhase();
const url = 'https://api.astronomyapi.com/api/v2/studio/moon-phase';

const data = JSON.stringify({
    "style": {
        "moonStyle": "default",
        "backgroundStyle": "stars",
        "backgroundColor": "#000000",
        "headingColor": "#ffffff",
        "textColor": "#ffffff"
    },
    "observer": {
        "latitude": inputData.latitude,
        "longitude": inputData.longitude,
        "date": inputData.date
    },
    "view": {
        "type": "landscape-simple",
        "parameters": {}
    }
});

 fetch(url, {
	method: 'POST',
	headers: {
        'Authorization': `Basic ${authString}`,
		'content-type': 'application/json',
	},
	body: data,
	})
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        const moonPhaseSrc = data.data.imageUrl;
        Carousel.moonPhase(moonPhaseSrc);
    })
    .catch(error => {
        console.error("Error fetching data:", error);
    });
};

