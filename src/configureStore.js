import { createStore, applyMiddleware, compose } from 'redux'
import promiseMiddleware from 'redux-promise'
import reducer from './Reducers'

/**
 * Store
 * @param {Object} preloadedState
 * @return {Object} store
 */
export default function(preloadedState) {
  if (process.env.NODE_ENV === 'development') {
    // Use Redux DevTools Extension
    // https://github.com/zalmoxisus/redux-devtools-extension#1-for-chrome
    const composeEnhancers =
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    const store = createStore(
      reducer,
      composeEnhancers(applyMiddleware(promiseMiddleware))
    )
    return store
  }
  return createStore(
    reducer,
    preloadedState,
    applyMiddleware(promiseMiddleware)
  )
}
