import { getJsonFromFile } from './parseEnv';
import axios from 'axios';

const config = getJsonFromFile(`${process.env.DELETE_CONFIG}`);

export default async function makeRequest() {
  try {
    await axios.request(config);
  } catch (error) {
    console.log(error);
  }
}
