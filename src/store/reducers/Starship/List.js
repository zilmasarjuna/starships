import {
  LIST_STARSHIP_REQUEST,
  LIST_STARSHIP_SUCCESS,
  LIST_STARSHIP_FAILURE,
  SEARCH_STARSHIP_REQUEST,
  SCROLL_STARSHIP_REQUEST,
  SCROLL_STARSHIP_SUCCESS
} from 'store/types'

const initialState = {
  isFetching: true,
  data: [],
  error: null,
  next: null,
  type: LIST_STARSHIP_REQUEST
}

export default function list(state = initialState, action) {
  switch(action.type) {
    case LIST_STARSHIP_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: null,
        data: [],
        next: null,
        type: LIST_STARSHIP_REQUEST
      }
    case SEARCH_STARSHIP_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: null,
        data: [],
        type: SEARCH_STARSHIP_REQUEST
      }
    case LIST_STARSHIP_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.data.results,
        error: null,
        next: action.data.next ? action.data.next : null,
        type: LIST_STARSHIP_SUCCESS
      }
    case SCROLL_STARSHIP_REQUEST:
      return {
        ...state,
        error: null,
        next:  null,
        type: SCROLL_STARSHIP_REQUEST
      }
    case SCROLL_STARSHIP_SUCCESS:
      const data = [...state.data, ...action.data.results]
      return {
        ...state,
        data: data,
        next: action.data.next ? action.data.next : null,
        type: SCROLL_STARSHIP_SUCCESS
      }
    case LIST_STARSHIP_FAILURE: 
      return {
        ...state,
        isFetching: false,
        data: [],
        error: action.error,
        next: null,
        type: LIST_STARSHIP_FAILURE
      }
    default:
      return state
  }
}