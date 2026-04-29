import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const chatbotApi = createApi({
  reducerPath: 'chatbotApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '/api/'
  }),
  endpoints: (builder) => ({
    sendMessage: builder.mutation<{ reply: string }, { message: string }>({
      query: (body) => ({
        url: 'chat',
        method: 'POST',
        body
      })
    })
  })
})

export const { useSendMessageMutation } = chatbotApi
