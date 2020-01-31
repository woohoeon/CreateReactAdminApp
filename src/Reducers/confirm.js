import { createReducer } from '../redux'
import { OPEN_CONFIRM, CLOSE_CONFIRM } from '../Actions/confirm'

const initialState = {
  isOpen: false,
  proceed: f => f,
  messages: ['confirm']
}

const handlerMap = {
  [OPEN_CONFIRM]: (draft, action) => {
    draft.isOpen = true
    draft.proceed = action.payload.proceed || initialState.proceed
    draft.messages = action.payload.messages || initialState.messages
  },
  [CLOSE_CONFIRM]: draft => {
    draft.isOpen = false
  }
}

export default createReducer(initialState, handlerMap)
