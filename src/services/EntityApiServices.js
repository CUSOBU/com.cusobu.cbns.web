import axios from "axios";

class API {
  constructor(baseURL) {
    this.client = axios.create({
      baseURL: baseURL,
      headers: {
        "Content-Type": "application/json",
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
      return response;
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

// eslint-disable-next-line
export default new API("https://6375718c48dfab73a4f9408b.mockapi.io/api/v1/"); 
