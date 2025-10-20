import { RepoType, Profile } from '@/types/apiTypes'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const api = createApi({
  reducerPath: 'personalApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://phillipml-personal-api.vercel.app/'
  }),
  endpoints: (builder) => ({
    getUser: builder.query<Profile, void>({
      query: () => 'api/profile'
    }),
    getRepo: builder.query<RepoType[], void>({
      query: () => 'api/repos'
    }),
    getRepoById: builder.query<RepoType, string>({
      query: (id: string) => `api/repos/${id}`
    })
  })
})
export const { useGetUserQuery, useGetRepoQuery, useGetRepoByIdQuery } = api
