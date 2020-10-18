import {
  createStore,
  compose,
  applyMiddleware,
  combineReducers,
} from 'redux'

import { persistStore, persistReducer } from 'redux-persist'
import { createLogger } from 'redux-logger'
import { cacheEnhancer } from 'redux-cache'
import localForage from 'localforage'
import thunk from 'redux-thunk'
import rootReducer from './reducers'
import config from '../config'

const isDevelopment = config.node_env === 'development'

export const mainPersistConfig = {
  key: 'starship_app',
  storage: localForage,
  debug: isDevelopment,
  blacklist: ['listStarship']
}

const middleware = [thunk]

if (isDevelopment) {
  middleware.push(createLogger())
}

const reducers = combineReducers({
  starship_store: persistReducer(mainPersistConfig, rootReducer),
})

const enhancers = [applyMiddleware(...middleware)]
const persistConfig = { enhancers }
const store = createStore(reducers, undefined, compose(...enhancers, cacheEnhancer()))

const persistor = persistStore(store, persistConfig, () => {
  if (isDevelopment) {
    console.log(store.getState()) // eslint-disable-line no-console
  }
})

/* eslint-disable arrow-body-style */
const configureStore = () => {
  // uncomment this for clearing redux persistor storage
  // if (isDevelopment) {
  //   persistor.purge()
  // }

  return { persistor, store }
}
/* eslint-enable arrow-body-style */

export default configureStore
