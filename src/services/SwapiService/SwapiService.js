class SwapiService {
  _url = 'https://swapi.co/api';

  async getResource(resource = 'people', id) {
    const full_url = `${this._url}/${resource}/${id ? id : ''}`;
    const res_full = await fetch(full_url);
    return await res_full.json()
      .then((body) => {
        if (!res_full.ok) {
          throw new Error(`Could not fetch ${full_url}, \nstatus is ${res_full.status}`);
        }
        if (id) {
          return this.Decorator(resource, body);
        }
        return body.results
          .map((el, index) => this.Decorator(resource, el));
      })
      .catch((err) => {
        console.log(err.message);
      });
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
          diameter: objectToDecorate.diameter
          };
      case 'starships':
        return {
          id: this.getId(objectToDecorate),
          name: objectToDecorate.name,
          cargo_capacity: objectToDecorate.cargo_capacity,
          passengers: objectToDecorate.passengers
        };
      case 'people':
        return {
          id: this.getId(objectToDecorate),
          name: objectToDecorate.name,
          gender: objectToDecorate.gender,
          mass: objectToDecorate.mass
        };
      default:
        return objectToDecorate;
    }
  }
}

export default SwapiService;