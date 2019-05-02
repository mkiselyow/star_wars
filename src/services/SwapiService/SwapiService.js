const SwapiService = {
  _url: 'https://swapi.co/api',

  async getAllResources(resourceType = 'people') {
    const url = `${this._url}/${resourceType}/`;
    const resources = await (await fetch(url)).json();
    return resources.results.map(resource => this.decorate(resourceType, resource))
  },

  async getResourceById(resourceType = 'people', id) {
    const url = `${this._url}/${resourceType}/${id}`;
    const resource = await (await fetch(url)).json();
    const isImageExists = await this.imageExists(resourceType, id);
    return this.decorate(resourceType, resource, isImageExists)
  },

  async imageExists(resource, id) {
    if (resource === 'people') {
      resource = 'characters'
    }

    const url =
      `https://starwars-visualguide.com/assets/img/${resource}/${id}.jpg`;
    const resp = await fetch(url);
    return (resp.status !== 404) ? url : false;
  },

  getId(objectToDecorate) {
    return objectToDecorate.url.match(/\/([0-9]*)\/$/)[1]
  },

  decorate(resource, objectToDecorate, isImageExists = false) {
    switch (resource) {
      case 'planets':
        return {
          id: this.getId(objectToDecorate),
          name: objectToDecorate.name,
          population: objectToDecorate.population,
          rotationPeriod: objectToDecorate.rotation_period,
          diameter: objectToDecorate.diameter,
          imageExists: isImageExists,
          typeOfItem: 'planets'
          };
      case 'starships':
        return {
          id: this.getId(objectToDecorate),
          name: objectToDecorate.name,
          cargo_capacity: objectToDecorate.cargo_capacity,
          passengers: objectToDecorate.passengers,
          hyperdrive_rating: objectToDecorate.hyperdrive_rating,
          imageExists: isImageExists,
          typeOfItem: 'starships'
        };
      case 'people':
        return {
          id: this.getId(objectToDecorate),
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
  }
};

export default SwapiService;