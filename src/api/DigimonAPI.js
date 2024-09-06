import axios from "axios";

const baseURL = "digi-api.com/api/v1/digimon/"

export const getDigimon = () => {
    return axios.get(`https://digi-api.com/api/v1/digimon/${33}`);
}