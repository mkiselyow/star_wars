class SwapiService {
  _url = 'https://swapi.co/api';

  async getResource(url = this._url, resource = 'people', id) {
    const full_url = `${url}/${resource}/${id ? id : ''}`;
    const res_full = await fetch(full_url);
    console.log(res_full.ok);
    if (!res_full.ok) {
      throw new Error(`Could not fetch ${full_url}, \nstatus is ${res_full.status}`);
    }
    return await res_full.json();
  };
}

export default SwapiService;