import { combineReducers } from 'redux'

import listStarship from './Starship/List'
import detailStarship from './Starship/Detail'

export default combineReducers({
  listStarship,
  detailStarship
})