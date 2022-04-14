import axios from "axios";

const request = axios.create({
  baseURL: "https://disease.sh/v3/covid-19",
});
request.defaults.timeout = 2500;
export const api = {
  getAllCovid: async () => {
    const response = await request.get("/all", {
      timeout: 5000,
    });
    return response.data;
  },
  getCovidCountry: async () => {
    const response = await request.get(`/countries`, {
      timeout: 5000,
    });
    return response.data;
  },
};
