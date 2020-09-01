import axios from "axios";

export function getApplications() {
  // return axios.get(process.env.API_URL + "/api/applications");
  return axios.get("https://landscape.qual.eks.dartagnan.io/api/applications");
  // return axios.get("http://localhost:8080/api/applications");
}
