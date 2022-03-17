import { Component } from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';
import { error } from 'components';

class restClient extends Component {
  static _get_config() {
    const cookies = new Cookies();
    return {
      headers: { Authorization: `Bearer ${cookies.get('ppe-it')}` },
    };
  }

  static _error_handle(err) {
    error(err?.response?.data?.message);
    return err?.response?.data;
  }

  static async delete(endpoint, params = {}) {
    const config = { ...this._get_config(), ...{ params: params } };
    return await axios
      .delete(`${window.$api}${endpoint}`, config)
      .then(res => {
        return {
          status: true,
          data: res.data,
          errors: [],
        };
      })
      .catch(err => this._error_handle(err));
  }

  static async get(endpoint, params = {}) {
    const config = { ...this._get_config(), ...{ params: params } };
    return await axios
      .get(`${process.env.REACT_APP_DEV_URL}${endpoint}`, config)
      .then(res => {
        return {
          status: true,
          data: res.data,
          errors: [],
        };
      })
      .catch(err => this._error_handle(err));
  }

  static async post(endpoint, params = {}) {
    // console.log(
    //   "endpoint, params",
    //   process.env.REACT_APP_DEV_URL ?? "https://be-ppe.codeby.com",
    //   endpoint,
    //   params
    // );
    const config = { ...this._get_config() };
    return await axios
      .post(
        `${process.env.REACT_APP_DEV_URL ?? 'https://be-ppe.codeby.com'}${endpoint}`,
        params,
        config
      )
      .then(res => {
        return {
          status: true,
          data: res.data,
          errors: [],
        };
      })
      .catch(err => this._error_handle(err));
  }

  static async put(endpoint, params = {}) {
    if (params instanceof FormData) {
      params.append('_method', 'put');
    } else {
      params._method = 'put';
    }
    const res = await this.post(endpoint, params);
    return res;
  }
}

export { restClient };
