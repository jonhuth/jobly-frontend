import axios from 'axios';

class JoblyApi {
  static async request(endpoint, params = {}, verb = 'get') {
    console.debug('API Call:', endpoint, params, verb);

    // should come from env var
    const BASE_URL = 'http://localhost:3001';
    // for now, hardcode token for "testing"
    const _token = localStorage.getItem('token');

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
    return res.companies;
  }

  static async getJobs(searchTerm = '') {
    let res = await this.request(`jobs?search=${searchTerm}`);
    return res.jobs;
  }

  static async login(userObj) {
    console.log(userObj);
    let res = await this.request('login',
      userObj, 'post');
    return res.token;
  }

  static async signup(userObj) {
    let res = await this.request('users',
      userObj, 'post');
    return res.token;
  }
}

export default JoblyApi;
