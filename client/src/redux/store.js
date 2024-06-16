import { configureStore } from '@reduxjs/toolkit'
import userReducer from './auth/authSlice.js'

const store = configureStore({
  reducer: {
    auth:userReducer
  }
})
export default store;
