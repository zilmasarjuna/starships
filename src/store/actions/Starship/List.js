import axios from 'utils/API';
import fetch from 'axios';
import {
  LIST_STARSHIP_FAILURE,
  LIST_STARSHIP_REQUEST,
  LIST_STARSHIP_SUCCESS,
  SEARCH_STARSHIP_REQUEST,
  SCROLL_STARSHIP_REQUEST,
  SCROLL_STARSHIP_SUCCESS
} from 'store/types'

export const listStarshipRequest = () => ({
  type: LIST_STARSHIP_REQUEST,
})

export const searchStarshipRequest = () => ({
  type: SEARCH_STARSHIP_REQUEST,
})

export const scrollStarshipRequest = () => ({
  type: SCROLL_STARSHIP_REQUEST,
})

export const scrollStarshipSuccess = (data) => ({
  type: SCROLL_STARSHIP_SUCCESS,
  data,
})

export const listStarshipSuccess = (data) => ({
  type: LIST_STARSHIP_SUCCESS,
  data,
})

export const listStarshipFailure = error => ({
  type: LIST_STARSHIP_FAILURE,
  error,
})

export const fetchListStarship = ({ page = 1 } = {}) => {
  return (dispatch) => {
    dispatch(listStarshipRequest())

    return axios.get(`/starships?page=${page}`).then(res => {
      if (res.status === 200) {
        dispatch(listStarshipSuccess(res.data))
      } else {
        dispatch(listStarshipFailure('Not found'))  
      }
    }).catch(err => {
      dispatch(listStarshipFailure(err))
    })
  }
}

export const searchListStarship = ({ s = '' }) => {
  return (dispatch) => {
    dispatch(searchStarshipRequest())

    return axios.get(`/starships?search=${s}`).then(res => {
      if (res.status === 200) {
        dispatch(listStarshipSuccess(res.data))
      } else {
        dispatch(listStarshipFailure(res.data))  
      }
    }).catch(err => {
      dispatch(listStarshipFailure(err))
    })
  }
}

export const fetchMore = ({url}) => {
  return (dispatch) => {
    dispatch(scrollStarshipRequest())

    return fetch.get(`${url}`).then(res => {
      if (res.status === 200) {
        dispatch(scrollStarshipSuccess(res.data))
      }
    }).catch(err => {
      dispatch(listStarshipFailure(err))
    })
  }
}


