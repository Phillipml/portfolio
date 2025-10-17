import { List } from '@/types/List'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const personalApi = createApi({
  reducerPath: 'personalApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://phillipml-personal-api.vercel.app/'
  }),
  endpoints: (builder) => ({
    getRepo: builder.query<List[], void>({
      query: () => 'api/repos'
    })
  })
})
export const { useGetRepoQuery } = personalApi
