import { LOADING,
  SET_REQUEST_STATUS
} from 'constants/constants';

const initState = {
  loading: false,
  requestStatus: null,
  theme: 'light'
};

export default (state = initState, action) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: action.payload
      };
    case SET_REQUEST_STATUS:
      return {
        ...state,
        requestStatus: action.payload
      };
    default:
      return state;
  }
};
