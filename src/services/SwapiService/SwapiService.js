class SwapiService {
  _url = 'https://swapi.co/api';

  async getResource(resource = 'people', id) {
    const full_url = `${this._url}/${resource}/${id ? id : ''}`;
    const res_full = await fetch(full_url);
    console.log(res_full.ok);
    if (!res_full.ok) {
      throw new Error(`Could not fetch ${full_url}, \nstatus is ${res_full.status}`);
    }
    return await res_full.json()
      .then((body) => {
        if (id) {
          return this.Decorator(resource, id, body);
        }
        return body.results
          .map((el, index) => this.Decorator(resource, index, el));
      })
  };

  Decorator(resource, id, objectToDecorate) {
    switch (resource) {
      case 'planets':
        return {
          id: id,
          name: objectToDecorate.name,
          population: objectToDecorate.population,
          rotationPeriod: objectToDecorate.rotation_period,
          diameter: objectToDecorate.diameter
          };
      case 'starship':
      case 'people':
      default:
        return objectToDecorate;
    }
  }
}

export default SwapiService;