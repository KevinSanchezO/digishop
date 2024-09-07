import axios from "axios";

export const getDigimon = (digimonID) => {
    return axios.get(`https://digi-api.com/api/v1/digimon/${digimonID}`);
}