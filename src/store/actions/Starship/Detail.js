import axios from 'axios'

import {
 DETAIL_STARSHIP_FAILURE,
 DETAIL_STARSHIP_REQUEST,
 DETAIL_STARSHIP_SUCCESS,
} from 'store/types'

export const detailStarshipRequest = () => ({
  type:DETAIL_STARSHIP_REQUEST,
})

export const detailStarshipSuccess = (data) => ({
  type:DETAIL_STARSHIP_SUCCESS,
  data,
})

export const detailStarshipFailure = error => ({
  type:DETAIL_STARSHIP_FAILURE,
  error,
})

export const fetchDetailStarship = (url) => {
  return (dispatch) => {
    dispatch(detailStarshipRequest())
    return axios.get(url).then(res => {
      if (res.data) {
        dispatch(detailStarshipSuccess(res.data))
      }
    }).catch(err => {
      dispatch(detailStarshipFailure(err))
    })
  }
}

