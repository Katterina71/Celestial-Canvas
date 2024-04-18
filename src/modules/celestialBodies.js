class CelestialBody {
    constructor(name,src){
        this.name = name,
        this.src = src 
    }
}

class allCelestialBodies {
    constructor(){
        this.bodies = []
    }
    createBodiesList(name,src){
        const body = new CelestialBody(name,src)
        this.bodies.push(body);
        return this.bodies;
    }
}
const celestialBodiesArray = new allCelestialBodies();

celestialBodiesArray.createBodiesList('Sun', './img/bodies/sun.webp')
celestialBodiesArray.createBodiesList('Earth', './img/bodies/earth.jpeg')
celestialBodiesArray.createBodiesList('Jupiter', './img/bodies/jupiter.avif')
celestialBodiesArray.createBodiesList('Mars', './img/bodies/mars.jpeg')
celestialBodiesArray.createBodiesList('Mercury', './img/bodies/mercury.webp')
celestialBodiesArray.createBodiesList('Moon', './img/bodies/moon.webp')
celestialBodiesArray.createBodiesList('Neptune', './img/bodies/neptune.webp')
celestialBodiesArray.createBodiesList('Pluto', './img/bodies/pluto.jpeg')
celestialBodiesArray.createBodiesList('Uranus', './img/bodies/uranus.jpeg')
celestialBodiesArray.createBodiesList('Venus', './img/bodies/venus.jpeg')
celestialBodiesArray.createBodiesList('Saturn', './img/bodies/saturn.webp')


export const celestialBodiesArr = celestialBodiesArray.bodies;


