import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.github.com/users'
  }),
  endpoints: (builder) => ({
    getProfile: builder.query({
      query: (username: string) => `/${username}`
    })
  })
})

export const { useGetProfileQuery } = api
