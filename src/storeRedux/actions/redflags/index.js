import axios from 'axios';
import { RedflagsActionTypes } from './actionTypes';

const fetchRedflagsUrl = 'https://ireporter-backend-rhytah.herokuapp.com/api/v2/red-flags/';
const fetchRedflags = () => (dispatch) => {
  dispatch({
    type: RedflagsActionTypes.FETCH_REDFLAGS_IN_PROGRESS,
  });
  return axios.get(fetchRedflagsUrl).then((response) => {
    console.log('==============>', response.data.data);

    dispatch({
      type: RedflagsActionTypes.FETCH_REDFLAGS_SUCCESS,
      payload: response.data.data,
    });
  });
};
export default fetchRedflags;
