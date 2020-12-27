import Axios from 'axios';
import {API_HOST} from '../../config';
import {getData, showMessage} from '../../utils';

export const getPastOrders = () => (dispatch) => {
  getData('token').then((resToken) => {
    Axios.all([
      Axios.get(`${API_HOST.uri}/transaction?status=CANCELLED`, {
        headers: {
          Authorization: resToken.value,
        },
      }),
      Axios.get(`${API_HOST.uri}/transaction?status=DELIVERED`, {
        headers: {
          Authorization: resToken.value,
        },
      }),
    ])
      .then((res1, res2) => {
        // console.log('token in progress', resToken.value);
        console.log('get past order 1', res1.data);
        console.log('get past order 2', res2.data);
        const cancelled = res1.data.data.data;
        const delivered = res2.data.data.data;
        dispatch({
          type: 'SET_PAST_ORDERS',
          value: [...cancelled, ...delivered],
        });
      })
      .catch((err) => {
        console.log('error', err);
      });
  });
};

// 16258782510

// 9881625821354435

// 70012
// 945069446257

export const getInProgress = () => (dispatch) => {
  getData('token').then((resToken) => {
    Axios.all([
      Axios.get(`${API_HOST.uri}/transaction?status=PENDING`, {
        headers: {
          Authorization: resToken.value,
        },
      }),
      Axios.get(`${API_HOST.uri}/transaction?status=SUCCESS`, {
        headers: {
          Authorization: resToken.value,
        },
      }),
      Axios.get(`${API_HOST.uri}/transaction?status=ON_DELIVERY`, {
        headers: {
          Authorization: resToken.value,
        },
      }),
    ])
      .then(
        Axios.spread((res1, res2, res3) => {
          const pending = res1.data.data.data;
          const success = res2.data.data.data;
          const onDelivery = res3.data.data.data;
          dispatch({
            type: 'SET_IN_PROGRESS',
            value: [...pending, ...success, ...onDelivery],
          });
        }),
      )
      .catch((err) => {
        showMessage(
          `${err?.response?.data?.message} on In Progress API` ||
            'Terjadi Kesalahan di In Progress API',
        );
      });
  });
};

export const getOrders = () => (dispatch) => {
  getData('token').then((resToken) => {
    Axios.get(`${API_HOST.uri}/transaction`, {
      headers: {
        Authorization: resToken.value,
      },
    })
      .then((res) => {
        console.log('get orders', res.data);
        dispatch({type: 'SET_ORDER', value: res.data.data.data});
      })
      .catch((err) => {
        console.log('error', err);
      });
  });
};
