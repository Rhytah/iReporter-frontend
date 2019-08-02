import { RegistrationConstants } from '../../actions/auth/actionTypes';

const initialState = {};
export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case RegistrationConstants.REGISTER_SUCCESS:
      return Object.assign({}, state, action.payload, { registered: true }, { registering: false });
    case RegistrationConstants.REGISTER_FAILURE:
      return Object.assign(
        {},
        state,
        action.payload,
        { registered: false },
        { registering: false },
      );
    case RegistrationConstants.REGISTER_REQUEST:
      return { registering: true };

    default:
      return state;
  }
}
