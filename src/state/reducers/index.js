import {combineReducers } from 'redux'
import moneyReducer from './moneyReducer'

const reducers = combineReducers({
money : moneyReducer
})

export default reducers