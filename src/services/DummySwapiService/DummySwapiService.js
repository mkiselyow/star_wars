const DummySwapiService = {
  async getAllResources(resourceType = 'people') {
    let resources;
    switch (resourceType) {
      case "people":
        resources = this._people;
        break;
      case "starships":
        resources = this._starships;
        break;
      case "planets":
        resources = this._planets;
        break;
      default:
        resources = this._people;
        break;
    }
    return resources.map(resource => this.decorate(resourceType, resource))
  },

  async getResourceById(resourceType = 'people', id) {
    let resource, imgUrl;
    switch (resourceType) {
      case "people":
        resource = this._people.find((person) => person.id === id);
        imgUrl = this.getPersonImage();
        break;
      case "starships":
        resource = this._starships.find((starship) => starship.id === id);
        imgUrl = this.getStarshipImage();
        break;
      case "planets":
        resource = this._planets.find((planet) => planet.id === id);
        imgUrl = this.getPlanetImage();
        break;
      default:
        resource = this._people.find((person) => person.id === id);
        imgUrl = this.getPersonImage();
        break;
    }
    return resource ? this.decorate(resourceType, resource, imgUrl) : undefined;
  },

  decorate(resource, objectToDecorate, isImageExists = false) {
    switch (resource) {
      case 'planets':
        return {
          id: objectToDecorate.id,
          name: objectToDecorate.name,
          population: objectToDecorate.population,
          rotationPeriod: objectToDecorate.rotation_period,
          diameter: objectToDecorate.diameter,
          imageExists: isImageExists,
          typeOfItem: 'planets'
        };
      case 'starships':
        return {
          id: objectToDecorate.id,
          name: objectToDecorate.name,
          cargo_capacity: objectToDecorate.cargo_capacity,
          passengers: objectToDecorate.passengers,
          hyperdrive_rating: objectToDecorate.hyperdrive_rating,
          imageExists: isImageExists,
          typeOfItem: 'starships'
        };
      case 'people':
        return {
          id: objectToDecorate.id,
          name: objectToDecorate.name,
          gender: objectToDecorate.gender,
          mass: objectToDecorate.mass,
          height: objectToDecorate.height,
          imageExists: isImageExists,
          typeOfItem: 'people'
        };
      default:
        return objectToDecorate;
    }
  },

  _people: [
    {
      id: 1,
      name: 'Bilbo Baggins [TEST DATA]',
      gender: 'male',
      mass: '199',
      height: '100',
      birthYear: 'long ago',
      eyeColor: 'dark brown'
    },

    {
      id: 2,
      name: 'Frodo Baggins [TEST DATA]',
      gender: 'male',
      mass: '199',
      height: '100',
      birthYear: 'long ago',
      eyeColor: 'dark brown'
    }
  ],

  _planets: [
    {
      id: 1,
      name: 'Earth [TEST DATA]',
      population: '7.530.000.000',
      rotation_period: '23 hours 56 seconds',
      diameter: '12.742 km'
    },
    {
      id: 2,
      name: 'Venus [TEST DATA]',
      population: 'not known',
      rotationPeriod: '243 days',
      diameter: '12.104 km'
    }
  ],

  _starships: [
    {
      id: 1,
      name: 'USS Enterprise [TEST DATA]',
      model: 'NCC-1701-C',
      manufacturer: 'Northrop Grumman Shipbuilding',
      costInCredits: 'not known',
      length: 'approx 300 meters',
      crew: 1000,
      hyperdrive_rating: 4,
      passengers: 50,
      cargo_capacity: 100
    },
    {
      id: 2,
      name: 'BLA-BLA Enterprise [TEST DATA]',
      model: 'NCC-1701-C',
      manufacturer: 'Northrop Grumman Shipbuilding',
      costInCredits: 'not known',
      length: 'approx 300 meters',
      crew: 1000,
      hyperdrive_rating: 4,
      passengers: 50,
      cargo_capacity: 100
    }
  ],

  getPersonImage: () => {
    return `https://placeimg.com/400/500/people`
  },

  getStarshipImage: () => {
    return `https://placeimg.com/600/400/tech`;
  },

  getPlanetImage: () => {
    return `https://placeimg.com/400/400/nature`
  },
};

export default DummySwapiService;