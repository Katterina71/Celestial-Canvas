
const applicationId = '13c7d002-5b9b-40d8-8f6a-6c9536be08ab';
const applicationSecret = '120c5b697566ac3fb25846278a74edc030675916824c3d15d622683a9721035271e158040b1f9c6feef4d7c4c19f302fa241fcd3453a94aef03fcae57fff9f3c097687787497fc2520314d9f5d28a1e51c6942290b94abbdf99f52a1bb7d13017aab7b48e72a4f89153365b43486fd16';
const authString = btoa(`${applicationId}:${applicationSecret}`);


export async function astronomyAPI (){ 
    const url = 'https://api.astronomyapi.com/api/v2/bodies';
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
    .then(data => console.log(data))
    .catch(error => console.error('Fetch error:', error));
    };