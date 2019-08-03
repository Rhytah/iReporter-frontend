import { RedflagsActionTypes } from '../../actions/redflags/actionTypes';
import { initialRedflagState } from '../initialState';

const redflagsReducer = (state = initialRedflagState, action) => {
  switch (action.type) {
    case RedflagsActionTypes.FETCH_REDFLAGS_IN_PROGRESS:
      return {
        ...state,
        isFetching: true,
      };
    case RedflagsActionTypes.FETCH_REDFLAGS_SUCCESS:
      return {
        ...state,
        redflags: action.payload,
        isFetching: false,
      };
    default:
      return state;
  }
};

export default redflagsReducer;
