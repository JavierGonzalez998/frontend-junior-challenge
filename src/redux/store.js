import { configureStore } from '@reduxjs/toolkit'
import tasksReducer from './states/task'

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
})