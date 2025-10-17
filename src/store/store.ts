import { api } from '@/services/api'
import { personalApi } from '@/services/personalApi'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    [personalApi.reducerPath]: personalApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware).concat(personalApi.middleware)
})
