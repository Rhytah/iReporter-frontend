import { RedflagsActionTypes } from '../../actions/redflags/actionTypes';

const initialState = {
  isFetching: true,
  data: [],
};

const redflagsReducer = (state = initialState, action) => {
  switch (action.type) {
    case RedflagsActionTypes.FETCH_REDFLAGS_IN_PROGRESS:
      return {
        ...state,
        isFetching: true,
      };
    case RedflagsActionTypes.FETCH_REDFLAGS_SUCCESS:
      return {
        ...state,
        data: action.payload || [],
        isFetching: false,
      };
    default:
      return state;
  }
};

export default redflagsReducer;
