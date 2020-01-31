import produce from 'immer'

/**
 * createReducer
 *
 * @param {Object} initialState
 * @param {Object} handlerMap
 * @return {function} reducer function
 */
export const createReducer = (initialState, handlerMap) => (
  state = initialState,
  action
) =>
  produce(state, draft => {
    const handler = handlerMap[action.type]
    if (handler) {
      handler(draft, action, state)
    }
  })
