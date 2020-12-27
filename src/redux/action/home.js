import Axios from 'axios';
import {API_HOST} from '../../config';
import {showMessage} from '../../utils';

export const getFoodData = () => (dispath) => {
  Axios.get(`${API_HOST.uri}/food`)
    .then((res) => {
      dispath({type: 'SET_FOOD', value: res.data.data.data});
    })
    .catch((err) => {
      showMessage(err?.response?.message || 'Terjadi Kesalahan');
    });
};

export const getFoodDataByTypes = (types) => (dispath) => {
  Axios.get(`${API_HOST.uri}/food?types=${types}`)
    .then((res) => {
      if (types === 'new_food') {
        dispath({type: 'SET_NEW_TASTE', value: res.data.data.data});
      }
      if (types === 'popular') {
        dispath({type: 'SET_POPULAR', value: res.data.data.data});
      }
      if (types === 'recommended') {
        dispath({type: 'SET_RECOMMENDED', value: res.data.data.data});
      }
    })
    .catch((err) => {
      showMessage(err?.response?.message || 'Terjadi Kesalahan');
    });
};
