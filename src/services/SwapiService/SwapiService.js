class SwapiService {
  _url = 'https://swapi.co/api';

  async getResource(resource = 'people', id) {
    const full_url = `${this._url}/${resource}/${id ? id : ''}`;
    const res_full = await fetch(full_url);
    return await res_full.json()
      .then(async (body) => {
        if (!res_full.ok) {
          throw new Error(`Could not fetch ${full_url}, \nstatus is ${res_full.status}`);
        }
        if (id) {
          body.imageExists = await this.imageExists(resource, id);
          return this.Decorator(resource, body);
        }
        return body.results
          .map((el) => this.Decorator(resource, el));
      })
      .catch((err) => {
        console.log(err.message);
        throw err;
      });
  };

  async imageExists(resource, id) {
    const url =
      `https://starwars-visualguide.com/assets/img/${resource}/${id}.jpg`;
    const res = (await fetch(url)).status;

    return res ? res !== 404 : false;
  };



  getId(objectToDecorate) {
    return objectToDecorate.url.match(/\/([0-9]*)\/$/)[1]
  };

  Decorator(resource, objectToDecorate) {
    switch (resource) {
      case 'planets':
        return {
          id: this.getId(objectToDecorate),
          name: objectToDecorate.name,
          population: objectToDecorate.population,
          rotationPeriod: objectToDecorate.rotation_period,
          diameter: objectToDecorate.diameter,
          imageExists: objectToDecorate.imageExists,
          typeOfItem: 'planets'
          };
      case 'starships':
        return {
          id: this.getId(objectToDecorate),
          name: objectToDecorate.name,
          cargo_capacity: objectToDecorate.cargo_capacity,
          passengers: objectToDecorate.passengers,
          imageExists: objectToDecorate.imageExists,
          typeOfItem: 'starships'
        };
      case 'people':
        return {
          id: this.getId(objectToDecorate),
          name: objectToDecorate.name,
          gender: objectToDecorate.gender,
          mass: objectToDecorate.mass,
          imageExists: objectToDecorate.imageExists,
          typeOfItem: 'people'
        };
      default:
        return objectToDecorate;
    }
  }
}

export default SwapiService;