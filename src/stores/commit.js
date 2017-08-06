import { observable, action } from 'mobx';
import qs from 'qs';
import axios from 'axios';
import httpAdapter from 'axios/lib/adapters/http';

axios.defaults.adapter = httpAdapter;

const API_BASE_URL = process.env.API_BASE_URL;

export default class CommitStore {
  @observable.shallow list = [];

  @action async fetchData(searchText) {
    if (searchText === null || searchText === '') return;
    const query = {
      search: searchText.split(' '),
    };
    const queryString = qs.stringify(query);

    const json = await axios.get(`${API_BASE_URL}/messages?${queryString}`)
      .catch(e => window.console.error(e));
    if (!json.data) return;
    this.list = json.data || [];
  }
}
