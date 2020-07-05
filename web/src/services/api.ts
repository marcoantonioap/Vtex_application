import axios from "axios";
import { Credentials } from "../models";

const baseURL = "http://localhost:3333";
const api = axios.create();

export const login = async (credentials: Credentials) => {
  const response = await api.post(`${baseURL}/login`, credentials);
  const token = response.data ? `Bearer ${response.data.accessToken}` : "";
  return { store: response?.data.store, token };
};

export const get = async (endPoint: string, token: string) => {
  return api.get(`${baseURL}${endPoint}`, {
    headers: { authorization: token },
  });
};

export const post = async (data: {}, endPoint: string, token: string) => {
  await api.post(`${baseURL}${endPoint}`, data, {
    headers: { autorization: token },
  });
  return true;
};
