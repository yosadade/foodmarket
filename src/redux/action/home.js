import Axios from 'axios';
import {API_HOST} from '../../config';

export const getFoodData = () => (dispath) => {
  Axios.get(`${API_HOST.uri}/food`)
    .then((res) => {
      console.log('res food', res.data.data.data);
      dispath({type: 'SET_FOOD', value: res.data.data.data});
    })
    .catch((err) => {
      console.log(err);
    });
};
