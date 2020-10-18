import {
  DETAIL_STARSHIP_REQUEST,
  DETAIL_STARSHIP_SUCCESS,
  DETAIL_STARSHIP_FAILURE,
} from 'store/types'

const initialState = {
  isFetching: true,
  data: {},
  error: null,
}

export default function detail(state = initialState, action) {
  switch(action.type) {
    case DETAIL_STARSHIP_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: null,
        data: {},
      }
    case DETAIL_STARSHIP_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.data,
        error: null,
      }
    case DETAIL_STARSHIP_FAILURE: 
      return {
        ...state,
        isFetching: false,
        data: action.data,
        error: action.error,
      }
    default:
      return state
  }
}