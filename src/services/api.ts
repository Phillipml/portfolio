import { RepoType } from '@/types/RepoType'
import { UserType } from '@/types/UserType'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.github.com/users'
  }),
  endpoints: (builder) => ({
    getProfile: builder.query<UserType, string>({
      query: (username: string) => `/${username}`
    }),
    getUserRepo: builder.query<RepoType[], string>({
      query: (username: string) => `/${username}/repos`
    })
  })
})

export const { useGetProfileQuery, useGetUserRepoQuery } = api
