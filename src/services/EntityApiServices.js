import axios from "axios";
import utils from "../utils/env";

class API {
  constructor(baseURL, token) {
    this.client = axios.create({
      baseURL: baseURL,
      headers: {
        "Content-Type": "application/json",
        ...(token && { Authorization: token }),
      },
    });
  }

  async get(url, params) {
    try {
      const response = await this.client.get(url, { params });
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  async post(url, data) {
    try {
      const response = await this.client.post(url, data);
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  async put(url, data) {
    try {
      const response = await this.client.put(url, data);
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  async delete(url) {
    try {
      const response = await this.client.delete(url);
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  handleError(error) {
    // You can define your custom error handling logic here
    throw error;
  }
}
export const publicAPI = new API(utils.api_url); // eslint-disable-line

export const authAPI = new API(
  utils.api_url, // eslint-disable-line
  localStorage.getItem("token") || ""
);

export default API;
