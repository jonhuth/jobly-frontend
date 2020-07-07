import axios from 'axios';

class JoblyApi {
  static async request(endpoint, params = {}, verb = 'get') {
    console.debug('API Call:', endpoint, params, verb);

    // should come from env var
    const BASE_URL = 'http://localhost:3001';

    const _token = // for now, hardcode token for "testing"
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc' +
      '3RpbmciLCJpc19hZG1pbiI6ZmFsc2UsImlhdCI6MTU1MzcwMzE1M30.' +
      'COmFETEsTxN_VfIlgIKw0bYJLkvbRQNgO1XCSE8NZ0U';

    const data =
      verb === 'get'
        ? { params: { _token, ...params } } // GET
        : { _token, ...params }; // POST, PATCH

    const req = axios[verb](`${BASE_URL}/${endpoint}`, data);

    try {
      return (await req).data;
    } catch (err) {
      console.error('API Error:', err.response);
      let message = err.response.data.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Indiv API routes

  static async getCompany(handle) {
    let res = await this.request(`companies/${handle}`);
    return res.company;
  }

  static async getCompanies(searchTerm = '') {
    let res = await this.request(`companies?search=${searchTerm}`);
    console.log('res in api', res);
    return res.companies;
  }
}

export default JoblyApi;
